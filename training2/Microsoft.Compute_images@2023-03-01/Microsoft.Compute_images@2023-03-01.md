```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/images@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      hyperVGeneration = "string"
      sourceVirtualMachine = {
        id = "string"
      }
      storageProfile = {
        dataDisks = [
          {
            blobUri = "string"
            caching = "string"
            diskEncryptionSet = {
              id = "string"
            }
            diskSizeGB = int
            lun = int
            managedDisk = {
              id = "string"
            }
            snapshot = {
              id = "string"
            }
            storageAccountType = "string"
          }
        ]
        osDisk = {
          blobUri = "string"
          caching = "string"
          diskEncryptionSet = {
            id = "string"
          }
          diskSizeGB = int
          managedDisk = {
            id = "string"
          }
          osState = "string"
          osType = "string"
          snapshot = {
            id = "string"
          }
          storageAccountType = "string"
        }
        zoneResilient = bool
      }
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### images

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End with alphanumeric or underscore. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location of the Image. | ExtendedLocation |
| properties | Describes the properties of an Image. | ImageProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### ImageProperties

| Name | Description | Value |
|-|-|-|
| hyperVGeneration | Specifies the HyperVGenerationType of the VirtualMachine created from the image. From API Version 2019-03-01 if the image source is a blob, then we need the user to specify the value, if the source is managed resource like disk or snapshot, we may require the user to specify the property if we cannot deduce it from the source managed resource. | 'V1''V2' |
| sourceVirtualMachine | The source virtual machine from which Image is created. | SubResource |
| storageProfile | Specifies the storage settings for the virtual machine disks. | ImageStorageProfile |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### ImageStorageProfile

| Name | Description | Value |
|-|-|-|
| dataDisks | Specifies the parameters that are used to add a data disk to a virtual machine.For more information about disks, seeAbout disks and VHDs for Azure virtual machines. | ImageDataDisk[] |
| osDisk | Specifies information about the operating system disk used by the virtual machine.For more information about disks, seeAbout disks and VHDs for Azure virtual machines. | ImageOSDisk |
| zoneResilient | Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage (ZRS). | bool |


### ImageDataDisk

| Name | Description | Value |
|-|-|-|
| blobUri | The Virtual Hard Disk. | string |
| caching | Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The default values are:None for Standard storage. ReadOnly for Premium storage. | 'None''ReadOnly''ReadWrite' |
| diskEncryptionSet | Specifies the customer managed disk encryption set resource id for the managed image disk. | DiskEncryptionSetParameters |
| diskSizeGB | Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. This value cannot be larger than 1023 GB. | int |
| lun | Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM. | int (required) |
| managedDisk | The managedDisk. | SubResource |
| snapshot | The snapshot. | SubResource |
| storageAccountType | Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk. | 'PremiumV2_LRS''Premium_LRS''Premium_ZRS''StandardSSD_LRS''StandardSSD_ZRS''Standard_LRS''UltraSSD_LRS' |


### DiskEncryptionSetParameters

| Name | Description | Value |
|-|-|-|
| id | Resource Id | string |


### ImageOSDisk

| Name | Description | Value |
|-|-|-|
| blobUri | The Virtual Hard Disk. | string |
| caching | Specifies the caching requirements. Possible values are:None,ReadOnly,ReadWrite.The default values are:None for Standard storage. ReadOnly for Premium storage. | 'None''ReadOnly''ReadWrite' |
| diskEncryptionSet | Specifies the customer managed disk encryption set resource id for the managed image disk. | DiskEncryptionSetParameters |
| diskSizeGB | Specifies the size of empty data disks in gigabytes. This element can be used to overwrite the name of the disk in a virtual machine image. This value cannot be larger than 1023 GB. | int |
| managedDisk | The managedDisk. | SubResource |
| osState | The OS State. For managed images, use Generalized. | 'Generalized''Specialized' (required) |
| osType | This property allows you to specify the type of the OS that is included in the disk if creating a VM from a custom image. Possible values are:Windows,Linux. | 'Linux''Windows' (required) |
| snapshot | The snapshot. | SubResource |
| storageAccountType | Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk. | 'PremiumV2_LRS''Premium_LRS''Premium_ZRS''StandardSSD_LRS''StandardSSD_ZRS''Standard_LRS''UltraSSD_LRS' |


