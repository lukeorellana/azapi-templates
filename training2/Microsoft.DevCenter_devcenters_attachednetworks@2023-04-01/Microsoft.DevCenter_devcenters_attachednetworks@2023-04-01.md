```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevCenter/devcenters/attachednetworks@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      networkConnectionId = "string"
    }
  })
}

```

### devcenters/attachednetworks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:devcenters |
| properties | Attached NetworkConnection properties. | AttachedNetworkConnectionProperties |


### AttachedNetworkConnectionProperties

| Name | Description | Value |
|-|-|-|
| networkConnectionId | The resource ID of the NetworkConnection you want to attach. | string (required) |


