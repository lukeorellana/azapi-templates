import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceCachesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:service;

/**
   * Runtime connection string to cache
   */
readonly connectionString: string;

/**
   * Cache description
   */
readonly description?: string;

/**
   * Original uri of entity in external system cache points to
   */
readonly resourceId?: string;

/**
   * Location identifier to use cache from (should be either 'default' or valid Azure region identifier)
   */
readonly useFromLocation: string;
}

/**
 * ApimanagementServiceCaches resource
 */
export class ApimanagementServiceCaches extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceCachesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/caches@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceCachesProps): string {
    return JSON.stringify(
        {properties: {connectionString: "string", description: "string", resourceId: "string", useFromLocation: "string"}}
    );
  }
}
