import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlServersFirewallrulesProps extends IAzAPIBaseProps {

}

/**
 * DbformysqlServersFirewallrules resource
 */
export class DbformysqlServersFirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlServersFirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/servers/firewallRules@2017-12-01";
  }

  protected getResourceBody(props: DbformysqlServersFirewallrulesProps): string {
    return JSON.stringify(
        {properties: {endIpAddress: "string", startIpAddress: "string"}}
    );
  }
}
