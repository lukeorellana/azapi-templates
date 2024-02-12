import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationprotectionintentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * The ReplicationProviderInput. For A2A provider, it will be A2ACreateProtectionIntentInput object.
   */
readonly providerSpecificDetails?: CreateProtectionIntentProviderSpecificDetailsOrRepli...;

/**
   * Set the object type
   */
readonly instanceType: A2A;

/**
   * The class type.
   */
readonly instanceType: 'A2A';

/**
   * A value indicating whether the auto update is enabled.
   */
readonly agentAutoUpdateStatus?: 'Disabled''Enabled';

/**
   * The automation account arm id.
   */
readonly automationAccountArmId?: string;

/**
   * A value indicating the authentication type for automation account. The default value is "RunAsAccount".
   */
readonly automationAccountAuthenticationType?: 'RunAsAccount''SystemAssignedIdentity';

/**
   * A value indicating whether the auto protection is enabled.
   */
readonly autoProtectionOfDataDisk?: 'Disabled''Enabled';

/**
   * The recovery disk encryption information (for two pass flows).
   */
readonly diskEncryptionInfo?: DiskEncryptionInfo;

/**
   * The fabric specific object Id of the virtual machine.
   */
readonly fabricObjectId: string;

/**
   * The multi vm group id.
   */
readonly multiVmGroupId?: string;

/**
   * The multi vm group name.
   */
readonly multiVmGroupName?: string;

/**
   * The primary location for the virtual machine.
   */
readonly primaryLocation: string;

/**
   * The primary staging storage account input.
   */
readonly primaryStagingStorageAccountCustomInput?: StorageAccountCustomDetails;

/**
   * The protection profile custom inputs.
   */
readonly protectionProfileCustomInput?: ProtectionProfileCustomDetails;

/**
   * The recovery availability set input.
   */
readonly recoveryAvailabilitySetCustomInput?: RecoveryAvailabilitySetCustomDetails;

/**
   * The recovery availability type of the virtual machine.
   */
readonly recoveryAvailabilityType: 'AvailabilitySet''AvailabilityZone''Single';

/**
   * The recovery availability zone.
   */
readonly recoveryAvailabilityZone?: string;

/**
   * The boot diagnostic storage account.
   */
readonly recoveryBootDiagStorageAccount?: StorageAccountCustomDetails;

/**
   * The recovery location for the virtual machine.
   */
readonly recoveryLocation: string;

/**
   * The recovery proximity placement group custom input.
   */
readonly recoveryProximityPlacementGroupCustomInput?: RecoveryProximityPlacementGroupCustomDetails;

/**
   * The recovery resource group Id. Valid for V2 scenarios.
   */
readonly recoveryResourceGroupId: string;

/**
   * The recovery subscription Id of the virtual machine.
   */
readonly recoverySubscriptionId: string;

/**
   * The recovery virtual network input.
   */
readonly recoveryVirtualNetworkCustomInput?: RecoveryVirtualNetworkCustomDetails;

/**
   * The list of vm disk inputs.
   */
readonly vmDisks?: A2AProtectionIntentDiskInputDetails[];

/**
   * The list of vm managed disk inputs.
   */
readonly vmManagedDisks?: A2AProtectionIntentManagedDiskInputDetails[];

/**
   * The recovery KeyVault reference for secret.
   */
readonly diskEncryptionKeyInfo?: DiskEncryptionKeyInfo;

/**
   * The recovery KeyVault reference for key.
   */
readonly keyEncryptionKeyInfo?: KeyEncryptionKeyInfo;

/**
   * The KeyVault resource ARM id for secret.
   */
readonly keyVaultResourceArmId?: string;

/**
   * The secret url / identifier.
   */
readonly secretIdentifier?: string;

/**
   * The key URL / identifier.
   */
readonly keyIdentifier?: string;

/**
   * The KeyVault resource ARM Id for key.
   */
readonly keyVaultResourceArmId?: string;

/**
   * Set the object type
   */
readonly resourceType: Existing;

/**
   * The class type.
   */
readonly resourceType: 'Existing';

