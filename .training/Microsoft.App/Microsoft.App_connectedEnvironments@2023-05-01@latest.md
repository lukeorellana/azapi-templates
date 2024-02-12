```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/connectedEnvironments@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customDomainConfiguration = {
        certificatePassword = "string"
        dnsSuffix = "string"
      }
      daprAIConnectionString = "string"
      staticIp = "string"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

### connectedEnvironments

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The complex type of the extended location. | ExtendedLocation |
| properties | ConnectedEnvironment resource specific properties | ConnectedEnvironmentProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'CustomLocation' |


### ConnectedEnvironmentProperties

| Name | Description | Value |
|-|-|-|
| customDomainConfiguration | Custom domain configuration for the environment | CustomDomainConfiguration |
| daprAIConnectionString | Application Insights connection string used by Dapr to export Service to Service communication telemetry | string |
| staticIp | Static IP of the connectedEnvironment | string |


### CustomDomainConfiguration

| Name | Description | Value |
|-|-|-|
| certificatePassword | Certificate password | string |
| certificateValue | PFX or PEM blob | For Bicep, you can use theany()function. |
| dnsSuffix | Dns suffix for the environment domain | string |


