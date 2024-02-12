import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressroutecrossconnectionsProps extends IAzAPIBaseProps {
/**
   * The ExpressRouteCircuit.
   */
readonly expressRouteCircuit?: ExpressRouteCircuitReference;

/**
   * The list of peerings.
   */
readonly peerings?: ExpressRouteCrossConnectionPeering[];

/**
   * Additional read only notes set by the connectivity provider.
   */
readonly serviceProviderNotes?: string;

/**
   * The provisioning state of the circuit in the connectivity provider system.
   */
readonly serviceProviderProvisioningState?: 'Deprovisioning''NotProvisioned''Provisioned''Provisioning';

/**
   * Corresponding Express Route Circuit Id.
   */
readonly id?: string;

/**
   * Resource ID.
   */
readonly id?: string;

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
 * NetworkExpressroutecrossconnections resource
 */
export class NetworkExpressroutecrossconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkExpressroutecrossconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/expressRouteCrossConnections@2023-04-01";
  }

  protected getResourceBody(props: NetworkExpressroutecrossconnectionsProps): string {
    return JSON.stringify(
        {properties: {expressRouteCircuit: {id: "string"}, peerings: [{id: "string", name: "string", properties: {gatewayManagerEtag: "string", ipv6PeeringConfig: {microsoftPeeringConfig: {advertisedCommunities: ["string"], advertisedPublicPrefixes: ["string"], customerASN: "${int}", legacyMode: "${int}", routingRegistryName: "string"}, primaryPeerAddressPrefix: "string", routeFilter: {id: "string"}, secondaryPeerAddressPrefix: "string", state: "string"}, microsoftPeeringConfig: {advertisedCommunities: ["string"], advertisedPublicPrefixes: ["string"], customerASN: "${int}", legacyMode: "${int}", routingRegistryName: "string"}, peerASN: "${int}", peeringType: "string", primaryPeerAddressPrefix: "string", secondaryPeerAddressPrefix: "string", sharedKey: "string", state: "string", vlanId: "${int}"}}], serviceProviderNotes: "string", serviceProviderProvisioningState: "string"}}
    );
  }
}
