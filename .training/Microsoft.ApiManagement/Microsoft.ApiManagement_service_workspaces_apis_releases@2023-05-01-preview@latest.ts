import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesApisReleasesProps extends IAzAPIBaseProps {

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
