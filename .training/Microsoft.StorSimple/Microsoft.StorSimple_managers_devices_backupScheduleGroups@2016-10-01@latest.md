```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StorSimple/managers/devices/backupScheduleGroups@2016-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      startTime = {
        hour = int
        minute = int
      }
    }
  })
}

```

### managers/devices/backupScheduleGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: devices |
| properties | Properties of BackupScheduleGroup | BackupScheduleGroupProperties(required) |


### BackupScheduleGroupProperties

| Name | Description | Value |
|-|-|-|
| startTime | The start time. When this field is specified we will generate Default GrandFather Father Son Backup Schedules. | Time(required) |


### Time

| Name | Description | Value |
|-|-|-|
| hour | The hour. | int (required) |
| minute | The minute. | int (required) |


