import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualnetworkgatewaysProps extends IAzAPIBaseProps {
/**
   * The extended location of type local virtual network gateway.
   */
readonly extendedLocation?: ExtendedLocation;

/**
   * The type of the extended location.
   */
readonly type?: 'EdgeZone';

/**
   * ActiveActive flag.
   */
readonly activeActive?: bool;

/**
   * Property to indicate if the Express Route Gateway serves traffic when there are multiple Express Route Gateways in the vnet
   */
readonly adminState?: 'Disabled''Enabled';

/**
   * Configure this gateway to accept traffic from other Azure Virtual Networks. This configuration does not support connectivity to Azure Virtual WAN.
   */
readonly allowRemoteVnetTraffic?: bool;

/**
   * Configures this gateway to accept traffic from remote Virtual WAN networks.
   */
readonly allowVirtualWanTraffic?: bool;

/**
   * Virtual network gateway's BGP speaker settings.
   */
readonly bgpSettings?: BgpSettings;

/**
   * The reference to the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient.
   */
readonly customRoutes?: AddressSpace;

/**
   * disableIPSecReplayProtection flag.
   */
readonly disableIPSecReplayProtection?: bool;

/**
   * Whether BGP is enabled for this virtual network gateway or not.
   */
readonly enableBgp?: bool;

/**
   * EnableBgpRouteTranslationForNat flag.
   */
readonly enableBgpRouteTranslationForNat?: bool;

/**
   * Whether dns forwarding is enabled or not.
   */
readonly enableDnsForwarding?: bool;

/**
   * Whether private IP needs to be enabled on this gateway for connections or not.
   */
readonly enablePrivateIpAddress?: bool;

/**
   * The reference to the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
   */
readonly gatewayDefaultSite?: SubResource;

/**
   * The type of this virtual network gateway.
   */
readonly gatewayType?: 'ExpressRoute''LocalGateway''Vpn';

/**
   * IP configurations for virtual network gateway.
   */
readonly ipConfigurations?: VirtualNetworkGatewayIPConfiguration[];

/**
   * NatRules for virtual network gateway.
   */
readonly natRules?: VirtualNetworkGatewayNatRule[];

/**
   * The reference to the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
   */
readonly sku?: VirtualNetworkGatewaySku;

/**
   * The reference to the VirtualNetworkGatewayPolicyGroup resource which represents the available VirtualNetworkGatewayPolicyGroup for the gateway.
   */
readonly virtualNetworkGatewayPolicyGroups?: VirtualNetworkGatewayPolicyGroup[];

/**
   * Customer vnet resource id. VirtualNetworkGateway of type local gateway is associated with the customer vnet.
   */
readonly vNetExtendedLocationResourceId?: string;

/**
   * The reference to the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
   */
readonly vpnClientConfiguration?: VpnClientConfiguration;

/**
   * The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
   */
readonly vpnGatewayGeneration?: 'Generation1''Generation2''None';

/**
   * The type of this virtual network gateway.
   */
readonly vpnType?: 'PolicyBased''RouteBased';

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
   * A list of address blocks reserved for this virtual network in CIDR notation.
   */
readonly addressPrefixes?: string[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The private IP address allocation method.
   */
readonly privateIPAllocationMethod?: 'Dynamic''Static';

/**
   * The reference to the public IP resource.
   */
readonly publicIPAddress?: SubResource;

/**
   * The reference to the subnet resource.
   */
readonly subnet?: SubResource;

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

/**
   * Gateway SKU tier.
   */
readonly tier?: 'Basic''ErGw1AZ''ErGw2AZ''ErGw3AZ''HighPerformance''Standard''UltraPerformance''VpnGw1''VpnGw1AZ''VpnGw2''VpnGw2AZ''VpnGw3''VpnGw3AZ''VpnGw4''VpnGw4AZ''VpnGw5''VpnGw5AZ';

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Shows if this is a Default VirtualNetworkGatewayPolicyGroup or not.
   */
readonly isDefault: bool;

/**
   * Multiple PolicyMembers for VirtualNetworkGatewayPolicyGroup.
   */
readonly policyMembers: VirtualNetworkGatewayPolicyGroupMember[];

/**
   * Priority for VirtualNetworkGatewayPolicyGroup.
   */
readonly priority: number;

/**
   * The Vpn Policy member attribute type.
   */
readonly attributeType?: 'AADGroupId''CertificateGroupId''RadiusAzureGroupId';

/**
   * The value of Attribute used for this VirtualNetworkGatewayPolicyGroupMember.
   */
readonly attributeValue?: string;

/**
   * The AADAudience property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
   */
readonly aadAudience?: string;

/**
   * The AADIssuer property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
   */
readonly aadIssuer?: string;

/**
   * The AADTenant property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication.
   */
readonly aadTenant?: string;

/**
   * The radius server address property of the VirtualNetworkGateway resource for vpn client connection.
   */
readonly radiusServerAddress?: string;

/**
   * The radiusServers property for multiple radius server configuration.
   */
readonly radiusServers?: RadiusServer[];

/**
   * The radius secret property of the VirtualNetworkGateway resource for vpn client connection.
   */
readonly radiusServerSecret?: string;

/**
   * per ip address pool connection policy for virtual network gateway P2S client.
   */
readonly vngClientConnectionConfigurations?: VngClientConnectionConfiguration[];

/**
   * VPN authentication types for the virtual network gateway..
   */
readonly vpnAuthenticationTypes?: String array containing any of:'AAD''Certificate''Radius';

/**
   * The reference to the address space resource which represents Address space for P2S VpnClient.
   */
readonly vpnClientAddressPool?: AddressSpace;

/**
   * VpnClientIpsecPolicies for virtual network gateway P2S client.
   */
readonly vpnClientIpsecPolicies?: IpsecPolicy[];

/**
   * VpnClientProtocols for Virtual network gateway.
   */
readonly vpnClientProtocols?: String array containing any of:'IkeV2''OpenVPN''SSTP';

/**
   * VpnClientRevokedCertificate for Virtual network gateway.
   */
readonly vpnClientRevokedCertificates?: VpnClientRevokedCertificate[];

/**
   * VpnClientRootCertificate for virtual network gateway.
   */
readonly vpnClientRootCertificates?: VpnClientRootCertificate[];

/**
   * The address of this radius server.
   */
readonly radiusServerAddress: string;

/**
   * The initial score assigned to this radius server.
   */
readonly radiusServerScore?: number;

/**
   * The secret used for this radius server.
   */
readonly radiusServerSecret?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * List of references to virtualNetworkGatewayPolicyGroups
   */
readonly virtualNetworkGatewayPolicyGroups: SubResource[];

/**
   * The reference to the address space resource which represents Address space for P2S VpnClient.
   */
readonly vpnClientAddressPool: AddressSpace;

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
   * The revoked VPN client certificate thumbprint.
   */
readonly thumbprint?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The certificate public data.
   */
readonly publicCertData: string;
}

/**
 * NetworkVirtualnetworkgateways resource
 */
export class NetworkVirtualnetworkgateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualnetworkgatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualNetworkGateways@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualnetworkgatewaysProps): string {
    return JSON.stringify(
        {properties: {activeActive: "${bool}", adminState: "string", allowRemoteVnetTraffic: "${bool}", allowVirtualWanTraffic: "${bool}", bgpSettings: {asn: "${int}", bgpPeeringAddress: "string", bgpPeeringAddresses: [{customBgpIpAddresses: ["string"], ipconfigurationId: "string"}], peerWeight: "${int}"}, customRoutes: {addressPrefixes: ["string"]}, disableIPSecReplayProtection: "${bool}", enableBgp: "${bool}", enableBgpRouteTranslationForNat: "${bool}", enableDnsForwarding: "${bool}", enablePrivateIpAddress: "${bool}", gatewayDefaultSite: {id: "string"}, gatewayType: "string", ipConfigurations: [{id: "string", name: "string", properties: {privateIPAllocationMethod: "string", publicIPAddress: {id: "string"}, subnet: {id: "string"}}}], natRules: [{id: "string", name: "string", properties: {externalMappings: [{addressSpace: "string", portRange: "string"}], internalMappings: [{addressSpace: "string", portRange: "string"}], ipConfigurationId: "string", mode: "string", type: "string"}}], sku: {name: "string", tier: "string"}, virtualNetworkGatewayPolicyGroups: [{id: "string", name: "string", properties: {isDefault: "${bool}", policyMembers: [{attributeType: "string", attributeValue: "string", name: "string"}], priority: "${int}"}}], vNetExtendedLocationResourceId: "string", vpnClientConfiguration: {aadAudience: "string", aadIssuer: "string", aadTenant: "string", radiusServerAddress: "string", radiusServers: [{radiusServerAddress: "string", radiusServerScore: "${int}", radiusServerSecret: "string"}], radiusServerSecret: "string", vngClientConnectionConfigurations: [{id: "string", name: "string", properties: {virtualNetworkGatewayPolicyGroups: [{id: "string"}], vpnClientAddressPool: {addressPrefixes: ["string"]}}}], vpnAuthenticationTypes: ["string"], vpnClientAddressPool: {addressPrefixes: ["string"]}, vpnClientIpsecPolicies: [{dhGroup: "string", ikeEncryption: "string", ikeIntegrity: "string", ipsecEncryption: "string", ipsecIntegrity: "string", pfsGroup: "string", saDataSizeKilobytes: "${int}", saLifeTimeSeconds: "${int}"}], vpnClientProtocols: ["string"], vpnClientRevokedCertificates: [{id: "string", name: "string", properties: {thumbprint: "string"}}], vpnClientRootCertificates: [{id: "string", name: "string", properties: {publicCertData: "string"}}]}, vpnGatewayGeneration: "string", vpnType: "string"}, extendedLocation: {name: "string", type: "EdgeZone"}}
    );
  }
}
