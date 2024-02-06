## Microsoft.LoadTestService/loadTests@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LoadTestService/loadTests@2022-12-01"
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
      description = "string"
      encryption = {
        identity = {
          resourceId = "string"
          type = "string"
        }
        keyUrl = "string"
      }
    }
  })
}

```

