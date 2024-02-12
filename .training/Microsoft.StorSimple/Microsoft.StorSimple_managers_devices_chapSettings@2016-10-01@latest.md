```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/chapSettings@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      password = {
        encryptionAlgorithm = "string"
        encryptionCertificateThumbprint = "string"
        value = "string"
      }
    }
  })
}

```

### managers/devices/chapSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | Chap properties | ChapProperties(required) |


### ChapProperties

| Name | Description | Value |
|-|-|-|
| password | The chap password. | AsymmetricEncryptedSecret(required) |


### AsymmetricEncryptedSecret

| Name | Description | Value |
|-|-|-|
| encryptionAlgorithm | Algorithm used to encrypt "Value" | 'AES256''None''RSAES_PKCS1_v_1_5' (required) |
| encryptionCertificateThumbprint | Thumbprint certificate that was used to encrypt "Value" | string |
| value | The value of the secret itself. If the secret is in plaintext then EncryptionAlgorithm will be none and EncryptionCertThumbprint will be null. | string (required) |


