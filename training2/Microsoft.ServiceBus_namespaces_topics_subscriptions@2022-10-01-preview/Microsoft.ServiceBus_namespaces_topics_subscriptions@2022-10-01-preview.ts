import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesTopicsSubscriptionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:topics;

/**
   * ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
   */
readonly autoDeleteOnIdle?: string;

/**
   * Properties specific to client affine subscriptions.
   */
readonly clientAffineProperties?: SBClientAffineProperties;

/**
   * Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
   */
readonly deadLetteringOnFilterEvaluationExceptions?: bool;

/**
   * Value that indicates whether a subscription has dead letter support when a message expires.
   */
readonly deadLetteringOnMessageExpiration?: bool;

/**
   * ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
   */
readonly defaultMessageTimeToLive?: string;

/**
   * ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
   */
readonly duplicateDetectionHistoryTimeWindow?: string;

/**
   * Value that indicates whether server-side batched operations are enabled.
   */
readonly enableBatchedOperations?: bool;

/**
   * Queue/Topic name to forward the Dead Letter message
   */
readonly forwardDeadLetteredMessagesTo?: string;

/**
   * Queue/Topic name to forward the messages
   */
readonly forwardTo?: string;

/**
   * Value that indicates whether the subscription has an affinity to the client id.
   */
readonly isClientAffine?: bool;

/**
   * ISO 8061 lock duration timespan for the subscription. The default value is 1 minute.
   */
readonly lockDuration?: string;

/**
   * Number of maximum deliveries.
   */
readonly maxDeliveryCount?: number;

/**
   * Value indicating if a subscription supports the concept of sessions.
   */
readonly requiresSession?: bool;

/**
   * Enumerates the possible values for the status of a messaging entity.
   */
readonly status?: 'Active''Creating''Deleting''Disabled''ReceiveDisabled''Renaming''Restoring''SendDisabled''Unknown';

/**
   * Indicates the Client ID of the application that created the client-affine subscription.
   */
readonly clientId?: string;

/**
   * For client-affine subscriptions, this value indicates whether the subscription is durable or not.
   */
readonly isDurable?: bool;

/**
   * For client-affine subscriptions, this value indicates whether the subscription is shared or not.
   */
readonly isShared?: bool;
}

/**
 * ServicebusNamespacesTopicsSubscriptions resource
 */
export class ServicebusNamespacesTopicsSubscriptions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesTopicsSubscriptionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces/topics/subscriptions@2022-10-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesTopicsSubscriptionsProps): string {
    return JSON.stringify(
        {properties: {autoDeleteOnIdle: "string", clientAffineProperties: {clientId: "string", isDurable: "${bool}", isShared: "${bool}"}, deadLetteringOnFilterEvaluationExceptions: "${bool}", deadLetteringOnMessageExpiration: "${bool}", defaultMessageTimeToLive: "string", duplicateDetectionHistoryTimeWindow: "string", enableBatchedOperations: "${bool}", forwardDeadLetteredMessagesTo: "string", forwardTo: "string", isClientAffine: "${bool}", lockDuration: "string", maxDeliveryCount: "${int}", requiresSession: "${bool}", status: "string"}}
    );
  }
}
