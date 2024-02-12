```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      bgpSettings = {
        asn = int
        bgpPeeringAddress = "string"
        bgpPeeringAddresses = [
          {
            customBgpIpAddresses = [
              "string"
            ]
            ipconfigurationId = "string"
          }
        ]
        peerWeight = int
      }
      connections = [
        {
          id = "string"
          name = "string"
          properties = {
            connectionBandwidth = int
            dpdTimeoutSeconds = int
            enableBgp = bool
            enableInternetSecurity = bool
            enableRateLimiting = bool
            ipsecPolicies = [
              {
                dhGroup = "string"
                ikeEncryption = "string"
                ikeIntegrity = "string"
                ipsecEncryption = "string"
                ipsecIntegrity = "string"
                pfsGroup = "string"
                saDataSizeKilobytes = int
                saLifeTimeSeconds = int
              }
            ]
            remoteVpnSite = {
              id = "string"
            }
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
            sharedKey = "string"
            trafficSelectorPolicies = [
              {
                localAddressRanges = [
                  "string"
                ]
                remoteAddressRanges = [
                  "string"
                ]
              }
            ]
            useLocalAzureIpAddress = bool
            usePolicyBasedTrafficSelectors = bool
            vpnConnectionProtocolType = "string"
            vpnLinkConnections = [
              {
                id = "string"
                name = "string"
                properties = {
                  connectionBandwidth = int
                  egressNatRules = [
                    {
                      id = "string"
                    }
                  ]
                  enableBgp = bool
                  enableRateLimiting = bool
                  ingressNatRules = [
                    {
                      id = "string"
                    }
                  ]
                  ipsecPolicies = [
                    {
                      dhGroup = "string"
                      ikeEncryption = "string"
                      ikeIntegrity = "string"
                      ipsecEncryption = "string"
                      ipsecIntegrity = "string"
                      pfsGroup = "string"
                      saDataSizeKilobytes = int
                      saLifeTimeSeconds = int
                    }
                  ]
                  routingWeight = int
                  sharedKey = "string"
                  useLocalAzureIpAddress = bool
                  usePolicyBasedTrafficSelectors = bool
                  vpnConnectionProtocolType = "string"
                  vpnGatewayCustomBgpAddresses = [
                    {
                      customBgpIpAddress = "string"
                      ipConfigurationId = "string"
                    }
                  ]
                  vpnLinkConnectionMode = "string"
                  vpnSiteLink = {
                    id = "string"
                  }
                }
              }
            ]
          }
        }
      ]
      enableBgpRouteTranslationForNat = bool
      isRoutingPreferenceInternet = bool
      natRules = [
        {
          id = "string"
          name = "string"
          properties = {
            externalMappings = [
              {
                addressSpace = "string"
                portRange = "string"
              }
            ]
            internalMappings = [
              {
                addressSpace = "string"
                portRange = "string"
              }
            ]
            ipConfigurationId = "string"
            mode = "string"
            type = "string"
          }
        }
      ]
      virtualHub = {
        id = "string"
      }
      vpnGatewayScaleUnit = int
    }
  })
}

```

### vpnGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the VPN gateway. | VpnGatewayProperties |


### VpnGatewayProperties

| Name | Description | Value |
|-|-|-|
| bgpSettings | Local network gateway's BGP speaker settings. | BgpSettings |
| connections | List of all vpn connections to the gateway. | VpnConnection[] |
| enableBgpRouteTranslationForNat | Enable BGP routes translation for NAT on this VpnGateway. | bool |
| isRoutingPreferenceInternet | Enable Routing Preference property for the Public IP Interface of the VpnGateway. | bool |
| natRules | List of all the nat Rules associated with the gateway. | VpnGatewayNatRule[] |
| virtualHub | The VirtualHub to which the gateway belongs. | SubResource |
| vpnGatewayScaleUnit | The scale unit for this vpn gateway. | int |


### BgpSettings

| Name | Description | Value |
|-|-|-|
| asn | The BGP speaker's ASN. | int |
| bgpPeeringAddress | The BGP peering address and BGP identifier of this BGP speaker. | string |
| bgpPeeringAddresses | BGP peering address with IP configuration ID for virtual network gateway. | IPConfigurationBgpPeeringAddress[] |
| peerWeight | The weight added to routes learned from this BGP speaker. | int |


### IPConfigurationBgpPeeringAddress

| Name | Description | Value |
|-|-|-|
| customBgpIpAddresses | The list of custom BGP peering addresses which belong to IP configuration. | string[] |
| ipconfigurationId | The ID of IP configuration which belongs to gateway. | string |


### VpnConnection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the VPN connection. | VpnConnectionProperties |


### VpnConnectionProperties

| Name | Description | Value |
|-|-|-|
| connectionBandwidth | Expected bandwidth in MBPS. | int |
| dpdTimeoutSeconds | DPD timeout in seconds for vpn connection. | int |
| enableBgp | EnableBgp flag. | bool |
| enableInternetSecurity | Enable internet security. | bool |
| enableRateLimiting | EnableBgp flag. | bool |
| ipsecPolicies | The IPSec Policies to be considered by this connection. | IpsecPolicy[] |
| remoteVpnSite | Id of the connected vpn site. | SubResource |
| routingConfiguration | The Routing Configuration indicating the associated and propagated route tables on this connection. | RoutingConfiguration |
| routingWeight | Routing weight for vpn connection. | int |
| sharedKey | SharedKey for the vpn connection. | string |
| trafficSelectorPolicies | The Traffic Selector Policies to be considered by this connection. | TrafficSelectorPolicy[] |
| useLocalAzureIpAddress | Use local azure ip to initiate connection. | bool |
| usePolicyBasedTrafficSelectors | Enable policy-based traffic selectors. | bool |
| vpnConnectionProtocolType | Connection protocol used for this connection. | 'IKEv1''IKEv2' |
| vpnLinkConnections | List of all vpn site link connections to the gateway. | VpnSiteLinkConnection[] |


