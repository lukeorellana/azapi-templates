```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logic/integrationAccounts/schemas@2019-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      content = "string"
      contentType = "string"
      documentName = "string"
      fileName = "string"
      schemaType = "string"
      targetNamespace = "string"
    }
  })
}

```

### integrationAccounts/schemas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
| properties | The integration account schema properties. | IntegrationAccountSchemaProperties(required) |


### IntegrationAccountSchemaProperties

| Name | Description | Value |
|-|-|-|
| content | The content. | string |
| contentType | The content type. | string |
| documentName | The document name. | string |
| fileName | The file name. | string |
| metadata | The metadata. | For Bicep, you can use theany()function. |
| schemaType | The schema type. | 'NotSpecified''Xml' (required) |
| targetNamespace | The target namespace of the schema. | string |


