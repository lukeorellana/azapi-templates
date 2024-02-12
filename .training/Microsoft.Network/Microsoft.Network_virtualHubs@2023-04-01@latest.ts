import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualhubsProps extends IAzAPIBaseProps {

}

/**
 * NetworkVirtualhubs resource
 */
export class NetworkVirtualhubs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualhubsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualHubs@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualhubsProps): string {
    return JSON.stringify(
        {properties: {addressPrefix: "string", allowBranchToBranchTraffic: "${bool}", azureFirewall: {id: "string"}, expressRouteGateway: {id: "string"}, hubRoutingPreference: "string", p2SVpnGateway: {id: "string"}, preferredRoutingGateway: "string", routeTable: {routes: [{addressPrefixes: ["string"], nextHopIpAddress: "string"}]}, securityPartnerProvider: {id: "string"}, securityProviderName: "string", sku: "string", virtualHubRouteTableV2s: [{id: "string", name: "string", properties: {attachedConnections: ["string"], routes: [{destinations: ["string"], destinationType: "string", nextHops: ["string"], nextHopType: "string"}]}}], virtualRouterAsn: "${int}", virtualRouterAutoScaleConfiguration: {minCapacity: "${int}"}, virtualRouterIps: ["string"], virtualWan: {id: "string"}, vpnGateway: {id: "string"}}}
    );
  }
}
