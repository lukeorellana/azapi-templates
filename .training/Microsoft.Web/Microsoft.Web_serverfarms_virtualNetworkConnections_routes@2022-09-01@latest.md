```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endAddress = "string"
      routeType = "string"
      startAddress = "string"
    }
    kind = "string"
  })
}

```

### serverfarms/virtualNetworkConnections/routes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| kind | Kind of resource. | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type: virtualNetworkConnections |
| properties | VnetRoute resource specific properties | VnetRouteProperties |


### VnetRouteProperties

| Name | Description | Value |
|-|-|-|
| endAddress | The ending address for this route. If the start address is specified in CIDR notation, this must be omitted. | string |
| routeType | The type of route this is:DEFAULT - By default, every app has routes to the local address ranges specified by RFC1918INHERITED - Routes inherited from the real Virtual Network routesSTATIC - Static route set on the app onlyThese values will be used for syncing an app's routes with those from a Virtual Network. | 'DEFAULT''INHERITED''STATIC' |
| startAddress | The starting address for this route. This may also include a CIDR notation, in which case the end address must not be specified. | string |


