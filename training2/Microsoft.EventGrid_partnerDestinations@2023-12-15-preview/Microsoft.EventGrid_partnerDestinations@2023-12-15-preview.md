```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerDestinations@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      activationState = "string"
      endpointBaseUrl = "string"
      endpointServiceContext = "string"
      expirationTimeIfNotActivatedUtc = "string"
      messageForActivation = "string"
      partnerRegistrationImmutableId = "string"
    }
  })
}

```

### partnerDestinations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the Partner Destination. | PartnerDestinationProperties |


### PartnerDestinationProperties

| Name | Description | Value |
|-|-|-|
| activationState | Activation state of the partner destination. | 'Activated''NeverActivated' |
| endpointBaseUrl | Endpoint Base URL of the partner destination | string |
| endpointServiceContext | Endpoint context associated with this partner destination. | string |
| expirationTimeIfNotActivatedUtc | Expiration time of the partner destination. If this timer expires and the partner destination was never activated,the partner destination and corresponding channel are deleted. | string |
| messageForActivation | Context or helpful message that can be used during the approval process. | string |
| partnerRegistrationImmutableId | The immutable Id of the corresponding partner registration. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |


