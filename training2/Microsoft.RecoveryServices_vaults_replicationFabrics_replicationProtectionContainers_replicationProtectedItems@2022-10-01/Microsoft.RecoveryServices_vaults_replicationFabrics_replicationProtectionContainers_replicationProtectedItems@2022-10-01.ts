import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotecteditemsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:replicationProtectionContainers;

/**
   * The Policy Id.
   */
readonly policyId?: string;

/**
   * The protectable item Id.
   */
readonly protectableItemId?: string;

/**
   * The ReplicationProviderInput. For HyperVReplicaAzure provider, it will be AzureEnableProtectionInput object. For San provider, it will be SanEnableProtectionInput object. For HyperVReplicaAzure provider, it can be null.
   */
readonly providerSpecificDetails?: EnableProtectionProviderSpecificInputOrReplicationPr...;

/**
   * Set the object type
   */
readonly instanceType: A2AA2ACrossClusterMigrationHyperVReplica2012HyperVReplica2012R2HyperVReplicaAzureHyperVReplicaBaseReplicationDetailsInMageInMageAzureV2InMageRcmInMageRcmFailback;

/**
   * The class type.
   */
readonly instanceType: 'A2A';

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
   * The recovery availability set Id.
   */
readonly recoveryAvailabilitySetId?: string;

/**
   * The recovery availability zone.
   */
readonly recoveryAvailabilityZone?: string;

/**
   * The recovery Azure virtual network ARM id.
   */
readonly recoveryAzureNetworkId?: string;

/**
   * The boot diagnostic storage account.
   */
readonly recoveryBootDiagStorageAccountId?: string;

/**
   * The recovery capacity reservation group Id.
   */
readonly recoveryCapacityReservationGroupId?: string;

/**
   * The recovery cloud service Id. Valid for V1 scenarios.
   */
readonly recoveryCloudServiceId?: string;

/**
   * The recovery container Id.
   */
readonly recoveryContainerId?: string;

/**
   * The recovery extended location.
   */
readonly recoveryExtendedLocation?: ExtendedLocation;

/**
   * The recovery proximity placement group Id.
   */
readonly recoveryProximityPlacementGroupId?: string;

/**
   * The recovery resource group Id. Valid for V2 scenarios.
   */
readonly recoveryResourceGroupId?: string;

/**
   * The recovery subnet name.
   */
readonly recoverySubnetName?: string;

/**
   * The virtual machine scale set Id.
   */
readonly recoveryVirtualMachineScaleSetId?: string;

/**
   * The list of vm disk details.
   */
readonly vmDisks?: A2AVmDiskInputDetails[];

/**
   * The list of vm managed disk details.
   */
readonly vmManagedDisks?: A2AVmManagedDiskInputDetails[];

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
   * The extended location type.
   */
readonly type: 'EdgeZone';

/**
   * The disk Uri.
   */
readonly diskUri: string;

/**
   * The primary staging storage account Id.
   */
readonly primaryStagingAzureStorageAccountId: string;

/**
   * The recovery VHD storage account Id.
   */
readonly recoveryAzureStorageAccountId: string;

/**
   * The recovery disk encryption information (for one / single pass flows).
   */
readonly diskEncryptionInfo?: DiskEncryptionInfo;

/**
   * The disk Id.
   */
readonly diskId: string;

/**
   * The primary staging storage account Arm Id.
   */
readonly primaryStagingAzureStorageAccountId: string;

/**
   * The recovery disk encryption set Id.
   */
readonly recoveryDiskEncryptionSetId?: string;

/**
   * The replica disk type. Its an optional value and will be same as source disk type if not user provided.
   */
readonly recoveryReplicaDiskAccountType?: string;

/**
   * The target resource group Arm Id.
   */
readonly recoveryResourceGroupId: string;

/**
   * The target disk type after failover. Its an optional value and will be same as source disk type if not user provided.
   */
readonly recoveryTargetDiskAccountType?: string;

/**
   * The class type.
   */
readonly instanceType: 'A2ACrossClusterMigration';

/**
   * The fabric specific object Id of the virtual machine.
   */
readonly fabricObjectId?: string;

/**
   * The recovery container Id.
   */
readonly recoveryContainerId?: string;

/**
   * The class type.
   */
readonly instanceType: 'HyperVReplica2012';

/**
   * The class type.
   */
readonly instanceType: 'HyperVReplica2012R2';

/**
   * The class type.
   */
readonly instanceType: 'HyperVReplicaAzure';

/**
   * The DiskEncryptionSet ARM Id.
   */
readonly diskEncryptionSetId?: string;

/**
   * The list of VHD Ids of disks to be protected.
   */
readonly disksToInclude?: string[];

/**
   * The disks to include list for managed disks.
   */
readonly disksToIncludeForManagedDisks?: HyperVReplicaAzureDiskInputDetails[];

/**
   * The DiskType.
   */
readonly diskType?: 'Premium_LRS''StandardSSD_LRS''Standard_LRS';

/**
   * The selected option to enable RDP\SSH on target vm after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
   */
readonly enableRdpOnTargetOption?: string;

