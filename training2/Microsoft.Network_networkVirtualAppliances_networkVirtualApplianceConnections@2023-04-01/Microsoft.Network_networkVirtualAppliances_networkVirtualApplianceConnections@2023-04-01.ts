import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkvirtualappliancesNetworkvirtualapplianceconnectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkVirtualAppliances;

/**
   * Network Virtual Appliance ASN.
   */
readonly asn?: number;

/**
   * List of bgpPeerAddresses for the NVA instances
   */
readonly bgpPeerAddress?: string[];

/**
   * Enable internet security.
   */
readonly enableInternetSecurity?: bool;

/**
   * The Routing Configuration indicating the associated and propagated route tables on this connection.
   */
readonly routingConfiguration?: RoutingConfigurationNfv;

/**
   * Unique identifier for the connection.
   */
readonly tunnelIdentifier?: number;

/**
   * The resource id RouteTable associated with this RoutingConfiguration.
   */
readonly associatedRouteTable?: RoutingConfigurationNfvSubResource;

/**
   * The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes.
   */
readonly inboundRouteMap?: RoutingConfigurationNfvSubResource;

/**
   * The resource id of the RouteMap associated with this RoutingConfiguration for outbound advertised routes.
   */
readonly outboundRouteMap?: RoutingConfigurationNfvSubResource;

/**
   * The list of RouteTables to advertise the routes to.
   */
readonly propagatedRouteTables?: PropagatedRouteTableNfv;

/**
   * Resource ID.
   */
readonly resourceUri?: string;

/**
   * The list of resource ids of all the RouteTables.
   */
readonly ids?: RoutingConfigurationNfvSubResource[];

/**
   * The list of labels.
   */
readonly labels?: string[];
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
