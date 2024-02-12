import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsRulesProps extends IAzAPIBaseProps {
/**
   * Set the object type
   */
readonly kind: CustomDefault;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:ruleCollections;

/**
   * Whether the rule is custom or default.
   */
readonly kind: 'Custom';

/**
   * Indicates the access allowed for this particular rule
   */
readonly access: 'Allow''AlwaysAllow''Deny';

/**
   * A description for this rule. Restricted to 140 chars.
   */
readonly description?: string;

/**
   * The destination port ranges.
   */
readonly destinationPortRanges?: string[];

/**
   * The destination address prefixes. CIDR or destination IP ranges.
   */
readonly destinations?: AddressPrefixItem[];

/**
   * Indicates if the traffic matched against the rule in inbound or outbound.
   */
readonly direction: 'Inbound''Outbound';

/**
   * The priority of the rule. The value can be between 1 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
   */
readonly priority: number;

/**
   * Network protocol this rule applies to.
   */
readonly protocol: 'Ah''Any''Esp''Icmp''Tcp''Udp';

/**
   * The source port ranges.
   */
readonly sourcePortRanges?: string[];

/**
   * The CIDR or source IP ranges.
   */
readonly sources?: AddressPrefixItem[];

/**
   * Address prefix.
   */
readonly addressPrefix?: string;

/**
   * Address prefix type.
   */
readonly addressPrefixType?: 'IPPrefix''ServiceTag';

/**
   * Whether the rule is custom or default.
   */
readonly kind: 'Default';

/**
   * Default rule flag.
   */
readonly flag?: string;
}

/**
 * NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsRules resource
 */
export class NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsRules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsRulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkmanagersSecurityadminconfigurationsRulecollectionsRulesProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
