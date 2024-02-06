## Microsoft.VideoIndexer/accounts@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.VideoIndexer/accounts@2022-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      accountId = "string"
      mediaServices = {
        resourceId = "string"
        userAssignedIdentity = "string"
      }
    }
  })
}

```

