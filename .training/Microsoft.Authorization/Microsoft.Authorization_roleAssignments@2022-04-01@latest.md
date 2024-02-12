```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Authorization/roleAssignments@2022-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      condition = "string"
      conditionVersion = "string"
      delegatedManagedIdentityResourceId = "string"
      description = "string"
      principalId = "string"
      principalType = "string"
      roleDefinitionId = "string"
    }
  })
}

```

### roleAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 36Valid characters:Must be a globally unique identifier (GUID).Resource name must be unique across tenant. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.This resource type can also be applied to a tenant.For Bicep, usetenant(). |
| properties | Role assignment properties. | RoleAssignmentProperties(required) |


### RoleAssignmentProperties

| Name | Description | Value |
|-|-|-|
| condition | The conditions on the role assignment. This limits the resources it can be assigned to. e.g.:@Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container' | string |
| conditionVersion | Version of the condition. Currently the only accepted value is '2.0' | string |
| delegatedManagedIdentityResourceId | Id of the delegated managed identity resource | string |
| description | Description of role assignment | string |
| principalId | The principal ID. | string (required) |
| principalType | The principal type of the assigned principal ID. | 'Device''ForeignGroup''Group''ServicePrincipal''User' |
| roleDefinitionId | The role definition ID. | string (required) |


