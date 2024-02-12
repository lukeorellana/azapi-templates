```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/domains@2023-12-15-preview"
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
      autoCreateTopicWithFirstSubscription = bool
      autoDeleteTopicWithLastSubscription = bool
      dataResidencyBoundary = "string"
      disableLocalAuth = bool
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
      inboundIpRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      inputSchema = "string"
      inputSchemaMapping = {
        inputSchemaMappingType = "string"
        // For remaining properties, see InputSchemaMapping objects
      }
      minimumTlsVersionAllowed = "string"
      publicNetworkAccess = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### domains

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-50Valid characters:Alphanumerics and hyphens. |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | The Sku pricing tier for the Event Grid Domain resource. | ResourceSku |
| identity | Identity information for the Event Grid Domain resource. | IdentityInfo |
| properties | Properties of the Event Grid Domain resource. | DomainProperties |


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


### DomainProperties

| Name | Description | Value |
|-|-|-|
| autoCreateTopicWithFirstSubscription | This Boolean is used to specify the creation mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.In this context, creation of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.When this property is null or set to true, Event Grid is responsible of automatically creating the domain topic when the first event subscription iscreated at the scope of the domain topic. If this property is set to false, then creating the first event subscription will require creating a domain topicby the user. The self-management mode can be used if the user wants full control of when the domain topic is created, while auto-managed mode provides theflexibility to perform less operations and manage fewer resources by the user. Also, note that in auto-managed creation mode, user is allowed to create thedomain topic on demand if needed. | bool |
| autoDeleteTopicWithLastSubscription | This Boolean is used to specify the deletion mechanism for 'all' the Event Grid Domain Topics associated with this Event Grid Domain resource.In this context, deletion of domain topic can be auto-managed (when true) or self-managed (when false). The default value for this property is true.When this property is set to true, Event Grid is responsible of automatically deleting the domain topic when the last event subscription at the scopeof the domain topic is deleted. If this property is set to false, then the user needs to manually delete the domain topic when it is no longer needed(e.g., when last event subscription is deleted and the resource needs to be cleaned up). The self-management mode can be used if the user wants fullcontrol of when the domain topic needs to be deleted, while auto-managed mode provides the flexibility to perform less operations and manage fewerresources by the user. | bool |
| dataResidencyBoundary | Data Residency Boundary of the resource. | 'WithinGeopair''WithinRegion' |
| disableLocalAuth | This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the domain. | bool |
| eventTypeInfo | Event Type Information for the domain. This information is provided by the publisher and can be used by thesubscriber to view different types of events that are published. | EventTypeInfo |
| inboundIpRules | This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled. | InboundIpRule[] |
| inputSchema | This determines the format that Event Grid should expect for incoming events published to the Event Grid Domain Resource. | 'CloudEventSchemaV1_0''CustomEventSchema''EventGridSchema' |
| inputSchemaMapping | Information about the InputSchemaMapping which specified the info about mapping event payload. | InputSchemaMapping |
| minimumTlsVersionAllowed | Minimum TLS version of the publisher allowed to publish to this domain | '1.0''1.1''1.2' |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled.You can further restrict to specific IPs by configuring {seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.DomainProperties.InboundIpRules" /} | 'Disabled''Enabled''SecuredByPerimeter' |


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


### InboundIpRule

| Name | Description | Value |
|-|-|-|
| action | Action to perform based on the match or no match of the IpMask. | 'Allow' |
| ipMask | IP Address in CIDR notation e.g., 10.0.0.0/8. | string |


### InputSchemaMapping

| Name | Description | Value |
|-|-|-|
| inputSchemaMappingType | Set the object type | Json(required) |


### JsonInputSchemaMapping

| Name | Description | Value |
|-|-|-|
| inputSchemaMappingType | Type of the custom mapping | 'Json' (required) |
| properties | JSON Properties of the input schema mapping | JsonInputSchemaMappingProperties |


### JsonInputSchemaMappingProperties

| Name | Description | Value |
|-|-|-|
| dataVersion | The mapping information for the DataVersion property of the Event Grid Event. | JsonFieldWithDefault |
| eventTime | The mapping information for the EventTime property of the Event Grid Event. | JsonField |
| eventType | The mapping information for the EventType property of the Event Grid Event. | JsonFieldWithDefault |
| id | The mapping information for the Id property of the Event Grid Event. | JsonField |
| subject | The mapping information for the Subject property of the Event Grid Event. | JsonFieldWithDefault |
| topic | The mapping information for the Topic property of the Event Grid Event. | JsonField |


### JsonFieldWithDefault

| Name | Description | Value |
|-|-|-|
| defaultValue | The default value to be used for mapping when a SourceField is not provided or if there's no property with the specified name in the published JSON event payload. | string |
| sourceField | Name of a field in the input event schema that's to be used as the source of a mapping. | string |


### JsonField

| Name | Description | Value |
|-|-|-|
| sourceField | Name of a field in the input event schema that's to be used as the source of a mapping. | string |


### ResourceSku

| Name | Description | Value |
|-|-|-|
| name | The Sku name of the resource. The possible values are: Basic or Premium. | 'Basic''Premium' |


