import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualhubsHubroutetablesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualHubs;

/**
   * List of labels associated with this route table.
   */
readonly labels?: string[];

/**
   * List of all routes.
   */
readonly routes?: HubRoute[];

/**
   * List of all destinations.
   */
readonly destinations: string[];

/**
   * The type of destinations (eg: CIDR, ResourceId, Service).
   */
readonly destinationType: string;

/**
   * NextHop resource ID.
   */
readonly nextHop: string;

/**
   * The type of next hop (eg: ResourceId).
   */
readonly nextHopType: string;
}

/**
 * NetworkVirtualhubsHubroutetables resource
 */
export class NetworkVirtualhubsHubroutetables extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualhubsHubroutetablesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualHubs/hubRouteTables@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualhubsHubroutetablesProps): string {
    return JSON.stringify(
        {properties: {labels: ["string"], routes: [{destinations: ["string"], destinationType: "string", name: "string", nextHop: "string", nextHopType: "string"}]}}
    );
  }
}
