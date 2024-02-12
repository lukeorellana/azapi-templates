```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/flexibleServers@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
      authConfig = {
        activeDirectoryAuth = "string"
        passwordAuth = "string"
        tenantId = "string"
      }
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
      maintenanceWindow = {
        customWindow = "string"
        dayOfWeek = int
        startHour = int
        startMinute = int
      }
      network = {
        delegatedSubnetResourceId = "string"
        privateDnsZoneArmResourceId = "string"
      }
      pointInTimeUTC = "string"
      replicationRole = "string"
      sourceServerResourceId = "string"
      storage = {
        autoGrow = "string"
        storageSizeGB = int
        tier = "string"
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
| sku | The SKU (pricing tier) of the server. | Sku |
| identity | Describes the identity of the application. | UserAssignedIdentity |
| properties | Properties of the server. | ServerProperties |


### UserAssignedIdentity

| Name | Description | Value |
|-|-|-|
| type | the types of identities associated with this resource; currently restricted to 'None and UserAssigned' | 'None''UserAssigned' (required) |
| userAssignedIdentities | represents user assigned identities map. | object |


### ServerProperties

| Name | Description | Value |
|-|-|-|
| administratorLogin | The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation). | string |
| administratorLoginPassword | The administrator login password (required for server creation). | string |
| authConfig | AuthConfig properties of a server. | AuthConfig |
| availabilityZone | availability zone information of the server. | string |
| backup | Backup properties of a server. | Backup |
| createMode | The mode to create a new PostgreSQL server. | 'Create''Default''GeoRestore''PointInTimeRestore''Replica''ReviveDropped''Update' |
| dataEncryption | Data encryption properties of a server. | DataEncryption |
| highAvailability | High availability properties of a server. | HighAvailability |
| maintenanceWindow | Maintenance window properties of a server. | MaintenanceWindow |
| network | Network properties of a server. This Network property is required to be passed only in case you want the server to be Private access server. | Network |
| pointInTimeUTC | Restore point creation time (ISO8601 format), specifying the time to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore' or 'ReviveDropped'. | string |
| replicationRole | Replication role of the server | 'AsyncReplica''GeoAsyncReplica''None''Primary' |
| sourceServerResourceId | The source server resource ID to restore from. It's required when 'createMode' is 'PointInTimeRestore' or 'GeoRestore' or 'Replica' or 'ReviveDropped'. This property is returned only for Replica server | string |
| storage | Storage properties of a server. | Storage |
| version | PostgreSQL Server version. | '11''12''13''14''15' |


### AuthConfig

| Name | Description | Value |
|-|-|-|
| activeDirectoryAuth | If Enabled, Azure Active Directory authentication is enabled. | 'Disabled''Enabled' |
| passwordAuth | If Enabled, Password authentication is enabled. | 'Disabled''Enabled' |
| tenantId | Tenant id of the server. | string |


### Backup

| Name | Description | Value |
|-|-|-|
| backupRetentionDays | Backup retention days for the server. | int |
| geoRedundantBackup | A value indicating whether Geo-Redundant backup is enabled on the server. | 'Disabled''Enabled' |


### DataEncryption

| Name | Description | Value |
|-|-|-|
| geoBackupKeyURI | URI for the key in keyvault for data encryption for geo-backup of server. | string |
| geoBackupUserAssignedIdentityId | Resource Id for the User assigned identity to be used for data encryption for geo-backup of server. | string |
| primaryKeyURI | URI for the key in keyvault for data encryption of the primary server. | string |
| primaryUserAssignedIdentityId | Resource Id for the User assigned identity to be used for data encryption of the primary server. | string |
| type | Data encryption type to depict if it is System Managed vs Azure Key vault. | 'AzureKeyVault''SystemManaged' |


### HighAvailability

| Name | Description | Value |
|-|-|-|
| mode | The HA mode for the server. | 'Disabled''SameZone''ZoneRedundant' |
| standbyAvailabilityZone | availability zone information of the standby. | string |


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
| delegatedSubnetResourceId | Delegated subnet arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone. | string |
| privateDnsZoneArmResourceId | Private dns zone arm resource id. This is required to be passed during create, in case we want the server to be VNET injected, i.e. Private access server. During update, pass this only if we want to update the value for Private DNS zone. | string |


### Storage

| Name | Description | Value |
|-|-|-|
| autoGrow | Flag to enable / disable Storage Auto grow for flexible server. | 'Disabled''Enabled' |
| storageSizeGB | Max storage allowed for a server. | int |
| tier | Name of storage tier for IOPS. | 'P1''P10''P15''P2''P20''P3''P30''P4''P40''P50''P6''P60''P70''P80' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3. | string (required) |
| tier | The tier of the particular SKU, e.g. Burstable. | 'Burstable''GeneralPurpose''MemoryOptimized' (required) |


