```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/workspaces@2024-03-01"
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

### services/workspaces

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:services |
| properties | Workspace properties. | WorkspaceProperties |


### WorkspaceProperties

| Name | Description | Value |
|-|-|-|
| description | Workspace description. | string |
| title | Workspace title. | string (required)Constraints:Min length = 1Max length = 50 |


