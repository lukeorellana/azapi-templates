```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/connectionGateways@2016-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backendUri = "string"
      connectionGatewayInstallation = {
        id = "string"
        location = "string"
        name = "string"
        type = "string"
      }
      contactInformation = [
        "string"
      ]
      description = "string"
      displayName = "string"
      machineName = "string"
    }
    etag = "string"
  })
}

```

### connectionGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| etag | Resource ETag | string |
| properties |  | ConnectionGatewayDefinitionProperties |


### ConnectionGatewayDefinitionProperties

| Name | Description | Value |
|-|-|-|
| backendUri | The URI of the backend | string |
| connectionGatewayInstallation | The gateway installation reference | ConnectionGatewayReference |
| contactInformation | The gateway admin | string[] |
| description | The gateway description | string |
| displayName | The gateway display name | string |
| machineName | The machine name of the gateway | string |
| status | The gateway status | For Bicep, you can use theany()function. |


### ConnectionGatewayReference

| Name | Description | Value |
|-|-|-|
| id | Resource reference id | string |
| location | Resource reference location | string |
| name | Resource reference name | string |
| type | Resource reference type | string |


