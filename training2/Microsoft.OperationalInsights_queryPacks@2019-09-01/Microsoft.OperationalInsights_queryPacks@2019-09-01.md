```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/queryPacks@2019-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

### queryPacks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties that define a Log Analytics QueryPack resource. | LogAnalyticsQueryPackProperties(required) |


