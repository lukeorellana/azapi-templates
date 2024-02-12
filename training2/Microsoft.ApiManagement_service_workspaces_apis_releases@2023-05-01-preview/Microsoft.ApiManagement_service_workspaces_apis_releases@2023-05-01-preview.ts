import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesApisReleasesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:apis;

/**
   * Identifier of the API the release belongs to.
   */
readonly apiId?: string;

/**
   * Release Notes
   */
readonly notes?: string;
}

/**
 * ApimanagementServiceWorkspacesApisReleases resource
 */
export class ApimanagementServiceWorkspacesApisReleases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesApisReleasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/apis/releases@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesApisReleasesProps): string {
    return JSON.stringify(
        {properties: {apiId: "string", notes: "string"}}
    );
  }
}
