import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualnetworksProps extends IAzAPIBaseProps {

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
