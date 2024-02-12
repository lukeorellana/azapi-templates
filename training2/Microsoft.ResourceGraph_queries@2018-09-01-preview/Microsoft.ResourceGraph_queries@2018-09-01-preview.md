```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ResourceGraph/queries@2018-09-01-preview"
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
      query = "string"
    }
    etag = "string"
  })
}

```

### queries

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the resource | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| etag | This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict. | string |
| properties | Metadata describing a graph query for an Azure resource. | GraphQueryProperties |


### GraphQueryProperties

| Name | Description | Value |
|-|-|-|
| description | The description of a graph query. | string |
| query | KQL query that will be graph. | string (required) |


