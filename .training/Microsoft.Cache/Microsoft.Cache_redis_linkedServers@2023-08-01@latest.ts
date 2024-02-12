import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisLinkedserversProps extends IAzAPIBaseProps {

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