/**
   * The storage account Arm Id. Throw error, if resource does not exists.
   */
readonly azureStorageAccountId: string;

/**
   * Set the object type
   */
readonly resourceType: ExistingNew;

/**
   * The class type.
   */
readonly resourceType: 'Existing';

/**
   * The protection profile Arm Id. Throw error, if resource does not exists.
   */
readonly protectionProfileId: string;

/**
   * The class type.
   */
readonly resourceType: 'New';

/**
   * The app consistent snapshot frequency (in minutes).
   */
readonly appConsistentFrequencyInMinutes?: number;

/**
   * The crash consistent snapshot frequency (in minutes).
   */
readonly crashConsistentFrequencyInMinutes?: number;

/**
   * A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
   */
readonly multiVmSyncStatus: 'Disable''Enable';

/**
   * The protection profile input.
   */
readonly policyName: string;

/**
   * The duration in minutes until which the recovery points need to be stored.
   */
readonly recoveryPointHistory?: number;

/**
   * Set the object type
   */
readonly resourceType: Existing;

/**
   * The class type.
   */
readonly resourceType: 'Existing';

/**
   * The recovery availability set Id. Will throw error, if resource does not exist.
   */
readonly recoveryAvailabilitySetId?: string;

/**
   * Set the object type
   */
readonly resourceType: Existing;

/**
   * The class type.
   */
readonly resourceType: 'Existing';

/**
   * The recovery proximity placement group Id. Will throw error, if resource does not exist.
   */
readonly recoveryProximityPlacementGroupId?: string;

/**
   * Set the object type
   */
readonly resourceType: ExistingNew;

/**
   * The class type.
   */
readonly resourceType: 'Existing';

/**
   * The recovery subnet name.
   */
readonly recoverySubnetName?: string;

/**
   * The recovery virtual network Id. Will throw error, if resource does not exist.
   */
readonly recoveryVirtualNetworkId: string;

/**
   * The class type.
   */
readonly resourceType: 'New';

/**
   * The recovery virtual network name.
   */
readonly recoveryVirtualNetworkName?: string;

/**
   * The name of the resource group to be used to create the recovery virtual network. If absent, target network would be created in the same resource group as target VM.
   */
readonly recoveryVirtualNetworkResourceGroupName?: string;

/**
   * The disk Uri.
   */
readonly diskUri: string;

/**
   * The primary staging storage account input.
   */
readonly primaryStagingStorageAccountCustomInput?: StorageAccountCustomDetails;

/**
   * The recovery VHD storage account input.
   */
readonly recoveryAzureStorageAccountCustomInput?: StorageAccountCustomDetails;

/**
   * The recovery disk encryption information (for one / single pass flows).
   */
readonly diskEncryptionInfo?: DiskEncryptionInfo;

/**
   * The disk Id.
   */
readonly diskId: string;

/**
   * The primary staging storage account input.
   */
readonly primaryStagingStorageAccountCustomInput?: StorageAccountCustomDetails;

/**
   * The recovery disk encryption set Id.
   */
readonly recoveryDiskEncryptionSetId?: string;

/**
   * The replica disk type. Its an optional value and will be same as source disk type if not user provided.
   */
readonly recoveryReplicaDiskAccountType?: string;

/**
   * The recovery resource group input.
   */
readonly recoveryResourceGroupCustomInput?: RecoveryResourceGroupCustomDetails;

/**
   * The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.
   */
readonly recoveryTargetDiskAccountType?: string;

/**
   * Set the object type
   */
readonly resourceType: Existing;

/**
   * The class type.
   */
readonly resourceType: 'Existing';

/**
   * The recovery resource group Id. Valid for V2 scenarios.
   */
readonly recoveryResourceGroupId?: string;
}

/**
 * RecoveryservicesVaultsReplicationprotectionintents resource
 */
export class RecoveryservicesVaultsReplicationprotectionintents extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationprotectionintentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationProtectionIntents@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationprotectionintentsProps): string {
    return JSON.stringify(
        {properties: {providerSpecificDetails: {instanceType: "string"}}}
    );
  }
}
