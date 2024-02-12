import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabSchedulesProps extends IAzAPIBaseProps {
/**
   * If the schedule will occur once each day of the week, specify the daily recurrence.
   */
readonly dailyRecurrence?: DayDetails;

/**
   * If the schedule will occur multiple times a day, specify the hourly recurrence.
   */
readonly hourlyRecurrence?: HourDetails;

/**
   * Notification settings.
   */
readonly notificationSettings?: NotificationSettings;

/**
   * The status of the schedule (i.e. Enabled, Disabled)
   */
readonly status?: 'Disabled''Enabled';

/**
   * The resource ID to which the schedule belongs
   */
readonly targetResourceId?: string;

/**
   * The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
   */
readonly taskType?: string;

/**
   * If the schedule will occur only some days of the week, specify the weekly recurrence.
   */
readonly weeklyRecurrence?: WeekDetails;

/**
   * The time of day the schedule will occur.
   */
readonly time?: string;

/**
   * Minutes of the hour the schedule will run.
   */
readonly minute?: number;

/**
   * The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
   */
readonly emailRecipient?: string;

/**
   * The locale to use when sending a notification (fallback for unsupported languages is EN).
   */
readonly notificationLocale?: string;

/**
   * If notifications are enabled for this schedule (i.e. Enabled, Disabled).
   */
readonly status?: 'Disabled''Enabled';

/**
   * Time in minutes before event at which notification will be sent.
   */
readonly timeInMinutes?: number;

/**
   * The webhook URL to which the notification will be sent.
   */
readonly webhookUrl?: string;

/**
   * The time of the day the schedule will occur.
   */
readonly time?: string;

/**
   * The days of the week for which the schedule is set (e.g. Sunday, Monday, Tuesday, etc.).
   */
readonly weekdays?: string[];
}

/**
 * DevtestlabSchedules resource
 */
export class DevtestlabSchedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabSchedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/schedules@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabSchedulesProps): string {
    return JSON.stringify(
        {properties: {dailyRecurrence: {time: "string"}, hourlyRecurrence: {minute: "${int}"}, notificationSettings: {emailRecipient: "string", notificationLocale: "string", status: "string", timeInMinutes: "${int}", webhookUrl: "string"}, status: "string", targetResourceId: "string", taskType: "string", weeklyRecurrence: {time: "string", weekdays: ["string"]}}}
    );
  }
}
