import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressroutecircuitsPeeringsProps extends IAzAPIBaseProps {

}

/**
 * NetworkExpressroutecircuitsPeerings resource
 */
export class NetworkExpressroutecircuitsPeerings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkExpressroutecircuitsPeeringsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/expressRouteCircuits/peerings@2023-04-01";
  }

  protected getResourceBody(props: NetworkExpressroutecircuitsPeeringsProps): string {
    return JSON.stringify(
        {properties: {azureASN: "${int}", connections: [{id: "string", name: "string", properties: {addressPrefix: "string", authorizationKey: "string", expressRouteCircuitPeering: {id: "string"}, ipv6CircuitConnectionConfig: {addressPrefix: "string"}, peerExpressRouteCircuitPeering: {id: "string"}}}], expressRouteConnection: {}, gatewayManagerEtag: "string", ipv6PeeringConfig: {microsoftPeeringConfig: {advertisedCommunities: ["string"], advertisedPublicPrefixes: ["string"], customerASN: "${int}", legacyMode: "${int}", routingRegistryName: "string"}, primaryPeerAddressPrefix: "string", routeFilter: {id: "string"}, secondaryPeerAddressPrefix: "string", state: "string"}, microsoftPeeringConfig: {advertisedCommunities: ["string"], advertisedPublicPrefixes: ["string"], customerASN: "${int}", legacyMode: "${int}", routingRegistryName: "string"}, peerASN: "${int}", peeringType: "string", primaryAzurePort: "string", primaryPeerAddressPrefix: "string", routeFilter: {id: "string"}, secondaryAzurePort: "string", secondaryPeerAddressPrefix: "string", sharedKey: "string", state: "string", stats: {primarybytesIn: "${int}", primarybytesOut: "${int}", secondarybytesIn: "${int}", secondarybytesOut: "${int}"}, vlanId: "${int}"}}
    );
  }
}
