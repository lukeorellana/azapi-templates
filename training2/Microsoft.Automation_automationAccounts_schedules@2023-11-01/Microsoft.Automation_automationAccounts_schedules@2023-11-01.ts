import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsSchedulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:automationAccounts;

/**
   * Gets or sets the AdvancedSchedule.
   */
readonly advancedSchedule?: AdvancedSchedule;

/**
   * Gets or sets the description of the schedule.
   */
readonly description?: string;

/**
   * Gets or sets the end time of the schedule.
   */
readonly expiryTime?: string;

/**
   * Gets or sets the frequency of the schedule.
   */
readonly frequency: 'Day''Hour''Minute''Month''OneTime''Week';

/**
   * Gets or sets the interval of the schedule.
   */
readonly interval?: For Bicep, you can use theany()function.;

/**
   * Gets or sets the start time of the schedule.
   */
readonly startTime: string;

/**
   * Gets or sets the time zone of the schedule.
   */
readonly timeZone?: string;

/**
   * Days of the month that the job should execute on. Must be between 1 and 31.
   */
readonly monthDays?: number[];

/**
   * Occurrences of days within a month.
   */
readonly monthlyOccurrences?: AdvancedScheduleMonthlyOccurrence[];

/**
   * Days of the week that the job should execute on.
   */
readonly weekDays?: string[];

/**
   * Day of the occurrence. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
   */
readonly day?: 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Occurrence of the week within the month. Must be between 1 and 5
   */
readonly occurrence?: number;
}

/**
 * AutomationAutomationaccountsSchedules resource
 */
export class AutomationAutomationaccountsSchedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsSchedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/schedules@2023-11-01";
  }

  protected getResourceBody(props: AutomationAutomationaccountsSchedulesProps): string {
    return JSON.stringify(
        {properties: {advancedSchedule: {monthDays: ["${int}"], monthlyOccurrences: [{day: "string", occurrence: "${int}"}], weekDays: ["string"]}, description: "string", expiryTime: "string", frequency: "string", startTime: "string", timeZone: "string"}}
    );
  }
}
