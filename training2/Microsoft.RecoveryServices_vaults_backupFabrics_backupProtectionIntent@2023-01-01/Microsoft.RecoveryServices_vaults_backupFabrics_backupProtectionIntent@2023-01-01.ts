import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupfabricsBackupprotectionintentProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: backupFabrics;

/**
   * Optional ETag.
   */
readonly eTag?: string;

/**
   * Type of backup management for the backed up item.
   */
readonly backupManagementType?: 'AzureBackupServer''AzureIaasVM''AzureSql''AzureStorage''AzureWorkload''DPM''DefaultBackup''Invalid''MAB';

/**
   * ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
   */
readonly itemId?: string;

/**
   * ID of the backup policy with which this item is backed up.
   */
readonly policyId?: string;

/**
   * Backup state of this backup item.
   */
readonly protectionState?: 'Invalid''NotProtected''Protected''Protecting''ProtectionFailed';

/**
   * ARM ID of the resource to be backed up.
   */
readonly sourceResourceId?: string;

/**
   * Set the object type
   */
readonly protectionIntentItemType: AzureResourceItemAzureWorkloadContainerAutoProtectionIntentAzureWorkloadSQLAutoProtectionIntent;

/**
   * backup protectionIntent type.
   */
readonly protectionIntentItemType: 'AzureResourceItem';

/**
   * Friendly name of the VM represented by this backup item.
   */
readonly friendlyName?: string;

/**
   * backup protectionIntent type.
   */
readonly protectionIntentItemType: 'AzureWorkloadContainerAutoProtectionIntent';

/**
   * backup protectionIntent type.
   */
readonly protectionIntentItemType: 'AzureWorkloadSQLAutoProtectionIntent';

/**
   * Workload item type of the item for which intent is to be set
   */
readonly workloadItemType?: 'Invalid''SAPAseDatabase''SAPAseSystem''SAPHanaDBInstance''SAPHanaDatabase''SAPHanaSystem''SQLDataBase''SQLInstance';
}

/**
 * RecoveryservicesVaultsBackupfabricsBackupprotectionintent resource
 */
export class RecoveryservicesVaultsBackupfabricsBackupprotectionintent extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackupfabricsBackupprotectionintentProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackupfabricsBackupprotectionintentProps): string {
    return JSON.stringify(
        {properties: {backupManagementType: "string", itemId: "string", policyId: "string", protectionState: "string", sourceResourceId: "string", protectionIntentItemType: "string"}, eTag: "string"}
    );
  }
}
