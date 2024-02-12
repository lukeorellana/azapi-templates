import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDatabasesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedInstances;

/**
   * Whether to auto complete restore of this managed database.
   */
readonly autoCompleteRestore?: bool;

/**
   * Collation of the metadata catalog.
   */
readonly catalogCollation?: 'DATABASE_DEFAULT''SQL_Latin1_General_CP1_CI_AS';

/**
   * Collation of the managed database.
   */
readonly collation?: string;

/**
   * Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore. RestoreLongTermRetentionBackup: Create a database by restoring from a long term retention backup (longTermRetentionBackupResourceId required).
   */
readonly createMode?: 'Default''PonumberInTimeRestore''Recovery''RestoreExternalBackup''RestoreLongTermRetentionBackup';

/**
   * The restorable cross-subscription dropped database resource id to restore when creating this database.
   */
readonly crossSubscriptionRestorableDroppedDatabaseId?: string;

/**
   * The resource identifier of the cross-subscription source database associated with create operation of this database.
   */
readonly crossSubscriptionSourceDatabaseId?: string;

/**
   * Target managed instance id used in cross-subscription restore.
   */
readonly crossSubscriptionTargetManagedInstanceId?: string;

/**
   * Last backup file name for restore of this managed database.
   */
readonly lastBackupName?: string;

/**
   * The name of the Long Term Retention backup to be used for restore of this managed database.
   */
readonly longTermRetentionBackupResourceId?: string;

/**
   * The resource identifier of the recoverable database associated with create operation of this database.
   */
readonly recoverableDatabaseId?: string;

/**
   * The restorable dropped database resource id to restore when creating this database.
   */
readonly restorableDroppedDatabaseId?: string;

/**
   * Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
   */
readonly restorePointInTime?: string;

/**
   * The resource identifier of the source database associated with create operation of this database.
   */
readonly sourceDatabaseId?: string;

/**
   * Conditional. If createMode is RestoreExternalBackup, this value is used. Specifies the identity used for storage container authentication. Can be 'SharedAccessSignature' or 'ManagedIdentity'; if not specified 'SharedAccessSignature' is assumed.
   */
readonly storageContainerIdentity?: string;

/**
   * Conditional. If createMode is RestoreExternalBackup and storageContainerIdentity is not ManagedIdentity, this value is required. Specifies the storage container sas token.
   */
readonly storageContainerSasToken?: string;

/**
   * Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.
   */
readonly storageContainerUri?: string;
}

/**
 * SqlManagedinstancesDatabases resource
 */
export class SqlManagedinstancesDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/databases@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesDatabasesProps): string {
    return JSON.stringify(
        {properties: {autoCompleteRestore: "${bool}", catalogCollation: "string", collation: "string", createMode: "string", crossSubscriptionRestorableDroppedDatabaseId: "string", crossSubscriptionSourceDatabaseId: "string", crossSubscriptionTargetManagedInstanceId: "string", lastBackupName: "string", longTermRetentionBackupResourceId: "string", recoverableDatabaseId: "string", restorableDroppedDatabaseId: "string", restorePointInTime: "string", sourceDatabaseId: "string", storageContainerIdentity: "string", storageContainerSasToken: "string", storageContainerUri: "string"}}
    );
  }
}
