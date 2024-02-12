import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceProductsWikisProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:products;

/**
   * Collection wiki documents included into this wiki.
   */
readonly documents?: WikiDocumentationContract[];

/**
   * Documentation Identifier
   */
readonly documentationId?: string;
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
