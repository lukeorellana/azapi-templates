import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesTagsProductlinksProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceWorkspacesTagsProductlinks resource
 */
export class ApimanagementServiceWorkspacesTagsProductlinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesTagsProductlinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/tags/productLinks@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesTagsProductlinksProps): string {
    return JSON.stringify(
        {properties: {productId: "string"}}
    );
  }
}
