import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressroutecircuitsPeeringsConnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:peerings;

/**
   * /29 IP address space to carve out Customer addresses for tunnels.
   */
readonly addressPrefix?: string;

/**
   * The authorization key.
   */
readonly authorizationKey?: string;

/**
   * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
   */
readonly expressRouteCircuitPeering?: SubResource;

/**
   * IPv6 Address PrefixProperties of the express route circuit connection.
   */
readonly ipv6CircuitConnectionConfig?: Ipv6CircuitConnectionConfig;

/**
   * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
   */
readonly peerExpressRouteCircuitPeering?: SubResource;

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * /125 IP address space to carve out customer addresses for global reach.
   */
readonly addressPrefix?: string;
}

/**
 * NetworkExpressroutecircuitsPeeringsConnections resource
 */
export class NetworkExpressroutecircuitsPeeringsConnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkExpressroutecircuitsPeeringsConnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/expressRouteCircuits/peerings/connections@2023-04-01";
  }

  protected getResourceBody(props: NetworkExpressroutecircuitsPeeringsConnectionsProps): string {
    return JSON.stringify(
        {properties: {addressPrefix: "string", authorizationKey: "string", expressRouteCircuitPeering: {id: "string"}, ipv6CircuitConnectionConfig: {addressPrefix: "string"}, peerExpressRouteCircuitPeering: {id: "string"}}}
    );
  }
}
