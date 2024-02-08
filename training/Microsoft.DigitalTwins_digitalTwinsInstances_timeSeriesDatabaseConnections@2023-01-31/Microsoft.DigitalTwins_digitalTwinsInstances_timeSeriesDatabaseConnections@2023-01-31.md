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


