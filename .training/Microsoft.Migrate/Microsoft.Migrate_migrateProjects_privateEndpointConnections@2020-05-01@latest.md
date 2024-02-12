```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Migrate/migrateProjects/privateEndpointConnections@2020-05-01"
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

### migrateProjects/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:migrateProjects |
| eTag | Gets the tag for optimistic concurrency control. | string |
| properties | Properties of Connection state request. | ConnectionStateRequestBodyPropertiesOrPrivateEndpoin... |


### ConnectionStateRequestBodyPropertiesOrPrivateEndpoin...

| Name | Description | Value |
|-|-|-|
| privateLinkServiceConnectionState | Private endpoint connection state. | PrivateLinkServiceConnectionState |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | Action required. | string |
| description | Description of the object. | string |
| status | Private link connection state. | 'Approved''Disconnected''Pending''Rejected' |


