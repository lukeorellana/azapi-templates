import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesGroupsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesGroups resource
 */
export class ApimanagementServiceWorkspacesGroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesGroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/groups@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesGroupsProps): string {
    return JSON.stringify(
        {properties: {description: "string", displayName: "string", externalId: "string", type: "string"}}
    );
  }
}
