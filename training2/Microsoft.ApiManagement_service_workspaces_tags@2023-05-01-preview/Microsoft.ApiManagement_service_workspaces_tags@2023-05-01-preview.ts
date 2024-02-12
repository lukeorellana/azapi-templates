import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesTagsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Tag name.
   */
readonly displayName: string;
}

/**
 * ApimanagementServiceWorkspacesTags resource
 */
export class ApimanagementServiceWorkspacesTags extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesTagsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/tags@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesTagsProps): string {
    return JSON.stringify(
        {properties: {displayName: "string"}}
    );
  }
}
