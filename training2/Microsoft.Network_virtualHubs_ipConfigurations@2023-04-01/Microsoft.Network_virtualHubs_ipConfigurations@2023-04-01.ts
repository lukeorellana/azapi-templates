import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualHubs;

/**
   * The private IP address of the IP configuration.
   */
readonly privateIPAddress?: string;

/**
   * The private IP address allocation method.
   */
readonly privateIPAllocationMethod?: 'Dynamic''Static';

/**
   * The reference to the public IP resource.
   */
readonly publicIPAddress?: PublicIPAddress;

/**
   * The reference to the subnet resource.
   */
readonly subnet?: Subnet;

/**
   * The extended location of the public ip address.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The public IP address SKU.
   */
readonly sku?: PublicIPAddressSku;

/**
   * A list of availability zones denoting the IP allocated for the resource needs to come from.
   */
readonly zones?: string[];

/**
   * The type of the extended location.
   */
readonly type?: 'EdgeZone';

/**
   * The DDoS protection custom policy associated with the public IP address.
   */
readonly ddosSettings?: DdosSettings;

/**
   * Specify what happens to the public IP address when the VM using it is deleted
   */
readonly deleteOption?: 'Delete''Detach';

/**
   * The FQDN of the DNS record associated with the public IP address.
   */
readonly dnsSettings?: PublicIPAddressDnsSettings;

/**
   * The idle timeout of the public IP address.
   */
readonly idleTimeoutInMinutes?: number;

/**
   * The IP address associated with the public IP address resource.
   */
readonly ipAddress?: string;

/**
   * The list of tags associated with the public IP address.
   */
readonly ipTags?: IpTag[];

/**
   * The linked public IP address of the public IP address resource.
   */
readonly linkedPublicIPAddress?: PublicIPAddress;

/**
   * Migration phase of Public IP Address.
   */
readonly migrationPhase?: 'Abort''Commit''Committed''None''Prepare';

/**
   * The NatGateway for the Public IP address.
   */
readonly natGateway?: NatGateway;

/**
   * The public IP address version.
   */
readonly publicIPAddressVersion?: 'IPv4''IPv6';

/**
   * The public IP address allocation method.
   */
readonly publicIPAllocationMethod?: 'Dynamic''Static';

/**
   * The Public IP Prefix this Public IP Address should be allocated from.
   */
readonly publicIPPrefix?: SubResource;

/**
   * The service public IP address of the public IP address resource.
   */
readonly servicePublicIPAddress?: PublicIPAddress;

/**
   * The DDoS protection plan associated with the public IP. Can only be set if ProtectionMode is Enabled
   */
readonly ddosProtectionPlan?: SubResource;

/**
   * The DDoS protection mode of the public IP
   */
readonly protectionMode?: 'Disabled''Enabled''VirtualNetworkInherited';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.
   */
readonly domainNameLabel?: string;

/**
   * The domain name label scope. If a domain name label and a domain name label scope are specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system with a hashed value includes in FQDN.
   */
readonly domainNameLabelScope?: 'NoReuse''ResourceGroupReuse''SubscriptionReuse''TenantReuse';

/**
   * The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone.
   */
readonly fqdn?: string;

/**
   * The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN.
   */
readonly reverseFqdn?: string;

/**
   * The IP tag type. Example: FirstPartyUsage.
   */
readonly ipTagType?: string;

/**
   * The value of the IP tag associated with the public IP. Example: SQL.
   */
readonly tag?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The nat gateway SKU.
   */
readonly sku?: NatGatewaySku;

/**
   * A list of availability zones denoting the zone in which Nat Gateway should be deployed.
   */
readonly zones?: string[];

/**
   * The idle timeout of the nat gateway.
   */
readonly idleTimeoutInMinutes?: number;

/**
   * An array of public ip addresses associated with the nat gateway resource.
   */
readonly publicIpAddresses?: SubResource[];

/**
   * An array of public ip prefixes associated with the nat gateway resource.
   */
readonly publicIpPrefixes?: SubResource[];

/**
   * Tier of a public IP address SKU.
   */
readonly tier?: 'Global''Regional';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Resource type.
   */
readonly type?: string;

/**
   * The address prefix for the subnet.
   */
readonly addressPrefix?: string;

/**
   * List of address prefixes for the subnet.
   */
readonly addressPrefixes?: string[];

/**
   * Application gateway IP configurations of virtual network resource.
   */
readonly applicationGatewayIPConfigurations?: ApplicationGatewayIPConfiguration[];

