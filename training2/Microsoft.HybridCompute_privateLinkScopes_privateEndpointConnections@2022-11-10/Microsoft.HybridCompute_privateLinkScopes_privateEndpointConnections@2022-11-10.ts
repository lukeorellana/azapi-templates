import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridcomputePrivatelinkscopesPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:privateLinkScopes;

/**
   * Private endpoint which the connection belongs to.
   */
readonly privateEndpoint?: PrivateEndponumberProperty;

/**
   * Connection state of the private endpoint connection.
   */
readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;

/**
   * Resource id of the private endpoint.
   */
readonly id?: string;

/**
   * The private link service connection description.
   */
readonly description: string;

/**
   * The private link service connection status.
   */
readonly status: string;
}

/**
 * HybridcomputePrivatelinkscopesPrivateendpointconnections resource
 */
export class HybridcomputePrivatelinkscopesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: HybridcomputePrivatelinkscopesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections@2022-11-10";
  }

  protected getResourceBody(props: HybridcomputePrivatelinkscopesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
