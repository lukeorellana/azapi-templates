import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsBillingprofilesInstructionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:billingProfiles;

/**
   * The amount budgeted for this billing instruction.
   */
readonly amount: number;

/**
   * The date this billing instruction was created.
   */
readonly creationDate?: string;

/**
   * The date this billing instruction is no longer in effect.
   */
readonly endDate: string;

/**
   * The date this billing instruction goes into effect.
   */
readonly startDate: string;
}

/**
 * BillingBillingaccountsBillingprofilesInstructions resource
 */
export class BillingBillingaccountsBillingprofilesInstructions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BillingBillingaccountsBillingprofilesInstructionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Billing/billingAccounts/billingProfiles/instructions@2020-05-01";
  }

  protected getResourceBody(props: BillingBillingaccountsBillingprofilesInstructionsProps): string {
    return JSON.stringify(
        {properties: {amount: "${int}", creationDate: "string", endDate: "string", startDate: "string"}}
    );
  }
}
