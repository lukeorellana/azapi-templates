## Microsoft.DigitalTwins/digitalTwinsInstances@2023-01-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DigitalTwins/digitalTwinsInstances@2023-01-31"
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
      privateEndpointConnections = [
        {
          properties = {
            groupIds = [
              "string"
            ]
            privateEndpoint = {}
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
          }
        }
      ]
      publicNetworkAccess = "string"
    }
  })
}

```

### digitalTwinsInstances

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The resource location. | string (required) |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| identity | The managed identity for the DigitalTwinsInstance. | DigitalTwinsIdentity |
| properties | DigitalTwins instance properties. | DigitalTwinsProperties |


### DigitalTwinsIdentity

| Name | Description | Value |
|-|-|-|
| type | The type of Managed Identity used by the DigitalTwinsInstance. | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form:'/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.. | object |


### DigitalTwinsProperties

| Name | Description | Value |
|-|-|-|
| privateEndpointConnections | The private endpoint connections. | PrivateEndpointConnection[] |
| publicNetworkAccess | Public network access for the DigitalTwinsInstance. | 'Disabled''Enabled' |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| properties | The connection properties. | ConnectionProperties(required) |


### ConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | The list of group ids for the private endpoint connection. | string[] |
| privateEndpoint | The private endpoint. | PrivateEndpoint |
| privateLinkServiceConnectionState | The connection state. | ConnectionPropertiesPrivateLinkServiceConnectionStat... |


### ConnectionPropertiesPrivateLinkServiceConnectionStat...

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required for a private endpoint connection. | string |
| description | The description for the current state of a private endpoint connection. | string (required) |
| status | The status of a private endpoint connection. | 'Approved''Disconnected''Pending''Rejected' (required) |
## Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2023-01-31

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
## Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections@2023-01-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections@2023-01-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### digitalTwinsInstances/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:digitalTwinsInstances |
| properties | The connection properties. | ConnectionProperties(required) |


### ConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupIds | The list of group ids for the private endpoint connection. | string[] |
| privateEndpoint | The private endpoint. | PrivateEndpoint |
| privateLinkServiceConnectionState | The connection state. | ConnectionPropertiesPrivateLinkServiceConnectionStat... |


### ConnectionPropertiesPrivateLinkServiceConnectionStat...

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required for a private endpoint connection. | string |
| description | The description for the current state of a private endpoint connection. | string (required) |
| status | The status of a private endpoint connection. | 'Approved''Disconnected''Pending''Rejected' (required) |
## Microsoft.DigitalTwins/digitalTwinsInstances/timeSeriesDatabaseConnections@2023-01-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DigitalTwins/digitalTwinsInstances/timeSeriesDatabaseConnections@2023-01-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      identity = {
        type = "string"
        userAssignedIdentity = "string"
      }
      connectionType = "string"
      // For remaining properties, see TimeSeriesDatabaseConnectionProperties objects
    }
  })
}

```

### digitalTwinsInstances/timeSeriesDatabaseConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:digitalTwinsInstances |
| properties | Properties of a specific time series database connection. | TimeSeriesDatabaseConnectionProperties |


### TimeSeriesDatabaseConnectionProperties

| Name | Description | Value |
|-|-|-|
| identity | Managed identity properties for the time series database connection resource. | ManagedIdentityReference |
| connectionType | Set the object type | AzureDataExplorer(required) |


### ManagedIdentityReference

| Name | Description | Value |
|-|-|-|
| type | The type of managed identity used. | 'SystemAssigned''UserAssigned' |
| userAssignedIdentity | The user identity ARM resource id if the managed identity type is 'UserAssigned'. | string |


### AzureDataExplorerConnectionProperties

| Name | Description | Value |
|-|-|-|
| connectionType | The type of time series connection resource. | 'AzureDataExplorer' (required) |
| adxDatabaseName | The name of the Azure Data Explorer database. | string (required) |
| adxEndpointUri | The URI of the Azure Data Explorer endpoint. | string (required) |
| adxRelationshipLifecycleEventsTableName | The name of the Azure Data Explorer table used for recording relationship lifecycle events. The table will not be created if this property is left unspecified. | string |
| adxResourceId | The resource ID of the Azure Data Explorer cluster. | string (required) |
| adxTableName | The name of the Azure Data Explorer table used for storing updates to properties of twins and relationships. Defaults to AdtPropertyEvents. | string |
| adxTwinLifecycleEventsTableName | The name of the Azure Data Explorer table used for recording twin lifecycle events. The table will not be created if this property is left unspecified. | string |
| eventHubConsumerGroup | The EventHub consumer group to use when ADX reads from EventHub. Defaults to $Default. | string |
| eventHubEndpointUri | The URL of the EventHub namespace for identity-based authentication. It must include the protocol sb:// | string (required) |
| eventHubEntityPath | The EventHub name in the EventHub namespace for identity-based authentication. | string (required) |
| eventHubNamespaceResourceId | The resource ID of the EventHub namespace. | string (required) |
| recordPropertyAndItemRemovals | Specifies whether or not to record twin / relationship property and item removals, including removals of indexed or keyed values (such as map entries, array elements, etc.). This feature is de-activated unless explicitly set to 'true'. Setting this property to 'true' will generate an additional column in the property events table in ADX. | 'false''true' |
