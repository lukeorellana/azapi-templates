```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/managedVirtualNetworks@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

### factories/managedVirtualNetworks

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:factories |
| properties | Managed Virtual Network properties. | ManagedVirtualNetwork(required) |

