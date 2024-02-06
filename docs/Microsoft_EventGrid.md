## Microsoft.EventGrid/domains@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/domains@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      autoCreateTopicWithFirstSubscription = bool
      autoDeleteTopicWithLastSubscription = bool
      dataResidencyBoundary = "string"
      disableLocalAuth = bool
      eventTypeInfo = {
        inlineEventTypes = {
          {customized property} = {
            dataSchemaUrl = "string"
            description = "string"
            displayName = "string"
            documentationUrl = "string"
          }
        }
        kind = "Inline"
      }
      inboundIpRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      inputSchema = "string"
      inputSchemaMapping = {
        inputSchemaMappingType = "string"
        // For remaining properties, see InputSchemaMapping objects
      }
      minimumTlsVersionAllowed = "string"
      publicNetworkAccess = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### domains

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-50Valid characters:Alphanumerics and hyphens. |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | The Sku pricing tier for the Event Grid Domain resource. | ResourceSku |
| identity | Identity information for the Event Grid Domain resource. | IdentityInfo |
| properties | Properties of the Event Grid Domain resource. | DomainProperties |


### IdentityInfo

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.This property is currently not used and reserved for future usage. | IdentityInfoUserAssignedIdentities |


### IdentityInfoUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserIdentityProperties |


### UserIdentityProperties

| Name | Description | Value |
|-|-|-|
| clientId | The client id of user assigned identity. | string |
| principalId | The principal id of user assigned identity. | string |


### DomainProperties

| Name | Description | Value |
|-|-|-|
| autoCreateTopicWithFirstSubscription | This Boolean is used to specify the creation mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.In this context, creation of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.When this property is null or set to true, Event Grid is responsible of automatically creating the domain topic when the first event subscription iscreated at the scope of the domain topic. If this property is set to false, then creating the first event subscription will require creating a domain topicby the user. The self-management mode can be used if the user wants full control of when the domain topic is created, while auto-managed mode provides theflexibility to perform less operations and manage fewer resources by the user. Also, note that in auto-managed creation mode, user is allowed to create thedomain topic on demand if needed. | bool |
| autoDeleteTopicWithLastSubscription | This Boolean is used to specify the deletion mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.In this context, deletion of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.When this property is set to true, Event Grid is responsible of automatically deleting the domain topic when the last event subscription at the scopeof the domain topic is deleted. If this property is set to false, then the user needs to manually delete the domain topic when it is no longer needed(e.g., when last event subscription is deleted and the resource needs to be cleaned up). The self-management mode can be used if the user wants fullcontrol of when the domain topic needs to be deleted, while auto-managed mode provides the flexibility to perform less operations and manage fewerresources by the user. | bool |
| dataResidencyBoundary | Data Residency Boundary of the resource. | 'WithinGeopair''WithinRegion' |
| disableLocalAuth | This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the domain. | bool |
| eventTypeInfo | Event Type Information for the domain. This information is provided by the publisher and can be used by thesubscriber to view different types of events that are published. | EventTypeInfo |
| inboundIpRules | This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled. | InboundIpRule[] |
| inputSchema | This determines the format that Event Grid should expect for incoming events published to the Event Grid Domain Resource. | 'CloudEventSchemaV1_0''CustomEventSchema''EventGridSchema' |
| inputSchemaMapping | Information about the InputSchemaMapping which specified the info about mapping event payload. | InputSchemaMapping |
| minimumTlsVersionAllowed | Minimum TLS version of the publisher allowed to publish to this domain | '1.0''1.1''1.2' |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled.You can further restrict to specific IPs by configuring {seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.DomainProperties.InboundIpRules" /} | 'Disabled''Enabled''SecuredByPerimeter' |


### EventTypeInfo

| Name | Description | Value |
|-|-|-|
| inlineEventTypes | A collection of inline event types for the resource. The inline event type keys are of type string which represents the name of the event.An example of a valid inline event name is "Contoso.OrderCreated".The inline event type values are of type InlineEventProperties and will contain additional information for every inline event type. | EventTypeInfoInlineEventTypes |
| kind | The kind of event type used. | 'Inline' |


### EventTypeInfoInlineEventTypes

| Name | Description | Value |
|-|-|-|
| {customized property} |  | InlineEventProperties |


### InlineEventProperties

| Name | Description | Value |
|-|-|-|
| dataSchemaUrl | The dataSchemaUrl for the inline event. | string |
| description | The description for the inline event. | string |
| displayName | The displayName for the inline event. | string |
| documentationUrl | The documentationUrl for the inline event. | string |


### InboundIpRule

| Name | Description | Value |
|-|-|-|
| action | Action to perform based on the match or no match of the IpMask. | 'Allow' |
| ipMask | IP Address in CIDR notation e.g., 10.0.0.0/8. | string |


### InputSchemaMapping

| Name | Description | Value |
|-|-|-|
| inputSchemaMappingType | Set the object type | Json(required) |


### JsonInputSchemaMapping

| Name | Description | Value |
|-|-|-|
| inputSchemaMappingType | Type of the custom mapping | 'Json' (required) |
| properties | JSON Properties of the input schema mapping | JsonInputSchemaMappingProperties |


### JsonInputSchemaMappingProperties

| Name | Description | Value |
|-|-|-|
| dataVersion | The mapping information for the DataVersion property of the Event Grid Event. | JsonFieldWithDefault |
| eventTime | The mapping information for the EventTime property of the Event Grid Event. | JsonField |
| eventType | The mapping information for the EventType property of the Event Grid Event. | JsonFieldWithDefault |
| id | The mapping information for the Id property of the Event Grid Event. | JsonField |
| subject | The mapping information for the Subject property of the Event Grid Event. | JsonFieldWithDefault |
| topic | The mapping information for the Topic property of the Event Grid Event. | JsonField |


### JsonFieldWithDefault

| Name | Description | Value |
|-|-|-|
| defaultValue | The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload. | string |
| sourceField | Name of a field in the input event schema that's to be used as the source of a mapping. | string |


### JsonField

| Name | Description | Value |
|-|-|-|
| sourceField | Name of a field in the input event schema that's to be used as the source of a mapping. | string |


### ResourceSku

| Name | Description | Value |
|-|-|-|
| name | The Sku name of the resource. The possible values are: Basic or Premium. | 'Basic''Premium' |
## Microsoft.EventGrid/domains/eventSubscriptions@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/domains/eventSubscriptions@2023-12-15-preview"
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

### domains/eventSubscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:domains |
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
## Microsoft.EventGrid/domains/privateEndpointConnections@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/domains/privateEndpointConnections@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

### domains/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:domains |
| properties | Properties of the PrivateEndpointConnection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | GroupIds from the private link service resource. | string[] |
| privateEndpoint | The Private Endpoint resource for this Connection. | PrivateEndpoint |
| privateLinkServiceConnectionState | Details about the state of the connection. | ConnectionState |
| provisioningState | Provisioning state of the Private Endpoint Connection. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The ARM identifier for Private Endpoint. | string |


### ConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required (if any). | string |
| description | Description of the connection state. | string |
| status | Status of the connection. | 'Approved''Disconnected''Pending''Rejected' |
## Microsoft.EventGrid/domains/topics@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/domains/topics@2023-12-15-preview"
  name = "string"
  parent_id = "string"
}

