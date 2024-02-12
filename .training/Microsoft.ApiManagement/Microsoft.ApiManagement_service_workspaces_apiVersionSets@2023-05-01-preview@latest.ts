import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesApiversionsetsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesApiversionsets resource
 */
export class ApimanagementServiceWorkspacesApiversionsets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesApiversionsetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/apiVersionSets@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesApiversionsetsProps): string {
    return JSON.stringify(
        {properties: {description: "string", displayName: "string", versionHeaderName: "string", versioningScheme: "string", versionQueryName: "string"}}
    );
  }
}