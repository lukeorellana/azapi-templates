# Workflow Order

## Generate CSV with links from Azure Documentation Site
```python
python generate-link-list.py
```

## Query URLs from CSV and extract AzAPI code snippet and tables from web page
```python
pip install requests
pip install beautifulsoup4
python azure_snippets_extractor.py
```

## Temporarily clones AzAPI provider github and copies examples to each folder
```python
python generate_tf_examples.py
```

## Look at each markdown file and auto generates Typescript
```python
python generate_typescript.py
```


## Generate the Interface for each class in typescript
```python
create_interface_script.py
```

## Call openAI script to look at each typescript file and fill in interface
```python
pip install openai
export OPENAI_API_KEY='your_openai_api_key_here'
python check_typescript_with_llm.py
```