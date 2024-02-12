import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesTopicsSubscriptionsProps extends IAzAPIBaseProps {

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
