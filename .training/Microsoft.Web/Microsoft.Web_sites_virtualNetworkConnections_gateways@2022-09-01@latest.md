```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/virtualNetworkConnections/gateways@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      vnetName = "string"
      vpnPackageUri = "string"
    }
    kind = "string"
  })
}

```

### sites/virtualNetworkConnections/gateways

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:virtualNetworkConnections |
| properties | VnetGateway resource specific properties | VnetGatewayProperties |


### VnetGatewayProperties

| Name | Description | Value |
|-|-|-|
| vnetName | The Virtual Network name. | string |
| vpnPackageUri | The URI where the VPN package can be downloaded. | string (required) |


