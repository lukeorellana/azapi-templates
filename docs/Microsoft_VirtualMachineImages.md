## Microsoft.VirtualMachineImages/imageTemplates@2022-02-14

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.VirtualMachineImages/imageTemplates@2022-02-14"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      buildTimeoutInMinutes = int
      customize = [
        {
          name = "string"
          type = "string"
          // For remaining properties, see ImageTemplateCustomizer objects
        }
      ]
      distribute = [
        {
          artifactTags = {}
          runOutputName = "string"
          type = "string"
          // For remaining properties, see ImageTemplateDistributor objects
        }
      ]
      source = {
        type = "string"
        // For remaining properties, see ImageTemplateSource objects
      }
      stagingResourceGroup = "string"
      validate = {
        continueDistributeOnFailure = bool
        inVMValidations = [
          {
            name = "string"
            type = "string"
            // For remaining properties, see ImageTemplateInVMValidator objects
          }
        ]
        sourceValidationOnly = bool
      }
      vmProfile = {
        osDiskSizeGB = int
        userAssignedIdentities = [
          "string"
        ]
        vmSize = "string"
        vnetConfig = {
          proxyVmSize = "string"
          subnetId = "string"
        }
      }
    }
  })
}

```

### imageTemplates

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The identity of the image template, if configured. | ImageTemplateIdentity(required) |
| properties | The properties of the image template | ImageTemplateProperties |


### ImageTemplateIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of identity used for the image template. The type 'None' will remove any identities from the image template. | 'None''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the image template. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ImageTemplateProperties

| Name | Description | Value |
|-|-|-|
| buildTimeoutInMinutes | Maximum duration to wait while building the image template (includes all customizations, validations, and distributions). Omit or specify 0 to use the default (4 hours). | int |
| customize | Specifies the properties used to describe the customization steps of the image, like Image source etc | ImageTemplateCustomizer[] |
| distribute | The distribution targets where the image output needs to go to. | ImageTemplateDistributor[] (required) |
| source | Specifies the properties used to describe the source image. | ImageTemplateSource(required) |
| stagingResourceGroup | The staging resource group id in the same subscription as the image template that will be used to build the image. If this field is empty, a resource group with a random name will be created. If the resource group specified in this field doesn't exist, it will be created with the same name. If the resource group specified exists, it must be empty and in the same region as the image template. The resource group created will be deleted during template deletion if this field is empty or the resource group specified doesn't exist, but if the resource group specified exists the resources created in the resource group will be deleted during template deletion and the resource group itself will remain. | string |
| validate | Configuration options and list of validations to be performed on the resulting image. | ImageTemplatePropertiesValidate |
| vmProfile | Describes how virtual machine is set up to build images | ImageTemplateVmProfile |


### ImageTemplateCustomizer

| Name | Description | Value |
|-|-|-|
| name | Friendly Name to provide context on what this customization step does | string |
| type | Set the object type | FilePowerShellShellWindowsRestartWindowsUpdate(required) |


### ImageTemplateFileCustomizer

| Name | Description | Value |
|-|-|-|
| type | The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer | 'File' (required) |
| destination | The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM | string |
| sha256Checksum | SHA256 checksum of the file provided in the sourceUri field above | string |
| sourceUri | The URI of the file to be uploaded for customizing the VM. It can be a github link, SAS URI for Azure Storage, etc | string |


### ImageTemplatePowerShellCustomizer

| Name | Description | Value |
|-|-|-|
| type | The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer | 'PowerShell' (required) |
| inline | Array of PowerShell commands to execute | string[] |
| runAsSystem | If specified, the PowerShell script will be run with elevated privileges using the Local System user. Can only be true when the runElevated field above is set to true. | bool |
| runElevated | If specified, the PowerShell script will be run with elevated privileges | bool |
| scriptUri | URI of the PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc | string |
| sha256Checksum | SHA256 checksum of the power shell script provided in the scriptUri field above | string |
| validExitCodes | Valid exit codes for the PowerShell script. [Default: 0] | int[] |


### ImageTemplateShellCustomizer

| Name | Description | Value |
|-|-|-|
| type | The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer | 'Shell' (required) |
| inline | Array of shell commands to execute | string[] |
| scriptUri | URI of the shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc | string |
| sha256Checksum | SHA256 checksum of the shell script provided in the scriptUri field | string |


### ImageTemplateRestartCustomizer

| Name | Description | Value |
|-|-|-|
| type | The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer | 'WindowsRestart' (required) |
| restartCheckCommand | Command to check if restart succeeded [Default: ''] | string |
| restartCommand | Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"'] | string |
| restartTimeout | Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m'] | string |


### ImageTemplateWindowsUpdateCustomizer

| Name | Description | Value |
|-|-|-|
| type | The type of customization tool you want to use on the Image. For example, "Shell" can be shell customizer | 'WindowsUpdate' (required) |
| filters | Array of filters to select updates to apply. Omit or specify empty array to use the default (no filter). Refer to above link for examples and detailed description of this field. | string[] |
| searchCriteria | Criteria to search updates. Omit or specify empty string to use the default (search all). Refer to above link for examples and detailed description of this field. | string |
| updateLimit | Maximum number of updates to apply at a time. Omit or specify 0 to use the default (1000) | int |


### ImageTemplateDistributor

| Name | Description | Value |
|-|-|-|
| artifactTags | Tags that will be applied to the artifact once it has been created/updated by the distributor. | object |
| runOutputName | The name to be used for the associated RunOutput. | string (required) |
| type | Set the object type | ManagedImageSharedImageVHD(required) |


### ImageTemplateManagedImageDistributor

| Name | Description | Value |
|-|-|-|
| type | Type of distribution. | 'ManagedImage' (required) |
| imageId | Resource Id of the Managed Disk Image | string (required) |
| location | Azure location for the image, should match if image already exists | string (required) |


### ImageTemplateSharedImageDistributor

| Name | Description | Value |
|-|-|-|
| type | Type of distribution. | 'SharedImage' (required) |
| excludeFromLatest | Flag that indicates whether created image version should be excluded from latest. Omit to use the default (false). | bool |
| galleryImageId | Resource Id of the Shared Image Gallery image | string (required) |
| replicationRegions | A list of regions that the image will be replicated to | string[] (required) |
| storageAccountType | Storage account type to be used to store the shared image. Omit to use the default (Standard_LRS). | 'Standard_LRS''Standard_ZRS' |


### ImageTemplateVhdDistributor

| Name | Description | Value |
|-|-|-|
| type | Type of distribution. | 'VHD' (required) |


### ImageTemplateSource

| Name | Description | Value |
|-|-|-|
| type | Set the object type | ManagedImagePlatformImageSharedImageVersion(required) |


### ImageTemplateManagedImageSource

| Name | Description | Value |
|-|-|-|
| type | Specifies the type of source image you want to start with. | 'ManagedImage' (required) |
| imageId | ARM resource id of the managed image in customer subscription | string (required) |


### ImageTemplatePlatformImageSource

| Name | Description | Value |
|-|-|-|
| type | Specifies the type of source image you want to start with. | 'PlatformImage' (required) |
| offer | Image offer from theAzure Gallery Images. | string |
| planInfo | Optional configuration of purchase plan for platform image. | PlatformImagePurchasePlan |
| publisher | Image Publisher inAzure Gallery Images. | string |
| sku | Image sku from theAzure Gallery Images. | string |
| version | Image version from theAzure Gallery Images. If 'latest' is specified here, the version is evaluated when the image build takes place, not when the template is submitted. | string |


### PlatformImagePurchasePlan

| Name | Description | Value |
|-|-|-|
| planName | Name of the purchase plan. | string (required) |
| planProduct | Product of the purchase plan. | string (required) |
| planPublisher | Publisher of the purchase plan. | string (required) |


### ImageTemplateSharedImageVersionSource

| Name | Description | Value |
|-|-|-|
| type | Specifies the type of source image you want to start with. | 'SharedImageVersion' (required) |
| imageVersionId | ARM resource id of the image version in the shared image gallery | string (required) |


### ImageTemplatePropertiesValidate

| Name | Description | Value |
|-|-|-|
| continueDistributeOnFailure | If validation fails and this field is set to false, output image(s) will not be distributed. This is the default behavior. If validation fails and this field is set to true, output image(s) will still be distributed. Please use this option with caution as it may result in bad images being distributed for use. In either case (true or false), the end to end image run will be reported as having failed in case of a validation failure. [Note: This field has no effect if validation succeeds.] | bool |
| inVMValidations | List of validations to be performed. | ImageTemplateInVMValidator[] |
| sourceValidationOnly | If this field is set to true, the image specified in the 'source' section will directly be validated. No separate build will be run to generate and then validate a customized image. | bool |


### ImageTemplateInVMValidator

| Name | Description | Value |
|-|-|-|
| name | Friendly Name to provide context on what this validation step does | string |
| type | Set the object type | PowerShellShell(required) |


### ImageTemplatePowerShellValidator

| Name | Description | Value |
|-|-|-|
| type | The type of validation you want to use on the Image. For example, "Shell" can be shell validation | 'PowerShell' (required) |
| inline | Array of PowerShell commands to execute | string[] |
| runAsSystem | If specified, the PowerShell script will be run with elevated privileges using the Local System user. Can only be true when the runElevated field above is set to true. | bool |
| runElevated | If specified, the PowerShell script will be run with elevated privileges | bool |
| scriptUri | URI of the PowerShell script to be run for validation. It can be a github link, Azure Storage URI, etc | string |
| sha256Checksum | SHA256 checksum of the power shell script provided in the scriptUri field above | string |
| validExitCodes | Valid exit codes for the PowerShell script. [Default: 0] | int[] |


### ImageTemplateShellValidator

| Name | Description | Value |
|-|-|-|
| type | The type of validation you want to use on the Image. For example, "Shell" can be shell validation | 'Shell' (required) |
| inline | Array of shell commands to execute | string[] |
| scriptUri | URI of the shell script to be run for validation. It can be a github link, Azure Storage URI, etc | string |
| sha256Checksum | SHA256 checksum of the shell script provided in the scriptUri field | string |


### ImageTemplateVmProfile

| Name | Description | Value |
|-|-|-|
| osDiskSizeGB | Size of the OS disk in GB. Omit or specify 0 to use Azure's default OS disk size. | int |
| userAssignedIdentities | Optional array of resource IDs of user assigned managed identities to be configured on the build VM and validation VM. This may include the identity of the image template. | string[] |
| vmSize | Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2 for Gen1 images and Standard_D2ds_v4 for Gen2 images). | string |
| vnetConfig | Optional configuration of the virtual network to use to deploy the build VM and validation VM in. Omit if no specific virtual network needs to be used. | VirtualNetworkConfig |


### VirtualNetworkConfig

| Name | Description | Value |
|-|-|-|
| proxyVmSize | Size of the proxy virtual machine used to pass traffic to the build VM and validation VM. Omit or specify empty string to use the default (Standard_A1_v2). | string |
| subnetId | Resource id of a pre-existing subnet. | string |
