```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      policyId = "string"
      protectableItemId = "string"
      providerSpecificDetails = {
        instanceType = "string"
        // For remaining properties, see EnableProtectionProviderSpecificInputOrReplicationProviderSpecificSettings objects
      }
    }
  })
}

```

### vaults/replicationFabrics/replicationProtectionConta...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:replicationProtectionContainers |
| properties | Enable protection input properties. | EnableProtectionInputPropertiesOrReplicationProtecte... |


### EnableProtectionInputPropertiesOrReplicationProtecte...

| Name | Description | Value |
|-|-|-|
| policyId | The Policy Id. | string |
| protectableItemId | The protectable item Id. | string |
| providerSpecificDetails | The ReplicationProviderInput. For HyperVReplicaAzure provider, it will be AzureEnableProtectionInput object. For San provider, it will be SanEnableProtectionInput object. For HyperVReplicaAzure provider, it can be null. | EnableProtectionProviderSpecificInputOrReplicationPr... |


### EnableProtectionProviderSpecificInputOrReplicationPr...

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | A2AA2ACrossClusterMigrationHyperVReplica2012HyperVReplica2012R2HyperVReplicaAzureHyperVReplicaBaseReplicationDetailsInMageInMageAzureV2InMageRcmInMageRcmFailback(required) |


### A2AEnableProtectionInputOrA2AReplicationDetails

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'A2A' (required) |
| diskEncryptionInfo | The recovery disk encryption information (for two pass flows). | DiskEncryptionInfo |
| fabricObjectId | The fabric specific object Id of the virtual machine. | string (required) |
| multiVmGroupId | The multi vm group id. | string |
| multiVmGroupName | The multi vm group name. | string |
| recoveryAvailabilitySetId | The recovery availability set Id. | string |
| recoveryAvailabilityZone | The recovery availability zone. | string |
| recoveryAzureNetworkId | The recovery Azure virtual network ARM id. | string |
| recoveryBootDiagStorageAccountId | The boot diagnostic storage account. | string |
| recoveryCapacityReservationGroupId | The recovery capacity reservation group Id. | string |
| recoveryCloudServiceId | The recovery cloud service Id. Valid for V1 scenarios. | string |
| recoveryContainerId | The recovery container Id. | string |
| recoveryExtendedLocation | The recovery extended location. | ExtendedLocation |
| recoveryProximityPlacementGroupId | The recovery proximity placement group Id. | string |
| recoveryResourceGroupId | The recovery resource group Id. Valid for V2 scenarios. | string |
| recoverySubnetName | The recovery subnet name. | string |
| recoveryVirtualMachineScaleSetId | The virtual machine scale set Id. | string |
| vmDisks | The list of vm disk details. | A2AVmDiskInputDetails[] |
| vmManagedDisks | The list of vm managed disk details. | A2AVmManagedDiskInputDetails[] |


### DiskEncryptionInfo

| Name | Description | Value |
|-|-|-|
| diskEncryptionKeyInfo | The recovery KeyVault reference for secret. | DiskEncryptionKeyInfo |
| keyEncryptionKeyInfo | The recovery KeyVault reference for key. | KeyEncryptionKeyInfo |


### DiskEncryptionKeyInfo

| Name | Description | Value |
|-|-|-|
| keyVaultResourceArmId | The KeyVault resource ARM id for secret. | string |
| secretIdentifier | The secret url / identifier. | string |


### KeyEncryptionKeyInfo

| Name | Description | Value |
|-|-|-|
| keyIdentifier | The key URL / identifier. | string |
| keyVaultResourceArmId | The KeyVault resource ARM Id for key. | string |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string (required) |
| type | The extended location type. | 'EdgeZone' (required) |


### A2AVmDiskInputDetails

| Name | Description | Value |
|-|-|-|
| diskUri | The disk Uri. | string (required) |
| primaryStagingAzureStorageAccountId | The primary staging storage account Id. | string (required) |
| recoveryAzureStorageAccountId | The recovery VHD storage account Id. | string (required) |


### A2AVmManagedDiskInputDetails

| Name | Description | Value |
|-|-|-|
| diskEncryptionInfo | The recovery disk encryption information (for one / single pass flows). | DiskEncryptionInfo |
| diskId | The disk Id. | string (required) |
| primaryStagingAzureStorageAccountId | The primary staging storage account Arm Id. | string (required) |
| recoveryDiskEncryptionSetId | The recovery disk encryption set Id. | string |
| recoveryReplicaDiskAccountType | The replica disk type. Its an optional value and will be same as source disk type if not user provided. | string |
| recoveryResourceGroupId | The target resource group Arm Id. | string (required) |
| recoveryTargetDiskAccountType | The target disk type after failover. Its an optional value and will be same as source disk type if not user provided. | string |


