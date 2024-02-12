import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesVirtualnetworkconnectionsProps extends IAzAPIBaseProps {

}

/**
 * WebSitesVirtualnetworkconnections resource
 */
export class WebSitesVirtualnetworkconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebSitesVirtualnetworkconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/sites/virtualNetworkConnections@2022-09-01";
  }

  protected getResourceBody(props: WebSitesVirtualnetworkconnectionsProps): string {
    return JSON.stringify(
        {properties: {certBlob: "string", dnsServers: "string", isSwift: "${bool}", vnetResourceId: "string"}, kind: "string"}
    );
  }
}
