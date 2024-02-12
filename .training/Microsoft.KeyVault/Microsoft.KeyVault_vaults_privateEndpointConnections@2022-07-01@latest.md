```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/vaults/privateEndpointConnections@2022-07-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "None"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
    etag = "string"
  })
}

```

### vaults/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| etag | Modified whenever there is a change in the state of private endpoint connection. | string |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | Properties of the private endpoint object. | PrivateEndpoint |
| privateLinkServiceConnectionState | Approval state of the private link connection. | PrivateLinkServiceConnectionState |
| provisioningState | Provisioning state of the private endpoint connection. | 'Creating''Deleting''Disconnected''Failed''Succeeded''Updating' |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | 'None' |
| description | The reason for approval or rejection. | string |
| status | Indicates whether the connection has been approved, rejected or removed by the key vault owner. | 'Approved''Disconnected''Pending''Rejected' |


