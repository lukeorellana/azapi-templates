```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteGateways/expressRouteConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizationKey = "string"
      enableInternetSecurity = bool
      enablePrivateLinkFastPath = bool
      expressRouteCircuitPeering = {
        id = "string"
      }
      expressRouteGatewayBypass = bool
      routingConfiguration = {
        associatedRouteTable = {
          id = "string"
        }
        inboundRouteMap = {
          id = "string"
        }
        outboundRouteMap = {
          id = "string"
        }
        propagatedRouteTables = {
          ids = [
            {
              id = "string"
            }
          ]
          labels = [
            "string"
          ]
        }
        vnetRoutes = {
          staticRoutes = [
            {
              addressPrefixes = [
                "string"
              ]
              name = "string"
              nextHopIpAddress = "string"
            }
          ]
          staticRoutesConfig = {
            vnetLocalRouteOverrideCriteria = "string"
          }
        }
      }
      routingWeight = int
    }
  })
}

```

### expressRouteGateways/expressRouteConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:expressRouteGateways |
| properties | Properties of the express route connection. | ExpressRouteConnectionProperties |


### ExpressRouteConnectionProperties

| Name | Description | Value |
|-|-|-|
| authorizationKey | Authorization key to establish the connection. | string |
| enableInternetSecurity | Enable internet security. | bool |
| enablePrivateLinkFastPath | Bypass the ExpressRoute gateway when accessing private-links. ExpressRoute FastPath (expressRouteGatewayBypass) must be enabled. | bool |
| expressRouteCircuitPeering | The ExpressRoute circuit peering. | ExpressRouteCircuitPeeringId(required) |
| expressRouteGatewayBypass | Enable FastPath to vWan Firewall hub. | bool |
| routingConfiguration | The Routing Configuration indicating the associated and propagated route tables on this connection. | RoutingConfiguration |
| routingWeight | The routing weight associated to the connection. | int |


### ExpressRouteCircuitPeeringId

| Name | Description | Value |
|-|-|-|
| id | The ID of the ExpressRoute circuit peering. | string |


### RoutingConfiguration

| Name | Description | Value |
|-|-|-|
| associatedRouteTable | The resource id RouteTable associated with this RoutingConfiguration. | SubResource |
| inboundRouteMap | The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes. | SubResource |
| outboundRouteMap | The resource id of theRouteMap associated with this RoutingConfiguration for outbound advertised routes. | SubResource |
| propagatedRouteTables | The list of RouteTables to advertise the routes to. | PropagatedRouteTable |
| vnetRoutes | List of routes that control routing from VirtualHub into a virtual network connection. | VnetRoute |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### PropagatedRouteTable

| Name | Description | Value |
|-|-|-|
| ids | The list of resource ids of all the RouteTables. | SubResource[] |
| labels | The list of labels. | string[] |


### VnetRoute

| Name | Description | Value |
|-|-|-|
| staticRoutes | List of all Static Routes. | StaticRoute[] |
| staticRoutesConfig | Configuration for static routes on this HubVnetConnection. | StaticRoutesConfig |


### StaticRoute

| Name | Description | Value |
|-|-|-|
| addressPrefixes | List of all address prefixes. | string[] |
| name | The name of the StaticRoute that is unique within a VnetRoute. | string |
| nextHopIpAddress | The ip address of the next hop. | string |


### StaticRoutesConfig

| Name | Description | Value |
|-|-|-|
| vnetLocalRouteOverrideCriteria | Parameter determining whether NVA in spoke vnet is bypassed for traffic with destination in spoke. | 'Contains''Equal' |

