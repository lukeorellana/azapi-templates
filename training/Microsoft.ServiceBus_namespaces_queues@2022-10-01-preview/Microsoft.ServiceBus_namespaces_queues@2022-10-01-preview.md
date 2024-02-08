```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/queues@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoDeleteOnIdle = "string"
      deadLetteringOnMessageExpiration = bool
      defaultMessageTimeToLive = "string"
      duplicateDetectionHistoryTimeWindow = "string"
      enableBatchedOperations = bool
      enableExpress = bool
      enablePartitioning = bool
      forwardDeadLetteredMessagesTo = "string"
      forwardTo = "string"
      lockDuration = "string"
      maxDeliveryCount = int
      maxMessageSizeInKilobytes = int
      maxSizeInMegabytes = int
      requiresDuplicateDetection = bool
      requiresSession = bool
      status = "string"
    }
  })
}

```

### namespaces/queues

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-260Valid characters:Alphanumerics, periods, hyphens, underscores, and slashes.Start and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Queue Properties | SBQueueProperties |


### SBQueueProperties

| Name | Description | Value |
|-|-|-|
| autoDeleteOnIdle | ISO 8061 timeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes. | string |
| deadLetteringOnMessageExpiration | A value that indicates whether this queue has dead letter support when a message expires. | bool |
| defaultMessageTimeToLive | ISO 8601 default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. | string |
| duplicateDetectionHistoryTimeWindow | ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. | string |
| enableBatchedOperations | Value that indicates whether server-side batched operations are enabled. | bool |
| enableExpress | A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage. | bool |
| enablePartitioning | A value that indicates whether the queue is to be partitioned across multiple message brokers. | bool |
| forwardDeadLetteredMessagesTo | Queue/Topic name to forward the Dead Letter message | string |
| forwardTo | Queue/Topic name to forward the messages | string |
| lockDuration | ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute. | string |
| maxDeliveryCount | The maximum delivery count. A message is automatically deadlettered after this number of deliveries. default value is 10. | int |
| maxMessageSizeInKilobytes | Maximum size (in KB) of the message payload that can be accepted by the queue. This property is only used in Premium today and default is 1024. | int |
| maxSizeInMegabytes | The maximum size of the queue in megabytes, which is the size of memory allocated for the queue. Default is 1024. | int |
| requiresDuplicateDetection | A value indicating if this queue requires duplicate detection. | bool |
| requiresSession | A value that indicates whether the queue supports the concept of sessions. | bool |
| status | Enumerates the possible values for the status of a messaging entity. | 'Active''Creating''Deleting''Disabled''ReceiveDisabled''Renaming''Restoring''SendDisabled''Unknown' |


