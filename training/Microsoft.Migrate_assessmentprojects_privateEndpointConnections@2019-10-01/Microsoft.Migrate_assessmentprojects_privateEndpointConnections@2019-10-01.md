```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/assessmentprojects/privateEndpointConnections@2019-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
    eTag = "string"
  })
}

```

### assessmentprojects/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:assessmentprojects |
| eTag | For optimistic concurrency control. | string |
| properties | Properties of the private endpoint endpoint connection. | PrivateEndpointConnectionProperties(required) |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | State of the private endpoint connection. | PrivateLinkServiceConnectionState |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required on the private endpoint connection. | string |
| description | Description of the private endpoint connection. | string |
| status | Connection status of the private endpoint connection. | 'Approved''Disconnected''Pending''Rejected' |


