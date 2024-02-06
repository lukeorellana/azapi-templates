## Microsoft.NetApp/netAppAccounts@2022-05-01

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
## Microsoft.NetApp/netAppAccounts/backupPolicies@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/backupPolicies@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dailyBackupsToKeep = int
      enabled = bool
      monthlyBackupsToKeep = int
      weeklyBackupsToKeep = int
    }
  })
}

```

### netAppAccounts/backupPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics, underscores, and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:netAppAccounts |
| properties | Backup policy Properties | BackupPolicyProperties(required) |


### BackupPolicyProperties

| Name | Description | Value |
|-|-|-|
| dailyBackupsToKeep | Daily backups count to keep | int |
| enabled | The property to decide policy is enabled or not | bool |
| monthlyBackupsToKeep | Monthly backups count to keep | int |
| weeklyBackupsToKeep | Weekly backups count to keep | int |
## Microsoft.NetApp/netAppAccounts/capacityPools@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      coolAccess = bool
      encryptionType = "string"
      qosType = "string"
      serviceLevel = "string"
      size = int
    }
  })
}

```

### netAppAccounts/capacityPools

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics, underscores, and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:netAppAccounts |
| properties | Capacity pool properties | PoolProperties(required) |


### PoolProperties

| Name | Description | Value |
|-|-|-|
| coolAccess | If enabled (true) the pool can contain cool Access enabled volumes. | bool |
| encryptionType | Encryption type of the capacity pool, set encryption type for data at rest for this pool and all volumes in it. This value can only be set when creating new pool. | 'Double''Single' |
| qosType | The qos type of the pool | 'Auto''Manual' |
| serviceLevel | The service level of the file system | 'Premium''Standard''StandardZRS''Ultra' (required) |
| size | Provisioned size of the pool (in bytes). Allowed values are in 1TiB chunks (value must be multiply of 4398046511104). | int (required) |
## Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      avsDataStore = "string"
      backupId = "string"
      capacityPoolResourceId = "string"
      coolAccess = bool
      coolnessPeriod = int
      creationToken = "string"
      dataProtection = {
        backup = {
          backupEnabled = bool
          backupPolicyId = "string"
          policyEnforced = bool
          vaultId = "string"
        }
        replication = {
          endpointType = "string"
          remoteVolumeRegion = "string"
          remoteVolumeResourceId = "string"
          replicationId = "string"
          replicationSchedule = "string"
        }
        snapshot = {
          snapshotPolicyId = "string"
        }
      }
      defaultGroupQuotaInKiBs = int
      defaultUserQuotaInKiBs = int
      deleteBaseSnapshot = bool
      enableSubvolumes = "string"
      encryptionKeySource = "string"
      exportPolicy = {
        rules = [
          {
            allowedClients = "string"
            chownMode = "string"
            cifs = bool
            hasRootAccess = bool
            kerberos5iReadWrite = bool
            kerberos5pReadWrite = bool
            kerberos5ReadWrite = bool
            nfsv3 = bool
            nfsv41 = bool
            ruleIndex = int
            unixReadWrite = bool
          }
        ]
      }
      isDefaultQuotaEnabled = bool
      isRestoring = bool
      kerberosEnabled = bool
      keyVaultPrivateEndpointResourceId = "string"
      ldapEnabled = bool
      networkFeatures = "string"
      placementRules = [
        {
          key = "string"
          value = "string"
        }
      ]
      protocolTypes = [
        "string"
      ]
      proximityPlacementGroup = "string"
      securityStyle = "string"
      serviceLevel = "string"
      smbAccessBasedEnumeration = "string"
      smbContinuouslyAvailable = bool
      smbEncryption = bool
      smbNonBrowsable = "string"
      snapshotDirectoryVisible = bool
      snapshotId = "string"
      subnetId = "string"
      throughputMibps = int
      unixPermissions = "string"
      usageThreshold = int
      volumeSpecName = "string"
      volumeType = "string"
    }
    zones = [
      "string"
    ]
  })
}

