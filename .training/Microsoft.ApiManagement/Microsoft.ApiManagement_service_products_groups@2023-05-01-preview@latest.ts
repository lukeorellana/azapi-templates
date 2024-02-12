import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceProductsGroupsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceProductsGroups resource
 */
export class ApimanagementServiceProductsGroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceProductsGroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/products/groups@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceProductsGroupsProps): string {
    return JSON.stringify(
        
    );
  }
}
