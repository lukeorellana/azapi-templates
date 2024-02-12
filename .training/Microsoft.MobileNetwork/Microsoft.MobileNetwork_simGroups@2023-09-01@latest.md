```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MobileNetwork/simGroups@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      encryptionKey = {
        keyUrl = "string"
      }
      mobileNetwork = {
        id = "string"
      }
    }
  })
}

```

### simGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-64Valid characters:Alphanumeric, underscores and hyphensStart with alphanumeric |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity used to retrieve the encryption key from Azure key vault. | ManagedServiceIdentity |
| properties | SIM group Properties. | SimGroupPropertiesFormat(required) |


### ManagedServiceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (currently only UserAssigned allowed). | 'None''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | UserAssignedIdentities |


### UserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserAssignedIdentity |


### SimGroupPropertiesFormat

| Name | Description | Value |
|-|-|-|
| encryptionKey | A key to encrypt the SIM data that belongs to this SIM group. | KeyVaultKey |
| mobileNetwork | Mobile network that this SIM group belongs to. The mobile network must be in the same location as the SIM group. | MobileNetworkResourceId |


### KeyVaultKey

| Name | Description | Value |
|-|-|-|
| keyUrl | The key URL, unversioned. For example:https://contosovault.vault.azure.net/keys/azureKey. | string |


### MobileNetworkResourceId

| Name | Description | Value |
|-|-|-|
| id | Mobile network resource ID. | string (required)Constraints:Pattern =^/[sS][uU][bB][sS][cC][rR][iI][pP][tT][iI][oO][nN][sS]/[^/?#]+/[rR][eE][sS][oO][uU][rR][cC][eE][gG][rR][oO][uU][pP][sS]/[^/?#]+/[pP][rR][oO][vV][iI][dD][eE][rR][sS]/[mM][iI][cC][rR][oO][sS][oO][fF][tT]\.[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK]/[mM][oO][bB][iI][lL][eE][nN][eE][tT][wW][oO][rR][kK][sS]/[^/?#]+$ |