```

### netAppAccounts/capacityPools/volumes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:capacityPools |
| properties | Volume properties | VolumeProperties(required) |
| zones | Availability Zone | string[] |


### VolumeProperties

| Name | Description | Value |
|-|-|-|
| avsDataStore | Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose | 'Disabled''Enabled' |
| backupId | UUID v4 or resource identifier used to identify the Backup. | string |
| capacityPoolResourceId | Pool Resource Id used in case of creating a volume through volume group | string |
| coolAccess | Specifies whether Cool Access(tiering) is enabled for the volume. | bool |
| coolnessPeriod | Specifies the number of days after which data that is not accessed by clients will be tiered. | int |
| creationToken | A unique file path for the volume. Used when creating mount targets | string (required) |
| dataProtection | DataProtection type volumes include an object containing details of the replication | VolumePropertiesDataProtection |
| defaultGroupQuotaInKiBs | Default group quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies. | int |
| defaultUserQuotaInKiBs | Default user quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies . | int |
| deleteBaseSnapshot | If enabled (true) the snapshot the volume was created from will be automatically deleted after the volume create operation has finished.  Defaults to false | bool |
| enableSubvolumes | Flag indicating whether subvolume operations are enabled on the volume | 'Disabled''Enabled' |
| encryptionKeySource | Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault' | 'Microsoft.KeyVault''Microsoft.NetApp' |
| exportPolicy | Set of export policy rules | VolumePropertiesExportPolicy |
| isDefaultQuotaEnabled | Specifies if default quota is enabled for the volume. | bool |
| isRestoring | Restoring | bool |
| kerberosEnabled | Describe if a volume is KerberosEnabled. To be use with swagger version 2020-05-01 or later | bool |
| keyVaultPrivateEndpointResourceId | The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'. | string |
| ldapEnabled | Specifies whether LDAP is enabled or not for a given NFS volume. | bool |
| networkFeatures | Basic network, or Standard features available to the volume. | 'Basic''Standard' |
| placementRules | Application specific placement rules for the particular volume | PlacementKeyValuePairs[] |
| protocolTypes | Set of protocol types, default NFSv3, CIFS for SMB protocol | string[] |
| proximityPlacementGroup | Proximity placement group associated with the volume | string |
| securityStyle | The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol | 'ntfs''unix' |
| serviceLevel | The service level of the file system | 'Premium''Standard''StandardZRS''Ultra' |
| smbAccessBasedEnumeration | Enables access based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume | 'Disabled''Enabled' |
| smbContinuouslyAvailable | Enables continuously available share property for smb volume. Only applicable for SMB volume | bool |
| smbEncryption | Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later | bool |
| smbNonBrowsable | Enables non browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume | 'Disabled''Enabled' |
| snapshotDirectoryVisible | If enabled (true) the volume will contain a read-only snapshot directory which provides access to each of the volume's snapshots (default to true). | bool |
| snapshotId | UUID v4 or resource identifier used to identify the Snapshot. | string |
| subnetId | The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes | string (required) |
| throughputMibps | Maximum throughput in MiB/s that can be achieved by this volume and this will be accepted as input only for manual qosType volume | int |
| unixPermissions | UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file: read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users. | string |
| usageThreshold | Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 500 GiB. Upper limit is 100TiB, 500Tib for LargeVolume. Specified in bytes. | int (required) |
| volumeSpecName | Volume spec name is the application specific designation or identifier for the particular volume in a volume group for e.g. data, log | string |
| volumeType | What type of volume is this. For destination volumes in Cross Region Replication, set type to DataProtection | string |


### VolumePropertiesDataProtection

| Name | Description | Value |
|-|-|-|
| backup | Backup Properties | VolumeBackupProperties |
| replication | Replication properties | ReplicationObject |
| snapshot | Snapshot properties. | VolumeSnapshotProperties |


### VolumeBackupProperties

| Name | Description | Value |
|-|-|-|
| backupEnabled | Backup Enabled | bool |
| backupPolicyId | Backup Policy Resource ID | string |
| policyEnforced | Policy Enforced | bool |
| vaultId | Vault Resource ID | string |


### ReplicationObject

| Name | Description | Value |
|-|-|-|
| endpointType | Indicates whether the local volume is the source or destination for the Volume Replication | 'dst''src' |
| remoteVolumeRegion | The remote region for the other end of the Volume Replication. | string |
| remoteVolumeResourceId | The resource ID of the remote volume. | string (required) |
| replicationId | Id | string |
| replicationSchedule | Schedule | '_10minutely''daily''hourly' |


### VolumeSnapshotProperties

| Name | Description | Value |
|-|-|-|
| snapshotPolicyId | Snapshot Policy ResourceId | string |


### VolumePropertiesExportPolicy

| Name | Description | Value |
|-|-|-|
| rules | Export policy rule | ExportPolicyRule[] |


### ExportPolicyRule

| Name | Description | Value |
|-|-|-|
| allowedClients | Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names | string |
| chownMode | This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own. | 'Restricted''Unrestricted' |
| cifs | Allows CIFS protocol | bool |
| hasRootAccess | Has root access to volume | bool |
| kerberos5iReadWrite | Kerberos5i Read and write access. To be use with swagger version 2020-05-01 or later | bool |
| kerberos5pReadWrite | Kerberos5p Read and write access. To be use with swagger version 2020-05-01 or later | bool |
| kerberos5ReadWrite | Kerberos5 Read and write access. To be use with swagger version 2020-05-01 or later | bool |
| nfsv3 | Allows NFSv3 protocol. Enable only for NFSv3 type volumes | bool |
| nfsv41 | Allows NFSv4.1 protocol. Enable only for NFSv4.1 type volumes | bool |
| ruleIndex | Order index | int |
| unixReadWrite | Read and write access | bool |


### PlacementKeyValuePairs

| Name | Description | Value |
|-|-|-|
| key | Key for an application specific parameter for the placement of volumes in the volume group | string (required) |
| value | Value for an application specific parameter for the placement of volumes in the volume group | string (required) |
## Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      label = "string"
      useExistingSnapshot = bool
    }
  })
}

```

