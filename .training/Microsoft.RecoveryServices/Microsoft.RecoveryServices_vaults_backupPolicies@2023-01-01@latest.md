```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupPolicies@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      protectedItemsCount = int
      resourceGuardOperationRequests = [
        "string"
      ]
      backupManagementType = "string"
      // For remaining properties, see ProtectionPolicy objects
    }
    eTag = "string"
  })
}

```

### vaults/backupPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-150Valid characters:Alphanumerics and hyphens.Start with letter. Can't end with hyphen. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| eTag | Optional ETag. | string |
| properties | ProtectionPolicyResource properties | ProtectionPolicy |


### ProtectionPolicy

| Name | Description | Value |
|-|-|-|
| protectedItemsCount | Number of items associated with this policy. | int |
| resourceGuardOperationRequests | ResourceGuard Operation Requests | string[] |
| backupManagementType | Set the object type | AzureIaasVMAzureSqlAzureStorageAzureWorkloadGenericProtectionPolicyMAB(required) |


### AzureIaaSVMProtectionPolicy

| Name | Description | Value |
|-|-|-|
| backupManagementType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'AzureIaasVM' (required) |
| instantRPDetails |  | InstantRPAdditionalDetails |
| instantRpRetentionRangeInDays | Instant RP retention policy range in days | int |
| policyType |  | 'Invalid''V1''V2' |
| retentionPolicy | Retention policy with the details on backup copy retention ranges. | RetentionPolicy |
| schedulePolicy | Backup schedule specified as part of backup policy. | SchedulePolicy |
| tieringPolicy | Tiering policy to automatically move RPs to another tierKey is Target Tier, defined in RecoveryPointTierType enum.Tiering policy specifies the criteria to move RP to the target tier. | object |
| timeZone | TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time". | string |


### InstantRPAdditionalDetails

| Name | Description | Value |
|-|-|-|
| azureBackupRGNamePrefix |  | string |
| azureBackupRGNameSuffix |  | string |


### RetentionPolicy

| Name | Description | Value |
|-|-|-|
| retentionPolicyType | Set the object type | LongTermRetentionPolicySimpleRetentionPolicy(required) |


### LongTermRetentionPolicy

| Name | Description | Value |
|-|-|-|
| retentionPolicyType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'LongTermRetentionPolicy' (required) |
| dailySchedule | Daily retention schedule of the protection policy. | DailyRetentionSchedule |
| monthlySchedule | Monthly retention schedule of the protection policy. | MonthlyRetentionSchedule |
| weeklySchedule | Weekly retention schedule of the protection policy. | WeeklyRetentionSchedule |
| yearlySchedule | Yearly retention schedule of the protection policy. | YearlyRetentionSchedule |


### DailyRetentionSchedule

| Name | Description | Value |
|-|-|-|
| retentionDuration | Retention duration of retention Policy. | RetentionDuration |
| retentionTimes | Retention times of retention policy. | string[] |


### RetentionDuration

| Name | Description | Value |
|-|-|-|
| count | Count of duration types. Retention duration is obtained by the counting the duration type Count times.For example, when Count = 3 and DurationType = Weeks, retention duration will be three weeks. | int |
| durationType | Retention duration type of retention policy. | 'Days''Invalid''Months''Weeks''Years' |


### MonthlyRetentionSchedule

| Name | Description | Value |
|-|-|-|
| retentionDuration | Retention duration of retention Policy. | RetentionDuration |
| retentionScheduleDaily | Daily retention format for monthly retention policy. | DailyRetentionFormat |
| retentionScheduleFormatType | Retention schedule format type for monthly retention policy. | 'Daily''Invalid''Weekly' |
| retentionScheduleWeekly | Weekly retention format for monthly retention policy. | WeeklyRetentionFormat |
| retentionTimes | Retention times of retention policy. | string[] |


### DailyRetentionFormat

| Name | Description | Value |
|-|-|-|
| daysOfTheMonth | List of days of the month. | Day[] |


### Day

| Name | Description | Value |
|-|-|-|
| date | Date of the month | int |
| isLast | Whether Date is last date of month | bool |


### WeeklyRetentionFormat

| Name | Description | Value |
|-|-|-|
| daysOfTheWeek | List of days of the week. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| weeksOfTheMonth | List of weeks of month. | String array containing any of:'First''Fourth''Invalid''Last''Second''Third' |


### WeeklyRetentionSchedule

| Name | Description | Value |
|-|-|-|
| daysOfTheWeek | List of days of week for weekly retention policy. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| retentionDuration | Retention duration of retention Policy. | RetentionDuration |
| retentionTimes | Retention times of retention policy. | string[] |


### YearlyRetentionSchedule

| Name | Description | Value |
|-|-|-|
| monthsOfYear | List of months of year of yearly retention policy. | String array containing any of:'April''August''December''February''Invalid''January''July''June''March''May''November''October''September' |
| retentionDuration | Retention duration of retention Policy. | RetentionDuration |
| retentionScheduleDaily | Daily retention format for yearly retention policy. | DailyRetentionFormat |
| retentionScheduleFormatType | Retention schedule format for yearly retention policy. | 'Daily''Invalid''Weekly' |
| retentionScheduleWeekly | Weekly retention format for yearly retention policy. | WeeklyRetentionFormat |
| retentionTimes | Retention times of retention policy. | string[] |


### SimpleRetentionPolicy

| Name | Description | Value |
|-|-|-|
| retentionPolicyType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'SimpleRetentionPolicy' (required) |
| retentionDuration | Retention duration of the protection policy. | RetentionDuration |


