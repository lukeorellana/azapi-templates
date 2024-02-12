import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVpngatewaysVpnconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vpnGateways;

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
}

/**
 * NetworkVpngatewaysVpnconnections resource
 */
export class NetworkVpngatewaysVpnconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVpngatewaysVpnconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/vpnGateways/vpnConnections@2023-04-01";
  }

  protected getResourceBody(props: NetworkVpngatewaysVpnconnectionsProps): string {
    return JSON.stringify(
        {properties: {connectionBandwidth: "${int}", dpdTimeoutSeconds: "${int}", enableBgp: "${bool}", enableInternetSecurity: "${bool}", enableRateLimiting: "${bool}", ipsecPolicies: [{dhGroup: "string", ikeEncryption: "string", ikeIntegrity: "string", ipsecEncryption: "string", ipsecIntegrity: "string", pfsGroup: "string", saDataSizeKilobytes: "${int}", saLifeTimeSeconds: "${int}"}], remoteVpnSite: {id: "string"}, routingConfiguration: {associatedRouteTable: {id: "string"}, inboundRouteMap: {id: "string"}, outboundRouteMap: {id: "string"}, propagatedRouteTables: {ids: [{id: "string"}], labels: ["string"]}, vnetRoutes: {staticRoutes: [{addressPrefixes: ["string"], name: "string", nextHopIpAddress: "string"}], staticRoutesConfig: {vnetLocalRouteOverrideCriteria: "string"}}}, routingWeight: "${int}", sharedKey: "string", trafficSelectorPolicies: [{localAddressRanges: ["string"], remoteAddressRanges: ["string"]}], useLocalAzureIpAddress: "${bool}", usePolicyBasedTrafficSelectors: "${bool}", vpnConnectionProtocolType: "string", vpnLinkConnections: [{id: "string", name: "string", properties: {connectionBandwidth: "${int}", egressNatRules: [{id: "string"}], enableBgp: "${bool}", enableRateLimiting: "${bool}", ingressNatRules: [{id: "string"}], ipsecPolicies: [{dhGroup: "string", ikeEncryption: "string", ikeIntegrity: "string", ipsecEncryption: "string", ipsecIntegrity: "string", pfsGroup: "string", saDataSizeKilobytes: "${int}", saLifeTimeSeconds: "${int}"}], routingWeight: "${int}", sharedKey: "string", useLocalAzureIpAddress: "${bool}", usePolicyBasedTrafficSelectors: "${bool}", vpnConnectionProtocolType: "string", vpnGatewayCustomBgpAddresses: [{customBgpIpAddress: "string", ipConfigurationId: "string"}], vpnLinkConnectionMode: "string", vpnSiteLink: {id: "string"}}}]}}
    );
  }
}
