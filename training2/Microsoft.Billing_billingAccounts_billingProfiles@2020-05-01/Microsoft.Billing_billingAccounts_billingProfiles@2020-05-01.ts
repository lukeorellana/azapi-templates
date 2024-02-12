import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsBillingprofilesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: billingAccounts;

/**
   * Billing address.
   */
readonly billTo?: AddressDetails;

/**
   * The name of the billing profile.
   */
readonly displayName?: string;

/**
   * Information about the enabled azure plans.
   */
readonly enabledAzurePlans?: AzurePlan[];

/**
   * Flag controlling whether the invoices for the billing profile are sent through email.
   */
readonly invoiceEmailOptIn?: bool;

/**
   * The invoice sections associated to the billing profile. By default this is not populated, unless it's specified in $expand.
   */
readonly invoiceSections?: InvoiceSectionsOnExpand;

/**
   * The purchase order name that will appear on the invoices generated for the billing profile.
   */
readonly poNumber?: string;

/**
   * Address line 1.
   */
readonly addressLine1: string;

/**
   * Address line 2.
   */
readonly addressLine2?: string;

/**
   * Address line 3.
   */
readonly addressLine3?: string;

/**
   * Address city.
   */
readonly city?: string;

/**
   * Company name.
   */
readonly companyName?: string;

/**
   * Country code uses ISO2, 2-digit format.
   */
readonly country: string;

/**
   * Address district.
   */
readonly district?: string;

/**
   * Email address.
   */
readonly email?: string;

/**
   * First name.
   */
readonly firstName?: string;

/**
   * Last name.
   */
readonly lastName?: string;

/**
   * Middle name.
   */
readonly middleName?: string;

/**
   * Phone number.
   */
readonly phoneNumber?: string;

/**
   * Postal code.
   */
readonly postalCode?: string;

/**
   * Address region.
   */
readonly region?: string;

/**
   * The sku id.
   */
readonly skuId?: string;

/**
   * The invoice sections associated to the billing profile.
   */
readonly value?: InvoiceSection[];

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
