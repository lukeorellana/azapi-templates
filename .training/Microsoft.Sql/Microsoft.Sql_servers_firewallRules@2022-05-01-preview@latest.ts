import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersFirewallrulesProps extends IAzAPIBaseProps {

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
