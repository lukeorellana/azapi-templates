import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface CostmanagementScheduledactionsProps extends IAzAPIBaseProps {

}

export class CostmanagementScheduledactions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CostmanagementScheduledactionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CostManagement/scheduledActions@2022-10-01";
  }

  protected getResourceBody(props: CostmanagementScheduledactionsProps): string {
    return JSON.stringify(
      {properties: {displayName: "string", fileDestination: {fileFormats: "Csv"}, notification: {language: "string", message: "string", regionalFormat: "string", subject: "string", to: ["string"]}, notificationEmail: "string", schedule: {dayOfMonth: int, daysOfWeek: ["string"], endDate: "string", frequency: "string", hourOfDay: int, startDate: "string", weeksOfMonth: ["string"]}, scope: "string", status: "string", viewId: "string"}, kind: "string", eTag: "string"}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | kind | Kind of the scheduled action. | 'Email''InsightAlert' |
// | scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
// | eTag | Resource Etag. For update calls, eTag is mandatory. Fetch the resource's eTag by doing a 'GET' call first and then including the latest eTag as part of the request body or 'If-Match' header while performing the update. For create calls, eTag is not required. | string |
// | properties | The properties of the scheduled action. | ScheduledActionProperties |

// | Name | Description | Value |
// |-|-|-|
// | displayName | Scheduled action name. | string (required) |
// | fileDestination | Destination format of the view data. This is optional. | FileDestination |
// | notification | Notification properties based on scheduled action kind. | NotificationProperties(required) |
// | notificationEmail | Email address of the point of contact that should get the unsubscribe requests and notification emails. | string |
// | schedule | Schedule of the scheduled action. | ScheduleProperties(required) |
// | scope | Cost Management scope like 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope. | string |
// | status | Status of the scheduled action. | 'Disabled''Enabled''Expired' (required) |
// | viewId | Cost analysis viewId used for scheduled action. For example, '/providers/Microsoft.CostManagement/views/swaggerExample' | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | fileFormats | Destination of the view data. Currently only CSV format is supported. | String array containing any of:'Csv' |

// | Name | Description | Value |
// |-|-|-|
// | language | Locale of the email. | string |
// | message | Optional message to be added in the email. Length is limited to 250 characters. | string |
// | regionalFormat | Regional format used for formatting date/time and currency values in the email. | string |
// | subject | Subject of the email. Length is limited to 70 characters. | string (required) |
// | to | Array of email addresses. | string[] (required) |

// | Name | Description | Value |
// |-|-|-|
// | dayOfMonth | UTC day on which cost analysis data will be emailed. Must be between 1 and 31. This property is applicable when frequency is Monthly and overrides weeksOfMonth or daysOfWeek. | int |
// | daysOfWeek | Day names in english on which cost analysis data will be emailed. This property is applicable when frequency is Weekly or Monthly. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' |
// | endDate | The end date and time of the scheduled action (UTC). | string (required) |
// | frequency | Frequency of the schedule. | 'Daily''Monthly''Weekly' (required) |
// | hourOfDay | UTC time at which cost analysis data will be emailed. | int |
// | startDate | The start date and time of the scheduled action (UTC). | string (required) |
// | weeksOfMonth | Weeks in which cost analysis data will be emailed. This property is applicable when frequency is Monthly and used in combination with daysOfWeek. | String array containing any of:'First''Fourth''Last''Second''Third' |
