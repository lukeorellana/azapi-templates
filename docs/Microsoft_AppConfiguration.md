## Microsoft.AppConfiguration/configurationStores@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppConfiguration/configurationStores@2023-03-01"
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
      createMode = "string"
      disableLocalAuth = bool
      enablePurgeProtection = bool
      encryption = {
        keyVaultProperties = {
          identityClientId = "string"
          keyIdentifier = "string"
        }
      }
      publicNetworkAccess = "string"
      softDeleteRetentionInDays = int
    }
    sku = {
      name = "string"
    }
  })
}

```

### configurationStores

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 5-50Valid characters:Alphanumerics, underscores, and hyphens. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku of the configuration store. | Sku(required) |
| identity | The managed identity information, if configured. | ResourceIdentity |
| properties | The properties of a configuration store. | ConfigurationStoreProperties |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ConfigurationStoreProperties

| Name | Description | Value |
|-|-|-|
| createMode | Indicates whether the configuration store need to be recovered. | 'Default''Recover' |
| disableLocalAuth | Disables all authentication methods other than AAD authentication. | bool |
| enablePurgeProtection | Property specifying whether protection against purge is enabled for this configuration store. | bool |
| encryption | The encryption settings of the configuration store. | EncryptionProperties |
| publicNetworkAccess | Control permission for data plane traffic coming from public networks while private endpoint is enabled. | 'Disabled''Enabled' |
| softDeleteRetentionInDays | The amount of time in days that the configuration store will be retained when it is soft deleted. | int |


### EncryptionProperties

| Name | Description | Value |
|-|-|-|
| keyVaultProperties | Key vault properties. | KeyVaultProperties |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| identityClientId | The client id of the identity which will be used to access key vault. | string |
| keyIdentifier | The URI of the key vault key used to encrypt data. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The SKU name of the configuration store. | string (required) |
## Microsoft.AppConfiguration/configurationStores/keyValues@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppConfiguration/configurationStores/keyValues@2023-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentType = "string"
      tags = {}
      value = "string"
    }
  })
}

```

### configurationStores/keyValues

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:configurationStores |
| properties | All key-value properties. | KeyValueProperties |


### KeyValueProperties

| Name | Description | Value |
|-|-|-|
| contentType | The content type of the key-value's value.Providing a proper content-type can enable transformations of values when they are retrieved by applications. | string |
| tags | A dictionary of tags that can help identify what a key-value may be applicable for. | object |
| value | The value of the key-value. | string |
## Microsoft.AppConfiguration/configurationStores/privateEndpointConnections@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppConfiguration/configurationStores/privateEndpointConnections@2023-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

### configurationStores/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:configurationStores |
| properties | The properties of a private endpoint. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private endpoint. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The resource Id for private endpoint | string |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| description | The private link service connection description. | string |
| status | The private link service connection status. | 'Approved''Disconnected''Pending''Rejected' |
## Microsoft.AppConfiguration/configurationStores/replicas@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppConfiguration/configurationStores/replicas@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
}

```

### configurationStores/replicas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The location of the replica. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:configurationStores |
