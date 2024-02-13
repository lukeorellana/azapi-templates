from openai import OpenAI
import os
from pathlib import Path

# Ensure your OPENAI_API_KEY environment variable is set
client = OpenAI(
  api_key=os.environ['OPENAI_API_KEY'],  # this is also the default, it can be omitted
)

# Function to read TypeScript file content
def read_typescript_file(file_path):
    with open(file_path, 'r') as file:
        return file.read()

# Function to send content to OpenAI API and get the fixed TypeScript code using GPT-4 Turbo
def fix_typescript_with_openai(content):
    print(content)
    response = client.chat.completions.create(
        model="gpt-4-turbo-preview",
        messages=[
            {
                "role": "user",
                "content": f"Fix typescript incompatible types in the interface and in the line under return JSON.stringify( update the values in quotes with their matching interface props attribute. After this,  If there is an interface attribute that isnt being referenced in the class then remove it. Only respond with the code: {content}"
            }
        ],
        temperature=0.7,
        max_tokens=4096,
        top_p=0.5,
        frequency_penalty=0,
        presence_penalty=0
    )
    # Extract the response text assuming the response format aligns with chat-based completions
    return response.choices[0].message.content
   

# Function to save fixed TypeScript file
def save_fixed_typescript(original_path, content):
    new_path = Path('../src') / original_path.name
    os.makedirs(new_path.parent, exist_ok=True)  # Ensure the src/ directory exists
    with open(new_path, 'w') as file:
        file.write(content)

def main():
    # Specify the path to your TypeScript file here
    ts_file_path = Path('../.training/Microsoft.ServiceBus_namespaces_disasterRecoveryConfigs@2022-10-01-preview/Microsoft.ServiceBus_namespaces_disasterRecoveryConfigs@2022-10-01-preview.ts')  # Adjust this path as necessary

    if not os.environ['OPENAI_API_KEY']:
        print("OpenAI API key is not set. Please set the OPENAI_API_KEY environment variable.")
        return

    # Reading TypeScript file
    ts_content = read_typescript_file(ts_file_path)

    # Fixing TypeScript with OpenAI using GPT-4 Turbo
    fixed_content = fix_typescript_with_openai(ts_content)

    # Saving the fixed TypeScript
    save_fixed_typescript(ts_file_path, fixed_content)

    print(f"Fixed TypeScript file has been saved to: {Path('../src') / ts_file_path.name}")

if __name__ == "__main__":
    main()
