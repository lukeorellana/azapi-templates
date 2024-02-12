import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsCustomersPoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: customers;

/**
   * The policy that controls whether the users in customer's organization can view charges at pay-as-you-go prices.
   */
readonly viewCharges?: 'Allowed''NotAllowed';
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
