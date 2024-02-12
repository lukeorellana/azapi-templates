import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesPoliciesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesPolicies resource
 */
export class ApimanagementServiceWorkspacesPolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesPoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/policies@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesPoliciesProps): string {
    return JSON.stringify(
        {properties: {format: "string", value: "string"}}
    );
  }
}
