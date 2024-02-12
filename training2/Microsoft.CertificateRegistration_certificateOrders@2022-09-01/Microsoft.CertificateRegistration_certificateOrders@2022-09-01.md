```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CertificateRegistration/certificateOrders@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoRenew = bool
      certificates = {}
      csr = "string"
      distinguishedName = "string"
      keySize = int
      productType = "string"
      validityInYears = int
    }
    kind = "string"
  })
}

```

### certificateOrders

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-30Valid characters:Alphanumerics. |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| properties | AppServiceCertificateOrder resource specific properties | AppServiceCertificateOrderProperties |


### AppServiceCertificateOrderProperties

| Name | Description | Value |
|-|-|-|
| autoRenew | trueif the certificate should be automatically renewed when it expires; otherwise,false. | bool |
| certificates | State of the Key Vault secret. | object |
| csr | Last CSR that was created for this order. | string |
| distinguishedName | Certificate distinguished name. | string |
| keySize | Certificate key size. | int |
| productType | Certificate product type. | 'StandardDomainValidatedSsl''StandardDomainValidatedWildCardSsl' (required) |
| validityInYears | Duration in years (must be 1). | int |


