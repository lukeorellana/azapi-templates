import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationRoleeligibilityschedulerequestsProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationRoleeligibilityschedulerequests resource
 */
export class AuthorizationRoleeligibilityschedulerequests extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationRoleeligibilityschedulerequestsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/roleEligibilityScheduleRequests@2022-04-01-preview";
  }

  protected getResourceBody(props: AuthorizationRoleeligibilityschedulerequestsProps): string {
    return JSON.stringify(
        {properties: {condition: "string", conditionVersion: "string", justification: "string", principalId: "string", requestType: "string", roleDefinitionId: "string", scheduleInfo: {expiration: {duration: "string", endDateTime: "string", type: "string"}, startDateTime: "string"}, targetRoleEligibilityScheduleId: "string", targetRoleEligibilityScheduleInstanceId: "string", ticketInfo: {ticketNumber: "string", ticketSystem: "string"}}}
    );
  }
}
