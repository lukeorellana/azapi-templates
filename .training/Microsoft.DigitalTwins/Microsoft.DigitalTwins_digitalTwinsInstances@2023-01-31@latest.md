```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DigitalTwins/digitalTwinsInstances@2023-01-31"
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
    }
  })
}

```

### digitalTwinsInstances

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The resource location. | string (required) |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The managed identity for the DigitalTwinsInstance. | DigitalTwinsIdentity |
| properties | DigitalTwins instance properties. | DigitalTwinsProperties |


### DigitalTwinsIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of Managed Identity used by the DigitalTwinsInstance. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.. | object |


### DigitalTwinsProperties

| Name | Description | Value |
|-|-|-|
| privateEndpointConnections | The private endpoint connections. | PrivateEndpointConnection[] |
| publicNetworkAccess | Public network access for the DigitalTwinsInstance. | 'Disabled''Enabled' |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| properties | The connection properties. | ConnectionProperties(required) |


### ConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | The list of group ids for the private endpoint connection. | string[] |
| privateEndpoint | The private endpoint. | PrivateEndpoint |
| privateLinkServiceConnectionState | The connection state. | ConnectionPropertiesPrivateLinkServiceConnectionStat... |


### ConnectionPropertiesPrivateLinkServiceConnectionStat...

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required for a private endpoint connection. | string |
| description | The description for the current state of a private endpoint connection. | string (required) |
| status | The status of a private endpoint connection. | 'Approved''Disconnected''Pending''Rejected' (required) |


