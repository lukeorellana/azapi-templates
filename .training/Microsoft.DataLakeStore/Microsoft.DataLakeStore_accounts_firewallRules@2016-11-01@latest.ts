import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakestoreAccountsFirewallrulesProps extends IAzAPIBaseProps {

}

/**
 * DatalakestoreAccountsFirewallrules resource
 */
export class DatalakestoreAccountsFirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatalakestoreAccountsFirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataLakeStore/accounts/firewallRules@2016-11-01";
  }

  protected getResourceBody(props: DatalakestoreAccountsFirewallrulesProps): string {
    return JSON.stringify(
        {properties: {endIpAddress: "string", startIpAddress: "string"}}
    );
  }
}
