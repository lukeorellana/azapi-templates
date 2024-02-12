import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualhubsRoutingintentProps extends IAzAPIBaseProps {

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
