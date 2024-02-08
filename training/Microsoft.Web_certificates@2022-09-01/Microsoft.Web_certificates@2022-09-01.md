```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/certificates@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      canonicalName = "string"
      domainValidationMethod = "string"
      hostNames = [
        "string"
      ]
      keyVaultId = "string"
      keyVaultSecretName = "string"
      password = "string"
      serverFarmId = "string"
    }
    kind = "string"
  })
}

```

### certificates

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use:/Can't end with space or period. |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| properties | Certificate resource specific properties | CertificateProperties |


### CertificateProperties

| Name | Description | Value |
|-|-|-|
| canonicalName | CNAME of the certificate to be issued via free certificate | string |
| domainValidationMethod | Method of domain validation for free cert | string |
| hostNames | Host names the certificate applies to. | string[] |
| keyVaultId | Key Vault Csm resource Id. | string |
| keyVaultSecretName | Key Vault secret name. | string |
| password | Certificate password. | string |
| pfxBlob | Pfx blob. | For Bicep, you can use theany()function. |
| serverFarmId | Resource ID of the associated App Service plan, formatted as: "/subscriptions/{subscriptionID}/resourceGroups/{groupName}/providers/Microsoft.Web/serverfarms/{appServicePlanName}". | string |


