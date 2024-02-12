import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersIpv6FirewallrulesProps extends IAzAPIBaseProps {

}

/**
 * SqlServersIpv6Firewallrules resource
 */
export class SqlServersIpv6Firewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersIpv6FirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/ipv6FirewallRules@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersIpv6FirewallrulesProps): string {
    return JSON.stringify(
        {properties: {endIPv6Address: "string", startIPv6Address: "string"}}
    );
  }
}
