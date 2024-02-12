```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlServerInstances/databases@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backupInformation = {
        lastFullBackup = "string"
        lastLogBackup = "string"
      }
      collationName = "string"
      compatibilityLevel = int
      databaseCreationDate = "string"
      databaseOptions = {
        isAutoCloseOn = bool
        isAutoCreateStatsOn = bool
        isAutoShrinkOn = bool
        isAutoUpdateStatsOn = bool
        isEncrypted = bool
        isMemoryOptimizationEnabled = bool
        isRemoteDataArchiveEnabled = bool
        isTrustworthyOn = bool
      }
      recoveryMode = "string"
      sizeMB = int
      spaceAvailableMB = int
      state = "string"
    }
  })
}

```

### sqlServerInstances/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:sqlServerInstances |
| properties | Properties of Arc Sql Server database | SqlServerDatabaseResourceProperties(required) |


### SqlServerDatabaseResourceProperties

| Name | Description | Value |
|-|-|-|
| backupInformation |  | SqlServerDatabaseResourcePropertiesBackupInformation |
| collationName | Collation of the database. | string |
| compatibilityLevel | Compatibility level of the database | int |
| databaseCreationDate | Creation date of the database. | string |
| databaseOptions | List of features that are enabled for the database | SqlServerDatabaseResourcePropertiesDatabaseOptions |
| recoveryMode | Status of the database. | 'Bulk-logged''Full''Simple' |
| sizeMB | Size of the database. | int |
| spaceAvailableMB | Space left of the database. | int |
| state | State of the database. | 'Copying''Emergency''Offline''OfflineSecondary''Online''Recovering''RecoveryPending''Restoring''Suspect' |


### SqlServerDatabaseResourcePropertiesBackupInformation

| Name | Description | Value |
|-|-|-|
| lastFullBackup | Date time of last full backup. | string |
| lastLogBackup | Date time of last log backup. | string |


### SqlServerDatabaseResourcePropertiesDatabaseOptions

| Name | Description | Value |
|-|-|-|
| isAutoCloseOn |  | bool |
| isAutoCreateStatsOn |  | bool |
| isAutoShrinkOn |  | bool |
| isAutoUpdateStatsOn |  | bool |
| isEncrypted |  | bool |
| isMemoryOptimizationEnabled |  | bool |
| isRemoteDataArchiveEnabled |  | bool |
| isTrustworthyOn |  | bool |


