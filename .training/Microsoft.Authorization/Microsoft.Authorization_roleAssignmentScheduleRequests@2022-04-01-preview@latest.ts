import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationRoleassignmentschedulerequestsProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationRoleassignmentschedulerequests resource
 */
export class AuthorizationRoleassignmentschedulerequests extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationRoleassignmentschedulerequestsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/roleAssignmentScheduleRequests@2022-04-01-preview";
  }

  protected getResourceBody(props: AuthorizationRoleassignmentschedulerequestsProps): string {
    return JSON.stringify(
        {properties: {condition: "string", conditionVersion: "string", justification: "string", linkedRoleEligibilityScheduleId: "string", principalId: "string", requestType: "string", roleDefinitionId: "string", scheduleInfo: {expiration: {duration: "string", endDateTime: "string", type: "string"}, startDateTime: "string"}, targetRoleAssignmentScheduleId: "string", targetRoleAssignmentScheduleInstanceId: "string", ticketInfo: {ticketNumber: "string", ticketSystem: "string"}}}
    );
  }
}
