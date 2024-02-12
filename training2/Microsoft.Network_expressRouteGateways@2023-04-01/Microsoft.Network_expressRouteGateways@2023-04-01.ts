import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressroutegatewaysProps extends IAzAPIBaseProps {
/**
   * Configures this gateway to accept traffic from non Virtual WAN networks.
   */
readonly allowNonVirtualWanTraffic?: bool;

/**
   * Configuration for auto scaling.
   */
readonly autoScaleConfiguration?: ExpressRouteGatewayPropertiesAutoScaleConfiguration;

/**
   * List of ExpressRoute connections to the ExpressRoute gateway.
   */
readonly expressRouteConnections?: ExpressRouteConnection[];

/**
   * The Virtual Hub where the ExpressRoute gateway is or will be deployed.
   */
readonly virtualHub: VirtualHubId;

/**
   * Minimum and maximum number of scale units to deploy.
   */
readonly bounds?: ExpressRouteGatewayPropertiesAutoScaleConfigurationB...;

/**
   * Maximum number of scale units deployed for ExpressRoute gateway.
   */
readonly max?: number;

/**
   * Minimum number of scale units deployed for ExpressRoute gateway.
   */
readonly min?: number;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Authorization key to establish the connection.
   */
readonly authorizationKey?: string;

/**
   * Enable internet security.
   */
readonly enableInternetSecurity?: bool;

/**
   * Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled.
   */
readonly enablePrivateLinkFastPath?: bool;

/**
   * The ExpressRoute circuit peering.
   */
readonly expressRouteCircuitPeering: ExpressRouteCircuitPeeringId;

/**
   * Enable FastPath to vWan Firewall hub.
   */
readonly expressRouteGatewayBypass?: bool;

/**
   * The Routing Configuration indicating the associated and propagated route tables on this connection.
   */
readonly routingConfiguration?: RoutingConfiguration;

/**
   * The routing weight associated to the connection.
   */
readonly routingWeight?: number;

/**
   * The ID of the ExpressRoute circuit peering.
   */
readonly id?: string;

/**
   * The resource id RouteTable associated with this RoutingConfiguration.
   */
readonly associatedRouteTable?: SubResource;

/**
   * The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes.
   */
readonly inboundRouteMap?: SubResource;

/**
   * The resource id of theRouteMap associated with this RoutingConfiguration for outbound advertised routes.
   */
readonly outboundRouteMap?: SubResource;

/**
   * The list of RouteTables to advertise the routes to.
   */
readonly propagatedRouteTables?: PropagatedRouteTable;

/**
   * List of routes that control routing from VirtualHub into a virtual network connection.
   */
readonly vnetRoutes?: VnetRoute;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The list of resource ids of all the RouteTables.
   */
readonly ids?: SubResource[];

/**
   * The list of labels.
   */
readonly labels?: string[];

/**
   * List of all Static Routes.
   */
readonly staticRoutes?: StaticRoute[];

/**
   * Configuration for static routes on this HubVnetConnection.
   */
readonly staticRoutesConfig?: StaticRoutesConfig;

/**
   * List of all address prefixes.
   */
readonly addressPrefixes?: string[];

/**
   * The ip address of the next hop.
   */
readonly nextHopIpAddress?: string;

/**
   * Parameter determining whether NVA in spoke vnet is bypassed for traffic with destination in spoke.
   */
readonly vnetLocalRouteOverrideCriteria?: 'Contains''Equal';

/**
   * The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription.
   */
readonly id?: string;
}

/**
 * NetworkExpressroutegateways resource
 */
export class NetworkExpressroutegateways extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkExpressroutegatewaysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/expressRouteGateways@2023-04-01";
  }

  protected getResourceBody(props: NetworkExpressroutegatewaysProps): string {
    return JSON.stringify(
        {properties: {allowNonVirtualWanTraffic: "${bool}", autoScaleConfiguration: {bounds: {max: "${int}", min: "${int}"}}, expressRouteConnections: [{id: "string", name: "string", properties: {authorizationKey: "string", enableInternetSecurity: "${bool}", enablePrivateLinkFastPath: "${bool}", expressRouteCircuitPeering: {id: "string"}, expressRouteGatewayBypass: "${bool}", routingConfiguration: {associatedRouteTable: {id: "string"}, inboundRouteMap: {id: "string"}, outboundRouteMap: {id: "string"}, propagatedRouteTables: {ids: [{id: "string"}], labels: ["string"]}, vnetRoutes: {staticRoutes: [{addressPrefixes: ["string"], name: "string", nextHopIpAddress: "string"}], staticRoutesConfig: {vnetLocalRouteOverrideCriteria: "string"}}}, routingWeight: "${int}"}}], virtualHub: {id: "string"}}}
    );
  }
}
