import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesPolicyfragmentsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesPolicyfragments resource
 */
export class ApimanagementServiceWorkspacesPolicyfragments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesPolicyfragmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/policyFragments@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesPolicyfragmentsProps): string {
    return JSON.stringify(
        {properties: {description: "string", format: "string", value: "string"}}
    );
  }
}
