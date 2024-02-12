import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingbenefitsSavingsplanorderaliasesProps extends IAzAPIBaseProps {

}

/**
 * BillingbenefitsSavingsplanorderaliases resource
 */
export class BillingbenefitsSavingsplanorderaliases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BillingbenefitsSavingsplanorderaliasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.BillingBenefits/savingsPlanOrderAliases@2022-11-01";
  }

  protected getResourceBody(props: BillingbenefitsSavingsplanorderaliasesProps): string {
    return JSON.stringify(
        {properties: {appliedScopeProperties: {displayName: "string", managementGroupId: "string", resourceGroupId: "string", subscriptionId: "string", tenantId: "string"}, appliedScopeType: "string", billingPlan: "P1M", billingScopeId: "string", commitment: {amount: "${int}", currencyCode: "string", grain: "Hourly"}, displayName: "string", term: "string"}, sku: {name: "string"}, kind: "string"}
    );
  }
}
