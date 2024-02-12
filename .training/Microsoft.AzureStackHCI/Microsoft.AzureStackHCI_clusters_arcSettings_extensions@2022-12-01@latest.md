```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2022-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      extensionParameters = {
        autoUpgradeMinorVersion = bool
        enableAutomaticUpgrade = bool
        forceUpdateTag = "string"
        publisher = "string"
        type = "string"
        typeHandlerVersion = "string"
      }
    }
  })
}

```

### clusters/arcSettings/extensions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:arcSettings |
| properties | Describes Machine Extension Properties. | ExtensionProperties |


### ExtensionProperties

| Name | Description | Value |
|-|-|-|
| extensionParameters | Parameters specific to this extension type. | ExtensionParameters |


### ExtensionParameters

| Name | Description | Value |
|-|-|-|
| autoUpgradeMinorVersion | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | bool |
| enableAutomaticUpgrade | Indicates whether the extension should be automatically upgraded by the platform if there is a newer version available. | bool |
| forceUpdateTag | How the extension handler should be forced to update even if the extension configuration has not changed. | string |
| protectedSettings | Protected settings (may contain secrets). | For Bicep, you can use theany()function. |
| publisher | The name of the extension handler publisher. | string |
| settings | Json formatted public settings for the extension. | For Bicep, you can use theany()function. |
| type | Specifies the type of the extension; an example is "CustomScriptExtension". | string |
| typeHandlerVersion | Specifies the version of the script handler. | string |


