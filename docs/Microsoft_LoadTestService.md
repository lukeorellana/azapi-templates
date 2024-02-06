## Microsoft.LoadTestService/loadTests@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LoadTestService/loadTests@2022-12-01"
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
      description = "string"
      encryption = {
        identity = {
          resourceId = "string"
          type = "string"
        }
        keyUrl = "string"
      }
    }
  })
}

```

### loadTests

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-64Valid characters:Can't use:<>*&@:?+/\,;=.| []"or space.Can't start with underscore, hyphen, or number. Can't end with underscore or hyphen.Resource name must be unique across Azure. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The type of identity used for the resource. | ManagedServiceIdentity |
| properties | Load Test resource properties | LoadTestProperties |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### LoadTestProperties

| Name | Description | Value |
|-|-|-|
| description | Description of the resource. | string |
| encryption | CMK Encryption property. | EncryptionProperties |


### EncryptionProperties

| Name | Description | Value |
|-|-|-|
| identity | All identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault. | EncryptionPropertiesIdentity |
| keyUrl | key encryption key Url, versioned. Ex:https://contosovault.vault.azure.net/keys/contosokek/562a4bb76b524a1493a6afe8e536ee78orhttps://contosovault.vault.azure.net/keys/contosokek. | string |


### EncryptionPropertiesIdentity

| Name | Description | Value |
|-|-|-|
| resourceId | user assigned identity to use for accessing key encryption key Url. Ex: /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/{resource group}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myId | string |
| type | Managed identity type to use for accessing encryption key Url | 'SystemAssigned''UserAssigned' |
