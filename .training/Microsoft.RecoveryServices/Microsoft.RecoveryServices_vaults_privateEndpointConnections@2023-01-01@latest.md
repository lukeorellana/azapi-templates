```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/privateEndpointConnections@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
    eTag = "string"
  })
}

```

### vaults/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
| eTag | Optional ETag. | string |
| properties | PrivateEndpointConnectionResource properties | PrivateEndpointConnection |


### PrivateEndpointConnection

| Name | Description | Value |
|-|-|-|
| groupIds | Group Ids for the Private Endpoint | String array containing any of:'AzureBackup''AzureBackup_secondary''AzureSiteRecovery' |
| privateEndpoint | Gets or sets private endpoint associated with the private endpoint connection | PrivateEndpoint |
| privateLinkServiceConnectionState | Gets or sets private link service connection state | PrivateLinkServiceConnectionState |
| provisioningState | Gets or sets provisioning state of the private endpoint connection | 'Deleting''Failed''Pending''Succeeded' |


### PrivateEndpoint

| Name | Description | Value |
|-|-|-|
| id | Gets or sets id | string |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionRequired | Gets or sets actions required | string |
| description | Gets or sets description | string |
| status | Gets or sets the status | 'Approved''Disconnected''Pending''Rejected' |


