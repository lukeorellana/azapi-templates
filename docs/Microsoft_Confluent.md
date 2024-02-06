## Microsoft.Confluent/agreements@2021-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Confluent/agreements@2021-12-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accepted = bool
      licenseTextLink = "string"
      plan = "string"
      privacyPolicyLink = "string"
      product = "string"
      publisher = "string"
      retrieveDatetime = "string"
      signature = "string"
    }
  })
}

```

### agreements

| Name | Description | Value |
|-|-|-|
| name | The resource name | 'default' |
| properties | Represents the properties of the resource. | ConfluentAgreementProperties |


### ConfluentAgreementProperties

| Name | Description | Value |
|-|-|-|
| accepted | If any version of the terms have been accepted, otherwise false. | bool |
| licenseTextLink | Link to HTML with Microsoft and Publisher terms. | string |
| plan | Plan identifier string. | string |
| privacyPolicyLink | Link to the privacy policy of the publisher. | string |
| product | Product identifier string. | string |
| publisher | Publisher identifier string. | string |
| retrieveDatetime | Date and time in UTC of when the terms were accepted. This is empty if Accepted is false. | string |
| signature | Terms signature. | string |
## Microsoft.Confluent/organizations@2021-12-01

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
