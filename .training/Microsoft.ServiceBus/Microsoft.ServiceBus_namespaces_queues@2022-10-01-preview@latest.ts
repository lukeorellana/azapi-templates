import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesQueuesProps extends IAzAPIBaseProps {

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
