import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDnsforwardingrulesetsVirtualnetworklinksProps extends IAzAPIBaseProps {

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
