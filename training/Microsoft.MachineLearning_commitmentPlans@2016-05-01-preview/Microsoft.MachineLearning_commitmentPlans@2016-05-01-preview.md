```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearning/commitmentPlans@2016-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
    etag = "string"
  })
}

```

### commitmentPlans

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use:<>*%&:?+/\\or control charactersCan't end with a space. |
| location | Resource location. | string (required) |
| tags | User-defined tags for the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | The commitment plan SKU. | ResourceSku |
| etag | An entity tag used to enforce optimistic concurrency. | string |


### ResourceSku

| Name | Description | Value |
|-|-|-|
| capacity | The scale-out capacity of the resource. 1 is 1x, 2 is 2x, etc. This impacts the quantities and cost of any commitment plan resource. | int |
| name | The SKU name. Along with tier, uniquely identifies the SKU. | string |
| tier | The SKU tier. Along with name, uniquely identifies the SKU. | string |


