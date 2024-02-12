import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceProductsApisProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceProductsApis resource
 */
export class ApimanagementServiceProductsApis extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceProductsApisProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/products/apis@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceProductsApisProps): string {
    return JSON.stringify(
        
    );
  }
}
