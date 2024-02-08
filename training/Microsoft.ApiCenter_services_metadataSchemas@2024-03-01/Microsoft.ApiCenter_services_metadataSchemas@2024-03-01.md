```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiCenter/services/metadataSchemas@2024-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assignedTo = [
        {
          deprecated = bool
          entity = "string"
          required = bool
        }
      ]
      schema = "string"
    }
  })
}

```

### services/metadataSchemas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:services |
| properties | Metadata schema properties. | MetadataSchemaProperties |


### MetadataSchemaProperties

| Name | Description | Value |
|-|-|-|
| assignedTo |  | MetadataAssignment[] |
| schema | The schema defining the type. | string (required) |


### MetadataAssignment

| Name | Description | Value |
|-|-|-|
| deprecated |  | bool |
| entity | The entities this metadata schema component gets applied to. | 'api''deployment''environment' |
| required |  | bool |


