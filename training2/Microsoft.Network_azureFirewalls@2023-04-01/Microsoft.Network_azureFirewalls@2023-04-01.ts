import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkAzurefirewallsProps extends IAzAPIBaseProps {
/**
   * A list of availability zones denoting where the resource needs to come from.
   */
readonly zones?: string[];

/**
   * The additional properties used to further config this azure firewall.
   */
readonly additionalProperties?: object;

/**
   * Collection of application rule collections used by Azure Firewall.
   */
readonly applicationRuleCollections?: AzureFirewallApplicationRuleCollection[];

/**
   * The firewallPolicy associated with this azure firewall.
   */
readonly firewallPolicy?: SubResource;

/**
   * IP addresses associated with AzureFirewall.
   */
readonly hubIPAddresses?: HubIPAddresses;

/**
   * IP configuration of the Azure Firewall resource.
   */
readonly ipConfigurations?: AzureFirewallIPConfiguration[];

/**
   * IP configuration of the Azure Firewall used for management traffic.
   */
readonly managementIpConfiguration?: AzureFirewallIPConfiguration;

/**
   * Collection of NAT rule collections used by Azure Firewall.
   */
readonly natRuleCollections?: AzureFirewallNatRuleCollection[];

/**
   * Collection of network rule collections used by Azure Firewall.
   */
readonly networkRuleCollections?: AzureFirewallNetworkRuleCollection[];

/**
   * The Azure Firewall Resource SKU.
   */
readonly sku?: AzureFirewallSku;

/**
   * The operation mode for Threat Intelligence.
   */
readonly threatIntelMode?: 'Alert''Deny''Off';

/**
   * The virtualHub to which the firewall belongs.
   */
readonly virtualHub?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The action type of a rule collection.
   */
readonly action?: AzureFirewallRCAction;

/**
   * Priority of the application rule collection resource.
   */
readonly priority?: number;

/**
   * Collection of rules used by a application rule collection.
   */
readonly rules?: AzureFirewallApplicationRule[];

/**
   * The type of action.
   */
readonly type?: 'Allow''Deny';

/**
   * Description of the rule.
   */
readonly description?: string;

/**
   * List of FQDN Tags for this rule.
   */
readonly fqdnTags?: string[];

/**
   * Array of ApplicationRuleProtocols.
   */
readonly protocols?: AzureFirewallApplicationRuleProtocol[];

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
   * Port number for the protocol, cannot be greater than 64000. This field is optional.
   */
readonly port?: number;

/**
   * Protocol type.
   */
readonly protocolType?: 'Http''Https''Mssql';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Private IP Address associated with azure firewall.
   */
readonly privateIPAddress?: string;

/**
   * Public IP addresses associated with azure firewall.
   */
readonly publicIPs?: HubPublicIPAddresses;

/**
   * The list of Public IP addresses associated with azure firewall or IP addresses to be retained.
   */
readonly addresses?: AzureFirewallPublicIPAddress[];

/**
   * The number of Public IP addresses associated with azure firewall.
   */
readonly count?: number;

/**
   * Public IP Address value.
   */
readonly address?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Reference to the PublicIP resource. This field is a mandatory input if subnet is not null.
   */
readonly publicIPAddress?: SubResource;

/**
   * Reference to the subnet resource. This resource must be named 'AzureFirewallSubnet' or 'AzureFirewallManagementSubnet'.
   */
readonly subnet?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The action type of a NAT rule collection.
   */
readonly action?: AzureFirewallNatRCAction;

/**
   * Priority of the NAT rule collection resource.
   */
readonly priority?: number;

/**
   * Collection of rules used by a NAT rule collection.
   */
readonly rules?: AzureFirewallNatRule[];

/**
   * The type of action.
   */
readonly type?: 'Dnat''Snat';

/**
   * Description of the rule.
   */
readonly description?: string;

/**
   * List of destination IP addresses for this rule. Supports IP ranges, prefixes, and service tags.
   */
readonly destinationAddresses?: string[];

/**
   * List of destination ports.
   */
readonly destinationPorts?: string[];

/**
   * Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule.
   */
readonly protocols?: String array containing any of:'Any''ICMP''TCP''UDP';

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
   * Resource ID.
   */
readonly id?: string;

/**
   * The action type of a rule collection.
   */
readonly action?: AzureFirewallRCAction;

/**
   * Priority of the network rule collection resource.
   */
readonly priority?: number;

/**
   * Collection of rules used by a network rule collection.
   */
readonly rules?: AzureFirewallNetworkRule[];

/**
   * Description of the rule.
   */
readonly description?: string;

/**
   * List of destination IP addresses.
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
   * Array of AzureFirewallNetworkRuleProtocols.
   */
readonly protocols?: String array containing any of:'Any''ICMP''TCP''UDP';

/**
   * List of source IP addresses for this rule.
   */
readonly sourceAddresses?: string[];

/**
   * List of source IpGroups for this rule.
   */
readonly sourceIpGroups?: string[];

/**
   * Tier of an Azure Firewall.
   */
readonly tier?: 'Basic''Premium''Standard';
}

/**
 * NetworkAzurefirewalls resource
 */
export class NetworkAzurefirewalls extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkAzurefirewallsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/azureFirewalls@2023-04-01";
  }

  protected getResourceBody(props: NetworkAzurefirewallsProps): string {
    return JSON.stringify(
        {properties: {additionalProperties: {}, applicationRuleCollections: [{id: "string", name: "string", properties: {action: {type: "string"}, priority: "${int}", rules: [{description: "string", fqdnTags: ["string"], name: "string", protocols: [{port: "${int}", protocolType: "string"}], sourceAddresses: ["string"], sourceIpGroups: ["string"], targetFqdns: ["string"]}]}}], firewallPolicy: {id: "string"}, hubIPAddresses: {privateIPAddress: "string", publicIPs: {addresses: [{address: "string"}], count: "${int}"}}, ipConfigurations: [{id: "string", name: "string", properties: {publicIPAddress: {id: "string"}, subnet: {id: "string"}}}], managementIpConfiguration: {id: "string", name: "string", properties: {publicIPAddress: {id: "string"}, subnet: {id: "string"}}}, natRuleCollections: [{id: "string", name: "string", properties: {action: {type: "string"}, priority: "${int}", rules: [{description: "string", destinationAddresses: ["string"], destinationPorts: ["string"], name: "string", protocols: ["string"], sourceAddresses: ["string"], sourceIpGroups: ["string"], translatedAddress: "string", translatedFqdn: "string", translatedPort: "string"}]}}], networkRuleCollections: [{id: "string", name: "string", properties: {action: {type: "string"}, priority: "${int}", rules: [{description: "string", destinationAddresses: ["string"], destinationFqdns: ["string"], destinationIpGroups: ["string"], destinationPorts: ["string"], name: "string", protocols: ["string"], sourceAddresses: ["string"], sourceIpGroups: ["string"]}]}}], sku: {name: "string", tier: "string"}, threatIntelMode: "string", virtualHub: {id: "string"}}, zones: ["string"]}
    );
  }
}
