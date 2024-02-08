```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Peering/peerings@2022-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      direct = {
        connections = [
          {
            bandwidthInMbps = int
            bgpSession = {
              maxPrefixesAdvertisedV4 = int
              maxPrefixesAdvertisedV6 = int
              md5AuthenticationKey = "string"
              microsoftSessionIPv4Address = "string"
              microsoftSessionIPv6Address = "string"
              peerSessionIPv4Address = "string"
              peerSessionIPv6Address = "string"
              sessionPrefixV4 = "string"
              sessionPrefixV6 = "string"
            }
            connectionIdentifier = "string"
            peeringDBFacilityId = int
            sessionAddressProvider = "string"
            useForPeeringService = bool
          }
        ]
        directPeeringType = "string"
        peerAsn = {
          id = "string"
        }
      }
      exchange = {
        connections = [
          {
            bgpSession = {
              maxPrefixesAdvertisedV4 = int
              maxPrefixesAdvertisedV6 = int
              md5AuthenticationKey = "string"
              microsoftSessionIPv4Address = "string"
              microsoftSessionIPv6Address = "string"
              peerSessionIPv4Address = "string"
              peerSessionIPv6Address = "string"
              sessionPrefixV4 = "string"
              sessionPrefixV6 = "string"
            }
            connectionIdentifier = "string"
            peeringDBFacilityId = int
          }
        ]
        peerAsn = {
          id = "string"
        }
      }
      peeringLocation = "string"
    }
    sku = {
      name = "string"
    }
    kind = "string"
  })
}

```

### peerings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the resource. | string (required) |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU that defines the tier and kind of the peering. | PeeringSku(required) |
| kind | The kind of the peering. | 'Direct''Exchange' (required) |
| properties | The properties that define a peering. | PeeringProperties |


### PeeringProperties

| Name | Description | Value |
|-|-|-|
| direct | The properties that define a direct peering. | PeeringPropertiesDirect |
| exchange | The properties that define an exchange peering. | PeeringPropertiesExchange |
| peeringLocation | The location of the peering. | string |


### PeeringPropertiesDirect

| Name | Description | Value |
|-|-|-|
| connections | The set of connections that constitute a direct peering. | DirectConnection[] |
| directPeeringType | The type of direct peering. | 'Cdn''Edge''EdgeZoneForOperators''Internal''Ix''IxRs''Transit''Voice' |
| peerAsn | The reference of the peer ASN. | SubResource |


### DirectConnection

| Name | Description | Value |
|-|-|-|
| bandwidthInMbps | The bandwidth of the connection. | int |
| bgpSession | The BGP session associated with the connection. | BgpSession |
| connectionIdentifier | The unique identifier (GUID) for the connection. | string |
| peeringDBFacilityId | The PeeringDB.com ID of the facility at which the connection has to be set up. | int |
| sessionAddressProvider | The field indicating if Microsoft provides session ip addresses. | 'Microsoft''Peer' |
| useForPeeringService | The flag that indicates whether or not the connection is used for peering service. | bool |


### BgpSession

| Name | Description | Value |
|-|-|-|
| maxPrefixesAdvertisedV4 | The maximum number of prefixes advertised over the IPv4 session. | int |
| maxPrefixesAdvertisedV6 | The maximum number of prefixes advertised over the IPv6 session. | int |
| md5AuthenticationKey | The MD5 authentication key of the session. | string |
| microsoftSessionIPv4Address | The IPv4 session address on Microsoft's end. | string |
| microsoftSessionIPv6Address | The IPv6 session address on Microsoft's end. | string |
| peerSessionIPv4Address | The IPv4 session address on peer's end. | string |
| peerSessionIPv6Address | The IPv6 session address on peer's end. | string |
| sessionPrefixV4 | The IPv4 prefix that contains both ends' IPv4 addresses. | string |
| sessionPrefixV6 | The IPv6 prefix that contains both ends' IPv6 addresses. | string |


### SubResource

| Name | Description | Value |
|-|-|-|
| id | The identifier of the referenced resource. | string |


### PeeringPropertiesExchange

| Name | Description | Value |
|-|-|-|
| connections | The set of connections that constitute an exchange peering. | ExchangeConnection[] |
| peerAsn | The reference of the peer ASN. | SubResource |


### ExchangeConnection

| Name | Description | Value |
|-|-|-|
| bgpSession | The BGP session associated with the connection. | BgpSession |
| connectionIdentifier | The unique identifier (GUID) for the connection. | string |
| peeringDBFacilityId | The PeeringDB.com ID of the facility at which the connection has to be set up. | int |


### PeeringSku

| Name | Description | Value |
|-|-|-|
| name | The name of the peering SKU. | string |


