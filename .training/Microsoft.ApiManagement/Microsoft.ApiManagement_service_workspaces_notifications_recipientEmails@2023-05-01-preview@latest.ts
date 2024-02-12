import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesNotificationsRecipientemailsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesNotificationsRecipientemails resource
 */
export class ApimanagementServiceWorkspacesNotificationsRecipientemails extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesNotificationsRecipientemailsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/notifications/recipientEmails@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesNotificationsRecipientemailsProps): string {
    return JSON.stringify(
        
    );
  }
}
