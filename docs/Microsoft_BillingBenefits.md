## Microsoft.BillingBenefits/reservationOrderAliases@2022-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BillingBenefits/reservationOrderAliases@2022-11-01"
  name = "string"
  location = "string"
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
      displayName = "string"
      quantity = int
      renew = bool
      reservedResourceProperties = {
        instanceFlexibility = "string"
      }
      reservedResourceType = "string"
      reviewDateTime = "string"
      term = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.BillingBenefits/savingsPlanOrderAliases@2022-11-01

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

