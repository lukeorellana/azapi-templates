import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakeanalyticsAccountsFirewallrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
   */
readonly endIpAddress: string;

/**
   * The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol.
   */
readonly startIpAddress: string;
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
