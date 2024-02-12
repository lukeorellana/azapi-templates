```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerPlatform/accounts@2020-10-30-preview"
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
    }
  })
}

```

### accounts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties that define configuration for the account. | AccountProperties |


### AccountProperties

| Name | Description | Value |
|-|-|-|
| description | The description of the account. | string |


