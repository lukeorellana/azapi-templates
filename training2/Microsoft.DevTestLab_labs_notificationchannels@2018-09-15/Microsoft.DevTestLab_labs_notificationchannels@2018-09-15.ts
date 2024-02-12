import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevtestlabLabsNotificationchannelsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:labs;

/**
   * Description of notification.
   */
readonly description?: string;

/**
   * The email recipient to send notifications to (can be a list of semi-colon separated email addresses).
   */
readonly emailRecipient?: string;

/**
   * The list of event for which this notification is enabled.
   */
readonly events?: Event[];

/**
   * The locale to use when sending a notification (fallback for unsupported languages is EN).
   */
readonly notificationLocale?: string;

/**
   * The webhook URL to send notifications to.
   */
readonly webHookUrl?: string;

/**
   * The event type for which this notification is enabled (i.e. AutoShutdown, Cost)
   */
readonly eventName?: 'AutoShutdown''Cost';
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
