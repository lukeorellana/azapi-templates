import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationRoleassignmentapprovalsStagesProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationRoleassignmentapprovalsStages resource
 */
export class AuthorizationRoleassignmentapprovalsStages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationRoleassignmentapprovalsStagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/roleAssignmentApprovals/stages@2021-01-01-preview";
  }

  protected getResourceBody(props: AuthorizationRoleassignmentapprovalsStagesProps): string {
    return JSON.stringify(
        {displayName: "string", justification: "string", reviewResult: "string"}
    );
  }
}
