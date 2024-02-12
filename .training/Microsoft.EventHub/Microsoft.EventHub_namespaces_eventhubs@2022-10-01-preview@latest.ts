import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesEventhubsProps extends IAzAPIBaseProps {

}

/**
 * EventhubNamespacesEventhubs resource
 */
export class EventhubNamespacesEventhubs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesEventhubsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces/eventhubs@2022-10-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesEventhubsProps): string {
    return JSON.stringify(
        {properties: {captureDescription: {destination: {name: "string", properties: {archiveNameFormat: "string", blobContainer: "string", dataLakeAccountName: "string", dataLakeFolderPath: "string", dataLakeSubscriptionId: "string", storageAccountResourceId: "string"}}, enabled: "${bool}", encoding: "string", intervalInSeconds: "${int}", sizeLimitInBytes: "${int}", skipEmptyArchives: "${bool}"}, messageRetentionInDays: "${int}", partitionCount: "${int}", retentionDescription: {cleanupPolicy: "string", retentionTimeInHours: "${int}", tombstoneRetentionTimeInHours: "${int}"}, status: "string"}}
    );
  }
}
