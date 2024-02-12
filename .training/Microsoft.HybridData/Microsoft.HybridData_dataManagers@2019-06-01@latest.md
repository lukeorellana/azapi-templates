```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridData/dataManagers@2019-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    sku = {
      name = "string"
      tier = "string"
    }
    etag = "string"
  })
}

```

### dataManagers

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, EastUS, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical georegion is specified on update the request will succeed. | string (required) |
| tags | The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource(across resource groups). | Dictionary of tag names and values. SeeTags in templates |
| sku | The sku type. | Sku |
| etag | Etag of the Resource. | string |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The sku name. Required for data manager creation, optional for update. | string |
| tier | The sku tier. This is based on the SKU name. | string |


