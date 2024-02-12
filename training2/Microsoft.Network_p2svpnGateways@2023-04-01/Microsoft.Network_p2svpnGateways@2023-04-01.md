```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/p2svpnGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customDnsServers = [
        "string"
      ]
      isRoutingPreferenceInternet = bool
      p2SConnectionConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            enableInternetSecurity = bool
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
            vpnClientAddressPool = {
              addressPrefixes = [
                "string"
              ]
            }
          }
        }
      ]
      virtualHub = {
        id = "string"
      }
      vpnGatewayScaleUnit = int
      vpnServerConfiguration = {
        id = "string"
      }
    }
  })
}

```

### p2svpnGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the P2SVpnGateway. | P2SVpnGatewayProperties |


### P2SVpnGatewayProperties

| Name | Description | Value |
|-|-|-|
| customDnsServers | List of all customer specified DNS servers IP addresses. | string[] |
| isRoutingPreferenceInternet | Enable Routing Preference property for the Public IP Interface of the P2SVpnGateway. | bool |
| p2SConnectionConfigurations | List of all p2s connection configurations of the gateway. | P2SConnectionConfiguration[] |
| virtualHub | The VirtualHub to which the gateway belongs. | SubResource |
| vpnGatewayScaleUnit | The scale unit for this p2s vpn gateway. | int |
| vpnServerConfiguration | The VpnServerConfiguration to which the p2sVpnGateway is attached to. | SubResource |


### P2SConnectionConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the P2S connection configuration. | P2SConnectionConfigurationProperties |


### P2SConnectionConfigurationProperties

| Name | Description | Value |
|-|-|-|
| enableInternetSecurity | Flag indicating whether the enable internet security flag is turned on for the P2S Connections or not. | bool |
| routingConfiguration | The Routing Configuration indicating the associated and propagated route tables on this connection. | RoutingConfiguration |
| vpnClientAddressPool | The reference to the address space resource which represents Address space for P2S VpnClient. | AddressSpace |


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


### AddressSpace

| Name | Description | Value |
|-|-|-|
| addressPrefixes | A list of address blocks reserved for this virtual network in CIDR notation. | string[] |


