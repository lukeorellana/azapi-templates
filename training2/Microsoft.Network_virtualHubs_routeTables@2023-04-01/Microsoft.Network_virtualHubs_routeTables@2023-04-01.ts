import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualhubsRoutetablesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualHubs;

/**
   * List of all connections attached to this route table v2.
   */
readonly attachedConnections?: string[];

/**
   * List of all routes.
   */
readonly routes?: VirtualHubRouteV2[];

/**
   * List of all destinations.
   */
readonly destinations?: string[];

/**
   * The type of destinations.
   */
readonly destinationType?: string;

/**
   * NextHops ip address.
   */
readonly nextHops?: string[];

/**
   * The type of next hops.
   */
readonly nextHopType?: string;
}

/**
 * NetworkVirtualhubsRoutetables resource
 */
export class NetworkVirtualhubsRoutetables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualhubsRoutetablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualHubs/routeTables@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualhubsRoutetablesProps): string {
    return JSON.stringify(
        {properties: {attachedConnections: ["string"], routes: [{destinations: ["string"], destinationType: "string", nextHops: ["string"], nextHopType: "string"}]}}
    );
  }
}
