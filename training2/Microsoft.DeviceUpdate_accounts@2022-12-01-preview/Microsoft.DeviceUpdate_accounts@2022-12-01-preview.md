```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeviceUpdate/accounts@2022-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      encryption = {
        keyVaultKeyUri = "string"
        userAssignedIdentity = "string"
      }
      privateEndpointConnections = [
        {
          properties = {
            groupIds = [
              "string"
            ]
            privateEndpoint = {}
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
          }
        }
      ]
      publicNetworkAccess = "string"
      sku = "string"
    }
  })
}

```

### accounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The type of identity used for the resource. | ManagedServiceIdentity |
| properties | Device Update account properties. | AccountProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### AccountProperties

| Name | Description | Value |
|-|-|-|
| encryption | CMK encryption at rest properties | Encryption |
| privateEndpointConnections | List of private endpoint connections associated with the account. | PrivateEndpointConnection[] |
| publicNetworkAccess | Whether or not public network access is allowed for the account. | 'Disabled''Enabled' |
| sku | Device Update Sku | 'Free''Standard' |


### Encryption

| Name | Description | Value |
|-|-|-|
| keyVaultKeyUri | The URI of the key vault | string |
| userAssignedIdentity | The full resourceId of the user assigned identity to be used for key vault access. Identity has to be also assigned to the Account | string |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| properties | Resource properties. | PrivateEndpointConnectionProperties(required) |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | Array of group IDs. | string[] |
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |


