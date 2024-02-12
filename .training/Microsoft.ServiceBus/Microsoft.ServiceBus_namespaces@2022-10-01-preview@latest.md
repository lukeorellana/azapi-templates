```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces@2022-10-01-preview"
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
      alternateName = "string"
      disableLocalAuth = bool
      encryption = {
        keySource = "Microsoft.KeyVault"
        keyVaultProperties = [
          {
            identity = {
              userAssignedIdentity = "string"
            }
            keyName = "string"
            keyVaultUri = "string"
            keyVersion = "string"
          }
        ]
        requireInfrastructureEncryption = bool
      }
      minimumTlsVersion = "string"
      premiumMessagingPartitions = int
      privateEndpointConnections = [
        {
          properties = {
            privateEndpoint = {
              id = "string"
            }
            privateLinkServiceConnectionState = {
              description = "string"
              status = "string"
            }
            provisioningState = "string"
          }
        }
      ]
      publicNetworkAccess = "string"
      zoneRedundant = bool
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

### namespaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphens.Start with a letter. End with a letter or number.For more information, seeCreate namespace.Resource name must be unique across Azure. |
| location | The Geo-location where the resource lives | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | Properties of SKU | SBSku |
| identity | Properties of BYOK Identity description | Identity |
| properties | Properties of the namespace. | SBNamespaceProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | Properties for User Assigned Identities | object |


### SBNamespaceProperties

| Name | Description | Value |
|-|-|-|
| alternateName | Alternate name for namespace | string |
| disableLocalAuth | This property disables SAS authentication for the Service Bus namespace. | bool |
| encryption | Properties of BYOK Encryption description | Encryption |
| minimumTlsVersion | The minimum TLS version for the cluster to support, e.g. '1.2' | '1.0''1.1''1.2' |
| premiumMessagingPartitions | The number of partitions of a Service Bus namespace. This property is only applicable to Premium SKU namespaces. The default value is 1 and possible values are 1, 2 and 4 | int |
| privateEndpointConnections | List of private endpoint connections. | PrivateEndpointConnection[] |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled. | 'Disabled''Enabled''SecuredByPerimeter' |
| zoneRedundant | Enabling this property creates a Premium Service Bus Namespace in regions supported availability zones. | bool |


### Encryption

| Name | Description | Value |
|-|-|-|
| keySource | Enumerates the possible value of keySource for Encryption | 'Microsoft.KeyVault' |
| keyVaultProperties | Properties of KeyVault | KeyVaultProperties[] |
| requireInfrastructureEncryption | Enable Infrastructure Encryption (Double Encryption) | bool |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| identity |  | UserAssignedIdentityProperties |
| keyName | Name of the Key from KeyVault | string |
| keyVaultUri | Uri of KeyVault | string |
| keyVersion | Version of KeyVault | string |


### UserAssignedIdentityProperties

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | ARM ID of user Identity selected for encryption | string |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| properties | Properties of the PrivateEndpointConnection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The Private Endpoint resource for this Connection. | PrivateEndpoint |
| privateLinkServiceConnectionState | Details about the state of the connection. | ConnectionState |
| provisioningState | Provisioning state of the Private Endpoint Connection. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The ARM identifier for Private Endpoint. | string |


### ConnectionState

| Name | Description | Value |
|-|-|-|
| description | Description of the connection state. | string |
| status | Status of the connection. | 'Approved''Disconnected''Pending''Rejected' |


### SBSku

| Name | Description | Value |
|-|-|-|
| capacity | Messaging units for your service bus premium namespace. Valid capacities are {1, 2, 4, 8, 16} multiples of your properties.premiumMessagingPartitions setting. For example, If properties.premiumMessagingPartitions is 1 then possible capacity values are 1, 2, 4, 8, and 16. If properties.premiumMessagingPartitions is 4 then possible capacity values are 4, 8, 16, 32 and 64 | int |
| name | Name of this SKU. | 'Basic''Premium''Standard' (required) |
| tier | The billing tier of this particular SKU. | 'Basic''Premium''Standard' |


