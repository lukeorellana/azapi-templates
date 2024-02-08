```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerService/managedClusters/trustedAccessRoleBindings@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      roles = [
        "string"
      ]
      sourceResourceId = "string"
    }
  })
}

```

### managedClusters/trustedAccessRoleBindings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedClusters |
| properties | Properties for trusted access role binding | TrustedAccessRoleBindingProperties(required) |


### TrustedAccessRoleBindingProperties

| Name | Description | Value |
|-|-|-|
| roles | A list of roles to bind, each item is a resource type qualified role name. For example: 'Microsoft.MachineLearningServices/workspaces/reader'. | string[] (required) |
| sourceResourceId | The ARM resource ID of source resource that trusted access is configured for. | string (required) |


