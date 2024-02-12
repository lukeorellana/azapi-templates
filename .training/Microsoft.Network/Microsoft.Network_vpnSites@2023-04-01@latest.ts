import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVpnsitesProps extends IAzAPIBaseProps {

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