### netAppAccounts/capacityPools/volumes/backups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumes |
| properties | Backup Properties | BackupProperties(required) |


### BackupProperties

| Name | Description | Value |
|-|-|-|
| label | Label for backup | string |
| useExistingSnapshot | Manual backup an already existing snapshot. This will always be false for scheduled backups and true/false for manual backups | bool |
## Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### netAppAccounts/capacityPools/volumes/snapshots

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumes |
| properties | Snapshot Properties | SnapshotProperties |
## Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parentPath = "string"
      path = "string"
      size = int
    }
  })
}

```

### netAppAccounts/capacityPools/volumes/subvolumes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumes |
| properties | Subvolume Properties | SubvolumeProperties |


### SubvolumeProperties

| Name | Description | Value |
|-|-|-|
| parentPath | parent path to the subvolume | string |
| path | Path to the subvolume | string |
| size | Truncate subvolume to the provided size in bytes | int |
## Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      quotaSizeInKiBs = int
      quotaTarget = "string"
      quotaType = "string"
    }
  })
}

```

### netAppAccounts/capacityPools/volumes/volumeQuotaRule...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:volumes |
| properties | Volume Quota Rule Properties | VolumeQuotaRulesProperties |


### VolumeQuotaRulesProperties

| Name | Description | Value |
|-|-|-|
| quotaSizeInKiBs | Size of quota | int |
| quotaTarget | UserID/GroupID/SID based on the quota target type. UserID and groupID can be found by running âidâ or âgetentâ command for the user or group and SID can be found by running {wmic useraccount where name='user-name' get sid} | string |
| quotaType | Type of quota | 'DefaultGroupQuota''DefaultUserQuota''IndividualGroupQuota''IndividualUserQuota' |
## Microsoft.NetApp/netAppAccounts/snapshotPolicies@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/snapshotPolicies@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dailySchedule = {
        hour = int
        minute = int
        snapshotsToKeep = int
        usedBytes = int
      }
      enabled = bool
      hourlySchedule = {
        minute = int
        snapshotsToKeep = int
        usedBytes = int
      }
      monthlySchedule = {
        daysOfMonth = "string"
        hour = int
        minute = int
        snapshotsToKeep = int
        usedBytes = int
      }
      weeklySchedule = {
        day = "string"
        hour = int
        minute = int
        snapshotsToKeep = int
        usedBytes = int
      }
    }
  })
}

