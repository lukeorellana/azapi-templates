import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceProductsGrouplinksProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceProductsGrouplinks resource
 */
export class ApimanagementServiceProductsGrouplinks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceProductsGrouplinksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/products/groupLinks@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceProductsGrouplinksProps): string {
    return JSON.stringify(
        {properties: {groupId: "string"}}
    );
  }
}
