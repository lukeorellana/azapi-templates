import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesSchemasProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesSchemas resource
 */
export class ApimanagementServiceWorkspacesSchemas extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesSchemasProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/schemas@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesSchemasProps): string {
    return JSON.stringify(
        {properties: {description: "string", schemaType: "string"}}
    );
  }
}
