```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/incidents/comments@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      message = "string"
    }
    etag = "string"
  })
}

```

### incidents/comments

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:incidents |
| etag | Etag of the azure resource | string |
| properties | Incident comment properties | IncidentCommentProperties |


### IncidentCommentProperties

| Name | Description | Value |
|-|-|-|
| message | The comment message | string (required) |


