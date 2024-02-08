```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AgFoodPlatform/farmBeats/solutions@2021-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      marketplacePublisherId = "string"
      offerId = "string"
      planId = "string"
      saasSubscriptionId = "string"
      saasSubscriptionName = "string"
      termId = "string"
    }
  })
}

```

### farmBeats/solutions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:farmBeats |
| properties | Solution resource properties. | SolutionProperties |


### SolutionProperties

| Name | Description | Value |
|-|-|-|
| marketplacePublisherId | SaaS application Publisher Id. | string (required) |
| offerId | SaaS application Offer Id. | string (required) |
| planId | SaaS application Plan Id. | string (required) |
| saasSubscriptionId | SaaS subscriptionId of the installed SaaS application. | string (required) |
| saasSubscriptionName | SaaS subscription name of the installed SaaS application. | string (required) |
| termId | SaaS application Term Id. | string (required) |


