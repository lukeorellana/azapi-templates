import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationScalingplansPooledschedulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:scalingPlans;

/**
   * Set of days of the week on which this schedule is active.
   */
readonly daysOfWeek?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Load balancing algorithm for off-peak period.
   */
readonly offPeakLoadBalancingAlgorithm?: 'BreadthFirst''DepthFirst';

/**
   * Starting time for off-peak period.
   */
readonly offPeakStartTime?: Time;

/**
   * Load balancing algorithm for peak period.
   */
readonly peakLoadBalancingAlgorithm?: 'BreadthFirst''DepthFirst';

/**
   * Starting time for peak period.
   */
readonly peakStartTime?: Time;

/**
   * Capacity threshold for ramp down period.
   */
readonly rampDownCapacityThresholdPct?: numberConstranumbers:Min value = 1Max value = 100;

/**
   * Should users be logged off forcefully from hosts.
   */
readonly rampDownForceLogoffUsers?: bool;

/**
   * Load balancing algorithm for ramp down period.
   */
readonly rampDownLoadBalancingAlgorithm?: 'BreadthFirst''DepthFirst';

/**
   * Minimum host percentage for ramp down period.
   */
readonly rampDownMinimumHostsPct?: numberConstranumbers:Min value = 0Max value = 100;

/**
   * Notification message for users during ramp down period.
   */
readonly rampDownNotificationMessage?: string;

/**
   * Starting time for ramp down period.
   */
readonly rampDownStartTime?: Time;

/**
   * Specifies when to stop hosts during ramp down period.
   */
readonly rampDownStopHostsWhen?: 'ZeroActiveSessions''ZeroSessions';

/**
   * Number of minutes to wait to stop hosts during ramp down period.
   */
readonly rampDownWaitTimeMinutes?: number;

/**
   * Capacity threshold for ramp up period.
   */
readonly rampUpCapacityThresholdPct?: numberConstranumbers:Min value = 1Max value = 100;

/**
   * Load balancing algorithm for ramp up period.
   */
readonly rampUpLoadBalancingAlgorithm?: 'BreadthFirst''DepthFirst';

/**
   * Minimum host percentage for ramp up period.
   */
readonly rampUpMinimumHostsPct?: numberConstranumbers:Min value = 0Max value = 100;

/**
   * Starting time for ramp up period.
   */
readonly rampUpStartTime?: Time;

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
 * DesktopvirtualizationScalingplansPooledschedules resource
 */
export class DesktopvirtualizationScalingplansPooledschedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DesktopvirtualizationScalingplansPooledschedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DesktopVirtualization/scalingPlans/pooledSchedules@2023-11-01-preview";
  }

  protected getResourceBody(props: DesktopvirtualizationScalingplansPooledschedulesProps): string {
    return JSON.stringify(
        {properties: {daysOfWeek: ["string"], offPeakLoadBalancingAlgorithm: "string", offPeakStartTime: {hour: "${int}", minute: "${int}"}, peakLoadBalancingAlgorithm: "string", peakStartTime: {hour: "${int}", minute: "${int}"}, rampDownCapacityThresholdPct: "${int}", rampDownForceLogoffUsers: "${bool}", rampDownLoadBalancingAlgorithm: "string", rampDownMinimumHostsPct: "${int}", rampDownNotificationMessage: "string", rampDownStartTime: {hour: "${int}", minute: "${int}"}, rampDownStopHostsWhen: "string", rampDownWaitTimeMinutes: "${int}", rampUpCapacityThresholdPct: "${int}", rampUpLoadBalancingAlgorithm: "string", rampUpMinimumHostsPct: "${int}", rampUpStartTime: {hour: "${int}", minute: "${int}"}}}
    );
  }
}
