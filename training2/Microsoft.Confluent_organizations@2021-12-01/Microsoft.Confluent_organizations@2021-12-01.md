```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Confluent/organizations@2021-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      offerDetail = {
        id = "string"
        planId = "string"
        planName = "string"
        publisherId = "string"
        termUnit = "string"
      }
      userDetail = {
        emailAddress = "string"
        firstName = "string"
        lastName = "string"
      }
    }
  })
}

```

### organizations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of Organization resource | string |
| tags | Organization resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Organization resource properties | OrganizationResourceProperties(required) |


### OrganizationResourceProperties

| Name | Description | Value |
|-|-|-|
| offerDetail | Confluent offer detail | OfferDetail(required) |
| userDetail | Subscriber detail | UserDetail(required) |


### OfferDetail

| Name | Description | Value |
|-|-|-|
| id | Offer Id | string (required) |
| planId | Offer Plan Id | string (required) |
| planName | Offer Plan Name | string (required) |
| publisherId | Publisher Id | string (required) |
| termUnit | Offer Plan Term unit | string (required) |


### UserDetail

| Name | Description | Value |
|-|-|-|
| emailAddress | Email address | string (required) |
| firstName | First name | string |
| lastName | Last name | string |


