import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NotificationhubsNamespacesNotificationhubsAuthorizationrulesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:notificationHubs;

/**
   * The rights associated with the rule.
   */
readonly rights?: String array containing any of:'Listen''Manage''Send';
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