### A2ACrossClusterMigrationEnableProtectionInputOrA2ACr...

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'A2ACrossClusterMigration' (required) |
| fabricObjectId | The fabric specific object Id of the virtual machine. | string |
| recoveryContainerId | The recovery container Id. | string |


### HyperVReplicaReplicationDetails

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'HyperVReplica2012' (required) |


### HyperVReplicaBlueReplicationDetails

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'HyperVReplica2012R2' (required) |


### HyperVReplicaAzureEnableProtectionInputOrHyperVRepli...

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'HyperVReplicaAzure' (required) |
| diskEncryptionSetId | The DiskEncryptionSet ARM Id. | string |
| disksToInclude | The list of VHD Ids of disks to be protected. | string[] |
| disksToIncludeForManagedDisks | The disks to include list for managed disks. | HyperVReplicaAzureDiskInputDetails[] |
| diskType | The DiskType. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' |
| enableRdpOnTargetOption | The selected option to enable RDP\SSH on target vm after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum. | string |
| hvHostVmId | The Hyper-V host VM Id. | string |
| licenseType | License type. | 'NoLicenseType''NotSpecified''WindowsServer' |
| logStorageAccountId | The storage account to be used for logging during replication. | string |
| osType | The OS type associated with VM. | string |
| seedManagedDiskTags | The tags for the seed managed disks. | object |
| sqlServerLicenseType | The SQL Server license type. | 'AHUB''NoLicenseType''NotSpecified''PAYG' |
| targetAvailabilitySetId | The target availability set ARM Id for resource manager deployment. | string |
| targetAvailabilityZone | The target availability zone. | string |
| targetAzureNetworkId | The selected target Azure network Id. | string |
| targetAzureSubnetId | The selected target Azure subnet Id. | string |
| targetAzureV1ResourceGroupId | The Id of the target resource group (for classic deployment) in which the failover VM is to be created. | string |
| targetAzureV2ResourceGroupId | The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created. | string |
| targetAzureVmName | The target azure VM Name. | string |
| targetManagedDiskTags | The tags for the target managed disks. | object |
| targetNicTags | The tags for the target NICs. | object |
| targetProximityPlacementGroupId | The proximity placement group ARM Id. | string |
| targetStorageAccountId | The storage account Id. | string |
| targetVmSize | The target VM size. | string |
| targetVmTags | The target VM tags. | object |
| useManagedDisks | A value indicating whether managed disks should be used during failover. | string |
| useManagedDisksForReplication | A value indicating whether managed disks should be used during replication. | string |
| vhdId | The OS disk VHD id associated with VM. | string |
| vmName | The VM Name. | string |


### HyperVReplicaAzureDiskInputDetails

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | The DiskEncryptionSet ARM ID. | string |
| diskId | The DiskId. | string |
| diskType | The DiskType. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' |
| logStorageAccountId | The LogStorageAccountId. | string |


### HyperVReplicaBaseReplicationDetails

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'HyperVReplicaBaseReplicationDetails' (required) |


### InMageEnableProtectionInputOrInMageReplicationDetail...

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'InMage' (required) |
| datastoreName | The target datastore name. | string |
| diskExclusionInput | The enable disk exclusion input. | InMageDiskExclusionInput |
| disksToInclude | The disks to include list. | string[] |
| masterTargetId | The Master Target Id. | string (required) |
| multiVmGroupId | The multi VM group Id. | string (required) |
| multiVmGroupName | The multi VM group name. | string (required) |
| processServerId | The Process Server Id. | string (required) |
| retentionDrive | The retention drive to use on the MT. | string (required) |
| runAsAccountId | The CS account Id. | string |
| vmFriendlyName | The VM Name. | string |


### InMageDiskExclusionInput

| Name | Description | Value |
|-|-|-|
| diskSignatureOptions | The guest disk signature based option for disk exclusion. | InMageDiskSignatureExclusionOptions[] |
| volumeOptions | The volume label based option for disk exclusion. | InMageVolumeExclusionOptions[] |


### InMageDiskSignatureExclusionOptions

| Name | Description | Value |
|-|-|-|
| diskSignature | The guest signature of disk to be excluded from replication. | string |


### InMageVolumeExclusionOptions

