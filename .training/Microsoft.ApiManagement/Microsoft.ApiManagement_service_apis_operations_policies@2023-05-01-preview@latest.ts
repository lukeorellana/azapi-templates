import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisOperationsPoliciesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceApisOperationsPolicies resource
 */
export class ApimanagementServiceApisOperationsPolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisOperationsPoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/operations/policies@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisOperationsPoliciesProps): string {
    return JSON.stringify(
        {properties: {format: "string", value: "string"}}
    );
  }
}
