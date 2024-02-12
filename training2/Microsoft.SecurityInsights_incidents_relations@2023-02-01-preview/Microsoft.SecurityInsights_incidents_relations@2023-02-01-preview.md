```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/incidents/relations@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      relatedResourceId = "string"
    }
    etag = "string"
  })
}

```

### incidents/relations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:incidents |
| etag | Etag of the azure resource | string |
| properties | Relation properties | RelationProperties |


### RelationProperties

| Name | Description | Value |
|-|-|-|
| relatedResourceId | The resource ID of the related resource | string (required) |


