import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkwatchersFlowlogsProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkwatchersFlowlogs resource
 */
export class NetworkNetworkwatchersFlowlogs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkwatchersFlowlogsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkWatchers/flowLogs@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkwatchersFlowlogsProps): string {
    return JSON.stringify(
        {properties: {enabled: "${bool}", flowAnalyticsConfiguration: {networkWatcherFlowAnalyticsConfiguration: {enabled: "${bool}", trafficAnalyticsInterval: "${int}", workspaceId: "string", workspaceRegion: "string", workspaceResourceId: "string"}}, format: {type: "JSON", version: "${int}"}, retentionPolicy: {days: "${int}", enabled: "${bool}"}, storageId: "string", targetResourceId: "string"}}
    );
  }
}
