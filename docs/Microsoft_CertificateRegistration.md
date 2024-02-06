## Microsoft.CertificateRegistration/certificateOrders@2022-09-01

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

## Microsoft.CertificateRegistration/certificateOrders/certificates@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CertificateRegistration/certificateOrders/certificates@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      keyVaultId = "string"
      keyVaultSecretName = "string"
    }
    kind = "string"
  })
}

```

