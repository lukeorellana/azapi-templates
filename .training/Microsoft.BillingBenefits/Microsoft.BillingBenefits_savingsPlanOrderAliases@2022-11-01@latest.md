```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BillingBenefits/savingsPlanOrderAliases@2022-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliedScopeProperties = {
        displayName = "string"
        managementGroupId = "string"
        resourceGroupId = "string"
        subscriptionId = "string"
        tenantId = "string"
      }
      appliedScopeType = "string"
      billingPlan = "P1M"
      billingScopeId = "string"
      commitment = {
        amount = int
        currencyCode = "string"
        grain = "Hourly"
      }
      displayName = "string"
      term = "string"
    }
    sku = {
      name = "string"
    }
    kind = "string"
  })
}

```

### savingsPlanOrderAliases

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| sku | Savings plan SKU | Sku(required) |
| kind | Resource provider kind | string |
| properties | Savings plan order alias properties | SavingsPlanOrderAliasProperties |


### SavingsPlanOrderAliasProperties

| Name | Description | Value |
|-|-|-|
| appliedScopeProperties | Properties specific to applied scope type. Not required if not applicable. | AppliedScopeProperties |
| appliedScopeType | Type of the Applied Scope. | 'ManagementGroup''Shared''Single' |
| billingPlan | Represents the billing plan in ISO 8601 format. Required only for monthly billing plans. | 'P1M' |
| billingScopeId | Subscription that will be charged for purchasing the benefit | string |
| commitment | Commitment towards the benefit. | Commitment |
| displayName | Display name | string |
| term | Represent benefit term in ISO 8601 format. | 'P1Y''P3Y''P5Y' |


### AppliedScopeProperties

| Name | Description | Value |
|-|-|-|
| displayName | Display name | string |
| managementGroupId | Fully-qualified identifier of the management group where the benefit must be applied. | string |
| resourceGroupId | Fully-qualified identifier of the resource group. | string |
| subscriptionId | Fully-qualified identifier of the subscription. | string |
| tenantId | Tenant ID where the benefit is applied. | string |


### Commitment

| Name | Description | Value |
|-|-|-|
| amount |  | int |
| currencyCode | The ISO 4217 3-letter currency code for the currency used by this purchase record. | string |
| grain | Commitment grain. | 'Hourly' |


### Sku

| Name | Description | Value |
|-|-|-|
| name | Name of the SKU to be applied | string |


