import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlFlexibleserversFirewallrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:flexibleServers;

/**
   * The end IP address of the server firewall rule. Must be IPv4 format.
   */
readonly endIpAddress: string;

/**
   * The start IP address of the server firewall rule. Must be IPv4 format.
   */
readonly startIpAddress: string;
}

/**
 * DbforpostgresqlFlexibleserversFirewallrules resource
 */
export class DbforpostgresqlFlexibleserversFirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlFlexibleserversFirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2023-03-01-preview";
  }

  protected getResourceBody(props: DbforpostgresqlFlexibleserversFirewallrulesProps): string {
    return JSON.stringify(
        {properties: {endIpAddress: "string", startIpAddress: "string"}}
    );
  }
}
