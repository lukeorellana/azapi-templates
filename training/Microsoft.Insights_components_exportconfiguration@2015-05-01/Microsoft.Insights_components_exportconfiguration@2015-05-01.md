```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/components/exportconfiguration@2015-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    DestinationAccountId = "string"
    DestinationAddress = "string"
    DestinationStorageLocationId = "string"
    DestinationStorageSubscriptionId = "string"
    DestinationType = "string"
    IsEnabled = "string"
    NotificationQueueEnabled = "string"
    NotificationQueueUri = "string"
    RecordTypes = "string"
  })
}

```

### components/exportconfiguration

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:components |
| DestinationAccountId | The name of destination storage account. | string |
| DestinationAddress | The SAS URL for the destination storage container. It must grant write permission. | string |
| DestinationStorageLocationId | The location ID of the destination storage container. | string |
| DestinationStorageSubscriptionId | The subscription ID of the destination storage container. | string |
| DestinationType | The Continuous Export destination type. This has to be 'Blob'. | string |
| IsEnabled | Set to 'true' to create a Continuous Export configuration as enabled, otherwise set it to 'false'. | string |
| NotificationQueueEnabled | Deprecated | string |
| NotificationQueueUri | Deprecated | string |
| RecordTypes | The document types to be exported, as comma separated values. Allowed values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'. | string |


