import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DevtestlabSchedulesProps extends IAzAPIBaseProps {

}

export class DevtestlabSchedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabSchedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/schedules@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabSchedulesProps): string {
    return JSON.stringify(
      {properties: {dailyRecurrence: {time: "string"}, hourlyRecurrence: {minute: int}, notificationSettings: {emailRecipient: "string", notificationLocale: "string", status: "string", timeInMinutes: int, webhookUrl: "string"}, status: "string", targetResourceId: "string", taskType: "string", weeklyRecurrence: {time: "string", weekdays: ["string"]}}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | The location of the resource. | string |
// | tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
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
