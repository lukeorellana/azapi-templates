import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackupfabricsProtectioncontainersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type: backupFabrics;

/**
   * Optional ETag.
   */
readonly eTag?: string;

/**
   * Type of backup management for the container.
   */
readonly backupManagementType?: 'AzureBackupServer''AzureIaasVM''AzureSql''AzureStorage''AzureWorkload''DPM''DefaultBackup''Invalid''MAB';

/**
   * Friendly name of the container.
   */
readonly friendlyName?: string;

/**
   * Status of health of the container.
   */
readonly healthStatus?: string;

/**
   * Type of the protectable object associated with this container
   */
readonly protectableObjectType?: string;

/**
   * Status of registration of the container with the Recovery Services Vault.
   */
readonly registrationStatus?: string;

/**
   * Set the object type
   */
readonly containerType: AzureBackupServerContainerAzureSqlContainerGenericContainerMicrosoft.ClassicCompute/virtualMachinesMicrosoft.Compute/virtualMachinesSQLAGWorkLoadContainerStorageContainerVMAppContainerWindows;

/**
   * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer
   */
readonly containerType: 'AzureBackupServerContainer';

/**
   * Specifies whether the container is re-registrable.
   */
readonly canReRegister?: bool;

/**
   * ID of container.
   */
readonly containerId?: string;

/**
   * Backup engine Agent version
   */
readonly dpmAgentVersion?: string;

/**
   * List of BackupEngines protecting the container
   */
readonly dpmServers?: string[];

/**
   * Extended Info of the container.
   */
readonly extendedInfo?: DPMContainerExtendedInfo;

/**
   * Number of protected items in the BackupEngine
   */
readonly protectedItemCount?: number;

/**
   * Protection status of the container.
   */
readonly protectionStatus?: string;

/**
   * To check if upgrade available
   */
readonly upgradeAvailable?: bool;

/**
   * Last refresh time of the DPMContainer.
   */
readonly lastRefreshedAt?: string;

/**
   * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer
   */
readonly containerType: 'AzureSqlContainer';

/**
   * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer
   */
readonly containerType: 'GenericContainer';

/**
   * Extended information (not returned in List container API calls)
   */
readonly extendedInformation?: GenericContainerExtendedInfo;

/**
   * Name of the container's fabric
   */
readonly fabricName?: string;

/**
   * Container identity information
   */
readonly containerIdentityInfo?: ContainerIdentityInfo;

/**
   * Public key of container cert
   */
readonly rawCertData?: string;

/**
   * Azure Backup Service Endpoints for the container
   */
readonly serviceEndpoints?: object;

/**
   * Protection container identity - AAD Tenant
   */
readonly aadTenantId?: string;

/**
   * Protection container identity - Audience
   */
readonly audience?: string;

/**
   * Protection container identity - AAD Service Principal
   */
readonly servicePrincipalClientId?: string;

/**
   * Unique name of the container
   */
readonly uniqueName?: string;

/**
   * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer
   */
readonly containerType: 'Microsoft.ClassicCompute/virtualMachines';

/**
   * Resource group name of Recovery Services Vault.
   */
readonly resourceGroup?: string;

/**
   * Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container.
   */
readonly virtualMachineId?: string;

/**
   * Specifies whether the container represents a Classic or an Azure Resource Manager VM.
   */
readonly virtualMachineVersion?: string;

/**
   * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer
   */
readonly containerType: 'Microsoft.Compute/virtualMachines';

/**
   * Resource group name of Recovery Services Vault.
   */
readonly resourceGroup?: string;

/**
   * Fully qualified ARM url of the virtual machine represented by this Azure IaaS VM container.
   */
readonly virtualMachineId?: string;

/**
   * Specifies whether the container represents a Classic or an Azure Resource Manager VM.
   */
readonly virtualMachineVersion?: string;

/**
   * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer
   */
readonly containerType: 'SQLAGWorkLoadContainer';

/**
   * Additional details of a workload container.
   */
readonly extendedInfo?: AzureWorkloadContainerExtendedInfo;

/**
   * Time stamp when this container was updated.
   */
readonly lastUpdatedTime?: string;

/**
   * Re-Do Operation
   */
readonly operationType?: 'Invalid''Register''Reregister';

/**
   * ARM ID of the virtual machine represented by this Azure Workload Container
   */
readonly sourceResourceId?: string;

/**
   * Workload type for which registration was sent.
   */
readonly workloadType?: 'AzureFileShare''AzureSqlDb''Client''Exchange''FileFolder''GenericDataSource''Invalid''SAPAseDatabase''SAPHanaDBInstance''SAPHanaDatabase''SQLDB''SQLDataBase''Shareponumber''SystemState''VM''VMwareVM';

/**
   * Host Os Name in case of Stand Alone and Cluster Name in case of distributed container.
   */
readonly hostServerName?: string;

/**
   * Inquiry Status for the container.
   */
readonly inquiryInfo?: InquiryInfo;

/**
   * List of the nodes in case of distributed container.
   */
readonly nodesList?: DistributedNodesInfo[];

/**
   * Error Details if the Status is non-success.
   */
