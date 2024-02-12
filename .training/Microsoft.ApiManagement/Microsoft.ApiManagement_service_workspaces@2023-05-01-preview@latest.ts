import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspaces resource
 */
export class ApimanagementServiceWorkspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesProps): string {
    return JSON.stringify(
        {properties: {description: "string", displayName: "string"}}
    );
  }
}
