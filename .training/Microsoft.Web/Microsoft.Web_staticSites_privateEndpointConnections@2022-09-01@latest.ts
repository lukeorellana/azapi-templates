import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * WebStaticsitesPrivateendpointconnections resource
 */
export class WebStaticsitesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites/privateEndpointConnections@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}, kind: "string"}
    );
  }
}
