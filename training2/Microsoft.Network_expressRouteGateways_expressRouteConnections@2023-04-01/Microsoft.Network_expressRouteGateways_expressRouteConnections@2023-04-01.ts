import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressroutegatewaysExpressrouteconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:expressRouteGateways;

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
}

/**
 * NetworkExpressroutegatewaysExpressrouteconnections resource
 */
export class NetworkExpressroutegatewaysExpressrouteconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkExpressroutegatewaysExpressrouteconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/expressRouteGateways/expressRouteConnections@2023-04-01";
  }

  protected getResourceBody(props: NetworkExpressroutegatewaysExpressrouteconnectionsProps): string {
    return JSON.stringify(
        {properties: {authorizationKey: "string", enableInternetSecurity: "${bool}", enablePrivateLinkFastPath: "${bool}", expressRouteCircuitPeering: {id: "string"}, expressRouteGatewayBypass: "${bool}", routingConfiguration: {associatedRouteTable: {id: "string"}, inboundRouteMap: {id: "string"}, outboundRouteMap: {id: "string"}, propagatedRouteTables: {ids: [{id: "string"}], labels: ["string"]}, vnetRoutes: {staticRoutes: [{addressPrefixes: ["string"], name: "string", nextHopIpAddress: "string"}], staticRoutesConfig: {vnetLocalRouteOverrideCriteria: "string"}}}, routingWeight: "${int}"}}
    );
  }
}