```

### domains/topics

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 3-50Valid characters:Alphanumerics and hyphens. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:domains |
## Microsoft.EventGrid/domains/topics/eventSubscriptions@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/domains/topics/eventSubscriptions@2023-12-15-preview"
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

### domains/topics/eventSubscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:topics |
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
## Microsoft.EventGrid/eventSubscriptions@2023-12-15-preview

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
## Microsoft.EventGrid/namespaces@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      inboundIpRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      isZoneRedundant = bool
      minimumTlsVersionAllowed = "string"
      privateEndpointConnections = [
        {
          properties = {
            groupIds = [
              "string"
            ]
            privateEndpoint = {
              id = "string"
            }
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
            provisioningState = "string"
          }
        }
      ]
      publicNetworkAccess = "string"
      topicsConfiguration = {}
      topicSpacesConfiguration = {
        clientAuthentication = {
          alternativeAuthenticationNameSources = [
            "string"
          ]
        }
        maximumClientSessionsPerAuthenticationName = int
        maximumSessionExpiryInHours = int
        routeTopicResourceId = "string"
        routingEnrichments = {
          dynamic = [
            {
              key = "string"
              value = "string"
            }
          ]
          static = [
            {
              key = "string"
              valueType = "string"
              // For remaining properties, see StaticRoutingEnrichment objects
            }
          ]
        }
        routingIdentityInfo = {
          type = "string"
          userAssignedIdentity = "string"
        }
        state = "string"
      }
    }
    sku = {
      capacity = int
      name = "Standard"
    }
  })
}

```

### namespaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | Represents available Sku pricing tiers. | NamespaceSku |
| identity | Identity information for the Namespace resource. | IdentityInfo |
| properties | Properties of the Namespace resource. | NamespaceProperties |


### IdentityInfo

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.This property is currently not used and reserved for future usage. | IdentityInfoUserAssignedIdentities |


### IdentityInfoUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserIdentityProperties |


### UserIdentityProperties

| Name | Description | Value |
|-|-|-|
| clientId | The client id of user assigned identity. | string |
| principalId | The principal id of user assigned identity. | string |


### NamespaceProperties

| Name | Description | Value |
|-|-|-|
| inboundIpRules | This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled. | InboundIpRule[] |
| isZoneRedundant | This is an optional property and it allows the user to specify if the namespace resource supports zone-redundancy capability or not. If thisproperty is not specified explicitly by the user, its default value depends on the following conditions:a. For Availability Zones enabled regions - The default property value would be true.b. For non-Availability Zones enabled regions - The default property value would be false.Once specified, this property cannot be updated. | bool |
| minimumTlsVersionAllowed | Minimum TLS version of the publisher allowed to publish to this namespace. Only TLS version 1.2 is supported. | '1.0''1.1''1.2' |
| privateEndpointConnections |  | PrivateEndpointConnection[] |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled.You can further restrict to specific IPs by configuring {seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.PubSub.NamespaceProperties.InboundIpRules" /} | 'Disabled''Enabled''SecuredByPerimeter' |
| topicsConfiguration | Topics configuration information for the namespace resource | TopicsConfiguration |
| topicSpacesConfiguration | Topic spaces configuration information for the namespace resource | TopicSpacesConfiguration |


### InboundIpRule

| Name | Description | Value |
|-|-|-|
| action | Action to perform based on the match or no match of the IpMask. | 'Allow' |
| ipMask | IP Address in CIDR notation e.g., 10.0.0.0/8. | string |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| properties | Properties of the PrivateEndpointConnection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | GroupIds from the private link service resource. | string[] |
| privateEndpoint | The Private Endpoint resource for this Connection. | PrivateEndpoint |
| privateLinkServiceConnectionState | Details about the state of the connection. | ConnectionState |
| provisioningState | Provisioning state of the Private Endpoint Connection. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The ARM identifier for Private Endpoint. | string |


### ConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required (if any). | string |
| description | Description of the connection state. | string |
| status | Status of the connection. | 'Approved''Disconnected''Pending''Rejected' |


### TopicSpacesConfiguration

| Name | Description | Value |
|-|-|-|
| clientAuthentication | Client authentication settings for topic spaces configuration. | ClientAuthenticationSettings |
| maximumClientSessionsPerAuthenticationName | The maximum number of sessions per authentication name. The property default value is 1.Min allowed value is 1 and max allowed value is 100. | int |
| maximumSessionExpiryInHours | The maximum session expiry in hours. The property default value is 1 hour.Min allowed value is 1 hour and max allowed value is 8 hours. | int |
| routeTopicResourceId | Fully qualified Azure Resource Id for the Event Grid Topic to which events will be routed to from TopicSpaces under a namespace.This property should be in the following format '/subscriptions/{subId}/resourcegroups/{resourceGroupName}/providers/microsoft.EventGrid/topics/{topicName}'.This topic should reside in the same region where namespace is located. | string |
| routingEnrichments | Routing enrichments for topic spaces configuration | RoutingEnrichments |
| routingIdentityInfo | Routing identity info for topic spaces configuration. | RoutingIdentityInfo |
| state | Indicate if Topic Spaces Configuration is enabled for the namespace. Default is Disabled. | 'Disabled''Enabled' |


### ClientAuthenticationSettings

| Name | Description | Value |
|-|-|-|
| alternativeAuthenticationNameSources | Alternative authentication name sources related to client authentication settings for namespace resource. | String array containing any of:'ClientCertificateDns''ClientCertificateEmail''ClientCertificateIp''ClientCertificateSubject''ClientCertificateUri' |


### RoutingEnrichments

| Name | Description | Value |
|-|-|-|
| dynamic |  | DynamicRoutingEnrichment[] |
| static |  | StaticRoutingEnrichment[] |


### DynamicRoutingEnrichment

| Name | Description | Value |
|-|-|-|
| key | Dynamic routing enrichment key. | string |
| value | Dynamic routing enrichment value. | string |


### StaticRoutingEnrichment

| Name | Description | Value |
|-|-|-|
| key | Static routing enrichment key. | string |
| valueType | Set the object type | String(required) |


### StaticStringRoutingEnrichment

| Name | Description | Value |
|-|-|-|
| valueType | Static routing enrichment value type. For e.g. this property value can be 'String'. | 'String' (required) |
| value | String type routing enrichment value. | string |


### RoutingIdentityInfo

| Name | Description | Value |
|-|-|-|
| type |  | 'None''SystemAssigned''UserAssigned' |
| userAssignedIdentity |  | string |


### NamespaceSku

| Name | Description | Value |
|-|-|-|
| capacity | Specifies the number of Throughput Units that defines the capacity for the namespace. The property default value is1 which signifies 1 Throughput Unit = 1MB/s ingress and 2MB/s egress per namespace. Min capacity is 1 andmax allowed capacity is 20. | int |
| name | The name of the SKU. | 'Standard' |
## Microsoft.EventGrid/namespaces/caCertificates@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/caCertificates@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      encodedCertificate = "string"
    }
  })
}

