import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KubernetesconfigurationPrivatelinkscopesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * KubernetesconfigurationPrivatelinkscopesPrivateendpointconnections resource
 */
export class KubernetesconfigurationPrivatelinkscopesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KubernetesconfigurationPrivatelinkscopesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KubernetesConfiguration/privateLinkScopes/privateEndpointConnections@2022-04-02-preview";
  }

  protected getResourceBody(props: KubernetesconfigurationPrivatelinkscopesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
