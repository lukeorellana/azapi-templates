import os
import shutil

def delete_dirs_without_main_tf(parent_dir):
    # List all items in the given parent directory
    for item in os.listdir(parent_dir):
        item_path = os.path.join(parent_dir, item)
        # Check if the item is a directory
        if os.path.isdir(item_path):
            # Check if 'main.tf' exists in this directory
            main_tf_path = os.path.join(item_path, 'main.tf')
            if not os.path.exists(main_tf_path):
                # Delete the directory because 'main.tf' does not exist
                print(f"Deleting directory: {item_path}")
                shutil.rmtree(item_path)
            else:
                print(f"'main.tf' found in {item_path}. Directory kept.")
        else:
            print(f"{item_path} is not a directory.")

# Specify the parent directory path
parent_directory = "../.training"
delete_dirs_without_main_tf(parent_directory)
