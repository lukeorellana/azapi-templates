import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServicePoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Format of the policyContent.
   */
readonly format?: 'rawxml''rawxml-link''xml''xml-link';

/**
   * Contents of the Policy as defined by the format.
   */
readonly value: string;
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