import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServicePolicyfragmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Policy fragment description.
   */
readonly description?: string;

/**
   * Format of the policy fragment content.
   */
readonly format?: 'rawxml''xml';

/**
   * Contents of the policy fragment.
   */
readonly value: string;
}

/**
 * ApimanagementServicePolicyfragments resource
 */
export class ApimanagementServicePolicyfragments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServicePolicyfragmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/policyFragments@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServicePolicyfragmentsProps): string {
    return JSON.stringify(
        {properties: {description: "string", format: "string", value: "string"}}
    );
  }
}
