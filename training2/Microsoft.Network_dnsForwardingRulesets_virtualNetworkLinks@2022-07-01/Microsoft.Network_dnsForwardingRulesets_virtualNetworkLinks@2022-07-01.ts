import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDnsforwardingrulesetsVirtualnetworklinksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:dnsForwardingRulesets;

/**
   * Metadata attached to the virtual network link.
   */
readonly metadata?: object;

/**
   * The reference to the virtual network. This cannot be changed after creation.
   */
readonly virtualNetwork: SubResource;

/**
   * Resource ID.
   */
readonly id: string;
}

/**
 * NetworkDnsforwardingrulesetsVirtualnetworklinks resource
 */
export class NetworkDnsforwardingrulesetsVirtualnetworklinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnsforwardingrulesetsVirtualnetworklinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks@2022-07-01";
  }

  protected getResourceBody(props: NetworkDnsforwardingrulesetsVirtualnetworklinksProps): string {
    return JSON.stringify(
        {properties: {metadata: {}, virtualNetwork: {id: "string"}}}
    );
  }
}
