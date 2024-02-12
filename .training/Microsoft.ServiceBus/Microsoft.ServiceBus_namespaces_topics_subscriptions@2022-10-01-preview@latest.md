```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/topics/subscriptions@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoDeleteOnIdle = "string"
      clientAffineProperties = {
        clientId = "string"
        isDurable = bool
        isShared = bool
      }
      deadLetteringOnFilterEvaluationExceptions = bool
      deadLetteringOnMessageExpiration = bool
      defaultMessageTimeToLive = "string"
      duplicateDetectionHistoryTimeWindow = "string"
      enableBatchedOperations = bool
      forwardDeadLetteredMessagesTo = "string"
      forwardTo = "string"
      isClientAffine = bool
      lockDuration = "string"
      maxDeliveryCount = int
      requiresSession = bool
      status = "string"
    }
  })
}

```

### namespaces/topics/subscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, periods, hyphens, and underscores.Start and end with alphnumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:topics |
| properties | Properties of subscriptions resource. | SBSubscriptionProperties |


### SBSubscriptionProperties

| Name | Description | Value |
|-|-|-|
| autoDeleteOnIdle | ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. | string |
| clientAffineProperties | Properties specific to client affine subscriptions. | SBClientAffineProperties |
| deadLetteringOnFilterEvaluationExceptions | Value that indicates whether a subscription has dead letter support on filter evaluation exceptions. | bool |
| deadLetteringOnMessageExpiration | Value that indicates whether a subscription has dead letter support when a message expires. | bool |
| defaultMessageTimeToLive | ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. | string |
| duplicateDetectionHistoryTimeWindow | ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. | string |
| enableBatchedOperations | Value that indicates whether server-side batched operations are enabled. | bool |
| forwardDeadLetteredMessagesTo | Queue/Topic name to forward the Dead Letter message | string |
| forwardTo | Queue/Topic name to forward the messages | string |
| isClientAffine | Value that indicates whether the subscription has an affinity to the client id. | bool |
| lockDuration | ISO 8061 lock duration timespan for the subscription. The default value is 1 minute. | string |
| maxDeliveryCount | Number of maximum deliveries. | int |
| requiresSession | Value indicating if a subscription supports the concept of sessions. | bool |
| status | Enumerates the possible values for the status of a messaging entity. | 'Active''Creating''Deleting''Disabled''ReceiveDisabled''Renaming''Restoring''SendDisabled''Unknown' |


### SBClientAffineProperties

| Name | Description | Value |
|-|-|-|
| clientId | Indicates the Client ID of the application that created the client-affine subscription. | string |
| isDurable | For client-affine subscriptions, this value indicates whether the subscription is durable or not. | bool |
| isShared | For client-affine subscriptions, this value indicates whether the subscription is shared or not. | bool |


