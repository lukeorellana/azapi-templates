```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCrossConnections@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      expressRouteCircuit = {
        id = "string"
      }
      peerings = [
        {
          id = "string"
          name = "string"
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
        }
      ]
      serviceProviderNotes = "string"
      serviceProviderProvisioningState = "string"
    }
  })
}

```

### expressRouteCrossConnections

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the express route cross connection. | ExpressRouteCrossConnectionProperties |


### ExpressRouteCrossConnectionProperties

| Name | Description | Value |
|-|-|-|
| expressRouteCircuit | The ExpressRouteCircuit. | ExpressRouteCircuitReference |
| peerings | The list of peerings. | ExpressRouteCrossConnectionPeering[] |
| serviceProviderNotes | Additional read only notes set by the connectivity provider. | string |
| serviceProviderProvisioningState | The provisioning state of the circuit in the connectivity provider system. | 'Deprovisioning''NotProvisioned''Provisioned''Provisioning' |


### ExpressRouteCircuitReference

| Name | Description | Value |
|-|-|-|
| id | Corresponding Express Route Circuit Id. | string |


### ExpressRouteCrossConnectionPeering

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
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