```

### namespaces/caCertificates

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | The properties of CA certificate. | CaCertificateProperties |


### CaCertificateProperties

| Name | Description | Value |
|-|-|-|
| description | Description for the CA Certificate resource. | string |
| encodedCertificate | Base64 encoded PEM (Privacy Enhanced Mail) format certificate data. | string |
## Microsoft.EventGrid/namespaces/clientGroups@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/clientGroups@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      query = "string"
    }
  })
}

```

### namespaces/clientGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | The properties of client group. | ClientGroupProperties |


### ClientGroupProperties

| Name | Description | Value |
|-|-|-|
| description | Description for the Client Group resource. | string |
| query | The grouping query for the clients.Example : attributes.keyName IN ['a', 'b', 'c']. | string |
## Microsoft.EventGrid/namespaces/clients@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/clients@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      attributes = {}
      authenticationName = "string"
      clientCertificateAuthentication = {
        allowedThumbprints = [
          "string"
        ]
        validationScheme = "string"
      }
      description = "string"
      state = "string"
    }
  })
}

```

### namespaces/clients

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | The properties of client. | ClientProperties |


### ClientProperties

| Name | Description | Value |
|-|-|-|
| attributes | Attributes for the client. Supported values are int, bool, string, string[].Example:"attributes": { "room": "345", "floor": 12, "deviceTypes": ["Fan", "Light"] } | ClientPropertiesAttributes |
| authenticationName | The name presented by the client for authentication. The default value is the name of the resource. | string |
| clientCertificateAuthentication | The client certificate authentication information. | ClientCertificateAuthentication |
| description | Description for the Client resource. | string |
| state | Indicates if the client is enabled or not. Default value is Enabled. | 'Disabled''Enabled' |


### ClientPropertiesAttributes

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |


### ClientCertificateAuthentication

| Name | Description | Value |
|-|-|-|
| allowedThumbprints | The list of thumbprints that are allowed during client authentication. This property is required only if the validationScheme is 'ThumbprintMatch'. | string[] |
| validationScheme | The validation scheme used to authenticate the client. Default value is SubjectMatchesAuthenticationName. | 'DnsMatchesAuthenticationName''EmailMatchesAuthenticationName''IpMatchesAuthenticationName''SubjectMatchesAuthenticationName''ThumbprintMatch''UriMatchesAuthenticationName' |
## Microsoft.EventGrid/namespaces/permissionBindings@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/permissionBindings@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientGroupName = "string"
      description = "string"
      permission = "string"
      topicSpaceName = "string"
    }
  })
}

```

### namespaces/permissionBindings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | The properties of permission binding. | PermissionBindingProperties |


### PermissionBindingProperties

| Name | Description | Value |
|-|-|-|
| clientGroupName | The name of the client group resource that the permission is bound to.The client group needs to be a resource under the same namespace the permission binding is a part of. | string |
| description | Description for the Permission Binding resource. | string |
| permission | The allowed permission. | 'Publisher''Subscriber' |
| topicSpaceName | The name of the Topic Space resource that the permission is bound to.The Topic space needs to be a resource under the same namespace the permission binding is a part of. | string |
## Microsoft.EventGrid/namespaces/privateEndpointConnections@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/privateEndpointConnections@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

### namespaces/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties of the PrivateEndpointConnection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | GroupIds from the private link service resource. | string[] |
| privateEndpoint | The Private Endpoint resource for this Connection. | PrivateEndpoint |
| privateLinkServiceConnectionState | Details about the state of the connection. | ConnectionState |
| provisioningState | Provisioning state of the Private Endpoint Connection. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The ARM identifier for Private Endpoint. | string |


### ConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required (if any). | string |
| description | Description of the connection state. | string |
| status | Status of the connection. | 'Approved''Disconnected''Pending''Rejected' |
## Microsoft.EventGrid/namespaces/topics@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/topics@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      eventRetentionInDays = int
      inputSchema = "CloudEventSchemaV1_0"
      publisherType = "Custom"
    }
  })
}

```

### namespaces/topics

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | Properties of the namespace topic. | NamespaceTopicProperties |


### NamespaceTopicProperties

| Name | Description | Value |
|-|-|-|
| eventRetentionInDays | Event retention for the namespace topic expressed in days. The property default value is 1 day.Min event retention duration value is 1 day and max event retention duration value is 1 day. | int |
| inputSchema | This determines the format that is expected for incoming events published to the topic. | 'CloudEventSchemaV1_0' |
| publisherType | Publisher type of the namespace topic. | 'Custom' |
## Microsoft.EventGrid/namespaces/topics/eventSubscriptions@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/topics/eventSubscriptions@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deliveryConfiguration = {
        deliveryMode = "string"
        push = {
          deadLetterDestinationWithResourceIdentity = {
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
          eventTimeToLive = "string"
          maxDeliveryCount = int
        }
        queue = {
          deadLetterDestinationWithResourceIdentity = {
            deadLetterDestination = {
              endpointType = "string"
              // For remaining properties, see DeadLetterDestination objects
            }
            identity = {
              type = "string"
              userAssignedIdentity = "string"
            }
          }
          eventTimeToLive = "string"
          maxDeliveryCount = int
          receiveLockDurationInSeconds = int
        }
      }
      eventDeliverySchema = "CloudEventSchemaV1_0"
      filtersConfiguration = {
        filters = [
          {
            key = "string"
            operatorType = "string"
            // For remaining properties, see Filter objects
          }
        ]
        includedEventTypes = [
          "string"
        ]
      }
    }
  })
}

```

