import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServicePolicyrestrictionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Indicates if base policy should be enforced for the policy document.
   */
readonly requireBase?: 'false''true';

/**
   * Path to the policy document.
   */
readonly scope?: string;
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
