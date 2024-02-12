import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesSubscriptionsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesSubscriptions resource
 */
export class ApimanagementServiceWorkspacesSubscriptions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesSubscriptionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/subscriptions@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesSubscriptionsProps): string {
    return JSON.stringify(
        {properties: {allowTracing: "${bool}", displayName: "string", ownerId: "string", primaryKey: "string", scope: "string", secondaryKey: "string", state: "string"}}
    );
  }
}
