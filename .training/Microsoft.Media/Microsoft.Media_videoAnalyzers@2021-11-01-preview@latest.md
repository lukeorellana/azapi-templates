```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Media/videoAnalyzers@2021-11-01-preview"
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
        }
        keyVaultProperties = {
          keyIdentifier = "string"
        }
        type = "string"
      }
      iotHubs = [
        {
          id = "string"
          identity = {
            userAssignedIdentity = "string"
          }
        }
      ]
      networkAccessControl = {
        consumption = {
          publicNetworkAccess = "string"
        }
        ingestion = {
          publicNetworkAccess = "string"
        }
        integration = {
          publicNetworkAccess = "string"
        }
      }
      publicNetworkAccess = "string"
      storageAccounts = [
        {
          id = "string"
          identity = {
            userAssignedIdentity = "string"
          }
        }
      ]
    }
  })
}

```

### videoAnalyzers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identities associated to the Video Analyzer resource. | VideoAnalyzerIdentity |
| properties | The resource properties. | VideoAnalyzerProperties |


### VideoAnalyzerIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | string (required) |
| userAssignedIdentities | The User Assigned Managed Identities. | object |


### VideoAnalyzerProperties

| Name | Description | Value |
|-|-|-|
| encryption | The account encryption properties. | AccountEncryption |
| iotHubs | The IoT Hubs for this resource. | IotHub[] |
| networkAccessControl | Network access control for Video Analyzer. | NetworkAccessControl |
| publicNetworkAccess | Whether or not public network access is allowed for resources under the Video Analyzer account. | 'Disabled''Enabled' |
| storageAccounts | The storage accounts for this resource. | StorageAccount[] (required) |


### AccountEncryption

| Name | Description | Value |
|-|-|-|
| identity | The Key Vault identity. | ResourceIdentity |
| keyVaultProperties | The properties of the key used to encrypt the account. | KeyVaultProperties |
| type | The type of key used to encrypt the Account Key. | 'CustomerKey''SystemKey' (required) |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | The user assigned managed identity's resource identifier to use when accessing a resource. | string (required) |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyIdentifier | The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for examplehttps://vault/keys/mykey/version1) or reference a key without a version (for examplehttps://vault/keys/mykey). | string (required) |


### IotHub

| Name | Description | Value |
|-|-|-|
| id | The IoT Hub resource identifier. | string (required) |
| identity | The IoT Hub identity. | ResourceIdentity(required) |


### NetworkAccessControl

| Name | Description | Value |
|-|-|-|
| consumption | Public network access for consumption group. | GroupLevelAccessControl |
| ingestion | Public network access for ingestion group. | GroupLevelAccessControl |
| integration | Public network access for integration group. | GroupLevelAccessControl |


### GroupLevelAccessControl

| Name | Description | Value |
|-|-|-|
| publicNetworkAccess | Whether or not public network access is allowed for specified resources under the Video Analyzer account. | 'Disabled''Enabled' |


### StorageAccount

| Name | Description | Value |
|-|-|-|
| id | The ID of the storage account resource. Video Analyzer relies on tables, queues, and blobs. The primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). | string (required) |
| identity | A managed identity that Video Analyzer will use to access the storage account. | ResourceIdentity |


