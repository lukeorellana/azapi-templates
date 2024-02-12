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


