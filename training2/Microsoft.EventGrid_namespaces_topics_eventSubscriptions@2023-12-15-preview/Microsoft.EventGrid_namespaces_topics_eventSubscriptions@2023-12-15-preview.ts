import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesTopicsEventsubscriptionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:topics;

/**
   * Information about the delivery configuration of the event subscription.
   */
readonly deliveryConfiguration?: DeliveryConfiguration;

/**
   * The event delivery schema for the event subscription.
   */
readonly eventDeliverySchema?: 'CloudEventSchemaV1_0';

/**
   * Information about the filter for the event subscription.
   */
readonly filtersConfiguration?: FiltersConfiguration;

/**
   * Delivery mode of the event subscription.
   */
readonly deliveryMode?: 'Push''Queue';

/**
   * This property should be populated when deliveryMode is push and represents information about the push subscription.
   */
readonly push?: PushInfo;

/**
   * This property should be populated when deliveryMode is queue and represents information about the queue subscription.
   */
readonly queue?: QueueInfo;

/**
   * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.Uses the managed identity setup on the parent resource (namely, namespace) to acquire the authentication tokens being used during delivery / dead-lettering.
   */
readonly deadLetterDestinationWithResourceIdentity?: DeadLetterWithResourceIdentity;

/**
   * Information about the destination where events have to be delivered for the event subscription.Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
   */
readonly deliveryWithResourceIdentity?: DeliveryWithResourceIdentity;

/**
   * Time span duration in ISO 8601 format that determines how long messages are available to the subscription from the time the message was published.This duration value is expressed using the following format: 'P(n)Y(n)M(n)DT(n)H(n)M(n)S', where:- (n) is replaced by the value of each time element that follows the (n).- P is the duration (or Period) designator and is always placed at the beginning of the duration.- Y is the year designator, and it follows the value for the number of years.- M is the month designator, and it follows the value for the number of months.- W is the week designator, and it follows the value for the number of weeks.- D is the day designator, and it follows the value for the number of days.- T is the time designator, and it precedes the time components.- H is the hour designator, and it follows the value for the number of hours.- M is the minute designator, and it follows the value for the number of minutes.- S is the second designator, and it follows the value for the number of seconds.This duration value cannot be set greater than the topicâs EventRetentionInDays. It is is an optional field where its minimum value is 1 minute, and its maximum is determinedby topicâs EventRetentionInDays value. The followings are examples of valid values:- 'P0DT23H12M' or 'PT23H12M': for duration of 23 hours and 12 minutes.- 'P1D' or 'P1DT0H0M0S': for duration of 1 day.
   */
readonly eventTimeToLive?: string;

/**
   * The maximum delivery count of the events.
   */
readonly maxDeliveryCount?: number;

/**
   * Information about the destination where events have to be delivered for the event subscription.Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
   */
readonly deadLetterDestination?: DeadLetterDestination;

/**
   * The identity to use when dead-lettering events.
   */
readonly identity?: EventSubscriptionIdentity;

/**
   * Set the object type
   */
readonly endpointType: StorageBlob;

/**
   * Type of the endpoint for the dead letter destination
   */
readonly endpointType: 'StorageBlob';

/**
   * The name of the Storage blob container that is the destination of the deadletter events
   */
readonly blobContainerName?: string;

/**
   * The Azure Resource ID of the storage account that is the destination of the deadletter events
   */
readonly resourceId?: string;

/**
   * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity.
   */
readonly type?: 'SystemAssigned''UserAssigned';

/**
   * The user identity associated with the resource.
   */
readonly userAssignedIdentity?: string;

/**
   * Information about the destination where events have to be delivered for the event subscription.Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
   */
readonly destination?: EventSubscriptionDestination;

/**
   * The identity to use when delivering events.
   */
readonly identity?: EventSubscriptionIdentity;

/**
   * Set the object type
   */
readonly endpointType: AzureFunctionEventHubHybridConnectionMonitorAlertNamespaceTopicPartnerDestinationServiceBusQueueServiceBusTopicStorageQueueWebHook;

/**
   * Type of the endpoint for the event subscription destination.
   */
readonly endpointType: 'AzureFunction';

/**
   * Delivery attribute details.
   */
readonly deliveryAttributeMappings?: DeliveryAttributeMapping[];

/**
   * Maximum number of events per batch.
   */
readonly maxEventsPerBatch?: number;

/**
   * Preferred batch size in Kilobytes.
   */
readonly preferredBatchSizeInKilobytes?: number;

/**
   * The Azure Resource Id that represents the endpoint of the Azure Function destination of an event subscription.
   */
readonly resourceId?: string;

/**
   * Set the object type
   */
readonly type: DynamicStatic;

/**
   * Type of the delivery attribute or header name.
   */
readonly type: 'Dynamic';

/**
   * JSON path in the event which contains attribute value.
   */
readonly sourceField?: string;

/**
   * Type of the delivery attribute or header name.
   */
