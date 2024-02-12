import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabSchedulesProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabSchedules resource
 */
export class DevtestlabSchedules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabSchedulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/schedules@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabSchedulesProps): string {
    return JSON.stringify(
        {properties: {dailyRecurrence: {time: "string"}, hourlyRecurrence: {minute: "${int}"}, notificationSettings: {emailRecipient: "string", notificationLocale: "string", status: "string", timeInMinutes: "${int}", webhookUrl: "string"}, status: "string", targetResourceId: "string", taskType: "string", weeklyRecurrence: {time: "string", weekdays: ["string"]}}}
    );
  }
}
