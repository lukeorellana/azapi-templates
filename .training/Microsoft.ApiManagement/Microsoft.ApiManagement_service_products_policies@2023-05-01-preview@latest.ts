import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceProductsPoliciesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceProductsPolicies resource
 */
export class ApimanagementServiceProductsPolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceProductsPoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/products/policies@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceProductsPoliciesProps): string {
    return JSON.stringify(
        {properties: {format: "string", value: "string"}}
    );
  }
}
