## Microsoft.ResourceGraph/queries@2018-09-01-preview

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

