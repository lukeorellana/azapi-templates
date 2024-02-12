import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupfabricsProtectioncontainersProtecteditemsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:protectionContainers;

/**
   * Optional ETag.
   */
readonly eTag?: string;

/**
   * Name of the backup set the backup item belongs to
   */
readonly backupSetName?: string;

/**
   * Unique name of container
   */
readonly containerName?: string;

/**
   * Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
   */
readonly createMode?: 'Default''Invalid''Recover';

/**
   * Time for deferred deletion in UTC
   */
readonly deferredDeleteTimeInUTC?: string;

/**
   * Time remaining before the DS marked for deferred delete is permanently deleted
   */
readonly deferredDeleteTimeRemaining?: string;

/**
   * Flag to identify whether datasource is protected in archive
   */
readonly isArchiveEnabled?: bool;

/**
   * Flag to identify whether the deferred deleted DS is to be purged soon
   */
readonly isDeferredDeleteScheduleUpcoming?: bool;

/**
   * Flag to identify that deferred deleted DS is to be moved into Pause state
   */
readonly isRehydrate?: bool;

/**
   * Flag to identify whether the DS is scheduled for deferred delete
   */
readonly isScheduledForDeferredDelete?: bool;

/**
   * Timestamp when the last (latest) backup copy was created for this backup item.
   */
readonly lastRecoveryPoint?: string;

/**
   * ID of the backup policy with which this item is backed up.
   */
readonly policyId?: string;

/**
   * Name of the policy used for protection
   */
readonly policyName?: string;

/**
   * ResourceGuardOperationRequests on which LAC check will be performed
   */
readonly resourceGuardOperationRequests?: string[];

/**
   * Soft delete retention period in days
   */
readonly softDeleteRetentionPeriod?: number;

/**
   * ARM ID of the resource to be backed up.
   */
readonly sourceResourceId?: string;

/**
   * Set the object type
   */
readonly protectedItemType: AzureFileShareProtectedItemAzureVmWorkloadSAPAseDatabaseAzureVmWorkloadSAPHanaDatabaseAzureVmWorkloadSAPHanaDBInstanceAzureVmWorkloadSQLDatabaseDPMProtectedItemGenericProtectedItemMabFileFolderProtectedItemMicrosoft.ClassicCompute/virtualMachinesMicrosoft.Compute/virtualMachinesMicrosoft.Sql/servers/databases;

/**
   * backup item type.
   */
readonly protectedItemType: 'AzureFileShareProtectedItem';

/**
   * Additional information with this backup item.
   */
readonly extendedInfo?: AzureFileshareProtectedItemExtendedInfo;

/**
   * Friendly name of the fileshare represented by this backup item.
   */
readonly friendlyName?: string;

/**
   * Health details of different KPIs
   */
readonly kpisHealths?: object;

/**
   * Last backup operation status. Possible values: Healthy, Unhealthy.
   */
readonly lastBackupStatus?: string;

/**
   * Timestamp of the last backup operation on this backup item.
   */
readonly lastBackupTime?: string;

/**
   * Backup state of this backup item.
   */
readonly protectionState?: 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped';

/**
   * Backup status of this backup item.
   */
readonly protectionStatus?: string;

/**
   * The oldest backup copy available for this item in the service.
   */
readonly oldestRecoveryPoint?: string;

/**
   * Indicates consistency of policy object and policy applied to this backup item.
   */
readonly policyState?: string;

/**
   * Number of available backup copies associated with this backup item.
   */
readonly recoveryPointCount?: number;

/**
   * backup item type.
   */
readonly protectedItemType: 'AzureVmWorkloadSAPAseDatabase';

/**
   * Additional information for this backup item.
   */
readonly extendedInfo?: AzureVmWorkloadProtectedItemExtendedInfo;

/**
   * Health details of different KPIs
   */
readonly kpisHealths?: object;

/**
   * Error details in last backup
   */
readonly lastBackupErrorDetail?: ErrorDetail;

/**
   * Last backup operation status. Possible values: Healthy, Unhealthy.
   */
readonly lastBackupStatus?: 'Healthy''IRPending''Invalid''Unhealthy';

/**
   * Timestamp of the last backup operation on this backup item.
   */
readonly lastBackupTime?: string;

/**
   * Parent name of the DB such as Instance or Availability Group.
   */
readonly parentName?: string;

/**
   * Parent type of protected item, example: for a DB, standalone server or distributed
   */
readonly parentType?: string;

/**
   * Data ID of the protected item.
   */
readonly protectedItemDataSourceId?: string;

