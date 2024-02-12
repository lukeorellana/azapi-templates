```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backupSetName = "string"
      containerName = "string"
      createMode = "string"
      deferredDeleteTimeInUTC = "string"
      deferredDeleteTimeRemaining = "string"
      isArchiveEnabled = bool
      isDeferredDeleteScheduleUpcoming = bool
      isRehydrate = bool
      isScheduledForDeferredDelete = bool
      lastRecoveryPoint = "string"
      policyId = "string"
      policyName = "string"
      resourceGuardOperationRequests = [
        "string"
      ]
      softDeleteRetentionPeriod = int
      sourceResourceId = "string"
      protectedItemType = "string"
      // For remaining properties, see ProtectedItem objects
    }
    eTag = "string"
  })
}

```

### vaults/backupFabrics/protectionContainers/protectedI...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:protectionContainers |
| eTag | Optional ETag. | string |
| properties | ProtectedItemResource properties | ProtectedItem |


### ProtectedItem

| Name | Description | Value |
|-|-|-|
| backupSetName | Name of the backup set the backup item belongs to | string |
| containerName | Unique name of container | string |
| createMode | Create mode to indicate recovery of existing soft deleted data source or creation of new data source. | 'Default''Invalid''Recover' |
| deferredDeleteTimeInUTC | Time for deferred deletion in UTC | string |
| deferredDeleteTimeRemaining | Time remaining before the DS marked for deferred delete is permanently deleted | string |
| isArchiveEnabled | Flag to identify whether datasource is protected in archive | bool |
| isDeferredDeleteScheduleUpcoming | Flag to identify whether the deferred deleted DS is to be purged soon | bool |
| isRehydrate | Flag to identify that deferred deleted DS is to be moved into Pause state | bool |
| isScheduledForDeferredDelete | Flag to identify whether the DS is scheduled for deferred delete | bool |
| lastRecoveryPoint | Timestamp when the last (latest) backup copy was created for this backup item. | string |
| policyId | ID of the backup policy with which this item is backed up. | string |
| policyName | Name of the policy used for protection | string |
| resourceGuardOperationRequests | ResourceGuardOperationRequests on which LAC check will be performed | string[] |
| softDeleteRetentionPeriod | Soft delete retention period in days | int |
| sourceResourceId | ARM ID of the resource to be backed up. | string |
| protectedItemType | Set the object type | AzureFileShareProtectedItemAzureVmWorkloadSAPAseDatabaseAzureVmWorkloadSAPHanaDatabaseAzureVmWorkloadSAPHanaDBInstanceAzureVmWorkloadSQLDatabaseDPMProtectedItemGenericProtectedItemMabFileFolderProtectedItemMicrosoft.ClassicCompute/virtualMachinesMicrosoft.Compute/virtualMachinesMicrosoft.Sql/servers/databases(required) |


### AzureFileshareProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'AzureFileShareProtectedItem' (required) |
| extendedInfo | Additional information with this backup item. | AzureFileshareProtectedItemExtendedInfo |
| friendlyName | Friendly name of the fileshare represented by this backup item. | string |
| kpisHealths | Health details of different KPIs | object |
| lastBackupStatus | Last backup operation status. Possible values: Healthy, Unhealthy. | string |
| lastBackupTime | Timestamp of the last backup operation on this backup item. | string |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| protectionStatus | Backup status of this backup item. | string |


### AzureFileshareProtectedItemExtendedInfo

| Name | Description | Value |
|-|-|-|
| oldestRecoveryPoint | The oldest backup copy available for this item in the service. | string |
| policyState | Indicates consistency of policy object and policy applied to this backup item. | string |
| recoveryPointCount | Number of available backup copies associated with this backup item. | int |


### AzureVmWorkloadSAPAseDatabaseProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'AzureVmWorkloadSAPAseDatabase' (required) |
| extendedInfo | Additional information for this backup item. | AzureVmWorkloadProtectedItemExtendedInfo |
| kpisHealths | Health details of different KPIs | object |
| lastBackupErrorDetail | Error details in last backup | ErrorDetail |
| lastBackupStatus | Last backup operation status. Possible values: Healthy, Unhealthy. | 'Healthy''IRPending''Invalid''Unhealthy' |
| lastBackupTime | Timestamp of the last backup operation on this backup item. | string |
| parentName | Parent name of the DB such as Instance or Availability Group. | string |
| parentType | Parent type of protected item, example: for a DB, standalone server or distributed | string |
| protectedItemDataSourceId | Data ID of the protected item. | string |
| protectedItemHealthStatus | Health status of the backup item, evaluated based on last heartbeat received | 'Healthy''IRPending''Invalid''NotReachable''Unhealthy' |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| serverName | Host/Cluster Name for instance or AG | string |


### AzureVmWorkloadProtectedItemExtendedInfo

