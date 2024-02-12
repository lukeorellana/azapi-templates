```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/privateEndpointConnections@2018-06-01"
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

### factories/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Core resource properties | PrivateLinkConnectionApprovalRequestOrRemotePrivateE... |


### PrivateLinkConnectionApprovalRequestOrRemotePrivateE...

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private endpoint. | PrivateEndpointOrArmIdWrapper |
| privateLinkServiceConnectionState | The state of a private link connection | PrivateLinkConnectionState |


### PrivateEndpointOrArmIdWrapper

| Name | Description | Value |
|-|-|-|
| id | The resource Id for private endpoint | string |


### PrivateLinkConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | ActionsRequired for a private link connection | string |
| description | Description of a private link connection | string |
| status | Status of a private link connection | string |


