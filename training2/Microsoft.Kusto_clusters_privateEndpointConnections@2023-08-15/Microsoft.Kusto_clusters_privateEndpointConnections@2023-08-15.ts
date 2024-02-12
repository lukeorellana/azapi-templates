import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KustoClustersPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:clusters;

/**
   * Connection State of the Private Endpoint Connection.
   */
readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateProperty;

/**
   * The private link service connection description.
   */
readonly description?: string;

/**
   * The private link service connection status.
   */
readonly status?: string;
}

/**
 * KustoClustersPrivateendpointconnections resource
 */
export class KustoClustersPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KustoClustersPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Kusto/clusters/privateEndpointConnections@2023-08-15";
  }

  protected getResourceBody(props: KustoClustersPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
