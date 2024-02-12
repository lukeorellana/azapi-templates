import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceNotificationsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceNotifications resource
 */
export class ApimanagementServiceNotifications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceNotificationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/notifications@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceNotificationsProps): string {
    return JSON.stringify(
        
    );
  }
}
