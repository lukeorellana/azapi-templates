import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressroutegatewaysExpressrouteconnectionsProps extends IAzAPIBaseProps {

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
