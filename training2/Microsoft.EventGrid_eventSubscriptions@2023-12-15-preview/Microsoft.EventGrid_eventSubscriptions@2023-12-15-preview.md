```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/eventSubscriptions@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deadLetterDestination = {
        endpointType = "string"
        // For remaining properties, see DeadLetterDestination objects
      }
      deadLetterWithResourceIdentity = {
        deadLetterDestination = {
          endpointType = "string"
          // For remaining properties, see DeadLetterDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      deliveryWithResourceIdentity = {
        destination = {
          endpointType = "string"
          // For remaining properties, see EventSubscriptionDestination objects
        }
        identity = {
          type = "string"
          userAssignedIdentity = "string"
        }
      }
      destination = {
        endpointType = "string"
        // For remaining properties, see EventSubscriptionDestination objects
      }
      eventDeliverySchema = "string"
      expirationTimeUtc = "string"
      filter = {
        advancedFilters = [
          {
            key = "string"
            operatorType = "string"
            // For remaining properties, see AdvancedFilter objects
          }
        ]
        enableAdvancedFilteringOnArrays = bool
        includedEventTypes = [
          "string"
        ]
        isSubjectCaseSensitive = bool
        subjectBeginsWith = "string"
        subjectEndsWith = "string"
      }
      labels = [
        "string"
      ]
      retryPolicy = {
        eventTimeToLiveInMinutes = int
        maxDeliveryAttempts = int
      }
    }
  })
}

```

### eventSubscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-64Valid characters:Alphanumerics and hyphens. |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties of the event subscription. | EventSubscriptionProperties |


### EventSubscriptionProperties

| Name | Description | Value |
|-|-|-|
| deadLetterDestination | The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering. | DeadLetterDestination |
| deadLetterWithResourceIdentity | The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering. | DeadLetterWithResourceIdentity |
| deliveryWithResourceIdentity | Information about the destination where events have to be delivered for the event subscription.Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering. | DeliveryWithResourceIdentity |
| destination | Information about the destination where events have to be delivered for the event subscription.Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering. | EventSubscriptionDestination |
| eventDeliverySchema | The event delivery schema for the event subscription. | 'CloudEventSchemaV1_0''CustomInputSchema''EventGridSchema' |
| expirationTimeUtc | Expiration time of the event subscription. | string |
| filter | Information about the filter for the event subscription. | EventSubscriptionFilter |
| labels | List of user defined labels. | string[] |
| retryPolicy | The retry policy for events. This can be used to configure maximum number of delivery attempts and time to live for events. | RetryPolicy |


### DeadLetterDestination

| Name | Description | Value |
|-|-|-|
| endpointType | Set the object type | StorageBlob(required) |


### StorageBlobDeadLetterDestination

| Name | Description | Value |
|-|-|-|
| endpointType | Type of the endpoint for the dead letter destination | 'StorageBlob' (required) |
| properties | The properties of the Storage Blob based deadletter destination | StorageBlobDeadLetterDestinationProperties |


### StorageBlobDeadLetterDestinationProperties

| Name | Description | Value |
|-|-|-|
| blobContainerName | The name of the Storage blob container that is the destination of the deadletter events | string |
| resourceId | The Azure Resource ID of the storage account that is the destination of the deadletter events | string |


### DeadLetterWithResourceIdentity

| Name | Description | Value |
|-|-|-|
| deadLetterDestination | Information about the destination where events have to be delivered for the event subscription.Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering. | DeadLetterDestination |
| identity | The identity to use when dead-lettering events. | EventSubscriptionIdentity |


### EventSubscriptionIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity. | 'SystemAssigned''UserAssigned' |
| userAssignedIdentity | The user identity associated with the resource. | string |


### DeliveryWithResourceIdentity

| Name | Description | Value |
|-|-|-|
| destination | Information about the destination where events have to be delivered for the event subscription.Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering. | EventSubscriptionDestination |
| identity | The identity to use when delivering events. | EventSubscriptionIdentity |


### EventSubscriptionDestination

