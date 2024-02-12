```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cache/redis/patchSchedules@2023-08-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      scheduleEntries = [
        {
          dayOfWeek = "string"
          maintenanceWindow = "string"
          startHourUtc = int
        }
      ]
    }
  })
}

```

### redis/patchSchedules

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:redis |
| properties | List of patch schedules for a Redis cache. | ScheduleEntries(required) |


### ScheduleEntries

| Name | Description | Value |
|-|-|-|
| scheduleEntries | List of patch schedules for a Redis cache. | ScheduleEntry[] (required) |


### ScheduleEntry

| Name | Description | Value |
|-|-|-|
| dayOfWeek | Day of the week when a cache can be patched. | 'Everyday''Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday''Weekend' (required) |
| maintenanceWindow | ISO8601 timespan specifying how much time cache patching can take. | string |
| startHourUtc | Start hour after which cache patching can start. | int (required) |