### namespaces/topics/eventSubscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:topics |
| properties | Properties of the event subscription. | SubscriptionProperties |


### SubscriptionProperties

| Name | Description | Value |
|-|-|-|
| deliveryConfiguration | Information about the delivery configuration of the event subscription. | DeliveryConfiguration |
| eventDeliverySchema | The event delivery schema for the event subscription. | 'CloudEventSchemaV1_0' |
| filtersConfiguration | Information about the filter for the event subscription. | FiltersConfiguration |


### DeliveryConfiguration

| Name | Description | Value |
|-|-|-|
| deliveryMode | Delivery mode of the event subscription. | 'Push''Queue' |
| push | This property should be populated when deliveryMode is push and represents information about the push subscription. | PushInfo |
| queue | This property should be populated when deliveryMode is queue and represents information about the queue subscription. | QueueInfo |


### PushInfo

| Name | Description | Value |
|-|-|-|
| deadLetterDestinationWithResourceIdentity | The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.Uses the managed identity setup on the parent resource (namely, namespace) to acquire the authentication tokens being used during delivery / dead-lettering. | DeadLetterWithResourceIdentity |
| deliveryWithResourceIdentity | Information about the destination where events have to be delivered for the event subscription.Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering. | DeliveryWithResourceIdentity |
| eventTimeToLive | Time span duration in ISO 8601 format that determines how long messages are available to the subscription from the time the message was published.This duration value is expressed using the following format: 'P(n)Y(n)M(n)DT(n)H(n)M(n)S', where:- (n) is replaced by the value of each time element that follows the (n).- P is the duration (or Period) designator and is always placed at the beginning of the duration.- Y is the year designator, and it follows the value for the number of years.- M is the month designator, and it follows the value for the number of months.- W is the week designator, and it follows the value for the number of weeks.- D is the day designator, and it follows the value for the number of days.- T is the time designator, and it precedes the time components.- H is the hour designator, and it follows the value for the number of hours.- M is the minute designator, and it follows the value for the number of minutes.- S is the second designator, and it follows the value for the number of seconds.This duration value cannot be set greater than the topicâs EventRetentionInDays. It is is an optional field where its minimum value is 1 minute, and its maximum is determinedby topicâs EventRetentionInDays value. The followings are examples of valid values:- 'P0DT23H12M' or 'PT23H12M': for duration of 23 hours and 12 minutes.- 'P1D' or 'P1DT0H0M0S': for duration of 1 day. | string |
| maxDeliveryCount | The maximum delivery count of the events. | int |


### DeadLetterWithResourceIdentity

| Name | Description | Value |
|-|-|-|
| deadLetterDestination | Information about the destination where events have to be delivered for the event subscription.Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering. | DeadLetterDestination |
| identity | The identity to use when dead-lettering events. | EventSubscriptionIdentity |


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


### QueueInfo

| Name | Description | Value |
|-|-|-|
| deadLetterDestinationWithResourceIdentity | The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.Uses the managed identity setup on the parent resource (namely, topic) to acquire the authentication tokens being used during delivery / dead-lettering. | DeadLetterWithResourceIdentity |
| eventTimeToLive | Time span duration in ISO 8601 format that determines how long messages are available to the subscription from the time the message was published.This duration value is expressed using the following format: 'P(n)Y(n)M(n)DT(n)H(n)M(n)S', where:- (n) is replaced by the value of each time element that follows the (n).- P is the duration (or Period) designator and is always placed at the beginning of the duration.- Y is the year designator, and it follows the value for the number of years.- M is the month designator, and it follows the value for the number of months.- W is the week designator, and it follows the value for the number of weeks.- D is the day designator, and it follows the value for the number of days.- T is the time designator, and it precedes the time components.- H is the hour designator, and it follows the value for the number of hours.- M is the minute designator, and it follows the value for the number of minutes.- S is the second designator, and it follows the value for the number of seconds.This duration value cannot be set greater than the topicâs EventRetentionInDays. It is is an optional field where its minimum value is 1 minute, and its maximum is determinedby topicâs EventRetentionInDays value. The followings are examples of valid values:- 'P0DT23H12M' or 'PT23H12M': for duration of 23 hours and 12 minutes.- 'P1D' or 'P1DT0H0M0S': for duration of 1 day. | string |
| maxDeliveryCount | The maximum delivery count of the events. | int |
| receiveLockDurationInSeconds | Maximum period in seconds in which once the message is in received (by the client) state and waiting to be accepted, released or rejected.If this time elapsed after a message has been received by the client and not transitioned into accepted (not processed), released or rejected,the message is available for redelivery. This is an optional field, where default is 60 seconds, minimum is 60 seconds and maximum is 300 seconds. | int |


### FiltersConfiguration

| Name | Description | Value |
|-|-|-|
| filters | An array of filters that are used for filtering event subscriptions. | Filter[] |
| includedEventTypes | A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null. | string[] |


### Filter

| Name | Description | Value |
|-|-|-|
| key | The field/property in the event based on which you want to filter. | string |
| operatorType | Set the object type | BoolEqualsIsNotNullIsNullOrUndefinedNumberGreaterThanNumberGreaterThanOrEqualsNumberInNumberInRangeNumberLessThanNumberLessThanOrEqualsNumberNotInNumberNotInRangeStringBeginsWithStringContainsStringEndsWithStringInStringNotBeginsWithStringNotContainsStringNotEndsWithStringNotIn(required) |


### BoolEqualsFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'BoolEquals' (required) |
| value | The boolean filter value. | bool |


### IsNotNullFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'IsNotNull' (required) |


### IsNullOrUndefinedFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'IsNullOrUndefined' (required) |


### NumberGreaterThanFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberGreaterThan' (required) |
| value | The filter value. | int |


### NumberGreaterThanOrEqualsFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberGreaterThanOrEquals' (required) |
| value | The filter value. | int |


### NumberInFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberIn' (required) |
| values | The set of filter values. | int[] |


### NumberInRangeFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberInRange' (required) |
| values | The set of filter values. | int[][] |


### NumberLessThanFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberLessThan' (required) |
| value | The filter value. | int |


### NumberLessThanOrEqualsFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberLessThanOrEquals' (required) |
| value | The filter value. | int |


### NumberNotInFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberNotIn' (required) |
| values | The set of filter values. | int[] |


### NumberNotInRangeFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'NumberNotInRange' (required) |
| values | The set of filter values. | int[][] |


### StringBeginsWithFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringBeginsWith' (required) |
| values | The set of filter values. | string[] |


### StringContainsFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringContains' (required) |
| values | The set of filter values. | string[] |


### StringEndsWithFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringEndsWith' (required) |
| values | The set of filter values. | string[] |


### StringInFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringIn' (required) |
| values | The set of filter values. | string[] |


### StringNotBeginsWithFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringNotBeginsWith' (required) |
| values | The set of filter values. | string[] |


### StringNotContainsFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringNotContains' (required) |
| values | The set of filter values. | string[] |


### StringNotEndsWithFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringNotEndsWith' (required) |
| values | The set of filter values. | string[] |


### StringNotInFilter

| Name | Description | Value |
|-|-|-|
| operatorType | The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others. | 'StringNotIn' (required) |
| values | The set of filter values. | string[] |
## Microsoft.EventGrid/namespaces/topicSpaces@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/namespaces/topicSpaces@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      topicTemplates = [
        "string"
      ]
    }
  })
}

```

### namespaces/topicSpaces

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties | The properties of topic space. | TopicSpaceProperties |


### TopicSpaceProperties

| Name | Description | Value |
|-|-|-|
| description | Description for the Topic Space resource. | string |
| topicTemplates | The topic filters in the topic space.Example: "topicTemplates": ["devices/foo/bar","devices/topic1/+","devices/${principal.name}/${principal.attributes.keyName}" ]. | string[] |
## Microsoft.EventGrid/partnerConfigurations@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerConfigurations@2023-12-15-preview"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      partnerAuthorization = {
        authorizedPartnersList = [
          {
            authorizationExpirationTimeInUtc = "string"
            partnerName = "string"
            partnerRegistrationImmutableId = "string"
          }
        ]
        defaultMaximumExpirationTimeInDays = int
      }
      provisioningState = "string"
    }
  })
}

```

### partnerConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| location | Location of the resource. | string |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the partner configuration. | PartnerConfigurationProperties |


### PartnerConfigurationProperties

| Name | Description | Value |
|-|-|-|
| partnerAuthorization | The details of authorized partners. | PartnerAuthorization |
| provisioningState | Provisioning state of the partner configuration. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PartnerAuthorization

| Name | Description | Value |
|-|-|-|
| authorizedPartnersList | The list of authorized partners. | Partner[] |
| defaultMaximumExpirationTimeInDays | Time used to validate the authorization expiration time for each authorized partner. If DefaultMaximumExpirationTimeInDays isnot specified, the default is 7 days. Otherwise, allowed values are between 1 and 365 days. | int |


### Partner

| Name | Description | Value |
|-|-|-|
| authorizationExpirationTimeInUtc | Expiration time of the partner authorization. If this timer expires, any request from this partner to create, update or delete resources in subscriber'scontext will fail. If specified, the allowed values are between 1 to the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration.If not specified, the default value will be the value of defaultMaximumExpirationTimeInDays specified in PartnerConfiguration or 7 if this value is not specified. | string |
| partnerName | The partner name. | string |
| partnerRegistrationImmutableId | The immutableId of the corresponding partner registration. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
## Microsoft.EventGrid/partnerDestinations@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerDestinations@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      activationState = "string"
      endpointBaseUrl = "string"
      endpointServiceContext = "string"
      expirationTimeIfNotActivatedUtc = "string"
      messageForActivation = "string"
      partnerRegistrationImmutableId = "string"
    }
  })
}

```

### partnerDestinations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the Partner Destination. | PartnerDestinationProperties |


### PartnerDestinationProperties

| Name | Description | Value |
|-|-|-|
| activationState | Activation state of the partner destination. | 'Activated''NeverActivated' |
| endpointBaseUrl | Endpoint Base URL of the partner destination | string |
| endpointServiceContext | Endpoint context associated with this partner destination. | string |
| expirationTimeIfNotActivatedUtc | Expiration time of the partner destination. If this timer expires and the partner destination was never activated,the partner destination and corresponding channel are deleted. | string |
| messageForActivation | Context or helpful message that can be used during the approval process. | string |
| partnerRegistrationImmutableId | The immutable Id of the corresponding partner registration. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
## Microsoft.EventGrid/partnerNamespaces@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerNamespaces@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      disableLocalAuth = bool
      inboundIpRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      minimumTlsVersionAllowed = "string"
      partnerRegistrationFullyQualifiedId = "string"
      partnerTopicRoutingMode = "string"
      publicNetworkAccess = "string"
    }
  })
}

```

### partnerNamespaces

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the Partner Namespace. | PartnerNamespaceProperties |


### PartnerNamespaceProperties

| Name | Description | Value |
|-|-|-|
| disableLocalAuth | This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the partner namespace. | bool |
| inboundIpRules | This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled. | InboundIpRule[] |
| minimumTlsVersionAllowed | Minimum TLS version of the publisher allowed to publish to this partner namespace | '1.0''1.1''1.2' |
| partnerRegistrationFullyQualifiedId | The fully qualified ARM Id of the partner registration that should be associated with this partner namespace. This takes the following format:/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}. | string |
| partnerTopicRoutingMode | This determines if events published to this partner namespace should use the source attribute in the event payloador use the channel name in the header when matching to the partner topic. If none is specified, source attribute routing will be used to match the partner topic. | 'ChannelNameHeader''SourceEventAttribute' |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled.You can further restrict to specific IPs by configuring {seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.PartnerNamespaceProperties.InboundIpRules" /} | 'Disabled''Enabled''SecuredByPerimeter' |


### InboundIpRule

| Name | Description | Value |
|-|-|-|
| action | Action to perform based on the match or no match of the IpMask. | 'Allow' |
| ipMask | IP Address in CIDR notation e.g., 10.0.0.0/8. | string |
## Microsoft.EventGrid/partnerNamespaces/channels@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerNamespaces/channels@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      channelType = "string"
      expirationTimeIfNotActivatedUtc = "string"
      messageForActivation = "string"
      partnerDestinationInfo = {
        azureSubscriptionId = "string"
        endpointServiceContext = "string"
        name = "string"
        resourceGroupName = "string"
        resourceMoveChangeHistory = [
          {
            azureSubscriptionId = "string"
            changedTimeUtc = "string"
            resourceGroupName = "string"
          }
        ]
        endpointType = "string"
        // For remaining properties, see PartnerDestinationInfo objects
      }
      partnerTopicInfo = {
        azureSubscriptionId = "string"
        eventTypeInfo = {
          inlineEventTypes = {
            {customized property} = {
              dataSchemaUrl = "string"
              description = "string"
              displayName = "string"
              documentationUrl = "string"
            }
          }
          kind = "Inline"
        }
        name = "string"
        resourceGroupName = "string"
        source = "string"
      }
      provisioningState = "string"
      readinessState = "string"
    }
  })
}

