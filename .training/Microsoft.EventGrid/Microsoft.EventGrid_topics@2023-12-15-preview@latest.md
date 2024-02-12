```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventGrid/topics@2023-12-15-preview"
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
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

### topics

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 3-50Valid characters:Alphanumerics and hyphens. |
| location | Location of the resource. | string (required) |
| tags | Tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| sku | The Sku pricing tier for the topic. | ResourceSku |
| kind | Kind of the resource. | 'Azure''AzureArc' |
| extendedLocation | Extended location of the resource. | ExtendedLocation |
| identity | Identity information for the resource. | IdentityInfo |
| properties | Properties of the topic. | TopicProperties |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | Fully qualified name of the extended location. | string |
| type | Type of the extended location. | string |


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


### TopicProperties

| Name | Description | Value |
|-|-|-|
| dataResidencyBoundary | Data Residency Boundary of the resource. | 'WithinGeopair''WithinRegion' |
| disableLocalAuth | This boolean is used to enable or disable local auth. Default value is false. When the property is set to true, only AAD token will be used to authenticate if user is allowed to publish to the topic. | bool |
| eventTypeInfo | Event Type Information for the user topic. This information is provided by the publisher and can be used by thesubscriber to view different types of events that are published. | EventTypeInfo |
| inboundIpRules | This can be used to restrict traffic from specific IPs instead of all IPs. Note: These are considered only if PublicNetworkAccess is enabled. | InboundIpRule[] |
| inputSchema | This determines the format that Event Grid should expect for incoming events published to the topic. | 'CloudEventSchemaV1_0''CustomEventSchema''EventGridSchema' |
| inputSchemaMapping | This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema. | InputSchemaMapping |
| minimumTlsVersionAllowed | Minimum TLS version of the publisher allowed to publish to this topic | '1.0''1.1''1.2' |
| publicNetworkAccess | This determines if traffic is allowed over public network. By default it is enabled.You can further restrict to specific IPs by configuring {seealso cref="P:Microsoft.Azure.Events.ResourceProvider.Common.Contracts.TopicProperties.InboundIpRules" /} | 'Disabled''Enabled''SecuredByPerimeter' |


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


