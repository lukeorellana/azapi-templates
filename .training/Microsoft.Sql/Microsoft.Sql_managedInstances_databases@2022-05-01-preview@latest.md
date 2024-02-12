```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoCompleteRestore = bool
      catalogCollation = "string"
      collation = "string"
      createMode = "string"
      crossSubscriptionRestorableDroppedDatabaseId = "string"
      crossSubscriptionSourceDatabaseId = "string"
      crossSubscriptionTargetManagedInstanceId = "string"
      lastBackupName = "string"
      longTermRetentionBackupResourceId = "string"
      recoverableDatabaseId = "string"
      restorableDroppedDatabaseId = "string"
      restorePointInTime = "string"
      sourceDatabaseId = "string"
      storageContainerIdentity = "string"
      storageContainerSasToken = "string"
      storageContainerUri = "string"
    }
  })
}

```

### managedInstances/databases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | ManagedDatabaseProperties |


### ManagedDatabaseProperties

| Name | Description | Value |
|-|-|-|
| autoCompleteRestore | Whether to auto complete restore of this managed database. | bool |
| catalogCollation | Collation of the metadata catalog. | 'DATABASE_DEFAULT''SQL_Latin1_General_CP1_CI_AS' |
| collation | Collation of the managed database. | string |
| createMode | Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. RestoreLongTermRetentionBackup: Create a database by restoring from a long term retention backup (longTermRetentionBackupResourceId required). | 'Default''PointInTimeRestore''Recovery''RestoreExternalBackup''RestoreLongTermRetentionBackup' |
| crossSubscriptionRestorableDroppedDatabaseId | The restorable cross-subscription dropped database resource id to restore when creating this database. | string |
| crossSubscriptionSourceDatabaseId | The resource identifier of the cross-subscription source database associated with create operation of this database. | string |
| crossSubscriptionTargetManagedInstanceId | Target managed instance id used in cross-subscription restore. | string |
| lastBackupName | Last backup file name for restore of this managed database. | string |
| longTermRetentionBackupResourceId | The name of the Long Term Retention backup to be used for restore of this managed database. | string |
| recoverableDatabaseId | The resource identifier of the recoverable database associated with create operation of this database. | string |
| restorableDroppedDatabaseId | The restorable dropped database resource id to restore when creating this database. | string |
| restorePointInTime | Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database. | string |
| sourceDatabaseId | The resource identifier of the source database associated with create operation of this database. | string |
| storageContainerIdentity | Conditional. If createMode is RestoreExternalBackup, this value is used. Specifies the identity used for storage container authentication. Can be 'SharedAccessSignature' or 'ManagedIdentity'; if not specified 'SharedAccessSignature' is assumed. | string |
| storageContainerSasToken | Conditional. If createMode is RestoreExternalBackup and storageContainerIdentity is not ManagedIdentity, this value is required. Specifies the storage container sas token. | string |
| storageContainerUri | Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored. | string |


