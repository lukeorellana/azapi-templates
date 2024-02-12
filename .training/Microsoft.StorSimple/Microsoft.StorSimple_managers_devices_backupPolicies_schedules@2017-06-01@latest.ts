import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface StorsimpleManagersDevicesBackuppoliciesSchedulesProps extends IAzAPIBaseProps {

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
