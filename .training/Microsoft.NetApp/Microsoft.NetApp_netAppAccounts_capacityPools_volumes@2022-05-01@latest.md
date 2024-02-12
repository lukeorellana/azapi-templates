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


