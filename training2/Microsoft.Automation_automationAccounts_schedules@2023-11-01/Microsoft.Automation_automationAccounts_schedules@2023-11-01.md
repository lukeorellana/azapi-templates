```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/schedules@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      advancedSchedule = {
        monthDays = [
          int
        ]
        monthlyOccurrences = [
          {
            day = "string"
            occurrence = int
          }
        ]
        weekDays = [
          "string"
        ]
      }
      description = "string"
      expiryTime = "string"
      frequency = "string"
      startTime = "string"
      timeZone = "string"
    }
  })
}

```

### automationAccounts/schedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Can't use:<>*%&:\?.+/or control charactersCan't end with space. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:automationAccounts |
| properties | Gets or sets the list of schedule properties. | ScheduleCreateOrUpdatePropertiesOrScheduleProperties(required) |


### ScheduleCreateOrUpdatePropertiesOrScheduleProperties

| Name | Description | Value |
|-|-|-|
| advancedSchedule | Gets or sets the AdvancedSchedule. | AdvancedSchedule |
| description | Gets or sets the description of the schedule. | string |
| expiryTime | Gets or sets the end time of the schedule. | string |
| frequency | Gets or sets the frequency of the schedule. | 'Day''Hour''Minute''Month''OneTime''Week' (required) |
| interval | Gets or sets the interval of the schedule. | For Bicep, you can use theany()function. |
| startTime | Gets or sets the start time of the schedule. | string (required) |
| timeZone | Gets or sets the time zone of the schedule. | string |


### AdvancedSchedule

| Name | Description | Value |
|-|-|-|
| monthDays | Days of the month that the job should execute on. Must be between 1 and 31. | int[] |
| monthlyOccurrences | Occurrences of days within a month. | AdvancedScheduleMonthlyOccurrence[] |
| weekDays | Days of the week that the job should execute on. | string[] |


### AdvancedScheduleMonthlyOccurrence

| Name | Description | Value |
|-|-|-|
| day | Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| occurrence | Occurrence of the week within the month. Must be between 1 and 5 | int |


