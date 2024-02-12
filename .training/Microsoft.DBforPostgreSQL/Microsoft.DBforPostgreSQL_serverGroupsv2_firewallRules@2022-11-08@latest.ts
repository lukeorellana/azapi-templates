import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServergroupsv2FirewallrulesProps extends IAzAPIBaseProps {

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
