import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * EventgridNamespacesPrivateendpointconnections resource
 */
export class EventgridNamespacesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridNamespacesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/namespaces/privateEndpointConnections@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridNamespacesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
