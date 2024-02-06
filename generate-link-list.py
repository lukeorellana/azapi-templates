import requests
import csv
import re

def fetch_json(url):
    print(f"Fetching JSON data from {url}")
    response = requests.get(url)
    response.raise_for_status()  # Raises an HTTPError if the response status code is 4XX or 5XX
    return response.json()

def should_omit_url(path):
    # Adjusted pattern to detect "preview" more reliably in the URL
    omit_pattern = re.compile(r'(/\d{4}-\d{2}-\d{2})|(/preview)')
    return omit_pattern.search(path) is not None


def extract_links_from_items(items, base_url):
    print("Extracting links from items...")
    links = []
    for item in items:
        if 'href' in item:
            if not should_omit_url(item['href']):
                full_link = f"{base_url}{item['href']}?pivots=deployment-language-terraform"
                print(f"Adding link: {full_link}")
                links.append([full_link])
            else:
                print(f"Omitting link due to date or preview in path: {item['href']}")
        if 'children' in item:
            links.extend(extract_links_from_items(item['children'], base_url))
    return links

def save_links_to_csv(links, file_path):
    print(f"Saving links to CSV file: {file_path}")
    with open(file_path, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(['URL'])  # Column header
        writer.writerows(links)

def main():
    url = 'https://learn.microsoft.com/en-us/azure/templates/toc.json'
    base_url = 'https://learn.microsoft.com/en-us/azure/templates/'
    json_data = fetch_json(url)

    print("Looking for the Reference section...")
    reference_items = json_data['items'][2]['children']  # Assuming the reference section is always at this location
    links = extract_links_from_items(reference_items, base_url)

    csv_file_path = 'azure_template_links.csv'
    save_links_to_csv(links, csv_file_path)
    print(f"Completed. Links saved to {csv_file_path}")

if __name__ == "__main__":
    main()