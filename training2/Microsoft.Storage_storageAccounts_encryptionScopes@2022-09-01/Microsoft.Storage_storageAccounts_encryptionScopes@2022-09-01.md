```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/encryptionScopes@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      keyVaultProperties = {
        keyUri = "string"
      }
      requireInfrastructureEncryption = bool
      source = "string"
      state = "string"
    }
  })
}

```

### storageAccounts/encryptionScopes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:storageAccounts |
| properties | Properties of the encryption scope. | EncryptionScopeProperties |


### EncryptionScopeProperties

| Name | Description | Value |
|-|-|-|
| keyVaultProperties | The key vault properties for the encryption scope. This is a required field if encryption scope 'source' attribute is set to 'Microsoft.KeyVault'. | EncryptionScopeKeyVaultProperties |
| requireInfrastructureEncryption | A boolean indicating whether or not the service applies a secondary layer of encryption with platform managed keys for data at rest. | bool |
| source | The provider for the encryption scope. Possible values (case-insensitive):  Microsoft.Storage, Microsoft.KeyVault. | 'Microsoft.KeyVault''Microsoft.Storage' |
| state | The state of the encryption scope. Possible values (case-insensitive):  Enabled, Disabled. | 'Disabled''Enabled' |


### EncryptionScopeKeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyUri | The object identifier for a key vault key object. When applied, the encryption scope will use the key referenced by the identifier to enable customer-managed key support on this encryption scope. | string |


