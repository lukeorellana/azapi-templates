import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DataprotectionBackupvaultsProps extends IAzAPIBaseProps {
/**
   * Optional ETag.
   */
readonly eTag?: string;

/**
   * Input Managed Identity Details
   */
readonly identity?: DppIdentityDetails;

/**
   * The identityType which can be either SystemAssigned or None
   */
readonly type?: string;

/**
   * Monitoring Settings
   */
readonly monitoringSettings?: MonitoringSettings;

/**
   * Security Settings
   */
readonly securitySettings?: SecuritySettings;

/**
   * Storage Settings
   */
readonly storageSettings: StorageSetting[];

/**
   * Settings for Azure Monitor based alerts
   */
readonly azureMonitorAlertSettings?: AzureMonitorAlertSettings;

/**
   * 
   */
readonly alertsForAllJobFailures?: 'Disabled''Enabled';

/**
   * Immutability Settings at vault level
   */
readonly immutabilitySettings?: ImmutabilitySettings;

/**
   * Soft delete related settings
   */
readonly softDeleteSettings?: SoftDeleteSettings;

/**
   * Immutability state
   */
readonly state?: 'Disabled''Locked''Unlocked';

/**
   * Soft delete retention duration
   */
readonly retentionDurationInDays?: number;

/**
   * State of soft delete
   */
readonly state?: 'AlwaysOn''Off''On';

/**
   * Gets or sets the type of the datastore.
   */
readonly datastoreType?: 'ArchiveStore''SnapshotStore''VaultStore';

/**
   * Gets or sets the type.
   */
readonly type?: 'GeoRedundant''LocallyRedundant''ZoneRedundant';
}

/**
 * DataprotectionBackupvaults resource
 */
export class DataprotectionBackupvaults extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DataprotectionBackupvaultsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataProtection/backupVaults@2022-11-01-preview";
  }

  protected getResourceBody(props: DataprotectionBackupvaultsProps): string {
    return JSON.stringify(
        {properties: {monitoringSettings: {azureMonitorAlertSettings: {alertsForAllJobFailures: "string"}}, securitySettings: {immutabilitySettings: {state: "string"}, softDeleteSettings: {retentionDurationInDays: "${int}", state: "string"}}, storageSettings: [{datastoreType: "string", type: "string"}]}, eTag: "string"}
    );
  }
}
