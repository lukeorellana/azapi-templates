```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/openidConnectProviders@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientId = "string"
      clientSecret = "string"
      description = "string"
      displayName = "string"
      metadataEndpoint = "string"
      useInApiDocumentation = bool
      useInTestConsole = bool
    }
  })
}

```

### service/openidConnectProviders

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | OpenId Connect Provider contract properties. | OpenidConnectProviderContractProperties |


### OpenidConnectProviderContractProperties

| Name | Description | Value |
|-|-|-|
| clientId | Client ID of developer console which is the client application. | string (required) |
| clientSecret | Client Secret of developer console which is the client application. | string |
| description | User-friendly description of OpenID Connect Provider. | string |
| displayName | User-friendly OpenID Connect Provider name. | string (required) |
| metadataEndpoint | Metadata endpoint URI. | string (required) |
| useInApiDocumentation | If true, the Open ID Connect provider will be used in the API documentation in the developer portal. False by default if no value is provided. | bool |
| useInTestConsole | If true, the Open ID Connect provider may be used in the developer portal test console. True by default if no value is provided. | bool |