/**
   * Health status of the backup item, evaluated based on last heartbeat received
   */
readonly protectedItemHealthStatus?: 'Healthy''IRPending''Invalid''NotReachable''Unhealthy';

/**
   * Backup state of this backup item.
   */
readonly protectionState?: 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped';

/**
   * Host/Cluster Name for instance or AG
   */
readonly serverName?: string;

/**
   * The latest backup copy available for this backup item in archive tier
   */
readonly newestRecoveryPointInArchive?: string;

/**
   * The oldest backup copy available for this backup item across all tiers.
   */
readonly oldestRecoveryPoint?: string;

/**
   * The oldest backup copy available for this backup item in archive tier
   */
readonly oldestRecoveryPointInArchive?: string;

/**
   * The oldest backup copy available for this backup item in vault tier
   */
readonly oldestRecoveryPointInVault?: string;

/**
   * Indicates consistency of policy object and policy applied to this backup item.
   */
readonly policyState?: string;

/**
   * Indicates consistency of policy object and policy applied to this backup item.
   */
readonly recoveryModel?: string;

/**
   * Number of backup copies available for this backup item.
   */
readonly recoveryPointCount?: number;

/**
   * backup item type.
   */
readonly protectedItemType: 'AzureVmWorkloadSAPHanaDatabase';

/**
   * Additional information for this backup item.
   */
readonly extendedInfo?: AzureVmWorkloadProtectedItemExtendedInfo;

/**
   * Health details of different KPIs
   */
readonly kpisHealths?: object;

/**
   * Error details in last backup
   */
readonly lastBackupErrorDetail?: ErrorDetail;

/**
   * Last backup operation status. Possible values: Healthy, Unhealthy.
   */
readonly lastBackupStatus?: 'Healthy''IRPending''Invalid''Unhealthy';

/**
   * Timestamp of the last backup operation on this backup item.
   */
readonly lastBackupTime?: string;

/**
   * Parent name of the DB such as Instance or Availability Group.
   */
readonly parentName?: string;

/**
   * Parent type of protected item, example: for a DB, standalone server or distributed
   */
readonly parentType?: string;

/**
   * Data ID of the protected item.
   */
readonly protectedItemDataSourceId?: string;

/**
   * Health status of the backup item, evaluated based on last heartbeat received
   */
readonly protectedItemHealthStatus?: 'Healthy''IRPending''Invalid''NotReachable''Unhealthy';

/**
   * Backup state of this backup item.
   */
readonly protectionState?: 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped';

/**
   * Host/Cluster Name for instance or AG
   */
readonly serverName?: string;

/**
   * backup item type.
   */
readonly protectedItemType: 'AzureVmWorkloadSAPHanaDBInstance';

/**
   * Additional information for this backup item.
   */
readonly extendedInfo?: AzureVmWorkloadProtectedItemExtendedInfo;

/**
   * Health details of different KPIs
   */
readonly kpisHealths?: object;

/**
   * Error details in last backup
   */
readonly lastBackupErrorDetail?: ErrorDetail;

/**
   * Last backup operation status. Possible values: Healthy, Unhealthy.
   */
readonly lastBackupStatus?: 'Healthy''IRPending''Invalid''Unhealthy';

/**
   * Timestamp of the last backup operation on this backup item.
   */
readonly lastBackupTime?: string;

/**
   * Parent name of the DB such as Instance or Availability Group.
   */
readonly parentName?: string;

/**
   * Parent type of protected item, example: for a DB, standalone server or distributed
   */
readonly parentType?: string;

/**
   * Data ID of the protected item.
   */
readonly protectedItemDataSourceId?: string;

/**
   * Health status of the backup item, evaluated based on last heartbeat received
   */
readonly protectedItemHealthStatus?: 'Healthy''IRPending''Invalid''NotReachable''Unhealthy';

/**
   * Backup state of this backup item.
   */
readonly protectionState?: 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped';

/**
   * Host/Cluster Name for instance or AG
   */
readonly serverName?: string;

/**
   * backup item type.
   */
readonly protectedItemType: 'AzureVmWorkloadSQLDatabase';

/**
   * Additional information for this backup item.
   */
readonly extendedInfo?: AzureVmWorkloadProtectedItemExtendedInfo;

/**
   * Health details of different KPIs
   */
readonly kpisHealths?: object;

/**
   * Error details in last backup
   */
readonly lastBackupErrorDetail?: ErrorDetail;

/**
   * Last backup operation status. Possible values: Healthy, Unhealthy.
   */
readonly lastBackupStatus?: 'Healthy''IRPending''Invalid''Unhealthy';

