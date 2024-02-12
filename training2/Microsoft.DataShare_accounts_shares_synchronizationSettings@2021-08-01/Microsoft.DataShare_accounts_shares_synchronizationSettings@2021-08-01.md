```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shares/synchronizationSettings@2021-08-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see accounts/shares/synchronizationSettings objects
  body = jsonencode({
    kind = "string"
  })
}

```

### accounts/shares/synchronizationSettings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | ScheduleBased(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:shares |


### ScheduledSynchronizationSetting

| Name | Description | Value |
|-|-|-|
| kind | Kind of synchronization setting. | 'ScheduleBased' (required) |
| properties | Properties of scheduled synchronization | ScheduledSynchronizationSettingProperties(required) |


### ScheduledSynchronizationSettingProperties

| Name | Description | Value |
|-|-|-|
| recurrenceInterval | Recurrence Interval | 'Day''Hour' (required) |
| synchronizationTime | Synchronization time | string (required) |