/**
   * An array of references to the delegations on the subnet.
   */
readonly delegations?: Delegation[];

/**
   * Array of IpAllocation which reference this subnet.
   */
readonly ipAllocations?: SubResource[];

/**
   * Nat gateway associated with this subnet.
   */
readonly natGateway?: SubResource;

/**
   * The reference to the NetworkSecurityGroup resource.
   */
readonly networkSecurityGroup?: NetworkSecurityGroup;

/**
   * Enable or Disable apply network policies on private end point in the subnet.
   */
readonly privateEndpointNetworkPolicies?: 'Disabled''Enabled';

/**
   * Enable or Disable apply network policies on private link service in the subnet.
   */
readonly privateLinkServiceNetworkPolicies?: 'Disabled''Enabled';

/**
   * The reference to the RouteTable resource.
   */
readonly routeTable?: RouteTable;

/**
   * An array of service endpoint policies.
   */
readonly serviceEndpointPolicies?: ServiceEndponumberPolicy[];

/**
   * An array of service endpoints.
   */
readonly serviceEndpoints?: ServiceEndponumberPropertiesFormat[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Reference to the subnet resource. A subnet from where application gateway gets its private address.
   */
readonly subnet?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Resource type.
   */
readonly type?: string;

/**
   * The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers).
   */
readonly serviceName?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * When enabled, flows created from Network Security Group connections will be re-evaluated when rules are updates. Initial enablement will trigger re-evaluation.
   */
readonly flushConnection?: bool;

/**
   * A collection of security rules of the network security group.
   */
readonly securityRules?: SecurityRule[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The type of the resource.
   */
readonly type?: string;

/**
   * The network traffic is allowed or denied.
   */
readonly access: 'Allow''Deny';

/**
   * A description for this rule. Restricted to 140 chars.
   */
readonly description?: string;

/**
   * The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
   */
readonly destinationAddressPrefix?: string;

/**
   * The destination address prefixes. CIDR or destination IP ranges.
   */
readonly destinationAddressPrefixes?: string[];

/**
   * The application security group specified as destination.
   */
readonly destinationApplicationSecurityGroups?: ApplicationSecurityGroup[];

/**
   * The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
   */
readonly destinationPortRange?: string;

/**
   * The destination port ranges.
   */
readonly destinationPortRanges?: string[];

/**
   * The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
   */
readonly direction: 'Inbound''Outbound';

/**
   * The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
   */
readonly priority: number;

/**
   * Network protocol this rule applies to.
   */
readonly protocol: '*''Ah''Esp''Icmp''Tcp''Udp';

/**
   * The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
   */
readonly sourceAddressPrefix?: string;

/**
   * The CIDR or source IP ranges.
   */
readonly sourceAddressPrefixes?: string[];

/**
   * The application security group specified as source.
   */
readonly sourceApplicationSecurityGroups?: ApplicationSecurityGroup[];

/**
   * The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
   */
readonly sourcePortRange?: string;

/**
   * The source port ranges.
   */
readonly sourcePortRanges?: string[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Whether to disable the routes learned by BGP on that route table. True means disable.
   */
readonly disableBgpRoutePropagation?: bool;

/**
   * Collection of routes contained within a route table.
   */
readonly routes?: Route[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The type of the resource.
   */
readonly type?: string;

/**
   * The destination CIDR to which the route applies.
   */
readonly addressPrefix?: string;

/**
   * A value indicating whether this route overrides overlapping BGP routes regardless of LPM.
   */
readonly hasBgpOverride?: bool;

/**
   * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
   */
readonly nextHopIpAddress?: string;

/**
   * The type of Azure hop the packet should be sent to.
   */
readonly nextHopType: 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * A collection of contextual service endpoint policy.
   */
readonly contextualServiceEndpointPolicies?: string[];

/**
   * The alias indicating if the policy belongs to a service
   */
readonly serviceAlias?: string;

/**
   * A collection of service endpoint policy definitions of the service endpoint policy.
   */
readonly serviceEndpointPolicyDefinitions?: ServiceEndponumberPolicyDefinition[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The type of the resource.
   */
readonly type?: string;

/**
   * A description for this rule. Restricted to 140 chars.
   */
readonly description?: string;

/**
   * Service endpoint name.
   */
readonly service?: string;

/**
   * A list of service resources.
   */
readonly serviceResources?: string[];

/**
   * A list of locations.
   */
readonly locations?: string[];

/**
   * The type of the endpoint service.
   */
readonly service?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
