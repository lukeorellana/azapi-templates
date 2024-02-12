import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsBillingprofilesInvoicesectionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:billingProfiles;

/**
   * The name of the invoice section.
   */
readonly displayName?: string;

/**
   * Dictionary of metadata associated with the invoice section.
   */
readonly labels?: object;
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
