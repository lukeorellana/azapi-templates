import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbforpostgresqlServersFirewallrulesProps extends IAzAPIBaseProps {

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
