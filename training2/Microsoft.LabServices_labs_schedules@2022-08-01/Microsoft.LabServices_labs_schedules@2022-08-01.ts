import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LabservicesLabsSchedulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labs;

/**
   * Notes for this schedule.
   */
readonly notes?: string;

/**
   * The recurrence pattern of the scheduled actions.
   */
readonly recurrencePattern?: RecurrencePattern;

/**
   * When lab user virtual machines will be started. Timestamp offsets will be ignored and timeZoneId is used instead.
   */
readonly startAt?: string;

/**
   * When lab user virtual machines will be stopped. Timestamp offsets will be ignored and timeZoneId is used instead.
   */
readonly stopAt?: string;

/**
   * The IANA timezone id for the schedule.
   */
readonly timeZoneId?: string;

/**
   * When the recurrence will expire. This date is inclusive.
   */
readonly expirationDate: string;

/**
   * The frequency of the recurrence.
   */
readonly frequency: 'Daily''Weekly';

/**
   * The interval to invoke the schedule on. For example, interval = 2 and RecurrenceFrequency.Daily will run every 2 days. When no interval is supplied, an interval of 1 is used.
   */
readonly interval?: number;

/**
   * The week days the schedule runs. Used for when the Frequency is set to Weekly.
   */
readonly weekDays?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';
}

/**
 * LabservicesLabsSchedules resource
 */
export class LabservicesLabsSchedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LabservicesLabsSchedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.LabServices/labs/schedules@2022-08-01";
  }

  protected getResourceBody(props: LabservicesLabsSchedulesProps): string {
    return JSON.stringify(
        {properties: {notes: "string", recurrencePattern: {expirationDate: "string", frequency: "string", interval: "${int}", weekDays: ["string"]}, startAt: "string", stopAt: "string", timeZoneId: "string"}}
    );
  }
}
