import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkRoutetablesProps extends IAzAPIBaseProps {

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
