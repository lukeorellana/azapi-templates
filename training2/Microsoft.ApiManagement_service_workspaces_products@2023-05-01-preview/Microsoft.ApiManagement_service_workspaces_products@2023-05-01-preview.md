```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ApiManagement/service/workspaces/products@2023-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      approvalRequired = bool
      description = "string"
      displayName = "string"
      state = "string"
      subscriptionRequired = bool
      subscriptionsLimit = int
      terms = "string"
    }
  })
}

```

### service/workspaces/products

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | Product entity contract properties. | ProductContractProperties |


### ProductContractProperties

| Name | Description | Value |
|-|-|-|
| approvalRequired | whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the productâs APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can any of the productâs APIs. Can be present only if subscriptionRequired property is present and has a value of false. | bool |
| description | Product description. May include HTML formatting tags. | string |
| displayName | Product name. | string (required) |
| state | whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished. | 'notPublished''published' |
| subscriptionRequired | Whether a product subscription is required for accessing APIs included in this product. If true, the product is referred to as "protected" and a valid subscription key is required for a request to an API included in the product to succeed. If false, the product is referred to as "open" and requests to an API included in the product can be made without a subscription key. If property is omitted when creating a new product it's value is assumed to be true. | bool |
| subscriptionsLimit | Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false. | int |
| terms | Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process. | string |

