## Microsoft.HealthBot/healthBots@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HealthBot/healthBots@2023-05-01"
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
      keyVaultProperties = {
        keyName = "string"
        keyVaultUri = "string"
        keyVersion = "string"
        userIdentity = "string"
      }
    }
    sku = {
      name = "string"
    }
  })
}

```

### healthBots

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU of the Azure Health Bot. | Sku(required) |
| identity | The identity of the Azure Health Bot. | Identity |
| properties | The set of properties specific to Azure Health Bot resource. | HealthBotProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the Azure Health Bot | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### HealthBotProperties

| Name | Description | Value |
|-|-|-|
| keyVaultProperties | KeyVault properties for the resource encryption. | KeyVaultProperties |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of the key vault key. | string (required) |
| keyVaultUri | The Uri of the key vault. | string (required) |
| keyVersion | The version of the key vault key. | string |
| userIdentity | The user assigned identity (ARM resource id) that has access to the key. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The name of the Azure Health Bot SKU | 'C0''F0''PES''S1' (required) |
