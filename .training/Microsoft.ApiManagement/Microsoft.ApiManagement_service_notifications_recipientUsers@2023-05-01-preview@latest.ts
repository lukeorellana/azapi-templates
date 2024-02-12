import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceNotificationsRecipientusersProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceNotificationsRecipientusers resource
 */
export class ApimanagementServiceNotificationsRecipientusers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceNotificationsRecipientusersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/notifications/recipientUsers@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceNotificationsRecipientusersProps): string {
    return JSON.stringify(
        
    );
  }
}
