```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/billingProfiles/policies@2020-05-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      marketplacePurchases = "string"
      reservationPurchases = "string"
      viewCharges = "string"
    }
  })
}

```

### billingAccounts/billingProfiles/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:billingProfiles |
| properties | The properties of a policy. | PolicyProperties |


### PolicyProperties

| Name | Description | Value |
|-|-|-|
| marketplacePurchases | The policy that controls whether Azure marketplace purchases are allowed for a billing profile. | 'AllAllowed''NotAllowed''OnlyFreeAllowed' |
| reservationPurchases | The policy that controls whether Azure reservation purchases are allowed for a billing profile. | 'Allowed''NotAllowed' |
| viewCharges | The policy that controls whether users with Azure RBAC access to a subscription can view its charges. | 'Allowed''NotAllowed' |