/**
   * The Hyper-V host VM Id.
   */
readonly hvHostVmId?: string;

/**
   * License type.
   */
readonly licenseType?: 'NoLicenseType''NotSpecified''WindowsServer';

/**
   * The storage account to be used for logging during replication.
   */
readonly logStorageAccountId?: string;

/**
   * The OS type associated with VM.
   */
readonly osType?: string;

/**
   * The tags for the seed managed disks.
   */
readonly seedManagedDiskTags?: object;

/**
   * The SQL Server license type.
   */
readonly sqlServerLicenseType?: 'AHUB''NoLicenseType''NotSpecified''PAYG';

/**
   * The target availability set ARM Id for resource manager deployment.
   */
readonly targetAvailabilitySetId?: string;

/**
   * The target availability zone.
   */
readonly targetAvailabilityZone?: string;

/**
   * The selected target Azure network Id.
   */
readonly targetAzureNetworkId?: string;

/**
   * The selected target Azure subnet Id.
   */
readonly targetAzureSubnetId?: string;

/**
   * The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
   */
readonly targetAzureV1ResourceGroupId?: string;

/**
   * The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
   */
readonly targetAzureV2ResourceGroupId?: string;

/**
   * The target azure VM Name.
   */
readonly targetAzureVmName?: string;

/**
   * The tags for the target managed disks.
   */
readonly targetManagedDiskTags?: object;

/**
   * The tags for the target NICs.
   */
readonly targetNicTags?: object;

/**
   * The proximity placement group ARM Id.
   */
readonly targetProximityPlacementGroupId?: string;

/**
   * The storage account Id.
   */
readonly targetStorageAccountId?: string;

/**
   * The target VM size.
   */
readonly targetVmSize?: string;

/**
   * The target VM tags.
   */
readonly targetVmTags?: object;

/**
   * A value indicating whether managed disks should be used during failover.
   */
readonly useManagedDisks?: string;

/**
   * A value indicating whether managed disks should be used during replication.
   */
readonly useManagedDisksForReplication?: string;

/**
   * The OS disk VHD id associated with VM.
   */
readonly vhdId?: string;

/**
   * The VM Name.
   */
readonly vmName?: string;

/**
   * The DiskEncryptionSet ARM ID.
   */
readonly diskEncryptionSetId?: string;

/**
   * The DiskId.
   */
readonly diskId?: string;

/**
   * The DiskType.
   */
readonly diskType?: 'Premium_LRS''StandardSSD_LRS''Standard_LRS';

/**
   * The LogStorageAccountId.
   */
readonly logStorageAccountId?: string;

/**
   * The class type.
   */
readonly instanceType: 'HyperVReplicaBaseReplicationDetails';

/**
   * The class type.
   */
readonly instanceType: 'InMage';

/**
   * The target datastore name.
   */
readonly datastoreName?: string;

/**
   * The enable disk exclusion input.
   */
readonly diskExclusionInput?: InMageDiskExclusionInput;

/**
   * The disks to include list.
   */
readonly disksToInclude?: string[];

/**
   * The Master Target Id.
   */
readonly masterTargetId: string;

/**
   * The multi VM group Id.
   */
readonly multiVmGroupId: string;

/**
   * The multi VM group name.
   */
readonly multiVmGroupName: string;

/**
   * The Process Server Id.
   */
readonly processServerId: string;

/**
   * The retention drive to use on the MT.
   */
readonly retentionDrive: string;

/**
   * The CS account Id.
   */
readonly runAsAccountId?: string;

/**
   * The VM Name.
   */
readonly vmFriendlyName?: string;

/**
   * The guest disk signature based option for disk exclusion.
   */
readonly diskSignatureOptions?: InMageDiskSignatureExclusionOptions[];

/**
   * The volume label based option for disk exclusion.
   */
readonly volumeOptions?: InMageVolumeExclusionOptions[];

/**
   * The guest signature of disk to be excluded from replication.
   */
readonly diskSignature?: string;

/**
   * The value indicating whether to exclude multi volume disk or not. If a disk has multiple volumes and one of the volume has label matching with VolumeLabel this disk will be excluded from replication if OnlyExcludeIfSingleVolume is false.
   */
readonly onlyExcludeIfSingleVolume?: string;

/**
   * The volume label. The disk having any volume with this label will be excluded from replication.
   */
readonly volumeLabel?: string;

/**
   * The class type.
   */
readonly instanceType: 'InMageAzureV2';

/**
   * The DiskEncryptionSet ARM Id.
   */
readonly diskEncryptionSetId?: string;

/**
   * The disks to include list.
   */
readonly disksToInclude?: InMageAzureV2DiskInputDetails[];

/**
   * The DiskType.
   */
readonly diskType?: 'Premium_LRS''StandardSSD_LRS''Standard_LRS';

/**
   * The selected option to enable RDP\SSH on target VM after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum.
   */
readonly enableRdpOnTargetOption?: string;

/**
   * License type.
   */
readonly licenseType?: 'NoLicenseType''NotSpecified''WindowsServer';

/**
   * The storage account to be used for logging during replication.
   */
readonly logStorageAccountId?: string;

