```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCircuits/peerings/connections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      authorizationKey = "string"
      expressRouteCircuitPeering = {
        id = "string"
      }
      ipv6CircuitConnectionConfig = {
        addressPrefix = "string"
      }
      peerExpressRouteCircuitPeering = {
        id = "string"
      }
    }
  })
}

```

### expressRouteCircuits/peerings/connections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:peerings |
| properties | Properties of the express route circuit connection. | ExpressRouteCircuitConnectionPropertiesFormat |


### ExpressRouteCircuitConnectionPropertiesFormat

| Name | Description | Value |
|-|-|-|
| addressPrefix | /29 IP address space to carve out Customer addresses for tunnels. | string |
| authorizationKey | The authorization key. | string |
| expressRouteCircuitPeering | Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection. | SubResource |
| ipv6CircuitConnectionConfig | IPv6 Address PrefixProperties of the express route circuit connection. | Ipv6CircuitConnectionConfig |
| peerExpressRouteCircuitPeering | Reference to Express Route Circuit Private Peering Resource of the peered circuit. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### Ipv6CircuitConnectionConfig

| Name | Description | Value |
|-|-|-|
| addressPrefix | /125 IP address space to carve out customer addresses for global reach. | string |


