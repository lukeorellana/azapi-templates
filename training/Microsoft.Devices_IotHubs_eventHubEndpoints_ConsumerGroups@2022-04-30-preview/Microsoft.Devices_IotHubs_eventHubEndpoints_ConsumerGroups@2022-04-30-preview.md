```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2022-04-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      name = "string"
    }
  })
}

```

### IotHubs/eventHubEndpoints/ConsumerGroups

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-50Valid characters:Alphanumerics, hyphens, periods, and underscores. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: eventHubEndpoints |
| properties | The EventHub consumer group name. | EventHubConsumerGroupNameOrEventHubConsumerGroupInfo...(required) |


### EventHubConsumerGroupNameOrEventHubConsumerGroupInfo...

| Name | Description | Value |
|-|-|-|
| name | EventHub consumer group name | string (required) |


