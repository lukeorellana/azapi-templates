```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces@2022-10-01-preview"
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
      clusterArmId = "string"
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
      isAutoInflateEnabled = bool
      kafkaEnabled = bool
      maximumThroughputUnits = int
      minimumTlsVersion = "string"
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
| name | The resource name | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphens.Start with letter. End with letter or number.Resource name must be unique across Azure. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Properties of sku resource | Sku |
| identity | Properties of BYOK Identity description | Identity |
| properties | Namespace properties supplied for create namespace operation. | EHNamespaceProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | Properties for User Assigned Identities | object |


### EHNamespaceProperties

| Name | Description | Value |
|-|-|-|
| alternateName | Alternate name specified when alias and namespace names are same. | string |
| clusterArmId | Cluster ARM ID of the Namespace. | string |
| disableLocalAuth | This property disables SAS authentication for the Event Hubs namespace. | bool |
| encryption | Properties of BYOK Encryption description | Encryption |
| isAutoInflateEnabled | Value that indicates whether AutoInflate is enabled for eventhub namespace. | bool |
| kafkaEnabled | Value that indicates whether Kafka is enabled for eventhub namespace. | bool |
| maximumThroughputUnits | Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true) | int |
| minimumTlsVersion | The minimum TLS version for the cluster to support, e.g. '1.2' | '1.0''1.1''1.2' |
| privateEndpointConnections | List of private endpoint connections. | PrivateEndpointConnection[] |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled. | 'Disabled''Enabled''SecuredByPerimeter' |
| zoneRedundant | Enabling this property creates a Standard Event Hubs Namespace in regions supported availability zones. | bool |


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
| keyVersion | Key Version | string |


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


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The Event Hubs throughput units for Basic or Standard tiers, where value should be 0 to 20 throughput units. The Event Hubs premium units for Premium tier, where value should be 0 to 10 premium units. | int |
| name | Name of this SKU. | 'Basic''Premium''Standard' (required) |
| tier | The billing tier of this particular SKU. | 'Basic''Premium''Standard' |


