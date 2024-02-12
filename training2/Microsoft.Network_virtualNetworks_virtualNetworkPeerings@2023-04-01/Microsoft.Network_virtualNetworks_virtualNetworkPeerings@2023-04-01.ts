import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualnetworksVirtualnetworkpeeringsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualNetworks;

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
}

/**
 * NetworkVirtualnetworksVirtualnetworkpeerings resource
 */
export class NetworkVirtualnetworksVirtualnetworkpeerings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualnetworksVirtualnetworkpeeringsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualnetworksVirtualnetworkpeeringsProps): string {
    return JSON.stringify(
        {properties: {allowForwardedTraffic: "${bool}", allowGatewayTransit: "${bool}", allowVirtualNetworkAccess: "${bool}", doNotVerifyRemoteGateways: "${bool}", peeringState: "string", peeringSyncLevel: "string", remoteAddressSpace: {addressPrefixes: ["string"]}, remoteBgpCommunities: {virtualNetworkCommunity: "string"}, remoteVirtualNetwork: {id: "string"}, remoteVirtualNetworkAddressSpace: {addressPrefixes: ["string"]}, useRemoteGateways: "${bool}"}}
    );
  }
}
