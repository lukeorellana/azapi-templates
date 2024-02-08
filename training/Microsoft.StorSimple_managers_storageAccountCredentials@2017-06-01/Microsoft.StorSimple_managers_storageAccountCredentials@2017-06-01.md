```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/storageAccountCredentials@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessKey = {
        encryptionAlgorithm = "string"
        encryptionCertThumbprint = "string"
        value = "string"
      }
      endPoint = "string"
      sslStatus = "string"
    }
    kind = "Series8000"
  })
}

```

### managers/storageAccountCredentials

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managers |
| properties | The storage account credential properties. | StorageAccountCredentialProperties(required) |


### StorageAccountCredentialProperties

| Name | Description | Value |
|-|-|-|
| accessKey | The details of the storage account password. | AsymmetricEncryptedSecret |
| endPoint | The storage endpoint | string (required) |
| sslStatus | Signifies whether SSL needs to be enabled or not. | 'Disabled''Enabled' (required) |


### AsymmetricEncryptedSecret

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | The algorithm used to encrypt "Value". | 'AES256''None''RSAES_PKCS1_v_1_5' (required) |
| encryptionCertThumbprint | Thumbprint certificate that was used to encrypt "Value". If the value in unencrypted, it will be null. | string |
| value | The value of the secret. | string (required) |


