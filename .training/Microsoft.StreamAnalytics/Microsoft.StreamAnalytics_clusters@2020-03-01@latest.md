```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/clusters@2020-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    sku = {
      capacity = int
      name = "Default"
    }
  })
}

```

### clusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU of the cluster. This determines the size/capacity of the cluster. Required on PUT (CreateOrUpdate) requests. | ClusterSku |
| properties | The properties associated with a Stream Analytics cluster. | ClusterProperties |


### ClusterSku

| Name | Description | Value |
|-|-|-|
| capacity | Denotes the number of streaming units the cluster can support. Valid values for this property are multiples of 36 with a minimum value of 36 and maximum value of 216. Required on PUT (CreateOrUpdate) requests. | intConstraints:Min value = 36Max value = 396 |
| name | Specifies the SKU name of the cluster. Required on PUT (CreateOrUpdate) requests. | 'Default' |


