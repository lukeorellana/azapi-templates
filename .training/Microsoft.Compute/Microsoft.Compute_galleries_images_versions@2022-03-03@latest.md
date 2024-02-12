```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/galleries/images/versions@2022-03-03"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publishingProfile = {
        endOfLifeDate = "string"
        excludeFromLatest = bool
        replicaCount = int
        replicationMode = "string"
        storageAccountType = "string"
        targetExtendedLocations = [
          {
            encryption = {
              dataDiskImages = [
                {
                  diskEncryptionSetId = "string"
                  lun = int
                }
              ]
              osDiskImage = {
                diskEncryptionSetId = "string"
                securityProfile = {
                  confidentialVMEncryptionType = "string"
                  secureVMDiskEncryptionSetId = "string"
                }
              }
            }
            extendedLocation = {
              name = "string"
              type = "string"
            }
            extendedLocationReplicaCount = int
            name = "string"
            storageAccountType = "string"
          }
        ]
        targetRegions = [
          {
            encryption = {
              dataDiskImages = [
                {
                  diskEncryptionSetId = "string"
                  lun = int
                }
              ]
              osDiskImage = {
                diskEncryptionSetId = "string"
                securityProfile = {
                  confidentialVMEncryptionType = "string"
                  secureVMDiskEncryptionSetId = "string"
                }
              }
            }
            excludeFromLatest = bool
            name = "string"
            regionalReplicaCount = int
            storageAccountType = "string"
          }
        ]
      }
      safetyProfile = {
        allowDeletionOfReplicatedLocations = bool
      }
      storageProfile = {
        dataDiskImages = [
          {
            hostCaching = "string"
            lun = int
            source = {
              id = "string"
              storageAccountId = "string"
              uri = "string"
            }
          }
        ]
        osDiskImage = {
          hostCaching = "string"
          source = {
            id = "string"
            storageAccountId = "string"
            uri = "string"
          }
        }
        source = {
          communityGalleryImageId = "string"
          id = "string"
        }
      }
    }
  })
}

```

### galleries/images/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 32-bit integerValid characters:Numbers and periods.(Each segment is converted to an int32. So each segment has a max value of 2,147,483,647.) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:images |
| properties | Describes the properties of a gallery image version. | GalleryImageVersionProperties |


### GalleryImageVersionProperties

| Name | Description | Value |
|-|-|-|
| publishingProfile | The publishing profile of a gallery image Version. | GalleryImageVersionPublishingProfile |
| safetyProfile | This is the safety profile of the Gallery Image Version. | GalleryImageVersionSafetyProfile |
| storageProfile | This is the storage profile of a Gallery Image Version. | GalleryImageVersionStorageProfile(required) |


### GalleryImageVersionPublishingProfile

| Name | Description | Value |
|-|-|-|
| endOfLifeDate | The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable. | string |
| excludeFromLatest | If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version. | bool |
| replicaCount | The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable. | int |
| replicationMode | Optional parameter which specifies the mode to be used for replication. This property is not updatable. | 'Full''Shallow' |
| storageAccountType | Specifies the storage account type to be used to store the image. This property is not updatable. | 'Premium_LRS''Standard_LRS''Standard_ZRS' |
| targetExtendedLocations | The target extended locations where the Image Version is going to be replicated to. This property is updatable. | GalleryTargetExtendedLocation[] |
| targetRegions | The target regions where the Image Version is going to be replicated to. This property is updatable. | TargetRegion[] |


### GalleryTargetExtendedLocation

| Name | Description | Value |
|-|-|-|
| encryption | Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact. | EncryptionImages |
| extendedLocation | The name of the extended location. | GalleryExtendedLocation |
| extendedLocationReplicaCount | The number of replicas of the Image Version to be created per extended location. This property is updatable. | int |
| name | The name of the region. | string |
| storageAccountType | Specifies the storage account type to be used to store the image. This property is not updatable. | 'Premium_LRS''StandardSSD_LRS''Standard_LRS''Standard_ZRS' |


### EncryptionImages

| Name | Description | Value |
|-|-|-|
| dataDiskImages | A list of encryption specifications for data disk images. | DataDiskImageEncryption[] |
| osDiskImage | Contains encryption settings for an OS disk image. | OSDiskImageEncryption |


### DataDiskImageEncryption

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | A relative URI containing the resource ID of the disk encryption set. | string |
| lun | This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine. | int (required) |


### OSDiskImageEncryption

| Name | Description | Value |
|-|-|-|
| diskEncryptionSetId | A relative URI containing the resource ID of the disk encryption set. | string |
| securityProfile | This property specifies the security profile of an OS disk image. | OSDiskImageSecurityProfile |


### OSDiskImageSecurityProfile

| Name | Description | Value |
|-|-|-|
| confidentialVMEncryptionType | confidential VM encryption types | 'EncryptedVMGuestStateOnlyWithPmk''EncryptedWithCmk''EncryptedWithPmk' |
| secureVMDiskEncryptionSetId | secure VM disk encryption set id | string |


### GalleryExtendedLocation

| Name | Description | Value |
|-|-|-|
| name |  | string |
| type | It is type of the extended location. | 'EdgeZone''Unknown' |


### TargetRegion

| Name | Description | Value |
|-|-|-|
| encryption | Optional. Allows users to provide customer managed keys for encrypting the OS and data disks in the gallery artifact. | EncryptionImages |
| excludeFromLatest | Contains the flag setting to hide an image when users specify version='latest' | bool |
| name | The name of the region. | string (required) |
| regionalReplicaCount | The number of replicas of the Image Version to be created per region. This property is updatable. | int |
| storageAccountType | Specifies the storage account type to be used to store the image. This property is not updatable. | 'Premium_LRS''Standard_LRS''Standard_ZRS' |


### GalleryImageVersionSafetyProfile

| Name | Description | Value |
|-|-|-|
| allowDeletionOfReplicatedLocations | Indicates whether or not removing this Gallery Image Version from replicated regions is allowed. | bool |


### GalleryImageVersionStorageProfile

| Name | Description | Value |
|-|-|-|
| dataDiskImages | A list of data disk images. | GalleryDataDiskImage[] |
| osDiskImage | This is the OS disk image. | GalleryOSDiskImage |
| source | The source of the gallery artifact version. | GalleryArtifactVersionFullSource |


### GalleryDataDiskImage

| Name | Description | Value |
|-|-|-|
| hostCaching | The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite' | 'None''ReadOnly''ReadWrite' |
| lun | This property specifies the logical unit number of the data disk. This value is used to identify data disks within the Virtual Machine and therefore must be unique for each data disk attached to the Virtual Machine. | int (required) |
| source | The source for the disk image. | GalleryDiskImageSource |


### GalleryDiskImageSource

| Name | Description | Value |
|-|-|-|
| id | The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource. | string |
| storageAccountId | The Storage Account Id that contains the vhd blob being used as a source for this artifact version. | string |
| uri | The uri of the gallery artifact version source. Currently used to specify vhd/blob source. | string |


### GalleryOSDiskImage

| Name | Description | Value |
|-|-|-|
| hostCaching | The host caching of the disk. Valid values are 'None', 'ReadOnly', and 'ReadWrite' | 'None''ReadOnly''ReadWrite' |
| source | The source for the disk image. | GalleryDiskImageSource |


### GalleryArtifactVersionFullSource

| Name | Description | Value |
|-|-|-|
| communityGalleryImageId | The resource Id of the source Community Gallery Image.  Only required when using Community Gallery Image as a source. | string |
| id | The id of the gallery artifact version source. Can specify a disk uri, snapshot uri, user image or storage account resource. | string |


