import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkwatchersFlowlogsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkWatchers;

/**
   * Flag to enable/disable flow logging.
   */
readonly enabled?: bool;

/**
   * Parameters that define the configuration of traffic analytics.
   */
readonly flowAnalyticsConfiguration?: TrafficAnalyticsProperties;

/**
   * Parameters that define the flow log format.
   */
readonly format?: FlowLogFormatParameters;

/**
   * Parameters that define the retention policy for flow log.
   */
readonly retentionPolicy?: RetentionPolicyParameters;

/**
   * ID of the storage account which is used to store the flow log.
   */
readonly storageId: string;

/**
   * ID of network security group to which flow log will be applied.
   */
readonly targetResourceId: string;

/**
   * Parameters that define the configuration of traffic analytics.
   */
readonly networkWatcherFlowAnalyticsConfiguration?: TrafficAnalyticsConfigurationProperties;

/**
   * Flag to enable/disable traffic analytics.
   */
readonly enabled?: bool;

/**
   * The interval in minutes which would decide how frequently TA service should do flow analytics.
   */
readonly trafficAnalyticsInterval?: number;

/**
   * The resource guid of the attached workspace.
   */
readonly workspaceId?: string;

/**
   * The location of the attached workspace.
   */
readonly workspaceRegion?: string;

/**
   * Resource Id of the attached workspace.
   */
readonly workspaceResourceId?: string;

/**
   * The file type of flow log.
   */
readonly type?: 'JSON';

/**
   * The version (revision) of the flow log.
   */
readonly version?: number;

/**
   * Number of days to retain flow log records.
   */
readonly days?: number;

/**
   * Flag to enable/disable retention.
   */
readonly enabled?: bool;
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
