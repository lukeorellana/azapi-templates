import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationAccessreviewscheduledefinitionsProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationAccessreviewscheduledefinitions resource
 */
export class AuthorizationAccessreviewscheduledefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationAccessreviewscheduledefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/accessReviewScheduleDefinitions@2021-12-01-preview";
  }

  protected getResourceBody(props: AuthorizationAccessreviewscheduledefinitionsProps): string {
    return JSON.stringify(
        {backupReviewers: [{principalId: "string"}], descriptionForAdmins: "string", descriptionForReviewers: "string", displayName: "string", instances: [{properties: {backupReviewers: [{principalId: "string"}], endDateTime: "string", reviewers: [{principalId: "string"}], startDateTime: "string"}}], reviewers: [{principalId: "string"}], settings: {autoApplyDecisionsEnabled: "${bool}", defaultDecision: "string", defaultDecisionEnabled: "${bool}", instanceDurationInDays: "${int}", justificationRequiredOnApproval: "${bool}", mailNotificationsEnabled: "${bool}", recommendationLookBackDuration: "string", recommendationsEnabled: "${bool}", recurrence: {pattern: {interval: "${int}", type: "string"}, range: {endDate: "string", numberOfOccurrences: "${int}", startDate: "string", type: "string"}}, reminderNotificationsEnabled: "${bool}"}}
    );
  }
}
