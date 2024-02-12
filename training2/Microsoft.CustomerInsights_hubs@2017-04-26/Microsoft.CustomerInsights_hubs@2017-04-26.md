```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs@2017-04-26"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      hubBillingInfo = {
        maxUnits = int
        minUnits = int
        skuName = "string"
      }
      tenantFeatures = int
    }
  })
}

```

### hubs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-64Valid characters:Alphanumerics.Start with letter. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of hub. | HubPropertiesFormat |


### HubPropertiesFormat

| Name | Description | Value |
|-|-|-|
| hubBillingInfo | Billing settings of the hub. | HubBillingInfoFormat |
| tenantFeatures | The bit flags for enabled hub features. Bit 0 is set to 1 indicates graph is enabled, or disabled if set to 0. Bit 1 is set to 1 indicates the hub is disabled, or enabled if set to 0. | int |


### HubBillingInfoFormat

| Name | Description | Value |
|-|-|-|
| maxUnits | The maximum number of units can be used.  One unit is 10,000 Profiles and 100,000 Interactions. | int |
| minUnits | The minimum number of units will be billed. One unit is 10,000 Profiles and 100,000 Interactions. | int |
| skuName | The sku name. | string |


