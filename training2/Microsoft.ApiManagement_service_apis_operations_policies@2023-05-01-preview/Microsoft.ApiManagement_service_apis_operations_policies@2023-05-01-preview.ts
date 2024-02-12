import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceApisOperationsPoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:operations;

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
