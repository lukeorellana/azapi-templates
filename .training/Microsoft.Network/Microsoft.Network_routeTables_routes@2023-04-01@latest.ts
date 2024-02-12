import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkRoutetablesRoutesProps extends IAzAPIBaseProps {

}

/**
 * NetworkRoutetablesRoutes resource
 */
export class NetworkRoutetablesRoutes extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkRoutetablesRoutesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/routeTables/routes@2023-04-01";
  }

  protected getResourceBody(props: NetworkRoutetablesRoutesProps): string {
    return JSON.stringify(
        {properties: {addressPrefix: "string", hasBgpOverride: "${bool}", nextHopIpAddress: "string", nextHopType: "string"}}
    );
  }
}
