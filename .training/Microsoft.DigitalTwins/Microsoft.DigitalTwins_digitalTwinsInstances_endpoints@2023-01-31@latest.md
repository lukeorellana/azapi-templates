```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2023-01-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationType = "string"
      deadLetterSecret = "string"
      deadLetterUri = "string"
      identity = {
        type = "string"
        userAssignedIdentity = "string"
      }
      endpointType = "string"
      // For remaining properties, see DigitalTwinsEndpointResourceProperties objects
    }
  })
}

```

### digitalTwinsInstances/endpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:digitalTwinsInstances |
| properties | DigitalTwinsInstance endpoint resource properties. | DigitalTwinsEndpointResourceProperties(required) |


### DigitalTwinsEndpointResourceProperties

| Name | Description | Value |
|-|-|-|
| authenticationType | Specifies the authentication type being used for connecting to the endpoint. Defaults to 'KeyBased'. If 'KeyBased' is selected, a connection string must be specified (at least the primary connection string). If 'IdentityBased' is select, the endpointUri and entityPath properties must be specified. | 'IdentityBased''KeyBased' |
| deadLetterSecret | Dead letter storage secret for key-based authentication. Will be obfuscated during read. | string |
| deadLetterUri | Dead letter storage URL for identity-based authentication. | string |
| identity | Managed identity properties for the endpoint. | ManagedIdentityReference |
| endpointType | Set the object type | EventGridEventHubServiceBus(required) |


### ManagedIdentityReference

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity used. | 'SystemAssigned''UserAssigned' |
| userAssignedIdentity | The user identity ARM resource id if the managed identity type is 'UserAssigned'. | string |


### EventGrid

| Name | Description | Value |
|-|-|-|
| endpointType | The type of Digital Twins endpoint | 'EventGrid' (required) |
| accessKey1 | EventGrid secondary accesskey. Will be obfuscated during read. | string (required) |
| accessKey2 | EventGrid secondary accesskey. Will be obfuscated during read. | string |
| TopicEndpoint | EventGrid Topic Endpoint. | string (required) |


### EventHub

| Name | Description | Value |
|-|-|-|
| endpointType | The type of Digital Twins endpoint | 'EventHub' (required) |
| connectionStringPrimaryKey | PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read. | string |
| connectionStringSecondaryKey | SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read. | string |
| endpointUri | The URL of the EventHub namespace for identity-based authentication. It must include the protocol 'sb://'. | string |
| entityPath | The EventHub name in the EventHub namespace for identity-based authentication. | string |


### ServiceBus

| Name | Description | Value |
|-|-|-|
| endpointType | The type of Digital Twins endpoint | 'ServiceBus' (required) |
| endpointUri | The URL of the ServiceBus namespace for identity-based authentication. It must include the protocol 'sb://'. | string |
| entityPath | The ServiceBus Topic name for identity-based authentication. | string |
| primaryConnectionString | PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read. | string |
| secondaryConnectionString | SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read. | string |


