import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationRoleassignmentapprovalsStagesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: roleAssignmentApprovals;

/**
   * The display name for the approval stage.
   */
readonly displayName?: string;

/**
   * Justification provided by approvers for their action
   */
readonly justification?: string;

/**
   * The decision on the approval stage. This value is initially set to NotReviewed. Approvers can take action of Approve/Deny
   */
readonly reviewResult?: 'Approve''Deny''NotReviewed';
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
