import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsLineofcreditProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: billingAccounts;

/**
   * The current credit limit.
   */
readonly creditLimit?: Amount;

/**
   * The line of credit status.
   */
readonly status?: 'Approved''Rejected';

/**
   * Amount value.
   */
readonly value?: number;
}

/**
 * BillingBillingaccountsLineofcredit resource
 */
export class BillingBillingaccountsLineofcredit extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BillingBillingaccountsLineofcreditProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Billing/billingAccounts/lineOfCredit@2018-11-01-preview";
  }

  protected getResourceBody(props: BillingBillingaccountsLineofcreditProps): string {
    return JSON.stringify(
        {properties: {creditLimit: {value: "${int}"}, status: "string"}}
    );
  }
}
