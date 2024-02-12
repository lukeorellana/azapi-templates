import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressroutecircuitsProps extends IAzAPIBaseProps {
/**
   * The SKU.
   */
readonly sku?: ExpressRouteCircuitSku;

/**
   * Allow classic operations.
   */
readonly allowClassicOperations?: bool;

/**
   * The authorizationKey.
   */
readonly authorizationKey?: string;

/**
   * The list of authorizations.
   */
readonly authorizations?: ExpressRouteCircuitAuthorization[];

/**
   * The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
   */
readonly bandwidthInGbps?: number;

/**
   * The CircuitProvisioningState state of the resource.
   */
readonly circuitProvisioningState?: string;

/**
   * The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
   */
readonly expressRoutePort?: SubResource;

/**
   * The GatewayManager Etag.
   */
readonly gatewayManagerEtag?: string;

/**
   * Flag denoting global reach status.
   */
readonly globalReachEnabled?: bool;

/**
   * The list of peerings.
   */
readonly peerings?: ExpressRouteCircuitPeering[];

/**
   * The ServiceKey.
   */
readonly serviceKey?: string;

/**
   * The ServiceProviderNotes.
   */
readonly serviceProviderNotes?: string;

/**
   * The ServiceProviderProperties.
   */
readonly serviceProviderProperties?: ExpressRouteCircuitServiceProviderProperties;

/**
   * The ServiceProviderProvisioningState state of the resource.
   */
readonly serviceProviderProvisioningState?: 'Deprovisioning''NotProvisioned''Provisioned''Provisioning';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The authorization key.
   */
readonly authorizationKey?: string;

/**
   * The authorization use status.
   */
readonly authorizationUseStatus?: 'Available''InUse';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The Azure ASN.
   */
readonly azureASN?: number;

/**
   * The list of circuit connections associated with Azure Private Peering for this circuit.
   */
readonly connections?: ExpressRouteCircuitConnection[];

/**
   * The ExpressRoute connection.
   */
readonly expressRouteConnection?: ExpressRouteConnectionId;

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
   * The primary port.
   */
readonly primaryAzurePort?: string;

/**
   * The primary address prefix.
   */
readonly primaryPeerAddressPrefix?: string;

/**
   * The reference to the RouteFilter resource.
   */
readonly routeFilter?: SubResource;

/**
   * The secondary port.
   */
readonly secondaryAzurePort?: string;

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
   * The peering stats of express route circuit.
   */
readonly stats?: ExpressRouteCircuitStats;

/**
   * The VLAN ID.
   */
readonly vlanId?: number;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * /29 IP address space to carve out Customer addresses for tunnels.
   */
readonly addressPrefix?: string;

/**
   * The authorization key.
   */
readonly authorizationKey?: string;

/**
   * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
   */
readonly expressRouteCircuitPeering?: SubResource;

/**
   * IPv6 Address PrefixProperties of the express route circuit connection.
   */
readonly ipv6CircuitConnectionConfig?: Ipv6CircuitConnectionConfig;

/**
   * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
   */
readonly peerExpressRouteCircuitPeering?: SubResource;

/**
   * /125 IP address space to carve out customer addresses for global reach.
   */
readonly addressPrefix?: string;

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
   * The Primary BytesIn of the peering.
   */
readonly primarybytesIn?: number;

/**
   * The primary BytesOut of the peering.
   */
readonly primarybytesOut?: number;

/**
   * The secondary BytesIn of the peering.
   */
readonly secondarybytesIn?: number;

/**
   * The secondary BytesOut of the peering.
   */
readonly secondarybytesOut?: number;

/**
   * The BandwidthInMbps.
   */
readonly bandwidthInMbps?: number;

/**
   * The peering location.
   */
readonly peeringLocation?: string;

/**
   * The serviceProviderName.
   */
readonly serviceProviderName?: string;

/**
   * The family of the SKU.
   */
readonly family?: 'MeteredData''UnlimitedData';

/**
   * The tier of the SKU.
   */
readonly tier?: 'Basic''Local''Premium''Standard';
}

/**
 * NetworkExpressroutecircuits resource
 */
export class NetworkExpressroutecircuits extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkExpressroutecircuitsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/expressRouteCircuits@2023-04-01";
  }

  protected getResourceBody(props: NetworkExpressroutecircuitsProps): string {
    return JSON.stringify(
        {properties: {allowClassicOperations: "${bool}", authorizationKey: "string", authorizations: [{id: "string", name: "string", properties: {authorizationKey: "string", authorizationUseStatus: "string"}}], bandwidthInGbps: "${int}", circuitProvisioningState: "string", expressRoutePort: {id: "string"}, gatewayManagerEtag: "string", globalReachEnabled: "${bool}", peerings: [{id: "string", name: "string", properties: {azureASN: "${int}", connections: [{id: "string", name: "string", properties: {addressPrefix: "string", authorizationKey: "string", expressRouteCircuitPeering: {id: "string"}, ipv6CircuitConnectionConfig: {addressPrefix: "string"}, peerExpressRouteCircuitPeering: {id: "string"}}}], expressRouteConnection: {}, gatewayManagerEtag: "string", ipv6PeeringConfig: {microsoftPeeringConfig: {advertisedCommunities: ["string"], advertisedPublicPrefixes: ["string"], customerASN: "${int}", legacyMode: "${int}", routingRegistryName: "string"}, primaryPeerAddressPrefix: "string", routeFilter: {id: "string"}, secondaryPeerAddressPrefix: "string", state: "string"}, microsoftPeeringConfig: {advertisedCommunities: ["string"], advertisedPublicPrefixes: ["string"], customerASN: "${int}", legacyMode: "${int}", routingRegistryName: "string"}, peerASN: "${int}", peeringType: "string", primaryAzurePort: "string", primaryPeerAddressPrefix: "string", routeFilter: {id: "string"}, secondaryAzurePort: "string", secondaryPeerAddressPrefix: "string", sharedKey: "string", state: "string", stats: {primarybytesIn: "${int}", primarybytesOut: "${int}", secondarybytesIn: "${int}", secondarybytesOut: "${int}"}, vlanId: "${int}"}}], serviceKey: "string", serviceProviderNotes: "string", serviceProviderProperties: {bandwidthInMbps: "${int}", peeringLocation: "string", serviceProviderName: "string"}, serviceProviderProvisioningState: "string"}, sku: {family: "string", name: "string", tier: "string"}}
    );
  }
}
