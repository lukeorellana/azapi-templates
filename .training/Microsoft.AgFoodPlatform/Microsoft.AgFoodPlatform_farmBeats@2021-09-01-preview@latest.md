```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AgFoodPlatform/farmBeats@2021-09-01-preview"
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
      publicNetworkAccess = "string"
      sensorIntegration = {
        enabled = "string"
        provisioningInfo = {
          error = {}
        }
      }
    }
  })
}

```

### farmBeats

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity for the resource. | Identity |
| properties | FarmBeats ARM Resource properties. | FarmBeatsProperties |


### Identity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'SystemAssigned' |


### FarmBeatsProperties

| Name | Description | Value |
|-|-|-|
| publicNetworkAccess | Property to allow or block public traffic for an Azure FarmBeats resource. | 'Enabled''Hybrid' |
| sensorIntegration | Sensor integration request model. | SensorIntegration |


### SensorIntegration

| Name | Description | Value |
|-|-|-|
| enabled | Sensor integration enable state. Allowed values are True, None | string |
| provisioningInfo | Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). | ErrorResponse |


### ErrorResponse

| Name | Description | Value |
|-|-|-|
| error | The error object. | ErrorDetail |


