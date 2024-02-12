```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridNetwork/devices@2022-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      deviceType = "string"
      // For remaining properties, see DevicePropertiesFormat objects
    }
  })
}

```

### devices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Device properties. | DevicePropertiesFormat |


### DevicePropertiesFormat

| Name | Description | Value |
|-|-|-|
| deviceType | Set the object type | AzureStackEdge(required) |


### AzureStackEdgeFormat

| Name | Description | Value |
|-|-|-|
| deviceType | The type of the device. | 'AzureStackEdge' (required) |
| azureStackEdge | The reference to the Azure stack edge device. | SubResource(required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


