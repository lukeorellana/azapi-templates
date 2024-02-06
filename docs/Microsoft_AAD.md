## Microsoft.AAD/domainServices@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AAD/domainServices@2022-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      configDiagnostics = {
        lastExecuted = "string"
        validatorResults = [
          {
            issues = [
              {
                descriptionParams = [
                  "string"
                ]
                id = "string"
              }
            ]
            replicaSetSubnetDisplayName = "string"
            status = "string"
            validatorId = "string"
          }
        ]
      }
      domainConfigurationType = "string"
      domainName = "string"
      domainSecuritySettings = {
        channelBinding = "string"
        kerberosArmoring = "string"
        kerberosRc4Encryption = "string"
        ldapSigning = "string"
        ntlmV1 = "string"
        syncKerberosPasswords = "string"
        syncNtlmPasswords = "string"
        syncOnPremPasswords = "string"
        tlsV1 = "string"
      }
      filteredSync = "string"
      ldapsSettings = {
        externalAccess = "string"
        ldaps = "string"
        pfxCertificate = "string"
        pfxCertificatePassword = "string"
      }
      notificationSettings = {
        additionalRecipients = [
          "string"
        ]
        notifyDcAdmins = "string"
        notifyGlobalAdmins = "string"
      }
      replicaSets = [
        {
          location = "string"
          subnetId = "string"
        }
      ]
      resourceForestSettings = {
        resourceForest = "string"
        settings = [
          {
            friendlyName = "string"
            remoteDnsIps = "string"
            trustDirection = "string"
            trustedDomainFqdn = "string"
            trustPassword = "string"
          }
        ]
      }
      sku = "string"
      syncScope = "string"
    }
    etag = "string"
  })
}

```

