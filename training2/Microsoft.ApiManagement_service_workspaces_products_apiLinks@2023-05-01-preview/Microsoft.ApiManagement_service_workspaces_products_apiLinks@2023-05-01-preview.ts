import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceWorkspacesProductsApilinksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:products;

/**
   * Full resource Id of an API.
   */
readonly apiId: string;
}

/**
 * ApimanagementServiceWorkspacesProductsApilinks resource
 */
export class ApimanagementServiceWorkspacesProductsApilinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceWorkspacesProductsApilinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/workspaces/products/apiLinks@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceWorkspacesProductsApilinksProps): string {
    return JSON.stringify(
        {properties: {apiId: "string"}}
    );
  }
}