```

### partnerNamespaces/channels

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:partnerNamespaces |
| properties | Properties of the Channel. | ChannelProperties |


### ChannelProperties

| Name | Description | Value |
|-|-|-|
| channelType | The type of the event channel which represents the direction flow of events. | 'PartnerDestination''PartnerTopic' |
| expirationTimeIfNotActivatedUtc | Expiration time of the channel. If this timer expires while the corresponding partner topic is never activated,the channel and corresponding partner topic are deleted. | string |
| messageForActivation | Context or helpful message that can be used during the approval process by the subscriber. | string |
| partnerDestinationInfo | This property should be populated when channelType is PartnerDestination and represents information about the partner destination resource corresponding to the channel. | PartnerDestinationInfo |
| partnerTopicInfo | This property should be populated when channelType is PartnerTopic and represents information about the partner topic resource corresponding to the channel. | PartnerTopicInfo |
| provisioningState | Provisioning state of the channel. | 'Canceled''Creating''Deleting''Failed''IdleDueToMirroredPartnerDestinationDeletion''IdleDueToMirroredPartnerTopicDeletion''Succeeded''Updating' |
| readinessState | The readiness state of the corresponding partner topic. | 'Activated''NeverActivated' |


### PartnerDestinationInfo

| Name | Description | Value |
|-|-|-|
| azureSubscriptionId | Azure subscription ID of the subscriber. The partner destination associated with the channel will becreated under this Azure subscription. | string |
| endpointServiceContext | Additional context of the partner destination endpoint. | string |
| name | Name of the partner destination associated with the channel. | string |
| resourceGroupName | Azure Resource Group of the subscriber. The partner destination associated with the channel will becreated under this resource group. | string |
| resourceMoveChangeHistory | Change history of the resource move. | ResourceMoveChangeHistory[] |
| endpointType | Set the object type | WebHook(required) |


### ResourceMoveChangeHistory

| Name | Description | Value |
|-|-|-|
| azureSubscriptionId | Azure subscription ID of the resource. | string |
| changedTimeUtc | UTC timestamp of when the resource was changed. | string |
| resourceGroupName | Azure Resource Group of the resource. | string |


### WebhookPartnerDestinationInfo

| Name | Description | Value |
|-|-|-|
| endpointType | Type of the endpoint for the partner destination | 'WebHook' (required) |
| properties | WebHook Properties of the partner destination. | WebhookPartnerDestinationProperties |


### WebhookPartnerDestinationProperties

| Name | Description | Value |
|-|-|-|
| clientAuthentication | Partner client authentication | PartnerClientAuthentication |
| endpointBaseUrl | The base URL that represents the endpoint of the partner destination. | string |
| endpointUrl | The URL that represents the endpoint of the partner destination. | string |


### PartnerClientAuthentication

| Name | Description | Value |
|-|-|-|
| clientAuthenticationType | Set the object type | AzureAD(required) |


### AzureADPartnerClientAuthentication

| Name | Description | Value |
|-|-|-|
| clientAuthenticationType | Type of client authentication | 'AzureAD' (required) |
| properties | AzureAD ClientAuthentication Properties | AzureADPartnerClientAuthenticationProperties |


### AzureADPartnerClientAuthenticationProperties

| Name | Description | Value |
|-|-|-|
| azureActiveDirectoryApplicationIdOrUri | The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests. | string |
| azureActiveDirectoryTenantId | The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests. | string |


### PartnerTopicInfo

| Name | Description | Value |
|-|-|-|
| azureSubscriptionId | Azure subscription ID of the subscriber. The partner topic associated with the channel will becreated under this Azure subscription. | string |
| eventTypeInfo | Event Type Information for the partner topic. This information is provided by the publisher and can be used by thesubscriber to view different types of events that are published. | EventTypeInfo |
| name | Name of the partner topic associated with the channel. | string |
| resourceGroupName | Azure Resource Group of the subscriber. The partner topic associated with the channel will becreated under this resource group. | string |
| source | The source information is provided by the publisher to determine the scope or context from which the eventsare originating. This information can be used by the subscriber during the approval process of thecreated partner topic. | string |


### EventTypeInfo

| Name | Description | Value |
|-|-|-|
| inlineEventTypes | A collection of inline event types for the resource. The inline event type keys are of type string which represents the name of the event.An example of a valid inline event name is "Contoso.OrderCreated".The inline event type values are of type InlineEventProperties and will contain additional information for every inline event type. | EventTypeInfoInlineEventTypes |
| kind | The kind of event type used. | 'Inline' |


### EventTypeInfoInlineEventTypes

| Name | Description | Value |
|-|-|-|
| {customized property} |  | InlineEventProperties |


### InlineEventProperties

| Name | Description | Value |
|-|-|-|
| dataSchemaUrl | The dataSchemaUrl for the inline event. | string |
| description | The description for the inline event. | string |
| displayName | The displayName for the inline event. | string |
| documentationUrl | The documentationUrl for the inline event. | string |
## Microsoft.EventGrid/partnerNamespaces/eventChannels@2021-10-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerNamespaces/eventChannels@2021-10-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      destination = {
        azureSubscriptionId = "string"
        partnerTopicName = "string"
        resourceGroup = "string"
      }
      expirationTimeIfNotActivatedUtc = "string"
      filter = {
        advancedFilters = [
          {
            key = "string"
            operatorType = "string"
            // For remaining properties, see AdvancedFilter objects
          }
        ]
        enableAdvancedFilteringOnArrays = bool
      }
      partnerTopicFriendlyDescription = "string"
      source = {
        source = "string"
      }
    }
  })
}

```

