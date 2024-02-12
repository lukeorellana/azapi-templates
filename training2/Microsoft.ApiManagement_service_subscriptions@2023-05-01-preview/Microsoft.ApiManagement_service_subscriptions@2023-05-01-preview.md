```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/subscriptions@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowTracing = bool
      displayName = "string"
      ownerId = "string"
      primaryKey = "string"
      scope = "string"
      secondaryKey = "string"
      state = "string"
    }
  })
}

```

### service/subscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics and hyphens.Start with letter and end with alphanumeric. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:service |
| properties | Subscription contract properties. | SubscriptionCreateParameterPropertiesOrSubscriptionC... |


### SubscriptionCreateParameterPropertiesOrSubscriptionC...

| Name | Description | Value |
|-|-|-|
| allowTracing | Determines whether tracing can be enabled | bool |
| displayName | Subscription name. | string (required) |
| ownerId | User (user id path) for whom subscription is being created in form /users/{userId} | string |
| primaryKey | Primary subscription key. If not specified during request key will be generated automatically. | string |
| scope | Scope like /products/{productId} or /apis or /apis/{apiId}. | string (required) |
| secondaryKey | Secondary subscription key. If not specified during request key will be generated automatically. | string |
| state | Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active â the subscription is active, * suspended â the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted â the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected â the subscription request has been denied by an administrator, * cancelled â the subscription has been cancelled by the developer or administrator, * expired â the subscription reached its expiration date and was deactivated. | 'active''cancelled''expired''rejected''submitted''suspended' |


