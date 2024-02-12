import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsCostsProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsCosts resource
 */
export class DevtestlabLabsCosts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsCostsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/costs@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsCostsProps): string {
    return JSON.stringify(
        {properties: {createdDate: "string", currencyCode: "string", endDateTime: "string", startDateTime: "string", targetCost: {costThresholds: [{displayOnChart: "string", notificationSent: "string", percentageThreshold: {thresholdValue: "${int}"}, sendNotificationWhenExceeded: "string", thresholdId: "string"}], cycleEndDateTime: "string", cycleStartDateTime: "string", cycleType: "string", status: "string", target: "${int}"}}}
    );
  }
}
