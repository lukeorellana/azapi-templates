```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeviceUpdate/accounts/instances@2022-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      diagnosticStorageProperties = {
        authenticationType = "KeyBased"
        connectionString = "string"
        resourceId = "string"
      }
      enableDiagnostics = bool
      iotHubs = [
        {
          resourceId = "string"
        }
      ]
    }
  })
}

```

### accounts/instances

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Device Update instance properties. | InstanceProperties(required) |


### InstanceProperties

| Name | Description | Value |
|-|-|-|
| diagnosticStorageProperties | Customer-initiated diagnostic log collection storage properties | DiagnosticStorageProperties |
| enableDiagnostics | Enables or Disables the diagnostic logs collection | bool |
| iotHubs | List of IoT Hubs associated with the account. | IotHubSettings[] |


### DiagnosticStorageProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Authentication Type | 'KeyBased' (required) |
| connectionString | ConnectionString of the diagnostic storage account | string |
| resourceId | ResourceId of the diagnostic storage account | string (required) |


### IotHubSettings

| Name | Description | Value |
|-|-|-|
| resourceId | IoTHub resource ID | string (required) |


