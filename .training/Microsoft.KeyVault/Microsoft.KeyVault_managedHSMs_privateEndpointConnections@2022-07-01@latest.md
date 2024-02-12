```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.KeyVault/managedHSMs/privateEndpointConnections@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
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
    sku = {
      family = "B"
      name = "string"
    }
    etag = "string"
  })
}

```

### managedHSMs/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | The supported Azure location where the managed HSM Pool should be created. | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| sku | SKU details | ManagedHsmSku |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedHSMs |
| etag | Modified whenever there is a change in the state of private endpoint connection. | string |
| properties | Resource properties. | MhsmPrivateEndpointConnectionProperties |


### MhsmPrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | Properties of the private endpoint object. | MhsmPrivateEndpoint |
| privateLinkServiceConnectionState | Approval state of the private link connection. | MhsmPrivateLinkServiceConnectionState |
| provisioningState | Provisioning state of the private endpoint connection. | 'Creating''Deleting''Disconnected''Failed''Succeeded''Updating' |


### MhsmPrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | 'None' |
| description | The reason for approval or rejection. | string |
| status | Indicates whether the connection has been approved, rejected or removed by the key vault owner. | 'Approved''Disconnected''Pending''Rejected' |


### ManagedHsmSku

| Name | Description | Value |
|-|-|-|
| family | SKU Family of the managed HSM Pool | 'B' (required) |
| name | SKU of the managed HSM Pool | 'Custom_B32''Standard_B1' (required) |


