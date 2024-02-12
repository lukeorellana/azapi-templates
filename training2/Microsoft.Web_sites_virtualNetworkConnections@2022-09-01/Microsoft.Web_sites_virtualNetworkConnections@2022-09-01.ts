import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebSitesVirtualnetworkconnectionsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sites;

/**
   * A certificate file (.cer) blob containing the public key of the private key used to authenticate aPoint-To-Site VPN connection.
   */
readonly certBlob?: string;

/**
   * DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
   */
readonly dnsServers?: string;

/**
   * Flag that is used to denote if this is VNET injection
   */
readonly isSwift?: bool;

/**
   * The Virtual Network's resource ID.
   */
readonly vnetResourceId?: string;
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
