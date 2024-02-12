import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsProps extends IAzAPIBaseProps {
/**
   * Billing settings of the hub.
   */
readonly hubBillingInfo?: HubBillingInfoFormat;

/**
   * The bit flags for enabled hub features. Bit 0 is set to 1 indicates graph is enabled, or disabled if set to 0. Bit 1 is set to 1 indicates the hub is disabled, or enabled if set to 0.
   */
readonly tenantFeatures?: number;

/**
   * The maximum number of units can be used.  One unit is 10,000 Profiles and 100,000 Interactions.
   */
readonly maxUnits?: number;

/**
   * The minimum number of units will be billed. One unit is 10,000 Profiles and 100,000 Interactions.
   */
readonly minUnits?: number;

/**
   * The sku name.
   */
readonly skuName?: string;
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
