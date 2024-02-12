```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
}

```

### userAssignedIdentities

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-128Valid characters:Alphanumerics, hyphens, and underscoresStart with letter or number. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |


