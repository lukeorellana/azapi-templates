import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsBillingprofilesProps extends IAzAPIBaseProps {

}

/**
 * BillingBillingaccountsBillingprofiles resource
 */
export class BillingBillingaccountsBillingprofiles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BillingBillingaccountsBillingprofilesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Billing/billingAccounts/billingProfiles@2020-05-01";
  }

  protected getResourceBody(props: BillingBillingaccountsBillingprofilesProps): string {
    return JSON.stringify(
        {properties: {billTo: {addressLine1: "string", addressLine2: "string", addressLine3: "string", city: "string", companyName: "string", country: "string", district: "string", email: "string", firstName: "string", lastName: "string", middleName: "string", phoneNumber: "string", postalCode: "string", region: "string"}, displayName: "string", enabledAzurePlans: [{skuId: "string"}], invoiceEmailOptIn: "${bool}", invoiceSections: {value: [{properties: {displayName: "string", labels: {}, tags: {}}}]}, poNumber: "string", tags: {}}}
    );
  }
}
