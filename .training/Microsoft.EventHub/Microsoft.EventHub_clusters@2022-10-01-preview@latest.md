```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/clusters@2022-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      supportsScaling = bool
    }
    sku = {
      capacity = int
      name = "Dedicated"
    }
  })
}

```

### clusters

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 6-50Valid characters:Alphanumerics and hyphens.Start with letter. End with letter or number. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | Properties of the cluster SKU. | ClusterSku |
| properties | Event Hubs Cluster properties supplied in responses in List or Get operations. | ClusterProperties |


### ClusterProperties

| Name | Description | Value |
|-|-|-|
| supportsScaling | A value that indicates whether Scaling is Supported. | bool |


### ClusterSku

| Name | Description | Value |
|-|-|-|
| capacity | The quantity of Event Hubs Cluster Capacity Units contained in this cluster. | int |
| name | Name of this SKU. | 'Dedicated' (required) |


