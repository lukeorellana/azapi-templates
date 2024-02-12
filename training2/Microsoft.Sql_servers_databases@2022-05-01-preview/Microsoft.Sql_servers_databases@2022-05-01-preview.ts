import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesProps extends IAzAPIBaseProps {
/**
   * The database SKU.The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use theCapabilities_ListByLocationREST API or one of the following commands:Azure CLI:az sql db list-editions -l {location} -o tableAzure PowerShell:Get-AzSqlServerServiceObjective -Location {location}
   */
readonly sku?: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * The Azure Active Directory identity of the database.
   */
readonly identity?: DatabaseIdentity;

/**
   * The identity type
   */
readonly type?: 'None''UserAssigned';

/**
   * The resource ids of the user assigned identities to use
   */
readonly userAssignedIdentities?: object;

/**
   * Time in minutes after which database is automatically paused. A value of -1 means that automatic pause is disabled
   */
readonly autoPauseDelay?: number;

/**
   * Collation of the metadata catalog.
   */
readonly catalogCollation?: 'DATABASE_DEFAULT''SQL_Latin1_General_CP1_CI_AS';

/**
   * The collation of the database.
   */
readonly collation?: string;

/**
   * Specifies the mode of database creation.Default: regular database creation.Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.Secondary: creates a database as a secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.Copy, Secondary, and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
   */
readonly createMode?: 'Copy''Default''OnlineSecondary''PonumberInTimeRestore''Recovery''Restore''RestoreExternalBackup''RestoreExternalBackupSecondary''RestoreLongTermRetentionBackup''Secondary';

/**
   * The resource identifier of the elastic pool containing this database.
   */
readonly elasticPoolId?: string;

/**
   * The Client id used for cross tenant per database CMK scenario
   */
readonly federatedClientId?: string;

/**
   * The number of secondary replicas associated with the database that are used to provide high availability. Not applicable to a Hyperscale database within an elastic pool.
   */
readonly highAvailabilityReplicaCount?: number;

/**
   * Whether or not this database is a ledger database, which means all tables in the database are ledger tables. Note: the value of this property cannot be changed after the database has been created.
   */
readonly isLedgerOn?: bool;

/**
   * The license type to apply for this database.LicenseIncludedif you need a license, orBasePriceif you have a license and are eligible for the Azure Hybrid Benefit.
   */
readonly licenseType?: 'BasePrice''LicenseIncluded';

/**
   * The resource identifier of the long term retention backup associated with create operation of this database.
   */
readonly longTermRetentionBackupResourceId?: string;

/**
   * Maintenance configuration id assigned to the database. This configuration defines the period when the maintenance updates will occur.
   */
readonly maintenanceConfigurationId?: string;

/**
   * The max size of the database expressed in bytes.
   */
readonly maxSizeBytes?: number;

/**
   * Minimal capacity that database will always have allocated, if not paused To specify a decimal value, use thejson()function.
   */
readonly minCapacity?: number or json decimal;

/**
   * Type of enclave requested on the database i.e. Default or VBS enclaves.
   */
readonly preferredEnclaveType?: 'Default''VBS';

/**
   * The state of read-only routing. If enabled, connections that have application intent set to readonly in their connection string may be routed to a readonly secondary replica in the same region. Not applicable to a Hyperscale database within an elastic pool.
   */
readonly readScale?: 'Disabled''Enabled';

/**
   * The resource identifier of the recoverable database associated with create operation of this database.
   */
readonly recoverableDatabaseId?: string;

/**
   * The resource identifier of the recovery point associated with create operation of this database.
   */
readonly recoveryServicesRecoveryPointId?: string;

/**
   * The storage account type to be used to store backups for this database.
   */
readonly requestedBackupStorageRedundancy?: 'Geo''GeoZone''Local''Zone';

/**
   * The resource identifier of the restorable dropped database associated with create operation of this database.
   */
readonly restorableDroppedDatabaseId?: string;

/**
   * Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
   */
readonly restorePointInTime?: string;

/**
   * The name of the sample schema to apply when creating this database.
   */
readonly sampleName?: 'AdventureWorksLT''WideWorldImportersFull''WideWorldImportersStd';

/**
   * The secondary type of the database if it is a secondary.  Valid values are Geo, Named and Standby.
   */
readonly secondaryType?: 'Geo''Named''Standby';

/**
   * Specifies the time that the database was deleted.
   */
readonly sourceDatabaseDeletionDate?: string;

/**
   * The resource identifier of the source database associated with create operation of this database.
   */
readonly sourceDatabaseId?: string;

/**
   * The resource identifier of the source associated with the create operation of this database.This property is only supported for DataWarehouse edition and allows to restore across subscriptions.When sourceResourceId is specified, sourceDatabaseId, recoverableDatabaseId, restorableDroppedDatabaseId and sourceDatabaseDeletionDate must not be specified and CreateMode must be PointInTimeRestore, Restore or Recover.When createMode is PointInTimeRestore, sourceResourceId must be the resource ID of the existing database or existing sql pool, and restorePointInTime must be specified.When createMode is Restore, sourceResourceId must be the resource ID of restorable dropped database or restorable dropped sql pool.When createMode is Recover, sourceResourceId must be the resource ID of recoverable database or recoverable sql pool.When source subscription belongs to a different tenant than target subscription, âx-ms-authorization-auxiliaryâ header must contain authentication token for the source tenant. For more details about âx-ms-authorization-auxiliaryâ header see /azure/azure-resource-manager/management/authenticate-multi-tenant
   */
readonly sourceResourceId?: string;

/**
   * Whether or not this database is zone redundant, which means the replicas of this database will be spread across multiple availability zones.
   */
readonly zoneRedundant?: bool;

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
 * SqlServersDatabases resource
 */
export class SqlServersDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/databases@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersDatabasesProps): string {
    return JSON.stringify(
        {properties: {autoPauseDelay: "${int}", catalogCollation: "string", collation: "string", createMode: "string", elasticPoolId: "string", federatedClientId: "string", highAvailabilityReplicaCount: "${int}", isLedgerOn: "${bool}", licenseType: "string", longTermRetentionBackupResourceId: "string", maintenanceConfigurationId: "string", maxSizeBytes: "${int}", minCapacity: "decimal-as-string", preferredEnclaveType: "string", readScale: "string", recoverableDatabaseId: "string", recoveryServicesRecoveryPointId: "string", requestedBackupStorageRedundancy: "string", restorableDroppedDatabaseId: "string", restorePointInTime: "string", sampleName: "string", secondaryType: "string", sourceDatabaseDeletionDate: "string", sourceDatabaseId: "string", sourceResourceId: "string", zoneRedundant: "${bool}"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
