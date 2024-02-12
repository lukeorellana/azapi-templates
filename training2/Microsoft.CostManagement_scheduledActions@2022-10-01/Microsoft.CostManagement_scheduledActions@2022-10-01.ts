import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CostmanagementScheduledactionsProps extends IAzAPIBaseProps {
/**
   * Kind of the scheduled action.
   */
readonly kind?: 'Email''InsightAlert';

/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Resource Etag. For update calls, eTag is mandatory. Fetch the resource's eTag by doing a 'GET' call first and then including the latest eTag as part of the request body or 'If-Match' header while performing the update. For create calls, eTag is not required.
   */
readonly eTag?: string;

/**
   * Scheduled action name.
   */
readonly displayName: string;

/**
   * Destination format of the view data. This is optional.
   */
readonly fileDestination?: FileDestination;

/**
   * Notification properties based on scheduled action kind.
   */
readonly notification: NotificationProperties;

/**
   * Email address of the point of contact that should get the unsubscribe requests and notification emails.
   */
readonly notificationEmail?: string;

/**
   * Schedule of the scheduled action.
   */
readonly schedule: ScheduleProperties;

/**
   * Cost Management scope like 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
   */
readonly scope?: string;

/**
   * Status of the scheduled action.
   */
readonly status: 'Disabled''Enabled''Expired';

/**
   * Cost analysis viewId used for scheduled action. For example, '/providers/Microsoft.CostManagement/views/swaggerExample'
   */
readonly viewId: string;

/**
   * Destination of the view data. Currently only CSV format is supported.
   */
readonly fileFormats?: String array containing any of:'Csv';

/**
   * Locale of the email.
   */
readonly language?: string;

/**
   * Optional message to be added in the email. Length is limited to 250 characters.
   */
readonly message?: string;

/**
   * Regional format used for formatting date/time and currency values in the email.
   */
readonly regionalFormat?: string;

/**
   * Subject of the email. Length is limited to 70 characters.
   */
readonly subject: string;

/**
   * Array of email addresses.
   */
readonly to: string[];

/**
   * UTC day on which cost analysis data will be emailed. Must be between 1 and 31. This property is applicable when frequency is Monthly and overrides weeksOfMonth or daysOfWeek.
   */
readonly dayOfMonth?: number;

/**
   * Day names in english on which cost analysis data will be emailed. This property is applicable when frequency is Weekly or Monthly.
   */
readonly daysOfWeek?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * The end date and time of the scheduled action (UTC).
   */
readonly endDate: string;

/**
   * Frequency of the schedule.
   */
readonly frequency: 'Daily''Monthly''Weekly';

/**
   * UTC time at which cost analysis data will be emailed.
   */
readonly hourOfDay?: number;

/**
   * The start date and time of the scheduled action (UTC).
   */
readonly startDate: string;

/**
   * Weeks in which cost analysis data will be emailed. This property is applicable when frequency is Monthly and used in combination with daysOfWeek.
   */
readonly weeksOfMonth?: String array containing any of:'First''Fourth''Last''Second''Third';
}

/**
 * CostmanagementScheduledactions resource
 */
export class CostmanagementScheduledactions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementScheduledactionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/scheduledActions@2022-10-01";
  }

  protected getResourceBody(props: CostmanagementScheduledactionsProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", fileDestination: {fileFormats: "Csv"}, notification: {language: "string", message: "string", regionalFormat: "string", subject: "string", to: ["string"]}, notificationEmail: "string", schedule: {dayOfMonth: "${int}", daysOfWeek: ["string"], endDate: "string", frequency: "string", hourOfDay: "${int}", startDate: "string", weeksOfMonth: ["string"]}, scope: "string", status: "string", viewId: "string"}, kind: "string", eTag: "string"}
    );
  }
}
