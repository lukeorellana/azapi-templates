```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCircuits/peerings@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureASN = int
      connections = [
        {
          id = "string"
          name = "string"
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
        }
      ]
      expressRouteConnection = {}
      gatewayManagerEtag = "string"
      ipv6PeeringConfig = {
        microsoftPeeringConfig = {
          advertisedCommunities = [
            "string"
          ]
          advertisedPublicPrefixes = [
            "string"
          ]
          customerASN = int
          legacyMode = int
          routingRegistryName = "string"
        }
        primaryPeerAddressPrefix = "string"
        routeFilter = {
          id = "string"
        }
        secondaryPeerAddressPrefix = "string"
        state = "string"
      }
      microsoftPeeringConfig = {
        advertisedCommunities = [
          "string"
        ]
        advertisedPublicPrefixes = [
          "string"
        ]
        customerASN = int
        legacyMode = int
        routingRegistryName = "string"
      }
      peerASN = int
      peeringType = "string"
      primaryAzurePort = "string"
      primaryPeerAddressPrefix = "string"
      routeFilter = {
        id = "string"
      }
      secondaryAzurePort = "string"
      secondaryPeerAddressPrefix = "string"
      sharedKey = "string"
      state = "string"
      stats = {
        primarybytesIn = int
        primarybytesOut = int
        secondarybytesIn = int
        secondarybytesOut = int
      }
      vlanId = int
    }
  })
}

```

### expressRouteCircuits/peerings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:expressRouteCircuits |
| properties | Properties of the express route circuit peering. | ExpressRouteCircuitPeeringPropertiesFormat |


### ExpressRouteCircuitPeeringPropertiesFormat

| Name | Description | Value |
|-|-|-|
| azureASN | The Azure ASN. | int |
| connections | The list of circuit connections associated with Azure Private Peering for this circuit. | ExpressRouteCircuitConnection[] |
| expressRouteConnection | The ExpressRoute connection. | ExpressRouteConnectionId |
| gatewayManagerEtag | The GatewayManager Etag. | string |
| ipv6PeeringConfig | The IPv6 peering configuration. | Ipv6ExpressRouteCircuitPeeringConfig |
| microsoftPeeringConfig | The Microsoft peering configuration. | ExpressRouteCircuitPeeringConfig |
| peerASN | The peer ASN. | int |
| peeringType | The peering type. | 'AzurePrivatePeering''AzurePublicPeering''MicrosoftPeering' |
| primaryAzurePort | The primary port. | string |
| primaryPeerAddressPrefix | The primary address prefix. | string |
| routeFilter | The reference to the RouteFilter resource. | SubResource |
| secondaryAzurePort | The secondary port. | string |
| secondaryPeerAddressPrefix | The secondary address prefix. | string |
| sharedKey | The shared key. | string |
| state | The peering state. | 'Disabled''Enabled' |
| stats | The peering stats of express route circuit. | ExpressRouteCircuitStats |
| vlanId | The VLAN ID. | int |


### ExpressRouteCircuitConnection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
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


### Ipv6ExpressRouteCircuitPeeringConfig

| Name | Description | Value |
|-|-|-|
| microsoftPeeringConfig | The Microsoft peering configuration. | ExpressRouteCircuitPeeringConfig |
| primaryPeerAddressPrefix | The primary address prefix. | string |
| routeFilter | The reference to the RouteFilter resource. | SubResource |
| secondaryPeerAddressPrefix | The secondary address prefix. | string |
| state | The state of peering. | 'Disabled''Enabled' |


### ExpressRouteCircuitPeeringConfig

| Name | Description | Value |
|-|-|-|
| advertisedCommunities | The communities of bgp peering. Specified for microsoft peering. | string[] |
| advertisedPublicPrefixes | The reference to AdvertisedPublicPrefixes. | string[] |
| customerASN | The CustomerASN of the peering. | int |
| legacyMode | The legacy mode of the peering. | int |
| routingRegistryName | The RoutingRegistryName of the configuration. | string |


### ExpressRouteCircuitStats

| Name | Description | Value |
|-|-|-|
| primarybytesIn | The Primary BytesIn of the peering. | int |
| primarybytesOut | The primary BytesOut of the peering. | int |
| secondarybytesIn | The secondary BytesIn of the peering. | int |
| secondarybytesOut | The secondary BytesOut of the peering. | int |


