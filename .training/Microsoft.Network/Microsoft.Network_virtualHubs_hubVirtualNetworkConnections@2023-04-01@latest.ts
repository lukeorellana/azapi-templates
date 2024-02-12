import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualhubsHubvirtualnetworkconnectionsProps extends IAzAPIBaseProps {

}

/**
 * NetworkVirtualhubsHubvirtualnetworkconnections resource
 */
export class NetworkVirtualhubsHubvirtualnetworkconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualhubsHubvirtualnetworkconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualhubsHubvirtualnetworkconnectionsProps): string {
    return JSON.stringify(
        {properties: {allowHubToRemoteVnetTransit: "${bool}", allowRemoteVnetToUseHubVnetGateways: "${bool}", enableInternetSecurity: "${bool}", remoteVirtualNetwork: {id: "string"}, routingConfiguration: {associatedRouteTable: {id: "string"}, inboundRouteMap: {id: "string"}, outboundRouteMap: {id: "string"}, propagatedRouteTables: {ids: [{id: "string"}], labels: ["string"]}, vnetRoutes: {staticRoutes: [{addressPrefixes: ["string"], name: "string", nextHopIpAddress: "string"}], staticRoutesConfig: {vnetLocalRouteOverrideCriteria: "string"}}}}}
    );
  }
}
