import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkDnsforwardingrulesetsProps extends IAzAPIBaseProps {
/**
   * The reference to the DNS resolver outbound endpoints that are used to route DNS queries matching the forwarding rules in the ruleset to the target DNS servers.
   */
readonly dnsResolverOutboundEndpoints: SubResource[];

/**
   * Resource ID.
   */
readonly id: string;
}

/**
 * NetworkDnsforwardingrulesets resource
 */
export class NetworkDnsforwardingrulesets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnsforwardingrulesetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsForwardingRulesets@2022-07-01";
  }

  protected getResourceBody(props: NetworkDnsforwardingrulesetsProps): string {
    return JSON.stringify(
        {properties: {dnsResolverOutboundEndpoints: [{id: "string"}]}}
    );
  }
}