readonly type: 'Static';

/**
   * Boolean flag to tell if the attribute contains sensitive information .
   */
readonly isSecret?: bool;

/**
   * Value of the delivery attribute.
   */
readonly value?: string;

/**
   * Type of the endpoint for the event subscription destination.
   */
readonly endpointType: 'EventHub';

/**
   * Delivery attribute details.
   */
readonly deliveryAttributeMappings?: DeliveryAttributeMapping[];

/**
   * The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription.
   */
readonly resourceId?: string;

/**
   * Type of the endpoint for the event subscription destination.
   */
readonly endpointType: 'HybridConnection';

/**
   * Delivery attribute details.
   */
readonly deliveryAttributeMappings?: DeliveryAttributeMapping[];

/**
   * The Azure Resource ID of an hybrid connection that is the destination of an event subscription.
   */
readonly resourceId?: string;

/**
   * Type of the endpoint for the event subscription destination.
   */
readonly endpointType: 'MonitorAlert';

/**
   * The list of ARM Ids of Action Groups that will be triggered on every Alert fired through this event subscription.Each resource ARM Id should follow this pattern: /subscriptions/{AzureSubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.Insights/actionGroups/{ActionGroupName}.
   */
readonly actionGroups?: string[];

/**
   * The description that will be attached to every Alert fired through this event subscription.
   */
readonly description?: string;

/**
   * The severity that will be attached to every Alert fired through this event subscription.This field must be provided.
   */
readonly severity?: 'Sev0''Sev1''Sev2''Sev3''Sev4';

/**
   * Type of the endpoint for the event subscription destination.
   */
readonly endpointType: 'NamespaceTopic';

/**
   * The Azure resource Id that represents the endpoint of the Event Grid Namespace Topic destination of an event subscription.This field is required and the Namespace Topic resource listed must already exist.The resource ARM Id should follow this pattern: /subscriptions/{AzureSubscriptionId}/resourceGroups/{ResourceGroupName}/providers/Microsoft.EventGrid/namespaces/{NamespaceName}/topics/{TopicName}.
   */
readonly resourceId?: string;

/**
   * Type of the endpoint for the event subscription destination.
   */
readonly endpointType: 'PartnerDestination';

/**
   * The Azure Resource Id that represents the endpoint of a Partner Destination of an event subscription.
   */
readonly resourceId?: string;

/**
   * Type of the endpoint for the event subscription destination.
   */
readonly endpointType: 'ServiceBusQueue';

/**
   * Delivery attribute details.
   */
readonly deliveryAttributeMappings?: DeliveryAttributeMapping[];

/**
   * The Azure Resource Id that represents the endpoint of the Service Bus destination of an event subscription.
   */
readonly resourceId?: string;

/**
   * Type of the endpoint for the event subscription destination.
   */
readonly endpointType: 'ServiceBusTopic';

/**
   * Delivery attribute details.
   */
readonly deliveryAttributeMappings?: DeliveryAttributeMapping[];

/**
   * The Azure Resource Id that represents the endpoint of the Service Bus Topic destination of an event subscription.
   */
readonly resourceId?: string;

/**
   * Type of the endpoint for the event subscription destination.
   */
readonly endpointType: 'StorageQueue';

/**
   * Storage queue message time to live in seconds. This value cannot be zero or negative with the exception of using -1 to indicate that the Time To Live of the message is Infinite.
   */
readonly queueMessageTimeToLiveInSeconds?: number;

/**
   * The name of the Storage queue under a storage account that is the destination of an event subscription.
   */
readonly queueName?: string;

/**
   * The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription.
   */
readonly resourceId?: string;

/**
   * Type of the endpoint for the event subscription destination.
   */
readonly endpointType: 'WebHook';

/**
   * The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests.
   */
readonly azureActiveDirectoryApplicationIdOrUri?: string;

/**
   * The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests.
   */
readonly azureActiveDirectoryTenantId?: string;

/**
   * Delivery attribute details.
   */
readonly deliveryAttributeMappings?: DeliveryAttributeMapping[];

/**
   * The URL that represents the endpoint of the destination of an event subscription.
   */
readonly endpointUrl?: stringConstranumbers:Sensitive value. Pass in as a secure parameter.;

/**
   * Maximum number of events per batch.
   */
readonly maxEventsPerBatch?: number;

/**
   * Minimum TLS version that should be supported by webhook endpoint
   */
readonly minimumTlsVersionAllowed?: '1.0''1.1''1.2';

/**
   * Preferred batch size in Kilobytes.
   */
readonly preferredBatchSizeInKilobytes?: number;

/**
   * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.Uses the managed identity setup on the parent resource (namely, topic) to acquire the authentication tokens being used during delivery / dead-lettering.
   */
readonly deadLetterDestinationWithResourceIdentity?: DeadLetterWithResourceIdentity;

