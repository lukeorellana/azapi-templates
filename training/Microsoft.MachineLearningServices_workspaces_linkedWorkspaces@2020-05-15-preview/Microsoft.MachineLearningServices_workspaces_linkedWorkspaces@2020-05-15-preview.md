```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/linkedWorkspaces@2020-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedWorkspaceResourceId = "string"
      userAssignedIdentityResourceId = "string"
    }
  })
}

```

### workspaces/linkedWorkspaces

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | LinkedWorkspace specific properties. | LinkedWorkspaceProps |


### LinkedWorkspaceProps

| Name | Description | Value |
|-|-|-|
| linkedWorkspaceResourceId | ResourceId of the link target of the linked workspace. | string |
| userAssignedIdentityResourceId | ResourceId of the user assigned identity for the linked workspace. | string |


