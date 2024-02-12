import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesTopicsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
   */
readonly autoDeleteOnIdle?: string;

/**
   * ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
   */
readonly defaultMessageTimeToLive?: string;

/**
   * ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
   */
readonly duplicateDetectionHistoryTimeWindow?: string;

/**
   * Value that indicates whether server-side batched operations are enabled.
   */
readonly enableBatchedOperations?: bool;

/**
   * Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage.
   */
readonly enableExpress?: bool;

/**
   * Value that indicates whether the topic to be partitioned across multiple message brokers is enabled.
   */
readonly enablePartitioning?: bool;

/**
   * Maximum size (in KB) of the message payload that can be accepted by the topic. This property is only used in Premium today and default is 1024.
   */
readonly maxMessageSizeInKilobytes?: number;

/**
   * Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024.
   */
readonly maxSizeInMegabytes?: number;

/**
   * Value indicating if this topic requires duplicate detection.
   */
readonly requiresDuplicateDetection?: bool;

/**
   * Enumerates the possible values for the status of a messaging entity.
   */
readonly status?: 'Active''Creating''Deleting''Disabled''ReceiveDisabled''Renaming''Restoring''SendDisabled''Unknown';

/**
   * Value that indicates whether the topic supports ordering.
   */
readonly supportOrdering?: bool;
}

/**
 * ServicebusNamespacesTopics resource
 */
export class ServicebusNamespacesTopics extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesTopicsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces/topics@2022-10-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesTopicsProps): string {
    return JSON.stringify(
        {properties: {autoDeleteOnIdle: "string", defaultMessageTimeToLive: "string", duplicateDetectionHistoryTimeWindow: "string", enableBatchedOperations: "${bool}", enableExpress: "${bool}", enablePartitioning: "${bool}", maxMessageSizeInKilobytes: "${int}", maxSizeInMegabytes: "${int}", requiresDuplicateDetection: "${bool}", status: "string", supportOrdering: "${bool}"}}
    );
  }
}
