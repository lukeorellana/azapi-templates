import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceTagsProductlinksProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceTagsProductlinks resource
 */
export class ApimanagementServiceTagsProductlinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceTagsProductlinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/tags/productLinks@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceTagsProductlinksProps): string {
    return JSON.stringify(
        {properties: {productId: "string"}}
    );
  }
}
