```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/certificates@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      base64Value = "string"
      description = "string"
      isExportable = bool
      thumbprint = "string"
    }
  })
}

```

### automationAccounts/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\?.+/or control charactersCan't end with space. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the properties of the certificate. | CertificateCreateOrUpdatePropertiesOrCertificateProp...(required) |


### CertificateCreateOrUpdatePropertiesOrCertificateProp...

| Name | Description | Value |
|-|-|-|
| base64Value | Gets or sets the base64 encoded value of the certificate. | string (required) |
| description | Gets or sets the description of the certificate. | string |
| isExportable | Gets or sets the is exportable flag of the certificate. | bool |
| thumbprint | Gets or sets the thumbprint of the certificate. | string |


