import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualnetworkgatewaysProps extends IAzAPIBaseProps {

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
