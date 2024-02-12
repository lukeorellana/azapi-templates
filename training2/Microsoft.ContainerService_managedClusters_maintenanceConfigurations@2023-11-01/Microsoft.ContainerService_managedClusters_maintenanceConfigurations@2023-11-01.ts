import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerserviceManagedclustersMaintenanceconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedClusters;

/**
   * Maintenance window for the maintenance configuration.
   */
readonly maintenanceWindow?: ManumberenanceWindow;

/**
   * Time slots on which upgrade is not allowed.
   */
readonly notAllowedTime?: TimeSpan[];

/**
   * If two array entries specify the same day of the week, the applied configuration is the union of times in both entries.
   */
readonly timeInWeek?: TimeInWeek[];

/**
   * Length of maintenance window range from 4 to 24 hours.
   */
readonly durationHours: number Constranumbers:Min value = 4Max value = 24;

/**
   * Date ranges on which upgrade is not allowed. 'utcOffset' applies to this field. For example, with 'utcOffset: +02:00' and 'dateSpan' being '2022-12-23' to '2023-01-03', maintenance will be blocked from '2022-12-22 22:00' to '2023-01-03 22:00' in UTC time.
   */
readonly notAllowedDates?: DateSpan[];

/**
   * Recurrence schedule for the maintenance window.
   */
readonly schedule: Schedule;

/**
   * The date the maintenance window activates. If the current date is before this date, the maintenance window is inactive and will not be used for upgrades. If not specified, the maintenance window will be active right away.
   */
readonly startDate?: string;

/**
   * The start time of the maintenance window. Accepted values are from '00:00' to '23:59'. 'utcOffset' applies to this field. For example: '02:00' with 'utcOffset: +02:00' means UTC time '00:00'.
   */
readonly startTime: string Constranumbers:Pattern =^\d{2}:\d{2}$;

/**
   * The UTC offset in format +/-HH:mm. For example, '+05:30' for IST and '-07:00' for PST. If not specified, the default is '+00:00'.
   */
readonly utcOffset?: stringConstranumbers:Pattern =^(-;

/**
   * The end date of the date span.
   */
readonly end: string;

/**
   * The start date of the date span.
   */
readonly start: string;

/**
   * For schedules like: 'recur every month on the 15th' or 'recur every 3 months on the 20th'.
   */
readonly absoluteMonthly?: AbsoluteMonthlySchedule;

/**
   * For schedules like: 'recur every day' or 'recur every 3 days'.
   */
readonly daily?: DailySchedule;

/**
   * For schedules like: 'recur every month on the first Monday' or 'recur every 3 months on last Friday'.
   */
readonly relativeMonthly?: RelativeMonthlySchedule;

/**
   * For schedules like: 'recur every Monday' or 'recur every 3 weeks on Wednesday'.
   */
readonly weekly?: WeeklySchedule;

/**
   * The date of the month.
   */
readonly dayOfMonth: number Constranumbers:Min value = 1Max value = 31;

/**
   * Specifies the number of months between each set of occurrences.
   */
readonly intervalMonths: number Constranumbers:Min value = 1Max value = 6;

/**
   * Specifies the number of days between each set of occurrences.
   */
readonly intervalDays: number Constranumbers:Min value = 1Max value = 7;

/**
   * Specifies on which day of the week the maintenance occurs.
   */
readonly dayOfWeek: 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Specifies the number of months between each set of occurrences.
   */
readonly intervalMonths: number Constranumbers:Min value = 1Max value = 6;

/**
   * Specifies on which week of the month the dayOfWeek applies.
   */
readonly weekIndex: 'First''Fourth''Last''Second''Third';

/**
   * Specifies on which day of the week the maintenance occurs.
   */
readonly dayOfWeek: 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Specifies the number of weeks between each set of occurrences.
   */
readonly intervalWeeks: number Constranumbers:Min value = 1Max value = 4;

/**
   * The end of a time span
   */
readonly end?: string;

/**
   * The start of a time span
   */
readonly start?: string;

/**
   * The day of the week.
   */
readonly day?: 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.
   */
readonly hourSlots?: number[]Constranumbers:Min value = 0Max value = 23;
}

/**
 * ContainerserviceManagedclustersMaintenanceconfigurations resource
 */
export class ContainerserviceManagedclustersMaintenanceconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerserviceManagedclustersMaintenanceconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerService/managedClusters/maintenanceConfigurations@2023-11-01";
  }

  protected getResourceBody(props: ContainerserviceManagedclustersMaintenanceconfigurationsProps): string {
    return JSON.stringify(
        {properties: {maintenanceWindow: {durationHours: "${int}", notAllowedDates: [{end: "string", start: "string"}], schedule: {absoluteMonthly: {dayOfMonth: "${int}", intervalMonths: "${int}"}, daily: {intervalDays: "${int}"}, relativeMonthly: {dayOfWeek: "string", intervalMonths: "${int}", weekIndex: "string"}, weekly: {dayOfWeek: "string", intervalWeeks: "${int}"}}, startDate: "string", startTime: "string", utcOffset: "string"}, notAllowedTime: [{end: "string", start: "string"}], timeInWeek: [{day: "string", hourSlots: ["${int}"]}]}}
    );
  }
}
