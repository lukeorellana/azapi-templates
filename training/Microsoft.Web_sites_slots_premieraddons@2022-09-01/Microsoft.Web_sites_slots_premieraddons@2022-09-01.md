```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/premieraddons@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      marketplaceOffer = "string"
      marketplacePublisher = "string"
      product = "string"
      sku = "string"
      vendor = "string"
    }
    kind = "string"
  })
}

```

### sites/slots/premieraddons

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource Location. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:slots |
| properties | PremierAddOn resource specific properties | PremierAddOnProperties |


### PremierAddOnProperties

| Name | Description | Value |
|-|-|-|
| marketplaceOffer | Premier add on Marketplace offer. | string |
| marketplacePublisher | Premier add on Marketplace publisher. | string |
| product | Premier add on Product. | string |
| sku | Premier add on SKU. | string |
| vendor | Premier add on Vendor. | string |


