import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridTopicsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * EventgridTopicsPrivateendpointconnections resource
 */
export class EventgridTopicsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridTopicsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/topics/privateEndpointConnections@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridTopicsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
