import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RelayNamespacesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * RelayNamespacesPrivateendpointconnections resource
 */
export class RelayNamespacesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RelayNamespacesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Relay/namespaces/privateEndpointConnections@2021-11-01";
  }

  protected getResourceBody(props: RelayNamespacesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
