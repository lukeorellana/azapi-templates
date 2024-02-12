```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/defenderForStorageSettings@2022-12-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isEnabled = bool
      malwareScanning = {
        onUpload = {
          capGBPerMonth = int
          isEnabled = bool
        }
        scanResultsEventGridTopicResourceId = "string"
      }
      overrideSubscriptionLevelSettings = bool
      sensitiveDataDiscovery = {
        isEnabled = bool
      }
    }
  })
}

```

### defenderForStorageSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'current' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Defender for Storage resource properties. | DefenderForStorageSettingProperties |


### DefenderForStorageSettingProperties

| Name | Description | Value |
|-|-|-|
| isEnabled | Indicates whether Defender for Storage is enabled on this storage account. | bool |
| malwareScanning | Properties of Malware Scanning. | MalwareScanningProperties |
| overrideSubscriptionLevelSettings | Indicates whether the settings defined for this storage account should override the settings defined for the subscription. | bool |
| sensitiveDataDiscovery | Properties of Sensitive Data Discovery. | SensitiveDataDiscoveryProperties |


### MalwareScanningProperties

| Name | Description | Value |
|-|-|-|
| onUpload | Properties of On Upload malware scanning. | OnUploadProperties |
| scanResultsEventGridTopicResourceId | Optional. Resource id of an Event Grid Topic to send scan results to. | string |


### OnUploadProperties

| Name | Description | Value |
|-|-|-|
| capGBPerMonth | Defines the max GB to be scanned per Month. Set to -1 if no capping is needed. | int |
| isEnabled | Indicates whether On Upload malware scanning should be enabled. | bool |


### SensitiveDataDiscoveryProperties

| Name | Description | Value |
|-|-|-|
| isEnabled | Indicates whether Sensitive Data Discovery should be enabled. | bool |


