```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCrossConnections/peerings@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
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
      primaryPeerAddressPrefix = "string"
      secondaryPeerAddressPrefix = "string"
      sharedKey = "string"
      state = "string"
      vlanId = int
    }
  })
}

```

### expressRouteCrossConnections/peerings

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:expressRouteCrossConnections |
| properties | Properties of the express route cross connection peering. | ExpressRouteCrossConnectionPeeringProperties |


### ExpressRouteCrossConnectionPeeringProperties

| Name | Description | Value |
|-|-|-|
| gatewayManagerEtag | The GatewayManager Etag. | string |
| ipv6PeeringConfig | The IPv6 peering configuration. | Ipv6ExpressRouteCircuitPeeringConfig |
| microsoftPeeringConfig | The Microsoft peering configuration. | ExpressRouteCircuitPeeringConfig |
| peerASN | The peer ASN. | int |
| peeringType | The peering type. | 'AzurePrivatePeering''AzurePublicPeering''MicrosoftPeering' |
| primaryPeerAddressPrefix | The primary address prefix. | string |
| secondaryPeerAddressPrefix | The secondary address prefix. | string |
| sharedKey | The shared key. | string |
| state | The peering state. | 'Disabled''Enabled' |
| vlanId | The VLAN ID. | int |


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


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


