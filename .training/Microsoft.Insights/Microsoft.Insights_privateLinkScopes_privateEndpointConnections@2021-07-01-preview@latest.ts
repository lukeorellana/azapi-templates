import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface InsightsPrivatelinkscopesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * InsightsPrivatelinkscopesPrivateendpointconnections resource
 */
export class InsightsPrivatelinkscopesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsPrivatelinkscopesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/privateLinkScopes/privateEndpointConnections@2021-07-01-preview";
  }

  protected getResourceBody(props: InsightsPrivatelinkscopesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
