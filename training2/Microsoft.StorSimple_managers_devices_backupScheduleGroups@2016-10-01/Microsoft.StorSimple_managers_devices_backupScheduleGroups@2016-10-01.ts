import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesBackupschedulegroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: devices;

/**
   * The start time. When this field is specified we will generate Default GrandFather Father Son Backup Schedules.
   */
readonly startTime: Time;

/**
   * The hour.
   */
readonly hour: number;

/**
   * The minute.
   */
readonly minute: number;
}

/**
 * StorsimpleManagersDevicesBackupschedulegroups resource
 */
export class StorsimpleManagersDevicesBackupschedulegroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: StorsimpleManagersDevicesBackupschedulegroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.StorSimple/managers/devices/backupScheduleGroups@2016-10-01";
  }

  protected getResourceBody(props: StorsimpleManagersDevicesBackupschedulegroupsProps): string {
    return JSON.stringify(
        {properties: {startTime: {hour: "${int}", minute: "${int}"}}}
    );
  }
}
