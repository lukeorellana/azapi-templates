import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface NetworkDnsforwardingrulesetsProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | The geo-location where the resource lives | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | properties | Properties of the DNS forwarding ruleset. | DnsForwardingRulesetProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | dnsResolverOutboundEndpoints | The reference to the DNS resolver outbound endpoints that are used to route DNS queries matching the forwarding rules in the ruleset to the target DNS servers. | SubResource[] (required) |

// | Name | Description | Value |
// |-|-|-|
// | id | Resource ID. | string (required) |
