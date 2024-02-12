import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SubscriptionSubscriptiondefinitionsProps extends IAzAPIBaseProps {

}

/**
 * SubscriptionSubscriptiondefinitions resource
 */
export class SubscriptionSubscriptiondefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SubscriptionSubscriptiondefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Subscription/subscriptionDefinitions@2017-11-01-preview";
  }

  protected getResourceBody(props: SubscriptionSubscriptiondefinitionsProps): string {
    return JSON.stringify(
        {properties: {etag: "string", offerType: "string", subscriptionDisplayName: "string"}}
    );
  }
}
