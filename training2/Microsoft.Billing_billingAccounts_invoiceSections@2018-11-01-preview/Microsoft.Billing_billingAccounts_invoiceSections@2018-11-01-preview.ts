import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: billingAccounts;

/**
   * The billing profiles associated to the billing account.
   */
readonly billingProfiles?: BillingProfile[];

/**
   * The name of the InvoiceSection.
   */
readonly displayName?: string;

/**
   * Billing address.
   */
readonly address?: Address;

/**
   * The billing profile name.
   */
readonly displayName?: string;

/**
   * Information about the product.
   */
readonly enabledAzureSKUs?: EnabledAzureSKUs[];

/**
   * The invoice sections associated to the billing profile.
   */
readonly invoiceSections?: InvoiceSection[];

/**
   * Purchase order number.
   */
readonly poNumber?: string;

/**
   * Address Line1.
   */
readonly addressLine1?: string;

/**
   * Address Line2.
   */
readonly addressLine2?: string;

/**
   * Address Line3.
   */
readonly addressLine3?: string;

/**
   * Address City.
   */
readonly city?: string;

/**
   * Company Name.
   */
readonly companyName?: string;

/**
   * Country code uses ISO2, 2-digit format.
   */
readonly country?: string;

/**
   * First Name.
   */
readonly firstName?: string;

/**
   * Last Name.
   */
readonly lastName?: string;

/**
   * Address Postal Code.
   */
readonly postalCode?: string;

/**
   * Address Region.
   */
readonly region?: string;

/**
   * The sku id.
   */
readonly skuId?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
