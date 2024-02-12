import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationRolemanagementpolicyassignmentsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.This resource type can also be applied to a tenant.For Bicep, usetenant().;

/**
   * The policy id role management policy assignment.
   */
readonly policyId?: string;

/**
   * The role definition of management policy assignment.
   */
readonly roleDefinitionId?: string;

/**
   * The role management policy scope.
   */
readonly scope?: string;
}

/**
 * AuthorizationRolemanagementpolicyassignments resource
 */
export class AuthorizationRolemanagementpolicyassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationRolemanagementpolicyassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/roleManagementPolicyAssignments@2020-10-01";
  }

  protected getResourceBody(props: AuthorizationRolemanagementpolicyassignmentsProps): string {
    return JSON.stringify(
        {properties: {policyId: "string", roleDefinitionId: "string", scope: "string"}}
    );
  }
}
