import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersJobagentsTargetgroupsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:jobAgents;

/**
   * Members of the target group.
   */
readonly members: JobTarget[];

/**
   * The target database name.
   */
readonly databaseName?: string;

/**
   * The target elastic pool name.
   */
readonly elasticPoolName?: string;

/**
   * Whether the target is included or excluded from the group.
   */
readonly membershipType?: 'Exclude''Include';

/**
   * The resource ID of the credential that is used during job execution to connect to the target and determine the list of databases inside the target.
   */
readonly refreshCredential?: string;

/**
   * The target server name.
   */
readonly serverName?: string;

/**
   * The target shard map.
   */
readonly shardMapName?: string;

/**
   * The target type.
   */
readonly type: 'SqlDatabase''SqlElasticPool''SqlServer''SqlShardMap''TargetGroup';
}

/**
 * SqlServersJobagentsTargetgroups resource
 */
export class SqlServersJobagentsTargetgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersJobagentsTargetgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/jobAgents/targetGroups@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersJobagentsTargetgroupsProps): string {
    return JSON.stringify(
        {properties: {members: [{databaseName: "string", elasticPoolName: "string", membershipType: "string", refreshCredential: "string", serverName: "string", shardMapName: "string", type: "string"}]}}
    );
  }
}