### IpsecPolicy

| Name | Description | Value |
|-|-|-|
| dhGroup | The DH Group used in IKE Phase 1 for initial SA. | 'DHGroup1''DHGroup14''DHGroup2''DHGroup2048''DHGroup24''ECP256''ECP384''None' (required) |
| ikeEncryption | The IKE encryption algorithm (IKE phase 2). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES256' (required) |
| ikeIntegrity | The IKE integrity algorithm (IKE phase 2). | 'GCMAES128''GCMAES256''MD5''SHA1''SHA256''SHA384' (required) |
| ipsecEncryption | The IPSec encryption algorithm (IKE phase 1). | 'AES128''AES192''AES256''DES''DES3''GCMAES128''GCMAES192''GCMAES256''None' (required) |
| ipsecIntegrity | The IPSec integrity algorithm (IKE phase 1). | 'GCMAES128''GCMAES192''GCMAES256''MD5''SHA1''SHA256' (required) |
| pfsGroup | The Pfs Group used in IKE Phase 2 for new child SA. | 'ECP256''ECP384''None''PFS1''PFS14''PFS2''PFS2048''PFS24''PFSMM' (required) |
| saDataSizeKilobytes | The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel. | int (required) |
| saLifeTimeSeconds | The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel. | int (required) |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### RoutingConfiguration

| Name | Description | Value |
|-|-|-|
| associatedRouteTable | The resource id RouteTable associated with this RoutingConfiguration. | SubResource |
| inboundRouteMap | The resource id of the RouteMap associated with this RoutingConfiguration for inbound learned routes. | SubResource |
| outboundRouteMap | The resource id of theRouteMap associated with this RoutingConfiguration for outbound advertised routes. | SubResource |
| propagatedRouteTables | The list of RouteTables to advertise the routes to. | PropagatedRouteTable |
| vnetRoutes | List of routes that control routing from VirtualHub into a virtual network connection. | VnetRoute |


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


### TrafficSelectorPolicy

| Name | Description | Value |
|-|-|-|
| localAddressRanges | A collection of local address spaces in CIDR format. | string[] (required) |
| remoteAddressRanges | A collection of remote address spaces in CIDR format. | string[] (required) |


### VpnSiteLinkConnection

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the VPN site link connection. | VpnSiteLinkConnectionProperties |


### VpnSiteLinkConnectionProperties

| Name | Description | Value |
|-|-|-|
| connectionBandwidth | Expected bandwidth in MBPS. | int |
| egressNatRules | List of egress NatRules. | SubResource[] |
| enableBgp | EnableBgp flag. | bool |
| enableRateLimiting | EnableBgp flag. | bool |
| ingressNatRules | List of ingress NatRules. | SubResource[] |
| ipsecPolicies | The IPSec Policies to be considered by this connection. | IpsecPolicy[] |
| routingWeight | Routing weight for vpn connection. | int |
| sharedKey | SharedKey for the vpn connection. | string |
| useLocalAzureIpAddress | Use local azure ip to initiate connection. | bool |
| usePolicyBasedTrafficSelectors | Enable policy-based traffic selectors. | bool |
| vpnConnectionProtocolType | Connection protocol used for this connection. | 'IKEv1''IKEv2' |
| vpnGatewayCustomBgpAddresses | vpnGatewayCustomBgpAddresses used by this connection. | GatewayCustomBgpIpAddressIpConfiguration[] |
| vpnLinkConnectionMode | Vpn link connection mode. | 'Default''InitiatorOnly''ResponderOnly' |
| vpnSiteLink | Id of the connected vpn site link. | SubResource |


### GatewayCustomBgpIpAddressIpConfiguration

| Name | Description | Value |
|-|-|-|
| customBgpIpAddress | The custom BgpPeeringAddress which belongs to IpconfigurationId. | string (required) |
| ipConfigurationId | The IpconfigurationId of ipconfiguration which belongs to gateway. | string (required) |


### VpnGatewayNatRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the VpnGateway NAT rule. | VpnGatewayNatRuleProperties |


### VpnGatewayNatRuleProperties

| Name | Description | Value |
|-|-|-|
| externalMappings | The private IP address external mapping for NAT. | VpnNatRuleMapping[] |
| internalMappings | The private IP address internal mapping for NAT. | VpnNatRuleMapping[] |
| ipConfigurationId | The IP Configuration ID this NAT rule applies to. | string |
| mode | The Source NAT direction of a VPN NAT. | 'EgressSnat''IngressSnat' |
| type | The type of NAT rule for VPN NAT. | 'Dynamic''Static' |


### VpnNatRuleMapping

| Name | Description | Value |
|-|-|-|
| addressSpace | Address space for Vpn NatRule mapping. | string |
| portRange | Port range for Vpn NatRule mapping. | string |


