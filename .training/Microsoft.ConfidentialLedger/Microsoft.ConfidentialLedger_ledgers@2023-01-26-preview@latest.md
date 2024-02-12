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

### ledgers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-32Valid characters:Alphanumerics and hyphens.Can't start or end with hyphen. |
| location | The geo-location where the resource lives | string (required) |
| tags | Additional tags for Confidential Ledger | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of Confidential Ledger Resource. | LedgerProperties |
| runningState | Object representing RunningState for Ledger. | 'Active''Paused''Pausing''Resuming''Unknown' |


### LedgerProperties

| Name | Description | Value |
|-|-|-|
| aadBasedSecurityPrincipals | Array of all AAD based Security Principals. | AADBasedSecurityPrincipal[] |
| certBasedSecurityPrincipals | Array of all cert based Security Principals. | CertBasedSecurityPrincipal[] |
| ledgerType | Type of Confidential Ledger | 'Private''Public''Unknown' |


### AADBasedSecurityPrincipal

| Name | Description | Value |
|-|-|-|
| ledgerRoleName | LedgerRole associated with the Security Principal of Ledger | 'Administrator''Contributor''Reader' |
| principalId | UUID/GUID based Principal Id of the Security Principal | string |
| tenantId | UUID/GUID based Tenant Id of the Security Principal | string |


### CertBasedSecurityPrincipal

| Name | Description | Value |
|-|-|-|
| cert | Public key of the user cert (.pem or .cer) | string |
| ledgerRoleName | LedgerRole associated with the Security Principal of Ledger | 'Administrator''Contributor''Reader' |


