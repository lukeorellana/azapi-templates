import hcl2
import re
import os

def parse_terraform_from_markdown(markdown_path):
    """Extracts Terraform code block from a Markdown file."""
    with open(markdown_path, 'r', encoding='utf-8') as md_file:
        content = md_file.read()

    # Extract Terraform code block
    tf_code = re.search(r"```terraform(.+?)```", content, re.DOTALL)
    if not tf_code:
        raise ValueError("No Terraform code block found in the Markdown file.")
    
    return tf_code.group(1)

def parse_hcl2(tf_code):
    """Parses Terraform code and returns type and body values of azapi_resource."""
    try:
        parsed = hcl2.loads(tf_code)
        for resource in parsed.get('resource', []):
            if 'azapi_resource' in resource:
                for _, azapi_resource in resource['azapi_resource'].items():
                    resource_type = azapi_resource.get('type', '')
                    body = azapi_resource.get('body', '{}')  # Provide an empty JSON object as default
                    return resource_type, body
        raise ValueError("azapi_resource not found in the Terraform code.")
    except Exception as e:
        print(f"Error parsing HCL2: {e}")
        return '', '{}'

def format_class_name(resource_type):
    """Formats class name based on the resource type."""
    parts = re.sub(r"^Microsoft\.", "", resource_type).split('/')
    class_name = ''.join(part.title() for part in '/'.join(parts).split('@')[0].split('/'))
    class_name = re.sub(r"\.", "", class_name)  # Remove any remaining dots
    return class_name

def convert_json_to_typescript(json_like_str):
    """Converts a JSON-like string to a TypeScript properties format."""
    json_like_str = json_like_str.strip("()")

    # Remove double quotes around keys and convert JSON-like structure to TypeScript interface properties
    ts_format_str = re.sub(r'\"([a-zA-Z0-9_]+)\"(\s*:\s*)', r'\1\2', json_like_str)

    # Replace "0" with int for specific fields
    ts_format_str = re.sub(r':\s*"0"', ': int', ts_format_str)

    return ts_format_str

def parse_hcl_body_to_typescript(hcl_body):
    """Converts HCL body contents to TypeScript-ready format."""
    body_content = hcl_body.strip()[len("jsonencode({"):-1].strip()
    ts_ready_body = body_content.replace(" = ", ": ").replace("'", '"')

    return convert_json_to_typescript(ts_ready_body)

def create_typescript_file(ts_file_path, class_name, resource_type, hcl_body):
    """Generates a TypeScript file from the provided template with specified values."""
    body_processed = parse_hcl_body_to_typescript(hcl_body)

    ts_template = f"""import {{ Construct }} from "constructs";
import {{ AzAPIBase, IAzAPIBaseProps }} from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface {class_name}Props extends IAzAPIBaseProps {{

}}

/**
 * {class_name} resource
 */
export class {class_name} extends AzAPIBase {{
  constructor(scope: Construct, id: string, props: {class_name}Props) {{
    super(scope, id, props);
  }}

  protected getResourceType(): string {{
    return "{resource_type}";
  }}

  protected getResourceBody(props: {class_name}Props): string {{
    return JSON.stringify(
        {body_processed}
    );
  }}
}}
"""
    with open(ts_file_path, 'w') as ts_file:
        ts_file.write(ts_template)

def main(markdown_path):
    tf_code = parse_terraform_from_markdown(markdown_path)
    resource_type, body = parse_hcl2(tf_code)
    class_name = format_class_name(resource_type)
    ts_file_path = os.path.splitext(markdown_path)[0] + '.ts'
    create_typescript_file(ts_file_path, class_name, resource_type, body)
    print(f"TypeScript file generated at {ts_file_path}")

def process_directory(directory):
    """Process each markdown file in the given directory."""
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                markdown_path = os.path.join(root, file)
                print(f"Processing: {markdown_path}")
                try:
                    main(markdown_path)
                except ValueError as e:
                    print(f"Error processing {markdown_path}: {e}")

if __name__ == "__main__":
    directory_path = "../.training"  # Adjust this path as necessary
    process_directory(directory_path)
