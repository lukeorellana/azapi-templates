import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisLinkedserversProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:redis;

/**
   * Fully qualified resourceId of the linked redis cache.
   */
readonly linkedRedisCacheId: string;

/**
   * Location of the linked redis cache.
   */
readonly linkedRedisCacheLocation: string;

/**
   * Role of the linked server.
   */
readonly serverRole: 'Primary''Secondary';
}

/**
 * CacheRedisLinkedservers resource
 */
export class CacheRedisLinkedservers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CacheRedisLinkedserversProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cache/redis/linkedServers@2023-08-01";
  }

  protected getResourceBody(props: CacheRedisLinkedserversProps): string {
    return JSON.stringify(
        {properties: {linkedRedisCacheId: "string", linkedRedisCacheLocation: "string", serverRole: "string"}}
    );
  }
}
