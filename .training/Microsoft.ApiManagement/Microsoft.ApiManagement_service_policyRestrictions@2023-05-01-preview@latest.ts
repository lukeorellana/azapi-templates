import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServicePolicyrestrictionsProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServicePolicyrestrictions resource
 */
export class ApimanagementServicePolicyrestrictions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServicePolicyrestrictionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/policyRestrictions@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServicePolicyrestrictionsProps): string {
    return JSON.stringify(
        {properties: {requireBase: "string", scope: "string"}}
    );
  }
}
