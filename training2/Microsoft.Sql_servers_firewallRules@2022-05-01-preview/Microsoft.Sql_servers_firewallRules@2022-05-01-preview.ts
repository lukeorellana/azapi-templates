import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersFirewallrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value '0.0.0.0' for all Azure-internal IP addresses.
   */
readonly endIpAddress?: string;

/**
   * The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' for all Azure-internal IP addresses.
   */
readonly startIpAddress?: string;
}

/**
 * SqlServersFirewallrules resource
 */
export class SqlServersFirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersFirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/firewallRules@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersFirewallrulesProps): string {
    return JSON.stringify(
        {properties: {endIpAddress: "string", startIpAddress: "string"}}
    );
  }
}
