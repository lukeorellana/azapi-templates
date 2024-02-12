```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerService/managedClusters/maintenanceConfigurations@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      maintenanceWindow = {
        durationHours = int
        notAllowedDates = [
          {
            end = "string"
            start = "string"
          }
        ]
        schedule = {
          absoluteMonthly = {
            dayOfMonth = int
            intervalMonths = int
          }
          daily = {
            intervalDays = int
          }
          relativeMonthly = {
            dayOfWeek = "string"
            intervalMonths = int
            weekIndex = "string"
          }
          weekly = {
            dayOfWeek = "string"
            intervalWeeks = int
          }
        }
        startDate = "string"
        startTime = "string"
        utcOffset = "string"
      }
      notAllowedTime = [
        {
          end = "string"
          start = "string"
        }
      ]
      timeInWeek = [
        {
          day = "string"
          hourSlots = [
            int
          ]
        }
      ]
    }
  })
}

```

### managedClusters/maintenanceConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedClusters |
| properties | Properties of a default maintenance configuration. | MaintenanceConfigurationProperties |


### MaintenanceConfigurationProperties

| Name | Description | Value |
|-|-|-|
| maintenanceWindow | Maintenance window for the maintenance configuration. | MaintenanceWindow |
| notAllowedTime | Time slots on which upgrade is not allowed. | TimeSpan[] |
| timeInWeek | If two array entries specify the same day of the week, the applied configuration is the union of times in both entries. | TimeInWeek[] |


### MaintenanceWindow

| Name | Description | Value |
|-|-|-|
| durationHours | Length of maintenance window range from 4 to 24 hours. | int (required)Constraints:Min value = 4Max value = 24 |
| notAllowedDates | Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time. | DateSpan[] |
| schedule | Recurrence schedule for the maintenance window. | Schedule(required) |
| startDate | The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away. | string |
| startTime | The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'. | string (required)Constraints:Pattern =^\d{2}:\d{2}$ |
| utcOffset | The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'. | stringConstraints:Pattern =^(-|\+)[0-9]{2}:[0-9]{2}$ |


### DateSpan

| Name | Description | Value |
|-|-|-|
| end | The end date of the date span. | string (required) |
| start | The start date of the date span. | string (required) |


### Schedule

| Name | Description | Value |
|-|-|-|
| absoluteMonthly | For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'. | AbsoluteMonthlySchedule |
| daily | For schedules like: 'recur every day' or 'recur every 3 days'. | DailySchedule |
| relativeMonthly | For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'. | RelativeMonthlySchedule |
| weekly | For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'. | WeeklySchedule |


### AbsoluteMonthlySchedule

| Name | Description | Value |
|-|-|-|
| dayOfMonth | The date of the month. | int (required)Constraints:Min value = 1Max value = 31 |
| intervalMonths | Specifies the number of months between each set of occurrences. | int (required)Constraints:Min value = 1Max value = 6 |


### DailySchedule

| Name | Description | Value |
|-|-|-|
| intervalDays | Specifies the number of days between each set of occurrences. | int (required)Constraints:Min value = 1Max value = 7 |


### RelativeMonthlySchedule

| Name | Description | Value |
|-|-|-|
| dayOfWeek | Specifies on which day of the week the maintenance occurs. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' (required) |
| intervalMonths | Specifies the number of months between each set of occurrences. | int (required)Constraints:Min value = 1Max value = 6 |
| weekIndex | Specifies on which week of the month the dayOfWeek applies. | 'First''Fourth''Last''Second''Third' (required) |


### WeeklySchedule

| Name | Description | Value |
|-|-|-|
| dayOfWeek | Specifies on which day of the week the maintenance occurs. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' (required) |
| intervalWeeks | Specifies the number of weeks between each set of occurrences. | int (required)Constraints:Min value = 1Max value = 4 |


### TimeSpan

| Name | Description | Value |
|-|-|-|
| end | The end of a time span | string |
| start | The start of a time span | string |


### TimeInWeek

| Name | Description | Value |
|-|-|-|
| day | The day of the week. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| hourSlots | Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range. | int[]Constraints:Min value = 0Max value = 23 |


