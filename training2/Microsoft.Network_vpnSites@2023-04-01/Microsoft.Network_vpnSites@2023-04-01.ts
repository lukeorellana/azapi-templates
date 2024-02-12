import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVpnsitesProps extends IAzAPIBaseProps {
/**
   * The AddressSpace that contains an array of IP address ranges.
   */
readonly addressSpace?: AddressSpace;

/**
   * The set of bgp properties.
   */
readonly bgpProperties?: BgpSettings;

/**
   * The device properties.
   */
readonly deviceProperties?: DeviceProperties;

/**
   * The ip-address for the vpn-site.
   */
readonly ipAddress?: string;

/**
   * IsSecuritySite flag.
   */
readonly isSecuritySite?: bool;

/**
   * Office365 Policy.
   */
readonly o365Policy?: O365PolicyProperties;

/**
   * The key for vpn-site that can be used for connections.
   */
readonly siteKey?: string;

/**
   * The VirtualWAN to which the vpnSite belongs.
   */
readonly virtualWan?: SubResource;

/**
   * List of all vpn site links.
   */
readonly vpnSiteLinks?: VpnSiteLink[];

/**
   * A list of address blocks reserved for this virtual network in CIDR notation.
   */
readonly addressPrefixes?: string[];

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
   * Model of the device.
   */
readonly deviceModel?: string;

/**
   * Name of the device Vendor.
   */
readonly deviceVendor?: string;

/**
   * Link speed.
   */
readonly linkSpeedInMbps?: number;

/**
   * Office365 breakout categories.
   */
readonly breakOutCategories?: O365BreakOutCategoryPolicies;

/**
   * Flag to control allow category.
   */
readonly allow?: bool;

/**
   * Flag to control default category.
   */
readonly default?: bool;

/**
   * Flag to control optimize category.
   */
readonly optimize?: bool;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The set of bgp properties.
   */
readonly bgpProperties?: VpnLinkBgpSettings;

/**
   * FQDN of vpn-site-link.
   */
readonly fqdn?: string;

/**
   * The ip-address for the vpn-site-link.
   */
readonly ipAddress?: string;

/**
   * The link provider properties.
   */
readonly linkProperties?: VpnLinkProviderProperties;

/**
   * The BGP speaker's ASN.
   */
readonly asn?: number;

/**
   * The BGP peering address and BGP identifier of this BGP speaker.
   */
readonly bgpPeeringAddress?: string;

/**
   * Name of the link provider.
   */
readonly linkProviderName?: string;

/**
   * Link speed.
   */
readonly linkSpeedInMbps?: number;
}

/**
 * NetworkVpnsites resource
 */
export class NetworkVpnsites extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVpnsitesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/vpnSites@2023-04-01";
  }

  protected getResourceBody(props: NetworkVpnsitesProps): string {
    return JSON.stringify(
        {properties: {addressSpace: {addressPrefixes: ["string"]}, bgpProperties: {asn: "${int}", bgpPeeringAddress: "string", bgpPeeringAddresses: [{customBgpIpAddresses: ["string"], ipconfigurationId: "string"}], peerWeight: "${int}"}, deviceProperties: {deviceModel: "string", deviceVendor: "string", linkSpeedInMbps: "${int}"}, ipAddress: "string", isSecuritySite: "${bool}", o365Policy: {breakOutCategories: {allow: "${bool}", default: "${bool}", optimize: "${bool}"}}, siteKey: "string", virtualWan: {id: "string"}, vpnSiteLinks: [{id: "string", name: "string", properties: {bgpProperties: {asn: "${int}", bgpPeeringAddress: "string"}, fqdn: "string", ipAddress: "string", linkProperties: {linkProviderName: "string", linkSpeedInMbps: "${int}"}}}]}}
    );
  }
}
