```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/customApis@2016-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      apiDefinitions = {
        modifiedSwaggerUrl = "string"
        originalSwaggerUrl = "string"
      }
      apiType = "string"
      backendService = {
        serviceUrl = "string"
      }
      brandColor = "string"
      capabilities = [
        "string"
      ]
      connectionParameters = {}
      description = "string"
      displayName = "string"
      iconUri = "string"
      runtimeUrls = [
        "string"
      ]
      wsdlDefinition = {
        content = "string"
        importMethod = "string"
        service = {
          endpointQualifiedNames = [
            "string"
          ]
          qualifiedName = "string"
        }
        url = "string"
        content = "string"
        importMethod = "string"
        service = {
          endpointQualifiedNames = [
            "string"
          ]
          qualifiedName = "string"
        }
        url = "string"
      }
    }
    etag = "string"
  })
}

```

### customApis

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| etag | Resource ETag | string |
| properties | Custom API properties | CustomApiPropertiesDefinition |


### CustomApiPropertiesDefinition

| Name | Description | Value |
|-|-|-|
| apiDefinitions | API Definitions | ApiResourceDefinitions |
| apiType | The API type | 'NotSpecified''Rest''Soap' |
| backendService | The API backend service | ApiResourceBackendService |
| brandColor | Brand color | string |
| capabilities | The custom API capabilities | string[] |
| connectionParameters | Connection parameters | object |
| description | The custom API description | string |
| displayName | The display name | string |
| iconUri | The icon URI | string |
| runtimeUrls | Runtime URLs | string[] |
| swagger | The JSON representation of the swagger | For Bicep, you can use theany()function. |
| wsdlDefinition | The WSDL definition | WsdlDefinition |


### ApiResourceDefinitions

| Name | Description | Value |
|-|-|-|
| modifiedSwaggerUrl | The modified swagger URL | string |
| originalSwaggerUrl | The original swagger URL | string |


### ApiResourceBackendService

| Name | Description | Value |
|-|-|-|
| serviceUrl | The service URL | string |


### WsdlDefinition

| Name | Description | Value |
|-|-|-|
| content | The WSDL content | string |
| importMethod | The WSDL import method | 'NotSpecified''SoapPassThrough''SoapToRest' |
| service | The service with name and endpoint names | WsdlService |
| url | The WSDL URL | string |
| content | The WSDL content | string |
| importMethod | The WSDL import method | 'NotSpecified''SoapPassThrough''SoapToRest' |
| service | The service with name and endpoint names | WsdlService |
| url | The WSDL URL | string |


### WsdlService

| Name | Description | Value |
|-|-|-|
| endpointQualifiedNames | List of the endpoints' qualified names | string[] |
| qualifiedName | The service's qualified name | string (required) |


