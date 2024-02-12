import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HdinsightClustersPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

/**
   * The private link service connection state.
   */
readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

/**
   * Whether there is further actions.
   */
readonly actionsRequired?: string;

/**
   * The optional description of the status.
   */
readonly description?: string;

/**
   * The concrete private link service connection.
   */
readonly status: 'Approved''Pending''Rejected''Removed';
}

/**
 * HdinsightClustersPrivateendpointconnections resource
 */
export class HdinsightClustersPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HdinsightClustersPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HDInsight/clusters/privateEndpointConnections@2021-06-01";
  }

  protected getResourceBody(props: HdinsightClustersPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
