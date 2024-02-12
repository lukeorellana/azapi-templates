```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      availabilityZones = [
        "string"
      ]
      baseSizeTiB = int
      extendedCapacitySizeTiB = int
      publicNetworkAccess = "string"
      sku = {
        name = "string"
        tier = "Premium"
      }
    }
  })
}

```

### elasticSans

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of ElasticSan. | ElasticSanProperties(required) |


### ElasticSanProperties

| Name | Description | Value |
|-|-|-|
| availabilityZones | Logical zone for Elastic San resource; example: ["1"]. | string[] |
| baseSizeTiB | Base size of the Elastic San appliance in TiB. | int (required) |
| extendedCapacitySizeTiB | Extended size of the Elastic San appliance in TiB. | int (required) |
| publicNetworkAccess | Allow or disallow public network access to ElasticSan. Value is optional but if passed in, must be 'Enabled' or 'Disabled'. | 'Disabled''Enabled' |
| sku | resource sku | Sku(required) |


### Sku

| Name | Description | Value |
|-|-|-|
| name | The sku name. | 'Premium_LRS''Premium_ZRS' (required) |
| tier | The sku tier. | 'Premium' |


