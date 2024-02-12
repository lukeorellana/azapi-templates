import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PeeringPeeringsProps extends IAzAPIBaseProps {
/**
   * The SKU that defines the tier and kind of the peering.
   */
readonly sku: PeeringSku;

/**
   * The kind of the peering.
   */
readonly kind: 'Direct''Exchange';

/**
   * The properties that define a direct peering.
   */
readonly direct?: PeeringPropertiesDirect;

/**
   * The properties that define an exchange peering.
   */
readonly exchange?: PeeringPropertiesExchange;

/**
   * The location of the peering.
   */
readonly peeringLocation?: string;

/**
   * The set of connections that constitute a direct peering.
   */
readonly connections?: DirectConnection[];

/**
   * The type of direct peering.
   */
readonly directPeeringType?: 'Cdn''Edge''EdgeZoneForOperators''Internal''Ix''IxRs''Transit''Voice';

/**
   * The reference of the peer ASN.
   */
readonly peerAsn?: SubResource;

/**
   * The bandwidth of the connection.
   */
readonly bandwidthInMbps?: number;

/**
   * The BGP session associated with the connection.
   */
readonly bgpSession?: BgpSession;

/**
   * The unique identifier (GUID) for the connection.
   */
readonly connectionIdentifier?: string;

/**
   * The PeeringDB.com ID of the facility at which the connection has to be set up.
   */
readonly peeringDBFacilityId?: number;

/**
   * The field indicating if Microsoft provides session ip addresses.
   */
readonly sessionAddressProvider?: 'Microsoft''Peer';

/**
   * The flag that indicates whether or not the connection is used for peering service.
   */
readonly useForPeeringService?: bool;

/**
   * The maximum number of prefixes advertised over the IPv4 session.
   */
readonly maxPrefixesAdvertisedV4?: number;

/**
   * The maximum number of prefixes advertised over the IPv6 session.
   */
readonly maxPrefixesAdvertisedV6?: number;

/**
   * The MD5 authentication key of the session.
   */
readonly md5AuthenticationKey?: string;

/**
   * The IPv4 session address on Microsoft's end.
   */
readonly microsoftSessionIPv4Address?: string;

/**
   * The IPv6 session address on Microsoft's end.
   */
readonly microsoftSessionIPv6Address?: string;

/**
   * The IPv4 session address on peer's end.
   */
readonly peerSessionIPv4Address?: string;

/**
   * The IPv6 session address on peer's end.
   */
readonly peerSessionIPv6Address?: string;

/**
   * The IPv4 prefix that contains both ends' IPv4 addresses.
   */
readonly sessionPrefixV4?: string;

/**
   * The IPv6 prefix that contains both ends' IPv6 addresses.
   */
readonly sessionPrefixV6?: string;

/**
   * The identifier of the referenced resource.
   */
readonly id?: string;

/**
   * The set of connections that constitute an exchange peering.
   */
readonly connections?: ExchangeConnection[];

/**
   * The reference of the peer ASN.
   */
readonly peerAsn?: SubResource;

/**
   * The BGP session associated with the connection.
   */
readonly bgpSession?: BgpSession;

/**
   * The unique identifier (GUID) for the connection.
   */
readonly connectionIdentifier?: string;

/**
   * The PeeringDB.com ID of the facility at which the connection has to be set up.
   */
readonly peeringDBFacilityId?: number;
}

/**
 * PeeringPeerings resource
 */
export class PeeringPeerings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PeeringPeeringsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Peering/peerings@2022-10-01";
  }

  protected getResourceBody(props: PeeringPeeringsProps): string {
    return JSON.stringify(
        {properties: {direct: {connections: [{bandwidthInMbps: "${int}", bgpSession: {maxPrefixesAdvertisedV4: "${int}", maxPrefixesAdvertisedV6: "${int}", md5AuthenticationKey: "string", microsoftSessionIPv4Address: "string", microsoftSessionIPv6Address: "string", peerSessionIPv4Address: "string", peerSessionIPv6Address: "string", sessionPrefixV4: "string", sessionPrefixV6: "string"}, connectionIdentifier: "string", peeringDBFacilityId: "${int}", sessionAddressProvider: "string", useForPeeringService: "${bool}"}], directPeeringType: "string", peerAsn: {id: "string"}}, exchange: {connections: [{bgpSession: {maxPrefixesAdvertisedV4: "${int}", maxPrefixesAdvertisedV6: "${int}", md5AuthenticationKey: "string", microsoftSessionIPv4Address: "string", microsoftSessionIPv6Address: "string", peerSessionIPv4Address: "string", peerSessionIPv6Address: "string", sessionPrefixV4: "string", sessionPrefixV6: "string"}, connectionIdentifier: "string", peeringDBFacilityId: "${int}"}], peerAsn: {id: "string"}}, peeringLocation: "string"}, sku: {name: "string"}, kind: "string"}
    );
  }
}
