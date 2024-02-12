```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforMySQL/flexibleServers@2023-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
      availabilityZone = "string"
      backup = {
        backupRetentionDays = int
        geoRedundantBackup = "string"
      }
      createMode = "string"
      dataEncryption = {
        geoBackupKeyURI = "string"
        geoBackupUserAssignedIdentityId = "string"
        primaryKeyURI = "string"
        primaryUserAssignedIdentityId = "string"
        type = "string"
      }
      highAvailability = {
        mode = "string"
        standbyAvailabilityZone = "string"
      }
      importSourceProperties = {
        dataDirPath = "string"
        sasToken = "string"
        storageType = "AzureBlob"
        storageUrl = "string"
      }
      maintenanceWindow = {
        customWindow = "string"
        dayOfWeek = int
        startHour = int
        startMinute = int
      }
      network = {
        delegatedSubnetResourceId = "string"
        privateDnsZoneResourceId = "string"
        publicNetworkAccess = "string"
      }
      replicationRole = "string"
      restorePointInTime = "string"
      sourceServerResourceId = "string"
      storage = {
        autoGrow = "string"
        autoIoScaling = "string"
        iops = int
        logOnDisk = "string"
        storageSizeGB = int
      }
      version = "string"
    }
    sku = {
      name = "string"
      tier = "string"
    }
  })
}

```

### flexibleServers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU (pricing tier) of the server. | MySQLServerSku |
| identity | The cmk identity for the server. | MySQLServerIdentity |
| properties | Properties of the server. | ServerProperties |


### MySQLServerIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'UserAssigned' |
| userAssignedIdentities | Metadata of user assigned identity. | MySQLServerIdentityUserAssignedIdentities |


### MySQLServerIdentityUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |


### ServerProperties

| Name | Description | Value |
|-|-|-|
| administratorLogin | The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation). | string |
| administratorLoginPassword | The password of the administrator login (required for server creation). | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| availabilityZone | availability Zone information of the server. | string |
| backup | Backup related properties of a server. | Backup |
| createMode | The mode to create a new MySQL server. | 'Default''GeoRestore''PointInTimeRestore''Replica' |
| dataEncryption | The Data Encryption for CMK. | DataEncryption |
| highAvailability | High availability related properties of a server. | HighAvailability |
| importSourceProperties | Source properties for import from storage. | ImportSourceProperties |
| maintenanceWindow | Maintenance window of a server. | MaintenanceWindow |
| network | Network related properties of a server. | Network |
| replicationRole | The replication role. | 'None''Replica''Source' |
| restorePointInTime | Restore point creation time (ISO8601 format), specifying the time to restore from. | string |
| sourceServerResourceId | The source MySQL server id. | string |
| storage | Storage related properties of a server. | Storage |
| version | Server version. | '5.7''8.0.21' |


### Backup

| Name | Description | Value |
|-|-|-|
| backupRetentionDays | Backup retention days for the server. | int |
| geoRedundantBackup | Whether or not geo redundant backup is enabled. | 'Disabled''Enabled' |


### DataEncryption

| Name | Description | Value |
|-|-|-|
| geoBackupKeyURI | Geo backup key uri as key vault can't cross region, need cmk in same region as geo backup | string |
| geoBackupUserAssignedIdentityId | Geo backup user identity resource id as identity can't cross region, need identity in same region as geo backup | string |
| primaryKeyURI | Primary key uri | string |
| primaryUserAssignedIdentityId | Primary user identity resource id | string |
| type | The key type, AzureKeyVault for enable cmk, SystemManaged for disable cmk. | 'AzureKeyVault''SystemManaged' |


### HighAvailability

| Name | Description | Value |
|-|-|-|
| mode | High availability mode for a server. | 'Disabled''SameZone''ZoneRedundant' |
| standbyAvailabilityZone | Availability zone of the standby server. | string |


### ImportSourceProperties

| Name | Description | Value |
|-|-|-|
| dataDirPath | Relative path of data directory in storage. | string |
| sasToken | Sas token for accessing source storage. Read and list permissions are required for sas token. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| storageType | Storage type of import source. | 'AzureBlob' |
| storageUrl | Uri of the import source storage. | string |


### MaintenanceWindow

| Name | Description | Value |
|-|-|-|
| customWindow | indicates whether custom window is enabled or disabled | string |
| dayOfWeek | day of week for maintenance window | int |
| startHour | start hour for maintenance window | int |
| startMinute | start minute for maintenance window | int |


### Network

| Name | Description | Value |
|-|-|-|
| delegatedSubnetResourceId | Delegated subnet resource id used to setup vnet for a server. | string |
| privateDnsZoneResourceId | Private DNS zone resource id. | string |
| publicNetworkAccess | Whether or not public network access is allowed for this server. Value is 'Disabled' when server has VNet integration. | 'Disabled''Enabled' |


### Storage

| Name | Description | Value |
|-|-|-|
| autoGrow | Enable Storage Auto Grow or not. | 'Disabled''Enabled' |
| autoIoScaling | Enable IO Auto Scaling or not. | 'Disabled''Enabled' |
| iops | Storage IOPS for a server. | int |
| logOnDisk | Enable Log On Disk or not. | 'Disabled''Enabled' |
| storageSizeGB | Max storage size allowed for a server. | int |


### MySQLServerSku

| Name | Description | Value |
|-|-|-|
| name | The name of the sku, e.g. Standard_D32s_v3. | string (required) |
| tier | The tier of the particular SKU, e.g. GeneralPurpose. | 'Burstable''GeneralPurpose''MemoryOptimized' (required) |