### SchedulePolicy

| Name | Description | Value |
|-|-|-|
| schedulePolicyType | Set the object type | LogSchedulePolicyLongTermSchedulePolicySimpleSchedulePolicySimpleSchedulePolicyV2(required) |


### LogSchedulePolicy

| Name | Description | Value |
|-|-|-|
| schedulePolicyType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'LogSchedulePolicy' (required) |
| scheduleFrequencyInMins | Frequency of the log schedule operation of this policy in minutes. | int |


### LongTermSchedulePolicy

| Name | Description | Value |
|-|-|-|
| schedulePolicyType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'LongTermSchedulePolicy' (required) |


### SimpleSchedulePolicy

| Name | Description | Value |
|-|-|-|
| schedulePolicyType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'SimpleSchedulePolicy' (required) |
| hourlySchedule | Hourly Schedule of this Policy | HourlySchedule |
| scheduleRunDays | List of days of week this schedule has to be run. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| scheduleRunFrequency | Frequency of the schedule operation of this policy. | 'Daily''Hourly''Invalid''Weekly' |
| scheduleRunTimes | List of times of day this schedule has to be run. | string[] |
| scheduleWeeklyFrequency | At every number weeks this schedule has to be run. | int |


### HourlySchedule

| Name | Description | Value |
|-|-|-|
| interval | Interval at which backup needs to be triggered. For hourly the valuecan be 4/6/8/12 | int |
| scheduleWindowDuration | To specify duration of the backup window | int |
| scheduleWindowStartTime | To specify start time of the backup window | string |


### SimpleSchedulePolicyV2

| Name | Description | Value |
|-|-|-|
| schedulePolicyType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'SimpleSchedulePolicyV2' (required) |
| dailySchedule | Daily schedule of this policy | DailySchedule |
| hourlySchedule | hourly schedule of this policy | HourlySchedule |
| scheduleRunFrequency | Frequency of the schedule operation of this policy. | 'Daily''Hourly''Invalid''Weekly' |
| weeklySchedule | Weekly schedule of this policy | WeeklySchedule |


### DailySchedule

| Name | Description | Value |
|-|-|-|
| scheduleRunTimes | List of times of day this schedule has to be run. | string[] |


### WeeklySchedule

| Name | Description | Value |
|-|-|-|
| scheduleRunDays |  | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| scheduleRunTimes | List of times of day this schedule has to be run. | string[] |


### AzureSqlProtectionPolicy

| Name | Description | Value |
|-|-|-|
| backupManagementType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'AzureSql' (required) |
| retentionPolicy | Retention policy details. | RetentionPolicy |


### AzureFileShareProtectionPolicy

| Name | Description | Value |
|-|-|-|
| backupManagementType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'AzureStorage' (required) |
| retentionPolicy | Retention policy with the details on backup copy retention ranges. | RetentionPolicy |
| schedulePolicy | Backup schedule specified as part of backup policy. | SchedulePolicy |
| timeZone | TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time". | string |
| workLoadType | Type of workload for the backup management | 'AzureFileShare''AzureSqlDb''Client''Exchange''FileFolder''GenericDataSource''Invalid''SAPAseDatabase''SAPHanaDBInstance''SAPHanaDatabase''SQLDB''SQLDataBase''Sharepoint''SystemState''VM''VMwareVM' |


### AzureVmWorkloadProtectionPolicy

| Name | Description | Value |
|-|-|-|
| backupManagementType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'AzureWorkload' (required) |
| makePolicyConsistent | Fix the policy inconsistency | bool |
| settings | Common settings for the backup management | Settings |
| subProtectionPolicy | List of sub-protection policies which includes schedule and retention | SubProtectionPolicy[] |
| workLoadType | Type of workload for the backup management | 'AzureFileShare''AzureSqlDb''Client''Exchange''FileFolder''GenericDataSource''Invalid''SAPAseDatabase''SAPHanaDBInstance''SAPHanaDatabase''SQLDB''SQLDataBase''Sharepoint''SystemState''VM''VMwareVM' |


### Settings

| Name | Description | Value |
|-|-|-|
| isCompression | Workload compression flag. This has been added so that 'isSqlCompression'will be deprecated once clients upgrade to consider this flag. | bool |
| issqlcompression | SQL compression flag | bool |
| timeZone | TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time". | string |


### SubProtectionPolicy

| Name | Description | Value |
|-|-|-|
| policyType | Type of backup policy type | 'CopyOnlyFull''Differential''Full''Incremental''Invalid''Log''SnapshotCopyOnlyFull''SnapshotFull' |
| retentionPolicy | Retention policy with the details on backup copy retention ranges. | RetentionPolicy |
| schedulePolicy | Backup schedule specified as part of backup policy. | SchedulePolicy |
| tieringPolicy | Tiering policy to automatically move RPs to another tier.Key is Target Tier, defined in RecoveryPointTierType enum.Tiering policy specifies the criteria to move RP to the target tier. | object |


### GenericProtectionPolicy

| Name | Description | Value |
|-|-|-|
| backupManagementType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'GenericProtectionPolicy' (required) |
| fabricName | Name of this policy's fabric. | string |
| subProtectionPolicy | List of sub-protection policies which includes schedule and retention | SubProtectionPolicy[] |
| timeZone | TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time". | string |


### MabProtectionPolicy

| Name | Description | Value |
|-|-|-|
| backupManagementType | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 'MAB' (required) |
| retentionPolicy | Retention policy details. | RetentionPolicy |
| schedulePolicy | Backup schedule of backup policy. | SchedulePolicy |


