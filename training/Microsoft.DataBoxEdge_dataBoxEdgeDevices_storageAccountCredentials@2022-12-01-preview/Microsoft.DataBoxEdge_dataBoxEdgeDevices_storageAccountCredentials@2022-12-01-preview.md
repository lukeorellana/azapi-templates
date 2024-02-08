```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accountKey = {
        encryptionAlgorithm = "string"
        encryptionCertThumbprint = "string"
        value = "string"
      }
      accountType = "string"
      alias = "string"
      blobDomainName = "string"
      connectionString = "string"
      sslStatus = "string"
      storageAccountId = "string"
      userName = "string"
    }
  })
}

```

### dataBoxEdgeDevices/storageAccountCredentials

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |
| properties | The storage account credential properties. | StorageAccountCredentialProperties(required) |


### StorageAccountCredentialProperties

| Name | Description | Value |
|-|-|-|
| accountKey | Encrypted storage key. | AsymmetricEncryptedSecret |
| accountType | Type of storage accessed on the storage account. | 'BlobStorage''GeneralPurposeStorage' (required) |
| alias | Alias for the storage account. | string (required) |
| blobDomainName | Blob end point for private clouds. | string |
| connectionString | Connection string for the storage account. Use this string if username and account key are not specified. | string |
| sslStatus | Signifies whether SSL needs to be enabled or not. | 'Disabled''Enabled' (required) |
| storageAccountId | Id of the storage account. | string |
| userName | Username for the storage account. | string |


### AsymmetricEncryptedSecret

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | The algorithm used to encrypt "Value". | 'AES256''None''RSAES_PKCS1_v_1_5' (required) |
| encryptionCertThumbprint | Thumbprint certificate used to encrypt "Value". If the value is unencrypted, it will be null. | string |
| value | The value of the secret. | string (required) |


