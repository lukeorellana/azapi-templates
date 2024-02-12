import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkprofilesProps extends IAzAPIBaseProps {
/**
   * List of chid container network interface configurations.
   */
readonly containerNetworkInterfaceConfigurations?: ContainerNetworkInterfaceConfiguration[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * A list of container network interfaces created from this container network interface configuration.
   */
readonly containerNetworkInterfaces?: SubResource[];

/**
   * A list of ip configurations of the container network interface configuration.
   */
readonly ipConfigurations?: IPConfigurationProfile[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The reference to the subnet resource to create a container network interface ip configuration.
   */
readonly subnet?: Subnet;

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
 * NetworkNetworkprofiles resource
 */
export class NetworkNetworkprofiles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkprofilesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkProfiles@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkprofilesProps): string {
    return JSON.stringify(
        {properties: {containerNetworkInterfaceConfigurations: [{id: "string", name: "string", properties: {containerNetworkInterfaces: [{id: "string"}], ipConfigurations: [{id: "string", name: "string", properties: {subnet: {id: "string", name: "string", properties: {addressPrefix: "string", addressPrefixes: ["string"], applicationGatewayIPConfigurations: [{id: "string", name: "string", properties: {subnet: {id: "string"}}}], delegations: [{id: "string", name: "string", properties: {serviceName: "string"}, type: "string"}], ipAllocations: [{id: "string"}], natGateway: {id: "string"}, networkSecurityGroup: {id: "string", location: "string", properties: {flushConnection: "${bool}", securityRules: [{id: "string", name: "string", properties: {access: "string", description: "string", destinationAddressPrefix: "string", destinationAddressPrefixes: ["string"], destinationApplicationSecurityGroups: [{id: "string", location: "string", properties: {}, tags: {}}], destinationPortRange: "string", destinationPortRanges: ["string"], direction: "string", priority: "${int}", protocol: "string", sourceAddressPrefix: "string", sourceAddressPrefixes: ["string"], sourceApplicationSecurityGroups: [{id: "string", location: "string", properties: {}, tags: {}}], sourcePortRange: "string", sourcePortRanges: ["string"]}, type: "string"}]}, tags: {}}, privateEndpointNetworkPolicies: "string", privateLinkServiceNetworkPolicies: "string", routeTable: {id: "string", location: "string", properties: {disableBgpRoutePropagation: "${bool}", routes: [{id: "string", name: "string", properties: {addressPrefix: "string", hasBgpOverride: "${bool}", nextHopIpAddress: "string", nextHopType: "string"}, type: "string"}]}, tags: {}}, serviceEndpointPolicies: [{id: "string", location: "string", properties: {contextualServiceEndpointPolicies: ["string"], serviceAlias: "string", serviceEndpointPolicyDefinitions: [{id: "string", name: "string", properties: {description: "string", service: "string", serviceResources: ["string"]}, type: "string"}]}, tags: {}}], serviceEndpoints: [{locations: ["string"], service: "string"}]}, type: "string"}}}]}}]}}
    );
  }
}
