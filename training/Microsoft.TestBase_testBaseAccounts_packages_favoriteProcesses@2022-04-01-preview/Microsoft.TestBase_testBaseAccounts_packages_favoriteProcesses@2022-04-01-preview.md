```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TestBase/testBaseAccounts/packages/favoriteProcesses@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actualProcessName = "string"
    }
  })
}

```

### testBaseAccounts/packages/favoriteProcesses

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:packages |
| properties | Properties of a favorite process identifier. | FavoriteProcessProperties |


### FavoriteProcessProperties

| Name | Description | Value |
|-|-|-|
| actualProcessName | The actual name of the favorite process. It will be equal to resource name except for the scenario that the process name contains characters that are not allowed in the resource name. | string (required) |


