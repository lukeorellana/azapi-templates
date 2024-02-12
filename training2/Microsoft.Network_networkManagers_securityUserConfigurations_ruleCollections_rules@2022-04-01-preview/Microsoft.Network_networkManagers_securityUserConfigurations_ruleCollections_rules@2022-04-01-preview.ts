import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkmanagersSecurityuserconfigurationsRulecollectionsRulesProps extends IAzAPIBaseProps {
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
   * A description for this rule.
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
 * NetworkNetworkmanagersSecurityuserconfigurationsRulecollectionsRules resource
 */
export class NetworkNetworkmanagersSecurityuserconfigurationsRulecollectionsRules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkmanagersSecurityuserconfigurationsRulecollectionsRulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2022-04-01-preview";
  }

  protected getResourceBody(props: NetworkNetworkmanagersSecurityuserconfigurationsRulecollectionsRulesProps): string {
    return JSON.stringify(
        {kind: "string"}
    );
  }
}
