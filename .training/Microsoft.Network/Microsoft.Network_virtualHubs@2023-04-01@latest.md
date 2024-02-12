```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      allowBranchToBranchTraffic = bool
      azureFirewall = {
        id = "string"
      }
      expressRouteGateway = {
        id = "string"
      }
      hubRoutingPreference = "string"
      p2SVpnGateway = {
        id = "string"
      }
      preferredRoutingGateway = "string"
      routeTable = {
        routes = [
          {
            addressPrefixes = [
              "string"
            ]
            nextHopIpAddress = "string"
          }
        ]
      }
      securityPartnerProvider = {
        id = "string"
      }
      securityProviderName = "string"
      sku = "string"
      virtualHubRouteTableV2s = [
        {
          id = "string"
          name = "string"
          properties = {
            attachedConnections = [
              "string"
            ]
            routes = [
              {
                destinations = [
                  "string"
                ]
                destinationType = "string"
                nextHops = [
                  "string"
                ]
                nextHopType = "string"
              }
            ]
          }
        }
      ]
      virtualRouterAsn = int
      virtualRouterAutoScaleConfiguration = {
        minCapacity = int
      }
      virtualRouterIps = [
        "string"
      ]
      virtualWan = {
        id = "string"
      }
      vpnGateway = {
        id = "string"
      }
    }
  })
}

```

### virtualHubs

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the virtual hub. | VirtualHubProperties |


### VirtualHubProperties

| Name | Description | Value |
|-|-|-|
| addressPrefix | Address-prefix for this VirtualHub. | string |
| allowBranchToBranchTraffic | Flag to control transit for VirtualRouter hub. | bool |
| azureFirewall | The azureFirewall associated with this VirtualHub. | SubResource |
| expressRouteGateway | The expressRouteGateway associated with this VirtualHub. | SubResource |
| hubRoutingPreference | The hubRoutingPreference of this VirtualHub. | 'ASPath''ExpressRoute''VpnGateway' |
| p2SVpnGateway | The P2SVpnGateway associated with this VirtualHub. | SubResource |
| preferredRoutingGateway | The preferred gateway to route on-prem traffic | 'ExpressRoute''None''VpnGateway' |
| routeTable | The routeTable associated with this virtual hub. | VirtualHubRouteTable |
| securityPartnerProvider | The securityPartnerProvider associated with this VirtualHub. | SubResource |
| securityProviderName | The Security Provider name. | string |
| sku | The sku of this VirtualHub. | string |
| virtualHubRouteTableV2s | List of all virtual hub route table v2s associated with this VirtualHub. | VirtualHubRouteTableV2[] |
| virtualRouterAsn | VirtualRouter ASN. | int |
| virtualRouterAutoScaleConfiguration | The VirtualHub Router autoscale configuration. | VirtualRouterAutoScaleConfiguration |
| virtualRouterIps | VirtualRouter IPs. | string[] |
| virtualWan | The VirtualWAN to which the VirtualHub belongs. | SubResource |
| vpnGateway | The VpnGateway associated with this VirtualHub. | SubResource |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### VirtualHubRouteTable

| Name | Description | Value |
|-|-|-|
| routes | List of all routes. | VirtualHubRoute[] |


### VirtualHubRoute

| Name | Description | Value |
|-|-|-|
| addressPrefixes | List of all addressPrefixes. | string[] |
| nextHopIpAddress | NextHop ip address. | string |


### VirtualHubRouteTableV2

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the virtual hub route table v2. | VirtualHubRouteTableV2Properties |


### VirtualHubRouteTableV2Properties

| Name | Description | Value |
|-|-|-|
| attachedConnections | List of all connections attached to this route table v2. | string[] |
| routes | List of all routes. | VirtualHubRouteV2[] |


### VirtualHubRouteV2

| Name | Description | Value |
|-|-|-|
| destinations | List of all destinations. | string[] |
| destinationType | The type of destinations. | string |
| nextHops | NextHops ip address. | string[] |
| nextHopType | The type of next hops. | string |


### VirtualRouterAutoScaleConfiguration

| Name | Description | Value |
|-|-|-|
| minCapacity | The minimum number of scale units for VirtualHub Router. | int |


