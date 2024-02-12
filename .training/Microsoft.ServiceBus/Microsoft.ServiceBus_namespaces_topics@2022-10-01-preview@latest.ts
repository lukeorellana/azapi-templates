import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesTopicsProps extends IAzAPIBaseProps {

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
