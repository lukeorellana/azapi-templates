```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/certificates@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      type = "string"
      // For remaining properties, see CertificateProperties objects
    }
  })
}

```

### Spring/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:Spring |
| properties | Properties of the certificate resource payload. | CertificateProperties |


### CertificateProperties

| Name | Description | Value |
|-|-|-|
| type | Set the object type | ContentCertificateKeyVaultCertificate(required) |


### ContentCertificateProperties

| Name | Description | Value |
|-|-|-|
| type | The type of the certificate source. | 'ContentCertificate' (required) |
| content | The content of uploaded certificate. | string |


### KeyVaultCertificateProperties

| Name | Description | Value |
|-|-|-|
| type | The type of the certificate source. | 'KeyVaultCertificate' (required) |
| certVersion | The certificate version of key vault. | string |
| excludePrivateKey | Optional. If set to true, it will not import private key from key vault. | bool |
| keyVaultCertName | The certificate name of key vault. | string (required) |
| vaultUri | The vault uri of user key vault. | string (required) |


