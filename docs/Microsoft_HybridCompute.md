## Microsoft.HybridCompute/machines@2022-11-10

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
## Microsoft.HybridCompute/machines/extensions@2022-11-10

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridCompute/machines/extensions@2022-11-10"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoUpgradeMinorVersion = bool
      enableAutomaticUpgrade = bool
      forceUpdateTag = "string"
      instanceView = {
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
      protectedSettings = {}
      publisher = "string"
      settings = {}
      type = "string"
      typeHandlerVersion = "string"
    }
  })
}

```

### machines/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:machines |
| properties | Describes Machine Extension Properties. | MachineExtensionProperties |


### MachineExtensionProperties

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
| enableAutomaticUpgrade | Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available. | bool |
| forceUpdateTag | How the extension handler should be forced to update even if the extension configuration has not changed. | string |
| instanceView | The machine extension instance view. | MachineExtensionInstanceView |
| protectedSettings | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | object |
| publisher | The name of the extension handler publisher. | string |
| settings | Json formatted public settings for the extension. | object |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |


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
## Microsoft.HybridCompute/privateLinkScopes@2022-11-10

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridCompute/privateLinkScopes@2022-11-10"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publicNetworkAccess = "string"
    }
  })
}

```

### privateLinkScopes

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties that define a Azure Arc PrivateLinkScope resource. | HybridComputePrivateLinkScopeProperties |


### HybridComputePrivateLinkScopeProperties

| Name | Description | Value |
|-|-|-|
| publicNetworkAccess | Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints. | 'Disabled''Enabled' |
## Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections@2022-11-10

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections@2022-11-10"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

### privateLinkScopes/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateLinkScopes |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | Private endpoint which the connection belongs to. | PrivateEndpointProperty |
| privateLinkServiceConnectionState | Connection state of the private endpoint connection. | PrivateLinkServiceConnectionStateProperty |


### PrivateEndpointProperty

| Name | Description | Value |
|-|-|-|
| id | Resource id of the private endpoint. | string |


### PrivateLinkServiceConnectionStateProperty

| Name | Description | Value |
|-|-|-|
| description | The private link service connection description. | string (required) |
| status | The private link service connection status. | string (required) |
## Microsoft.HybridCompute/privateLinkScopes/scopedResources@2020-08-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridCompute/privateLinkScopes/scopedResources@2020-08-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedResourceId = "string"
    }
  })
}

```

### privateLinkScopes/scopedResources

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateLinkScopes |
| properties | Resource properties. | ScopedResourceProperties |


### ScopedResourceProperties

| Name | Description | Value |
|-|-|-|
| linkedResourceId | The resource id of the scoped Azure monitor resource. | string |
