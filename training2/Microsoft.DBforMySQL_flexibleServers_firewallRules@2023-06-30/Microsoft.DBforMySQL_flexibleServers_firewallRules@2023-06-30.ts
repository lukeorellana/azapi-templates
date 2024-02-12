import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlFlexibleserversFirewallrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:flexibleServers;

/**
   * The end IP address of the server firewall rule. Must be IPv4 format.
   */
readonly endIpAddress: string Constranumbers:Pattern =^(([0-9];

/**
   * The start IP address of the server firewall rule. Must be IPv4 format.
   */
readonly startIpAddress: string Constranumbers:Pattern =^(([0-9];
}

/**
 * DbformysqlFlexibleserversFirewallrules resource
 */
export class DbformysqlFlexibleserversFirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlFlexibleserversFirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/flexibleServers/firewallRules@2023-06-30";
  }

  protected getResourceBody(props: DbformysqlFlexibleserversFirewallrulesProps): string {
    return JSON.stringify(
        {properties: {endIpAddress: "string", startIpAddress: "string"}}
    );
  }
}
