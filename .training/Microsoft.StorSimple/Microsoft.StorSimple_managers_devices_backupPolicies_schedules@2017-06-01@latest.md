```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/backupPolicies/schedules@2017-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backupType = "string"
      retentionCount = int
      scheduleRecurrence = {
        recurrenceType = "string"
        recurrenceValue = int
        weeklyDaysList = [
          "string"
        ]
      }
      scheduleStatus = "string"
      startTime = "string"
    }
    kind = "Series8000"
  })
}

```

### managers/devices/backupPolicies/schedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | The Kind of the object. Currently only Series8000 is supported | 'Series8000' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:backupPolicies |
| properties | The properties of the backup schedule. | BackupScheduleProperties(required) |


### BackupScheduleProperties

| Name | Description | Value |
|-|-|-|
| backupType | The type of backup which needs to be taken. | 'CloudSnapshot''LocalSnapshot' (required) |
| retentionCount | The number of backups to be retained. | int (required) |
| scheduleRecurrence | The schedule recurrence. | ScheduleRecurrence(required) |
| scheduleStatus | The schedule status. | 'Disabled''Enabled' (required) |
| startTime | The start time of the schedule. | string (required) |


### ScheduleRecurrence

| Name | Description | Value |
|-|-|-|
| recurrenceType | The recurrence type. | 'Daily''Hourly''Minutes''Weekly' (required) |
| recurrenceValue | The recurrence value. | int (required) |
| weeklyDaysList | The week days list. Applicable only for schedules of recurrence type 'weekly'. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |


