import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebServerfarmsVirtualnetworkconnectionsRoutesProps extends IAzAPIBaseProps {

}

/**
 * WebServerfarmsVirtualnetworkconnectionsRoutes resource
 */
export class WebServerfarmsVirtualnetworkconnectionsRoutes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebServerfarmsVirtualnetworkconnectionsRoutesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2022-09-01";
  }

  protected getResourceBody(props: WebServerfarmsVirtualnetworkconnectionsRoutesProps): string {
    return JSON.stringify(
        {properties: {endAddress: "string", routeType: "string", startAddress: "string"}, kind: "string"}
    );
  }
}
