## Microsoft.DeviceUpdate/accounts@2022-12-01-preview

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
## Microsoft.DeviceUpdate/accounts/instances@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeviceUpdate/accounts/instances@2022-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      diagnosticStorageProperties = {
        authenticationType = "KeyBased"
        connectionString = "string"
        resourceId = "string"
      }
      enableDiagnostics = bool
      iotHubs = [
        {
          resourceId = "string"
        }
      ]
    }
  })
}

```

### accounts/instances

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Device Update instance properties. | InstanceProperties(required) |


### InstanceProperties

| Name | Description | Value |
|-|-|-|
| diagnosticStorageProperties | Customer-initiated diagnostic log collection storage properties | DiagnosticStorageProperties |
| enableDiagnostics | Enables or Disables the diagnostic logs collection | bool |
| iotHubs | List of IoT Hubs associated with the account. | IotHubSettings[] |


### DiagnosticStorageProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Authentication Type | 'KeyBased' (required) |
| connectionString | ConnectionString of the diagnostic storage account | string |
| resourceId | ResourceId of the diagnostic storage account | string (required) |


### IotHubSettings

| Name | Description | Value |
|-|-|-|
| resourceId | IoTHub resource ID | string (required) |
## Microsoft.DeviceUpdate/accounts/privateEndpointConnectionProxies@2022-12-01-preview

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
## Microsoft.DeviceUpdate/accounts/privateEndpointConnections@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeviceUpdate/accounts/privateEndpointConnections@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
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
  })
}

```

### accounts/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
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
