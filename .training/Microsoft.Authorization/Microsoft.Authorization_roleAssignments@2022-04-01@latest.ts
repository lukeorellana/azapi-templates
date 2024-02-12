import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationRoleassignmentsProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationRoleassignments resource
 */
export class AuthorizationRoleassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationRoleassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/roleAssignments@2022-04-01";
  }

  protected getResourceBody(props: AuthorizationRoleassignmentsProps): string {
    return JSON.stringify(
        {properties: {condition: "string", conditionVersion: "string", delegatedManagedIdentityResourceId: "string", description: "string", principalId: "string", principalType: "string", roleDefinitionId: "string"}}
    );
  }
}
