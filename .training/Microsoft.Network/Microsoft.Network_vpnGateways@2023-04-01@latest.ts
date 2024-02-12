import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVpngatewaysProps extends IAzAPIBaseProps {

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
