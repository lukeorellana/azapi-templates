import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkApplicationgatewaysPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * NetworkApplicationgatewaysPrivateendpointconnections resource
 */
export class NetworkApplicationgatewaysPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkApplicationgatewaysPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/applicationGateways/privateEndpointConnections@2023-04-01";
  }

  protected getResourceBody(props: NetworkApplicationgatewaysPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
