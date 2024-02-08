```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/provisioningServices/certificates@2022-12-12"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isVerified = bool
    }
  })
}

```

### provisioningServices/certificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics, hyphens, periods, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:provisioningServices |
| properties | properties of a certificate | CertificateProperties |


### CertificateProperties

| Name | Description | Value |
|-|-|-|
| certificate | base-64 representation of X509 certificate .cer file or just .pem file content. | For Bicep, you can use theany()function. |
| isVerified | Determines whether certificate has been verified. | bool |


