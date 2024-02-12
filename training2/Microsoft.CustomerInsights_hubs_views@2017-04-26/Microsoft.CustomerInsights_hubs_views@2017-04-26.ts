import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomerinsightsHubsViewsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hubs;

/**
   * View definition.
   */
readonly definition: string;

/**
   * Localized display name for the view.
   */
readonly displayName?: object;

/**
   * the user ID.
   */
readonly userId?: string;
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
