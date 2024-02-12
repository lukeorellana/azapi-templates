import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsBillingsubscriptionaliasesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: billingAccounts;

/**
   * Indicates whether auto renewal is turned on or off for a subscription.
   */
readonly autoRenew?: 'Off''On';

/**
   * The provisioning tenant of the subscription.
   */
readonly beneficiaryTenantId?: string;

/**
   * The billing frequency of the subscription in the ISO8601 format. Example: P1M, P3M, P1Y
   */
readonly billingFrequency?: string;

/**
   * The ID of the billing profile to which the subscription is billed. This field is only applicable for Microsoft Customer Agreement billing accounts.
   */
readonly billingProfileId?: string;

/**
   * The cost center applied to the subscription. This field is only available for consumption subscriptions of Microsoft Customer Agreement Type billing accounts.
   */
readonly consumptionCostCenter?: string;

/**
   * The ID of the customer for whom the subscription was created. The field is applicable only for Microsoft Partner Agreement billing accounts.
   */
readonly customerId?: string;

/**
   * The name of the subscription.
   */
readonly displayName?: string;

/**
   * The ID of the invoice section to which the subscription is billed. The field is applicable only for Microsoft Partner Agreement billing accounts.
   */
readonly invoiceSectionId?: string;

/**
   * The ID of the product for which the subscription is purchased
   */
readonly productTypeId?: string;

/**
   * The number of licenses purchased for the subscription
   */
readonly quantity?: number;

/**
   * The SKU ID of the product for which the subscription is purchased. This field is only available for Microsoft Customer Agreement billing accounts.
   */
readonly skuId?: string;

/**
   * The duration for which you can use the subscription. Example P1Y and P1M
   */
readonly termDuration?: string;
}

/**
 * BillingBillingaccountsBillingsubscriptionaliases resource
 */
export class BillingBillingaccountsBillingsubscriptionaliases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BillingBillingaccountsBillingsubscriptionaliasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Billing/billingAccounts/billingSubscriptionAliases@2021-10-01";
  }

  protected getResourceBody(props: BillingBillingaccountsBillingsubscriptionaliasesProps): string {
    return JSON.stringify(
        {properties: {autoRenew: "string", beneficiaryTenantId: "string", billingFrequency: "string", billingProfileId: "string", consumptionCostCenter: "string", customerId: "string", displayName: "string", invoiceSectionId: "string", productTypeId: "string", quantity: "${int}", skuId: "string", termDuration: "string"}}
    );
  }
}
