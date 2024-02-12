```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataShare/accounts/shareSubscriptions@2021-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      expirationDate = "string"
      invitationId = "string"
      sourceShareLocation = "string"
    }
  })
}

```

### accounts/shareSubscriptions

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Properties on the share subscription | ShareSubscriptionProperties(required) |


### ShareSubscriptionProperties

| Name | Description | Value |
|-|-|-|
| expirationDate | The expiration date of the share subscription. | string |
| invitationId | The invitation id. | string (required) |
| sourceShareLocation | Source share location. | string (required) |


