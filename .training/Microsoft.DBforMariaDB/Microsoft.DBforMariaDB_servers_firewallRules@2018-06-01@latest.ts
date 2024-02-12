import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DbformariadbServersFirewallrulesProps extends IAzAPIBaseProps {

}

/**
 * DbformariadbServersFirewallrules resource
 */
export class DbformariadbServersFirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformariadbServersFirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMariaDB/servers/firewallRules@2018-06-01";
  }

  protected getResourceBody(props: DbformariadbServersFirewallrulesProps): string {
    return JSON.stringify(
        {properties: {endIpAddress: "string", startIpAddress: "string"}}
    );
  }
}
