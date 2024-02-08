```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/mediaservices@2021-11-01"
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
        identity = {
          userAssignedIdentity = "string"
          useSystemAssignedIdentity = bool
        }
        keyVaultProperties = {
          keyIdentifier = "string"
        }
        type = "string"
      }
      keyDelivery = {
        accessControl = {
          defaultAction = "string"
          ipAllowList = [
            "string"
          ]
        }
      }
      publicNetworkAccess = "string"
      storageAccounts = [
        {
          id = "string"
          identity = {
            userAssignedIdentity = "string"
            useSystemAssignedIdentity = bool
          }
          type = "string"
        }
      ]
      storageAuthentication = "string"
    }
  })
}

```

### mediaservices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-24Valid characters:Lowercase letters and numbers. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The Managed Identity for the Media Services account. | MediaServiceIdentity |
| properties | The resource properties. | MediaServiceProperties |


### MediaServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | string (required) |
| userAssignedIdentities | The user assigned managed identities. | object |


### MediaServiceProperties

| Name | Description | Value |
|-|-|-|
| encryption | The account encryption properties. | AccountEncryption |
| keyDelivery | The Key Delivery properties for Media Services account. | KeyDelivery |
| publicNetworkAccess | Whether or not public network access is allowed for resources under the Media Services account. | 'Disabled''Enabled' |
| storageAccounts | The storage accounts for this resource. | StorageAccount[] |
| storageAuthentication |  | 'ManagedIdentity''System' |


### AccountEncryption

| Name | Description | Value |
|-|-|-|
| identity | The Key Vault identity. | ResourceIdentity |
| keyVaultProperties | The properties of the key used to encrypt the account. | KeyVaultProperties |
| type | The type of key used to encrypt the Account Key. | 'CustomerKey''SystemKey' (required) |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | The user assigned managed identity's ARM ID to use when accessing a resource. | string |
| useSystemAssignedIdentity | Indicates whether to use System Assigned Managed Identity. Mutual exclusive with User Assigned Managed Identity. | bool (required) |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyIdentifier | The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for examplehttps://vault/keys/mykey/version1) or reference a key without a version (for examplehttps://vault/keys/mykey). | string |


### KeyDelivery

| Name | Description | Value |
|-|-|-|
| accessControl | The access control properties for Key Delivery. | AccessControl |


### AccessControl

| Name | Description | Value |
|-|-|-|
| defaultAction | The behavior for IP access control in Key Delivery. | 'Allow''Deny' |
| ipAllowList | The IP allow list for access control in Key Delivery. If the default action is set to 'Allow', the IP allow list must be empty. | string[] |


### StorageAccount

| Name | Description | Value |
|-|-|-|
| id | The ID of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts. | string |
| identity | The storage account identity. | ResourceIdentity |
| type | The type of the storage account. | 'Primary''Secondary' (required) |