/**
   * Timestamp of the last backup operation on this backup item.
   */
readonly lastBackupTime?: string;

/**
   * Parent name of the DB such as Instance or Availability Group.
   */
readonly parentName?: string;

/**
   * Parent type of protected item, example: for a DB, standalone server or distributed
   */
readonly parentType?: string;

/**
   * Data ID of the protected item.
   */
readonly protectedItemDataSourceId?: string;

/**
   * Health status of the backup item, evaluated based on last heartbeat received
   */
readonly protectedItemHealthStatus?: 'Healthy''IRPending''Invalid''NotReachable''Unhealthy';

/**
   * Backup state of this backup item.
   */
readonly protectionState?: 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped';

/**
   * Host/Cluster Name for instance or AG
   */
readonly serverName?: string;

/**
   * backup item type.
   */
readonly protectedItemType: 'DPMProtectedItem';

/**
   * Backup Management server protecting this backup item
   */
readonly backupEngineName?: string;

/**
   * Extended info of the backup item.
   */
readonly extendedInfo?: DPMProtectedItemExtendedInfo;

/**
   * Friendly name of the managed item
   */
readonly friendlyName?: string;

/**
   * Protection state of the backup engine
   */
readonly protectionState?: 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped';

/**
   * Used Disk storage in bytes.
   */
readonly diskStorageUsedInBytes?: string;

/**
   * To check if backup item is collocated.
   */
readonly isCollocated?: bool;

/**
   * To check if backup item is cloud protected.
   */
readonly isPresentOnCloud?: bool;

/**
   * Last backup status information on backup item.
   */
readonly lastBackupStatus?: string;

/**
   * Last refresh time on backup item.
   */
readonly lastRefreshedAt?: string;

/**
   * Oldest cloud recovery point time.
   */
readonly oldestRecoveryPoint?: string;

/**
   * latest disk recovery point time.
   */
readonly onPremiseLatestRecoveryPoint?: string;

/**
   * Oldest disk recovery point time.
   */
readonly onPremiseOldestRecoveryPoint?: string;

/**
   * disk recovery point count.
   */
readonly onPremiseRecoveryPointCount?: number;

/**
   * Attribute to provide information on various DBs.
   */
readonly protectableObjectLoadPath?: object;

/**
   * To check if backup item is disk protected.
   */
readonly protected?: bool;

/**
   * Protection group name of the backup item.
   */
readonly protectionGroupName?: string;

/**
   * cloud recovery point count.
   */
readonly recoveryPointCount?: number;

/**
   * total Disk storage in bytes.
   */
readonly totalDiskStorageSizeInBytes?: string;

/**
   * backup item type.
   */
readonly protectedItemType: 'GenericProtectedItem';

/**
   * Name of this backup item's fabric.
   */
readonly fabricName?: string;

/**
   * Friendly name of the container.
   */
readonly friendlyName?: string;

/**
   * Indicates consistency of policy object and policy applied to this backup item.
   */
readonly policyState?: string;

/**
   * Data Plane Service ID of the protected item.
   */
readonly protectedItemId?: number;

/**
   * Backup state of this backup item.
   */
readonly protectionState?: 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped';

/**
   * Loosely coupled (type, value) associations (example - parent of a protected item)
   */
readonly sourceAssociations?: object;

/**
   * backup item type.
   */
readonly protectedItemType: 'MabFileFolderProtectedItem';

/**
   * Name of the computer associated with this backup item.
   */
readonly computerName?: string;

/**
   * Sync time for deferred deletion in UTC
   */
readonly deferredDeleteSyncTimeInUTC?: number;

/**
   * Additional information with this backup item.
   */
readonly extendedInfo?: MabFileFolderProtectedItemExtendedInfo;

/**
   * Friendly name of this backup item.
   */
readonly friendlyName?: string;

/**
   * Status of last backup operation.
   */
readonly lastBackupStatus?: string;

/**
   * Timestamp of the last backup operation on this backup item.
   */
readonly lastBackupTime?: string;

/**
   * Protected, ProtectionStopped, IRPending or ProtectionError
   */
readonly protectionState?: string;

/**
   * Last time when the agent data synced to service.
   */
readonly lastRefreshedAt?: string;

/**
   * The oldest backup copy available.
   */
readonly oldestRecoveryPoint?: string;

/**
   * Number of backup copies associated with the backup item.
   */
readonly recoveryPointCount?: number;

/**
   * backup item type.
   */
readonly protectedItemType: 'Microsoft.ClassicCompute/virtualMachines';

