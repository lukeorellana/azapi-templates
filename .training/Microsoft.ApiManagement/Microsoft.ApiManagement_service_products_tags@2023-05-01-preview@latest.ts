import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceProductsTagsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceProductsTags resource
 */
export class ApimanagementServiceProductsTags extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceProductsTagsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/products/tags@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceProductsTagsProps): string {
    return JSON.stringify(
        
    );
  }
}