/**
   * The Master target Id.
   */
readonly masterTargetId?: string;

/**
   * The multi VM group Id.
   */
readonly multiVmGroupId?: string;

/**
   * The multi VM group name.
   */
readonly multiVmGroupName?: string;

/**
   * The Process Server Id.
   */
readonly processServerId?: string;

/**
   * The CS account Id.
   */
readonly runAsAccountId?: string;

/**
   * The tags for the seed managed disks.
   */
readonly seedManagedDiskTags?: object;

/**
   * The SQL Server license type.
   */
readonly sqlServerLicenseType?: 'AHUB''NoLicenseType''NotSpecified''PAYG';

/**
   * The storage account Id.
   */
readonly storageAccountId?: string;

/**
   * The target availability set ARM Id for resource manager deployment.
   */
readonly targetAvailabilitySetId?: string;

/**
   * The target availability zone.
   */
readonly targetAvailabilityZone?: string;

/**
   * The selected target Azure network Id.
   */
readonly targetAzureNetworkId?: string;

/**
   * The selected target Azure subnet Id.
   */
readonly targetAzureSubnetId?: string;

/**
   * The Id of the target resource group (for classic deployment) in which the failover VM is to be created.
   */
readonly targetAzureV1ResourceGroupId?: string;

/**
   * The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created.
   */
readonly targetAzureV2ResourceGroupId?: string;

/**
   * The target azure VM Name.
   */
readonly targetAzureVmName?: string;

/**
   * The tags for the target managed disks.
   */
readonly targetManagedDiskTags?: object;

/**
   * The tags for the target NICs.
   */
readonly targetNicTags?: object;

/**
   * The proximity placement group ARM Id.
   */
readonly targetProximityPlacementGroupId?: string;

/**
   * The target VM size.
   */
readonly targetVmSize?: string;

/**
   * The target VM tags.
   */
readonly targetVmTags?: object;

/**
   * The DiskEncryptionSet ARM ID.
   */
readonly diskEncryptionSetId?: string;

/**
   * The DiskId.
   */
readonly diskId?: string;

/**
   * The DiskType.
   */
readonly diskType?: 'Premium_LRS''StandardSSD_LRS''Standard_LRS';

/**
   * The LogStorageAccountId.
   */
readonly logStorageAccountId?: string;

/**
   * The class type.
   */
readonly instanceType: 'InMageRcm';

/**
   * The default disk input.
   */
readonly disksDefault?: InMageRcmDisksDefaultInput;

/**
   * The disks to include list.
   */
readonly disksToInclude?: InMageRcmDiskInput[];

/**
   * The ARM Id of discovered machine.
   */
readonly fabricDiscoveryMachineId: string;

/**
   * The license type.
   */
readonly licenseType?: 'NoLicenseType''NotSpecified''WindowsServer';

/**
   * The multi VM group name.
   */
readonly multiVmGroupName?: string;

/**
   * The process server Id.
   */
readonly processServerId: string;

/**
   * The run-as account Id.
   */
readonly runAsAccountId?: string;

/**
   * The target availability set ARM Id.
   */
readonly targetAvailabilitySetId?: string;

/**
   * The target availability zone.
   */
readonly targetAvailabilityZone?: string;

/**
   * The target boot diagnostics storage account ARM Id.
   */
readonly targetBootDiagnosticsStorageAccountId?: string;

/**
   * The selected target network ARM Id.
   */
readonly targetNetworkId?: string;

/**
   * The target proximity placement group Id.
   */
readonly targetProximityPlacementGroupId?: string;

/**
   * The target resource group ARM Id.
   */
readonly targetResourceGroupId: string;

/**
   * The selected target subnet name.
   */
readonly targetSubnetName?: string;

/**
   * The target VM name.
   */
readonly targetVmName?: string;

/**
   * The target VM size.
   */
readonly targetVmSize?: string;

/**
   * The selected test network ARM Id.
   */
readonly testNetworkId?: string;

/**
   * The selected test subnet name.
   */
readonly testSubnetName?: string;

/**
   * The DiskEncryptionSet ARM Id.
   */
readonly diskEncryptionSetId?: string;

/**
   * The disk type.
   */
readonly diskType: 'Premium_LRS''StandardSSD_LRS''Standard_LRS';

/**
   * The log storage account ARM Id.
   */
readonly logStorageAccountId: string;

/**
   * The DiskEncryptionSet ARM Id.
   */
readonly diskEncryptionSetId?: string;

/**
   * The disk Id.
   */
readonly diskId: string;

/**
   * The disk type.
   */
readonly diskType: 'Premium_LRS''StandardSSD_LRS''Standard_LRS';

/**
   * The log storage account ARM Id.
   */
readonly logStorageAccountId: string;

/**
   * The class type.
   */
readonly instanceType: 'InMageRcmFailback';
}

/**
 * RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotecteditems resource
 */
export class RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotecteditems extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotecteditemsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersReplicationprotecteditemsProps): string {
    return JSON.stringify(
        {properties: {policyId: "string", protectableItemId: "string", providerSpecificDetails: {instanceType: "string"}}}
    );
  }
}
