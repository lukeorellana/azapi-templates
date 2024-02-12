import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationScalingplansPersonalschedulesProps extends IAzAPIBaseProps {

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