| Name | Description | Value |
|-|-|-|
| newestRecoveryPointInArchive | The latest backup copy available for this backup item in archive tier | string |
| oldestRecoveryPoint | The oldest backup copy available for this backup item across all tiers. | string |
| oldestRecoveryPointInArchive | The oldest backup copy available for this backup item in archive tier | string |
| oldestRecoveryPointInVault | The oldest backup copy available for this backup item in vault tier | string |
| policyState | Indicates consistency of policy object and policy applied to this backup item. | string |
| recoveryModel | Indicates consistency of policy object and policy applied to this backup item. | string |
| recoveryPointCount | Number of backup copies available for this backup item. | int |


### AzureVmWorkloadSAPHanaDatabaseProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'AzureVmWorkloadSAPHanaDatabase' (required) |
| extendedInfo | Additional information for this backup item. | AzureVmWorkloadProtectedItemExtendedInfo |
| kpisHealths | Health details of different KPIs | object |
| lastBackupErrorDetail | Error details in last backup | ErrorDetail |
| lastBackupStatus | Last backup operation status. Possible values: Healthy, Unhealthy. | 'Healthy''IRPending''Invalid''Unhealthy' |
| lastBackupTime | Timestamp of the last backup operation on this backup item. | string |
| parentName | Parent name of the DB such as Instance or Availability Group. | string |
| parentType | Parent type of protected item, example: for a DB, standalone server or distributed | string |
| protectedItemDataSourceId | Data ID of the protected item. | string |
| protectedItemHealthStatus | Health status of the backup item, evaluated based on last heartbeat received | 'Healthy''IRPending''Invalid''NotReachable''Unhealthy' |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| serverName | Host/Cluster Name for instance or AG | string |


### AzureVmWorkloadSAPHanaDBInstanceProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'AzureVmWorkloadSAPHanaDBInstance' (required) |
| extendedInfo | Additional information for this backup item. | AzureVmWorkloadProtectedItemExtendedInfo |
| kpisHealths | Health details of different KPIs | object |
| lastBackupErrorDetail | Error details in last backup | ErrorDetail |
| lastBackupStatus | Last backup operation status. Possible values: Healthy, Unhealthy. | 'Healthy''IRPending''Invalid''Unhealthy' |
| lastBackupTime | Timestamp of the last backup operation on this backup item. | string |
| parentName | Parent name of the DB such as Instance or Availability Group. | string |
| parentType | Parent type of protected item, example: for a DB, standalone server or distributed | string |
| protectedItemDataSourceId | Data ID of the protected item. | string |
| protectedItemHealthStatus | Health status of the backup item, evaluated based on last heartbeat received | 'Healthy''IRPending''Invalid''NotReachable''Unhealthy' |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| serverName | Host/Cluster Name for instance or AG | string |


### AzureVmWorkloadSQLDatabaseProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'AzureVmWorkloadSQLDatabase' (required) |
| extendedInfo | Additional information for this backup item. | AzureVmWorkloadProtectedItemExtendedInfo |
| kpisHealths | Health details of different KPIs | object |
| lastBackupErrorDetail | Error details in last backup | ErrorDetail |
| lastBackupStatus | Last backup operation status. Possible values: Healthy, Unhealthy. | 'Healthy''IRPending''Invalid''Unhealthy' |
| lastBackupTime | Timestamp of the last backup operation on this backup item. | string |
| parentName | Parent name of the DB such as Instance or Availability Group. | string |
| parentType | Parent type of protected item, example: for a DB, standalone server or distributed | string |
| protectedItemDataSourceId | Data ID of the protected item. | string |
| protectedItemHealthStatus | Health status of the backup item, evaluated based on last heartbeat received | 'Healthy''IRPending''Invalid''NotReachable''Unhealthy' |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| serverName | Host/Cluster Name for instance or AG | string |


### DPMProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'DPMProtectedItem' (required) |
| backupEngineName | Backup Management server protecting this backup item | string |
| extendedInfo | Extended info of the backup item. | DPMProtectedItemExtendedInfo |
| friendlyName | Friendly name of the managed item | string |
| protectionState | Protection state of the backup engine | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |


### DPMProtectedItemExtendedInfo

| Name | Description | Value |
|-|-|-|
| diskStorageUsedInBytes | Used Disk storage in bytes. | string |
| isCollocated | To check if backup item is collocated. | bool |
| isPresentOnCloud | To check if backup item is cloud protected. | bool |
| lastBackupStatus | Last backup status information on backup item. | string |
| lastRefreshedAt | Last refresh time on backup item. | string |
| oldestRecoveryPoint | Oldest cloud recovery point time. | string |
| onPremiseLatestRecoveryPoint | latest disk recovery point time. | string |
| onPremiseOldestRecoveryPoint | Oldest disk recovery point time. | string |
| onPremiseRecoveryPointCount | disk recovery point count. | int |
| protectableObjectLoadPath | Attribute to provide information on various DBs. | object |
| protected | To check if backup item is disk protected. | bool |
| protectionGroupName | Protection group name of the backup item. | string |
| recoveryPointCount | cloud recovery point count. | int |
| totalDiskStorageSizeInBytes | total Disk storage in bytes. | string |


### GenericProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'GenericProtectedItem' (required) |
| fabricName | Name of this backup item's fabric. | string |
| friendlyName | Friendly name of the container. | string |
| policyState | Indicates consistency of policy object and policy applied to this backup item. | string |
| protectedItemId | Data Plane Service ID of the protected item. | int |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| sourceAssociations | Loosely coupled (type, value) associations (example - parent of a protected item) | object |


### MabFileFolderProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'MabFileFolderProtectedItem' (required) |
| computerName | Name of the computer associated with this backup item. | string |
| deferredDeleteSyncTimeInUTC | Sync time for deferred deletion in UTC | int |
| extendedInfo | Additional information with this backup item. | MabFileFolderProtectedItemExtendedInfo |
| friendlyName | Friendly name of this backup item. | string |
| lastBackupStatus | Status of last backup operation. | string |
| lastBackupTime | Timestamp of the last backup operation on this backup item. | string |
| protectionState | Protected, ProtectionStopped, IRPending or ProtectionError | string |


### MabFileFolderProtectedItemExtendedInfo

| Name | Description | Value |
|-|-|-|
| lastRefreshedAt | Last time when the agent data synced to service. | string |
| oldestRecoveryPoint | The oldest backup copy available. | string |
| recoveryPointCount | Number of backup copies associated with the backup item. | int |


### AzureIaaSClassicComputeVMProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'Microsoft.ClassicCompute/virtualMachines' (required) |
| extendedInfo | Additional information for this backup item. | AzureIaaSVMProtectedItemExtendedInfo |
| extendedProperties | Extended Properties for Azure IaasVM Backup. | ExtendedProperties |
| healthDetails | Health details on this backup item. | AzureIaaSVMHealthDetails[] |
| kpisHealths | Health details of different KPIs | object |
| lastBackupStatus | Last backup operation status. | string |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| protectionStatus | Backup status of this backup item. | string |


### AzureIaaSVMProtectedItemExtendedInfo

| Name | Description | Value |
|-|-|-|
| newestRecoveryPointInArchive | The latest backup copy available for this backup item in archive tier | string |
| oldestRecoveryPoint | The oldest backup copy available for this backup item across all tiers. | string |
| oldestRecoveryPointInArchive | The oldest backup copy available for this backup item in archive tier | string |
| oldestRecoveryPointInVault | The oldest backup copy available for this backup item in vault tier | string |
| policyInconsistent | Specifies if backup policy associated with the backup item is inconsistent. | bool |
| recoveryPointCount | Number of backup copies available for this backup item. | int |


### ExtendedProperties

| Name | Description | Value |
|-|-|-|
| diskExclusionProperties | Extended Properties for Disk Exclusion. | DiskExclusionProperties |
| linuxVmApplicationName | Linux VM name | string |


### DiskExclusionProperties

| Name | Description | Value |
|-|-|-|
| diskLunList | List of Disks' Logical Unit Numbers (LUN) to be used for VM Protection. | int[] |
| isInclusionList | Flag to indicate whether DiskLunList is to be included/ excluded from backup. | bool |


### AzureIaaSComputeVMProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'Microsoft.Compute/virtualMachines' (required) |
| extendedInfo | Additional information for this backup item. | AzureIaaSVMProtectedItemExtendedInfo |
| extendedProperties | Extended Properties for Azure IaasVM Backup. | ExtendedProperties |
| healthDetails | Health details on this backup item. | AzureIaaSVMHealthDetails[] |
| kpisHealths | Health details of different KPIs | object |
| lastBackupStatus | Last backup operation status. | string |
| protectionState | Backup state of this backup item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |
| protectionStatus | Backup status of this backup item. | string |


### AzureSqlProtectedItem

| Name | Description | Value |
|-|-|-|
| protectedItemType | backup item type. | 'Microsoft.Sql/servers/databases' (required) |
| extendedInfo | Additional information for this backup item. | AzureSqlProtectedItemExtendedInfo |
| protectedItemDataId | Internal ID of a backup item. Used by Azure SQL Backup engine to contact Recovery Services. | string |
| protectionState | Backup state of the backed up item. | 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped' |


### AzureSqlProtectedItemExtendedInfo

| Name | Description | Value |
|-|-|-|
| oldestRecoveryPoint | The oldest backup copy available for this item in the service. | string |
| policyState | State of the backup policy associated with this backup item. | string |
| recoveryPointCount | Number of available backup copies associated with this backup item. | int |


