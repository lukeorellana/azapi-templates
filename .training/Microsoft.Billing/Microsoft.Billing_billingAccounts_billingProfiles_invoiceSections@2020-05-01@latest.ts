import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsBillingprofilesInvoicesectionsProps extends IAzAPIBaseProps {

}

/**
 * BillingBillingaccountsBillingprofilesInvoicesections resource
 */
export class BillingBillingaccountsBillingprofilesInvoicesections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BillingBillingaccountsBillingprofilesInvoicesectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2020-05-01";
  }

  protected getResourceBody(props: BillingBillingaccountsBillingprofilesInvoicesectionsProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", labels: {}, tags: {}}}
    );
  }
}
