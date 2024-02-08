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

### domainServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| etag | Resource etag | string |
| properties | Domain service properties | DomainServiceProperties |


### DomainServiceProperties

| Name | Description | Value |
|-|-|-|
| configDiagnostics | Configuration diagnostics data containing latest execution from client. | ConfigDiagnostics |
| domainConfigurationType | Domain Configuration Type | string |
| domainName | The name of the Azure domain that the user would like to deploy Domain Services to. | string |
| domainSecuritySettings | DomainSecurity Settings | DomainSecuritySettings |
| filteredSync | Enabled or Disabled flag to turn on Group-based filtered sync | 'Disabled''Enabled' |
| ldapsSettings | Secure LDAP Settings | LdapsSettings |
| notificationSettings | Notification Settings | NotificationSettings |
| replicaSets | List of ReplicaSets | ReplicaSet[] |
| resourceForestSettings | Resource Forest Settings | ResourceForestSettings |
| sku | Sku Type | string |
| syncScope | All or CloudOnly, All users in AAD are synced to AAD DS domain or only users actively syncing in the cloud | 'All''CloudOnly' |


### ConfigDiagnostics

| Name | Description | Value |
|-|-|-|
| lastExecuted | Last domain configuration diagnostics DateTime | string |
| validatorResults | List of Configuration Diagnostics validator results. | ConfigDiagnosticsValidatorResult[] |


### ConfigDiagnosticsValidatorResult

| Name | Description | Value |
|-|-|-|
| issues | List of resource config validation issues. | ConfigDiagnosticsValidatorResultIssue[] |
| replicaSetSubnetDisplayName | Replica set location and subnet name | string |
| status | Status for individual validator after running diagnostics. | 'Failure''None''OK''Running''Skipped''Warning' |
| validatorId | Validator identifier | string |


### ConfigDiagnosticsValidatorResultIssue

| Name | Description | Value |
|-|-|-|
| descriptionParams | List of domain resource property name or values used to compose a rich description. | string[] |
| id | Validation issue identifier. | string |


### DomainSecuritySettings

| Name | Description | Value |
|-|-|-|
| channelBinding | A flag to determine whether or not ChannelBinding is enabled or disabled. | 'Disabled''Enabled' |
| kerberosArmoring | A flag to determine whether or not KerberosArmoring is enabled or disabled. | 'Disabled''Enabled' |
| kerberosRc4Encryption | A flag to determine whether or not KerberosRc4Encryption is enabled or disabled. | 'Disabled''Enabled' |
| ldapSigning | A flag to determine whether or not LdapSigning is enabled or disabled. | 'Disabled''Enabled' |
| ntlmV1 | A flag to determine whether or not NtlmV1 is enabled or disabled. | 'Disabled''Enabled' |
| syncKerberosPasswords | A flag to determine whether or not SyncKerberosPasswords is enabled or disabled. | 'Disabled''Enabled' |
| syncNtlmPasswords | A flag to determine whether or not SyncNtlmPasswords is enabled or disabled. | 'Disabled''Enabled' |
| syncOnPremPasswords | A flag to determine whether or not SyncOnPremPasswords is enabled or disabled. | 'Disabled''Enabled' |
| tlsV1 | A flag to determine whether or not TlsV1 is enabled or disabled. | 'Disabled''Enabled' |


### LdapsSettings

| Name | Description | Value |
|-|-|-|
| externalAccess | A flag to determine whether or not Secure LDAP access over the internet is enabled or disabled. | 'Disabled''Enabled' |
| ldaps | A flag to determine whether or not Secure LDAP is enabled or disabled. | 'Disabled''Enabled' |
| pfxCertificate | The certificate required to configure Secure LDAP. The parameter passed here should be a base64encoded representation of the certificate pfx file. | string |
| pfxCertificatePassword | The password to decrypt the provided Secure LDAP certificate pfx file. | string |


### NotificationSettings

| Name | Description | Value |
|-|-|-|
| additionalRecipients | The list of additional recipients | string[] |
| notifyDcAdmins | Should domain controller admins be notified | 'Disabled''Enabled' |
| notifyGlobalAdmins | Should global admins be notified | 'Disabled''Enabled' |


### ReplicaSet

| Name | Description | Value |
|-|-|-|
| location | Virtual network location | string |
| subnetId | The name of the virtual network that Domain Services will be deployed on. The id of the subnet that Domain Services will be deployed on. /virtualNetwork/vnetName/subnets/subnetName. | string |


### ResourceForestSettings

| Name | Description | Value |
|-|-|-|
| resourceForest | Resource Forest | string |
| settings | List of settings for Resource Forest | ForestTrust[] |


### ForestTrust

| Name | Description | Value |
|-|-|-|
| friendlyName | Friendly Name | string |
| remoteDnsIps | Remote Dns ips | string |
| trustDirection | Trust Direction | string |
| trustedDomainFqdn | Trusted Domain FQDN | string |
| trustPassword | Trust Password | string |


