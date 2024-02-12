import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakeanalyticsAccountsFirewallrulesProps extends IAzAPIBaseProps {

}

/**
 * DatalakeanalyticsAccountsFirewallrules resource
 */
export class DatalakeanalyticsAccountsFirewallrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatalakeanalyticsAccountsFirewallrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataLakeAnalytics/accounts/firewallRules@2019-11-01-preview";
  }

  protected getResourceBody(props: DatalakeanalyticsAccountsFirewallrulesProps): string {
    return JSON.stringify(
        {properties: {endIpAddress: "string", startIpAddress: "string"}}
    );
  }
}
