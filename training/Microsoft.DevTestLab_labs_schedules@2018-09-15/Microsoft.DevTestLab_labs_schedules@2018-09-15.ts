import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DevtestlabLabsSchedulesProps extends IAzAPIBaseProps {

}

export class DevtestlabLabsSchedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsSchedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/schedules@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsSchedulesProps): string {
    return JSON.stringify(
      {properties: {dailyRecurrence: {time: "string"}, hourlyRecurrence: {minute: int}, notificationSettings: {emailRecipient: "string", notificationLocale: "string", status: "string", timeInMinutes: int, webhookUrl: "string"}, status: "string", targetResourceId: "string", taskType: "string", weeklyRecurrence: {time: "string", weekdays: ["string"]}}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | location | The location of the resource. | string |
// | tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
// | properties | The properties of the resource. | ScheduleProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | dailyRecurrence | If the schedule will occur once each day of the week, specify the daily recurrence. | DayDetails |
// | hourlyRecurrence | If the schedule will occur multiple times a day, specify the hourly recurrence. | HourDetails |
// | notificationSettings | Notification settings. | NotificationSettings |
// | status | The status of the schedule (i.e. Enabled, Disabled) | 'Disabled''Enabled' |
// | targetResourceId | The resource ID to which the schedule belongs | string |
// | taskType | The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart). | string |
// | weeklyRecurrence | If the schedule will occur only some days of the week, specify the weekly recurrence. | WeekDetails |

// | Name | Description | Value |
// |-|-|-|
// | time | The time of day the schedule will occur. | string |

// | Name | Description | Value |
// |-|-|-|
// | minute | Minutes of the hour the schedule will run. | int |

// | Name | Description | Value |
// |-|-|-|
// | emailRecipient | The email recipient to send notifications to (can be a list of semi-colon separated email addresses). | string |
// | notificationLocale | The locale to use when sending a notification (fallback for unsupported languages is EN). | string |
// | status | If notifications are enabled for this schedule (i.e. Enabled, Disabled). | 'Disabled''Enabled' |
// | timeInMinutes | Time in minutes before event at which notification will be sent. | int |
// | webhookUrl | The webhook URL to which the notification will be sent. | string |

// | Name | Description | Value |
// |-|-|-|
// | time | The time of the day the schedule will occur. | string |
// | weekdays | The days of the week for which the schedule is set (e.g. Sunday, Monday, Tuesday, etc.). | string[] |
