```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/privateEndpointConnections@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### registries/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:registries |
| properties | The properties of a private endpoint connection. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private endpoint. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | This is private endpoint resource created with Microsoft.Network resource provider. | string |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | 'None''Recreate' |
| description | The description for connection status. For example if connection is rejected it can indicate reason for rejection. | string |
| status | The private link service connection status. | 'Approved''Disconnected''Pending''Rejected' |


