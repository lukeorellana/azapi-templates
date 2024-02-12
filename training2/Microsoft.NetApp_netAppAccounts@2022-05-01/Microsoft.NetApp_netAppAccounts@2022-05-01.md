```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      activeDirectories = [
        {
          activeDirectoryId = "string"
          administrators = [
            "string"
          ]
          adName = "string"
          aesEncryption = bool
          allowLocalNfsUsersWithLdap = bool
          backupOperators = [
            "string"
          ]
          dns = "string"
          domain = "string"
          encryptDCConnections = bool
          kdcIP = "string"
          ldapOverTLS = bool
          ldapSearchScope = {
            groupDN = "string"
            groupMembershipFilter = "string"
            userDN = "string"
          }
          ldapSigning = bool
          organizationalUnit = "string"
          password = "string"
          securityOperators = [
            "string"
          ]
          serverRootCACertificate = "string"
          site = "string"
          smbServerName = "string"
          username = "string"
        }
      ]
      encryption = {
        identity = {
          userAssignedIdentity = "string"
        }
        keySource = "string"
        keyVaultProperties = {
          keyName = "string"
          keyVaultResourceId = "string"
          keyVaultUri = "string"
        }
      }
    }
  })
}

```

### netAppAccounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-128Valid characters:Alphanumerics, underscores, and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of the resource. | Identity |
| properties | NetApp Account properties | AccountProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this storage account. The key is the ARM resource identifier of the identity. Only 1 User Assigned identity is permitted here. | object |


### AccountProperties

| Name | Description | Value |
|-|-|-|
| activeDirectories | Active Directories | ActiveDirectory[] |
| encryption | Encryption settings | AccountEncryption |


### ActiveDirectory

| Name | Description | Value |
|-|-|-|
| activeDirectoryId | Id of the Active Directory | string |
| administrators | Users to be added to the Built-in Administrators active directory group. A list of unique usernames without domain specifier | string[] |
| adName | Name of the active directory machine. This optional parameter is used only while creating kerberos volume | string |
| aesEncryption | If enabled, AES encryption will be enabled for SMB communication. | bool |
| allowLocalNfsUsersWithLdap | If enabled, NFS client local users can also (in addition to LDAP users) access the NFS volumes. | bool |
| backupOperators | Users to be added to the Built-in Backup Operator active directory group. A list of unique usernames without domain specifier | string[] |
| dns | Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain | string |
| domain | Name of the Active Directory domain | string |
| encryptDCConnections | If enabled, Traffic between the SMB server to Domain Controller (DC) will be encrypted. | bool |
| kdcIP | kdc server IP addresses for the active directory machine. This optional parameter is used only while creating kerberos volume. | string |
| ldapOverTLS | Specifies whether or not the LDAP traffic needs to be secured via TLS. | bool |
| ldapSearchScope | LDAP Search scope options | LdapSearchScopeOpt |
| ldapSigning | Specifies whether or not the LDAP traffic needs to be signed. | bool |
| organizationalUnit | The Organizational Unit (OU) within the Windows Active Directory | string |
| password | Plain text password of Active Directory domain administrator, value is masked in the response | string |
| securityOperators | Domain Users in the Active directory to be given SeSecurityPrivilege privilege (Needed for SMB Continuously available shares for SQL). A list of unique usernames without domain specifier | string[] |
| serverRootCACertificate | When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes. | string |
| site | The Active Directory site the service will limit Domain Controller discovery to | string |
| smbServerName | NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes | string |
| username | Username of Active Directory domain administrator | string |


### LdapSearchScopeOpt

| Name | Description | Value |
|-|-|-|
| groupDN | This specifies the group DN, which overrides the base DN for group lookups. | string |
| groupMembershipFilter | This specifies the custom LDAP search filter to be used when looking up group membership from LDAP server. | string |
| userDN | This specifies the user DN, which overrides the base DN for user lookups. | string |


### AccountEncryption

| Name | Description | Value |
|-|-|-|
| identity | Identity used to authenticate to KeyVault. Applicable if keySource is 'Microsoft.KeyVault'. | EncryptionIdentity |
| keySource | The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.NetApp, Microsoft.KeyVault | 'Microsoft.KeyVault''Microsoft.NetApp' |
| keyVaultProperties | Properties provided by KeVault. Applicable if keySource is 'Microsoft.KeyVault'. | KeyVaultProperties |


### EncryptionIdentity

| Name | Description | Value |
|-|-|-|
| userAssignedIdentity | The ARM resource identifier of the user assigned identity used to authenticate with key vault. Applicable if identity.type has 'UserAssigned'. It should match key of identity.userAssignedIdentities. | string |


### KeyVaultProperties

| Name | Description | Value |
|-|-|-|
| keyName | The name of KeyVault key. | string (required) |
| keyVaultResourceId | The resource ID of KeyVault. | string (required) |
| keyVaultUri | The Uri of KeyVault. | string (required) |


