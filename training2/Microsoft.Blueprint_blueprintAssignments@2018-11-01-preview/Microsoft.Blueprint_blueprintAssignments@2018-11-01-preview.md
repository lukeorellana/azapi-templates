```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      blueprintId = "string"
      description = "string"
      displayName = "string"
      locks = {
        excludedPrincipals = [
          "string"
        ]
        mode = "string"
      }
      parameters = {}
      resourceGroups = {}
      scope = "string"
    }
  })
}

```

### blueprintAssignments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 90Valid characters:Alphanumerics, underscores, and hyphens. |
| location | The location of this blueprint assignment. | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| identity | Managed identity for this blueprint assignment. | ManagedServiceIdentity(required) |
| properties | Properties for blueprint assignment object. | AssignmentProperties(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| principalId | Azure Active Directory principal ID associated with this Identity. | string |
| tenantId | ID of the Azure Active Directory. | string |
| type | Type of the managed identity. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user-assigned managed identities associated with the resource. Key is the Azure resource Id of the managed identity. | object |


### AssignmentProperties

| Name | Description | Value |
|-|-|-|
| blueprintId | ID of the published version of a blueprint definition. | string |
| description | Multi-line explain this resource. | string |
| displayName | One-liner string explain this resource. | string |
| locks | Defines how resources deployed by a blueprint assignment are locked. | AssignmentLockSettings |
| parameters | Blueprint assignment parameter values. | object (required) |
| resourceGroups | Names and locations of resource group placeholders. | object (required) |
| scope | The target subscription scope of the blueprint assignment (format: '/subscriptions/{subscriptionId}'). For management group level assignments, the property is required. | string |


### AssignmentLockSettings

| Name | Description | Value |
|-|-|-|
| excludedPrincipals | List of AAD principals excluded from blueprint locks. Up to 5 principals are permitted. | string[] |
| mode | Lock mode. | 'AllResourcesDoNotDelete''AllResourcesReadOnly''None' |


