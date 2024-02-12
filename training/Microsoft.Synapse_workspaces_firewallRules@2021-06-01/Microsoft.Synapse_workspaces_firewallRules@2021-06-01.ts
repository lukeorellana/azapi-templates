import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface SynapseWorkspacesFirewallrulesProps extends IAzAPIBaseProps {

}

export class SynapseWorkspacesFirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesFirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/firewallRules@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesFirewallrulesProps): string {
    return JSON.stringify(
      {properties: {endIpAddress: "string", startIpAddress: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
// | properties | IP firewall rule properties | IpFirewallRuleProperties |

// | Name | Description | Value |
// |-|-|-|
// | endIpAddress | The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress | string |
// | startIpAddress | The start IP address of the firewall rule. Must be IPv4 format | string |
