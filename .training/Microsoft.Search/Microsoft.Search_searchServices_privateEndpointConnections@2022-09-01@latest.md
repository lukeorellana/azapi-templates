```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Search/searchServices/privateEndpointConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

### searchServices/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:searchServices |
| properties | Describes the properties of an existing Private Endpoint connection to the Azure Cognitive Search service. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| groupId | The group id from the provider of resource the private link service connection is for. | string |
| privateEndpoint | The private endpoint resource from Microsoft.Network provider. | PrivateEndpointConnectionPropertiesPrivateEndpoint |
| privateLinkServiceConnectionState | Describes the current state of an existing Private Link Service connection to the Azure Private Endpoint. | PrivateEndpointConnectionPropertiesPrivateLinkServic... |
| provisioningState | The provisioning state of the private link service connection. Can be Updating, Deleting, Failed, Succeeded, or Incomplete | 'Canceled''Deleting''Failed''Incomplete''Succeeded''Updating' |


### PrivateEndpointConnectionPropertiesPrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | The resource id of the private endpoint resource from Microsoft.Network provider. | string |


### PrivateEndpointConnectionPropertiesPrivateLinkServic...

| Name | Description | Value |
|-|-|-|
| actionsRequired | A description of any extra actions that may be required. | string |
| description | The description for the private link service connection state. | string |
| status | Status of the the private link service connection. Can be Pending, Approved, Rejected, or Disconnected. | 'Approved''Disconnected''Pending''Rejected' |


