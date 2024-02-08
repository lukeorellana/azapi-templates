```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/tokens@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        certificates = [
          {
            encodedPemCertificate = "string"
            expiry = "string"
            name = "string"
            thumbprint = "string"
          }
        ]
        passwords = [
          {
            creationTime = "string"
            expiry = "string"
            name = "string"
          }
        ]
      }
      scopeMapId = "string"
      status = "string"
    }
  })
}

```

### registries/tokens

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-50Valid characters:Alphanumerics, hyphens, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of the token. | TokenProperties |


### TokenProperties

| Name | Description | Value |
|-|-|-|
| credentials | The credentials that can be used for authenticating the token. | TokenCredentialsProperties |
| scopeMapId | The resource ID of the scope map to which the token will be associated with. | string |
| status | The status of the token example enabled or disabled. | 'disabled''enabled' |


### TokenCredentialsProperties

| Name | Description | Value |
|-|-|-|
| certificates |  | TokenCertificate[] |
| passwords |  | TokenPassword[] |


### TokenCertificate

| Name | Description | Value |
|-|-|-|
| encodedPemCertificate | Base 64 encoded string of the public certificate1 in PEM format that will be used for authenticating the token. | string |
| expiry | The expiry datetime of the certificate. | string |
| name |  | 'certificate1''certificate2' |
| thumbprint | The thumbprint of the certificate. | string |


### TokenPassword

| Name | Description | Value |
|-|-|-|
| creationTime | The creation datetime of the password. | string |
| expiry | The expiry datetime of the password. | string |
| name | The password name "password1" or "password2" | 'password1''password2' |


