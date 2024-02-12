import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsPrivateendpointconnections resource
 */
export class WebSitesSlotsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/privateEndpointConnections@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}, kind: "string"}
    );
  }
}
