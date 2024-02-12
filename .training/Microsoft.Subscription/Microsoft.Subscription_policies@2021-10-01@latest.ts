import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SubscriptionPoliciesProps extends IAzAPIBaseProps {

}

/**
 * SubscriptionPolicies resource
 */
export class SubscriptionPolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SubscriptionPoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Subscription/policies@2021-10-01";
  }

  protected getResourceBody(props: SubscriptionPoliciesProps): string {
    return JSON.stringify(
        {blockSubscriptionsIntoTenant: "${bool}", blockSubscriptionsLeavingTenant: "${bool}", exemptedPrincipals: ["string"]}
    );
  }
}
