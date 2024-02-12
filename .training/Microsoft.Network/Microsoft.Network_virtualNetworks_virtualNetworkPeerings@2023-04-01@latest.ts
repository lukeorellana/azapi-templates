import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualnetworksVirtualnetworkpeeringsProps extends IAzAPIBaseProps {

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
