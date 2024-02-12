import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StreamanalyticsClustersPrivateendpointsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

/**
   * A list of connections to the remote resource. Immutable after it is set.
   */
readonly manualPrivateLinkServiceConnections?: PrivateLinkServiceConnection[];

/**
   * The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to. Required on PUT (CreateOrUpdate) requests.
   */
readonly groupIds?: string[];

/**
   * A collection of read-only information about the state of the connection to the private remote resource.
   */
readonly privateLinkServiceConnectionState?: PrivateLinkConnectionState;

/**
   * The resource id of the private link service. Required on PUT (CreateOrUpdate) requests.
   */
readonly privateLinkServiceId?: string;
}

/**
 * StreamanalyticsClustersPrivateendpoints resource
 */
export class StreamanalyticsClustersPrivateendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StreamanalyticsClustersPrivateendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StreamAnalytics/clusters/privateEndpoints@2020-03-01";
  }

  protected getResourceBody(props: StreamanalyticsClustersPrivateendpointsProps): string {
    return JSON.stringify(
        {properties: {manualPrivateLinkServiceConnections: [{properties: {groupIds: ["string"], privateLinkServiceConnectionState: {}, privateLinkServiceId: "string"}}]}}
    );
  }
}
