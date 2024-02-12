import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkPrivatednszonesVirtualnetworklinksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:privateDnsZones;

/**
   * The ETag of the virtual network link.
   */
readonly etag?: string;

/**
   * Is auto-registration of virtual machine records in the virtual network in the Private DNS zone enabled?
   */
readonly registrationEnabled?: bool;

/**
   * The reference of the virtual network.
   */
readonly virtualNetwork?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;
}

/**
 * NetworkPrivatednszonesVirtualnetworklinks resource
 */
export class NetworkPrivatednszonesVirtualnetworklinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkPrivatednszonesVirtualnetworklinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/privateDnsZones/virtualNetworkLinks@2020-06-01";
  }

  protected getResourceBody(props: NetworkPrivatednszonesVirtualnetworklinksProps): string {
    return JSON.stringify(
        {properties: {registrationEnabled: "${bool}", virtualNetwork: {id: "string"}}, etag: "string"}
    );
  }
}
