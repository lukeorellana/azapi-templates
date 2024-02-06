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

