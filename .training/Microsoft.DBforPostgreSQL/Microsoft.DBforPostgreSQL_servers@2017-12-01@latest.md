```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DBforPostgreSQL/servers@2017-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      infrastructureEncryption = "string"
      minimalTlsVersion = "string"
      publicNetworkAccess = "string"
      sslEnforcement = "string"
      storageProfile = {
        backupRetentionDays = int
        geoRedundantBackup = "string"
        storageAutogrow = "string"
        storageMB = int
      }
      version = "string"
      createMode = "string"
      // For remaining properties, see ServerPropertiesForCreateOrServerProperties objects
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

### servers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-63Valid characters:Lowercase letters, hyphens and numbers.Can't start or end with hyphen.Resource name must be unique across Azure. |
| location | The location the resource resides in. | string (required) |
| tags | Application-specific metadata in the form of key-value pairs. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU (pricing tier) of the server. | Sku |
| identity | The Azure Active Directory identity of the server. | ResourceIdentity |
| properties | Properties of the server. | ServerPropertiesForCreateOrServerProperties(required) |


### ResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. | 'SystemAssigned' |


### ServerPropertiesForCreateOrServerProperties

| Name | Description | Value |
|-|-|-|
| infrastructureEncryption | Status showing whether the server enabled infrastructure encryption. | 'Disabled''Enabled' |
| minimalTlsVersion | Enforce a minimal Tls version for the server. | 'TLS1_0''TLS1_1''TLS1_2''TLSEnforcementDisabled' |
| publicNetworkAccess | Whether or not public network access is allowed for this server. Value is optional but if passed in, must be 'Enabled' or 'Disabled' | 'Disabled''Enabled' |
| sslEnforcement | Enable ssl enforcement or not when connect to server. | 'Disabled''Enabled' |
| storageProfile | Storage profile of a server. | StorageProfile |
| version | Server version. | '10''10.0''10.2''11''9.5''9.6' |
| createMode | Set the object type | DefaultGeoRestorePointInTimeRestoreReplica(required) |


### StorageProfile

| Name | Description | Value |
|-|-|-|
| backupRetentionDays | Backup retention days for the server. | int |
| geoRedundantBackup | Enable Geo-redundant or not for server backup. | 'Disabled''Enabled' |
| storageAutogrow | Enable Storage Auto Grow. | 'Disabled''Enabled' |
| storageMB | Max storage allowed for a server. | int |


### ServerPropertiesForDefaultCreate

| Name | Description | Value |
|-|-|-|
| createMode | The mode to create a new server. | 'Default' (required) |
| administratorLogin | The administrator's login name of a server. Can only be specified when the server is being created (and is required for creation). | string (required) |
| administratorLoginPassword | The password of the administrator login. | string (required) |


### ServerPropertiesForGeoRestore

| Name | Description | Value |
|-|-|-|
| createMode | The mode to create a new server. | 'GeoRestore' (required) |
| sourceServerId | The source server id to restore from. | string (required) |


### ServerPropertiesForRestore

| Name | Description | Value |
|-|-|-|
| createMode | The mode to create a new server. | 'PointInTimeRestore' (required) |
| restorePointInTime | Restore point creation time (ISO8601 format), specifying the time to restore from. | string (required) |
| sourceServerId | The source server id to restore from. | string (required) |


### ServerPropertiesForReplica

| Name | Description | Value |
|-|-|-|
| createMode | The mode to create a new server. | 'Replica' (required) |
| sourceServerId | The primary server id to create replica from. | string (required) |


### Sku

| Name | Description | Value |
|-|-|-|
| capacity | The scale up/out capacity, representing server's compute units. | int |
| family | The family of hardware. | string |
| name | The name of the sku, typically, tier + family + cores, e.g. B_Gen4_1, GP_Gen5_8. | string (required) |
| size | The size code, to be interpreted by resource as appropriate. | string |
| tier | The tier of the particular SKU, e.g. Basic. | 'Basic''GeneralPurpose''MemoryOptimized' |


