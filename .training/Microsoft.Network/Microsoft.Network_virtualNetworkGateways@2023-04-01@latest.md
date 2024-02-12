```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworkGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      activeActive = bool
      adminState = "string"
      allowRemoteVnetTraffic = bool
      allowVirtualWanTraffic = bool
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
      customRoutes = {
        addressPrefixes = [
          "string"
        ]
      }
      disableIPSecReplayProtection = bool
      enableBgp = bool
      enableBgpRouteTranslationForNat = bool
      enableDnsForwarding = bool
      enablePrivateIpAddress = bool
      gatewayDefaultSite = {
        id = "string"
      }
      gatewayType = "string"
      ipConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            privateIPAllocationMethod = "string"
            publicIPAddress = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
          }
        }
      ]
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
      sku = {
        name = "string"
        tier = "string"
      }
      virtualNetworkGatewayPolicyGroups = [
        {
          id = "string"
          name = "string"
          properties = {
            isDefault = bool
            policyMembers = [
              {
                attributeType = "string"
                attributeValue = "string"
                name = "string"
              }
            ]
            priority = int
          }
        }
      ]
      vNetExtendedLocationResourceId = "string"
      vpnClientConfiguration = {
        aadAudience = "string"
        aadIssuer = "string"
        aadTenant = "string"
        radiusServerAddress = "string"
        radiusServers = [
          {
            radiusServerAddress = "string"
            radiusServerScore = int
            radiusServerSecret = "string"
          }
        ]
        radiusServerSecret = "string"
        vngClientConnectionConfigurations = [
          {
            id = "string"
            name = "string"
            properties = {
              virtualNetworkGatewayPolicyGroups = [
                {
                  id = "string"
                }
              ]
              vpnClientAddressPool = {
                addressPrefixes = [
                  "string"
                ]
              }
            }
          }
        ]
        vpnAuthenticationTypes = [
          "string"
        ]
        vpnClientAddressPool = {
          addressPrefixes = [
            "string"
          ]
        }
        vpnClientIpsecPolicies = [
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
        vpnClientProtocols = [
          "string"
        ]
        vpnClientRevokedCertificates = [
          {
            id = "string"
            name = "string"
            properties = {
              thumbprint = "string"
            }
          }
        ]
        vpnClientRootCertificates = [
          {
            id = "string"
            name = "string"
            properties = {
              publicCertData = "string"
            }
          }
        ]
      }
      vpnGatewayGeneration = "string"
      vpnType = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

### virtualNetworkGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| extendedLocation | The extended location of type local virtual network gateway. | ExtendedLocation |
| properties | Properties of the virtual network gateway. | VirtualNetworkGatewayPropertiesFormat(required) |


### ExtendedLocation

| Name | Description | Value |
|-|-|-|
| name | The name of the extended location. | string |
| type | The type of the extended location. | 'EdgeZone' |


### VirtualNetworkGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| activeActive | ActiveActive flag. | bool |
| adminState | Property to indicate if the Express Route Gateway serves traffic when there are multiple Express Route Gateways in the vnet | 'Disabled''Enabled' |
| allowRemoteVnetTraffic | Configure this gateway to accept traffic from other Azure Virtual Networks. This configuration does not support connectivity to Azure Virtual WAN. | bool |
| allowVirtualWanTraffic | Configures this gateway to accept traffic from remote Virtual WAN networks. | bool |
| bgpSettings | Virtual network gateway's BGP speaker settings. | BgpSettings |
| customRoutes | The reference to the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient. | AddressSpace |
| disableIPSecReplayProtection | disableIPSecReplayProtection flag. | bool |
| enableBgp | Whether BGP is enabled for this virtual network gateway or not. | bool |
| enableBgpRouteTranslationForNat | EnableBgpRouteTranslationForNat flag. | bool |
| enableDnsForwarding | Whether dns forwarding is enabled or not. | bool |
| enablePrivateIpAddress | Whether private IP needs to be enabled on this gateway for connections or not. | bool |
| gatewayDefaultSite | The reference to the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting. | SubResource |
| gatewayType | The type of this virtual network gateway. | 'ExpressRoute''LocalGateway''Vpn' |
| ipConfigurations | IP configurations for virtual network gateway. | VirtualNetworkGatewayIPConfiguration[] |
| natRules | NatRules for virtual network gateway. | VirtualNetworkGatewayNatRule[] |
| sku | The reference to the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway. | VirtualNetworkGatewaySku |
| virtualNetworkGatewayPolicyGroups | The reference to the VirtualNetworkGatewayPolicyGroup resource which represents the available VirtualNetworkGatewayPolicyGroup for the gateway. | VirtualNetworkGatewayPolicyGroup[] |
| vNetExtendedLocationResourceId | Customer vnet resource id. VirtualNetworkGateway of type local gateway is associated with the customer vnet. | string |
| vpnClientConfiguration | The reference to the VpnClientConfiguration resource which represents the P2S VpnClient configurations. | VpnClientConfiguration |
| vpnGatewayGeneration | The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN. | 'Generation1''Generation2''None' |
| vpnType | The type of this virtual network gateway. | 'PolicyBased''RouteBased' |


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


### AddressSpace

| Name | Description | Value |
|-|-|-|
| addressPrefixes | A list of address blocks reserved for this virtual network in CIDR notation. | string[] |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### VirtualNetworkGatewayIPConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the virtual network gateway ip configuration. | VirtualNetworkGatewayIPConfigurationPropertiesFormat |


### VirtualNetworkGatewayIPConfigurationPropertiesFormat

| Name | Description | Value |
|-|-|-|
| privateIPAllocationMethod | The private IP address allocation method. | 'Dynamic''Static' |
| publicIPAddress | The reference to the public IP resource. | SubResource |
| subnet | The reference to the subnet resource. | SubResource |


### VirtualNetworkGatewayNatRule

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the Virtual Network Gateway NAT rule. | VirtualNetworkGatewayNatRuleProperties |


### VirtualNetworkGatewayNatRuleProperties

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


### VirtualNetworkGatewaySku

| Name | Description | Value |
|-|-|-|
| name | Gateway SKU name. | 'Basic''ErGw1AZ''ErGw2AZ''ErGw3AZ''HighPerformance''Standard''UltraPerformance''VpnGw1''VpnGw1AZ''VpnGw2''VpnGw2AZ''VpnGw3''VpnGw3AZ''VpnGw4''VpnGw4AZ''VpnGw5''VpnGw5AZ' |
| tier | Gateway SKU tier. | 'Basic''ErGw1AZ''ErGw2AZ''ErGw3AZ''HighPerformance''Standard''UltraPerformance''VpnGw1''VpnGw1AZ''VpnGw2''VpnGw2AZ''VpnGw3''VpnGw3AZ''VpnGw4''VpnGw4AZ''VpnGw5''VpnGw5AZ' |


### VirtualNetworkGatewayPolicyGroup

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of tVirtualNetworkGatewayPolicyGroup. | VirtualNetworkGatewayPolicyGroupProperties |


### VirtualNetworkGatewayPolicyGroupProperties

| Name | Description | Value |
|-|-|-|
| isDefault | Shows if this is a Default VirtualNetworkGatewayPolicyGroup or not. | bool (required) |
| policyMembers | Multiple PolicyMembers for VirtualNetworkGatewayPolicyGroup. | VirtualNetworkGatewayPolicyGroupMember[] (required) |
| priority | Priority for VirtualNetworkGatewayPolicyGroup. | int (required) |


### VirtualNetworkGatewayPolicyGroupMember

| Name | Description | Value |
|-|-|-|
| attributeType | The Vpn Policy member attribute type. | 'AADGroupId''CertificateGroupId''RadiusAzureGroupId' |
| attributeValue | The value of Attribute used for this VirtualNetworkGatewayPolicyGroupMember. | string |
| name | Name of the VirtualNetworkGatewayPolicyGroupMember. | string |


### VpnClientConfiguration

| Name | Description | Value |
|-|-|-|
| aadAudience | The AADAudience property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication. | string |
| aadIssuer | The AADIssuer property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication. | string |
| aadTenant | The AADTenant property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication. | string |
| radiusServerAddress | The radius server address property of the VirtualNetworkGateway resource for vpn client connection. | string |
| radiusServers | The radiusServers property for multiple radius server configuration. | RadiusServer[] |
| radiusServerSecret | The radius secret property of the VirtualNetworkGateway resource for vpn client connection. | string |
| vngClientConnectionConfigurations | per ip address pool connection policy for virtual network gateway P2S client. | VngClientConnectionConfiguration[] |
| vpnAuthenticationTypes | VPN authentication types for the virtual network gateway.. | String array containing any of:'AAD''Certificate''Radius' |
| vpnClientAddressPool | The reference to the address space resource which represents Address space for P2S VpnClient. | AddressSpace |
| vpnClientIpsecPolicies | VpnClientIpsecPolicies for virtual network gateway P2S client. | IpsecPolicy[] |
| vpnClientProtocols | VpnClientProtocols for Virtual network gateway. | String array containing any of:'IkeV2''OpenVPN''SSTP' |
| vpnClientRevokedCertificates | VpnClientRevokedCertificate for Virtual network gateway. | VpnClientRevokedCertificate[] |
| vpnClientRootCertificates | VpnClientRootCertificate for virtual network gateway. | VpnClientRootCertificate[] |


### RadiusServer

| Name | Description | Value |
|-|-|-|
| radiusServerAddress | The address of this radius server. | string (required) |
| radiusServerScore | The initial score assigned to this radius server. | int |
| radiusServerSecret | The secret used for this radius server. | string |


### VngClientConnectionConfiguration

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the vpn client root certificate. | VngClientConnectionConfigurationProperties |


### VngClientConnectionConfigurationProperties

| Name | Description | Value |
|-|-|-|
| virtualNetworkGatewayPolicyGroups | List of references to virtualNetworkGatewayPolicyGroups | SubResource[] (required) |
| vpnClientAddressPool | The reference to the address space resource which represents Address space for P2S VpnClient. | AddressSpace(required) |


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


### VpnClientRevokedCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the vpn client revoked certificate. | VpnClientRevokedCertificatePropertiesFormat |


### VpnClientRevokedCertificatePropertiesFormat

| Name | Description | Value |
|-|-|-|
| thumbprint | The revoked VPN client certificate thumbprint. | string |


### VpnClientRootCertificate

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the vpn client root certificate. | VpnClientRootCertificatePropertiesFormat(required) |


### VpnClientRootCertificatePropertiesFormat

| Name | Description | Value |
|-|-|-|
| publicCertData | The certificate public data. | string (required) |


