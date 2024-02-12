import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceNotificationsRecipientemailsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceNotificationsRecipientemails resource
 */
export class ApimanagementServiceNotificationsRecipientemails extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceNotificationsRecipientemailsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/notifications/recipientEmails@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceNotificationsRecipientemailsProps): string {
    return JSON.stringify(
        
    );
  }
}
