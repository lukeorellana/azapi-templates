```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/connections@2016-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      api = {
        brandColor = "string"
        description = "string"
        displayName = "string"
        iconUri = "string"
        id = "string"
        name = "string"
        type = "string"
      }
      changedTime = "string"
      createdTime = "string"
      customParameterValues = {}
      displayName = "string"
      nonSecretParameterValues = {}
      parameterValues = {}
      statuses = [
        {
          error = {
            etag = "string"
            location = "string"
            properties = {
              code = "string"
              message = "string"
            }
            tags = {}
          }
          status = "string"
          target = "string"
        }
      ]
      testLinks = [
        {
          method = "string"
          requestUri = "string"
        }
      ]
    }
    etag = "string"
  })
}

```

### connections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| etag | Resource ETag | string |
| properties |  | ApiConnectionDefinitionProperties |


### ApiConnectionDefinitionProperties

| Name | Description | Value |
|-|-|-|
| api |  | ApiReference |
| changedTime | Timestamp of last connection change | string |
| createdTime | Timestamp of the connection creation | string |
| customParameterValues | Dictionary of custom parameter values | object |
| displayName | Display name | string |
| nonSecretParameterValues | Dictionary of nonsecret parameter values | object |
| parameterValues | Dictionary of parameter values | object |
| statuses | Status of the connection | ConnectionStatusDefinition[] |
| testLinks | Links to test the API connection | ApiConnectionTestLink[] |


### ApiReference

| Name | Description | Value |
|-|-|-|
| brandColor | Brand color | string |
| description | The custom API description | string |
| displayName | The display name | string |
| iconUri | The icon URI | string |
| id | Resource reference id | string |
| name | The name of the API | string |
| swagger | The JSON representation of the swagger | For Bicep, you can use theany()function. |
| type | Resource reference type | string |


### ConnectionStatusDefinition

| Name | Description | Value |
|-|-|-|
| error | Connection error | ConnectionError |
| status | The gateway status | string |
| target | Target of the error | string |


### ConnectionError

| Name | Description | Value |
|-|-|-|
| etag | Resource ETag | string |
| location | Resource location | string |
| properties |  | ConnectionErrorProperties |
| tags | Resource tags | object |


### ConnectionErrorProperties

| Name | Description | Value |
|-|-|-|
| code | Code of the status | string |
| message | Description of the status | string |


### ApiConnectionTestLink

| Name | Description | Value |
|-|-|-|
| method | HTTP Method | string |
| requestUri | Test link request URI | string |


