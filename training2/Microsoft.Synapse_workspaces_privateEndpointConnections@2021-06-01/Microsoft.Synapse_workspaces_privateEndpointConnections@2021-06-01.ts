import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesPrivateendpointconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * The private endpoint which the connection belongs to.
   */
readonly privateEndpoint?: PrivateEndponumber;

/**
   * Connection state of the private endpoint connection.
   */
readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;

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
 * SynapseWorkspacesPrivateendpointconnections resource
 */
export class SynapseWorkspacesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/privateEndpointConnections@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {description: "string", status: "string"}}}
    );
  }
}
