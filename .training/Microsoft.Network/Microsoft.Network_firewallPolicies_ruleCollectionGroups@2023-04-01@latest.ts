import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkFirewallpoliciesRulecollectiongroupsProps extends IAzAPIBaseProps {

}

/**
 * NetworkFirewallpoliciesRulecollectiongroups resource
 */
export class NetworkFirewallpoliciesRulecollectiongroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkFirewallpoliciesRulecollectiongroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/firewallPolicies/ruleCollectionGroups@2023-04-01";
  }

  protected getResourceBody(props: NetworkFirewallpoliciesRulecollectiongroupsProps): string {
    return JSON.stringify(
        {properties: {priority: "${int}", ruleCollections: [{name: "string", priority: "${int}", ruleCollectionType: "string"}]}}
    );
  }
}