/**
   * Time span duration in ISO 8601 format that determines how long messages are available to the subscription from the time the message was published.This duration value is expressed using the following format: 'P(n)Y(n)M(n)DT(n)H(n)M(n)S', where:- (n) is replaced by the value of each time element that follows the (n).- P is the duration (or Period) designator and is always placed at the beginning of the duration.- Y is the year designator, and it follows the value for the number of years.- M is the month designator, and it follows the value for the number of months.- W is the week designator, and it follows the value for the number of weeks.- D is the day designator, and it follows the value for the number of days.- T is the time designator, and it precedes the time components.- H is the hour designator, and it follows the value for the number of hours.- M is the minute designator, and it follows the value for the number of minutes.- S is the second designator, and it follows the value for the number of seconds.This duration value cannot be set greater than the topicâs EventRetentionInDays. It is is an optional field where its minimum value is 1 minute, and its maximum is determinedby topicâs EventRetentionInDays value. The followings are examples of valid values:- 'P0DT23H12M' or 'PT23H12M': for duration of 23 hours and 12 minutes.- 'P1D' or 'P1DT0H0M0S': for duration of 1 day.
   */
readonly eventTimeToLive?: string;

/**
   * The maximum delivery count of the events.
   */
readonly maxDeliveryCount?: number;

/**
   * Maximum period in seconds in which once the message is in received (by the client) state and waiting to be accepted, released or rejected.If this time elapsed after a message has been received by the client and not transitioned into accepted (not processed), released or rejected,the message is available for redelivery. This is an optional field, where default is 60 seconds, minimum is 60 seconds and maximum is 300 seconds.
   */
readonly receiveLockDurationInSeconds?: number;

/**
   * An array of filters that are used for filtering event subscriptions.
   */
readonly filters?: Filter[];

/**
   * A list of applicable event types that need to be part of the event subscription. If it is desired to subscribe to all default event types, set the IncludedEventTypes to null.
   */
readonly includedEventTypes?: string[];

/**
   * The field/property in the event based on which you want to filter.
   */
readonly key?: string;

/**
   * Set the object type
   */
readonly operatorType: BoolEqualsIsNotNullIsNullOrUndefinedNumberGreaterThanNumberGreaterThanOrEqualsNumberInNumberInRangeNumberLessThanNumberLessThanOrEqualsNumberNotInNumberNotInRangeStringBeginsWithStringContainsStringEndsWithStringInStringNotBeginsWithStringNotContainsStringNotEndsWithStringNotIn;

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'BoolEquals';

/**
   * The boolean filter value.
   */
readonly value?: bool;

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'IsNotNull';

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'IsNullOrUndefined';

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberGreaterThan';

/**
   * The filter value.
   */
readonly value?: number;

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberGreaterThanOrEquals';

/**
   * The filter value.
   */
readonly value?: number;

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberIn';

/**
   * The set of filter values.
   */
readonly values?: number[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberInRange';

/**
   * The set of filter values.
   */
readonly values?: number[][];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberLessThan';

/**
   * The filter value.
   */
readonly value?: number;

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberLessThanOrEquals';

/**
   * The filter value.
   */
readonly value?: number;

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberNotIn';

/**
   * The set of filter values.
   */
readonly values?: number[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'NumberNotInRange';

/**
   * The set of filter values.
   */
readonly values?: number[][];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringBeginsWith';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringContains';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringEndsWith';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringIn';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringNotBeginsWith';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringNotContains';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringNotEndsWith';

/**
   * The set of filter values.
   */
readonly values?: string[];

/**
   * The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
   */
readonly operatorType: 'StringNotIn';

/**
   * The set of filter values.
   */
readonly values?: string[];
}

/**
 * EventgridNamespacesTopicsEventsubscriptions resource
 */
export class EventgridNamespacesTopicsEventsubscriptions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridNamespacesTopicsEventsubscriptionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/namespaces/topics/eventSubscriptions@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridNamespacesTopicsEventsubscriptionsProps): string {
    return JSON.stringify(
        {properties: {deliveryConfiguration: {deliveryMode: "string", push: {deadLetterDestinationWithResourceIdentity: {deadLetterDestination: {endpointType: "string"}, identity: {type: "string", userAssignedIdentity: "string"}}, deliveryWithResourceIdentity: {destination: {endpointType: "string"}, identity: {type: "string", userAssignedIdentity: "string"}}, eventTimeToLive: "string", maxDeliveryCount: "${int}"}, queue: {deadLetterDestinationWithResourceIdentity: {deadLetterDestination: {endpointType: "string"}, identity: {type: "string", userAssignedIdentity: "string"}}, eventTimeToLive: "string", maxDeliveryCount: "${int}", receiveLockDurationInSeconds: "${int}"}}, eventDeliverySchema: "CloudEventSchemaV1_0", filtersConfiguration: {filters: [{key: "string", operatorType: "string"}], includedEventTypes: ["string"]}}}
    );
  }
}
