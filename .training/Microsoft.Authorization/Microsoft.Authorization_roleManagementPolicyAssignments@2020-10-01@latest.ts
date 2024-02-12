import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationRolemanagementpolicyassignmentsProps extends IAzAPIBaseProps {

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
