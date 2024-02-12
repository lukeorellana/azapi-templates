import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceWebpubsubPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * SignalrserviceWebpubsubPrivateendpointconnections resource
 */
export class SignalrserviceWebpubsubPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceWebpubsubPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/webPubSub/privateEndpointConnections@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceWebpubsubPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
