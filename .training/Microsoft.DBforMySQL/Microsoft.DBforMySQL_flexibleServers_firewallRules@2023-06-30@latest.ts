import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformysqlFlexibleserversFirewallrulesProps extends IAzAPIBaseProps {

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
