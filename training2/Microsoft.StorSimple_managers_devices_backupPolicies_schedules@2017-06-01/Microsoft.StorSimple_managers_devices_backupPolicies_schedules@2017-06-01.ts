import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesBackuppoliciesSchedulesProps extends IAzAPIBaseProps {
/**
   * The Kind of the object. Currently only Series8000 is supported
   */
readonly kind?: 'Series8000';

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:backupPolicies;

/**
   * The type of backup which needs to be taken.
   */
readonly backupType: 'CloudSnapshot''LocalSnapshot';

/**
   * The number of backups to be retained.
   */
readonly retentionCount: number;

/**
   * The schedule recurrence.
   */
readonly scheduleRecurrence: ScheduleRecurrence;

/**
   * The schedule status.
   */
readonly scheduleStatus: 'Disabled''Enabled';

/**
   * The start time of the schedule.
   */
readonly startTime: string;

/**
   * The recurrence type.
   */
readonly recurrenceType: 'Daily''Hourly''Minutes''Weekly';

/**
   * The recurrence value.
   */
readonly recurrenceValue: number;

/**
   * The week days list. Applicable only for schedules of recurrence type 'weekly'.
   */
readonly weeklyDaysList?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';
}

/**
 * StorsimpleManagersDevicesBackuppoliciesSchedules resource
 */
export class StorsimpleManagersDevicesBackuppoliciesSchedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesBackuppoliciesSchedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/backupPolicies/schedules@2017-06-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesBackuppoliciesSchedulesProps): string {
    return JSON.stringify(
        {properties: {backupType: "string", retentionCount: "${int}", scheduleRecurrence: {recurrenceType: "string", recurrenceValue: "${int}", weeklyDaysList: ["string"]}, scheduleStatus: "string", startTime: "string"}, kind: "Series8000"}
    );
  }
}
