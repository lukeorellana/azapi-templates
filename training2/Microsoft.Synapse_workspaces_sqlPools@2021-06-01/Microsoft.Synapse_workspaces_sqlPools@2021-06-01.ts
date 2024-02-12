import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesSqlpoolsProps extends IAzAPIBaseProps {
/**
   * SQL pool SKU
   */
readonly sku?: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * Collation mode
   */
readonly collation?: string;

/**
   * Specifies the mode of sql pool creation.Default: regular sql pool creation.PointInTimeRestore: Creates a sql pool by restoring a point in time backup of an existing sql pool. sourceDatabaseId must be specified as the resource ID of the existing sql pool, and restorePointInTime must be specified.Recovery: Creates a sql pool by a geo-replicated backup. sourceDatabaseId  must be specified as the recoverableDatabaseId to restore.Restore: Creates a sql pool by restoring a backup of a deleted sql  pool. SourceDatabaseId should be the sql pool's original resource ID. SourceDatabaseId and sourceDatabaseDeletionDate must be specified.
   */
readonly createMode?: 'Default''PonumberInTimeRestore''Recovery''Restore';

/**
   * Maximum size in bytes
   */
readonly maxSizeBytes?: number;

/**
   * Resource state
   */
readonly provisioningState?: string;

/**
   * Backup database to restore from
   */
readonly recoverableDatabaseId?: string;

/**
   * Snapshot time to restore
   */
readonly restorePointInTime?: string;

/**
   * Specifies the time that the sql pool was deleted
   */
readonly sourceDatabaseDeletionDate?: string;

/**
   * Source database to create from
   */
readonly sourceDatabaseId?: string;

/**
   * The storage account type used to store backups for this sql pool.
   */
readonly storageAccountType?: 'GRS''LRS';

/**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
   */
readonly capacity?: number;

/**
   * The service tier
   */
readonly tier?: string;
}

/**
 * SynapseWorkspacesSqlpools resource
 */
export class SynapseWorkspacesSqlpools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesSqlpoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/sqlPools@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesSqlpoolsProps): string {
    return JSON.stringify(
        {properties: {collation: "string", createMode: "string", maxSizeBytes: "${int}", provisioningState: "string", recoverableDatabaseId: "string", restorePointInTime: "string", sourceDatabaseDeletionDate: "string", sourceDatabaseId: "string", storageAccountType: "string"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
