```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Subscription/subscriptionDefinitions@2017-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      etag = "string"
      offerType = "string"
      subscriptionDisplayName = "string"
    }
  })
}

```

### subscriptionDefinitions

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | the subscription definition properties | SubscriptionDefinitionProperties |


### SubscriptionDefinitionProperties

| Name | Description | Value |
|-|-|-|
| etag | The etag the subscription definition. | string |
| offerType | The offer type of the subscription. For example, MS-AZR-0017P (EnterpriseAgreement) and MS-AZR-0148P (EnterpriseAgreement devTest) are available. | string |
| subscriptionDisplayName | The display name of the subscription. | string |


