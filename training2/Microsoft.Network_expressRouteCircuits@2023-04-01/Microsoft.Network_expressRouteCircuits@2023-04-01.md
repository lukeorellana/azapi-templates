```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCircuits@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowClassicOperations = bool
      authorizationKey = "string"
      authorizations = [
        {
          id = "string"
          name = "string"
          properties = {
            authorizationKey = "string"
            authorizationUseStatus = "string"
          }
        }
      ]
      bandwidthInGbps = int
      circuitProvisioningState = "string"
      expressRoutePort = {
        id = "string"
      }
      gatewayManagerEtag = "string"
      globalReachEnabled = bool
      peerings = [
        {
          id = "string"
          name = "string"
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
        }
      ]
      serviceKey = "string"
      serviceProviderNotes = "string"
      serviceProviderProperties = {
        bandwidthInMbps = int
        peeringLocation = "string"
        serviceProviderName = "string"
      }
      serviceProviderProvisioningState = "string"
    }
    sku = {
      family = "string"
      name = "string"
      tier = "string"
    }
  })
}

```

### expressRouteCircuits

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU. | ExpressRouteCircuitSku |
| properties | Properties of the express route circuit. | ExpressRouteCircuitPropertiesFormat |


### ExpressRouteCircuitPropertiesFormat

| Name | Description | Value |
|-|-|-|
| allowClassicOperations | Allow classic operations. | bool |
| authorizationKey | The authorizationKey. | string |
| authorizations | The list of authorizations. | ExpressRouteCircuitAuthorization[] |
| bandwidthInGbps | The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource. | int |
| circuitProvisioningState | The CircuitProvisioningState state of the resource. | string |
| expressRoutePort | The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource. | SubResource |
| gatewayManagerEtag | The GatewayManager Etag. | string |
| globalReachEnabled | Flag denoting global reach status. | bool |
| peerings | The list of peerings. | ExpressRouteCircuitPeering[] |
| serviceKey | The ServiceKey. | string |
| serviceProviderNotes | The ServiceProviderNotes. | string |
| serviceProviderProperties | The ServiceProviderProperties. | ExpressRouteCircuitServiceProviderProperties |
| serviceProviderProvisioningState | The ServiceProviderProvisioningState state of the resource. | 'Deprovisioning''NotProvisioned''Provisioned''Provisioning' |


### ExpressRouteCircuitAuthorization

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the express route circuit authorization. | AuthorizationPropertiesFormat |


### AuthorizationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| authorizationKey | The authorization key. | string |
| authorizationUseStatus | The authorization use status. | 'Available''InUse' |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### ExpressRouteCircuitPeering

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
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


### ExpressRouteCircuitServiceProviderProperties

| Name | Description | Value |
|-|-|-|
| bandwidthInMbps | The BandwidthInMbps. | int |
| peeringLocation | The peering location. | string |
| serviceProviderName | The serviceProviderName. | string |


### ExpressRouteCircuitSku

| Name | Description | Value |
|-|-|-|
| family | The family of the SKU. | 'MeteredData''UnlimitedData' |
| name | The name of the SKU. | string |
| tier | The tier of the SKU. | 'Basic''Local''Premium''Standard' |


