import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesApisOperationsPoliciesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesApisOperationsPolicies resource
 */
export class ApimanagementServiceWorkspacesApisOperationsPolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesApisOperationsPoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/apis/operations/policies@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesApisOperationsPoliciesProps): string {
    return JSON.stringify(
        {properties: {format: "string", value: "string"}}
    );
  }
}
