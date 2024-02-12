import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesNotificationsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesNotifications resource
 */
export class ApimanagementServiceWorkspacesNotifications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesNotificationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/notifications@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesNotificationsProps): string {
    return JSON.stringify(
        
    );
  }
}
