```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerBI/workspaceCollections@2016-01-29"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    sku = {
      name = "S1"
      tier = "Standard"
    }
  })
}

```

### workspaceCollections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-63Valid characters:Alphanumerics and hyphens.Can't start with hyphen. Can't use consecutive hyphens. |
| location | Azure location | string |
| tags | Dictionary of {string} | Dictionary of tag names and values. SeeTags in templates |
| sku |  | AzureSku |


### AzureSku

| Name | Description | Value |
|-|-|-|
| name | SKU name | 'S1' (required) |
| tier | SKU tier | 'Standard' (required) |


