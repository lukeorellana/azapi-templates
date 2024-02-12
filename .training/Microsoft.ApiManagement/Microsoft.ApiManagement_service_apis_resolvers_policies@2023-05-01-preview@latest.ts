import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisResolversPoliciesProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceApisResolversPolicies resource
 */
export class ApimanagementServiceApisResolversPolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceApisResolversPoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/apis/resolvers/policies@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceApisResolversPoliciesProps): string {
    return JSON.stringify(
        {properties: {format: "string", value: "string"}}
    );
  }
}
