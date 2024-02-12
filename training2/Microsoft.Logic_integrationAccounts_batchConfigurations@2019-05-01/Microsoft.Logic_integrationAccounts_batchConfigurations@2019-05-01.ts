import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationaccountsBatchconfigurationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:numberegrationAccounts;

/**
   * The name of the batch group.
   */
readonly batchGroupName: string;

/**
   * The artifact changed time.
   */
readonly changedTime?: string;

/**
   * The artifact creation time.
   */
readonly createdTime?: string;

/**
   * Anything
   */
readonly metadata?: For Bicep, you can use theany()function.;

/**
   * The batch release criteria.
   */
readonly releaseCriteria: BatchReleaseCriteria;

/**
   * The batch size in bytes.
   */
readonly batchSize?: number;

/**
   * The message count.
   */
readonly messageCount?: number;

/**
   * The recurrence.
   */
readonly recurrence?: WorkflowTriggerRecurrence;

/**
   * The end time.
   */
readonly endTime?: string;

/**
   * The frequency.
   */
readonly frequency?: 'Day''Hour''Minute''Month''NotSpecified''Second''Week''Year';

/**
   * The interval.
   */
readonly interval?: number;

/**
   * The recurrence schedule.
   */
readonly schedule?: RecurrenceSchedule;

/**
   * The start time.
   */
readonly startTime?: string;

/**
   * The time zone.
   */
readonly timeZone?: string;

/**
   * The hours.
   */
readonly hours?: number[];

/**
   * The minutes.
   */
readonly minutes?: number[];

/**
   * The month days.
   */
readonly monthDays?: number[];

/**
   * The monthly occurrences.
   */
readonly monthlyOccurrences?: RecurrenceScheduleOccurrence[];

/**
   * The days of the week.
   */
readonly weekDays?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * The day of the week.
   */
readonly day?: 'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * The occurrence.
   */
readonly occurrence?: number;
}

/**
 * LogicIntegrationaccountsBatchconfigurations resource
 */
export class LogicIntegrationaccountsBatchconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsBatchconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/batchConfigurations@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsBatchconfigurationsProps): string {
    return JSON.stringify(
        {properties: {batchGroupName: "string", changedTime: "string", createdTime: "string", releaseCriteria: {batchSize: "${int}", messageCount: "${int}", recurrence: {endTime: "string", frequency: "string", interval: "${int}", schedule: {hours: ["${int}"], minutes: ["${int}"], monthDays: ["${int}"], monthlyOccurrences: [{day: "string", occurrence: "${int}"}], weekDays: ["string"]}, startTime: "string", timeZone: "string"}}}}
    );
  }
}
