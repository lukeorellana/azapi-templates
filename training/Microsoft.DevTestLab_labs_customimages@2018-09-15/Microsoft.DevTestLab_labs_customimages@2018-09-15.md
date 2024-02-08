```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/customimages@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      author = "string"
      customImagePlan = {
        id = "string"
        offer = "string"
        publisher = "string"
      }
      dataDiskStorageInfo = [
        {
          lun = "string"
          storageType = "string"
        }
      ]
      description = "string"
      isPlanAuthorized = bool
      managedImageId = "string"
      managedSnapshotId = "string"
      vhd = {
        imageName = "string"
        osType = "string"
        sysPrep = bool
      }
      vm = {
        linuxOsInfo = {
          linuxOsState = "string"
        }
        sourceVmId = "string"
        windowsOsInfo = {
          windowsOsState = "string"
        }
      }
    }
  })
}

```

### labs/customimages

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, hyphens, and parentheses. |
| location | The location of the resource. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:labs |
| properties | The properties of the resource. | CustomImageProperties(required) |


### CustomImageProperties

| Name | Description | Value |
|-|-|-|
| author | The author of the custom image. | string |
| customImagePlan | Storage information about the plan related to this custom image | CustomImagePropertiesFromPlan |
| dataDiskStorageInfo | Storage information about the data disks present in the custom image | DataDiskStorageTypeInfo[] |
| description | The description of the custom image. | string |
| isPlanAuthorized | Whether or not the custom images underlying offer/plan has been enabled for programmatic deployment | bool |
| managedImageId | The Managed Image Id backing the custom image. | string |
| managedSnapshotId | The Managed Snapshot Id backing the custom image. | string |
| vhd | The VHD from which the image is to be created. | CustomImagePropertiesCustom |
| vm | The virtual machine from which the image is to be created. | CustomImagePropertiesFromVm |


### CustomImagePropertiesFromPlan

| Name | Description | Value |
|-|-|-|
| id | The id of the plan, equivalent to name of the plan | string |
| offer | The offer for the plan from the marketplace image the custom image is derived from | string |
| publisher | The publisher for the plan from the marketplace image the custom image is derived from | string |


### DataDiskStorageTypeInfo

| Name | Description | Value |
|-|-|-|
| lun | Disk Lun | string |
| storageType | Disk Storage Type | 'Premium''Standard''StandardSSD' |


### CustomImagePropertiesCustom

| Name | Description | Value |
|-|-|-|
| imageName | The image name. | string |
| osType | The OS type of the custom image (i.e. Windows, Linux) | 'Linux''None''Windows' (required) |
| sysPrep | Indicates whether sysprep has been run on the VHD. | bool |


### CustomImagePropertiesFromVm

| Name | Description | Value |
|-|-|-|
| linuxOsInfo | The Linux OS information of the VM. | LinuxOsInfo |
| sourceVmId | The source vm identifier. | string |
| windowsOsInfo | The Windows OS information of the VM. | WindowsOsInfo |


### LinuxOsInfo

| Name | Description | Value |
|-|-|-|
| linuxOsState | The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied). | 'DeprovisionApplied''DeprovisionRequested''NonDeprovisioned' |


### WindowsOsInfo

| Name | Description | Value |
|-|-|-|
| windowsOsState | The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied). | 'NonSysprepped''SysprepApplied''SysprepRequested' |


