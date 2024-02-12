```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridCompute/machines@2022-11-10"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      clientPublicKey = "string"
      cloudMetadata = {}
      extensions = [
        {
          name = "string"
          status = {
            code = "string"
            displayStatus = "string"
            level = "string"
            message = "string"
            time = "string"
          }
          type = "string"
          typeHandlerVersion = "string"
        }
      ]
      locationData = {
        city = "string"
        countryOrRegion = "string"
        district = "string"
        name = "string"
      }
      mssqlDiscovered = "string"
      osProfile = {
        linuxConfiguration = {
          patchSettings = {
            assessmentMode = "string"
            patchMode = "string"
          }
        }
        windowsConfiguration = {
          patchSettings = {
            assessmentMode = "string"
            patchMode = "string"
          }
        }
      }
      osType = "string"
      parentClusterResourceId = "string"
      privateLinkScopeResourceId = "string"
      serviceStatuses = {
        extensionService = {
          startupType = "string"
          status = "string"
        }
        guestConfigurationService = {
          startupType = "string"
          status = "string"
        }
      }
      vmId = "string"
    }
  })
}

```

### machines

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity for the resource. | Identity |
| properties | Hybrid Compute Machine properties | MachineProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### MachineProperties

| Name | Description | Value |
|-|-|-|
| clientPublicKey | Public Key that the client provides to be used during initial resource onboarding | string |
| cloudMetadata | The metadata of the cloud environment (Azure/GCP/AWS/OCI...). | CloudMetadata |
| extensions | Machine Extensions information (deprecated field) | MachineExtensionInstanceView[] |
| locationData | Metadata pertaining to the geographic location of the resource. | LocationData |
| mssqlDiscovered | Specifies whether any MS SQL instance is discovered on the machine. | string |
| osProfile | Specifies the operating system settings for the hybrid machine. | OSProfile |
| osType | The type of Operating System (windows/linux). | string |
| parentClusterResourceId | The resource id of the parent cluster (Azure HCI) this machine is assigned to, if any. | string |
| privateLinkScopeResourceId | The resource id of the private link scope this machine is assigned to, if any. | string |
| serviceStatuses | Statuses of dependent services that are reported back to ARM. | ServiceStatuses |
| vmId | Specifies the hybrid machine unique ID. | string |


### MachineExtensionInstanceView

| Name | Description | Value |
|-|-|-|
| name | The machine extension name. | string |
| status | Instance view status. | MachineExtensionInstanceViewStatus |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |


### MachineExtensionInstanceViewStatus

| Name | Description | Value |
|-|-|-|
| code | The status code. | string |
| displayStatus | The short localizable label for the status. | string |
| level | The level code. | 'Error''Info''Warning' |
| message | The detailed status message, including for alerts and error messages. | string |
| time | The time of the status. | string |


### LocationData

| Name | Description | Value |
|-|-|-|
| city | The city or locality where the resource is located. | string |
| countryOrRegion | The country or region where the resource is located | string |
| district | The district, state, or province where the resource is located. | string |
| name | A canonical name for the geographic or physical location. | string (required) |


### OSProfile

| Name | Description | Value |
|-|-|-|
| linuxConfiguration | Specifies the linux configuration for update management. | OSProfileLinuxConfiguration |
| windowsConfiguration | Specifies the windows configuration for update management. | OSProfileWindowsConfiguration |


### OSProfileLinuxConfiguration

| Name | Description | Value |
|-|-|-|
| patchSettings | Specifies the patch settings. | PatchSettings |


### PatchSettings

| Name | Description | Value |
|-|-|-|
| assessmentMode | Specifies the assessment mode. | 'AutomaticByPlatform''ImageDefault' |
| patchMode | Specifies the patch mode. | 'AutomaticByOS''AutomaticByPlatform''ImageDefault''Manual' |


### OSProfileWindowsConfiguration

| Name | Description | Value |
|-|-|-|
| patchSettings | Specifies the patch settings. | PatchSettings |


### ServiceStatuses

| Name | Description | Value |
|-|-|-|
| extensionService | The state of the extension service on the Arc-enabled machine. | ServiceStatus |
| guestConfigurationService | The state of the guest configuration service on the Arc-enabled machine. | ServiceStatus |


### ServiceStatus

| Name | Description | Value |
|-|-|-|
| startupType | The behavior of the service when the Arc-enabled machine starts up. | string |
| status | The current status of the service. | string |


