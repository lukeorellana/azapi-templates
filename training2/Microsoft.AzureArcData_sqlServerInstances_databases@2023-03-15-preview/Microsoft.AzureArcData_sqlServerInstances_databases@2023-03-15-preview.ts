import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlserverinstancesDatabasesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:sqlServerInstances;

/**
   * 
   */
readonly backupInformation?: SqlServerDatabaseResourcePropertiesBackupInformation;

/**
   * Collation of the database.
   */
readonly collationName?: string;

/**
   * Compatibility level of the database
   */
readonly compatibilityLevel?: number;

/**
   * Creation date of the database.
   */
readonly databaseCreationDate?: string;

/**
   * List of features that are enabled for the database
   */
readonly databaseOptions?: SqlServerDatabaseResourcePropertiesDatabaseOptions;

/**
   * Status of the database.
   */
readonly recoveryMode?: 'Bulk-logged''Full''Simple';

/**
   * Size of the database.
   */
readonly sizeMB?: number;

/**
   * Space left of the database.
   */
readonly spaceAvailableMB?: number;

/**
   * State of the database.
   */
readonly state?: 'Copying''Emergency''Offline''OfflineSecondary''Online''Recovering''RecoveryPending''Restoring''Suspect';

/**
   * Date time of last full backup.
   */
readonly lastFullBackup?: string;

/**
   * Date time of last log backup.
   */
readonly lastLogBackup?: string;

/**
   * 
   */
readonly isAutoCloseOn?: bool;

/**
   * 
   */
readonly isAutoCreateStatsOn?: bool;

/**
   * 
   */
readonly isAutoShrinkOn?: bool;

/**
   * 
   */
readonly isAutoUpdateStatsOn?: bool;

/**
   * 
   */
readonly isEncrypted?: bool;

/**
   * 
   */
readonly isMemoryOptimizationEnabled?: bool;

/**
   * 
   */
readonly isRemoteDataArchiveEnabled?: bool;

/**
   * 
   */
readonly isTrustworthyOn?: bool;
}

/**
 * AzurearcdataSqlserverinstancesDatabases resource
 */
export class AzurearcdataSqlserverinstancesDatabases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlserverinstancesDatabasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlServerInstances/databases@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlserverinstancesDatabasesProps): string {
    return JSON.stringify(
        {properties: {backupInformation: {lastFullBackup: "string", lastLogBackup: "string"}, collationName: "string", compatibilityLevel: "${int}", databaseCreationDate: "string", databaseOptions: {isAutoCloseOn: "${bool}", isAutoCreateStatsOn: "${bool}", isAutoShrinkOn: "${bool}", isAutoUpdateStatsOn: "${bool}", isEncrypted: "${bool}", isMemoryOptimizationEnabled: "${bool}", isRemoteDataArchiveEnabled: "${bool}", isTrustworthyOn: "${bool}"}, recoveryMode: "string", sizeMB: "${int}", spaceAvailableMB: "${int}", state: "string"}}
    );
  }
}
