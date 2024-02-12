```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones@2020-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    etag = "string"
  })
}

```

### privateDnsZones

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-63 characters2 to 34 labelsEach label is a set of characters separated by a period. For example,contoso.comhas 2 labels.Valid characters:Each label can contain alphanumerics, underscores, and hyphens.Each label is separated by a period. |
| location | The Azure Region where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| etag | The ETag of the zone. | string |
| properties | Properties of the Private DNS zone. | PrivateZoneProperties |


