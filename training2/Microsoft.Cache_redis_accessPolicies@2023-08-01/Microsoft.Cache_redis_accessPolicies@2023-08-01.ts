import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisAccesspoliciesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:redis;

/**
   * Permissions for the access policy. Learn how to configure permissions athttps://aka.ms/redis/AADPreRequisites
   */
readonly permissions: string;
}

/**
 * CacheRedisAccesspolicies resource
 */
export class CacheRedisAccesspolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CacheRedisAccesspoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cache/redis/accessPolicies@2023-08-01";
  }

  protected getResourceBody(props: CacheRedisAccesspoliciesProps): string {
    return JSON.stringify(
        {properties: {permissions: "string"}}
    );
  }
}
