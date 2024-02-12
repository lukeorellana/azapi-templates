```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerRegistrations@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      partnerRegistrationImmutableId = "string"
    }
  })
}

```

### partnerRegistrations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the partner registration. | PartnerRegistrationProperties |


### PartnerRegistrationProperties

| Name | Description | Value |
|-|-|-|
| partnerRegistrationImmutableId | The immutableId of the corresponding partner registration.Note: This property is marked for deprecation and is not supported in any future GA API version | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |


