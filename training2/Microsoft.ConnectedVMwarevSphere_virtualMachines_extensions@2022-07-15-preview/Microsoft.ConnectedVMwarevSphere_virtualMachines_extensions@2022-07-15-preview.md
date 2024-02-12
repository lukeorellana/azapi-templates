```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions@2022-07-15-preview"
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
        status = {}
      }
      publisher = "string"
      type = "string"
      typeHandlerVersion = "string"
    }
  })
}

```

### virtualMachines/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Gets or sets the location. | string |
| tags | Gets or sets the Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualMachines |
| properties | Describes Machine Extension Properties. | MachineExtensionProperties |


### MachineExtensionProperties

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
| enableAutomaticUpgrade | Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available. | bool |
| forceUpdateTag | How the extension handler should be forced to update even if the extension configuration has not changed. | string |
| instanceView | The machine extension instance view. | MachineExtensionPropertiesInstanceView |
| protectedSettings | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | For Bicep, you can use theany()function. |
| publisher | The name of the extension handler publisher. | string |
| settings | Json formatted public settings for the extension. | For Bicep, you can use theany()function. |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |


### MachineExtensionPropertiesInstanceView

| Name | Description | Value |
|-|-|-|
| status | Instance view status. | MachineExtensionInstanceViewStatus |


