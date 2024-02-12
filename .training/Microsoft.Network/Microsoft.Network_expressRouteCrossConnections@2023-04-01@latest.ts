import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkExpressroutecrossconnectionsProps extends IAzAPIBaseProps {

}

/**
 * NetworkExpressroutecrossconnections resource
 */
export class NetworkExpressroutecrossconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkExpressroutecrossconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/expressRouteCrossConnections@2023-04-01";
  }

  protected getResourceBody(props: NetworkExpressroutecrossconnectionsProps): string {
    return JSON.stringify(
        {properties: {expressRouteCircuit: {id: "string"}, peerings: [{id: "string", name: "string", properties: {gatewayManagerEtag: "string", ipv6PeeringConfig: {microsoftPeeringConfig: {advertisedCommunities: ["string"], advertisedPublicPrefixes: ["string"], customerASN: "${int}", legacyMode: "${int}", routingRegistryName: "string"}, primaryPeerAddressPrefix: "string", routeFilter: {id: "string"}, secondaryPeerAddressPrefix: "string", state: "string"}, microsoftPeeringConfig: {advertisedCommunities: ["string"], advertisedPublicPrefixes: ["string"], customerASN: "${int}", legacyMode: "${int}", routingRegistryName: "string"}, peerASN: "${int}", peeringType: "string", primaryPeerAddressPrefix: "string", secondaryPeerAddressPrefix: "string", sharedKey: "string", state: "string", vlanId: "${int}"}}], serviceProviderNotes: "string", serviceProviderProvisioningState: "string"}}
    );
  }
}
