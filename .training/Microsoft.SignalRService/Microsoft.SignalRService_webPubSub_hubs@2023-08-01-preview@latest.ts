import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SignalrserviceWebpubsubHubsProps extends IAzAPIBaseProps {

}

/**
 * SignalrserviceWebpubsubHubs resource
 */
export class SignalrserviceWebpubsubHubs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SignalrserviceWebpubsubHubsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SignalRService/webPubSub/hubs@2023-08-01-preview";
  }

  protected getResourceBody(props: SignalrserviceWebpubsubHubsProps): string {
    return JSON.stringify(
        {properties: {anonymousConnectPolicy: "string", eventHandlers: [{auth: {managedIdentity: {resource: "string"}, type: "string"}, systemEvents: ["string"], urlTemplate: "string", userEventPattern: "string"}], eventListeners: [{endpoint: {type: "string"}, filter: {type: "string"}}]}}
    );
  }
}
