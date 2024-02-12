import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface BillingBillingaccountsDepartmentsBillingroleassignmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: departments;

/**
   * The principal id of the user to whom the role was assigned.
   */
readonly principalId?: string;

/**
   * The principal tenant id of the user to whom the role was assigned.
   */
readonly principalTenantId?: string;

/**
   * The ID of the role definition.
   */
readonly roleDefinitionId?: string;

/**
   * The authentication type of the user, whether Organization or MSA, of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
   */
readonly userAuthenticationType?: string;

/**
   * The email address of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
   */
readonly userEmailAddress?: string;
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
