```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerTopics@2023-12-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      activationState = "string"
      eventTypeInfo = {
        inlineEventTypes = {
          {customized property} = {
            dataSchemaUrl = "string"
            description = "string"
            displayName = "string"
            documentationUrl = "string"
          }
        }
        kind = "Inline"
      }
      expirationTimeIfNotActivatedUtc = "string"
      messageForActivation = "string"
      partnerRegistrationImmutableId = "string"
      partnerTopicFriendlyDescription = "string"
      source = "string"
    }
  })
}

```

### partnerTopics

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| identity | Identity information for the Partner Topic resource. | IdentityInfo |
| properties | Properties of the Partner Topic. | PartnerTopicProperties |


### IdentityInfo

| Name | Description | Value |
|-|-|-|
| principalId | The principal ID of resource identity. | string |
| tenantId | The tenant ID of resource. | string |
| type | The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identity. | 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.This property is currently not used and reserved for future usage. | IdentityInfoUserAssignedIdentities |


### IdentityInfoUserAssignedIdentities

| Name | Description | Value |
|-|-|-|
| {customized property} |  | UserIdentityProperties |


### UserIdentityProperties

| Name | Description | Value |
|-|-|-|
| clientId | The client id of user assigned identity. | string |
| principalId | The principal id of user assigned identity. | string |


### PartnerTopicProperties

| Name | Description | Value |
|-|-|-|
| activationState | Activation state of the partner topic. | 'Activated''Deactivated''NeverActivated' |
| eventTypeInfo | Event Type information from the corresponding event channel. | EventTypeInfo |
| expirationTimeIfNotActivatedUtc | Expiration time of the partner topic. If this timer expires while the partner topic is still never activated,the partner topic and corresponding event channel are deleted. | string |
| messageForActivation | Context or helpful message that can be used during the approval process by the subscriber. | string |
| partnerRegistrationImmutableId | The immutableId of the corresponding partner registration. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| partnerTopicFriendlyDescription | Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer. | string |
| source | Source associated with this partner topic. This represents a unique partner resource. | string |


### EventTypeInfo

| Name | Description | Value |
|-|-|-|
| inlineEventTypes | A collection of inline event types for the resource. The inline event type keys are of type string which represents the name of the event.An example of a valid inline event name is "Contoso.OrderCreated".The inline event type values are of type InlineEventProperties and will contain additional information for every inline event type. | EventTypeInfoInlineEventTypes |
| kind | The kind of event type used. | 'Inline' |


### EventTypeInfoInlineEventTypes

| Name | Description | Value |
|-|-|-|
| {customized property} |  | InlineEventProperties |


### InlineEventProperties

| Name | Description | Value |
|-|-|-|
| dataSchemaUrl | The dataSchemaUrl for the inline event. | string |
| description | The description for the inline event. | string |
| displayName | The displayName for the inline event. | string |
| documentationUrl | The documentationUrl for the inline event. | string |


