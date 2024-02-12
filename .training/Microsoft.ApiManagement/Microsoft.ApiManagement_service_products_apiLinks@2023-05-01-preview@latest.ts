import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceProductsApilinksProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceProductsApilinks resource
 */
export class ApimanagementServiceProductsApilinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceProductsApilinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/products/apiLinks@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceProductsApilinksProps): string {
    return JSON.stringify(
        {properties: {apiId: "string"}}
    );
  }
}