| Name | Description | Value |
|-|-|-|
| endpointType | Set the object type | AzureFunctionEventHubHybridConnectionMonitorAlertNamespaceTopicPartnerDestinationServiceBusQueueServiceBusTopicStorageQueueWebHook(required) |


### AzureFunctionEventSubscriptionDestination

| Name | Description | Value |
|-|-|-|
| endpointType | Type of the endpoint for the event subscription destination. | 'AzureFunction' (required) |
| properties | Azure Function Properties of the event subscription destination. | AzureFunctionEventSubscriptionDestinationProperties |


### AzureFunctionEventSubscriptionDestinationProperties

| Name | Description | Value |
|-|-|-|
| deliveryAttributeMappings | Delivery attribute details. | DeliveryAttributeMapping[] |
| maxEventsPerBatch | Maximum number of events per batch. | int |
| preferredBatchSizeInKilobytes | Preferred batch size in Kilobytes. | int |
| resourceId | The Azure Resource Id that represents the endpoint of the Azure Function destination of an event subscription. | string |


### DeliveryAttributeMapping

| Name | Description | Value |
|-|-|-|
| name | Name of the delivery attribute or header. | string |
| type | Set the object type | DynamicStatic(required) |


### DynamicDeliveryAttributeMapping

| Name | Description | Value |
|-|-|-|
| type | Type of the delivery attribute or header name. | 'Dynamic' (required) |
| properties | Properties of dynamic delivery attribute mapping. | DynamicDeliveryAttributeMappingProperties |


### DynamicDeliveryAttributeMappingProperties

| Name | Description | Value |
|-|-|-|
| sourceField | JSON path in the event which contains attribute value. | string |


### StaticDeliveryAttributeMapping

| Name | Description | Value |
|-|-|-|
| type | Type of the delivery attribute or header name. | 'Static' (required) |
| properties | Properties of static delivery attribute mapping. | StaticDeliveryAttributeMappingProperties |


### StaticDeliveryAttributeMappingProperties

| Name | Description | Value |
|-|-|-|
| isSecret | Boolean flag to tell if the attribute contains sensitive information . | bool |
| value | Value of the delivery attribute. | string |


### EventHubEventSubscriptionDestination

| Name | Description | Value |
|-|-|-|
| endpointType | Type of the endpoint for the event subscription destination. | 'EventHub' (required) |
| properties | Event Hub Properties of the event subscription destination. | EventHubEventSubscriptionDestinationProperties |


### EventHubEventSubscriptionDestinationProperties

| Name | Description | Value |
|-|-|-|
| deliveryAttributeMappings | Delivery attribute details. | DeliveryAttributeMapping[] |
| resourceId | The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription. | string |


### HybridConnectionEventSubscriptionDestination

| Name | Description | Value |
|-|-|-|
| endpointType | Type of the endpoint for the event subscription destination. | 'HybridConnection' (required) |
| properties | Hybrid connection Properties of the event subscription destination. | HybridConnectionEventSubscriptionDestinationProperti... |


### HybridConnectionEventSubscriptionDestinationProperti...

| Name | Description | Value |
|-|-|-|
| deliveryAttributeMappings | Delivery attribute details. | DeliveryAttributeMapping[] |
| resourceId | The Azure Resource ID of an hybrid connection that is the destination of an event subscription. | string |


### MonitorAlertEventSubscriptionDestination

| Name | Description | Value |
|-|-|-|
| endpointType | Type of the endpoint for the event subscription destination. | 'MonitorAlert' (required) |
| properties | Monitor Alert properties of the event subscription destination. | MonitorAlertEventSubscriptionDestinationProperties |


### MonitorAlertEventSubscriptionDestinationProperties