readonly errorDetail?: ErrorDetail;

/**
   * Inquiry Details which will have workload specific details.For e.g. - For SQL and oracle this will contain different details.
   */
readonly inquiryDetails?: WorkloadInquiryDetails[];

/**
   * Inquiry Status for this container such asInProgress , Failed , Succeeded
   */
readonly status?: string;

/**
   * Inquiry validation such as permissions and other backup validations.
   */
readonly inquiryValidation?: InquiryValidation;

/**
   * Contains the protectable item Count inside this Container.
   */
readonly itemCount?: number;

/**
   * Type of the Workload such as SQL, Oracle etc.
   */
readonly type?: string;

/**
   * Error Detail in case the status is non-success.
   */
readonly errorDetail?: ErrorDetail;

/**
   * Status for the Inquiry Validation.
   */
readonly status?: string;

/**
   * Error Details if the Status is non-success.
   */
readonly errorDetail?: ErrorDetail;

/**
   * Name of the node under a distributed container.
   */
readonly nodeName?: string;

/**
   * Status of this Node.Failed , Succeeded
   */
readonly status?: string;

/**
   * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer
   */
readonly containerType: 'StorageContainer';

/**
   * Whether storage account lock is to be acquired for this container or not.
   */
readonly acquireStorageAccountLock?: 'Acquire''NotAcquire';

/**
   * Number of items backed up in this container.
   */
readonly protectedItemCount?: number;

/**
   * Resource group name of Recovery Services Vault.
   */
readonly resourceGroup?: string;

/**
   * Fully qualified ARM url.
   */
readonly sourceResourceId?: string;

/**
   * Storage account version.
   */
readonly storageAccountVersion?: string;

/**
   * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer
   */
readonly containerType: 'VMAppContainer';

/**
   * Additional details of a workload container.
   */
readonly extendedInfo?: AzureWorkloadContainerExtendedInfo;

/**
   * Time stamp when this container was updated.
   */
readonly lastUpdatedTime?: string;

/**
   * Re-Do Operation
   */
readonly operationType?: 'Invalid''Register''Reregister';

/**
   * ARM ID of the virtual machine represented by this Azure Workload Container
   */
readonly sourceResourceId?: string;

/**
   * Workload type for which registration was sent.
   */
readonly workloadType?: 'AzureFileShare''AzureSqlDb''Client''Exchange''FileFolder''GenericDataSource''Invalid''SAPAseDatabase''SAPHanaDBInstance''SAPHanaDatabase''SQLDB''SQLDataBase''Shareponumber''SystemState''VM''VMwareVM';

/**
   * Type of the container. The value of this property for: 1. Compute Azure VM is Microsoft.Compute/virtualMachines 2.Classic Compute Azure VM is Microsoft.ClassicCompute/virtualMachines 3. Windows machines (like MAB, DPM etc) isWindows 4. Azure SQL instance is AzureSqlContainer. 5. Storage containers is StorageContainer. 6. Azure workloadBackup is VMAppContainer
   */
readonly containerType: 'Windows';

/**
   * Agent version of this container.
   */
readonly agentVersion?: string;

/**
   * Can the container be registered one more time.
   */
readonly canReRegister?: bool;

/**
   * Health state of mab container.
   */
readonly containerHealthState?: string;

/**
   * ContainerID represents the container.
   */
readonly containerId?: number;

/**
   * Additional information for this container
   */
readonly extendedInfo?: MabContainerExtendedInfo;

/**
   * Health details on this mab container.
   */
readonly mabContainerHealthDetails?: MABContainerHealthDetails[];

/**
   * Number of items backed up in this container.
   */
readonly protectedItemCount?: number;

/**
   * List of backup items associated with this container.
   */
readonly backupItems?: string[];

/**
   * Type of backup items associated with this container.
   */
readonly backupItemType?: 'AzureFileShare''AzureSqlDb''Client''Exchange''FileFolder''GenericDataSource''Invalid''SAPAseDatabase''SAPHanaDBInstance''SAPHanaDatabase''SQLDB''SQLDataBase''Shareponumber''SystemState''VM''VMwareVM';

/**
   * Latest backup status of this container.
   */
readonly lastBackupStatus?: string;

/**
   * Time stamp when this container was refreshed.
   */
readonly lastRefreshedAt?: string;

/**
   * Backup policy associated with this container.
   */
readonly policyName?: string;

/**
   * Health Code
   */
readonly code?: number;

/**
   * Health Message
   */
readonly message?: string;

/**
   * Health Recommended Actions
   */
readonly recommendations?: string[];

/**
   * Health Title
   */
readonly title?: string;
}

/**
 * RecoveryservicesVaultsBackupfabricsProtectioncontainers resource
 */
export class RecoveryservicesVaultsBackupfabricsProtectioncontainers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackupfabricsProtectioncontainersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackupfabricsProtectioncontainersProps): string {
    return JSON.stringify(
        {properties: {backupManagementType: "string", friendlyName: "string", healthStatus: "string", protectableObjectType: "string", registrationStatus: "string", containerType: "string"}, eTag: "string"}
    );
  }
}