```

### netAppAccounts/snapshotPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-64Valid characters:Alphanumerics, underscores, and hyphens.Start with alphanumeric. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:netAppAccounts |
| properties | Snapshot policy Properties | SnapshotPolicyProperties(required) |


### SnapshotPolicyProperties

| Name | Description | Value |
|-|-|-|
| dailySchedule | Schedule for daily snapshots | DailySchedule |
| enabled | The property to decide policy is enabled or not | bool |
| hourlySchedule | Schedule for hourly snapshots | HourlySchedule |
| monthlySchedule | Schedule for monthly snapshots | MonthlySchedule |
| weeklySchedule | Schedule for weekly snapshots | WeeklySchedule |


### DailySchedule

| Name | Description | Value |
|-|-|-|
| hour | Indicates which hour in UTC timezone a snapshot should be taken | int |
| minute | Indicates which minute snapshot should be taken | int |
| snapshotsToKeep | Daily snapshot count to keep | int |
| usedBytes | Resource size in bytes, current storage usage for the volume in bytes | int |


### HourlySchedule

| Name | Description | Value |
|-|-|-|
| minute | Indicates which minute snapshot should be taken | int |
| snapshotsToKeep | Hourly snapshot count to keep | int |
| usedBytes | Resource size in bytes, current storage usage for the volume in bytes | int |


### MonthlySchedule

| Name | Description | Value |
|-|-|-|
| daysOfMonth | Indicates which days of the month snapshot should be taken. A comma delimited string. | string |
| hour | Indicates which hour in UTC timezone a snapshot should be taken | int |
| minute | Indicates which minute snapshot should be taken | int |
| snapshotsToKeep | Monthly snapshot count to keep | int |
| usedBytes | Resource size in bytes, current storage usage for the volume in bytes | int |


### WeeklySchedule

| Name | Description | Value |
|-|-|-|
| day | Indicates which weekdays snapshot should be taken, accepts a comma separated list of week day names in english | string |
| hour | Indicates which hour in UTC timezone a snapshot should be taken | int |
| minute | Indicates which minute snapshot should be taken | int |
| snapshotsToKeep | Weekly snapshot count to keep | int |
| usedBytes | Resource size in bytes, current storage usage for the volume in bytes | int |
## Microsoft.NetApp/netAppAccounts/volumeGroups@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NetApp/netAppAccounts/volumeGroups@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupMetaData = {
        applicationIdentifier = "string"
        applicationType = "SAP-HANA"
        deploymentSpecId = "string"
        globalPlacementRules = [
          {
            key = "string"
            value = "string"
          }
        ]
        groupDescription = "string"
      }
      volumes = [
        {
          name = "string"
          properties = {
            avsDataStore = "string"
            backupId = "string"
            capacityPoolResourceId = "string"
            coolAccess = bool
            coolnessPeriod = int
            creationToken = "string"
            dataProtection = {
              backup = {
                backupEnabled = bool
                backupPolicyId = "string"
                policyEnforced = bool
                vaultId = "string"
              }
              replication = {
                endpointType = "string"
                remoteVolumeRegion = "string"
                remoteVolumeResourceId = "string"
                replicationId = "string"
                replicationSchedule = "string"
              }
              snapshot = {
                snapshotPolicyId = "string"
              }
            }
            defaultGroupQuotaInKiBs = int
            defaultUserQuotaInKiBs = int
            deleteBaseSnapshot = bool
            enableSubvolumes = "string"
            encryptionKeySource = "string"
            exportPolicy = {
              rules = [
                {
                  allowedClients = "string"
                  chownMode = "string"
                  cifs = bool
                  hasRootAccess = bool
                  kerberos5iReadWrite = bool
                  kerberos5pReadWrite = bool
                  kerberos5ReadWrite = bool
                  nfsv3 = bool
                  nfsv41 = bool
                  ruleIndex = int
                  unixReadWrite = bool
                }
              ]
            }
            isDefaultQuotaEnabled = bool
            isRestoring = bool
            kerberosEnabled = bool
            keyVaultPrivateEndpointResourceId = "string"
            ldapEnabled = bool
            networkFeatures = "string"
            placementRules = [
              {
                key = "string"
                value = "string"
              }
            ]
            protocolTypes = [
              "string"
            ]
            proximityPlacementGroup = "string"
            securityStyle = "string"
            serviceLevel = "string"
            smbAccessBasedEnumeration = "string"
            smbContinuouslyAvailable = bool
            smbEncryption = bool
            smbNonBrowsable = "string"
            snapshotDirectoryVisible = bool
            snapshotId = "string"
            subnetId = "string"
            throughputMibps = int
            unixPermissions = "string"
            usageThreshold = int
            volumeSpecName = "string"
            volumeType = "string"
          }
          tags = {}
        }
      ]
    }
  })
}

```

