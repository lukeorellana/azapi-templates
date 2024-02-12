import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsLineofcreditProps extends IAzAPIBaseProps {

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
