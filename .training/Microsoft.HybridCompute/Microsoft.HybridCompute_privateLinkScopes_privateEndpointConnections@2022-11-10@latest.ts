import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface HybridcomputePrivatelinkscopesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

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
