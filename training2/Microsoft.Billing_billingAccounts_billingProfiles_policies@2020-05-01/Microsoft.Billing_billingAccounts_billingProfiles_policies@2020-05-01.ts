import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsBillingprofilesPoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:billingProfiles;

/**
   * The policy that controls whether Azure marketplace purchases are allowed for a billing profile.
   */
readonly marketplacePurchases?: 'AllAllowed''NotAllowed''OnlyFreeAllowed';

/**
   * The policy that controls whether Azure reservation purchases are allowed for a billing profile.
   */
readonly reservationPurchases?: 'Allowed''NotAllowed';

/**
   * The policy that controls whether users with Azure RBAC access to a subscription can view its charges.
   */
readonly viewCharges?: 'Allowed''NotAllowed';
}

/**
 * BillingBillingaccountsBillingprofilesPolicies resource
 */
export class BillingBillingaccountsBillingprofilesPolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BillingBillingaccountsBillingprofilesPoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Billing/billingAccounts/billingProfiles/policies@2020-05-01";
  }

  protected getResourceBody(props: BillingBillingaccountsBillingprofilesPoliciesProps): string {
    return JSON.stringify(
        {properties: {marketplacePurchases: "string", reservationPurchases: "string", viewCharges: "string"}}
    );
  }
}