### partnerNamespaces/eventChannels

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:partnerNamespaces |
| properties | Properties of the EventChannel. | EventChannelProperties |


### EventChannelProperties

| Name | Description | Value |
|-|-|-|
| destination | Represents the destination of an event channel. | EventChannelDestination |
| expirationTimeIfNotActivatedUtc | Expiration time of the event channel. If this timer expires while the corresponding partner topic is never activated,the event channel and corresponding partner topic are deleted. | string |
| filter | Information about the filter for the event channel. | EventChannelFilter |
| partnerTopicFriendlyDescription | Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer. | string |
| source | Source of the event channel. This represents a unique resource in the partner's resource model. | EventChannelSource |


### EventChannelDestination

| Name | Description | Value |
|-|-|-|
| azureSubscriptionId | Azure subscription ID of the customer creating the event channel. The partner topicassociated with the event channel will be created under this Azure subscription. | string |
| partnerTopicName | Name of the partner topic associated with the event channel. | string |
| resourceGroup | Azure Resource Group of the customer creating the event channel. The partner topicassociated with the event channel will be created under this resource group. | string |


### EventChannelFilter

| Name | Description | Value |
|-|-|-|
| advancedFilters | An array of advanced filters that are used for filtering event channels. | AdvancedFilter[] |
| enableAdvancedFilteringOnArrays | Allows advanced filters to be evaluated against an array of values instead of expecting a singular value. The default value is either false or null. | bool |


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


### EventChannelSource

| Name | Description | Value |
|-|-|-|
| source | The identifier of the resource that's the source of the events.This represents a unique resource in the partner's resource model. | string |
## Microsoft.EventGrid/partnerNamespaces/privateEndpointConnections@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerNamespaces/privateEndpointConnections@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

### partnerNamespaces/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:partnerNamespaces |
| properties | Properties of the PrivateEndpointConnection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | GroupIds from the private link service resource. | string[] |
| privateEndpoint | The Private Endpoint resource for this Connection. | PrivateEndpoint |
| privateLinkServiceConnectionState | Details about the state of the connection. | ConnectionState |
| provisioningState | Provisioning state of the Private Endpoint Connection. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The ARM identifier for Private Endpoint. | string |


### ConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required (if any). | string |
| description | Description of the connection state. | string |
| status | Status of the connection. | 'Approved''Disconnected''Pending''Rejected' |
## Microsoft.EventGrid/partnerRegistrations@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerRegistrations@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      partnerRegistrationImmutableId = "string"
    }
  })
}

```

### partnerRegistrations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the partner registration. | PartnerRegistrationProperties |


### PartnerRegistrationProperties

| Name | Description | Value |
|-|-|-|
| partnerRegistrationImmutableId | The immutableId of the corresponding partner registration.Note: This property is marked for deprecation and is not supported in any future GA API version | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
## Microsoft.EventGrid/partnerTopics@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerTopics@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      activationState = "string"
      eventTypeInfo = {
        inlineEventTypes = {
          {customized property} = {
            dataSchemaUrl = "string"
            description = "string"
            displayName = "string"
            documentationUrl = "string"
          }
        }
        kind = "Inline"
      }
      expirationTimeIfNotActivatedUtc = "string"
      messageForActivation = "string"
      partnerRegistrationImmutableId = "string"
      partnerTopicFriendlyDescription = "string"
      source = "string"
    }
  })
}

```

### partnerTopics

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity information for the Partner Topic resource. | IdentityInfo |
| properties | Properties of the Partner Topic. | PartnerTopicProperties |


### IdentityInfo

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.This property is currently not used and reserved for future usage. | IdentityInfoUserAssignedIdentities |


### IdentityInfoUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserIdentityProperties |


### UserIdentityProperties

| Name | Description | Value |
|-|-|-|
| clientId | The client id of user assigned identity. | string |
| principalId | The principal id of user assigned identity. | string |


### PartnerTopicProperties

| Name | Description | Value |
|-|-|-|
| activationState | Activation state of the partner topic. | 'Activated''Deactivated''NeverActivated' |
| eventTypeInfo | Event Type information from the corresponding event channel. | EventTypeInfo |
| expirationTimeIfNotActivatedUtc | Expiration time of the partner topic. If this timer expires while the partner topic is still never activated,the partner topic and corresponding event channel are deleted. | string |
| messageForActivation | Context or helpful message that can be used during the approval process by the subscriber. | string |
| partnerRegistrationImmutableId | The immutableId of the corresponding partner registration. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| partnerTopicFriendlyDescription | Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer. | string |
| source | Source associated with this partner topic. This represents a unique partner resource. | string |


### EventTypeInfo

| Name | Description | Value |
|-|-|-|
| inlineEventTypes | A collection of inline event types for the resource. The inline event type keys are of type string which represents the name of the event.An example of a valid inline event name is "Contoso.OrderCreated".The inline event type values are of type InlineEventProperties and will contain additional information for every inline event type. | EventTypeInfoInlineEventTypes |
| kind | The kind of event type used. | 'Inline' |


### EventTypeInfoInlineEventTypes

| Name | Description | Value |
|-|-|-|
| {customized property} |  | InlineEventProperties |


### InlineEventProperties

| Name | Description | Value |
|-|-|-|
| dataSchemaUrl | The dataSchemaUrl for the inline event. | string |
| description | The description for the inline event. | string |
| displayName | The displayName for the inline event. | string |
| documentationUrl | The documentationUrl for the inline event. | string |
## Microsoft.EventGrid/partnerTopics/eventSubscriptions@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerTopics/eventSubscriptions@2023-12-15-preview"
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

### partnerTopics/eventSubscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: partnerTopics |
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
## Microsoft.EventGrid/systemTopics@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/systemTopics@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      source = "string"
      topicType = "string"
    }
  })
}

