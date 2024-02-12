import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkLocalnetworkgatewaysProps extends IAzAPIBaseProps {
/**
   * Local network gateway's BGP speaker settings.
   */
readonly bgpSettings?: BgpSettings;

/**
   * FQDN of local network gateway.
   */
readonly fqdn?: string;

/**
   * IP address of local network gateway.
   */
readonly gatewayIpAddress?: string;

/**
   * Local network site address space.
   */
readonly localNetworkAddressSpace?: AddressSpace;

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
}

/**
 * NetworkLocalnetworkgateways resource
 */
export class NetworkLocalnetworkgateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkLocalnetworkgatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/localNetworkGateways@2023-04-01";
  }

  protected getResourceBody(props: NetworkLocalnetworkgatewaysProps): string {
    return JSON.stringify(
        {properties: {bgpSettings: {asn: "${int}", bgpPeeringAddress: "string", bgpPeeringAddresses: [{customBgpIpAddresses: ["string"], ipconfigurationId: "string"}], peerWeight: "${int}"}, fqdn: "string", gatewayIpAddress: "string", localNetworkAddressSpace: {addressPrefixes: ["string"]}}}
    );
  }
}
