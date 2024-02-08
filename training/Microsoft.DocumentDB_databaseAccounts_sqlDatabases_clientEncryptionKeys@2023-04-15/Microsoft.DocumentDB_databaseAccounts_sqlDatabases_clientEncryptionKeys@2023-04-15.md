```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/clientEncryptionKeys@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        encryptionAlgorithm = "string"
        id = "string"
        keyWrapMetadata = {
          algorithm = "string"
          name = "string"
          type = "string"
          value = "string"
        }
      }
    }
  })
}

```

### databaseAccounts/sqlDatabases/clientEncryptionKeys

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlDatabases |
| properties | Properties to create and update ClientEncryptionKey. | ClientEncryptionKeyCreateUpdatePropertiesOrClientEnc...(required) |


### ClientEncryptionKeyCreateUpdatePropertiesOrClientEnc...

| Name | Description | Value |
|-|-|-|
| resource | The standard JSON format of a ClientEncryptionKey | ClientEncryptionKeyResourceOrClientEncryptionKeyGetP...(required) |


### ClientEncryptionKeyResourceOrClientEncryptionKeyGetP...

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | Encryption algorithm that will be used along with this client encryption key to encrypt/decrypt data. | string |
| id | Name of the ClientEncryptionKey | string |
| keyWrapMetadata | Metadata for the wrapping provider that can be used to unwrap the wrapped client encryption key. | KeyWrapMetadata |
| wrappedDataEncryptionKey | Wrapped (encrypted) form of the key represented as a byte array. | For Bicep, you can use theany()function. |


### KeyWrapMetadata

| Name | Description | Value |
|-|-|-|
| algorithm | Algorithm used in wrapping and unwrapping of the data encryption key. | string |
| name | The name of associated KeyEncryptionKey (aka CustomerManagedKey). | string |
| type | ProviderName of KeyStoreProvider. | string |
| value | Reference / link to the KeyEncryptionKey. | string |


