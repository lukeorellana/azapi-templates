```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.TimeSeriesInsights/environments/eventSources@2021-06-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  // For remaining properties, see environments/eventSources objects
  body = jsonencode({
    kind = "string"
    localTimestamp = {
      format = "Embedded"
      timeZoneOffset = {
        propertyName = "string"
      }
    }
  })
}

```

### environments/eventSources

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-90Valid characters:Can't use:'<>%&:\?/#or control characters |
| location | The location of the resource. | string (required) |
| tags | Key-value pairs of additional properties for the resource. | Dictionary of tag names and values. SeeTags in templates |
| kind | Set the object type | Microsoft.EventHubMicrosoft.IoTHub(required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:environments |
| localTimestamp | An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events. | LocalTimestamp |


### EventHubEventSourceCreateOrUpdateParametersOrEventHu...

| Name | Description | Value |
|-|-|-|
| kind | The kind of the event source. | 'Microsoft.EventHub' (required) |
| properties | Properties of the EventHub event source that are required on create or update requests. | EventHubEventSourceCreationPropertiesOrEventHubEvent...(required) |


### EventHubEventSourceCreationPropertiesOrEventHubEvent...

| Name | Description | Value |
|-|-|-|
| consumerGroupName | The name of the event hub's consumer group that holds the partitions from which events will be read. | string (required) |
| eventHubName | The name of the event hub. | string (required) |
| eventSourceResourceId | The resource id of the event source in Azure Resource Manager. | string (required) |
| ingressStartAt | An object that contains the details about the starting point in time to ingest events. | IngressStartAtProperties |
| keyName | The name of the SAS key that grants the Time Series Insights service access to the event hub. The shared access policies for this key must grant 'Listen' permissions to the event hub. | string (required) |
| localTimestamp | An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events. | LocalTimestamp |
| serviceBusNamespace | The name of the service bus that contains the event hub. | string (required) |
| sharedAccessKey | The value of the shared access key that grants the Time Series Insights service read access to the event hub. This property is not shown in event source responses. | string (required) |
| timestampPropertyName | The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used. | string |


### IngressStartAtProperties

| Name | Description | Value |
|-|-|-|
| time | ISO8601 UTC datetime with seconds precision (milliseconds are optional), specifying the date and time that will be the starting point for Events to be consumed. | string |
| type | The type of the ingressStartAt, It can be "EarliestAvailable", "EventSourceCreationTime", "CustomEnqueuedTime". | 'CustomEnqueuedTime''EarliestAvailable''EventSourceCreationTime' |


### LocalTimestamp

| Name | Description | Value |
|-|-|-|
| format | An enum that represents the format of the local timestamp property that needs to be set. | 'Embedded' |
| timeZoneOffset | An object that represents the offset information for the local timestamp format specified. Should not be specified for LocalTimestampFormat - Embedded. | LocalTimestampTimeZoneOffset |


### LocalTimestampTimeZoneOffset

| Name | Description | Value |
|-|-|-|
| propertyName | The event property that will be contain the offset information to calculate the local timestamp. When the LocalTimestampFormat is Iana, the property name will contain the name of the column which contains IANA Timezone Name (eg: Americas/Los Angeles). When LocalTimestampFormat is Timespan, it contains the name of property which contains values representing the offset (eg: P1D or 1.00:00:00) | string |


### IoTHubEventSourceCreateOrUpdateParametersOrIoTHubEve...

| Name | Description | Value |
|-|-|-|
| kind | The kind of the event source. | 'Microsoft.IoTHub' (required) |
| properties | Properties of the IoTHub event source that are required on create or update requests. | IoTHubEventSourceCreationPropertiesOrIoTHubEventSour...(required) |


### IoTHubEventSourceCreationPropertiesOrIoTHubEventSour...

| Name | Description | Value |
|-|-|-|
| consumerGroupName | The name of the iot hub's consumer group that holds the partitions from which events will be read. | string (required) |
| eventSourceResourceId | The resource id of the event source in Azure Resource Manager. | string (required) |
| ingressStartAt | An object that contains the details about the starting point in time to ingest events. | IngressStartAtProperties |
| iotHubName | The name of the iot hub. | string (required) |
| keyName | The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub. | string (required) |
| localTimestamp | An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events. | LocalTimestamp |
| sharedAccessKey | The value of the Shared Access Policy key that grants the Time Series Insights service read access to the iot hub. This property is not shown in event source responses. | string (required) |
| timestampPropertyName | The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used. | string |


