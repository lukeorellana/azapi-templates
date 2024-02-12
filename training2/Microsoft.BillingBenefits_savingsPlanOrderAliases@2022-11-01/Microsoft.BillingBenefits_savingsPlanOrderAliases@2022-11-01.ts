import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingbenefitsSavingsplanorderaliasesProps extends IAzAPIBaseProps {
/**
   * Savings plan SKU
   */
readonly sku: Sku;

/**
   * Resource provider kind
   */
readonly kind?: string;

/**
   * Properties specific to applied scope type. Not required if not applicable.
   */
readonly appliedScopeProperties?: AppliedScopeProperties;

/**
   * Type of the Applied Scope.
   */
readonly appliedScopeType?: 'ManagementGroup''Shared''Single';

/**
   * Represents the billing plan in ISO 8601 format. Required only for monthly billing plans.
   */
readonly billingPlan?: 'P1M';

/**
   * Subscription that will be charged for purchasing the benefit
   */
readonly billingScopeId?: string;

/**
   * Commitment towards the benefit.
   */
readonly commitment?: Commitment;

/**
   * Display name
   */
readonly displayName?: string;

/**
   * Represent benefit term in ISO 8601 format.
   */
readonly term?: 'P1Y''P3Y''P5Y';

/**
   * Display name
   */
readonly displayName?: string;

/**
   * Fully-qualified identifier of the management group where the benefit must be applied.
   */
readonly managementGroupId?: string;

/**
   * Fully-qualified identifier of the resource group.
   */
readonly resourceGroupId?: string;

/**
   * Fully-qualified identifier of the subscription.
   */
readonly subscriptionId?: string;

/**
   * Tenant ID where the benefit is applied.
   */
readonly tenantId?: string;

/**
   * 
   */
readonly amount?: number;

/**
   * The ISO 4217 3-letter currency code for the currency used by this purchase record.
   */
readonly currencyCode?: string;

/**
   * Commitment grain.
   */
readonly grain?: 'Hourly';
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
