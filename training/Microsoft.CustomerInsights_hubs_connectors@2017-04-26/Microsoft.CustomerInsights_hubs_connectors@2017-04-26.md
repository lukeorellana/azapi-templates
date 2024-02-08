```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/connectors@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectorName = "string"
      connectorProperties = {}
      connectorType = "string"
      description = "string"
      displayName = "string"
      isInternal = bool
    }
  })
}

```

### hubs/connectors

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-128Valid characters:Alphanumerics and underscores.Start with letter. |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:hubs |
| properties | Properties of connector. | Connector |


### Connector

| Name | Description | Value |
|-|-|-|
| connectorName | Name of the connector. | string |
| connectorProperties | The connector properties. | object (required) |
| connectorType | Type of connector. | 'AzureBlob''CRM''ExchangeOnline''None''Outbound''Salesforce' (required) |
| description | Description of the connector. | string |
| displayName | Display name of the connector. | string |
| isInternal | If this is an internal connector. | bool |


