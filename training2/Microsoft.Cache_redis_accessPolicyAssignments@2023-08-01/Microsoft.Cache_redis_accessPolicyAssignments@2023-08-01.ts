import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CacheRedisAccesspolicyassignmentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:redis;

/**
   * The name of the access policy that is being assigned
   */
readonly accessPolicyName: string Constranumbers:Pattern =^([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9];

/**
   * Object Id to assign access policy to
   */
readonly objectId: string;

/**
   * User friendly name for object id. Also represents username for token based authentication
   */
readonly objectIdAlias: string;
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
