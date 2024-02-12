```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see dataBoxEdgeDevices/triggers objects
  body = jsonencode({
    kind = "string"
  })
}

```

### dataBoxEdgeDevices/triggers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Set the object type | FileEventPeriodicTimerEvent(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dataBoxEdgeDevices |


### FileEventTrigger

| Name | Description | Value |
|-|-|-|
| kind | Trigger Kind. | 'FileEvent' (required) |
| properties | File trigger properties. | FileTriggerProperties(required) |


### FileTriggerProperties

| Name | Description | Value |
|-|-|-|
| customContextTag | A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module. | string |
| sinkInfo | Role sink info. | RoleSinkInfo(required) |
| sourceInfo | File event source details. | FileSourceInfo(required) |


### RoleSinkInfo

| Name | Description | Value |
|-|-|-|
| roleId | Compute role ID. | string (required) |


### FileSourceInfo

| Name | Description | Value |
|-|-|-|
| shareId | File share ID. | string (required) |


### PeriodicTimerEventTrigger

| Name | Description | Value |
|-|-|-|
| kind | Trigger Kind. | 'PeriodicTimerEvent' (required) |
| properties | Periodic timer trigger properties. | PeriodicTimerProperties(required) |


### PeriodicTimerProperties

| Name | Description | Value |
|-|-|-|
| customContextTag | A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module. | string |
| sinkInfo | Role Sink information. | RoleSinkInfo(required) |
| sourceInfo | Periodic timer details. | PeriodicTimerSourceInfo(required) |


### PeriodicTimerSourceInfo

| Name | Description | Value |
|-|-|-|
| schedule | Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds. | string (required) |
| startTime | The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified upto seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time. | string (required) |
| topic | Topic where periodic events are published to IoT device. | string |


