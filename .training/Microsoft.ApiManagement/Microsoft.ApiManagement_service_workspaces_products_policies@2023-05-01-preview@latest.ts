import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesProductsPoliciesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesProductsPolicies resource
 */
export class ApimanagementServiceWorkspacesProductsPolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesProductsPoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/products/policies@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesProductsPoliciesProps): string {
    return JSON.stringify(
        {properties: {format: "string", value: "string"}}
    );
  }
}
