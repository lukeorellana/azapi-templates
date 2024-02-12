import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridDomainsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * EventgridDomainsPrivateendpointconnections resource
 */
export class EventgridDomainsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridDomainsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/domains/privateEndpointConnections@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridDomainsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {groupIds: ["string"], privateEndpoint: {id: "string"}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}, provisioningState: "string"}}
    );
  }
}
