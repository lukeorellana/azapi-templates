import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceTagsProductlinksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:tags;

/**
   * Full resource Id of a product.
   */
readonly productId: string;
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
