import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualnetworksProps extends IAzAPIBaseProps {
/**
   * The extended location of the virtual network.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The type of the extended location.
   */
readonly type?: 'EdgeZone';

/**
   * The AddressSpace that contains an array of IP address ranges that can be used by subnets.
   */
readonly addressSpace?: AddressSpace;

/**
   * Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET.
   */
readonly bgpCommunities?: VirtualNetworkBgpCommunities;

/**
   * The DDoS protection plan associated with the virtual network.
   */
readonly ddosProtectionPlan?: SubResource;

/**
   * The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
   */
readonly dhcpOptions?: DhcpOptions;

/**
   * Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource.
   */
readonly enableDdosProtection?: bool;

/**
   * Indicates if VM protection is enabled for all the subnets in the virtual network.
   */
readonly enableVmProtection?: bool;

/**
   * Indicates if encryption is enabled on virtual network and if VM without encryption is allowed in encrypted VNet.
   */
readonly encryption?: VirtualNetworkEncryption;

/**
   * The FlowTimeout value (in minutes) for the Virtual Network
   */
readonly flowTimeoutInMinutes?: number;

/**
   * Array of IpAllocation which reference this VNET.
   */
readonly ipAllocations?: SubResource[];

/**
   * A list of subnets in a Virtual Network.
   */
readonly subnets?: Subnet[];

/**
   * A list of peerings in a Virtual Network.
   */
readonly virtualNetworkPeerings?: VirtualNetworkPeering[];

/**
   * A list of address blocks reserved for this virtual network in CIDR notation.
   */
readonly addressPrefixes?: string[];

/**
   * The BGP community associated with the virtual network.
   */
readonly virtualNetworkCommunity: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The list of DNS servers IP addresses.
   */
readonly dnsServers?: string[];

/**
   * Indicates if encryption is enabled on the virtual network.
   */
readonly enabled: bool;

/**
   * If the encrypted VNet allows VM that does not support encryption
   */
readonly enforcement?: 'AllowUnencrypted''DropUnencrypted';

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
   * Resource type.
   */
readonly type?: string;

/**
   * Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
   */
readonly allowForwardedTraffic?: bool;

/**
   * If gateway links can be used in remote virtual networking to link to this virtual network.
   */
readonly allowGatewayTransit?: bool;

/**
   * Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
   */
readonly allowVirtualNetworkAccess?: bool;

/**
   * If we need to verify the provisioning state of the remote gateway.
   */
readonly doNotVerifyRemoteGateways?: bool;

/**
   * The status of the virtual network peering.
   */
readonly peeringState?: 'Connected''Disconnected''Initiated';

/**
   * The peering sync status of the virtual network peering.
   */
readonly peeringSyncLevel?: 'FullyInSync''LocalAndRemoteNotInSync''LocalNotInSync''RemoteNotInSync';

/**
   * The reference to the address space peered with the remote virtual network.
   */
readonly remoteAddressSpace?: AddressSpace;

/**
   * The reference to the remote virtual network's Bgp Communities.
   */
readonly remoteBgpCommunities?: VirtualNetworkBgpCommunities;

/**
   * The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (/azure/virtual-network/virtual-network-create-peering).
   */
readonly remoteVirtualNetwork?: SubResource;

/**
   * The reference to the current address space of the remote virtual network.
   */
readonly remoteVirtualNetworkAddressSpace?: AddressSpace;

/**
   * If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
   */
readonly useRemoteGateways?: bool;
}

/**
 * NetworkVirtualnetworks resource
 */
export class NetworkVirtualnetworks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualnetworksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualNetworks@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualnetworksProps): string {
    return JSON.stringify(
        {properties: {addressSpace: {addressPrefixes: ["string"]}, bgpCommunities: {virtualNetworkCommunity: "string"}, ddosProtectionPlan: {id: "string"}, dhcpOptions: {dnsServers: ["string"]}, enableDdosProtection: "${bool}", enableVmProtection: "${bool}", encryption: {enabled: "${bool}", enforcement: "string"}, flowTimeoutInMinutes: "${int}", ipAllocations: [{id: "string"}], subnets: [{id: "string", name: "string", properties: {addressPrefix: "string", addressPrefixes: ["string"], applicationGatewayIPConfigurations: [{id: "string", name: "string", properties: {subnet: {id: "string"}}}], delegations: [{id: "string", name: "string", properties: {serviceName: "string"}, type: "string"}], ipAllocations: [{id: "string"}], natGateway: {id: "string"}, networkSecurityGroup: {id: "string", location: "string", properties: {flushConnection: "${bool}", securityRules: [{id: "string", name: "string", properties: {access: "string", description: "string", destinationAddressPrefix: "string", destinationAddressPrefixes: ["string"], destinationApplicationSecurityGroups: [{id: "string", location: "string", properties: {}, tags: {}}], destinationPortRange: "string", destinationPortRanges: ["string"], direction: "string", priority: "${int}", protocol: "string", sourceAddressPrefix: "string", sourceAddressPrefixes: ["string"], sourceApplicationSecurityGroups: [{id: "string", location: "string", properties: {}, tags: {}}], sourcePortRange: "string", sourcePortRanges: ["string"]}, type: "string"}]}, tags: {}}, privateEndpointNetworkPolicies: "string", privateLinkServiceNetworkPolicies: "string", routeTable: {id: "string", location: "string", properties: {disableBgpRoutePropagation: "${bool}", routes: [{id: "string", name: "string", properties: {addressPrefix: "string", hasBgpOverride: "${bool}", nextHopIpAddress: "string", nextHopType: "string"}, type: "string"}]}, tags: {}}, serviceEndpointPolicies: [{id: "string", location: "string", properties: {contextualServiceEndpointPolicies: ["string"], serviceAlias: "string", serviceEndpointPolicyDefinitions: [{id: "string", name: "string", properties: {description: "string", service: "string", serviceResources: ["string"]}, type: "string"}]}, tags: {}}], serviceEndpoints: [{locations: ["string"], service: "string"}]}, type: "string"}], virtualNetworkPeerings: [{id: "string", name: "string", properties: {allowForwardedTraffic: "${bool}", allowGatewayTransit: "${bool}", allowVirtualNetworkAccess: "${bool}", doNotVerifyRemoteGateways: "${bool}", peeringState: "string", peeringSyncLevel: "string", remoteAddressSpace: {addressPrefixes: ["string"]}, remoteBgpCommunities: {virtualNetworkCommunity: "string"}, remoteVirtualNetwork: {id: "string"}, remoteVirtualNetworkAddressSpace: {addressPrefixes: ["string"]}, useRemoteGateways: "${bool}"}, type: "string"}]}, extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
