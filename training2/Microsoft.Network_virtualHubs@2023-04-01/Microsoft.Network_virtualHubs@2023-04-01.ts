import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualhubsProps extends IAzAPIBaseProps {
/**
   * Address-prefix for this VirtualHub.
   */
readonly addressPrefix?: string;

/**
   * Flag to control transit for VirtualRouter hub.
   */
readonly allowBranchToBranchTraffic?: bool;

/**
   * The azureFirewall associated with this VirtualHub.
   */
readonly azureFirewall?: SubResource;

/**
   * The expressRouteGateway associated with this VirtualHub.
   */
readonly expressRouteGateway?: SubResource;

/**
   * The hubRoutingPreference of this VirtualHub.
   */
readonly hubRoutingPreference?: 'ASPath''ExpressRoute''VpnGateway';

/**
   * The P2SVpnGateway associated with this VirtualHub.
   */
readonly p2SVpnGateway?: SubResource;

/**
   * The preferred gateway to route on-prem traffic
   */
readonly preferredRoutingGateway?: 'ExpressRoute''None''VpnGateway';

/**
   * The routeTable associated with this virtual hub.
   */
readonly routeTable?: VirtualHubRouteTable;

/**
   * The securityPartnerProvider associated with this VirtualHub.
   */
readonly securityPartnerProvider?: SubResource;

/**
   * The Security Provider name.
   */
readonly securityProviderName?: string;

/**
   * The sku of this VirtualHub.
   */
readonly sku?: string;

/**
   * List of all virtual hub route table v2s associated with this VirtualHub.
   */
readonly virtualHubRouteTableV2s?: VirtualHubRouteTableV2[];

/**
   * VirtualRouter ASN.
   */
readonly virtualRouterAsn?: number;

/**
   * The VirtualHub Router autoscale configuration.
   */
readonly virtualRouterAutoScaleConfiguration?: VirtualRouterAutoScaleConfiguration;

/**
   * VirtualRouter IPs.
   */
readonly virtualRouterIps?: string[];

/**
   * The VirtualWAN to which the VirtualHub belongs.
   */
readonly virtualWan?: SubResource;

/**
   * The VpnGateway associated with this VirtualHub.
   */
readonly vpnGateway?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * List of all routes.
   */
readonly routes?: VirtualHubRoute[];

/**
   * List of all addressPrefixes.
   */
readonly addressPrefixes?: string[];

/**
   * NextHop ip address.
   */
readonly nextHopIpAddress?: string;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * List of all connections attached to this route table v2.
   */
readonly attachedConnections?: string[];

/**
   * List of all routes.
   */
readonly routes?: VirtualHubRouteV2[];

/**
   * List of all destinations.
   */
readonly destinations?: string[];

/**
   * The type of destinations.
   */
readonly destinationType?: string;

/**
   * NextHops ip address.
   */
readonly nextHops?: string[];

/**
   * The type of next hops.
   */
readonly nextHopType?: string;

/**
   * The minimum number of scale units for VirtualHub Router.
   */
readonly minCapacity?: number;
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
