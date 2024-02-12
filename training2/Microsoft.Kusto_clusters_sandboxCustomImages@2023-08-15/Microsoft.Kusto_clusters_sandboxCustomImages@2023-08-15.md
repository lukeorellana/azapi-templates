```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/sandboxCustomImages@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      language = "Python"
      languageVersion = "string"
      requirementsFileContent = "string"
    }
  })
}

```

### clusters/sandboxCustomImages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | A sandbox custom image. | SandboxCustomImageProperties |


### SandboxCustomImageProperties

| Name | Description | Value |
|-|-|-|
| language | The language name, for example Python. | 'Python' (required) |
| languageVersion | The version of the language. | string (required) |
| requirementsFileContent | The requirements file content. | string |


