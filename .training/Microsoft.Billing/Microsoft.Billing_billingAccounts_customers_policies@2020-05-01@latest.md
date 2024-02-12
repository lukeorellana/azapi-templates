```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Billing/billingAccounts/customers/policies@2020-05-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      viewCharges = "string"
    }
  })
}

```

### billingAccounts/customers/policies

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'default' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: customers |
| properties | The properties of a customer's policy. | CustomerPolicyProperties |


### CustomerPolicyProperties

| Name | Description | Value |
|-|-|-|
| viewCharges | The policy that controls whether the users in customer's organization can view charges at pay-as-you-go prices. | 'Allowed''NotAllowed' |


