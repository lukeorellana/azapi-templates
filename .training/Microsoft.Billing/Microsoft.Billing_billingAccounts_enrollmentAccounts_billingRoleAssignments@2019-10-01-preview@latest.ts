import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsEnrollmentaccountsBillingroleassignmentsProps extends IAzAPIBaseProps {

}

/**
 * BillingBillingaccountsEnrollmentaccountsBillingroleassignments resource
 */
export class BillingBillingaccountsEnrollmentaccountsBillingroleassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BillingBillingaccountsEnrollmentaccountsBillingroleassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments@2019-10-01-preview";
  }

  protected getResourceBody(props: BillingBillingaccountsEnrollmentaccountsBillingroleassignmentsProps): string {
    return JSON.stringify(
        {properties: {principalId: "string", principalTenantId: "string", roleDefinitionId: "string", userAuthenticationType: "string", userEmailAddress: "string"}}
    );
  }
}
