```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/galleries/applications/versions@2022-03-03"
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
        advancedSettings = {}
        customActions = [
          {
            description = "string"
            name = "string"
            parameters = [
              {
                defaultValue = "string"
                description = "string"
                name = "string"
                required = bool
                type = "string"
              }
            ]
            script = "string"
          }
        ]
        enableHealthCheck = bool
        endOfLifeDate = "string"
        excludeFromLatest = bool
        manageActions = {
          install = "string"
          remove = "string"
          update = "string"
        }
        replicaCount = int
        replicationMode = "string"
        settings = {
          configFileName = "string"
          packageFileName = "string"
        }
        source = {
          defaultConfigurationLink = "string"
          mediaLink = "string"
        }
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
    }
  })
}

```

### galleries/applications/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 32-bit integerValid characters:Numbers and periods.(Each segment is converted to an int32. So each segment has a max value of 2,147,483,647.) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:applications |
| properties | Describes the properties of a gallery image version. | GalleryApplicationVersionProperties |


### GalleryApplicationVersionProperties

| Name | Description | Value |
|-|-|-|
| publishingProfile | The publishing profile of a gallery image version. | GalleryApplicationVersionPublishingProfile(required) |
| safetyProfile | The safety profile of the Gallery Application Version. | GalleryApplicationVersionSafetyProfile |


### GalleryApplicationVersionPublishingProfile

| Name | Description | Value |
|-|-|-|
| advancedSettings | Optional. Additional settings to pass to the vm-application-manager extension. For advanced use only. | object |
| customActions | A list of custom actions that can be performed with this Gallery Application Version. | GalleryApplicationCustomAction[] |
| enableHealthCheck | Optional. Whether or not this application reports health. | bool |
| endOfLifeDate | The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable. | string |
| excludeFromLatest | If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version. | bool |
| manageActions |  | UserArtifactManage |
| replicaCount | The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable. | int |
| replicationMode | Optional parameter which specifies the mode to be used for replication. This property is not updatable. | 'Full''Shallow' |
| settings | Additional settings for the VM app that contains the target package and config file name when it is deployed to target VM or VM scale set. | UserArtifactSettings |
| source | The source image from which the Image Version is going to be created. | UserArtifactSource(required) |
| storageAccountType | Specifies the storage account type to be used to store the image. This property is not updatable. | 'Premium_LRS''Standard_LRS''Standard_ZRS' |
| targetExtendedLocations | The target extended locations where the Image Version is going to be replicated to. This property is updatable. | GalleryTargetExtendedLocation[] |
| targetRegions | The target regions where the Image Version is going to be replicated to. This property is updatable. | TargetRegion[] |


### GalleryApplicationCustomAction

| Name | Description | Value |
|-|-|-|
| description | Description to help the users understand what this custom action does. | string |
| name | The name of the custom action.  Must be unique within the Gallery Application Version. | string (required) |
| parameters | The parameters that this custom action uses | GalleryApplicationCustomActionParameter[] |
| script | The script to run when executing this custom action. | string (required) |


### GalleryApplicationCustomActionParameter

| Name | Description | Value |
|-|-|-|
| defaultValue | The default value of the parameter.  Only applies to string types | string |
| description | A description to help users understand what this parameter means | string |
| name | The name of the custom action.  Must be unique within the Gallery Application Version. | string (required) |
| required | Indicates whether this parameter must be passed when running the custom action. | bool |
| type | Specifies the type of the custom action parameter. Possible values are: String, ConfigurationDataBlob or LogOutputBlob | 'ConfigurationDataBlob''LogOutputBlob''String' |


### UserArtifactManage

| Name | Description | Value |
|-|-|-|
| install | Required. The path and arguments to install the gallery application. This is limited to 4096 characters. | string (required) |
| remove | Required. The path and arguments to remove the gallery application. This is limited to 4096 characters. | string (required) |
| update | Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters. | string |


### UserArtifactSettings

| Name | Description | Value |
|-|-|-|
| configFileName | Optional. The name to assign the downloaded config file on the VM. This is limited to 4096 characters. If not specified, the config file will be named the Gallery Application name appended with "_config". | string |
| packageFileName | Optional. The name to assign the downloaded package file on the VM. This is limited to 4096 characters. If not specified, the package file will be named the same as the Gallery Application name. | string |


### UserArtifactSource

| Name | Description | Value |
|-|-|-|
| defaultConfigurationLink | Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob. | string |
| mediaLink | Required. The mediaLink of the artifact, must be a readable storage page blob. | string (required) |


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


### GalleryApplicationVersionSafetyProfile

| Name | Description | Value |
|-|-|-|
| allowDeletionOfReplicatedLocations | Indicates whether or not removing this Gallery Image Version from replicated regions is allowed. | bool |