### netAppAccounts/volumeGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-64Valid characters:Alphanumerics, underscores, and hyphens.Start with alphanumeric. |
| location | Resource location | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:netAppAccounts |
| properties | Volume group properties | VolumeGroupProperties |


### VolumeGroupProperties

| Name | Description | Value |
|-|-|-|
| groupMetaData | Volume group details | VolumeGroupMetaData |
| volumes | List of volumes from group | VolumeGroupVolumeProperties[] |


### VolumeGroupMetaData

| Name | Description | Value |
|-|-|-|
| applicationIdentifier | Application specific identifier | string |
| applicationType | Application Type | 'SAP-HANA' |
| deploymentSpecId | Application specific identifier of deployment rules for the volume group | string |
| globalPlacementRules | Application specific placement rules for the volume group | PlacementKeyValuePairs[] |
| groupDescription | Group Description | string |


### PlacementKeyValuePairs

| Name | Description | Value |
|-|-|-|
| key | Key for an application specific parameter for the placement of volumes in the volume group | string (required) |
| value | Value for an application specific parameter for the placement of volumes in the volume group | string (required) |


### VolumeGroupVolumeProperties

| Name | Description | Value |
|-|-|-|
| name | Resource name | string |
| properties | Volume properties | VolumeProperties(required) |
| tags | Resource tags | object |


### VolumeProperties

| Name | Description | Value |
|-|-|-|
| avsDataStore | Specifies whether the volume is enabled for Azure VMware Solution (AVS) datastore purpose | 'Disabled''Enabled' |
| backupId | UUID v4 or resource identifier used to identify the Backup. | string |
| capacityPoolResourceId | Pool Resource Id used in case of creating a volume through volume group | string |
| coolAccess | Specifies whether Cool Access(tiering) is enabled for the volume. | bool |
| coolnessPeriod | Specifies the number of days after which data that is not accessed by clients will be tiered. | int |
| creationToken | A unique file path for the volume. Used when creating mount targets | string (required) |
| dataProtection | DataProtection type volumes include an object containing details of the replication | VolumePropertiesDataProtection |
| defaultGroupQuotaInKiBs | Default group quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies. | int |
| defaultUserQuotaInKiBs | Default user quota for volume in KiBs. If isDefaultQuotaEnabled is set, the minimum value of 4 KiBs applies . | int |
| deleteBaseSnapshot | If enabled (true) the snapshot the volume was created from will be automatically deleted after the volume create operation has finished.  Defaults to false | bool |
| enableSubvolumes | Flag indicating whether subvolume operations are enabled on the volume | 'Disabled''Enabled' |
| encryptionKeySource | Source of key used to encrypt data in volume. Applicable if NetApp account has encryption.keySource = 'Microsoft.KeyVault'. Possible values (case-insensitive) are: 'Microsoft.NetApp, Microsoft.KeyVault' | 'Microsoft.KeyVault''Microsoft.NetApp' |
| exportPolicy | Set of export policy rules | VolumePropertiesExportPolicy |
| isDefaultQuotaEnabled | Specifies if default quota is enabled for the volume. | bool |
| isRestoring | Restoring | bool |
| kerberosEnabled | Describe if a volume is KerberosEnabled. To be use with swagger version 2020-05-01 or later | bool |
| keyVaultPrivateEndpointResourceId | The resource ID of private endpoint for KeyVault. It must reside in the same VNET as the volume. Only applicable if encryptionKeySource = 'Microsoft.KeyVault'. | string |
| ldapEnabled | Specifies whether LDAP is enabled or not for a given NFS volume. | bool |
| networkFeatures | Basic network, or Standard features available to the volume. | 'Basic''Standard' |
| placementRules | Application specific placement rules for the particular volume | PlacementKeyValuePairs[] |
| protocolTypes | Set of protocol types, default NFSv3, CIFS for SMB protocol | string[] |
| proximityPlacementGroup | Proximity placement group associated with the volume | string |
| securityStyle | The security style of volume, default unix, defaults to ntfs for dual protocol or CIFS protocol | 'ntfs''unix' |
| serviceLevel | The service level of the file system | 'Premium''Standard''StandardZRS''Ultra' |
| smbAccessBasedEnumeration | Enables access based enumeration share property for SMB Shares. Only applicable for SMB/DualProtocol volume | 'Disabled''Enabled' |
| smbContinuouslyAvailable | Enables continuously available share property for smb volume. Only applicable for SMB volume | bool |
| smbEncryption | Enables encryption for in-flight smb3 data. Only applicable for SMB/DualProtocol volume. To be used with swagger version 2020-08-01 or later | bool |
| smbNonBrowsable | Enables non browsable property for SMB Shares. Only applicable for SMB/DualProtocol volume | 'Disabled''Enabled' |
| snapshotDirectoryVisible | If enabled (true) the volume will contain a read-only snapshot directory which provides access to each of the volume's snapshots (default to true). | bool |
| snapshotId | UUID v4 or resource identifier used to identify the Snapshot. | string |
| subnetId | The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes | string (required) |
| throughputMibps | Maximum throughput in MiB/s that can be achieved by this volume and this will be accepted as input only for manual qosType volume | int |
| unixPermissions | UNIX permissions for NFS volume accepted in octal 4 digit format. First digit selects the set user ID(4), set group ID (2) and sticky (1) attributes. Second digit selects permission for the owner of the file: read (4), write (2) and execute (1). Third selects permissions for other users in the same group. the fourth for other users not in the group. 0755 - gives read/write/execute permissions to owner and read/execute to group and other users. | string |
| usageThreshold | Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 500 GiB. Upper limit is 100TiB, 500Tib for LargeVolume. Specified in bytes. | int (required) |
| volumeSpecName | Volume spec name is the application specific designation or identifier for the particular volume in a volume group for e.g. data, log | string |
| volumeType | What type of volume is this. For destination volumes in Cross Region Replication, set type to DataProtection | string |