/**
   * Additional information for this backup item.
   */
readonly extendedInfo?: AzureIaaSVMProtectedItemExtendedInfo;

/**
   * Extended Properties for Azure IaasVM Backup.
   */
readonly extendedProperties?: ExtendedProperties;

/**
   * Health details on this backup item.
   */
readonly healthDetails?: AzureIaaSVMHealthDetails[];

/**
   * Health details of different KPIs
   */
readonly kpisHealths?: object;

/**
   * Last backup operation status.
   */
readonly lastBackupStatus?: string;

/**
   * Backup state of this backup item.
   */
readonly protectionState?: 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped';

/**
   * Backup status of this backup item.
   */
readonly protectionStatus?: string;

/**
   * The latest backup copy available for this backup item in archive tier
   */
readonly newestRecoveryPointInArchive?: string;

/**
   * The oldest backup copy available for this backup item across all tiers.
   */
readonly oldestRecoveryPoint?: string;

/**
   * The oldest backup copy available for this backup item in archive tier
   */
readonly oldestRecoveryPointInArchive?: string;

/**
   * The oldest backup copy available for this backup item in vault tier
   */
readonly oldestRecoveryPointInVault?: string;

/**
   * Specifies if backup policy associated with the backup item is inconsistent.
   */
readonly policyInconsistent?: bool;

/**
   * Number of backup copies available for this backup item.
   */
readonly recoveryPointCount?: number;

/**
   * Extended Properties for Disk Exclusion.
   */
readonly diskExclusionProperties?: DiskExclusionProperties;

/**
   * Linux VM name
   */
readonly linuxVmApplicationName?: string;

/**
   * List of Disks' Logical Unit Numbers (LUN) to be used for VM Protection.
   */
readonly diskLunList?: number[];

/**
   * Flag to indicate whether DiskLunList is to be included/ excluded from backup.
   */
readonly isInclusionList?: bool;

/**
   * backup item type.
   */
readonly protectedItemType: 'Microsoft.Compute/virtualMachines';

/**
   * Additional information for this backup item.
   */
readonly extendedInfo?: AzureIaaSVMProtectedItemExtendedInfo;

/**
   * Extended Properties for Azure IaasVM Backup.
   */
readonly extendedProperties?: ExtendedProperties;

/**
   * Health details on this backup item.
   */
readonly healthDetails?: AzureIaaSVMHealthDetails[];

/**
   * Health details of different KPIs
   */
readonly kpisHealths?: object;

/**
   * Last backup operation status.
   */
readonly lastBackupStatus?: string;

/**
   * Backup state of this backup item.
   */
readonly protectionState?: 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped';

/**
   * Backup status of this backup item.
   */
readonly protectionStatus?: string;

/**
   * backup item type.
   */
readonly protectedItemType: 'Microsoft.Sql/servers/databases';

/**
   * Additional information for this backup item.
   */
readonly extendedInfo?: AzureSqlProtectedItemExtendedInfo;

/**
   * Internal ID of a backup item. Used by Azure SQL Backup engine to contact Recovery Services.
   */
readonly protectedItemDataId?: string;

/**
   * Backup state of the backed up item.
   */
readonly protectionState?: 'BackupsSuspended''IRPending''Invalid''Protected''ProtectionError''ProtectionPaused''ProtectionStopped';

/**
   * The oldest backup copy available for this item in the service.
   */
readonly oldestRecoveryPoint?: string;

/**
   * State of the backup policy associated with this backup item.
   */
readonly policyState?: string;

/**
   * Number of available backup copies associated with this backup item.
   */
readonly recoveryPointCount?: number;
}

/**
 * RecoveryservicesVaultsBackupfabricsProtectioncontainersProtecteditems resource
 */
export class RecoveryservicesVaultsBackupfabricsProtectioncontainersProtecteditems extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackupfabricsProtectioncontainersProtecteditemsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackupfabricsProtectioncontainersProtecteditemsProps): string {
    return JSON.stringify(
        {properties: {backupSetName: "string", containerName: "string", createMode: "string", deferredDeleteTimeInUTC: "string", deferredDeleteTimeRemaining: "string", isArchiveEnabled: "${bool}", isDeferredDeleteScheduleUpcoming: "${bool}", isRehydrate: "${bool}", isScheduledForDeferredDelete: "${bool}", lastRecoveryPoint: "string", policyId: "string", policyName: "string", resourceGuardOperationRequests: ["string"], softDeleteRetentionPeriod: "${int}", sourceResourceId: "string", protectedItemType: "string"}, eTag: "string"}
    );
  }
}
