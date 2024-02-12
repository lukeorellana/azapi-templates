```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Purview/accounts/privateEndpointConnections@2021-12-01"
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

### accounts/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:accounts |
| properties | The connection identifier. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The private endpoint information. | PrivateEndpoint |
| privateLinkServiceConnectionState | The private link service connection state. | PrivateLinkServiceConnectionState |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The private endpoint identifier. | string |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | The required actions. | string |
| description | The description. | string |
| status | The status. | 'Approved''Disconnected''Pending''Rejected''Unknown' |


