```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/managedPrivateEndpoints@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
      privateLinkResourceId = "string"
      privateLinkResourceRegion = "string"
      requestMessage = "string"
    }
  })
}

```

### clusters/managedPrivateEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:clusters |
| properties | A managed private endpoint. | ManagedPrivateEndpointProperties |


### ManagedPrivateEndpointProperties

| Name | Description | Value |
|-|-|-|
| groupId | The groupId in which the managed private endpoint is created. | string (required) |
| privateLinkResourceId | The ARM resource ID of the resource for which the managed private endpoint is created. | string (required) |
| privateLinkResourceRegion | The region of the resource to which the managed private endpoint is created. | string |
| requestMessage | The user request message. | string |


