import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SubscriptionAliasesProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: For Bicep:tenant().;

/**
   * Put alias request additional properties.
   */
readonly additionalProperties?: PutAliasRequestAdditionalProperties;

/**
   * Billing scope of the subscription.For CustomerLed and FieldLed - /billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}For PartnerLed - /billingAccounts/{billingAccountName}/customers/{customerName}For Legacy EA - /billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}
   */
readonly billingScope?: string;

/**
   * The friendly name of the subscription.
   */
readonly displayName?: string;

/**
   * Reseller Id
   */
readonly resellerId?: string;

/**
   * This parameter can be used to create alias for existing subscription Id
   */
readonly subscriptionId?: string;

/**
   * The workload type of the subscription. It can be either Production or DevTest.
   */
readonly workload?: 'DevTest''Production';

/**
   * Management group Id for the subscription.
   */
readonly managementGroupId?: string;

/**
   * Owner Id of the subscription
   */
readonly subscriptionOwnerId?: string;

/**
   * Tenant Id of the subscription
   */
readonly subscriptionTenantId?: string;
}

/**
 * SubscriptionAliases resource
 */
export class SubscriptionAliases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SubscriptionAliasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Subscription/aliases@2021-10-01";
  }

  protected getResourceBody(props: SubscriptionAliasesProps): string {
    return JSON.stringify(
        {properties: {additionalProperties: {managementGroupId: "string", subscriptionOwnerId: "string", subscriptionTenantId: "string", tags: {}}, billingScope: "string", displayName: "string", resellerId: "string", subscriptionId: "string", workload: "string"}}
    );
  }
}
