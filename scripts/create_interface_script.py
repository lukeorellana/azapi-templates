import re
import os

def parse_markdown_for_properties(markdown_content):
    properties = []
    in_table = False
    omitted_properties = ['name', 'tags', 'location', 'properties']

    for line in markdown_content.splitlines():
        if line.startswith('| Name | Description | Value |'):
            in_table = True
        elif line.startswith('|-'):
            continue  # Skip the header separator
        elif in_table and line.startswith('|'):
            # More robust splitting to handle additional '|' in descriptions or values
            parts = re.match(r'\|([^|]+)\|([^|]+)\|([^|]+)\|', line.strip())
            if parts:
                name, description, value = parts.groups()
                name = name.strip()
                if name.lower() in omitted_properties:
                    continue  # Skip omitted properties
                required = "(required)" in value
                optional_marker = '?' if not required else ''
                prop_type = value.replace('(required)', '').strip().replace('int', 'number')
                properties.append(f"/**\n   * {description.strip()}\n   */\nreadonly {name}{optional_marker}: {prop_type};")
        elif in_table and not line.startswith('|'):
            in_table = False

    return '\n\n'.join(properties)

def modify_typescript_file(ts_file_path, combined_properties):
    with open(ts_file_path, 'r') as file:
        lines = file.readlines()

    if len(lines) >= 10:
        if not lines[9].strip():  # Check if line 10 is empty
            lines[9] = combined_properties + '\n'
        else:
            print(f"Line 10 of {ts_file_path} already contains content. Skipping modification.")
    else:
        print(f"The TypeScript file {ts_file_path} has less than 10 lines. Cannot insert properties at line 10.")

    with open(ts_file_path, 'w') as file:
        file.writelines(lines)

def process_markdown_file(markdown_path):
    with open(markdown_path, 'r', encoding='utf-8') as md_file:
        markdown_content = md_file.read()

    combined_properties = parse_markdown_for_properties(markdown_content)
    ts_file_path = markdown_path.rsplit('.', 1)[0] + '.ts'
    modify_typescript_file(ts_file_path, combined_properties)

def crawl_directory_and_process(directory_path):
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            if file.endswith(".md"):
                markdown_path = os.path.join(root, file)
                print(f"Processing: {markdown_path}")
                process_markdown_file(markdown_path)

if __name__ == "__main__":
    directory_path = "../.training"  # Adjust as necessary
    crawl_directory_and_process(directory_path)
