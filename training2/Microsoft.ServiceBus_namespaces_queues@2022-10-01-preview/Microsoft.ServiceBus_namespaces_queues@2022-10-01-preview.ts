import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesQueuesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * ISO 8061 timeSpan idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes.
   */
readonly autoDeleteOnIdle?: string;

/**
   * A value that indicates whether this queue has dead letter support when a message expires.
   */
readonly deadLetteringOnMessageExpiration?: bool;

/**
   * ISO 8601 default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
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
   * A value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage.
   */
readonly enableExpress?: bool;

/**
   * A value that indicates whether the queue is to be partitioned across multiple message brokers.
   */
readonly enablePartitioning?: bool;

/**
   * Queue/Topic name to forward the Dead Letter message
   */
readonly forwardDeadLetteredMessagesTo?: string;

/**
   * Queue/Topic name to forward the messages
   */
readonly forwardTo?: string;

/**
   * ISO 8601 timespan duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute.
   */
readonly lockDuration?: string;

/**
   * The maximum delivery count. A message is automatically deadlettered after this number of deliveries. default value is 10.
   */
readonly maxDeliveryCount?: number;

/**
   * Maximum size (in KB) of the message payload that can be accepted by the queue. This property is only used in Premium today and default is 1024.
   */
readonly maxMessageSizeInKilobytes?: number;

/**
   * The maximum size of the queue in megabytes, which is the size of memory allocated for the queue. Default is 1024.
   */
readonly maxSizeInMegabytes?: number;

/**
   * A value indicating if this queue requires duplicate detection.
   */
readonly requiresDuplicateDetection?: bool;

/**
   * A value that indicates whether the queue supports the concept of sessions.
   */
readonly requiresSession?: bool;

/**
   * Enumerates the possible values for the status of a messaging entity.
   */
readonly status?: 'Active''Creating''Deleting''Disabled''ReceiveDisabled''Renaming''Restoring''SendDisabled''Unknown';
}

/**
 * ServicebusNamespacesQueues resource
 */
export class ServicebusNamespacesQueues extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesQueuesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces/queues@2022-10-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesQueuesProps): string {
    return JSON.stringify(
        {properties: {autoDeleteOnIdle: "string", deadLetteringOnMessageExpiration: "${bool}", defaultMessageTimeToLive: "string", duplicateDetectionHistoryTimeWindow: "string", enableBatchedOperations: "${bool}", enableExpress: "${bool}", enablePartitioning: "${bool}", forwardDeadLetteredMessagesTo: "string", forwardTo: "string", lockDuration: "string", maxDeliveryCount: "${int}", maxMessageSizeInKilobytes: "${int}", maxSizeInMegabytes: "${int}", requiresDuplicateDetection: "${bool}", requiresSession: "${bool}", status: "string"}}
    );
  }
}
