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
    else:
        print(f"Failed to fetch webpage. Status code: {response.status_code}")
        return None  # Return None to indicate failure
    soup = BeautifulSoup(response.text, 'html.parser')
    return soup

def extract_code_snippets(soup):
    print("Extracting code snippets...")
    snippets = soup.find_all('code', class_='lang-terraform')  # Adjust based on actual structure
    if snippets:
        print(f"Found {len(snippets)} snippets.")
    else:
        print("No snippets found. Check if the class name is correct.")
    return snippets

def append_unique_snippets_to_file(filename, new_snippets):
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
            if full_snippet not in existing_content:
                file.write(full_snippet)
                print(f"Appended new snippet to {filename}.")
            else:
                print("Snippet already exists in the file. Skipping...")

def group_and_write_markdown(snippets, directory='docs'):
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
        append_unique_snippets_to_file(filename, new_snippets)

def main():
    csv_file_path = 'azure_template_links.csv'  # Adjust to your CSV file path
    urls = read_urls_from_csv(csv_file_path)
    for url in urls:
        soup = fetch_and_parse_url(url)
        if soup:
            snippets = extract_code_snippets(soup)
            if snippets:
                group_and_write_markdown(snippets)
            else:
                print("No valid snippets to process for this URL.")

if __name__ == '__main__':
    main()
