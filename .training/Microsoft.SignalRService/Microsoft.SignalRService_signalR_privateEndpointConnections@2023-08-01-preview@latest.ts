import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceSignalrPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * SignalrserviceSignalrPrivateendpointconnections resource
 */
export class SignalrserviceSignalrPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceSignalrPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/signalR/privateEndpointConnections@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceSignalrPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
