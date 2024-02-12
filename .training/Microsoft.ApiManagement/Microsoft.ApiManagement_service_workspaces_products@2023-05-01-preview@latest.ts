import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesProductsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesProducts resource
 */
export class ApimanagementServiceWorkspacesProducts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesProductsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/products@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesProductsProps): string {
    return JSON.stringify(
        {properties: {approvalRequired: "${bool}", description: "string", displayName: "string", state: "string", subscriptionRequired: "${bool}", subscriptionsLimit: "${int}", terms: "string"}}
    );
  }
}
