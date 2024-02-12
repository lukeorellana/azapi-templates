```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnSites@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      bgpProperties = {
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
      deviceProperties = {
        deviceModel = "string"
        deviceVendor = "string"
        linkSpeedInMbps = int
      }
      ipAddress = "string"
      isSecuritySite = bool
      o365Policy = {
        breakOutCategories = {
          allow = bool
          default = bool
          optimize = bool
        }
      }
      siteKey = "string"
      virtualWan = {
        id = "string"
      }
      vpnSiteLinks = [
        {
          id = "string"
          name = "string"
          properties = {
            bgpProperties = {
              asn = int
              bgpPeeringAddress = "string"
            }
            fqdn = "string"
            ipAddress = "string"
            linkProperties = {
              linkProviderName = "string"
              linkSpeedInMbps = int
            }
          }
        }
      ]
    }
  })
}

```

### vpnSites

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the VPN site. | VpnSiteProperties |


### VpnSiteProperties

| Name | Description | Value |
|-|-|-|
| addressSpace | The AddressSpace that contains an array of IP address ranges. | AddressSpace |
| bgpProperties | The set of bgp properties. | BgpSettings |
| deviceProperties | The device properties. | DeviceProperties |
| ipAddress | The ip-address for the vpn-site. | string |
| isSecuritySite | IsSecuritySite flag. | bool |
| o365Policy | Office365 Policy. | O365PolicyProperties |
| siteKey | The key for vpn-site that can be used for connections. | string |
| virtualWan | The VirtualWAN to which the vpnSite belongs. | SubResource |
| vpnSiteLinks | List of all vpn site links. | VpnSiteLink[] |


### AddressSpace

| Name | Description | Value |
|-|-|-|
| addressPrefixes | A list of address blocks reserved for this virtual network in CIDR notation. | string[] |


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


### DeviceProperties

| Name | Description | Value |
|-|-|-|
| deviceModel | Model of the device. | string |
| deviceVendor | Name of the device Vendor. | string |
| linkSpeedInMbps | Link speed. | int |


### O365PolicyProperties

| Name | Description | Value |
|-|-|-|
| breakOutCategories | Office365 breakout categories. | O365BreakOutCategoryPolicies |


### O365BreakOutCategoryPolicies

| Name | Description | Value |
|-|-|-|
| allow | Flag to control allow category. | bool |
| default | Flag to control default category. | bool |
| optimize | Flag to control optimize category. | bool |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |


### VpnSiteLink

| Name | Description | Value |
|-|-|-|
| id | Resource ID. | string |
| name | The name of the resource that is unique within a resource group. This name can be used to access the resource. | string |
| properties | Properties of the VPN site link. | VpnSiteLinkProperties |


### VpnSiteLinkProperties

| Name | Description | Value |
|-|-|-|
| bgpProperties | The set of bgp properties. | VpnLinkBgpSettings |
| fqdn | FQDN of vpn-site-link. | string |
| ipAddress | The ip-address for the vpn-site-link. | string |
| linkProperties | The link provider properties. | VpnLinkProviderProperties |


### VpnLinkBgpSettings

| Name | Description | Value |
|-|-|-|
| asn | The BGP speaker's ASN. | int |
| bgpPeeringAddress | The BGP peering address and BGP identifier of this BGP speaker. | string |


### VpnLinkProviderProperties

| Name | Description | Value |
|-|-|-|
| linkProviderName | Name of the link provider. | string |
| linkSpeedInMbps | Link speed. | int |


