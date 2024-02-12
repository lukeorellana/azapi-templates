import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsCustomersPoliciesProps extends IAzAPIBaseProps {

}

/**
 * BillingBillingaccountsCustomersPolicies resource
 */
export class BillingBillingaccountsCustomersPolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BillingBillingaccountsCustomersPoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Billing/billingAccounts/customers/policies@2020-05-01";
  }

  protected getResourceBody(props: BillingBillingaccountsCustomersPoliciesProps): string {
    return JSON.stringify(
        {properties: {viewCharges: "string"}}
    );
  }
}
