import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerserviceManagedclustersPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedClusters;

/**
   * The resource of private endpoint.
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * A collection of information about the state of the connection between service consumer and provider.
   */
readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

/**
   * The resource ID of the private endpoint
   */
readonly id?: string;

/**
   * The private link service connection description.
   */
readonly description?: string;

/**
   * The private link service connection status.
   */
readonly status?: 'Approved''Disconnected''Pending''Rejected';
}

/**
 * ContainerserviceManagedclustersPrivateendpointconnections resource
 */
export class ContainerserviceManagedclustersPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerserviceManagedclustersPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerService/managedClusters/privateEndpointConnections@2023-11-01";
  }

  protected getResourceBody(props: ContainerserviceManagedclustersPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
