import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsVirtualnetworkconnectionsGatewaysProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualNetworkConnections;

/**
   * The Virtual Network name.
   */
readonly vnetName?: string;

/**
   * The URI where the VPN package can be downloaded.
   */
readonly vpnPackageUri: string;
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
