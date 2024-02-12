import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AuthorizationAccessreviewhistorydefinitionsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Collection of review decisions which the history data should be filtered on. For example if Approve and Deny are supplied the data will only contain review results in which the decision maker approved or denied a review request.
   */
readonly decisions?: String array containing any of:'Approve''Deny''DontKnow''NotNotified''NotReviewed';

/**
   * The display name for the history definition.
   */
readonly displayName?: string;

/**
   * Set of access review history instances for this history definition.
   */
readonly instances?: AccessReviewHistoryInstance[];

/**
   * A collection of scopes used when selecting review history data
   */
readonly scopes?: AccessReviewScope[];

/**
   * Recurrence settings for recurring history reports, skip for one-time reports.
   */
readonly settings?: AccessReviewHistoryScheduleSettings;

/**
   * The display name for the parent history definition.
   */
readonly displayName?: string;

/**
   * Date time when history data report expires and the associated data is deleted.
   */
readonly expiration?: string;

/**
   * Date time when the history data report is scheduled to be generated.
   */
readonly fulfilledDateTime?: string;

/**
   * Date time used when selecting review data, all reviews included in data end on or before this date. For use only with one-time/non-recurring reports.
   */
readonly reviewHistoryPeriodEndDateTime?: string;

/**
   * Date time used when selecting review data, all reviews included in data start on or after this date. For use only with one-time/non-recurring reports.
   */
readonly reviewHistoryPeriodStartDateTime?: string;

/**
   * Date time when the history data report is scheduled to be generated.
   */
readonly runDateTime?: string;

/**
   * This is used to indicate the resource id(s) to exclude
   */
readonly excludeResourceId?: string;

/**
   * This is used to indicate the role definition id(s) to exclude
   */
readonly excludeRoleDefinitionId?: string;

/**
   * Flag to indicate whether to expand nested memberships or not.
   */
readonly expandNestedMemberships?: bool;

/**
   * Duration users are inactive for. The value should be in ISO  8601 format (http://en.wikipedia.org/wiki/ISO_8601#Durations).This code can be used to convert TimeSpan to a valid interval string: XmlConvert.ToString(new TimeSpan(hours, minutes, seconds))
   */
readonly inactiveDuration?: string;

/**
   * Flag to indicate whether to expand nested memberships or not.
   */
readonly includeAccessBelowResource?: bool;

/**
   * Flag to indicate whether to expand nested memberships or not.
   */
readonly includeInheritedAccess?: bool;

/**
   * Access Review History Definition recurrence settings.
   */
readonly pattern?: AccessReviewRecurrencePattern;

/**
   * Access Review History Definition recurrence settings.
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
 * AuthorizationAccessreviewhistorydefinitions resource
 */
export class AuthorizationAccessreviewhistorydefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationAccessreviewhistorydefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/accessReviewHistoryDefinitions@2021-12-01-preview";
  }

  protected getResourceBody(props: AuthorizationAccessreviewhistorydefinitionsProps): string {
    return JSON.stringify(
        {decisions: ["string"], displayName: "string", instances: [{properties: {displayName: "string", expiration: "string", fulfilledDateTime: "string", reviewHistoryPeriodEndDateTime: "string", reviewHistoryPeriodStartDateTime: "string", runDateTime: "string"}}], scopes: [{excludeResourceId: "string", excludeRoleDefinitionId: "string", expandNestedMemberships: "${bool}", inactiveDuration: "string", includeAccessBelowResource: "${bool}", includeInheritedAccess: "${bool}"}], settings: {pattern: {interval: "${int}", type: "string"}, range: {endDate: "string", numberOfOccurrences: "${int}", startDate: "string", type: "string"}}}
    );
  }
}
