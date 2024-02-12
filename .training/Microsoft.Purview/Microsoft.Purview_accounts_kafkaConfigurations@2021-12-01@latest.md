```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Purview/accounts/kafkaConfigurations@2021-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      consumerGroup = "string"
      credentials = {
        identityId = "string"
        type = "string"
      }
      eventHubPartitionId = "string"
      eventHubResourceId = "string"
      eventHubType = "string"
      eventStreamingState = "string"
      eventStreamingType = "string"
    }
  })
}

```

### accounts/kafkaConfigurations

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | Gets or sets the kafka configuration properties. | KafkaConfigurationProperties |


### KafkaConfigurationProperties

| Name | Description | Value |
|-|-|-|
| consumerGroup | Consumer group for hook event hub. | string |
| credentials | Credentials to access event hub. | Credentials |
| eventHubPartitionId | Optional partition Id for notification event hub. If not set, all partitions will be leveraged. | string |
| eventHubResourceId |  | string |
| eventHubType | The event hub type. | 'Hook''Notification' |
| eventStreamingState | The state of the event streaming service | 'Disabled''Enabled' |
| eventStreamingType | The event streaming service type | 'Azure''Managed''None' |


### Credentials

| Name | Description | Value |
|-|-|-|
| identityId | Identity identifier for UserAssign type. | string |
| type | Identity Type. | 'None''SystemAssigned''UserAssigned' |


