import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServersFirewallrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

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
 * DbforpostgresqlServersFirewallrules resource
 */
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
