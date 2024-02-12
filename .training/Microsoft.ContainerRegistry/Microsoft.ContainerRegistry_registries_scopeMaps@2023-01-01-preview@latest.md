```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/scopeMaps@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actions = [
        "string"
      ]
      description = "string"
    }
  })
}

```

### registries/scopeMaps

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of the scope map. | ScopeMapProperties |


### ScopeMapProperties

| Name | Description | Value |
|-|-|-|
| actions | The list of scoped permissions for registry artifacts.E.g. repositories/repository-name/content/read,repositories/repository-name/metadata/write | string[] (required) |
| description | The user friendly description of the scope map. | string |


