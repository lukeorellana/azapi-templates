import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

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
