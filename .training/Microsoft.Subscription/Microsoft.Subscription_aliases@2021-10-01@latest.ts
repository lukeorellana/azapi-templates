import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SubscriptionAliasesProps extends IAzAPIBaseProps {

}

/**
 * SubscriptionAliases resource
 */
export class SubscriptionAliases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SubscriptionAliasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Subscription/aliases@2021-10-01";
  }

  protected getResourceBody(props: SubscriptionAliasesProps): string {
    return JSON.stringify(
        {properties: {additionalProperties: {managementGroupId: "string", subscriptionOwnerId: "string", subscriptionTenantId: "string", tags: {}}, billingScope: "string", displayName: "string", resellerId: "string", subscriptionId: "string", workload: "string"}}
    );
  }
}
