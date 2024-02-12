import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersDatabasesProps extends IAzAPIBaseProps {

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
