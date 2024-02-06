## Microsoft.Capacity/reservationOrders@2022-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Capacity/reservationOrders@2022-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliedScopes = [
        "string"
      ]
      appliedScopeType = "string"
      billingPlan = "string"
      billingScopeId = "string"
      displayName = "string"
      quantity = int
      renew = bool
      reservedResourceProperties = {
        instanceFlexibility = "string"
      }
      reservedResourceType = "string"
      term = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.Capacity/resourceProviders/locations/serviceLimits@2020-10-25

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Capacity/resourceProviders/locations/serviceLimits@2020-10-25"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      limit = int
      name = {
        value = "string"
      }
      resourceType = "string"
      unit = "string"
    }
  })
}

```

