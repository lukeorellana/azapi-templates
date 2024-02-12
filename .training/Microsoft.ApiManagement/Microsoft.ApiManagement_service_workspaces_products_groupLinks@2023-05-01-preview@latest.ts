import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesProductsGrouplinksProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesProductsGrouplinks resource
 */
export class ApimanagementServiceWorkspacesProductsGrouplinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesProductsGrouplinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/products/groupLinks@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesProductsGrouplinksProps): string {
    return JSON.stringify(
        {properties: {groupId: "string"}}
    );
  }
}
