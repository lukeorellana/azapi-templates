import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsDepartmentsBillingroleassignmentsProps extends IAzAPIBaseProps {

}

/**
 * BillingBillingaccountsDepartmentsBillingroleassignments resource
 */
export class BillingBillingaccountsDepartmentsBillingroleassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: BillingBillingaccountsDepartmentsBillingroleassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Billing/billingAccounts/departments/billingRoleAssignments@2019-10-01-preview";
  }

  protected getResourceBody(props: BillingBillingaccountsDepartmentsBillingroleassignmentsProps): string {
    return JSON.stringify(
        {properties: {principalId: "string", principalTenantId: "string", roleDefinitionId: "string", userAuthenticationType: "string", userEmailAddress: "string"}}
    );
  }
}
