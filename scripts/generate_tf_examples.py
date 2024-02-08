import subprocess
import shutil
import os

REPO_URL = "https://github.com/Azure/terraform-provider-azapi.git"
TEMP_DIR = "temp_repo"
LOCAL_DIR = "../.training"  # Adjust this path as necessary
TARGET_DIR_RELATIVE_PATH = "examples"  # Relative path to the target directory within the repo

def clone_repo(repo_url, temp_dir):
    """Clone a git repository into a temporary directory."""
    subprocess.run(["git", "clone", repo_url, temp_dir], check=True)

def copy_files_if_exists(source_dir, target_dir):
    """Copy main.tf files from source to target directory if they match."""
    for dir_name in os.listdir(source_dir):
        source_path = os.path.join(source_dir, dir_name, "main.tf")
        target_path = os.path.join(target_dir, dir_name, "main.tf")
        if os.path.exists(source_path) and os.path.isdir(os.path.join(target_dir, dir_name)):
            shutil.copy2(source_path, target_path)
            print(f"Copied: {source_path} to {target_path}")

def delete_temp_dir(temp_dir):
    """Delete the temporary directory."""
    shutil.rmtree(temp_dir, ignore_errors=True)
    print(f"Deleted temporary directory: {temp_dir}")

def main():
    temp_dir_path = os.path.join(os.getcwd(), TEMP_DIR)
    clone_repo(REPO_URL, temp_dir_path)
    examples_dir_path = os.path.join(temp_dir_path, TARGET_DIR_RELATIVE_PATH)
    local_dir_path = os.path.abspath(LOCAL_DIR)

    if os.path.exists(examples_dir_path):
        copy_files_if_exists(examples_dir_path, local_dir_path)
    else:
        print(f"Directory does not exist: {examples_dir_path}")

    delete_temp_dir(temp_dir_path)

if __name__ == "__main__":
    main()
