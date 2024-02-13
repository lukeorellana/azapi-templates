import requests
from bs4 import BeautifulSoup
import re
import os
import csv

# Function to read URLs from a CSV file
def read_urls_from_csv(file_path):
    urls = []
    with open(file_path, mode='r', newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            urls.append(row['URL'])
    return urls

def ensure_directory_exists(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)
    print(f"Directory '{directory}' is ready.")

def fetch_and_parse_url(url):
    print(f"Fetching webpage for {url}...")
    response = requests.get(url)
    if response.status_code == 200:
        print("Webpage fetched successfully!")
        soup = BeautifulSoup(response.text, 'html.parser')
        return soup, extract_tables(soup)  # Keep extracting tables as before
    else:
        print(f"Failed to fetch webpage. Status code: {response.status_code}")
        return None, []  # Return None for soup and empty list for tables if failure

def extract_code_snippets_and_types(soup):
    print("Extracting code snippets and types...")
    snippets = soup.find_all('code')  # Adjust this based on the actual structure of your web pages
    extracted_snippets = []  # This will hold dictionaries of snippets and their types
    for snippet in snippets:
        # Check if the snippet contains "resource \"azapi_resource\""
        print(snippet)
        if 'resource "azapi_resource"' in snippet.text:
            match = re.search(r'type\s*=\s*"([^"]+)"', snippet.text)
            if match:
                type_value = match.group(1)
                print(f"Found type: {type_value}")
                # Only replace '/' with '_' and keep everything else as is
                sanitized_type_value = type_value.replace('/', '_')
                # Store snippet text and type in a dictionary if it contains "resource \"azapi_resource\""
                extracted_snippets.append({'text': snippet.text, 'type': sanitized_type_value})
            else:
                print("Type value not found in snippet.")
        else:
            print("Snippet does not contain 'resource \"azapi_resource\"'. Skipping...")
    return extracted_snippets


def extract_tables(soup):
    print("Searching for the 'Property values' section...")
    values_section = soup.find(['h2', 'h3'], text=re.compile('Property values'))
    markdown_tables = []
    if values_section:
        print("Found the 'Property values' section. Extracting tables...")
        last_header = None  # Track the last header encountered
        # Find all tables following the Property values header
        for sibling in values_section.find_next_siblings():
            if sibling.name in ['h2', 'h3']:
                last_header = sibling.text  # Update last header when a new one is found
            elif sibling.name == 'table':
                print("Found a table. Converting to markdown...")
                table_markdown = convert_table_to_markdown(sibling)
                if last_header:
                    # Prepend the last header to the table markdown
                    header_markdown = f"### {last_header}\n\n"
                    table_markdown = header_markdown + table_markdown
                markdown_tables.append(table_markdown)
                print("Table converted to markdown and added to the list.")
                last_header = None  # Reset last header to avoid reusing it for the next table
    else:
        print("The 'Property values' section was not found. No tables extracted.")
    if markdown_tables:
        print(f"Total tables extracted and converted: {len(markdown_tables)}")
    else:
        print("No tables were extracted.")
    return markdown_tables



def convert_table_to_markdown(table):
    headers = [th.get_text(strip=True) for th in table.find_all('th')]
    rows = []
    for tr in table.find_all('tr')[1:]:  # Skip header row
        cells = [td.get_text(strip=True) for td in tr.find_all('td')]
        rows.append(cells)
    # Format as markdown table
    markdown = '| ' + ' | '.join(headers) + ' |\n' + '|-' * len(headers) + '|\n'  # Header separator
    for row in rows:
        markdown += '| ' + ' | '.join(row) + ' |\n'
    return markdown

def append_unique_snippets_to_file(filename, extracted_snippets, markdown_tables):
    # Read existing content if file exists
    existing_content = ''
    if os.path.exists(filename):
        with open(filename, 'r') as file:
            existing_content = file.read()

    # Append only new snippets
    with open(filename, 'a') as file:
        for snippet in extracted_snippets:
            snippet_content = snippet['text']
            if snippet_content not in existing_content:
                file.write(f"```terraform\n{snippet_content}\n```\n\n")
                if markdown_tables:
                    # Assuming markdown_tables is a list of markdown table strings
                    for table in markdown_tables:
                        file.write(f"{table}\n\n")
                print(f"Appended new snippet to {filename}.")
            else:
                print("Snippet already exists in the file. Skipping...")


def group_and_write_markdown(extracted_snippets, tables, base_directory='../.training'):
    for snippet_dict in extracted_snippets:
        type_value = snippet_dict['type']
        # Split the type_value into parts to safely handle service, resource type, and version
        parts = type_value.split('/')
        if len(parts) > 1:
            service_resource = parts[0]
            resource_and_version = parts[1].split('@') if '@' in parts[1] else [parts[1], "latest"]
            resource_type = resource_and_version[0]
            version = resource_and_version[1]
        else:
            # Fallback if the type_value does not follow the expected format
            service_resource = parts[0]
            resource_type = "unknown"
            version = "latest"

        # Construct the service name and directory name
        service_name = service_resource.split('_')[0]
        directory_name = f"{service_name}"

        # Ensure version is correctly formatted or defaults to "latest"
        formatted_version = version.replace("-", "_") if version and version != "latest" else "latest"
        formatted_filename = f"{service_resource}@{formatted_version}.md"

        if service_name.startswith("Microsoft"):  # Ensure it starts with "Microsoft"
            directory = os.path.join(base_directory, directory_name)
            ensure_directory_exists(directory)  # Ensure the directory exists
            filename = os.path.join(directory, formatted_filename)
            append_unique_snippets_to_file(filename, [snippet_dict], tables)
        else:
            print(f"Skipping {directory_name} as it does not conform to expected formatting.")


def main():
    csv_file_path = 'azure_template_links.csv'  # Adjust to your CSV file path
    urls = read_urls_from_csv(csv_file_path)
    for url in urls:
        soup, tables = fetch_and_parse_url(url)
        if soup:
            extracted_snippets = extract_code_snippets_and_types(soup)  # Just get the single list of dicts
            if extracted_snippets:
                # Since extracted_snippets now contains both snippets and their types within each dict,
                # you don't need to pass type_values separately
                group_and_write_markdown(extracted_snippets, tables, base_directory='../.training')
            else:
                print("No valid snippets to process for this URL.")


if __name__ == '__main__':
    main()