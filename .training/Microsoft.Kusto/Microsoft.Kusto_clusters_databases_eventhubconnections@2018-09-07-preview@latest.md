```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases/eventhubconnections@2018-09-07-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      consumerGroup = "string"
      dataFormat = "string"
      eventHubResourceId = "string"
      mappingRuleName = "string"
      tableName = "string"
    }
  })
}

```

### clusters/databases/eventhubconnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:databases |
| properties | Class representing the Kusto event hub connection properties. | EventHubConnectionProperties |


### EventHubConnectionProperties

| Name | Description | Value |
|-|-|-|
| consumerGroup | The event hub consumer group. | string (required) |
| dataFormat | The data format of the message. Optionally the data format can be added to each message. | 'CSV''JSON''MULTIJSON' |
| eventHubResourceId | The resource ID of the event hub to be used to create a data connection. | string (required) |
| mappingRuleName | The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. | string |
| tableName | The table where the data should be ingested. Optionally the table information can be added to each message. | string |


