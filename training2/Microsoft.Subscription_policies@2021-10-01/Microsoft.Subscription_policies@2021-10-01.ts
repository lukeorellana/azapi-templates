import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SubscriptionPoliciesProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: For Bicep:tenant().;

/**
   * Blocks the entering of subscriptions into user's tenant.
   */
readonly blockSubscriptionsIntoTenant?: bool;

/**
   * Blocks the leaving of subscriptions from user's tenant.
   */
readonly blockSubscriptionsLeavingTenant?: bool;

/**
   * List of user objectIds that are exempted from the set subscription tenant policies for the user's tenant.
   */
readonly exemptedPrincipals?: string[];
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