| Name | Description | Value |
|-|-|-|
| actionGroups | The list of ARM Ids of Action Groups that will be triggered on every Alert fired through this event subscription.Each resource ARM Id should follow this pattern: /subscriptions/{AzureSubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Insights/actionGroups/{ActionGroupName}. | string[] |
| description | The description that will be attached to every Alert fired through this event subscription. | string |
| severity | The severity that will be attached to every Alert fired through this event subscription.This field must be provided. | 'Sev0''Sev1''Sev2''Sev3''Sev4' |


### NamespaceTopicEventSubscriptionDestination

| Name | Description | Value |
|-|-|-|
| endpointType | Type of the endpoint for the event subscription destination. | 'NamespaceTopic' (required) |
| properties | Namespace Topic properties of the event subscription destination. | NamespaceTopicEventSubscriptionDestinationProperties |


### NamespaceTopicEventSubscriptionDestinationProperties

| Name | Description | Value |
|-|-|-|
| resourceId | The Azure resource Id that represents the endpoint of the Event Grid Namespace Topic destination of an event subscription.This field is required and the Namespace Topic resource listed must already exist.The resource ARM Id should follow this pattern: /subscriptions/{AzureSubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.EventGrid/namespaces/{NamespaceName}/topics/{TopicName}. | string |


### PartnerEventSubscriptionDestination

| Name | Description | Value |
|-|-|-|
| endpointType | Type of the endpoint for the event subscription destination. | 'PartnerDestination' (required) |
| properties | Partner Destination Properties of the event subscription destination. | PartnerEventSubscriptionDestinationProperties |


### PartnerEventSubscriptionDestinationProperties

| Name | Description | Value |
|-|-|-|
| resourceId | The Azure Resource Id that represents the endpoint of a Partner Destination of an event subscription. | string |


### ServiceBusQueueEventSubscriptionDestination

| Name | Description | Value |
|-|-|-|
| endpointType | Type of the endpoint for the event subscription destination. | 'ServiceBusQueue' (required) |
| properties | Service Bus Properties of the event subscription destination. | ServiceBusQueueEventSubscriptionDestinationPropertie... |


### ServiceBusQueueEventSubscriptionDestinationPropertie...

| Name | Description | Value |
|-|-|-|
| deliveryAttributeMappings | Delivery attribute details. | DeliveryAttributeMapping[] |
| resourceId | The Azure Resource Id that represents the endpoint of the Service Bus destination of an event subscription. | string |


### ServiceBusTopicEventSubscriptionDestination

| Name | Description | Value |
|-|-|-|
| endpointType | Type of the endpoint for the event subscription destination. | 'ServiceBusTopic' (required) |
| properties | Service Bus Topic Properties of the event subscription destination. | ServiceBusTopicEventSubscriptionDestinationPropertie... |


### ServiceBusTopicEventSubscriptionDestinationPropertie...

| Name | Description | Value |
|-|-|-|
| deliveryAttributeMappings | Delivery attribute details. | DeliveryAttributeMapping[] |
| resourceId | The Azure Resource Id that represents the endpoint of the Service Bus Topic destination of an event subscription. | string |


### StorageQueueEventSubscriptionDestination

| Name | Description | Value |
|-|-|-|
| endpointType | Type of the endpoint for the event subscription destination. | 'StorageQueue' (required) |
| properties | Storage Queue Properties of the event subscription destination. | StorageQueueEventSubscriptionDestinationProperties |


### StorageQueueEventSubscriptionDestinationProperties

| Name | Description | Value |
|-|-|-|
| queueMessageTimeToLiveInSeconds | Storage queue message time to live in seconds. This value cannot be zero or negative with the exception of using -1 to indicate that the Time To Live of the message is Infinite. | int |
| queueName | The name of the Storage queue under a storage account that is the destination of an event subscription. | string |
| resourceId | The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription. | string |


### WebHookEventSubscriptionDestination

| Name | Description | Value |
|-|-|-|
| endpointType | Type of the endpoint for the event subscription destination. | 'WebHook' (required) |
| properties | WebHook Properties of the event subscription destination. | WebHookEventSubscriptionDestinationProperties |


### WebHookEventSubscriptionDestinationProperties

| Name | Description | Value |
|-|-|-|
| azureActiveDirectoryApplicationIdOrUri | The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests. | string |
| azureActiveDirectoryTenantId | The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests. | string |
| deliveryAttributeMappings | Delivery attribute details. | DeliveryAttributeMapping[] |
| endpointUrl | The URL that represents the endpoint of the destination of an event subscription. | stringConstraints:Sensitive value. Pass in as a secure parameter. |
| maxEventsPerBatch | Maximum number of events per batch. | int |
| minimumTlsVersionAllowed | Minimum TLS version that should be supported by webhook endpoint | '1.0''1.1''1.2' |
| preferredBatchSizeInKilobytes | Preferred batch size in Kilobytes. | int |


### EventSubscriptionFilter

| Name | Description | Value |
|-|-|-|
| advancedFilters | An array of advanced filters that are used for filtering event subscriptions. | AdvancedFilter[] |
| enableAdvancedFilteringOnArrays | Allows advanced filters to be evaluated against an array of values instead of expecting a singular value. | bool |
| includedEventTypes | A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null. | string[] |
| isSubjectCaseSensitive | Specifies if the SubjectBeginsWith and SubjectEndsWith properties of the filtershould be compared in a case sensitive manner. | bool |
| subjectBeginsWith | An optional string to filter events for an event subscription based on a resource path prefix.The format of this depends on the publisher of the events.Wildcard characters are not supported in this path. | string |
| subjectEndsWith | An optional string to filter events for an event subscription based on a resource path suffix.Wildcard characters are not supported in this path. | string |


### AdvancedFilter

| Name | Description | Value |
|-|-|-|
| key | The field/property in the event based on which you want to filter. | string |
| operatorType | Set the object type | BoolEqualsIsNotNullIsNullOrUndefinedNumberGreaterThanNumberGreaterThanOrEqualsNumberInNumberInRangeNumberLessThanNumberLessThanOrEqualsNumberNotInNumberNotInRangeStringBeginsWithStringContainsStringEndsWithStringInStringNotBeginsWithStringNotContainsStringNotEndsWithStringNotIn(required) |


### BoolEqualsAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'BoolEquals' (required) |
| value | The boolean filter value. | bool |


### IsNotNullAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'IsNotNull' (required) |


### IsNullOrUndefinedAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'IsNullOrUndefined' (required) |


### NumberGreaterThanAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberGreaterThan' (required) |
| value | The filter value. | int |


### NumberGreaterThanOrEqualsAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberGreaterThanOrEquals' (required) |
| value | The filter value. | int |


### NumberInAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberIn' (required) |
| values | The set of filter values. | int[] |


### NumberInRangeAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberInRange' (required) |
| values | The set of filter values. | int[][] |


### NumberLessThanAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberLessThan' (required) |
| value | The filter value. | int |


### NumberLessThanOrEqualsAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberLessThanOrEquals' (required) |
| value | The filter value. | int |


### NumberNotInAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberNotIn' (required) |
| values | The set of filter values. | int[] |


### NumberNotInRangeAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberNotInRange' (required) |
| values | The set of filter values. | int[][] |


### StringBeginsWithAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringBeginsWith' (required) |
| values | The set of filter values. | string[] |


### StringContainsAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringContains' (required) |
| values | The set of filter values. | string[] |


### StringEndsWithAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringEndsWith' (required) |
| values | The set of filter values. | string[] |


### StringInAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringIn' (required) |
| values | The set of filter values. | string[] |


### StringNotBeginsWithAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringNotBeginsWith' (required) |
| values | The set of filter values. | string[] |


### StringNotContainsAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringNotContains' (required) |
| values | The set of filter values. | string[] |


### StringNotEndsWithAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringNotEndsWith' (required) |
| values | The set of filter values. | string[] |


### StringNotInAdvancedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringNotIn' (required) |
| values | The set of filter values. | string[] |


### RetryPolicy

| Name | Description | Value |
|-|-|-|
| eventTimeToLiveInMinutes | Time To Live (in minutes) for events. | int |
| maxDeliveryAttempts | Maximum number of delivery retry attempts for events. | int |


