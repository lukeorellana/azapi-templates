```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/publishers/configurationGroupSchemas@2023-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      schemaDefinition = "string"
    }
  })
}

```

### publishers/configurationGroupSchemas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:publishers |
| properties | Configuration group schema properties. | ConfigurationGroupSchemaPropertiesFormat |


### ConfigurationGroupSchemaPropertiesFormat

| Name | Description | Value |
|-|-|-|
| description | Description of what schema can contain. | string |
| schemaDefinition | Name and value pairs that define the configuration value. It can be a well formed escaped JSON string. | string |


