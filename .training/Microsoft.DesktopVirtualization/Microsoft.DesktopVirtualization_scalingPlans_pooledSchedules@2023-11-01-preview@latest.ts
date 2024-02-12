import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationScalingplansPooledschedulesProps extends IAzAPIBaseProps {

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
