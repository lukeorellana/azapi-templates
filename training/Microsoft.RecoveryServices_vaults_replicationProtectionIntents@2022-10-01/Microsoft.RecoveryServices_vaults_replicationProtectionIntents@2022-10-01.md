```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationProtectionIntents@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      providerSpecificDetails = {
        instanceType = "string"
        // For remaining properties, see CreateProtectionIntentProviderSpecificDetailsOrReplicationProtectionIntentProviderSpecificSettings objects
      }
    }
  })
}

```

### vaults/replicationProtectionIntents

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| properties | Create protection intent input properties. | CreateProtectionIntentPropertiesOrReplicationProtect... |


### CreateProtectionIntentPropertiesOrReplicationProtect...

| Name | Description | Value |
|-|-|-|
| providerSpecificDetails | The ReplicationProviderInput. For A2A provider, it will be A2ACreateProtectionIntentInput object. | CreateProtectionIntentProviderSpecificDetailsOrRepli... |


### CreateProtectionIntentProviderSpecificDetailsOrRepli...

| Name | Description | Value |
|-|-|-|
| instanceType | Set the object type | A2A(required) |


### A2ACreateProtectionIntentInputOrA2AReplicationIntent...

| Name | Description | Value |
|-|-|-|
| instanceType | The class type. | 'A2A' (required) |
| agentAutoUpdateStatus | A value indicating whether the auto update is enabled. | 'Disabled''Enabled' |
| automationAccountArmId | The automation account arm id. | string |
| automationAccountAuthenticationType | A value indicating the authentication type for automation account. The default value is "RunAsAccount". | 'RunAsAccount''SystemAssignedIdentity' |
| autoProtectionOfDataDisk | A value indicating whether the auto protection is enabled. | 'Disabled''Enabled' |
| diskEncryptionInfo | The recovery disk encryption information (for two pass flows). | DiskEncryptionInfo |
| fabricObjectId | The fabric specific object Id of the virtual machine. | string (required) |
| multiVmGroupId | The multi vm group id. | string |
| multiVmGroupName | The multi vm group name. | string |
| primaryLocation | The primary location for the virtual machine. | string (required) |
| primaryStagingStorageAccountCustomInput | The primary staging storage account input. | StorageAccountCustomDetails |
| protectionProfileCustomInput | The protection profile custom inputs. | ProtectionProfileCustomDetails |
| recoveryAvailabilitySetCustomInput | The recovery availability set input. | RecoveryAvailabilitySetCustomDetails |
| recoveryAvailabilityType | The recovery availability type of the virtual machine. | 'AvailabilitySet''AvailabilityZone''Single' (required) |
| recoveryAvailabilityZone | The recovery availability zone. | string |
| recoveryBootDiagStorageAccount | The boot diagnostic storage account. | StorageAccountCustomDetails |
| recoveryLocation | The recovery location for the virtual machine. | string (required) |
| recoveryProximityPlacementGroupCustomInput | The recovery proximity placement group custom input. | RecoveryProximityPlacementGroupCustomDetails |
| recoveryResourceGroupId | The recovery resource group Id. Valid for V2 scenarios. | string (required) |
| recoverySubscriptionId | The recovery subscription Id of the virtual machine. | string (required) |
| recoveryVirtualNetworkCustomInput | The recovery virtual network input. | RecoveryVirtualNetworkCustomDetails |
| vmDisks | The list of vm disk inputs. | A2AProtectionIntentDiskInputDetails[] |
| vmManagedDisks | The list of vm managed disk inputs. | A2AProtectionIntentManagedDiskInputDetails[] |


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


### StorageAccountCustomDetails

| Name | Description | Value |
|-|-|-|
| resourceType | Set the object type | Existing(required) |


### ExistingStorageAccount

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'Existing' (required) |
| azureStorageAccountId | The storage account Arm Id. Throw error, if resource does not exists. | string (required) |


### ProtectionProfileCustomDetails

| Name | Description | Value |
|-|-|-|
| resourceType | Set the object type | ExistingNew(required) |


### ExistingProtectionProfile

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'Existing' (required) |
| protectionProfileId | The protection profile Arm Id. Throw error, if resource does not exists. | string (required) |


### NewProtectionProfile

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'New' (required) |
| appConsistentFrequencyInMinutes | The app consistent snapshot frequency (in minutes). | int |
| crashConsistentFrequencyInMinutes | The crash consistent snapshot frequency (in minutes). | int |
| multiVmSyncStatus | A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'. | 'Disable''Enable' (required) |
| policyName | The protection profile input. | string (required) |
| recoveryPointHistory | The duration in minutes until which the recovery points need to be stored. | int |


### RecoveryAvailabilitySetCustomDetails

| Name | Description | Value |
|-|-|-|
| resourceType | Set the object type | Existing(required) |


### ExistingRecoveryAvailabilitySet

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'Existing' (required) |
| recoveryAvailabilitySetId | The recovery availability set Id. Will throw error, if resource does not exist. | string |


### RecoveryProximityPlacementGroupCustomDetails

| Name | Description | Value |
|-|-|-|
| resourceType | Set the object type | Existing(required) |


### ExistingRecoveryProximityPlacementGroup

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'Existing' (required) |
| recoveryProximityPlacementGroupId | The recovery proximity placement group Id. Will throw error, if resource does not exist. | string |


### RecoveryVirtualNetworkCustomDetails

| Name | Description | Value |
|-|-|-|
| resourceType | Set the object type | ExistingNew(required) |


### ExistingRecoveryVirtualNetwork

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'Existing' (required) |
| recoverySubnetName | The recovery subnet name. | string |
| recoveryVirtualNetworkId | The recovery virtual network Id. Will throw error, if resource does not exist. | string (required) |


### NewRecoveryVirtualNetwork

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'New' (required) |
| recoveryVirtualNetworkName | The recovery virtual network name. | string |
| recoveryVirtualNetworkResourceGroupName | The name of the resource group to be used to create the recovery virtual network. If absent, target network would be created in the same resource group as target VM. | string |


### A2AProtectionIntentDiskInputDetails

| Name | Description | Value |
|-|-|-|
| diskUri | The disk Uri. | string (required) |
| primaryStagingStorageAccountCustomInput | The primary staging storage account input. | StorageAccountCustomDetails |
| recoveryAzureStorageAccountCustomInput | The recovery VHD storage account input. | StorageAccountCustomDetails |


### A2AProtectionIntentManagedDiskInputDetails

| Name | Description | Value |
|-|-|-|
| diskEncryptionInfo | The recovery disk encryption information (for one / single pass flows). | DiskEncryptionInfo |
| diskId | The disk Id. | string (required) |
| primaryStagingStorageAccountCustomInput | The primary staging storage account input. | StorageAccountCustomDetails |
| recoveryDiskEncryptionSetId | The recovery disk encryption set Id. | string |
| recoveryReplicaDiskAccountType | The replica disk type. Its an optional value and will be same as source disk type if not user provided. | string |
| recoveryResourceGroupCustomInput | The recovery resource group input. | RecoveryResourceGroupCustomDetails |
| recoveryTargetDiskAccountType | The target disk type after failover. Its an optional value and will be same as source disk type if not user provided. | string |


### RecoveryResourceGroupCustomDetails

| Name | Description | Value |
|-|-|-|
| resourceType | Set the object type | Existing(required) |


### ExistingRecoveryResourceGroup

| Name | Description | Value |
|-|-|-|
| resourceType | The class type. | 'Existing' (required) |
| recoveryResourceGroupId | The recovery resource group Id. Valid for V2 scenarios. | string |


