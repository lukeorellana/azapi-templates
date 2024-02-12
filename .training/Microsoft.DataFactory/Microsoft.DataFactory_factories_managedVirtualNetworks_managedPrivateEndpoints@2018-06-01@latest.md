```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionState = {}
      fqdns = [
        "string"
      ]
      groupId = "string"
      privateLinkResourceId = "string"
    }
  })
}

```

### factories/managedVirtualNetworks/managedPrivateEndpo...

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedVirtualNetworks |
| properties | Managed private endpoint properties. | ManagedPrivateEndpoint(required) |


### ManagedPrivateEndpoint

| Name | Description | Value |
|-|-|-|
| connectionState | The managed private endpoint connection state | ConnectionStateProperties |
| fqdns | Fully qualified domain names | string[] |
| groupId | The groupId to which the managed private endpoint is created | string |
| privateLinkResourceId | The ARM resource ID of the resource to which the managed private endpoint is created | string |

