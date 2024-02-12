import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridPartnernamespacesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * EventgridPartnernamespacesPrivateendpointconnections resource
 */
export class EventgridPartnernamespacesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridPartnernamespacesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/partnerNamespaces/privateEndpointConnections@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridPartnernamespacesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
