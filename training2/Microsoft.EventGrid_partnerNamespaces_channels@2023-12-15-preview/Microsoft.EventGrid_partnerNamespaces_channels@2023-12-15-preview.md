```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/partnerNamespaces/channels@2023-12-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      channelType = "string"
      expirationTimeIfNotActivatedUtc = "string"
      messageForActivation = "string"
      partnerDestinationInfo = {
        azureSubscriptionId = "string"
        endpointServiceContext = "string"
        name = "string"
        resourceGroupName = "string"
        resourceMoveChangeHistory = [
          {
            azureSubscriptionId = "string"
            changedTimeUtc = "string"
            resourceGroupName = "string"
          }
        ]
        endpointType = "string"
        // For remaining properties, see PartnerDestinationInfo objects
      }
      partnerTopicInfo = {
        azureSubscriptionId = "string"
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
        name = "string"
        resourceGroupName = "string"
        source = "string"
      }
      provisioningState = "string"
      readinessState = "string"
    }
  })
}

```

### partnerNamespaces/channels

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:partnerNamespaces |
| properties | Properties of the Channel. | ChannelProperties |


### ChannelProperties

| Name | Description | Value |
|-|-|-|
| channelType | The type of the event channel which represents the direction flow of events. | 'PartnerDestination''PartnerTopic' |
| expirationTimeIfNotActivatedUtc | Expiration time of the channel. If this timer expires while the corresponding partner topic is never activated,the channel and corresponding partner topic are deleted. | string |
| messageForActivation | Context or helpful message that can be used during the approval process by the subscriber. | string |
| partnerDestinationInfo | This property should be populated when channelType is PartnerDestination and represents information about the partner destination resource corresponding to the channel. | PartnerDestinationInfo |
| partnerTopicInfo | This property should be populated when channelType is PartnerTopic and represents information about the partner topic resource corresponding to the channel. | PartnerTopicInfo |
| provisioningState | Provisioning state of the channel. | 'Canceled''Creating''Deleting''Failed''IdleDueToMirroredPartnerDestinationDeletion''IdleDueToMirroredPartnerTopicDeletion''Succeeded''Updating' |
| readinessState | The readiness state of the corresponding partner topic. | 'Activated''NeverActivated' |


### PartnerDestinationInfo

| Name | Description | Value |
|-|-|-|
| azureSubscriptionId | Azure subscription ID of the subscriber. The partner destination associated with the channel will becreated under this Azure subscription. | string |
| endpointServiceContext | Additional context of the partner destination endpoint. | string |
| name | Name of the partner destination associated with the channel. | string |
| resourceGroupName | Azure Resource Group of the subscriber. The partner destination associated with the channel will becreated under this resource group. | string |
| resourceMoveChangeHistory | Change history of the resource move. | ResourceMoveChangeHistory[] |
| endpointType | Set the object type | WebHook(required) |


### ResourceMoveChangeHistory

| Name | Description | Value |
|-|-|-|
| azureSubscriptionId | Azure subscription ID of the resource. | string |
| changedTimeUtc | UTC timestamp of when the resource was changed. | string |
| resourceGroupName | Azure Resource Group of the resource. | string |


### WebhookPartnerDestinationInfo

| Name | Description | Value |
|-|-|-|
| endpointType | Type of the endpoint for the partner destination | 'WebHook' (required) |
| properties | WebHook Properties of the partner destination. | WebhookPartnerDestinationProperties |


### WebhookPartnerDestinationProperties

| Name | Description | Value |
|-|-|-|
| clientAuthentication | Partner client authentication | PartnerClientAuthentication |
| endpointBaseUrl | The base URL that represents the endpoint of the partner destination. | string |
| endpointUrl | The URL that represents the endpoint of the partner destination. | string |


### PartnerClientAuthentication

| Name | Description | Value |
|-|-|-|
| clientAuthenticationType | Set the object type | AzureAD(required) |


### AzureADPartnerClientAuthentication

| Name | Description | Value |
|-|-|-|
| clientAuthenticationType | Type of client authentication | 'AzureAD' (required) |
| properties | AzureAD ClientAuthentication Properties | AzureADPartnerClientAuthenticationProperties |


### AzureADPartnerClientAuthenticationProperties

| Name | Description | Value |
|-|-|-|
| azureActiveDirectoryApplicationIdOrUri | The Azure Active Directory Application ID or URI to get the access token that will be included as the bearer token in delivery requests. | string |
| azureActiveDirectoryTenantId | The Azure Active Directory Tenant ID to get the access token that will be included as the bearer token in delivery requests. | string |


### PartnerTopicInfo

| Name | Description | Value |
|-|-|-|
| azureSubscriptionId | Azure subscription ID of the subscriber. The partner topic associated with the channel will becreated under this Azure subscription. | string |
| eventTypeInfo | Event Type Information for the partner topic. This information is provided by the publisher and can be used by thesubscriber to view different types of events that are published. | EventTypeInfo |
| name | Name of the partner topic associated with the channel. | string |
| resourceGroupName | Azure Resource Group of the subscriber. The partner topic associated with the channel will becreated under this resource group. | string |
| source | The source information is provided by the publisher to determine the scope or context from which the eventsare originating. This information can be used by the subscriber during the approval process of thecreated partner topic. | string |


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


