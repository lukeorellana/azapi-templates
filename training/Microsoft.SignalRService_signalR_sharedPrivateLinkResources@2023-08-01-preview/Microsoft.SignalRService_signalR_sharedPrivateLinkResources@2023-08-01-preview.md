```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/signalR/sharedPrivateLinkResources@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
      privateLinkResourceId = "string"
      requestMessage = "string"
    }
  })
}

```

### signalR/sharedPrivateLinkResources

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:signalR |
| properties | Describes the properties of an existing Shared Private Link Resource | SharedPrivateLinkResourceProperties |


### SharedPrivateLinkResourceProperties

| Name | Description | Value |
|-|-|-|
| groupId | The group id from the provider of resource the shared private link resource is for | string (required) |
| privateLinkResourceId | The resource id of the resource the shared private link resource is for | string (required) |
| requestMessage | The request message for requesting approval of the shared private link resource | string |


