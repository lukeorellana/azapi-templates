```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/localNetworkGateways@2023-04-01"
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
      fqdn = "string"
      gatewayIpAddress = "string"
      localNetworkAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
    }
  })
}

```

### localNetworkGateways

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, underscores, periods, and hyphens.Start with alphanumeric. End alphanumeric or underscore. |
| location | Resource location. | string |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | Properties of the local network gateway. | LocalNetworkGatewayPropertiesFormat(required) |


### LocalNetworkGatewayPropertiesFormat

| Name | Description | Value |
|-|-|-|
| bgpSettings | Local network gateway's BGP speaker settings. | BgpSettings |
| fqdn | FQDN of local network gateway. | string |
| gatewayIpAddress | IP address of local network gateway. | string |
| localNetworkAddressSpace | Local network site address space. | AddressSpace |


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


