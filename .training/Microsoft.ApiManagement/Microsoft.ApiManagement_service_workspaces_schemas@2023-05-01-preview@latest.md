```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/schemas@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      schemaType = "string"
    }
  })
}

```

### service/workspaces/schemas

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Properties of the Global Schema. | GlobalSchemaContractProperties |


### GlobalSchemaContractProperties

| Name | Description | Value |
|-|-|-|
| description | Free-form schema entity description. | string |
| document | Global Schema document object for json-based schema formats(e.g. json schema). | For Bicep, you can use theany()function. |
| schemaType | Schema Type. Immutable. | 'json''xml' (required) |
| value | Json-encoded string for non json-based schema. | For Bicep, you can use theany()function. |


