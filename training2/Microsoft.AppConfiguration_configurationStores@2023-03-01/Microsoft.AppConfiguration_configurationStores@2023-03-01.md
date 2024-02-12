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


