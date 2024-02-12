import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationScalingplansPersonalschedulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:scalingPlans;

/**
   * Set of days of the week on which this schedule is active.
   */
readonly daysOfWeek?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Action to be taken after a user disconnect during the off-peak period.
   */
readonly offPeakActionOnDisconnect?: 'Deallocate''Hibernate''None';

/**
   * Action to be taken after a logoff during the off-peak period.
   */
readonly offPeakActionOnLogoff?: 'Deallocate''Hibernate''None';

/**
   * The time in minutes to wait before performing the desired session handling action when a user disconnects during the off-peak period.
   */
readonly offPeakMinutesToWaitOnDisconnect?: numberConstranumbers:Min value = 0;

/**
   * The time in minutes to wait before performing the desired session handling action when a user logs off during the off-peak period.
   */
readonly offPeakMinutesToWaitOnLogoff?: numberConstranumbers:Min value = 0;

/**
   * Starting time for off-peak period.
   */
readonly offPeakStartTime?: Time;

/**
   * The desired configuration of Start VM On Connect for the hostpool during the off-peak phase.
   */
readonly offPeakStartVMOnConnect?: 'Disable''Enable';

/**
   * Action to be taken after a user disconnect during the peak period.
   */
readonly peakActionOnDisconnect?: 'Deallocate''Hibernate''None';

/**
   * Action to be taken after a logoff during the peak period.
   */
readonly peakActionOnLogoff?: 'Deallocate''Hibernate''None';

/**
   * The time in minutes to wait before performing the desired session handling action when a user disconnects during the peak period.
   */
readonly peakMinutesToWaitOnDisconnect?: numberConstranumbers:Min value = 0;

/**
   * The time in minutes to wait before performing the desired session handling action when a user logs off during the peak period.
   */
readonly peakMinutesToWaitOnLogoff?: numberConstranumbers:Min value = 0;

/**
   * Starting time for peak period.
   */
readonly peakStartTime?: Time;

/**
   * The desired configuration of Start VM On Connect for the hostpool during the peak phase.
   */
readonly peakStartVMOnConnect?: 'Disable''Enable';

/**
   * Action to be taken after a user disconnect during the ramp down period.
   */
readonly rampDownActionOnDisconnect?: 'Deallocate''Hibernate''None';

/**
   * Action to be taken after a logoff during the ramp down period.
   */
readonly rampDownActionOnLogoff?: 'Deallocate''Hibernate''None';

/**
   * The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp down period.
   */
readonly rampDownMinutesToWaitOnDisconnect?: numberConstranumbers:Min value = 0;

/**
   * The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp down period.
   */
readonly rampDownMinutesToWaitOnLogoff?: numberConstranumbers:Min value = 0;

/**
   * Starting time for ramp down period.
   */
readonly rampDownStartTime?: Time;

/**
   * The desired configuration of Start VM On Connect for the hostpool during the ramp down phase.
   */
readonly rampDownStartVMOnConnect?: 'Disable''Enable';

/**
   * Action to be taken after a user disconnect during the ramp up period.
   */
readonly rampUpActionOnDisconnect?: 'Deallocate''Hibernate''None';

/**
   * Action to be taken after a logoff during the ramp up period.
   */
readonly rampUpActionOnLogoff?: 'Deallocate''Hibernate''None';

/**
   * The desired startup behavior during the ramp up period for personal vms in the hostpool.
   */
readonly rampUpAutoStartHosts?: 'All''None''WithAssignedUser';

/**
   * The time in minutes to wait before performing the desired session handling action when a user disconnects during the ramp up period.
   */
readonly rampUpMinutesToWaitOnDisconnect?: numberConstranumbers:Min value = 0;

/**
   * The time in minutes to wait before performing the desired session handling action when a user logs off during the ramp up period.
   */
readonly rampUpMinutesToWaitOnLogoff?: numberConstranumbers:Min value = 0;

/**
   * Starting time for ramp up period.
   */
readonly rampUpStartTime?: Time;

/**
   * The desired configuration of Start VM On Connect for the hostpool during the ramp up phase. If this is disabled, session hosts must be turned on using rampUpAutoStartHosts or by turning them on manually.
   */
readonly rampUpStartVMOnConnect?: 'Disable''Enable';

/**
   * The hour.
   */
readonly hour: number Constranumbers:Min value = 0Max value = 23;

/**
   * The minute.
   */
readonly minute: number Constranumbers:Min value = 0Max value = 59;
}

/**
 * DesktopvirtualizationScalingplansPersonalschedules resource
 */
export class DesktopvirtualizationScalingplansPersonalschedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DesktopvirtualizationScalingplansPersonalschedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DesktopVirtualization/scalingPlans/personalSchedules@2023-11-01-preview";
  }

  protected getResourceBody(props: DesktopvirtualizationScalingplansPersonalschedulesProps): string {
    return JSON.stringify(
        {properties: {daysOfWeek: ["string"], offPeakActionOnDisconnect: "string", offPeakActionOnLogoff: "string", offPeakMinutesToWaitOnDisconnect: "${int}", offPeakMinutesToWaitOnLogoff: "${int}", offPeakStartTime: {hour: "${int}", minute: "${int}"}, offPeakStartVMOnConnect: "string", peakActionOnDisconnect: "string", peakActionOnLogoff: "string", peakMinutesToWaitOnDisconnect: "${int}", peakMinutesToWaitOnLogoff: "${int}", peakStartTime: {hour: "${int}", minute: "${int}"}, peakStartVMOnConnect: "string", rampDownActionOnDisconnect: "string", rampDownActionOnLogoff: "string", rampDownMinutesToWaitOnDisconnect: "${int}", rampDownMinutesToWaitOnLogoff: "${int}", rampDownStartTime: {hour: "${int}", minute: "${int}"}, rampDownStartVMOnConnect: "string", rampUpActionOnDisconnect: "string", rampUpActionOnLogoff: "string", rampUpAutoStartHosts: "string", rampUpMinutesToWaitOnDisconnect: "${int}", rampUpMinutesToWaitOnLogoff: "${int}", rampUpStartTime: {hour: "${int}", minute: "${int}"}, rampUpStartVMOnConnect: "string"}}
    );
  }
}
