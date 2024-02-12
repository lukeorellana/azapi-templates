import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AgfoodplatformFarmbeatsProps extends IAzAPIBaseProps {

}

/**
 * AgfoodplatformFarmbeats resource
 */
export class AgfoodplatformFarmbeats extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AgfoodplatformFarmbeatsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AgFoodPlatform/farmBeats@2021-09-01-preview";
  }

  protected getResourceBody(props: AgfoodplatformFarmbeatsProps): string {
    return JSON.stringify(
        {properties: {publicNetworkAccess: "string", sensorIntegration: {enabled: "string", provisioningInfo: {error: {}}}}}
    );
  }
}
