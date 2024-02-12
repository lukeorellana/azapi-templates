```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/promotions@2020-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliedScopes = [
        "string"
      ]
      displayName = "string"
      orderId = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### promotions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| sku |  | PromotionCreateSkuNameRequestProperties |
| properties |  | PromotionCreateRequestPropertiesOrPromotionResponseP... |


### PromotionCreateRequestPropertiesOrPromotionResponseP...

| Name | Description | Value |
|-|-|-|
| appliedScopes | List of subscriptions getting the benefit of the promotion. | string[] |
| displayName | Friendly name for user to easily identified the promotion. | string |
| orderId | Unique Id for the promotion order. | string |


### PromotionCreateSkuNameRequestProperties

| Name | Description | Value |
|-|-|-|
| name | SKU Name of the promotion to activate | string |