### VolumePropertiesDataProtection

| Name | Description | Value |
|-|-|-|
| backup | Backup Properties | VolumeBackupProperties |
| replication | Replication properties | ReplicationObject |
| snapshot | Snapshot properties. | VolumeSnapshotProperties |


### VolumeBackupProperties

| Name | Description | Value |
|-|-|-|
| backupEnabled | Backup Enabled | bool |
| backupPolicyId | Backup Policy Resource ID | string |
| policyEnforced | Policy Enforced | bool |
| vaultId | Vault Resource ID | string |


### ReplicationObject

| Name | Description | Value |
|-|-|-|
| endpointType | Indicates whether the local volume is the source or destination for the Volume Replication | 'dst''src' |
| remoteVolumeRegion | The remote region for the other end of the Volume Replication. | string |
| remoteVolumeResourceId | The resource ID of the remote volume. | string (required) |
| replicationId | Id | string |
| replicationSchedule | Schedule | '_10minutely''daily''hourly' |


### VolumeSnapshotProperties

| Name | Description | Value |
|-|-|-|
| snapshotPolicyId | Snapshot Policy ResourceId | string |


### VolumePropertiesExportPolicy

| Name | Description | Value |
|-|-|-|
| rules | Export policy rule | ExportPolicyRule[] |


### ExportPolicyRule

| Name | Description | Value |
|-|-|-|
| allowedClients | Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names | string |
| chownMode | This parameter specifies who is authorized to change the ownership of a file. restricted - Only root user can change the ownership of the file. unrestricted - Non-root users can change ownership of files that they own. | 'Restricted''Unrestricted' |
| cifs | Allows CIFS protocol | bool |
| hasRootAccess | Has root access to volume | bool |
| kerberos5iReadWrite | Kerberos5i Read and write access. To be use with swagger version 2020-05-01 or later | bool |
| kerberos5pReadWrite | Kerberos5p Read and write access. To be use with swagger version 2020-05-01 or later | bool |
| kerberos5ReadWrite | Kerberos5 Read and write access. To be use with swagger version 2020-05-01 or later | bool |
| nfsv3 | Allows NFSv3 protocol. Enable only for NFSv3 type volumes | bool |
| nfsv41 | Allows NFSv4.1 protocol. Enable only for NFSv4.1 type volumes | bool |
| ruleIndex | Order index | int |
| unixReadWrite | Read and write access | bool |
