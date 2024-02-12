import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesSyncgroupsSyncmembersProps extends IAzAPIBaseProps {

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
