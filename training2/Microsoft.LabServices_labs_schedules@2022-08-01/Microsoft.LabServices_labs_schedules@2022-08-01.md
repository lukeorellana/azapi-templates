```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labs/schedules@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      notes = "string"
      recurrencePattern = {
        expirationDate = "string"
        frequency = "string"
        interval = int
        weekDays = [
          "string"
        ]
      }
      startAt = "string"
      stopAt = "string"
      timeZoneId = "string"
    }
  })
}

```

### labs/schedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | Schedule resource properties | ScheduleProperties(required) |


### ScheduleProperties

| Name | Description | Value |
|-|-|-|
| notes | Notes for this schedule. | string |
| recurrencePattern | The recurrence pattern of the scheduled actions. | RecurrencePattern |
| startAt | When lab user virtual machines will be started. Timestamp offsets will be ignored and timeZoneId is used instead. | string |
| stopAt | When lab user virtual machines will be stopped. Timestamp offsets will be ignored and timeZoneId is used instead. | string |
| timeZoneId | The IANA timezone id for the schedule. | string |


### RecurrencePattern

| Name | Description | Value |
|-|-|-|
| expirationDate | When the recurrence will expire. This date is inclusive. | string (required) |
| frequency | The frequency of the recurrence. | 'Daily''Weekly' (required) |
| interval | The interval to invoke the schedule on. For example, interval = 2 and RecurrenceFrequency.Daily will run every 2 days. When no interval is supplied, an interval of 1 is used. | int |
| weekDays | The week days the schedule runs. Used for when the Frequency is set to Weekly. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |


