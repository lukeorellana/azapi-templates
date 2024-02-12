```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces/apis/versions/definitions@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      title = "string"
    }
  })
}

```

### services/workspaces/apis/versions/definitions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:versions |
| properties | API definition properties entity. | ApiDefinitionProperties |


### ApiDefinitionProperties

| Name | Description | Value |
|-|-|-|
| description | API definition description. | string |
| title | API definition title. | string (required)Constraints:Min length = 1Max length = 50 |


