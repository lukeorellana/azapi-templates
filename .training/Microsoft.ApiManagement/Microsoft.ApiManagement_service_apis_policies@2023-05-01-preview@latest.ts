import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisPoliciesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceApisPolicies resource
 */
export class ApimanagementServiceApisPolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisPoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/policies@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisPoliciesProps): string {
    return JSON.stringify(
        {properties: {format: "string", value: "string"}}
    );
  }
}
