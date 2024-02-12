import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsBillingsubscriptionaliasesProps extends IAzAPIBaseProps {

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
