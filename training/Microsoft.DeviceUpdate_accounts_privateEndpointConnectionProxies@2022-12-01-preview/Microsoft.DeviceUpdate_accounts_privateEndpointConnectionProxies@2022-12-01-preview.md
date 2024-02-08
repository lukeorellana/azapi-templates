```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeviceUpdate/accounts/privateEndpointConnectionProxies@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    remotePrivateEndpoint = {
      connectionDetails = [
        {
        }
      ]
      id = "string"
      immutableResourceId = "string"
      immutableSubscriptionId = "string"
      location = "string"
      manualPrivateLinkServiceConnections = [
        {
          groupIds = [
            "string"
          ]
          name = "string"
          requestMessage = "string"
        }
      ]
      privateLinkServiceConnections = [
        {
          groupIds = [
            "string"
          ]
          name = "string"
          requestMessage = "string"
        }
      ]
      privateLinkServiceProxies = [
        {
          groupConnectivityInformation = [
            {
              customerVisibleFqdns = [
                "string"
              ]
              privateLinkServiceArmRegion = "string"
              redirectMapId = "string"
            }
          ]
          id = "string"
          remotePrivateEndpointConnection = {}
          remotePrivateLinkServiceConnectionState = {
            actionsRequired = "string"
            description = "string"
            status = "string"
          }
        }
      ]
      vnetTrafficTag = "string"
    }
    status = "string"
  })
}

```

### accounts/privateEndpointConnectionProxies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Private endpoint connection proxy object property bag. | PrivateEndpointConnectionProxyProperties |
| remotePrivateEndpoint | Remote private endpoint details. | RemotePrivateEndpoint |
| status | Operation status. | string |


### RemotePrivateEndpoint

| Name | Description | Value |
|-|-|-|
| connectionDetails | List of connection details. | ConnectionDetails[] |
| id | Remote endpoint resource ID. | string |
| immutableResourceId | Original resource ID needed by Microsoft.Network. | string |
| immutableSubscriptionId | Original subscription ID needed by Microsoft.Network. | string |
| location | ARM location of the remote private endpoint. | string |
| manualPrivateLinkServiceConnections | List of private link service connections that need manual approval. | PrivateLinkServiceConnection[] |
| privateLinkServiceConnections | List of automatically approved private link service connections. | PrivateLinkServiceConnection[] |
| privateLinkServiceProxies | List of private link service proxies. | PrivateLinkServiceProxy[] |
| vnetTrafficTag | Virtual network traffic tag. | string |


### PrivateLinkServiceConnection

| Name | Description | Value |
|-|-|-|
| groupIds | List of group IDs. | string[] |
| name | Private link service connection name. | string |
| requestMessage | Request message. | string |


### PrivateLinkServiceProxy

| Name | Description | Value |
|-|-|-|
| groupConnectivityInformation | Group connectivity information. | GroupConnectivityInformation[] |
| id | NRP resource ID. | string |
| remotePrivateEndpointConnection | Remote private endpoint connection details. | PrivateLinkServiceProxyRemotePrivateEndpointConnecti... |
| remotePrivateLinkServiceConnectionState | Remote private link service connection state | PrivateLinkServiceConnectionState |


### GroupConnectivityInformation

| Name | Description | Value |
|-|-|-|
| customerVisibleFqdns | List of customer visible FQDNs. | string[] |
| privateLinkServiceArmRegion | PrivateLinkService ARM region. | string |
| redirectMapId | Redirect map ID. | string |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |


