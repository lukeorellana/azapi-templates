import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NotificationhubsNamespacesAuthorizationrulesProps extends IAzAPIBaseProps {

}

/**
 * NotificationhubsNamespacesAuthorizationrules resource
 */
export class NotificationhubsNamespacesAuthorizationrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NotificationhubsNamespacesAuthorizationrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.NotificationHubs/namespaces/AuthorizationRules@2017-04-01";
  }

  protected getResourceBody(props: NotificationhubsNamespacesAuthorizationrulesProps): string {
    return JSON.stringify(
        {properties: {rights: ["string"]}}
    );
  }
}
