```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/projects/pools/schedules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      frequency = "Daily"
      state = "string"
      time = "string"
      timeZone = "string"
      type = "StopDevBox"
    }
  })
}

```

### projects/pools/schedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:pools |
| properties | Properties of a Schedule resource | ScheduleProperties |


### ScheduleProperties

| Name | Description | Value |
|-|-|-|
| frequency | The frequency of this scheduled task. | 'Daily' |
| state | Indicates whether or not this scheduled task is enabled. | 'Disabled''Enabled' |
| time | The target time to trigger the action. The format is HH:MM. | string |
| timeZone | The IANA timezone id at which the schedule should execute. | string |
| type | Supported type this scheduled task represents. | 'StopDevBox' |


