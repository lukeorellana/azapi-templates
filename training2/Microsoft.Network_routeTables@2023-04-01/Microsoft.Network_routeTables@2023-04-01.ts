import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkRoutetablesProps extends IAzAPIBaseProps {
/**
   * Whether to disable the routes learned by BGP on that route table. True means disable.
   */
readonly disableBgpRoutePropagation?: bool;

/**
   * Collection of routes contained within a route table.
   */
readonly routes?: Route[];

/**
   * Resource ID.
   */
readonly id?: string;

/**
   * The type of the resource.
   */
readonly type?: string;

/**
   * The destination CIDR to which the route applies.
   */
readonly addressPrefix?: string;

/**
   * A value indicating whether this route overrides overlapping BGP routes regardless of LPM.
   */
readonly hasBgpOverride?: bool;

/**
   * The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
   */
readonly nextHopIpAddress?: string;

/**
   * The type of Azure hop the packet should be sent to.
   */
readonly nextHopType: 'Internet''None''VirtualAppliance''VirtualNetworkGateway''VnetLocal';
}

/**
 * NetworkRoutetables resource
 */
export class NetworkRoutetables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkRoutetablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/routeTables@2023-04-01";
  }

  protected getResourceBody(props: NetworkRoutetablesProps): string {
    return JSON.stringify(
        {properties: {disableBgpRoutePropagation: "${bool}", routes: [{id: "string", name: "string", properties: {addressPrefix: "string", hasBgpOverride: "${bool}", nextHopIpAddress: "string", nextHopType: "string"}, type: "string"}]}}
    );
  }
}
