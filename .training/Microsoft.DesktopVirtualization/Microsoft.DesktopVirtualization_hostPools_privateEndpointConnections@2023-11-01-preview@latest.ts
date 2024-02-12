import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationHostpoolsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DesktopvirtualizationHostpoolsPrivateendpointconnections resource
 */
export class DesktopvirtualizationHostpoolsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DesktopvirtualizationHostpoolsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DesktopVirtualization/hostPools/privateEndpointConnections@2023-11-01-preview";
  }

  protected getResourceBody(props: DesktopvirtualizationHostpoolsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateEndpoint: {}, privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}}
    );
  }
}
