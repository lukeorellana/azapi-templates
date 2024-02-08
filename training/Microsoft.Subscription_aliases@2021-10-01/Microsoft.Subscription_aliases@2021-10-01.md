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

### aliases

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | For Bicep:tenant(). |
| properties | Put alias request properties. | PutAliasRequestPropertiesOrSubscriptionAliasResponse... |


### PutAliasRequestPropertiesOrSubscriptionAliasResponse...

| Name | Description | Value |
|-|-|-|
| additionalProperties | Put alias request additional properties. | PutAliasRequestAdditionalProperties |
| billingScope | Billing scope of the subscription.For CustomerLed and FieldLed - /billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}For PartnerLed - /billingAccounts/{billingAccountName}/customers/{customerName}For Legacy EA - /billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName} | string |
| displayName | The friendly name of the subscription. | string |
| resellerId | Reseller Id | string |
| subscriptionId | This parameter can be used to create alias for existing subscription Id | string |
| workload | The workload type of the subscription. It can be either Production or DevTest. | 'DevTest''Production' |


### PutAliasRequestAdditionalProperties

| Name | Description | Value |
|-|-|-|
| managementGroupId | Management group Id for the subscription. | string |
| subscriptionOwnerId | Owner Id of the subscription | string |
| subscriptionTenantId | Tenant Id of the subscription | string |
| tags | Tags for the subscription | object |


