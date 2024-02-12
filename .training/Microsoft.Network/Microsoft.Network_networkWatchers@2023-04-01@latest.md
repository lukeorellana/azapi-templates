```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkWatchers@2023-04-01"
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

### networkWatchers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the network watcher. | NetworkWatcherPropertiesFormat |


