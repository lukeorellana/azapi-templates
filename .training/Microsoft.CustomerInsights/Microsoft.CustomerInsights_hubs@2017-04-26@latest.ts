import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsProps extends IAzAPIBaseProps {

}

/**
 * CustomerinsightsHubs resource
 */
export class CustomerinsightsHubs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsProps): string {
    return JSON.stringify(
        {properties: {hubBillingInfo: {maxUnits: "${int}", minUnits: "${int}", skuName: "string"}, tenantFeatures: "${int}"}}
    );
  }
}
