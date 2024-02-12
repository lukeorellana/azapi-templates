import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkP2SvpngatewaysProps extends IAzAPIBaseProps {

}

/**
 * NetworkP2Svpngateways resource
 */
export class NetworkP2Svpngateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkP2SvpngatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/p2svpnGateways@2023-04-01";
  }

  protected getResourceBody(props: NetworkP2SvpngatewaysProps): string {
    return JSON.stringify(
        {properties: {customDnsServers: ["string"], isRoutingPreferenceInternet: "${bool}", p2SConnectionConfigurations: [{id: "string", name: "string", properties: {enableInternetSecurity: "${bool}", routingConfiguration: {associatedRouteTable: {id: "string"}, inboundRouteMap: {id: "string"}, outboundRouteMap: {id: "string"}, propagatedRouteTables: {ids: [{id: "string"}], labels: ["string"]}, vnetRoutes: {staticRoutes: [{addressPrefixes: ["string"], name: "string", nextHopIpAddress: "string"}], staticRoutesConfig: {vnetLocalRouteOverrideCriteria: "string"}}}, vpnClientAddressPool: {addressPrefixes: ["string"]}}}], virtualHub: {id: "string"}, vpnGatewayScaleUnit: "${int}", vpnServerConfiguration: {id: "string"}}}
    );
  }
}
