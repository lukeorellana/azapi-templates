```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/restorePointCollections/restorePoints@2023-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      consistencyMode = "string"
      excludeDisks = [
        {
          id = "string"
        }
      ]
      sourceMetadata = {
        storageProfile = {
          dataDisks = [
            {
              caching = "string"
              diskRestorePoint = {
                encryption = {
                  diskEncryptionSet = {
                    id = "string"
                  }
                  type = "string"
                }
                sourceDiskRestorePoint = {
                  id = "string"
                }
              }
              managedDisk = {
                diskEncryptionSet = {
                  id = "string"
                }
                id = "string"
                securityProfile = {
                  diskEncryptionSet = {
                    id = "string"
                  }
                  securityEncryptionType = "string"
                }
                storageAccountType = "string"
              }
            }
          ]
          osDisk = {
            caching = "string"
            diskRestorePoint = {
              encryption = {
                diskEncryptionSet = {
                  id = "string"
                }
                type = "string"
              }
              sourceDiskRestorePoint = {
                id = "string"
              }
            }
            managedDisk = {
              diskEncryptionSet = {
                id = "string"
              }
              id = "string"
              securityProfile = {
                diskEncryptionSet = {
                  id = "string"
                }
                securityEncryptionType = "string"
              }
              storageAccountType = "string"
            }
          }
        }
      }
      sourceRestorePoint = {
        id = "string"
      }
      timeCreated = "string"
    }
  })
}

```

### restorePointCollections/restorePoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:restorePointCollections |
| properties | The restore point properties. | RestorePointProperties |


### RestorePointProperties

| Name | Description | Value |
|-|-|-|
| consistencyMode | ConsistencyMode of the RestorePoint. Can be specified in the input while creating a restore point. For now, only CrashConsistent is accepted as a valid input. Please refer tohttps://aka.ms/RestorePointsfor more details. | 'ApplicationConsistent''CrashConsistent''FileSystemConsistent' |
| excludeDisks | List of disk resource ids that the customer wishes to exclude from the restore point. If no disks are specified, all disks will be included. | ApiEntityReference[] |
| sourceMetadata | Gets the details of the VM captured at the time of the restore point creation. | RestorePointSourceMetadata |
| sourceRestorePoint | Resource Id of the source restore point from which a copy needs to be created. | ApiEntityReference |
| timeCreated | Gets the creation time of the restore point. | string |


### ApiEntityReference

| Name | Description | Value |
|-|-|-|
| id | The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... | string |


### RestorePointSourceMetadata

| Name | Description | Value |
|-|-|-|
| storageProfile | Gets the storage profile. | RestorePointSourceVMStorageProfile |


### RestorePointSourceVMStorageProfile

| Name | Description | Value |
|-|-|-|
| dataDisks | Gets the data disks of the VM captured at the time of the restore point creation. | RestorePointSourceVMDataDisk[] |
| osDisk | Gets the OS disk of the VM captured at the time of the restore point creation. | RestorePointSourceVmosDisk |


### RestorePointSourceVMDataDisk

| Name | Description | Value |
|-|-|-|
| caching | Gets the caching type. | 'None''ReadOnly''ReadWrite' |
| diskRestorePoint | Contains Disk Restore Point properties. | DiskRestorePointAttributes |
| managedDisk | Contains the managed disk details. | ManagedDiskParameters |


### DiskRestorePointAttributes

| Name | Description | Value |
|-|-|-|
| encryption | Encryption at rest settings for disk restore point. It is an optional property that can be specified in the input while creating a restore point. | RestorePointEncryption |
| sourceDiskRestorePoint | Resource Id of the source disk restore point. | ApiEntityReference |


### RestorePointEncryption

| Name | Description | Value |
|-|-|-|
| diskEncryptionSet | Describes the parameter of customer managed disk encryption set resource id that can be specified for disk.Note:The disk encryption set resource id can only be specified for managed disk. Please referhttps://aka.ms/mdssewithcmkoverviewfor more details. | DiskEncryptionSetParameters |
| type | The type of key used to encrypt the data of the disk restore point. | 'EncryptionAtRestWithCustomerKey''EncryptionAtRestWithPlatformAndCustomerKeys''EncryptionAtRestWithPlatformKey' |


### DiskEncryptionSetParameters

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### ManagedDiskParameters

| Name | Description | Value |
|-|-|-|
| diskEncryptionSet | Specifies the customer managed disk encryption set resource id for the managed disk. | DiskEncryptionSetParameters |
| id | Resource Id | string |
| securityProfile | Specifies the security profile for the managed disk. | VMDiskSecurityProfile |
| storageAccountType | Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk. | 'PremiumV2_LRS''Premium_LRS''Premium_ZRS''StandardSSD_LRS''StandardSSD_ZRS''Standard_LRS''UltraSSD_LRS' |


### VMDiskSecurityProfile

| Name | Description | Value |
|-|-|-|
| diskEncryptionSet | Specifies the customer managed disk encryption set resource id for the managed disk that is used for Customer Managed Key encrypted ConfidentialVM OS Disk and VMGuest blob. | DiskEncryptionSetParameters |
| securityEncryptionType | Specifies the EncryptionType of the managed disk. It is set to DiskWithVMGuestState for encryption of the managed disk along with VMGuestState blob, and VMGuestStateOnly for encryption of just the VMGuestState blob.Note:It can be set for only Confidential VMs. | 'DiskWithVMGuestState''VMGuestStateOnly' |


### RestorePointSourceVmosDisk

| Name | Description | Value |
|-|-|-|
| caching | Gets the caching type. | 'None''ReadOnly''ReadWrite' |
| diskRestorePoint | Contains Disk Restore Point properties. | DiskRestorePointAttributes |
| managedDisk | Gets the managed disk details | ManagedDiskParameters |


