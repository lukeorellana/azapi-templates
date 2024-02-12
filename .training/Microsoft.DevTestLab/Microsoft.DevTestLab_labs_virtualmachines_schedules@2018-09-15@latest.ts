import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsVirtualmachinesSchedulesProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsVirtualmachinesSchedules resource
 */
export class DevtestlabLabsVirtualmachinesSchedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsVirtualmachinesSchedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/virtualmachines/schedules@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsVirtualmachinesSchedulesProps): string {
    return JSON.stringify(
        {properties: {dailyRecurrence: {time: "string"}, hourlyRecurrence: {minute: "${int}"}, notificationSettings: {emailRecipient: "string", notificationLocale: "string", status: "string", timeInMinutes: "${int}", webhookUrl: "string"}, status: "string", targetResourceId: "string", taskType: "string", weeklyRecurrence: {time: "string", weekdays: ["string"]}}}
    );
  }
}
