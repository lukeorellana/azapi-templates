```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/privateEndpointConnections@2022-09-01"
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
    kind = "string"
  })
}

```

### staticSites/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:staticSites |
| properties | Core resource properties | PrivateLinkConnectionApprovalRequestOrRemotePrivateE... |


### PrivateLinkConnectionApprovalRequestOrRemotePrivateE...

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | The state of a private link connection | PrivateLinkConnectionState |


### PrivateLinkConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | ActionsRequired for a private link connection | string |
| description | Description of a private link connection | string |
| status | Status of a private link connection | string |


