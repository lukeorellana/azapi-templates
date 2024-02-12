import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsBillingprofilesPoliciesProps extends IAzAPIBaseProps {

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
