```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shareSubscriptions/triggers@2021-08-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see accounts/shareSubscriptions/triggers objects
  body = jsonencode({
    kind = "string"
  })
}

```

### accounts/shareSubscriptions/triggers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | ScheduleBased(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:shareSubscriptions |


### ScheduledTrigger

| Name | Description | Value |
|-|-|-|
| kind | Kind of synchronization on trigger. | 'ScheduleBased' (required) |
| properties | Properties of scheduled synchronization | ScheduledTriggerProperties(required) |


### ScheduledTriggerProperties

| Name | Description | Value |
|-|-|-|
| recurrenceInterval | Recurrence Interval | 'Day''Hour' (required) |
| synchronizationMode | Synchronization mode | 'FullSync''Incremental' |
| synchronizationTime | Synchronization time | string (required) |


