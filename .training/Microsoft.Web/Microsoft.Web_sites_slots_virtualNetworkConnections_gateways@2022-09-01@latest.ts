import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsVirtualnetworkconnectionsGatewaysProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsVirtualnetworkconnectionsGateways resource
 */
export class WebSitesSlotsVirtualnetworkconnectionsGateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsVirtualnetworkconnectionsGatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsVirtualnetworkconnectionsGatewaysProps): string {
    return JSON.stringify(
        {properties: {vnetName: "string", vpnPackageUri: "string"}, kind: "string"}
    );
  }
}
