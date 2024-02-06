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
        return soup, extract_tables(soup)  # Also return tables found
    else:
        print(f"Failed to fetch webpage. Status code: {response.status_code}")
        return None, []  # Return None for soup and empty list for tables if failure

def extract_code_snippets(soup):
    print("Extracting code snippets...")
    snippets = soup.find_all('code', class_='lang-terraform')  # Adjust based on actual structure
    if snippets:
        print(f"Found {len(snippets)} snippets.")
    else:
        print("No snippets found. Check if the class name is correct.")
    return snippets

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

def append_unique_snippets_to_file(filename, new_snippets, markdown_tables):
    # Read existing content if file exists
    existing_content = ''
    if os.path.exists(filename):
        with open(filename, 'r') as file:
            existing_content = file.read()

    # Append only new snippets
    with open(filename, 'a') as file:
        for snippet in new_snippets:
            snippet_content = snippet['text']
            snippet_header = f"## {snippet['type']}\n\n"
            full_snippet = snippet_header + f'```terraform\n{snippet_content}\n```\n\n'
            if markdown_tables:
                full_snippet += "\n\n".join(markdown_tables)  # Append tables at the bottom
            if full_snippet not in existing_content:
                file.write(full_snippet)
                print(f"Appended new snippet and tables to {filename}.")
            else:
                print("Snippet already exists in the file. Skipping...")

def group_and_write_markdown(snippets, tables, directory='docs'):
    ensure_directory_exists(directory)  # Ensure the directory exists
    snippets_dict = {}
    for snippet in snippets:
        if "resource \"azapi_resource\"" in snippet.text:
            type_match = re.search(r'type\s*=\s*"([^"]+)"', snippet.text)
            if type_match:
                full_type = type_match.group(1)
                base_resource_type, _, date_part = full_type.partition('@')
                base_resource_type = base_resource_type.split('/')[0]  # Extract base resource type
                if base_resource_type not in snippets_dict:
                    snippets_dict[base_resource_type] = []
                snippets_dict[base_resource_type].append({'type': full_type, 'text': snippet.text})
            else:
                print("Resource type not found in snippet. Check the regex pattern or snippet format.")
        else:
            print("Snippet does not contain 'resource \"azapi_resource\"'. Skipping...")

    # Write or append grouped snippets to markdown files
    for base_resource_type, new_snippets in snippets_dict.items():
        sanitized_resource_type = base_resource_type.replace('.', '_').replace('/', '_').replace(':', '_').replace('@', '_')
        filename = os.path.join(directory, f"{sanitized_resource_type}.md")
        append_unique_snippets_to_file(filename, new_snippets, tables)

def main():
    csv_file_path = 'azure_template_links.csv'  # Adjust to your CSV file path
    urls = read_urls_from_csv(csv_file_path)
    for url in urls:
        soup, tables = fetch_and_parse_url(url)
        if soup:
            snippets = extract_code_snippets(soup)
            if snippets:
                group_and_write_markdown(snippets, tables)
            else:
                print("No valid snippets to process for this URL.")

if __name__ == '__main__':
    main()
