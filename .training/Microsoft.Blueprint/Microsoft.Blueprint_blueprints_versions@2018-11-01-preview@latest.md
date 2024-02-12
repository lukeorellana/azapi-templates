```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blueprint/blueprints/versions@2018-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      blueprintName = "string"
      changeNotes = "string"
      description = "string"
      displayName = "string"
      parameters = {}
      resourceGroups = {}
      targetScope = "string"
    }
  })
}

```

### blueprints/versions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:blueprints |
| properties | Detailed properties for published blueprint. | PublishedBlueprintProperties(required) |


### PublishedBlueprintProperties

| Name | Description | Value |
|-|-|-|
| blueprintName | Name of the published blueprint definition. | string |
| changeNotes | Version-specific change notes. | string |
| description | Multi-line explain this resource. | string |
| displayName | One-liner string explain this resource. | string |
| parameters | Parameters required by this blueprint definition. | object |
| resourceGroups | Resource group placeholders defined by this blueprint definition. | object |
| targetScope | The scope where this blueprint definition can be assigned. | 'managementGroup''subscription' |


