## Microsoft.ConfidentialLedger/ledgers@2023-01-26-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConfidentialLedger/ledgers@2023-01-26-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      aadBasedSecurityPrincipals = [
        {
          ledgerRoleName = "string"
          principalId = "string"
          tenantId = "string"
        }
      ]
      certBasedSecurityPrincipals = [
        {
          cert = "string"
          ledgerRoleName = "string"
        }
      ]
      ledgerType = "string"
    }
    runningState = "string"
  })
}

```

## Microsoft.ConfidentialLedger/managedCCFs@2023-01-26-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConfidentialLedger/managedCCFs@2023-01-26-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      deploymentType = {
        appSourceUri = "string"
        languageRuntime = "string"
      }
      memberIdentityCertificates = [
        {
          certificate = "string"
          encryptionkey = "string"
        }
      ]
      nodeCount = int
    }
  })
}

```

