```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/certificates@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      data = "string"
      keyVault = {
        identityClientId = "string"
        secretIdentifier = "string"
      }
      password = "string"
    }
  })
}

```

### service/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Certificate create or update properties details. | CertificateCreateOrUpdatePropertiesOrCertificateCont... |


### CertificateCreateOrUpdatePropertiesOrCertificateCont...

| Name | Description | Value |
|-|-|-|
| data | Base 64 encoded certificate using the application/x-pkcs12 representation. | string |
| keyVault | KeyVault location details of the certificate. | KeyVaultContractCreatePropertiesOrKeyVaultContractPr... |
| password | Password for the Certificate | string |


### KeyVaultContractCreatePropertiesOrKeyVaultContractPr...

| Name | Description | Value |
|-|-|-|
| identityClientId | Null for SystemAssignedIdentity or Client Id for UserAssignedIdentity , which will be used to access key vault secret. | string |
| secretIdentifier | Key vault secret identifier for fetching secret. Providing a versioned secret will prevent auto-refresh. This requires API Management service to be configured with aka.ms/apimmsi | string |


