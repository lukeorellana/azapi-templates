import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationAccessreviewschedulesettingsProps extends IAzAPIBaseProps {

}

/**
 * AuthorizationAccessreviewschedulesettings resource
 */
export class AuthorizationAccessreviewschedulesettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationAccessreviewschedulesettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/accessReviewScheduleSettings@2021-12-01-preview";
  }

  protected getResourceBody(props: AuthorizationAccessreviewschedulesettingsProps): string {
    return JSON.stringify(
        {autoApplyDecisionsEnabled: "${bool}", defaultDecision: "string", defaultDecisionEnabled: "${bool}", instanceDurationInDays: "${int}", justificationRequiredOnApproval: "${bool}", mailNotificationsEnabled: "${bool}", recommendationLookBackDuration: "string", recommendationsEnabled: "${bool}", recurrence: {pattern: {interval: "${int}", type: "string"}, range: {endDate: "string", numberOfOccurrences: "${int}", startDate: "string", type: "string"}}, reminderNotificationsEnabled: "${bool}"}
    );
  }
}
