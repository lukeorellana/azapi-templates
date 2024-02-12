```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Blueprint/blueprints@2018-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
      parameters = {}
      resourceGroups = {}
      targetScope = "string"
    }
  })
}

```

### blueprints

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Detailed properties for blueprint definition. | BlueprintProperties(required) |


### BlueprintProperties

| Name | Description | Value |
|-|-|-|
| description | Multi-line explain this resource. | string |
| displayName | One-liner string explain this resource. | string |
| parameters | Parameters required by this blueprint definition. | object |
| resourceGroups | Resource group placeholders defined by this blueprint definition. | object |
| targetScope | The scope where this blueprint definition can be assigned. | 'managementGroup''subscription' |
| versions | Published versions of this blueprint definition. | For Bicep, you can use theany()function. |


