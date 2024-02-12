import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkFirewallpoliciesRulecollectiongroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:firewallPolicies;

/**
   * Priority of the Firewall Policy Rule Collection Group resource.
   */
readonly priority?: number;

/**
   * Group of Firewall Policy rule collections.
   */
readonly ruleCollections?: FirewallPolicyRuleCollection[];

/**
   * Priority of the Firewall Policy Rule Collection resource.
   */
readonly priority?: number;

/**
   * Set the object type
   */
readonly ruleCollectionType: FirewallPolicyFilterRuleCollectionFirewallPolicyNatRuleCollection;

/**
   * The type of the rule collection.
   */
readonly ruleCollectionType: 'FirewallPolicyFilterRuleCollection';

/**
   * The action type of a Filter rule collection.
   */
readonly action?: FirewallPolicyFilterRuleCollectionAction;

/**
   * List of rules included in a rule collection.
   */
readonly rules?: FirewallPolicyRule[];

/**
   * The type of action.
   */
readonly type?: 'Allow''Deny';

/**
   * Description of the rule.
   */
readonly description?: string;

/**
   * Set the object type
   */
readonly ruleType: ApplicationRuleNatRuleNetworkRule;

/**
   * Rule Type.
   */
readonly ruleType: 'ApplicationRule';

/**
   * List of destination IP addresses or Service Tags.
   */
readonly destinationAddresses?: string[];

/**
   * List of FQDN Tags for this rule.
   */
readonly fqdnTags?: string[];

/**
   * List of HTTP/S headers to insert.
   */
readonly httpHeadersToInsert?: FirewallPolicyHttpHeaderToInsert[];

/**
   * Array of Application Protocols.
   */
readonly protocols?: FirewallPolicyRuleApplicationProtocol[];

/**
   * List of source IP addresses for this rule.
   */
readonly sourceAddresses?: string[];

/**
   * List of source IpGroups for this rule.
   */
readonly sourceIpGroups?: string[];

/**
   * List of FQDNs for this rule.
   */
readonly targetFqdns?: string[];

/**
   * List of Urls for this rule condition.
   */
readonly targetUrls?: string[];

/**
   * Terminate TLS connections for this rule.
   */
readonly terminateTLS?: bool;

/**
   * List of destination azure web categories.
   */
readonly webCategories?: string[];

/**
   * Contains the name of the header
   */
readonly headerName?: string;

/**
   * Contains the value of the header
   */
readonly headerValue?: string;

/**
   * Port number for the protocol, cannot be greater than 64000.
   */
readonly port?: number;

/**
   * Protocol type.
   */
readonly protocolType?: 'Http''Https';

/**
   * Rule Type.
   */
readonly ruleType: 'NatRule';

/**
   * List of destination IP addresses or Service Tags.
   */
readonly destinationAddresses?: string[];

/**
   * List of destination ports.
   */
readonly destinationPorts?: string[];

/**
   * Array of FirewallPolicyRuleNetworkProtocols.
   */
readonly ipProtocols?: String array containing any of:'Any''ICMP''TCP''UDP';

/**
   * List of source IP addresses for this rule.
   */
readonly sourceAddresses?: string[];

/**
   * List of source IpGroups for this rule.
   */
readonly sourceIpGroups?: string[];

/**
   * The translated address for this NAT rule.
   */
readonly translatedAddress?: string;

/**
   * The translated FQDN for this NAT rule.
   */
readonly translatedFqdn?: string;

/**
   * The translated port for this NAT rule.
   */
readonly translatedPort?: string;

/**
   * Rule Type.
   */
readonly ruleType: 'NetworkRule';

/**
   * List of destination IP addresses or Service Tags.
   */
readonly destinationAddresses?: string[];

/**
   * List of destination FQDNs.
   */
readonly destinationFqdns?: string[];

/**
   * List of destination IpGroups for this rule.
   */
readonly destinationIpGroups?: string[];

/**
   * List of destination ports.
   */
readonly destinationPorts?: string[];

/**
   * Array of FirewallPolicyRuleNetworkProtocols.
   */
readonly ipProtocols?: String array containing any of:'Any''ICMP''TCP''UDP';

/**
   * List of source IP addresses for this rule.
   */
readonly sourceAddresses?: string[];

/**
   * List of source IpGroups for this rule.
   */
readonly sourceIpGroups?: string[];

/**
   * The type of the rule collection.
   */
readonly ruleCollectionType: 'FirewallPolicyNatRuleCollection';

/**
   * The action type of a Nat rule collection.
   */
readonly action?: FirewallPolicyNatRuleCollectionAction;

/**
   * List of rules included in a rule collection.
   */
readonly rules?: FirewallPolicyRule[];

/**
   * The type of action.
   */
readonly type?: 'DNAT';
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
