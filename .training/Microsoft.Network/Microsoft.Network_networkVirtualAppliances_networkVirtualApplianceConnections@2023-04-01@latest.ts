import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkvirtualappliancesNetworkvirtualapplianceconnectionsProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkvirtualappliancesNetworkvirtualapplianceconnections resource
 */
export class NetworkNetworkvirtualappliancesNetworkvirtualapplianceconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkvirtualappliancesNetworkvirtualapplianceconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkVirtualAppliances/networkVirtualApplianceConnections@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkvirtualappliancesNetworkvirtualapplianceconnectionsProps): string {
    return JSON.stringify(
        {properties: {asn: "${int}", bgpPeerAddress: ["string"], enableInternetSecurity: "${bool}", name: "string", routingConfiguration: {associatedRouteTable: {resourceUri: "string"}, inboundRouteMap: {resourceUri: "string"}, outboundRouteMap: {resourceUri: "string"}, propagatedRouteTables: {ids: [{resourceUri: "string"}], labels: ["string"]}}, tunnelIdentifier: "${int}"}}
    );
  }
}
