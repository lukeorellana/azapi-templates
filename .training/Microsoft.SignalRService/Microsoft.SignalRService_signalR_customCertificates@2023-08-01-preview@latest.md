```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/signalR/customCertificates@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      keyVaultBaseUri = "string"
      keyVaultSecretName = "string"
      keyVaultSecretVersion = "string"
    }
  })
}

```

### signalR/customCertificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:signalR |
| properties | Custom certificate properties. | CustomCertificateProperties(required) |


### CustomCertificateProperties

| Name | Description | Value |
|-|-|-|
| keyVaultBaseUri | Base uri of the KeyVault that stores certificate. | string (required) |
| keyVaultSecretName | Certificate secret name. | string (required) |
| keyVaultSecretVersion | Certificate secret version. | string |