| Name | Description | Value |
|-|-|-|
| onlyExcludeIfSingleVolume | The value indicating whether to exclude multi volume disk or not. If a disk has multiple volumes and one of the volume has label matching with VolumeLabel this disk will be excluded from replication if OnlyExcludeIfSingleVolume is false. | string |
| volumeLabel | The volume label. The disk having any volume with this label will be excluded from replication. | string |


### InMageAzureV2EnableProtectionInputOrInMageAzureV2Rep...

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'InMageAzureV2' (required) |
| diskEncryptionSetId | The DiskEncryptionSet ARM Id. | string |
| disksToInclude | The disks to include list. | InMageAzureV2DiskInputDetails[] |
| diskType | The DiskType. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' |
| enableRdpOnTargetOption | The selected option to enable RDP\SSH on target VM after failover. String value of SrsDataContract.EnableRDPOnTargetOption enum. | string |
| licenseType | License type. | 'NoLicenseType''NotSpecified''WindowsServer' |
| logStorageAccountId | The storage account to be used for logging during replication. | string |
| masterTargetId | The Master target Id. | string |
| multiVmGroupId | The multi VM group Id. | string |
| multiVmGroupName | The multi VM group name. | string |
| processServerId | The Process Server Id. | string |
| runAsAccountId | The CS account Id. | string |
| seedManagedDiskTags | The tags for the seed managed disks. | object |
| sqlServerLicenseType | The SQL Server license type. | 'AHUB''NoLicenseType''NotSpecified''PAYG' |
| storageAccountId | The storage account Id. | string |
| targetAvailabilitySetId | The target availability set ARM Id for resource manager deployment. | string |
| targetAvailabilityZone | The target availability zone. | string |
| targetAzureNetworkId | The selected target Azure network Id. | string |
| targetAzureSubnetId | The selected target Azure subnet Id. | string |
| targetAzureV1ResourceGroupId | The Id of the target resource group (for classic deployment) in which the failover VM is to be created. | string |
| targetAzureV2ResourceGroupId | The Id of the target resource group (for resource manager deployment) in which the failover VM is to be created. | string |
| targetAzureVmName | The target azure VM Name. | string |
| targetManagedDiskTags | The tags for the target managed disks. | object |
| targetNicTags | The tags for the target NICs. | object |
| targetProximityPlacementGroupId | The proximity placement group ARM Id. | string |
| targetVmSize | The target VM size. | string |
| targetVmTags | The target VM tags. | object |


### InMageAzureV2DiskInputDetails

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | The DiskEncryptionSet ARM ID. | string |
| diskId | The DiskId. | string |
| diskType | The DiskType. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' |
| logStorageAccountId | The LogStorageAccountId. | string |


### InMageRcmEnableProtectionInputOrInMageRcmReplication...

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'InMageRcm' (required) |
| disksDefault | The default disk input. | InMageRcmDisksDefaultInput |
| disksToInclude | The disks to include list. | InMageRcmDiskInput[] |
| fabricDiscoveryMachineId | The ARM Id of discovered machine. | string (required) |
| licenseType | The license type. | 'NoLicenseType''NotSpecified''WindowsServer' |
| multiVmGroupName | The multi VM group name. | string |
| processServerId | The process server Id. | string (required) |
| runAsAccountId | The run-as account Id. | string |
| targetAvailabilitySetId | The target availability set ARM Id. | string |
| targetAvailabilityZone | The target availability zone. | string |
| targetBootDiagnosticsStorageAccountId | The target boot diagnostics storage account ARM Id. | string |
| targetNetworkId | The selected target network ARM Id. | string |
| targetProximityPlacementGroupId | The target proximity placement group Id. | string |
| targetResourceGroupId | The target resource group ARM Id. | string (required) |
| targetSubnetName | The selected target subnet name. | string |
| targetVmName | The target VM name. | string |
| targetVmSize | The target VM size. | string |
| testNetworkId | The selected test network ARM Id. | string |
| testSubnetName | The selected test subnet name. | string |


### InMageRcmDisksDefaultInput

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | The DiskEncryptionSet ARM Id. | string |
| diskType | The disk type. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' (required) |
| logStorageAccountId | The log storage account ARM Id. | string (required) |


### InMageRcmDiskInput

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | The DiskEncryptionSet ARM Id. | string |
| diskId | The disk Id. | string (required) |
| diskType | The disk type. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS' (required) |
| logStorageAccountId | The log storage account ARM Id. | string (required) |


### InMageRcmFailbackReplicationDetails

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'InMageRcmFailback' (required) |


