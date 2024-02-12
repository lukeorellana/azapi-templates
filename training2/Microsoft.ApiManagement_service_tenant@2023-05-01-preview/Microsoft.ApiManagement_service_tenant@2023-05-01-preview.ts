import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceTenantProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Determines whether direct access is enabled.
   */
readonly enabled?: bool;

/**
   * Primary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
   */
readonly primaryKey?: string;

/**
   * Principal (User) Identifier.
   */
readonly principalId?: string;

/**
   * Secondary access key. This property will not be filled on 'GET' operations! Use '/listSecrets' POST request to get the value.
   */
readonly secondaryKey?: string;
}

/**
 * ApimanagementServiceTenant resource
 */
export class ApimanagementServiceTenant extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceTenantProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/tenant@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceTenantProps): string {
    return JSON.stringify(
        {properties: {enabled: "${bool}", primaryKey: "string", principalId: "string", secondaryKey: "string"}}
    );
  }
}
