import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualhubsRoutetablesProps extends IAzAPIBaseProps {

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
