```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/backupVaults/backupPolicies@2022-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      datasourceTypes = [
        "string"
      ]
      objectType = "string"
      // For remaining properties, see BaseBackupPolicy objects
    }
  })
}

```

### backupVaults/backupPolicies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:backupVaults |
| properties | BaseBackupPolicyResource properties | BaseBackupPolicy |


### BaseBackupPolicy

| Name | Description | Value |
|-|-|-|
| datasourceTypes | Type of datasource for the backup management | string[] (required) |
| objectType | Set the object type | BackupPolicy(required) |


### BackupPolicy

| Name | Description | Value |
|-|-|-|
| objectType |  | 'BackupPolicy' (required) |
| policyRules | Policy rule dictionary that contains rules for each backuptype i.e Full/Incremental/Logs etc | BasePolicyRule[] (required) |


### BasePolicyRule

| Name | Description | Value |
|-|-|-|
| name |  | string (required) |
| objectType | Set the object type | AzureBackupRuleAzureRetentionRule(required) |


### AzureBackupRule

| Name | Description | Value |
|-|-|-|
| objectType |  | 'AzureBackupRule' (required) |
| backupParameters | BackupParameters base | BackupParameters |
| dataStore | DataStoreInfo base | DataStoreInfoBase(required) |
| trigger | Trigger context | TriggerContext(required) |


### BackupParameters

| Name | Description | Value |
|-|-|-|
| objectType | Set the object type | AzureBackupParams(required) |


### AzureBackupParams

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'AzureBackupParams' (required) |
| backupType | BackupType ; Full/Incremental etc | string (required) |


### DataStoreInfoBase

| Name | Description | Value |
|-|-|-|
| dataStoreType | type of datastore; Operational/Vault/Archive | 'ArchiveStore''OperationalStore''VaultStore' (required) |
| objectType | Type of Datasource object, used to initialize the right inherited type | string (required) |


### TriggerContext

| Name | Description | Value |
|-|-|-|
| objectType | Set the object type | AdhocBasedTriggerContextScheduleBasedTriggerContext(required) |


### AdhocBasedTriggerContext

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'AdhocBasedTriggerContext' (required) |
| taggingCriteria | Tagging Criteria containing retention tag for adhoc backup. | AdhocBasedTaggingCriteria(required) |


### AdhocBasedTaggingCriteria

| Name | Description | Value |
|-|-|-|
| tagInfo | Retention tag information | RetentionTag |


### RetentionTag

| Name | Description | Value |
|-|-|-|
| tagName | Retention Tag Name to relate it to retention rule. | string (required) |


### ScheduleBasedTriggerContext

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'ScheduleBasedTriggerContext' (required) |
| schedule | Schedule for this backup | BackupSchedule(required) |
| taggingCriteria | List of tags that can be applicable for given schedule. | TaggingCriteria[] (required) |


### BackupSchedule

| Name | Description | Value |
|-|-|-|
| repeatingTimeIntervals | ISO 8601 repeating time interval format | string[] (required) |
| timeZone | Time zone for a schedule. Example: Pacific Standard Time | string |


### TaggingCriteria

| Name | Description | Value |
|-|-|-|
| criteria | Criteria which decides whether the tag can be applied to a triggered backup. | BackupCriteria[] |
| isDefault | Specifies if tag is default. | bool (required) |
| taggingPriority | Retention Tag priority. | int (required) |
| tagInfo | Retention tag information | RetentionTag(required) |


### BackupCriteria

| Name | Description | Value |
|-|-|-|
| objectType | Set the object type | ScheduleBasedBackupCriteria(required) |


### ScheduleBasedBackupCriteria

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'ScheduleBasedBackupCriteria' (required) |
| absoluteCriteria | it contains absolute values like "AllBackup" / "FirstOfDay" / "FirstOfWeek" / "FirstOfMonth"and should be part of AbsoluteMarker enum | String array containing any of:'AllBackup''FirstOfDay''FirstOfMonth''FirstOfWeek''FirstOfYear' |
| daysOfMonth | This is day of the month from 1 to 28 other wise last of month | Day[] |
| daysOfTheWeek | It should be Sunday/Monday/T..../Saturday | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| monthsOfYear | It should be January/February/....../December | String array containing any of:'April''August''December''February''January''July''June''March''May''November''October''September' |
| scheduleTimes | List of schedule times for backup | string[] |
| weeksOfTheMonth | It should be First/Second/Third/Fourth/Last | String array containing any of:'First''Fourth''Last''Second''Third' |


### Day

| Name | Description | Value |
|-|-|-|
| date | Date of the month | int |
| isLast | Whether Date is last date of month | bool |


### AzureRetentionRule

| Name | Description | Value |
|-|-|-|
| objectType |  | 'AzureRetentionRule' (required) |
| isDefault |  | bool |
| lifecycles |  | SourceLifeCycle[] (required) |


### SourceLifeCycle

| Name | Description | Value |
|-|-|-|
| deleteAfter | Delete Option | DeleteOption(required) |
| sourceDataStore | DataStoreInfo base | DataStoreInfoBase(required) |
| targetDataStoreCopySettings |  | TargetCopySetting[] |


### DeleteOption

| Name | Description | Value |
|-|-|-|
| duration | Duration of deletion after given timespan | string (required) |
| objectType | Set the object type | AbsoluteDeleteOption(required) |


### AbsoluteDeleteOption

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'AbsoluteDeleteOption' (required) |


### TargetCopySetting

| Name | Description | Value |
|-|-|-|
| copyAfter | It can be CustomCopyOption or ImmediateCopyOption. | CopyOption(required) |
| dataStore | Info of target datastore | DataStoreInfoBase(required) |


### CopyOption

| Name | Description | Value |
|-|-|-|
| objectType | Set the object type | CopyOnExpiryOptionCustomCopyOptionImmediateCopyOption(required) |


### CopyOnExpiryOption

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'CopyOnExpiryOption' (required) |


### CustomCopyOption

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'CustomCopyOption' (required) |
| duration | Data copied after given timespan | string |


### ImmediateCopyOption

| Name | Description | Value |
|-|-|-|
| objectType | Type of the specific object - used for deserializing | 'ImmediateCopyOption' (required) |


