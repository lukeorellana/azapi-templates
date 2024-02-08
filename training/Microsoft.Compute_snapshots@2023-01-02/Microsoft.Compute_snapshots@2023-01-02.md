```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/snapshots@2023-01-02"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      completionPercent = int
      copyCompletionError = {
        errorCode = "CopySourceNotFound"
        errorMessage = "string"
      }
      creationData = {
        createOption = "string"
        galleryImageReference = {
          communityGalleryImageId = "string"
          id = "string"
          lun = int
          sharedGalleryImageId = "string"
        }
        imageReference = {
          communityGalleryImageId = "string"
          id = "string"
          lun = int
          sharedGalleryImageId = "string"
        }
        logicalSectorSize = int
        performancePlus = bool
        securityDataUri = "string"
        sourceResourceId = "string"
        sourceUri = "string"
        storageAccountId = "string"
        uploadSizeBytes = int
      }
      dataAccessAuthMode = "string"
      diskAccessId = "string"
      diskSizeGB = int
      encryption = {
        diskEncryptionSetId = "string"
        type = "string"
      }
      encryptionSettingsCollection = {
        enabled = bool
        encryptionSettings = [
          {
            diskEncryptionKey = {
              secretUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
            keyEncryptionKey = {
              keyUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
          }
        ]
        encryptionSettingsVersion = "string"
      }
      hyperVGeneration = "string"
      incremental = bool
      networkAccessPolicy = "string"
      osType = "string"
      publicNetworkAccess = "string"
      purchasePlan = {
        name = "string"
        product = "string"
        promotionCode = "string"
        publisher = "string"
      }
      securityProfile = {
        secureVMDiskEncryptionSetId = "string"
        securityType = "string"
      }
      supportedCapabilities = {
        acceleratedNetwork = bool
        architecture = "string"
        diskControllerTypes = "string"
      }
      supportsHibernation = bool
    }
    sku = {
      name = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### snapshots

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End with alphanumeric or underscore. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | The snapshots sku name. Can be Standard_LRS, Premium_LRS, or Standard_ZRS. This is an optional parameter for incremental snapshot and the default behavior is the SKU will be set to the same sku as the previous snapshot | SnapshotSku |
| extendedLocation | The extended location where the snapshot will be created. Extended location cannot be changed. | ExtendedLocation |
| properties | Snapshot resource properties. | SnapshotProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### SnapshotProperties

| Name | Description | Value |
|-|-|-|
| completionPercent | Percentage complete for the background copy when a resource is created via the CopyStart operation. | int |
| copyCompletionError | Indicates the error details if the background copy of a resource created via the CopyStart operation fails. | CopyCompletionError |
| creationData | Disk source information. CreationData information cannot be changed after the disk has been created. | CreationData(required) |
| dataAccessAuthMode | Additional authentication requirements when exporting or uploading to a disk or snapshot. | 'AzureActiveDirectory''None' |
| diskAccessId | ARM id of the DiskAccess resource for using private endpoints on disks. | string |
| diskSizeGB | If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size. | int |
| encryption | Encryption property can be used to encrypt data at rest with customer managed keys or platform managed keys. | Encryption |
| encryptionSettingsCollection | Encryption settings collection used be Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot. | EncryptionSettingsCollection |
| hyperVGeneration | The hypervisor generation of the Virtual Machine. Applicable to OS disks only. | 'V1''V2' |
| incremental | Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed. | bool |
| networkAccessPolicy | Policy for accessing the disk via network. | 'AllowAll''AllowPrivate''DenyAll' |
| osType | The Operating System type. | 'Linux''Windows' |
| publicNetworkAccess | Policy for controlling export on the disk. | 'Disabled''Enabled' |
| purchasePlan | Purchase plan information for the image from which the source disk for the snapshot was originally created. | PurchasePlan |
| securityProfile | Contains the security related information for the resource. | DiskSecurityProfile |
| supportedCapabilities | List of supported capabilities for the image from which the source disk from the snapshot was originally created. | SupportedCapabilities |
| supportsHibernation | Indicates the OS on a snapshot supports hibernation. | bool |


### CopyCompletionError

| Name | Description | Value |
|-|-|-|
| errorCode | Indicates the error code if the background copy of a resource created via the CopyStart operation fails. | 'CopySourceNotFound' (required) |
| errorMessage | Indicates the error message if the background copy of a resource created via the CopyStart operation fails. | string (required) |


### CreationData

| Name | Description | Value |
|-|-|-|
| createOption | This enumerates the possible sources of a disk's creation. | 'Attach''Copy''CopyStart''Empty''FromImage''Import''ImportSecure''Restore''Upload''UploadPreparedSecure' (required) |
| galleryImageReference | Required if creating from a Gallery Image. The id/sharedGalleryImageId/communityGalleryImageId of the ImageDiskReference will be the ARM id of the shared galley image version from which to create a disk. | ImageDiskReference |
| imageReference | Disk source information for PIR or user images. | ImageDiskReference |
| logicalSectorSize | Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default. | int |
| performancePlus | Set this flag to true to get a boost on the performance target of the disk deployed, see here on the respective performance target. This flag can only be set on disk creation time and cannot be disabled after enabled. | bool |
| securityDataUri | If createOption is ImportSecure, this is the URI of a blob to be imported into VM guest state. | string |
| sourceResourceId | If createOption is Copy, this is the ARM id of the source snapshot or disk. | string |
| sourceUri | If createOption is Import, this is the URI of a blob to be imported into a managed disk. | string |
| storageAccountId | Required if createOption is Import. The Azure Resource Manager identifier of the storage account containing the blob to import as a disk. | string |
| uploadSizeBytes | If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer). | int |


### ImageDiskReference

| Name | Description | Value |
|-|-|-|
| communityGalleryImageId | A relative uri containing a community Azure Compute Gallery image reference. | string |
| id | A relative uri containing either a Platform Image Repository, user image, or Azure Compute Gallery image reference. | string |
| lun | If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. | int |
| sharedGalleryImageId | A relative uri containing a direct shared Azure Compute Gallery image reference. | string |


### Encryption

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | ResourceId of the disk encryption set to use for enabling encryption at rest. | string |
| type | The type of key used to encrypt the data of the disk. | 'EncryptionAtRestWithCustomerKey''EncryptionAtRestWithPlatformAndCustomerKeys''EncryptionAtRestWithPlatformKey' |


### EncryptionSettingsCollection

| Name | Description | Value |
|-|-|-|
| enabled | Set this flag to true and provide DiskEncryptionKey and optional KeyEncryptionKey to enable encryption. Set this flag to false and remove DiskEncryptionKey and KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the request object, the existing settings remain unchanged. | bool (required) |
| encryptionSettings | A collection of encryption settings, one for each disk volume. | EncryptionSettingsElement[] |
| encryptionSettingsVersion | Describes what type of encryption is used for the disks. Once this field is set, it cannot be overwritten. '1.0' corresponds to Azure Disk Encryption with AAD app.'1.1' corresponds to Azure Disk Encryption. | string |


### EncryptionSettingsElement

| Name | Description | Value |
|-|-|-|
| diskEncryptionKey | Key Vault Secret Url and vault id of the disk encryption key | KeyVaultAndSecretReference |
| keyEncryptionKey | Key Vault Key Url and vault id of the key encryption key. KeyEncryptionKey is optional and when provided is used to unwrap the disk encryption key. | KeyVaultAndKeyReference |


### KeyVaultAndSecretReference

| Name | Description | Value |
|-|-|-|
| secretUrl | Url pointing to a key or secret in KeyVault | string (required) |
| sourceVault | Resource id of the KeyVault containing the key or secret | SourceVault(required) |


### SourceVault

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### KeyVaultAndKeyReference

| Name | Description | Value |
|-|-|-|
| keyUrl | Url pointing to a key or secret in KeyVault | string (required) |
| sourceVault | Resource id of the KeyVault containing the key or secret | SourceVault(required) |


### PurchasePlan

| Name | Description | Value |
|-|-|-|
| name | The plan ID. | string (required) |
| product | Specifies the product of the image from the marketplace. This is the same value as Offer under the imageReference element. | string (required) |
| promotionCode | The Offer Promotion Code. | string |
| publisher | The publisher ID. | string (required) |


### DiskSecurityProfile

| Name | Description | Value |
|-|-|-|
| secureVMDiskEncryptionSetId | ResourceId of the disk encryption set associated to Confidential VM supported disk encrypted with customer managed key | string |
| securityType | Specifies the SecurityType of the VM. Applicable for OS disks only. | 'ConfidentialVM_DiskEncryptedWithCustomerKey''ConfidentialVM_DiskEncryptedWithPlatformKey''ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey''TrustedLaunch' |


### SupportedCapabilities

| Name | Description | Value |
|-|-|-|
| acceleratedNetwork | True if the image from which the OS disk is created supports accelerated networking. | bool |
| architecture | CPU architecture supported by an OS disk. | 'Arm64''x64' |
| diskControllerTypes | The disk controllers that an OS disk supports. If set it can be SCSI or SCSI, NVME or NVME, SCSI. | string |


### SnapshotSku

| Name | Description | Value |
|-|-|-|
| name | The sku name. | 'Premium_LRS''Standard_LRS''Standard_ZRS' |


