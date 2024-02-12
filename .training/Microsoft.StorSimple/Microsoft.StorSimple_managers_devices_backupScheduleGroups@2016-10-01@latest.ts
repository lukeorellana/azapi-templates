import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesBackupschedulegroupsProps extends IAzAPIBaseProps {

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
