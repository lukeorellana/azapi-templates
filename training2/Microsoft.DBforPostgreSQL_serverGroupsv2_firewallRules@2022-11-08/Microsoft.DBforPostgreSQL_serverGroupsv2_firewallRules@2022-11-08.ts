import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServergroupsv2FirewallrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:serverGroupsv2;

/**
   * The end IP address of the cluster firewall rule. Must be IPv4 format.
   */
readonly endIpAddress: string;

/**
   * The start IP address of the cluster firewall rule. Must be IPv4 format.
   */
readonly startIpAddress: string;
}

/**
 * DbforpostgresqlServergroupsv2Firewallrules resource
 */
export class DbforpostgresqlServergroupsv2Firewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServergroupsv2FirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/serverGroupsv2/firewallRules@2022-11-08";
  }

  protected getResourceBody(props: DbforpostgresqlServergroupsv2FirewallrulesProps): string {
    return JSON.stringify(
        {properties: {endIpAddress: "string", startIpAddress: "string"}}
    );
  }
}
