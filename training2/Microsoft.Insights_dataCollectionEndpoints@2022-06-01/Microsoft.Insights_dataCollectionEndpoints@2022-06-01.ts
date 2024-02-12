import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsDatacollectionendpointsProps extends IAzAPIBaseProps {
/**
   * The kind of the resource.
   */
readonly kind?: 'Linux''Windows';

/**
   * Managed service identity of the resource.
   */
readonly identity?: DataCollectionEndponumberResourceIdentity;

/**
   * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
   */
readonly type: 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned';

/**
   * The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.
   */
readonly userAssignedIdentities?: object;

/**
   * The endpoint used by clients to access their configuration.
   */
readonly configurationAccess?: DataCollectionEndponumberConfigurationAccess;

/**
   * Description of the data collection endpoint.
   */
readonly description?: string;

/**
   * The immutable ID of this data collection endpoint resource. This property is READ-ONLY.
   */
readonly immutableId?: string;

/**
   * The endpoint used by clients to ingest logs.
   */
readonly logsIngestion?: DataCollectionEndponumberLogsIngestion;

/**
   * The endpoint used by clients to ingest metrics.
   */
readonly metricsIngestion?: DataCollectionEndponumberMetricsIngestion;

/**
   * Network access control rules for the endpoints.
   */
readonly networkAcls?: DataCollectionEndponumberNetworkAcls;

/**
   * The configuration to set whether network access from public internet to the endpoints are allowed.
   */
readonly publicNetworkAccess?: 'Disabled''Enabled''SecuredByPerimeter';
}

/**
 * InsightsDatacollectionendpoints resource
 */
export class InsightsDatacollectionendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsDatacollectionendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/dataCollectionEndpoints@2022-06-01";
  }

  protected getResourceBody(props: InsightsDatacollectionendpointsProps): string {
    return JSON.stringify(
        {properties: {configurationAccess: {}, description: "string", immutableId: "string", logsIngestion: {}, metricsIngestion: {}, networkAcls: {publicNetworkAccess: "string"}}, kind: "string"}
    );
  }
}
