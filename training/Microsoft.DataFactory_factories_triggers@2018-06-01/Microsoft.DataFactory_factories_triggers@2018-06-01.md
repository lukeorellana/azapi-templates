```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/triggers@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      annotations = [ object ]
      description = "string"
      type = "string"
      // For remaining properties, see Trigger objects
    }
  })
}

```

### factories/triggers

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Can't use:<>*#.%&:\\+?/or control charactersStart with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Properties of the trigger. | Trigger(required) |


### Trigger

| Name | Description | Value |
|-|-|-|
| annotations | List of tags that can be used for describing the trigger. | any[] |
| description | Trigger description. | string |
| type | Set the object type | BlobEventsTriggerBlobTriggerChainingTriggerCustomEventsTriggerRerunTumblingWindowTriggerScheduleTriggerTumblingWindowTrigger(required) |


### BlobEventsTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'BlobEventsTrigger' (required) |
| pipelines | Pipelines that need to be started. | TriggerPipelineReference[] |
| typeProperties | Blob Events Trigger properties. | BlobEventsTriggerTypeProperties(required) |


### TriggerPipelineReference

| Name | Description | Value |
|-|-|-|
| parameters | Pipeline parameters. | object |
| pipelineReference | Pipeline reference. | PipelineReference |


### PipelineReference

| Name | Description | Value |
|-|-|-|
| name | Reference name. | string |
| referenceName | Reference pipeline name. | string (required) |
| type | Pipeline reference type. | 'PipelineReference' (required) |


### BlobEventsTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| blobPathBeginsWith | The blob path must begin with the pattern provided for trigger to fire. For example, '/records/blobs/december/' will only fire the trigger for blobs in the december folder under the records container. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith. | string |
| blobPathEndsWith | The blob path must end with the pattern provided for trigger to fire. For example, 'december/boxes.csv' will only fire the trigger for blobs named boxes in a december folder. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith. | string |
| events | The type of events that cause this trigger to fire. | String array containing any of:'Microsoft.Storage.BlobCreated''Microsoft.Storage.BlobDeleted' (required) |
| ignoreEmptyBlobs | If set to true, blobs with zero bytes will be ignored. | bool |
| scope | The ARM resource ID of the Storage Account. | string (required) |


### BlobTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'BlobTrigger' (required) |
| pipelines | Pipelines that need to be started. | TriggerPipelineReference[] |
| typeProperties | Blob Trigger properties. | BlobTriggerTypeProperties(required) |


### BlobTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| folderPath | The path of the container/folder that will trigger the pipeline. | string (required) |
| linkedService | The Azure Storage linked service reference. | LinkedServiceReference(required) |
| maxConcurrency | The max number of parallel files to handle when it is triggered. | int (required) |


### LinkedServiceReference

| Name | Description | Value |
|-|-|-|
| parameters | Arguments for LinkedService. | object |
| referenceName | Reference LinkedService name. | string (required) |
| type | Linked service reference type. | 'LinkedServiceReference' (required) |


### ChainingTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'ChainingTrigger' (required) |
| pipeline | Pipeline for which runs are created when all upstream pipelines complete successfully. | TriggerPipelineReference(required) |
| typeProperties | Chaining Trigger properties. | ChainingTriggerTypeProperties(required) |


### ChainingTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| dependsOn | Upstream Pipelines. | PipelineReference[] (required) |
| runDimension | Run Dimension property that needs to be emitted by upstream pipelines. | string (required) |


### CustomEventsTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'CustomEventsTrigger' (required) |
| pipelines | Pipelines that need to be started. | TriggerPipelineReference[] |
| typeProperties | Custom Events Trigger properties. | CustomEventsTriggerTypeProperties(required) |


### CustomEventsTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| events | The list of event types that cause this trigger to fire. | any[] (required) |
| scope | The ARM resource ID of the Azure Event Grid Topic. | string (required) |
| subjectBeginsWith | The event subject must begin with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith. | string |
| subjectEndsWith | The event subject must end with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith. | string |


### RerunTumblingWindowTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'RerunTumblingWindowTrigger' (required) |
| typeProperties | Rerun Trigger properties. | RerunTumblingWindowTriggerTypeProperties(required) |


### RerunTumblingWindowTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| parentTrigger | The parent trigger reference. | For Bicep, you can use theany()function.(required) |
| requestedEndTime | The end time for the time period for which restatement is initiated. Only UTC time is currently supported. | string (required) |
| requestedStartTime | The start time for the time period for which restatement is initiated. Only UTC time is currently supported. | string (required) |
| rerunConcurrency | The max number of parallel time windows (ready for execution) for which a rerun is triggered. | int (required) |


### ScheduleTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'ScheduleTrigger' (required) |
| pipelines | Pipelines that need to be started. | TriggerPipelineReference[] |
| typeProperties | Schedule Trigger properties. | ScheduleTriggerTypeProperties(required) |


### ScheduleTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| recurrence | Recurrence schedule configuration. | ScheduleTriggerRecurrence(required) |


### ScheduleTriggerRecurrence

| Name | Description | Value |
|-|-|-|
| endTime | The end time. | string |
| frequency | The frequency. | 'Day''Hour''Minute''Month''NotSpecified''Week''Year' |
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


### TumblingWindowTrigger

| Name | Description | Value |
|-|-|-|
| type | Trigger type. | 'TumblingWindowTrigger' (required) |
| pipeline | Pipeline for which runs are created when an event is fired for trigger window that is ready. | TriggerPipelineReference(required) |
| typeProperties | Tumbling Window Trigger properties. | TumblingWindowTriggerTypeProperties(required) |


### TumblingWindowTriggerTypeProperties

| Name | Description | Value |
|-|-|-|
| delay | Specifies how long the trigger waits past due time before triggering new run. It doesn't alter window start and end time. The default is 0. Type: string (or Expression with resultType string), pattern: ((\d+).)?(\d\d):(60,([0-5][0-9])):(60,([0-5][0-9])). | For Bicep, you can use theany()function. |
| dependsOn | Triggers that this trigger depends on. Only tumbling window triggers are supported. | DependencyReference[] |
| endTime | The end time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported. | string |
| frequency | The frequency of the time windows. | 'Hour''Minute''Month' (required) |
| interval | The interval of the time windows. The minimum interval allowed is 15 Minutes. | int (required) |
| maxConcurrency | The max number of parallel time windows (ready for execution) for which a new run is triggered. | int (required) |
| retryPolicy | Retry policy that will be applied for failed pipeline runs. | RetryPolicy |
| startTime | The start time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported. | string (required) |


### DependencyReference

| Name | Description | Value |
|-|-|-|
| type | Set the object type | SelfDependencyTumblingWindowTriggerReferenceTumblingWindowTriggerDependencyReference(required) |


### SelfDependencyTumblingWindowTriggerReference

| Name | Description | Value |
|-|-|-|
| type | The type of dependency reference. | 'SelfDependencyTumblingWindowTriggerReference' (required) |
| offset | Timespan applied to the start time of a tumbling window when evaluating dependency. | string (required) |
| size | The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used. | string |


### TumblingWindowTriggerDependencyReference

| Name | Description | Value |
|-|-|-|
| type | The type of dependency reference. | 'TumblingWindowTriggerDependencyReference' (required) |
| offset | Timespan applied to the start time of a tumbling window when evaluating dependency. | string |
| referenceTrigger | Referenced trigger. | TriggerReference(required) |
| size | The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used. | string |


### TriggerReference

| Name | Description | Value |
|-|-|-|
| referenceName | Reference trigger name. | string (required) |
| type | Trigger reference type. | 'TriggerReference' (required) |


### RetryPolicy

| Name | Description | Value |
|-|-|-|
| count | Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. | For Bicep, you can use theany()function. |
| intervalInSeconds | Interval between retries in seconds. Default is 30. | int |


