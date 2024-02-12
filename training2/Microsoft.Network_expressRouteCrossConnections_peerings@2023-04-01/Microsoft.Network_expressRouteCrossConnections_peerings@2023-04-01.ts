import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressroutecrossconnectionsPeeringsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:expressRouteCrossConnections;

/**
   * The GatewayManager Etag.
   */
readonly gatewayManagerEtag?: string;

/**
   * The IPv6 peering configuration.
   */
readonly ipv6PeeringConfig?: Ipv6ExpressRouteCircuitPeeringConfig;

/**
   * The Microsoft peering configuration.
   */
readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig;

/**
   * The peer ASN.
   */
readonly peerASN?: number;

/**
   * The peering type.
   */
readonly peeringType?: 'AzurePrivatePeering''AzurePublicPeering''MicrosoftPeering';

/**
   * The primary address prefix.
   */
readonly primaryPeerAddressPrefix?: string;

/**
   * The secondary address prefix.
   */
readonly secondaryPeerAddressPrefix?: string;

/**
   * The shared key.
   */
readonly sharedKey?: string;

/**
   * The peering state.
   */
readonly state?: 'Disabled''Enabled';

/**
   * The VLAN ID.
   */
readonly vlanId?: number;

/**
   * The Microsoft peering configuration.
   */
readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig;

/**
   * The primary address prefix.
   */
readonly primaryPeerAddressPrefix?: string;

/**
   * The reference to the RouteFilter resource.
   */
readonly routeFilter?: SubResource;

/**
   * The secondary address prefix.
   */
readonly secondaryPeerAddressPrefix?: string;

/**
   * The state of peering.
   */
readonly state?: 'Disabled''Enabled';

/**
   * The communities of bgp peering. Specified for microsoft peering.
   */
readonly advertisedCommunities?: string[];

/**
   * The reference to AdvertisedPublicPrefixes.
   */
readonly advertisedPublicPrefixes?: string[];

/**
   * The CustomerASN of the peering.
   */
readonly customerASN?: number;

/**
   * The legacy mode of the peering.
   */
readonly legacyMode?: number;

/**
   * The RoutingRegistryName of the configuration.
   */
readonly routingRegistryName?: string;

/**
   * Resource ID.
   */
readonly id?: string;
}

/**
 * NetworkExpressroutecrossconnectionsPeerings resource
 */
export class NetworkExpressroutecrossconnectionsPeerings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkExpressroutecrossconnectionsPeeringsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/expressRouteCrossConnections/peerings@2023-04-01";
  }

  protected getResourceBody(props: NetworkExpressroutecrossconnectionsPeeringsProps): string {
    return JSON.stringify(
        {properties: {gatewayManagerEtag: "string", ipv6PeeringConfig: {microsoftPeeringConfig: {advertisedCommunities: ["string"], advertisedPublicPrefixes: ["string"], customerASN: "${int}", legacyMode: "${int}", routingRegistryName: "string"}, primaryPeerAddressPrefix: "string", routeFilter: {id: "string"}, secondaryPeerAddressPrefix: "string", state: "string"}, microsoftPeeringConfig: {advertisedCommunities: ["string"], advertisedPublicPrefixes: ["string"], customerASN: "${int}", legacyMode: "${int}", routingRegistryName: "string"}, peerASN: "${int}", peeringType: "string", primaryPeerAddressPrefix: "string", secondaryPeerAddressPrefix: "string", sharedKey: "string", state: "string", vlanId: "${int}"}}
    );
  }
}
