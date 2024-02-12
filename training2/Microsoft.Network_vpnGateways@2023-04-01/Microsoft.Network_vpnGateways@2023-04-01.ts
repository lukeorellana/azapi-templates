import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVpngatewaysProps extends IAzAPIBaseProps {
/**
   * Local network gateway's BGP speaker settings.
   */
readonly bgpSettings?: BgpSettings;

/**
   * List of all vpn connections to the gateway.
   */
readonly connections?: VpnConnection[];

/**
   * Enable BGP routes translation for NAT on this VpnGateway.
   */
readonly enableBgpRouteTranslationForNat?: bool;

/**
   * Enable Routing Preference property for the Public IP Interface of the VpnGateway.
   */
readonly isRoutingPreferenceInternet?: bool;

/**
   * List of all the nat Rules associated with the gateway.
   */
readonly natRules?: VpnGatewayNatRule[];

/**
   * The VirtualHub to which the gateway belongs.
   */
readonly virtualHub?: SubResource;

/**
   * The scale unit for this vpn gateway.
   */
readonly vpnGatewayScaleUnit?: number;

/**
   * The BGP speaker's ASN.
   */
readonly asn?: number;

/**
   * The BGP peering address and BGP identifier of this BGP speaker.
   */
readonly bgpPeeringAddress?: string;

/**
   * BGP peering address with IP configuration ID for virtual network gateway.
   */
readonly bgpPeeringAddresses?: IPConfigurationBgpPeeringAddress[];

/**
   * The weight added to routes learned from this BGP speaker.
   */
readonly peerWeight?: number;

/**
   * The list of custom BGP peering addresses which belong to IP configuration.
   */
readonly customBgpIpAddresses?: string[];

/**
   * The ID of IP configuration which belongs to gateway.
   */
readonly ipconfigurationId?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Expected bandwidth in MBPS.
   */
readonly connectionBandwidth?: number;

/**
   * DPD timeout in seconds for vpn connection.
   */
readonly dpdTimeoutSeconds?: number;

/**
   * EnableBgp flag.
   */
readonly enableBgp?: bool;

/**
   * Enable internet security.
   */
readonly enableInternetSecurity?: bool;

/**
   * EnableBgp flag.
   */
readonly enableRateLimiting?: bool;

/**
   * The IPSec Policies to be considered by this connection.
   */
readonly ipsecPolicies?: IpsecPolicy[];

/**
   * Id of the connected vpn site.
   */
readonly remoteVpnSite?: SubResource;

/**
   * The Routing Configuration indicating the associated and propagated route tables on this connection.
   */
readonly routingConfiguration?: RoutingConfiguration;

/**
   * Routing weight for vpn connection.
   */
readonly routingWeight?: number;

/**
   * SharedKey for the vpn connection.
   */
readonly sharedKey?: string;

/**
   * The Traffic Selector Policies to be considered by this connection.
   */
readonly trafficSelectorPolicies?: TrafficSelectorPolicy[];

/**
   * Use local azure ip to initiate connection.
   */
readonly useLocalAzureIpAddress?: bool;

/**
   * Enable policy-based traffic selectors.
   */
readonly usePolicyBasedTrafficSelectors?: bool;

/**
   * Connection protocol used for this connection.
   */
readonly vpnConnectionProtocolType?: 'IKEv1''IKEv2';

/**
   * List of all vpn site link connections to the gateway.
   */
readonly vpnLinkConnections?: VpnSiteLinkConnection[];

/**
   * The DH Group used in IKE Phase 1 for initial SA.
   */
readonly dhGroup: 'DHGroup1''DHGroup14''DHGroup2''DHGroup2048''DHGroup24''ECP256''ECP384''None';

/**
   * The IKE encryption algorithm (IKE phase 2).
   */
readonly ikeEncryption: 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES256';

/**
   * The IKE integrity algorithm (IKE phase 2).
   */
readonly ikeIntegrity: 'GCMAES128''GCMAES256''MD5''SHA1''SHA256''SHA384';

/**
   * The IPSec encryption algorithm (IKE phase 1).
   */
readonly ipsecEncryption: 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES192''GCMAES256''None';

/**
   * The IPSec integrity algorithm (IKE phase 1).
   */
readonly ipsecIntegrity: 'GCMAES128''GCMAES192''GCMAES256''MD5''SHA1''SHA256';

/**
   * The Pfs Group used in IKE Phase 2 for new child SA.
   */
readonly pfsGroup: 'ECP256''ECP384''None''PFS1''PFS14''PFS2''PFS2048''PFS24''PFSMM';

/**
   * The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel.
   */
readonly saDataSizeKilobytes: number;

/**
   * The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel.
   */
readonly saLifeTimeSeconds: number;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The resource id RouteTable associated with this RoutingConfiguration.
   */
readonly associatedRouteTable?: SubResource;

/**
   * The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes.
   */
readonly inboundRouteMap?: SubResource;

/**
   * The resource id of theRouteMap associated with this RoutingConfiguration for outbound advertised routes.
   */
readonly outboundRouteMap?: SubResource;

/**
   * The list of RouteTables to advertise the routes to.
   */
readonly propagatedRouteTables?: PropagatedRouteTable;

/**
   * List of routes that control routing from VirtualHub into a virtual network connection.
   */
readonly vnetRoutes?: VnetRoute;

/**
   * The list of resource ids of all the RouteTables.
   */
readonly ids?: SubResource[];

/**
   * The list of labels.
   */
readonly labels?: string[];

/**
   * List of all Static Routes.
   */
readonly staticRoutes?: StaticRoute[];

/**
   * Configuration for static routes on this HubVnetConnection.
   */
readonly staticRoutesConfig?: StaticRoutesConfig;

/**
   * List of all address prefixes.
   */
readonly addressPrefixes?: string[];

/**
   * The ip address of the next hop.
   */
readonly nextHopIpAddress?: string;

/**
   * Parameter determining whether NVA in spoke vnet is bypassed for traffic with destination in spoke.
   */
readonly vnetLocalRouteOverrideCriteria?: 'Contains''Equal';

/**
   * A collection of local address spaces in CIDR format.
   */
readonly localAddressRanges: string[];

/**
   * A collection of remote address spaces in CIDR format.
   */
readonly remoteAddressRanges: string[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Expected bandwidth in MBPS.
   */
readonly connectionBandwidth?: number;

/**
   * List of egress NatRules.
   */
readonly egressNatRules?: SubResource[];

/**
   * EnableBgp flag.
   */
readonly enableBgp?: bool;

/**
   * EnableBgp flag.
   */
readonly enableRateLimiting?: bool;

/**
   * List of ingress NatRules.
   */
readonly ingressNatRules?: SubResource[];

/**
   * The IPSec Policies to be considered by this connection.
   */
readonly ipsecPolicies?: IpsecPolicy[];

/**
   * Routing weight for vpn connection.
   */
readonly routingWeight?: number;

/**
   * SharedKey for the vpn connection.
   */
readonly sharedKey?: string;

/**
   * Use local azure ip to initiate connection.
   */
readonly useLocalAzureIpAddress?: bool;

/**
   * Enable policy-based traffic selectors.
   */
readonly usePolicyBasedTrafficSelectors?: bool;

/**
   * Connection protocol used for this connection.
   */
readonly vpnConnectionProtocolType?: 'IKEv1''IKEv2';

/**
   * vpnGatewayCustomBgpAddresses used by this connection.
   */
readonly vpnGatewayCustomBgpAddresses?: GatewayCustomBgpIpAddressIpConfiguration[];

/**
   * Vpn link connection mode.
   */
readonly vpnLinkConnectionMode?: 'Default''InitiatorOnly''ResponderOnly';

/**
   * Id of the connected vpn site link.
   */
readonly vpnSiteLink?: SubResource;

/**
   * The custom BgpPeeringAddress which belongs to IpconfigurationId.
   */
readonly customBgpIpAddress: string;

/**
   * The IpconfigurationId of ipconfiguration which belongs to gateway.
   */
readonly ipConfigurationId: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The private IP address external mapping for NAT.
   */
readonly externalMappings?: VpnNatRuleMapping[];

/**
   * The private IP address internal mapping for NAT.
   */
readonly internalMappings?: VpnNatRuleMapping[];

/**
   * The IP Configuration ID this NAT rule applies to.
   */
readonly ipConfigurationId?: string;

/**
   * The Source NAT direction of a VPN NAT.
   */
readonly mode?: 'EgressSnat''IngressSnat';

/**
   * The type of NAT rule for VPN NAT.
   */
readonly type?: 'Dynamic''Static';

/**
   * Address space for Vpn NatRule mapping.
   */
readonly addressSpace?: string;

/**
   * Port range for Vpn NatRule mapping.
   */
readonly portRange?: string;
}

/**
 * NetworkVpngateways resource
 */
export class NetworkVpngateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVpngatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/vpnGateways@2023-04-01";
  }

  protected getResourceBody(props: NetworkVpngatewaysProps): string {
    return JSON.stringify(
        {properties: {bgpSettings: {asn: "${int}", bgpPeeringAddress: "string", bgpPeeringAddresses: [{customBgpIpAddresses: ["string"], ipconfigurationId: "string"}], peerWeight: "${int}"}, connections: [{id: "string", name: "string", properties: {connectionBandwidth: "${int}", dpdTimeoutSeconds: "${int}", enableBgp: "${bool}", enableInternetSecurity: "${bool}", enableRateLimiting: "${bool}", ipsecPolicies: [{dhGroup: "string", ikeEncryption: "string", ikeIntegrity: "string", ipsecEncryption: "string", ipsecIntegrity: "string", pfsGroup: "string", saDataSizeKilobytes: "${int}", saLifeTimeSeconds: "${int}"}], remoteVpnSite: {id: "string"}, routingConfiguration: {associatedRouteTable: {id: "string"}, inboundRouteMap: {id: "string"}, outboundRouteMap: {id: "string"}, propagatedRouteTables: {ids: [{id: "string"}], labels: ["string"]}, vnetRoutes: {staticRoutes: [{addressPrefixes: ["string"], name: "string", nextHopIpAddress: "string"}], staticRoutesConfig: {vnetLocalRouteOverrideCriteria: "string"}}}, routingWeight: "${int}", sharedKey: "string", trafficSelectorPolicies: [{localAddressRanges: ["string"], remoteAddressRanges: ["string"]}], useLocalAzureIpAddress: "${bool}", usePolicyBasedTrafficSelectors: "${bool}", vpnConnectionProtocolType: "string", vpnLinkConnections: [{id: "string", name: "string", properties: {connectionBandwidth: "${int}", egressNatRules: [{id: "string"}], enableBgp: "${bool}", enableRateLimiting: "${bool}", ingressNatRules: [{id: "string"}], ipsecPolicies: [{dhGroup: "string", ikeEncryption: "string", ikeIntegrity: "string", ipsecEncryption: "string", ipsecIntegrity: "string", pfsGroup: "string", saDataSizeKilobytes: "${int}", saLifeTimeSeconds: "${int}"}], routingWeight: "${int}", sharedKey: "string", useLocalAzureIpAddress: "${bool}", usePolicyBasedTrafficSelectors: "${bool}", vpnConnectionProtocolType: "string", vpnGatewayCustomBgpAddresses: [{customBgpIpAddress: "string", ipConfigurationId: "string"}], vpnLinkConnectionMode: "string", vpnSiteLink: {id: "string"}}}]}}], enableBgpRouteTranslationForNat: "${bool}", isRoutingPreferenceInternet: "${bool}", natRules: [{id: "string", name: "string", properties: {externalMappings: [{addressSpace: "string", portRange: "string"}], internalMappings: [{addressSpace: "string", portRange: "string"}], ipConfigurationId: "string", mode: "string", type: "string"}}], virtualHub: {id: "string"}, vpnGatewayScaleUnit: "${int}"}}
    );
  }
}
