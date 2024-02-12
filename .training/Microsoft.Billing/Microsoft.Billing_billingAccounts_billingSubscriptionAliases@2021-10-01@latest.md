```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/billingSubscriptionAliases@2021-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoRenew = "string"
      beneficiaryTenantId = "string"
      billingFrequency = "string"
      billingProfileId = "string"
      consumptionCostCenter = "string"
      customerId = "string"
      displayName = "string"
      invoiceSectionId = "string"
      productTypeId = "string"
      quantity = int
      skuId = "string"
      termDuration = "string"
    }
  })
}

```

### billingAccounts/billingSubscriptionAliases

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: billingAccounts |
| properties | Billing subscription alias properties. | BillingSubscriptionAliasProperties |


### BillingSubscriptionAliasProperties

| Name | Description | Value |
|-|-|-|
| autoRenew | Indicates whether auto renewal is turned on or off for a subscription. | 'Off''On' |
| beneficiaryTenantId | The provisioning tenant of the subscription. | string |
| billingFrequency | The billing frequency of the subscription in the ISO8601 format. Example: P1M, P3M, P1Y | string |
| billingProfileId | The ID of the billing profile to which the subscription is billed. This field is only applicable for Microsoft Customer Agreement billing accounts. | string |
| consumptionCostCenter | The cost center applied to the subscription. This field is only available for consumption subscriptions of Microsoft Customer Agreement Type billing accounts. | string |
| customerId | The ID of the customer for whom the subscription was created. The field is applicable only for Microsoft Partner Agreement billing accounts. | string |
| displayName | The name of the subscription. | string |
| invoiceSectionId | The ID of the invoice section to which the subscription is billed. The field is applicable only for Microsoft Partner Agreement billing accounts. | string |
| productTypeId | The ID of the product for which the subscription is purchased | string |
| quantity | The number of licenses purchased for the subscription | int |
| skuId | The SKU ID of the product for which the subscription is purchased. This field is only available for Microsoft Customer Agreement billing accounts. | string |
| termDuration | The duration for which you can use the subscription. Example P1Y and P1M | string |


