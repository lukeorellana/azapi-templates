import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsViewsProps extends IAzAPIBaseProps {

}

/**
 * CustomerinsightsHubsViews resource
 */
export class CustomerinsightsHubsViews extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomerinsightsHubsViewsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomerInsights/hubs/views@2017-04-26";
  }

  protected getResourceBody(props: CustomerinsightsHubsViewsProps): string {
    return JSON.stringify(
        {properties: {definition: "string", displayName: {}, userId: "string"}}
    );
  }
}
