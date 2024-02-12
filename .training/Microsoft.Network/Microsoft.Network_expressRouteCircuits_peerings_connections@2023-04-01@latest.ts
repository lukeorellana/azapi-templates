import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressroutecircuitsPeeringsConnectionsProps extends IAzAPIBaseProps {

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
