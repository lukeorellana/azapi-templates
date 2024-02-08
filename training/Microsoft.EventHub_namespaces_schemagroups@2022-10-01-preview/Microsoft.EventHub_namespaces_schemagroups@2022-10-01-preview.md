```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/schemagroups@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupProperties = {
      schemaCompatibility = "string"
      schemaType = "string"
    }
  })
}

```

### namespaces/schemagroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:namespaces |
| properties |  | SchemaGroupProperties |


### SchemaGroupProperties

| Name | Description | Value |
|-|-|-|
| groupProperties | dictionary object for SchemaGroup group properties | SchemaGroupProperties |
| schemaCompatibility |  | 'Backward''Forward''None' |
| schemaType |  | 'Avro''Unknown' |