```

### systemTopics

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity information for the resource. | IdentityInfo |
| properties | Properties of the system topic. | SystemTopicProperties |


### IdentityInfo

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.This property is currently not used and reserved for future usage. | IdentityInfoUserAssignedIdentities |


### IdentityInfoUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserIdentityProperties |


### UserIdentityProperties

| Name | Description | Value |
|-|-|-|
| clientId | The client id of user assigned identity. | string |
| principalId | The principal id of user assigned identity. | string |


### SystemTopicProperties

| Name | Description | Value |
|-|-|-|
| source | Source for the system topic. | string |
| topicType | TopicType for the system topic. | string |
## Microsoft.EventGrid/systemTopics/eventSubscriptions@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/systemTopics/eventSubscriptions@2023-12-15-preview"
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

### systemTopics/eventSubscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:systemTopics |
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
## Microsoft.EventGrid/topics@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/topics@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      dataResidencyBoundary = "string"
      disableLocalAuth = bool
      eventTypeInfo = {
        inlineEventTypes = {
          {customized property} = {
            dataSchemaUrl = "string"
            description = "string"
            displayName = "string"
            documentationUrl = "string"
          }
        }
        kind = "Inline"
      }
      inboundIpRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      inputSchema = "string"
      inputSchemaMapping = {
        inputSchemaMappingType = "string"
        // For remaining properties, see InputSchemaMapping objects
      }
      minimumTlsVersionAllowed = "string"
      publicNetworkAccess = "string"
    }
    sku = {
      name = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### topics

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-50Valid characters:Alphanumerics and hyphens. |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | The Sku pricing tier for the topic. | ResourceSku |
| kind | Kind of the resource. | 'Azure''AzureArc' |
| extendedLocation | Extended location of the resource. | ExtendedLocation |
| identity | Identity information for the resource. | IdentityInfo |
| properties | Properties of the topic. | TopicProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | Fully qualified name of the extended location. | string |
| type | Type of the extended location. | string |


### IdentityInfo

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.This property is currently not used and reserved for future usage. | IdentityInfoUserAssignedIdentities |


### IdentityInfoUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserIdentityProperties |


### UserIdentityProperties

| Name | Description | Value |
|-|-|-|
| clientId | The client id of user assigned identity. | string |
| principalId | The principal id of user assigned identity. | string |


### TopicProperties

| Name | Description | Value |
|-|-|-|
| dataResidencyBoundary | Data Residency Boundary of the resource. | 'WithinGeopair''WithinRegion' |
| disableLocalAuth | This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the topic. | bool |
| eventTypeInfo | Event Type Information for the user topic. This information is provided by the publisher and can be used by thesubscriber to view different types of events that are published. | EventTypeInfo |
| inboundIpRules | This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled. | InboundIpRule[] |
| inputSchema | This determines the format that Event Grid should expect for incoming events published to the topic. | 'CloudEventSchemaV1_0''CustomEventSchema''EventGridSchema' |
| inputSchemaMapping | This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema. | InputSchemaMapping |
| minimumTlsVersionAllowed | Minimum TLS version of the publisher allowed to publish to this topic | '1.0''1.1''1.2' |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled.You can further restrict to specific IPs by configuring {seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" /} | 'Disabled''Enabled''SecuredByPerimeter' |


### EventTypeInfo

| Name | Description | Value |
|-|-|-|
| inlineEventTypes | A collection of inline event types for the resource. The inline event type keys are of type string which represents the name of the event.An example of a valid inline event name is "Contoso.OrderCreated".The inline event type values are of type InlineEventProperties and will contain additional information for every inline event type. | EventTypeInfoInlineEventTypes |
| kind | The kind of event type used. | 'Inline' |


### EventTypeInfoInlineEventTypes

| Name | Description | Value |
|-|-|-|
| {customized property} |  | InlineEventProperties |


### InlineEventProperties

| Name | Description | Value |
|-|-|-|
| dataSchemaUrl | The dataSchemaUrl for the inline event. | string |
| description | The description for the inline event. | string |
| displayName | The displayName for the inline event. | string |
| documentationUrl | The documentationUrl for the inline event. | string |


### InboundIpRule

| Name | Description | Value |
|-|-|-|
| action | Action to perform based on the match or no match of the IpMask. | 'Allow' |
| ipMask | IP Address in CIDR notation e.g., 10.0.0.0/8. | string |


### InputSchemaMapping

| Name | Description | Value |
|-|-|-|
| inputSchemaMappingType | Set the object type | Json(required) |


### JsonInputSchemaMapping

| Name | Description | Value |
|-|-|-|
| inputSchemaMappingType | Type of the custom mapping | 'Json' (required) |
| properties | JSON Properties of the input schema mapping | JsonInputSchemaMappingProperties |


### JsonInputSchemaMappingProperties

| Name | Description | Value |
|-|-|-|
| dataVersion | The mapping information for the DataVersion property of the Event Grid Event. | JsonFieldWithDefault |
| eventTime | The mapping information for the EventTime property of the Event Grid Event. | JsonField |
| eventType | The mapping information for the EventType property of the Event Grid Event. | JsonFieldWithDefault |
| id | The mapping information for the Id property of the Event Grid Event. | JsonField |
| subject | The mapping information for the Subject property of the Event Grid Event. | JsonFieldWithDefault |
| topic | The mapping information for the Topic property of the Event Grid Event. | JsonField |


### JsonFieldWithDefault

| Name | Description | Value |
|-|-|-|
| defaultValue | The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload. | string |
| sourceField | Name of a field in the input event schema that's to be used as the source of a mapping. | string |


### JsonField

| Name | Description | Value |
|-|-|-|
| sourceField | Name of a field in the input event schema that's to be used as the source of a mapping. | string |


### ResourceSku

| Name | Description | Value |
|-|-|-|
| name | The Sku name of the resource. The possible values are: Basic or Premium. | 'Basic''Premium' |
## Microsoft.EventGrid/topics/eventSubscriptions@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/topics/eventSubscriptions@2023-12-15-preview"
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

### topics/eventSubscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:topics |
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
## Microsoft.EventGrid/topics/privateEndpointConnections@2023-12-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/topics/privateEndpointConnections@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

### topics/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:topics |
| properties | Properties of the PrivateEndpointConnection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | GroupIds from the private link service resource. | string[] |
| privateEndpoint | The Private Endpoint resource for this Connection. | PrivateEndpoint |
| privateLinkServiceConnectionState | Details about the state of the connection. | ConnectionState |
| provisioningState | Provisioning state of the Private Endpoint Connection. | 'Canceled''Creating''Deleting''Failed''Succeeded''Updating' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The ARM identifier for Private Endpoint. | string |


### ConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required (if any). | string |
| description | Description of the connection state. | string |
| status | Status of the connection. | 'Approved''Disconnected''Pending''Rejected' |
