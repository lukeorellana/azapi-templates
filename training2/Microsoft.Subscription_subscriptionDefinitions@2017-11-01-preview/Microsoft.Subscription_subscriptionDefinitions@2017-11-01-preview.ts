import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SubscriptionSubscriptiondefinitionsProps extends IAzAPIBaseProps {
/**
   * The etag the subscription definition.
   */
readonly etag?: string;

/**
   * The offer type of the subscription. For example, MS-AZR-0017P (EnterpriseAgreement) and MS-AZR-0148P (EnterpriseAgreement devTest) are available.
   */
readonly offerType?: string;

/**
   * The display name of the subscription.
   */
readonly subscriptionDisplayName?: string;
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
