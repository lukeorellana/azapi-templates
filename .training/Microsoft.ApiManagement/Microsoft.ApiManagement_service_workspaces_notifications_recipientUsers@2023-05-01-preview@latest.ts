import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesNotificationsRecipientusersProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesNotificationsRecipientusers resource
 */
export class ApimanagementServiceWorkspacesNotificationsRecipientusers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesNotificationsRecipientusersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/notifications/recipientUsers@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesNotificationsRecipientusersProps): string {
    return JSON.stringify(
        
    );
  }
}
