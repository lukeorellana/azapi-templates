```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Batch/batchAccounts/certificates@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      data = "string"
      format = "string"
      password = "string"
      thumbprint = "string"
      thumbprintAlgorithm = "string"
    }
  })
}

```

### batchAccounts/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 5-45Valid characters:Alphanumerics, underscores, and hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:batchAccounts |
| properties | The properties associated with the certificate. | CertificateCreateOrUpdatePropertiesOrCertificateProp... |


### CertificateCreateOrUpdatePropertiesOrCertificateProp...

| Name | Description | Value |
|-|-|-|
| data | The maximum size is 10KB. | string (required) |
| format | The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx. | 'Cer''Pfx' |
| password | This must not be specified if the certificate format is Cer. | string |
| thumbprint | This must match the thumbprint from the name. | string |
| thumbprintAlgorithm | This must match the first portion of the certificate name. Currently required to be 'SHA1'. | string |


