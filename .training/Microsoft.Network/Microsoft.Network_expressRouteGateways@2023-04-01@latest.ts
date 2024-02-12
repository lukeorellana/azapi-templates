import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressroutegatewaysProps extends IAzAPIBaseProps {

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
