## Microsoft.AVS/privateClouds@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds@2022-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      availability = {
        secondaryZone = int
        strategy = "string"
        zone = int
      }
      circuit = {}
      encryption = {
        keyVaultProperties = {
          keyName = "string"
          keyVaultUrl = "string"
          keyVersion = "string"
        }
        status = "string"
      }
      identitySources = [
        {
          alias = "string"
          baseGroupDN = "string"
          baseUserDN = "string"
          domain = "string"
          name = "string"
          password = "string"
          primaryServer = "string"
          secondaryServer = "string"
          ssl = "string"
          username = "string"
        }
      ]
      internet = "string"
      managementCluster = {
        clusterSize = int
        hosts = [
          "string"
        ]
      }
      networkBlock = "string"
      nsxtPassword = "string"
      secondaryCircuit = {}
      vcenterPassword = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.AVS/privateClouds/addons@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/addons@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addonType = "string"
      // For remaining properties, see AddonProperties objects
    }
  })
}

```

## Microsoft.AVS/privateClouds/authorizations@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/authorizations@2022-05-01"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.AVS/privateClouds/cloudLinks@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/cloudLinks@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedCloud = "string"
    }
  })
}

```

## Microsoft.AVS/privateClouds/clusters@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/clusters@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clusterSize = int
      hosts = [
        "string"
      ]
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.AVS/privateClouds/clusters/datastores@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/clusters/datastores@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      diskPoolVolume = {
        lunName = "string"
        mountOption = "string"
        targetId = "string"
      }
      netAppVolume = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.AVS/privateClouds/clusters/placementPolicies@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/clusters/placementPolicies@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      state = "string"
      type = "string"
      // For remaining properties, see PlacementPolicyProperties objects
    }
  })
}

```

## Microsoft.AVS/privateClouds/globalReachConnections@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/globalReachConnections@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizationKey = "string"
      expressRouteId = "string"
      peerExpressRouteCircuit = "string"
    }
  })
}

```

## Microsoft.AVS/privateClouds/hcxEnterpriseSites@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/hcxEnterpriseSites@2022-05-01"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.AVS/privateClouds/scriptExecutions@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/scriptExecutions@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      failureReason = "string"
      hiddenParameters = [
        {
          name = "string"
          type = "string"
          // For remaining properties, see ScriptExecutionParameter objects
        }
      ]
      namedOutputs = {}
      output = [
        "string"
      ]
      parameters = [
        {
          name = "string"
          type = "string"
          // For remaining properties, see ScriptExecutionParameter objects
        }
      ]
      retention = "string"
      scriptCmdletId = "string"
      timeout = "string"
    }
  })
}

```

## Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      revision = int
      dhcpType = "string"
      // For remaining properties, see WorkloadNetworkDhcpEntity objects
    }
  })
}

```

## Microsoft.AVS/privateClouds/workloadNetworks/dnsServices@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/dnsServices@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      defaultDnsZone = "string"
      displayName = "string"
      dnsServiceIp = "string"
      fqdnZones = [
        "string"
      ]
      logLevel = "string"
      revision = int
    }
  })
}

```

## Microsoft.AVS/privateClouds/workloadNetworks/dnsZones@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/dnsZones@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      dnsServerIps = [
        "string"
      ]
      dnsServices = int
      domain = [
        "string"
      ]
      revision = int
      sourceIp = "string"
    }
  })
}

```

## Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      destination = "string"
      direction = "string"
      displayName = "string"
      revision = int
      source = "string"
    }
  })
}

```

## Microsoft.AVS/privateClouds/workloadNetworks/publicIPs@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/publicIPs@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      numberOfPublicIPs = int
    }
  })
}

```

## Microsoft.AVS/privateClouds/workloadNetworks/segments@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/segments@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectedGateway = "string"
      displayName = "string"
      revision = int
      subnet = {
        dhcpRanges = [
          "string"
        ]
        gatewayAddress = "string"
      }
    }
  })
}

```

## Microsoft.AVS/privateClouds/workloadNetworks/vmGroups@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AVS/privateClouds/workloadNetworks/vmGroups@2022-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      members = [
        "string"
      ]
      revision = int
    }
  })
}

```

