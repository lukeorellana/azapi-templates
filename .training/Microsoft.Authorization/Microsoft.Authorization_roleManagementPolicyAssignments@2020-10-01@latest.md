```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/roleManagementPolicyAssignments@2020-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      policyId = "string"
      roleDefinitionId = "string"
      scope = "string"
    }
  })
}

```

### roleManagementPolicyAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.This resource type can also be applied to a tenant.For Bicep, usetenant(). |
| properties | Role management policy properties. | RoleManagementPolicyAssignmentProperties |


### RoleManagementPolicyAssignmentProperties

| Name | Description | Value |
|-|-|-|
| policyId | The policy id role management policy assignment. | string |
| roleDefinitionId | The role definition of management policy assignment. | string |
| scope | The role management policy scope. | string |


