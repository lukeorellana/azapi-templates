import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesSyncgroupsProps extends IAzAPIBaseProps {

}

/**
 * SqlServersDatabasesSyncgroups resource
 */
export class SqlServersDatabasesSyncgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesSyncgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases/syncGroups@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesSyncgroupsProps): string {
    return JSON.stringify(
        {properties: {conflictLoggingRetentionInDays: "${int}", conflictResolutionPolicy: "string", enableConflictLogging: "${bool}", hubDatabasePassword: "string", hubDatabaseUserName: "string", interval: "${int}", schema: {masterSyncMemberName: "string", tables: [{columns: [{dataSize: "string", dataType: "string", quotedName: "string"}], quotedName: "string"}]}, syncDatabaseId: "string", usePrivateLinkConnection: "${bool}"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
