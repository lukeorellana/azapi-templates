import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkVirtualhubsHubroutetablesProps extends IAzAPIBaseProps {

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
