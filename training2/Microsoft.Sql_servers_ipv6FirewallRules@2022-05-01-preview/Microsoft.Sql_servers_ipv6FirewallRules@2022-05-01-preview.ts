import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersIpv6FirewallrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * The end IP address of the firewall rule. Must be IPv6 format. Must be greater than or equal to startIpAddress.
   */
readonly endIPv6Address?: string;

/**
   * The start IP address of the firewall rule. Must be IPv6 format.
   */
readonly startIPv6Address?: string;
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
