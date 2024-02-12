```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/topics@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoDeleteOnIdle = "string"
      defaultMessageTimeToLive = "string"
      duplicateDetectionHistoryTimeWindow = "string"
      enableBatchedOperations = bool
      enableExpress = bool
      enablePartitioning = bool
      maxMessageSizeInKilobytes = int
      maxSizeInMegabytes = int
      requiresDuplicateDetection = bool
      status = "string"
      supportOrdering = bool
    }
  })
}

```

### namespaces/topics

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Alphanumerics, periods, hyphens, underscores, and slashes.Start and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties of topic resource. | SBTopicProperties |


### SBTopicProperties

| Name | Description | Value |
|-|-|-|
| autoDeleteOnIdle | ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. | string |
| defaultMessageTimeToLive | ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. | string |
| duplicateDetectionHistoryTimeWindow | ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. | string |
| enableBatchedOperations | Value that indicates whether server-side batched operations are enabled. | bool |
| enableExpress | Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage. | bool |
| enablePartitioning | Value that indicates whether the topic to be partitioned across multiple message brokers is enabled. | bool |
| maxMessageSizeInKilobytes | Maximum size (in KB) of the message payload that can be accepted by the topic. This property is only used in Premium today and default is 1024. | int |
| maxSizeInMegabytes | Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024. | int |
| requiresDuplicateDetection | Value indicating if this topic requires duplicate detection. | bool |
| status | Enumerates the possible values for the status of a messaging entity. | 'Active''Creating''Deleting''Disabled''ReceiveDisabled''Renaming''Restoring''SendDisabled''Unknown' |
| supportOrdering | Value that indicates whether the topic supports ordering. | bool |


