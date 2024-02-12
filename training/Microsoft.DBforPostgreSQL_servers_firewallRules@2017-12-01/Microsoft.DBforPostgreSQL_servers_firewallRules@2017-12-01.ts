import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DbforpostgresqlServersFirewallrulesProps extends IAzAPIBaseProps {

}

export class DbforpostgresqlServersFirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServersFirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/servers/firewallRules@2017-12-01";
  }

  protected getResourceBody(props: DbforpostgresqlServersFirewallrulesProps): string {
    return JSON.stringify(
      {properties: {endIpAddress: "string", startIpAddress: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Alphanumerics, hyphens, and underscores. |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
// | properties | The properties of a firewall rule. | FirewallRuleProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | endIpAddress | The end IP address of the server firewall rule. Must be IPv4 format. | string (required) |
// | startIpAddress | The start IP address of the server firewall rule. Must be IPv4 format. | string (required) |
