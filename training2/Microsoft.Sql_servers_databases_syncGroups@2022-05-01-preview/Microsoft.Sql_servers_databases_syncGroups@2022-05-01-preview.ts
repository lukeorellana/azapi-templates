import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesSyncgroupsProps extends IAzAPIBaseProps {
/**
   * The name and capacity of the SKU.
   */
readonly sku?: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:databases;

/**
   * Conflict logging retention period.
   */
readonly conflictLoggingRetentionInDays?: number;

/**
   * Conflict resolution policy of the sync group.
   */
readonly conflictResolutionPolicy?: 'HubWin''MemberWin';

/**
   * If conflict logging is enabled.
   */
readonly enableConflictLogging?: bool;

/**
   * Password for the sync group hub database credential.
   */
readonly hubDatabasePassword?: string;

/**
   * User name for the sync group hub database credential.
   */
readonly hubDatabaseUserName?: string;

/**
   * Sync interval of the sync group.
   */
readonly interval?: number;

/**
   * Sync schema of the sync group.
   */
readonly schema?: SyncGroupSchema;

/**
   * ARM resource id of the sync database in the sync group.
   */
readonly syncDatabaseId?: string;

/**
   * If use private link connection is enabled.
   */
readonly usePrivateLinkConnection?: bool;

/**
   * Name of master sync member where the schema is from.
   */
readonly masterSyncMemberName?: string;

/**
   * List of tables in sync group schema.
   */
readonly tables?: SyncGroupSchemaTable[];

/**
   * List of columns in sync group schema.
   */
readonly columns?: SyncGroupSchemaTableColumn[];

/**
   * Quoted name of sync group schema table.
   */
readonly quotedName?: string;

/**
   * Data size of the column.
   */
readonly dataSize?: string;

/**
   * Data type of the column.
   */
readonly dataType?: string;

/**
   * Quoted name of sync group table column.
   */
readonly quotedName?: string;

/**
   * Capacity of the particular SKU.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * Size of the particular SKU
   */
readonly size?: string;

/**
   * The tier or edition of the particular SKU, e.g. Basic, Premium.
   */
readonly tier?: string;
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
