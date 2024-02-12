import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebServerfarmsVirtualnetworkconnectionsGatewaysProps extends IAzAPIBaseProps {

}

/**
 * WebServerfarmsVirtualnetworkconnectionsGateways resource
 */
export class WebServerfarmsVirtualnetworkconnectionsGateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebServerfarmsVirtualnetworkconnectionsGatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2022-09-01";
  }

  protected getResourceBody(props: WebServerfarmsVirtualnetworkconnectionsGatewaysProps): string {
    return JSON.stringify(
        {properties: {vnetName: "string", vpnPackageUri: "string"}, kind: "string"}
    );
  }
}
