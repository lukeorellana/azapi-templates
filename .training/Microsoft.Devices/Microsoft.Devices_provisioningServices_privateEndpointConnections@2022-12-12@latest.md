```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/provisioningServices/privateEndpointConnections@2022-12-12"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
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

### provisioningServices/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:provisioningServices |
| properties | The properties of a private endpoint connection | PrivateEndpointConnectionProperties(required) |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The private endpoint property of a private endpoint connection | PrivateEndpoint |
| privateLinkServiceConnectionState | The current state of a private endpoint connection | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Actions required for a private endpoint connection | string |
| description | The description for the current state of a private endpoint connection | string (required) |
| status | The status of a private endpoint connection | 'Approved''Disconnected''Pending''Rejected' (required) |


