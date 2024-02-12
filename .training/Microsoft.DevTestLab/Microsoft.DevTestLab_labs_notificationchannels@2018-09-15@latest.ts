import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsNotificationchannelsProps extends IAzAPIBaseProps {

}

/**
 * DevtestlabLabsNotificationchannels resource
 */
export class DevtestlabLabsNotificationchannels extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevtestlabLabsNotificationchannelsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevTestLab/labs/notificationchannels@2018-09-15";
  }

  protected getResourceBody(props: DevtestlabLabsNotificationchannelsProps): string {
    return JSON.stringify(
        {properties: {description: "string", emailRecipient: "string", events: [{eventName: "string"}], notificationLocale: "string", webHookUrl: "string"}}
    );
  }
}
