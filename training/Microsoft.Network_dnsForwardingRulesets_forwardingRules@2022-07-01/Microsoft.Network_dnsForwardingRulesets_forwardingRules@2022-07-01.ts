import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface NetworkDnsforwardingrulesetsForwardingrulesProps extends IAzAPIBaseProps {

}

export class NetworkDnsforwardingrulesetsForwardingrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkDnsforwardingrulesetsForwardingrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/dnsForwardingRulesets/forwardingRules@2022-07-01";
  }

  protected getResourceBody(props: NetworkDnsforwardingrulesetsForwardingrulesProps): string {
    return JSON.stringify(
      {properties: {domainName: "string", forwardingRuleState: "string", metadata: {}, targetDnsServers: [{ipAddress: "string", port: int}]}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:dnsForwardingRulesets |
// | properties | Properties of the forwarding rule. | ForwardingRuleProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | domainName | The domain name for the forwarding rule. | string (required) |
// | forwardingRuleState | The state of forwarding rule. | 'Disabled''Enabled' |
// | metadata | Metadata attached to the forwarding rule. | object |
// | targetDnsServers | DNS servers to forward the DNS query to. | TargetDnsServer[] (required) |

// | Name | Description | Value |
// |-|-|-|
// | ipAddress | DNS server IP address. | string (required) |
// | port | DNS server port. | int |
