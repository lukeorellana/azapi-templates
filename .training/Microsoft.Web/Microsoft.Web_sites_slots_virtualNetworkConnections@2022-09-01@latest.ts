import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesSlotsVirtualnetworkconnectionsProps extends IAzAPIBaseProps {

}

/**
 * WebSitesSlotsVirtualnetworkconnections resource
 */
export class WebSitesSlotsVirtualnetworkconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesSlotsVirtualnetworkconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/slots/virtualNetworkConnections@2022-09-01";
  }

  protected getResourceBody(props: WebSitesSlotsVirtualnetworkconnectionsProps): string {
    return JSON.stringify(
        {properties: {certBlob: "string", dnsServers: "string", isSwift: "${bool}", vnetResourceId: "string"}, kind: "string"}
    );
  }
}
