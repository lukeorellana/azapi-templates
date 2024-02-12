import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceProductsWikisProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceProductsWikis resource
 */
export class ApimanagementServiceProductsWikis extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceProductsWikisProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/products/wikis@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceProductsWikisProps): string {
    return JSON.stringify(
        {properties: {documents: [{documentationId: "string"}]}}
    );
  }
}
