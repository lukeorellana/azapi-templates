import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsBillingprofilesInstructionsProps extends IAzAPIBaseProps {

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
