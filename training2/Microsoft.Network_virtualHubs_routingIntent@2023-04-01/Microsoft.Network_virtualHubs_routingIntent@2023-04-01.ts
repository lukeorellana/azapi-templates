import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualhubsRoutingintentProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:virtualHubs;

/**
   * List of routing policies.
   */
readonly routingPolicies?: RoutingPolicy[];

/**
   * List of all destinations which this routing policy is applicable to (for example: Internet, PrivateTraffic).
   */
readonly destinations: string[];

/**
   * The next hop resource id on which this routing policy is applicable to.
   */
readonly nextHop: string;
}

/**
 * NetworkVirtualhubsRoutingintent resource
 */
export class NetworkVirtualhubsRoutingintent extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkVirtualhubsRoutingintentProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/virtualHubs/routingIntent@2023-04-01";
  }

  protected getResourceBody(props: NetworkVirtualhubsRoutingintentProps): string {
    return JSON.stringify(
        {properties: {routingPolicies: [{destinations: ["string"], name: "string", nextHop: "string"}]}}
    );
  }
}
