## Microsoft.Peering/peerAsns@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Peering/peerAsns@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      peerAsn = int
      peerContactDetail = [
        {
          email = "string"
          phone = "string"
          role = "string"
        }
      ]
      peerName = "string"
    }
  })
}

```

### peerAsns

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| properties | The properties that define a peer's ASN. | PeerAsnProperties |


### PeerAsnProperties

| Name | Description | Value |
|-|-|-|
| peerAsn | The Autonomous System Number (ASN) of the peer. | int |
| peerContactDetail | The contact details of the peer. | ContactDetail[] |
| peerName | The name of the peer. | string |


### ContactDetail

| Name | Description | Value |
|-|-|-|
| email | The e-mail address of the contact. | string |
| phone | The phone number of the contact. | string |
| role | The role of the contact. | 'Escalation''Noc''Other''Policy''Service''Technical' |
## Microsoft.Peering/peerings@2022-10-01

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
## Microsoft.Peering/peerings/registeredAsns@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Peering/peerings/registeredAsns@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      asn = int
    }
  })
}

```

### peerings/registeredAsns

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:peerings |
| properties | The properties that define a registered ASN. | PeeringRegisteredAsnProperties |


### PeeringRegisteredAsnProperties

| Name | Description | Value |
|-|-|-|
| asn | The customer's ASN from which traffic originates. | int |
## Microsoft.Peering/peerings/registeredPrefixes@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Peering/peerings/registeredPrefixes@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      prefix = "string"
    }
  })
}

```

### peerings/registeredPrefixes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:peerings |
| properties | The properties that define a registered prefix. | PeeringRegisteredPrefixProperties |


### PeeringRegisteredPrefixProperties

| Name | Description | Value |
|-|-|-|
| prefix | The customer's prefix from which traffic originates. | string |
## Microsoft.Peering/peeringServices@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Peering/peeringServices@2022-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      logAnalyticsWorkspaceProperties = {}
      peeringServiceLocation = "string"
      peeringServiceProvider = "string"
      providerBackupPeeringLocation = "string"
      providerPrimaryPeeringLocation = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

### peeringServices

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The location of the resource. | string (required) |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| sku | The SKU that defines the type of the peering service. | PeeringServiceSku |
| properties | The properties that define a peering service. | PeeringServiceProperties |


### PeeringServiceProperties

| Name | Description | Value |
|-|-|-|
| logAnalyticsWorkspaceProperties | The Log Analytics Workspace Properties | LogAnalyticsWorkspaceProperties |
| peeringServiceLocation | The location (state/province) of the customer. | string |
| peeringServiceProvider | The name of the service provider. | string |
| providerBackupPeeringLocation | The backup peering (Microsoft/service provider) location to be used for customer traffic. | string |
| providerPrimaryPeeringLocation | The primary peering (Microsoft/service provider) location to be used for customer traffic. | string |


### PeeringServiceSku

| Name | Description | Value |
|-|-|-|
| name | The name of the peering service SKU. | string |
## Microsoft.Peering/peeringServices/connectionMonitorTests@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Peering/peeringServices/connectionMonitorTests@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      destination = "string"
      destinationPort = int
      sourceAgent = "string"
      testFrequencyInSec = int
    }
  })
}

```

### peeringServices/connectionMonitorTests

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:peeringServices |
| properties | The properties that define a Connection Monitor Test. | ConnectionMonitorTestProperties |


### ConnectionMonitorTestProperties

| Name | Description | Value |
|-|-|-|
| destination | The Connection Monitor test destination | string |
| destinationPort | The Connection Monitor test destination port | int |
| sourceAgent | The Connection Monitor test source agent | string |
| testFrequencyInSec | The Connection Monitor test frequency in seconds | int |
## Microsoft.Peering/peeringServices/prefixes@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Peering/peeringServices/prefixes@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      peeringServicePrefixKey = "string"
      prefix = "string"
    }
  })
}

```

### peeringServices/prefixes

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:peeringServices |
| properties | Gets or sets the peering prefix properties. | PeeringServicePrefixProperties |


### PeeringServicePrefixProperties

| Name | Description | Value |
|-|-|-|
| peeringServicePrefixKey | The peering service prefix key | string |
| prefix | The prefix from which your traffic originates. | string |
