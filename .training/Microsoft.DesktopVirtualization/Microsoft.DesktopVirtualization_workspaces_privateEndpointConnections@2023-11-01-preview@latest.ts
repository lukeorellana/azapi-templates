import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationWorkspacesPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DesktopvirtualizationWorkspacesPrivateendpointconnections resource
 */
export class DesktopvirtualizationWorkspacesPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DesktopvirtualizationWorkspacesPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DesktopVirtualization/workspaces/privateEndpointConnections@2023-11-01-preview";
  }

  protected getResourceBody(props: DesktopvirtualizationWorkspacesPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
