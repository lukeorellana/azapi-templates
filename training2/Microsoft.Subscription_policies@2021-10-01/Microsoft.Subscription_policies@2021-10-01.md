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

### policies

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | For Bicep:tenant(). |
| blockSubscriptionsIntoTenant | Blocks the entering of subscriptions into user's tenant. | bool |
| blockSubscriptionsLeavingTenant | Blocks the leaving of subscriptions from user's tenant. | bool |
| exemptedPrincipals | List of user objectIds that are exempted from the set subscription tenant policies for the user's tenant. | string[] |


