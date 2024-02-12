import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesGroupsUsersProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesGroupsUsers resource
 */
export class ApimanagementServiceWorkspacesGroupsUsers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesGroupsUsersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/groups/users@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesGroupsUsersProps): string {
    return JSON.stringify(
        
    );
  }
}
