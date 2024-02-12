```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/jobs@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      schedule = {
        enabled = bool
        endTime = "string"
        interval = "string"
        startTime = "string"
        type = "string"
      }
    }
  })
}

```

### servers/jobAgents/jobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:jobAgents |
| properties | Resource properties. | JobProperties |


### JobProperties

| Name | Description | Value |
|-|-|-|
| description | User-defined description of the job. | string |
| schedule | Schedule properties of the job. | JobSchedule |


### JobSchedule

| Name | Description | Value |
|-|-|-|
| enabled | Whether or not the schedule is enabled. | bool |
| endTime | Schedule end time. | string |
| interval | Value of the schedule's recurring interval, if the ScheduleType is recurring. ISO8601 duration format. | string |
| startTime | Schedule start time. | string |
| type | Schedule interval type | 'Once''Recurring' |


