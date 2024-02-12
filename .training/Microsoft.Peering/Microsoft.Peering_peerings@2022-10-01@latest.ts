import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PeeringPeeringsProps extends IAzAPIBaseProps {

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
