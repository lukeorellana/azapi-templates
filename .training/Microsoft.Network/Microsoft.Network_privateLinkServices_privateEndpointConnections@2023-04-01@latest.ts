import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkPrivatelinkservicesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * NetworkPrivatelinkservicesPrivateendpointconnections resource
 */
export class NetworkPrivatelinkservicesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkPrivatelinkservicesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/privateLinkServices/privateEndpointConnections@2023-04-01";
  }

  protected getResourceBody(props: NetworkPrivatelinkservicesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
