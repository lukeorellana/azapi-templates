import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkP2SvpngatewaysProps extends IAzAPIBaseProps {
/**
   * List of all customer specified DNS servers IP addresses.
   */
readonly customDnsServers?: string[];

/**
   * Enable Routing Preference property for the Public IP Interface of the P2SVpnGateway.
   */
readonly isRoutingPreferenceInternet?: bool;

/**
   * List of all p2s connection configurations of the gateway.
   */
readonly p2SConnectionConfigurations?: P2SConnectionConfiguration[];

/**
   * The VirtualHub to which the gateway belongs.
   */
readonly virtualHub?: SubResource;

/**
   * The scale unit for this p2s vpn gateway.
   */
readonly vpnGatewayScaleUnit?: number;

/**
   * The VpnServerConfiguration to which the p2sVpnGateway is attached to.
   */
readonly vpnServerConfiguration?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * Flag indicating whether the enable internet security flag is turned on for the P2S Connections or not.
   */
readonly enableInternetSecurity?: bool;

/**
   * The Routing Configuration indicating the associated and propagated route tables on this connection.
   */
readonly routingConfiguration?: RoutingConfiguration;

/**
   * The reference to the address space resource which represents Address space for P2S VpnClient.
   */
readonly vpnClientAddressPool?: AddressSpace;

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
   * A list of address blocks reserved for this virtual network in CIDR notation.
   */
readonly addressPrefixes?: string[];
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
