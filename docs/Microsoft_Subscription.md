## Microsoft.Subscription/aliases@2021-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Subscription/aliases@2021-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      additionalProperties = {
        managementGroupId = "string"
        subscriptionOwnerId = "string"
        subscriptionTenantId = "string"
        tags = {}
      }
      billingScope = "string"
      displayName = "string"
      resellerId = "string"
      subscriptionId = "string"
      workload = "string"
    }
  })
}

```

## Microsoft.Subscription/policies@2021-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Subscription/policies@2021-10-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    blockSubscriptionsIntoTenant = bool
    blockSubscriptionsLeavingTenant = bool
    exemptedPrincipals = [
      "string"
    ]
  })
}

```

## Microsoft.Subscription/subscriptionDefinitions@2017-11-01-preview

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

