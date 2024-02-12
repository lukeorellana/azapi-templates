import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisAccesspolicyassignmentsProps extends IAzAPIBaseProps {

}

/**
 * CacheRedisAccesspolicyassignments resource
 */
export class CacheRedisAccesspolicyassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CacheRedisAccesspolicyassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cache/redis/accessPolicyAssignments@2023-08-01";
  }

  protected getResourceBody(props: CacheRedisAccesspolicyassignmentsProps): string {
    return JSON.stringify(
        {properties: {accessPolicyName: "string", objectId: "string", objectIdAlias: "string"}}
    );
  }
}
