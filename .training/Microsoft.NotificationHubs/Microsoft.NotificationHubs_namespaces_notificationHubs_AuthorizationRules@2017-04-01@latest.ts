import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NotificationhubsNamespacesNotificationhubsAuthorizationrulesProps extends IAzAPIBaseProps {

}

/**
 * NotificationhubsNamespacesNotificationhubsAuthorizationrules resource
 */
export class NotificationhubsNamespacesNotificationhubsAuthorizationrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NotificationhubsNamespacesNotificationhubsAuthorizationrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2017-04-01";
  }

  protected getResourceBody(props: NotificationhubsNamespacesNotificationhubsAuthorizationrulesProps): string {
    return JSON.stringify(
        {properties: {rights: ["string"]}}
    );
  }
}
