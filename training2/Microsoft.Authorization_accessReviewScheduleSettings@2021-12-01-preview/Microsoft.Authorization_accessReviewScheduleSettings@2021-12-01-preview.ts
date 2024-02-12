import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationAccessreviewschedulesettingsProps extends IAzAPIBaseProps {
/**
   * Flag to indicate whether auto-apply capability, to automatically change the target object access resource, is enabled. If not enabled, a user must, after the review completes, apply the access review.
   */
readonly autoApplyDecisionsEnabled?: bool;

/**
   * This specifies the behavior for the autoReview feature when an access review completes.
   */
readonly defaultDecision?: 'Approve''Deny''Recommendation';

/**
   * Flag to indicate whether reviewers are required to provide a justification when reviewing access.
   */
readonly defaultDecisionEnabled?: bool;

/**
   * The duration in days for an instance.
   */
readonly instanceDurationInDays?: number;

/**
   * Flag to indicate whether the reviewer is required to pass justification when recording a decision.
   */
readonly justificationRequiredOnApproval?: bool;

/**
   * Flag to indicate whether sending mails to reviewers and the review creator is enabled.
   */
readonly mailNotificationsEnabled?: bool;

/**
   * Recommendations for access reviews are calculated by looking back at 30 days of data(w.r.t the start date of the review) by default. However, in some scenarios, customers want to change how far back to look at and want to configure 60 days, 90 days, etc. instead. This setting allows customers to configure this duration. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
   */
readonly recommendationLookBackDuration?: string;

/**
   * Flag to indicate whether showing recommendations to reviewers is enabled.
   */
readonly recommendationsEnabled?: bool;

/**
   * Access Review Settings.
   */
readonly recurrence?: AccessReviewRecurrenceSettings;

/**
   * Flag to indicate whether sending reminder emails to reviewers are enabled.
   */
readonly reminderNotificationsEnabled?: bool;

/**
   * Access Review schedule definition recurrence pattern.
   */
readonly pattern?: AccessReviewRecurrencePattern;

/**
   * Access Review schedule definition recurrence range.
   */
readonly range?: AccessReviewRecurrenceRange;

/**
   * The interval for recurrence. For a quarterly review, the interval is 3 for type : absoluteMonthly.
   */
readonly interval?: number;

/**
   * The recurrence type : weekly, monthly, etc.
   */
readonly type?: 'absoluteMonthly''weekly';

/**
   * The DateTime when the review is scheduled to end. Required if type is endDate
   */
readonly endDate?: string;

/**
   * The number of times to repeat the access review. Required and must be positive if type is numbered.
   */
readonly numberOfOccurrences?: number;

/**
   * The DateTime when the review is scheduled to be start. This could be a date in the future. Required on create.
   */
readonly startDate?: string;

/**
   * The recurrence range type. The possible values are: endDate, noEnd, numbered.
   */
readonly type?: 'endDate''noEnd''numbered';
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
