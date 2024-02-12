import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * The load balancer SKU.
   */
readonly sku?: LoadBalancerSku;

/**
   * The extended location of the load balancer.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The type of the extended location.
   */
readonly type?: 'EdgeZone';

/**
   * Collection of backend address pools used by a load balancer.
   */
readonly backendAddressPools?: BackendAddressPool[];

/**
   * Object representing the frontend IPs to be used for the load balancer.
   */
readonly frontendIPConfigurations?: FrontendIPConfiguration[];

/**
   * Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound NAT rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
   */
readonly inboundNatPools?: InboundNatPool[];

/**
   * Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
   */
readonly inboundNatRules?: InboundNatRule[];

/**
   * Object collection representing the load balancing rules Gets the provisioning.
   */
readonly loadBalancingRules?: LoadBalancingRule[];

/**
   * The outbound rules.
   */
readonly outboundRules?: OutboundRule[];

/**
   * Collection of probe objects used in the load balancer.
   */
readonly probes?: Probe[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Amount of seconds Load Balancer waits for before sending RESET to client and backend address.
   */
readonly drainPeriodInSeconds?: number;

/**
   * An array of backend addresses.
   */
readonly loadBalancerBackendAddresses?: LoadBalancerBackendAddress[];

/**
   * Backend address synchronous mode for the backend pool
   */
readonly syncMode?: 'Automatic''Manual';

/**
   * An array of gateway load balancer tunnel interfaces.
   */
readonly tunnelInterfaces?: GatewayLoadBalancerTunnelInterface[];

/**
   * A reference to a virtual network.
   */
readonly virtualNetwork?: SubResource;

/**
   * A list of administrative states which once set can override health probe so that Load Balancer will always forward new connections to backend, or deny new connections and reset existing connections.
   */
readonly adminState?: 'Down''None''Up';

/**
   * IP Address belonging to the referenced virtual network.
   */
readonly ipAddress?: string;

/**
   * Reference to the frontend ip address configuration defined in regional loadbalancer.
   */
readonly loadBalancerFrontendIPConfiguration?: SubResource;

/**
   * Reference to an existing subnet.
   */
readonly subnet?: SubResource;

/**
   * Reference to an existing virtual network.
   */
readonly virtualNetwork?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Identifier of gateway load balancer tunnel interface.
   */
readonly identifier?: number;

/**
   * Port of gateway load balancer tunnel interface.
   */
readonly port?: number;

/**
   * Protocol of gateway load balancer tunnel interface.
   */
readonly protocol?: 'Native''None''VXLAN';

/**
   * Traffic type of gateway load balancer tunnel interface.
   */
readonly type?: 'External''Internal''None';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * A list of availability zones denoting the IP allocated for the resource needs to come from.
   */
readonly zones?: string[];

/**
   * The reference to gateway load balancer frontend IP.
   */
readonly gatewayLoadBalancer?: SubResource;

/**
   * The private IP address of the IP configuration.
   */
readonly privateIPAddress?: string;

/**
   * Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.
   */
readonly privateIPAddressVersion?: 'IPv4''IPv6';

/**
   * The Private IP allocation method.
   */
readonly privateIPAllocationMethod?: 'Dynamic''Static';

/**
   * The reference to the Public IP resource.
   */
readonly publicIPAddress?: PublicIPAddress;

/**
   * The reference to the Public IP Prefix resource.
   */
readonly publicIPPrefix?: SubResource;

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

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
   */
readonly backendPort: number;

/**
   * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
   */
readonly enableFloatingIP?: bool;

/**
   * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
   */
readonly enableTcpReset?: bool;

/**
   * A reference to frontend IP addresses.
   */
readonly frontendIPConfiguration?: SubResource;

/**
   * The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
   */
readonly frontendPortRangeEnd: number;

/**
   * The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
   */
readonly frontendPortRangeStart: number;

/**
   * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
   */
readonly idleTimeoutInMinutes?: number;

/**
   * The reference to the transport protocol used by the inbound NAT pool.
   */
readonly protocol: 'All''Tcp''Udp';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * A reference to backendAddressPool resource.
   */
readonly backendAddressPool?: SubResource;

/**
   * The port used for the internal endpoint. Acceptable values range from 1 to 65535.
   */
readonly backendPort?: number;

/**
   * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
   */
readonly enableFloatingIP?: bool;

/**
   * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
   */
readonly enableTcpReset?: bool;

/**
   * A reference to frontend IP addresses.
   */
readonly frontendIPConfiguration?: SubResource;

/**
   * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
   */
readonly frontendPort?: number;

/**
   * The port range end for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeStart. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
   */
readonly frontendPortRangeEnd?: number;

/**
   * The port range start for the external endpoint. This property is used together with BackendAddressPool and FrontendPortRangeEnd. Individual inbound NAT rule port mappings will be created for each backend address from BackendAddressPool. Acceptable values range from 1 to 65534.
   */
readonly frontendPortRangeStart?: number;

/**
   * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
   */
readonly idleTimeoutInMinutes?: number;

/**
   * The reference to the transport protocol used by the load balancing rule.
   */
readonly protocol?: 'All''Tcp''Udp';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * A reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs.
   */
readonly backendAddressPool?: SubResource;

/**
   * An array of references to pool of DIPs.
   */
readonly backendAddressPools?: SubResource[];

/**
   * The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port".
   */
readonly backendPort?: number;

/**
   * Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
   */
readonly disableOutboundSnat?: bool;

/**
   * Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
   */
readonly enableFloatingIP?: bool;

/**
   * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
   */
readonly enableTcpReset?: bool;

/**
   * A reference to frontend IP addresses.
   */
readonly frontendIPConfiguration?: SubResource;

/**
   * The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port".
   */
readonly frontendPort: number;

/**
   * The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
   */
readonly idleTimeoutInMinutes?: number;

/**
   * The load distribution policy for this rule.
   */
readonly loadDistribution?: 'Default''SourceIP''SourceIPProtocol';

/**
   * The reference to the load balancer probe used by the load balancing rule.
   */
readonly probe?: SubResource;

/**
   * The reference to the transport protocol used by the load balancing rule.
   */
readonly protocol: 'All''Tcp''Udp';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The number of outbound ports to be used for NAT.
   */
readonly allocatedOutboundPorts?: number;

/**
   * A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs.
   */
readonly backendAddressPool: SubResource;

/**
   * Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
   */
readonly enableTcpReset?: bool;

/**
   * The Frontend IP addresses of the load balancer.
   */
readonly frontendIPConfigurations: SubResource[];

/**
   * The timeout for the TCP idle connection.
   */
readonly idleTimeoutInMinutes?: number;

/**
   * The protocol for the outbound rule in load balancer.
   */
readonly protocol: 'All''Tcp''Udp';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5.
   */
readonly intervalInSeconds?: number;

/**
   * The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure.
   */
readonly numberOfProbes?: number;

/**
   * The port for communicating the probe. Possible values range from 1 to 65535, inclusive.
   */
readonly port: number;

/**
   * The number of consecutive successful or failed probes in order to allow or deny traffic from being delivered to this endpoint. After failing the number of consecutive probes equal to this value, the endpoint will be taken out of rotation and require the same number of successful consecutive probes to be placed back in rotation.
   */
readonly probeThreshold?: number;

/**
   * The protocol of the end point. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful.
   */
readonly protocol: 'Http''Https''Tcp';

/**
   * The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value.
   */
readonly requestPath?: string;

/**
   * Tier of a load balancer SKU.
   */
readonly tier?: 'Global''Regional';
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