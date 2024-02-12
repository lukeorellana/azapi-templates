import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesSyncgroupsSyncmembersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:syncGroups;

/**
   * Database name of the member database in the sync member.
   */
readonly databaseName?: string;

/**
   * Database type of the sync member.
   */
readonly databaseType?: 'AzureSqlDatabase''SqlServerDatabase';

/**
   * Password of the member database in the sync member.
   */
readonly password?: string;

/**
   * Server name of the member database in the sync member
   */
readonly serverName?: string;

/**
   * SQL Server database id of the sync member.
   */
readonly sqlServerDatabaseId?: string;

/**
   * ARM resource id of the sync agent in the sync member.
   */
readonly syncAgentId?: string;

/**
   * Sync direction of the sync member.
   */
readonly syncDirection?: 'Bidirectional''OneWayHubToMember''OneWayMemberToHub';

/**
   * ARM resource id of the sync member logical database, for sync members in Azure.
   */
readonly syncMemberAzureDatabaseResourceId?: string;

/**
   * Whether to use private link connection.
   */
readonly usePrivateLinkConnection?: bool;

/**
   * User name of the member database in the sync member.
   */
readonly userName?: string;
}

/**
 * SqlServersDatabasesSyncgroupsSyncmembers resource
 */
export class SqlServersDatabasesSyncgroupsSyncmembers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesSyncgroupsSyncmembersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/syncGroups/syncMembers@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesSyncgroupsSyncmembersProps): string {
    return JSON.stringify(
        {properties: {databaseName: "string", databaseType: "string", password: "string", serverName: "string", sqlServerDatabaseId: "string", syncAgentId: "string", syncDirection: "string", syncMemberAzureDatabaseResourceId: "string", usePrivateLinkConnection: "${bool}", userName: "string"}}
    );
  }
}
