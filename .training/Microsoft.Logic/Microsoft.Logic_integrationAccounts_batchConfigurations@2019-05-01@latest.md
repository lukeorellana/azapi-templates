```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/batchConfigurations@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      batchGroupName = "string"
      changedTime = "string"
      createdTime = "string"
      releaseCriteria = {
        batchSize = int
        messageCount = int
        recurrence = {
          endTime = "string"
          frequency = "string"
          interval = int
          schedule = {
            hours = [
              int
            ]
            minutes = [
              int
            ]
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
          startTime = "string"
          timeZone = "string"
        }
      }
    }
  })
}

```

### integrationAccounts/batchConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-20Valid characters:Alphanumerics. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The batch configuration properties. | BatchConfigurationProperties(required) |


### BatchConfigurationProperties

| Name | Description | Value |
|-|-|-|
| batchGroupName | The name of the batch group. | string (required) |
| changedTime | The artifact changed time. | string |
| createdTime | The artifact creation time. | string |
| metadata | Anything | For Bicep, you can use theany()function. |
| releaseCriteria | The batch release criteria. | BatchReleaseCriteria(required) |


### BatchReleaseCriteria

| Name | Description | Value |
|-|-|-|
| batchSize | The batch size in bytes. | int |
| messageCount | The message count. | int |
| recurrence | The recurrence. | WorkflowTriggerRecurrence |


### WorkflowTriggerRecurrence

| Name | Description | Value |
|-|-|-|
| endTime | The end time. | string |
| frequency | The frequency. | 'Day''Hour''Minute''Month''NotSpecified''Second''Week''Year' |
| interval | The interval. | int |
| schedule | The recurrence schedule. | RecurrenceSchedule |
| startTime | The start time. | string |
| timeZone | The time zone. | string |


### RecurrenceSchedule

| Name | Description | Value |
|-|-|-|
| hours | The hours. | int[] |
| minutes | The minutes. | int[] |
| monthDays | The month days. | int[] |
| monthlyOccurrences | The monthly occurrences. | RecurrenceScheduleOccurrence[] |
| weekDays | The days of the week. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |


### RecurrenceScheduleOccurrence

| Name | Description | Value |
|-|-|-|
| day | The day of the week. | 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
| occurrence | The occurrence. | int |


