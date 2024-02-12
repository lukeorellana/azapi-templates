import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesGroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Group description.
   */
readonly description?: string;

/**
   * Group name.
   */
readonly displayName: string;

/**
   * Identifier of the external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directoryaad://{tenant}.onmicrosoft.com/groups/{group object id}; otherwise the value is null.
   */
readonly externalId?: string;

/**
   * Group type.
   */
readonly type?: 'custom''external''system';
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