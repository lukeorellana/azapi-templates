```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/apis/schemas@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentType = "string"
      document = {
        value = "string"
      }
    }
  })
}

```

### service/apis/schemas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:apis |
| properties | Properties of the API Schema. | SchemaContractProperties |


### SchemaContractProperties

| Name | Description | Value |
|-|-|-|
| contentType | Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml).-SwaggerSchema useapplication/vnd.ms-azure-apim.swagger.definitions+json-WSDLSchema useapplication/vnd.ms-azure-apim.xsd+xml-OpenApiSchema useapplication/vnd.oai.openapi.components+json-WADL Schemauseapplication/vnd.ms-azure-apim.wadl.grammars+xml-OData Schemauseapplication/vnd.ms-azure-apim.odata.schema-gRPC Schemausetext/protobuf. | string (required) |
| document | Create or update Properties of the API Schema Document. | SchemaDocumentProperties(required) |


### SchemaDocumentProperties

| Name | Description | Value |
|-|-|-|
| components | Types definitions. Used for Swagger/OpenAPI v2/v3 schemas only, null otherwise. | For Bicep, you can use theany()function. |
| definitions | Types definitions. Used for Swagger/OpenAPI v1 schemas only, null otherwise. | For Bicep, you can use theany()function. |
| value | Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI. | string |


