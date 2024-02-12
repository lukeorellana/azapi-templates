import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServicePoliciesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServicePolicies resource
 */
export class ApimanagementServicePolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServicePoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/policies@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServicePoliciesProps): string {
    return JSON.stringify(
        {properties: {format: "string", value: "string"}}
    );
  }
}
