## Microsoft.AzureStackHCI/clusters@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters@2022-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      aadApplicationObjectId = "string"
      aadClientId = "string"
      aadServicePrincipalObjectId = "string"
      aadTenantId = "string"
      cloudManagementEndpoint = "string"
      desiredProperties = {
        diagnosticLevel = "string"
        windowsServerSubscription = "string"
      }
      softwareAssuranceProperties = {
        softwareAssuranceIntent = "string"
        softwareAssuranceStatus = "string"
      }
    }
  })
}

```

## Microsoft.AzureStackHCI/clusters/arcSettings@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/arcSettings@2022-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      arcApplicationClientId = "string"
      arcApplicationObjectId = "string"
      arcApplicationTenantId = "string"
      arcInstanceResourceGroup = "string"
      arcServicePrincipalObjectId = "string"
    }
  })
}

```

## Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/arcSettings/extensions@2022-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      extensionParameters = {
        autoUpgradeMinorVersion = bool
        enableAutomaticUpgrade = bool
        forceUpdateTag = "string"
        publisher = "string"
        type = "string"
        typeHandlerVersion = "string"
      }
    }
  })
}

```

## Microsoft.AzureStackHCI/clusters/updates@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/updates@2022-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      additionalProperties = "string"
      availabilityType = "string"
      componentVersions = [
        {
          lastUpdated = "string"
          packageType = "string"
          version = "string"
        }
      ]
      description = "string"
      displayName = "string"
      healthCheckDate = "string"
      healthCheckResult = [
        {
          additionalData = "string"
          description = "string"
          healthCheckSource = "string"
          name = "string"
          remediation = "string"
          severity = "string"
          status = "string"
          tags = {
            key = "string"
            value = "string"
          }
          targetResourceID = "string"
          targetResourceName = "string"
          timestamp = "string"
          title = "string"
        }
      ]
      healthState = "string"
      installedDate = "string"
      packagePath = "string"
      packageSizeInMb = int
      packageType = "string"
      prerequisites = [
        {
          packageName = "string"
          updateType = "string"
          version = "string"
        }
      ]
      publisher = "string"
      rebootRequired = "string"
      releaseLink = "string"
      state = "string"
      updateStateProperties = {
        notifyMessage = "string"
        progressPercentage = int
      }
      version = "string"
    }
  })
}

```

## Microsoft.AzureStackHCI/clusters/updates/updateRuns@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/updates/updateRuns@2022-12-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      duration = "string"
      lastUpdatedTime = "string"
      progress = {
        description = "string"
        endTimeUtc = "string"
        errorMessage = "string"
        lastUpdatedTimeUtc = "string"
        name = "string"
        startTimeUtc = "string"
        status = "string"
        steps = [
          {
      }
      state = "string"
      timeStarted = "string"
    }
  })
}

```

## Microsoft.AzureStackHCI/clusters/updateSummaries@2022-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/clusters/updateSummaries@2022-12-01"
  name = "default"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      currentVersion = "string"
      hardwareModel = "string"
      healthCheckDate = "string"
      healthCheckResult = [
        {
          additionalData = "string"
          description = "string"
          healthCheckSource = "string"
          name = "string"
          remediation = "string"
          severity = "string"
          status = "string"
          tags = {
            key = "string"
            value = "string"
          }
          targetResourceID = "string"
          targetResourceName = "string"
          timestamp = "string"
          title = "string"
        }
      ]
      healthState = "string"
      lastChecked = "string"
      lastUpdated = "string"
      oemFamily = "string"
      packageVersions = [
        {
          lastUpdated = "string"
          packageType = "string"
          version = "string"
        }
      ]
      state = "string"
    }
  })
}

```

## Microsoft.AzureStackHCI/galleryimages@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/galleryimages@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      cloudInitDataSource = "string"
      containerName = "string"
      hyperVGeneration = "string"
      identifier = {
        offer = "string"
        publisher = "string"
        sku = "string"
      }
      imagePath = "string"
      osType = "string"
      resourceName = "string"
      version = {
        name = "string"
        properties = {
          storageProfile = {
            osDiskImage = {}
          }
        }
      }
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

## Microsoft.AzureStackHCI/marketplacegalleryimages@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/marketplacegalleryimages@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      cloudInitDataSource = "string"
      containerName = "string"
      hyperVGeneration = "string"
      identifier = {
        offer = "string"
        publisher = "string"
        sku = "string"
      }
      osType = "string"
      resourceName = "string"
      version = {
        name = "string"
        properties = {
          storageProfile = {
            osDiskImage = {}
          }
        }
      }
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

## Microsoft.AzureStackHCI/networkinterfaces@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/networkinterfaces@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dnsSettings = {
        dnsServers = [
          "string"
        ]
      }
      ipConfigurations = [
        {
          name = "string"
          properties = {
            gateway = "string"
            prefixLength = "string"
            privateIPAddress = "string"
            privateIPAllocationMethod = "string"
            subnet = {
              id = "string"
            }
          }
        }
      ]
      macAddress = "string"
      resourceName = "string"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

## Microsoft.AzureStackHCI/storagecontainers@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/storagecontainers@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      path = "string"
      provisioningState = "string"
      resourceName = "string"
    }
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

## Microsoft.AzureStackHCI/virtualharddisks@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualharddisks@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      blockSizeBytes = int
      containerId = "string"
      diskFileFormat = "string"
      diskSizeBytes = int
      dynamic = bool
      hyperVGeneration = "string"
      logicalSectorBytes = int
      physicalSectorBytes = int
      resourceName = "string"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

## Microsoft.AzureStackHCI/virtualmachines@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualmachines@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      guestAgentProfile = {}
      hardwareProfile = {
        dynamicMemoryConfig = {
          maximumMemoryGB = int
          minimumMemoryGB = int
          targetMemoryBuffer = int
        }
        memoryGB = int
        processors = int
        vmSize = "string"
      }
      networkProfile = {
        networkInterfaces = [
          {
            id = "string"
          }
        ]
      }
      osProfile = {
        adminPassword = "string"
        adminUsername = "string"
        computerName = "string"
        linuxConfiguration = {
          disablePasswordAuthentication = bool
          provisionVMAgent = bool
          ssh = {
            publicKeys = [
              {
                keyData = "string"
                path = "string"
              }
            ]
          }
        }
        osType = "string"
        windowsConfiguration = {
          enableAutomaticUpdates = bool
          provisionVMAgent = bool
          ssh = {
            publicKeys = [
              {
                keyData = "string"
                path = "string"
              }
            ]
          }
          timeZone = "string"
        }
      }
      resourceName = "string"
      securityProfile = {
        enableTPM = bool
        uefiSettings = {
          secureBootEnabled = bool
        }
      }
      storageProfile = {
        dataDisks = [
          {
            name = "string"
          }
        ]
        imageReference = {
          name = "string"
        }
        osDisk = {
          id = "string"
        }
        vmConfigContainerName = "string"
      }
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

## Microsoft.AzureStackHCI/virtualMachines/extensions@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualMachines/extensions@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoUpgradeMinorVersion = bool
      forceUpdateTag = "string"
      instanceView = {
        status = {}
      }
      publisher = "string"
      type = "string"
      typeHandlerVersion = "string"
    }
  })
}

```

## Microsoft.AzureStackHCI/virtualMachines/guestAgents@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualMachines/guestAgents@2021-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        password = "string"
        username = "string"
      }
      httpProxyConfig = {
        httpsProxy = "string"
      }
      provisioningAction = "string"
    }
  })
}

```

## Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata@2021-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicKey = "string"
      resourceUid = "string"
    }
  })
}

```

## Microsoft.AzureStackHCI/virtualnetworks@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureStackHCI/virtualnetworks@2021-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      networkType = "string"
      resourceName = "string"
      subnets = [
        {
          name = "string"
          properties = {
            addressPrefix = "string"
            addressPrefixes = [
              "string"
            ]
            ipAllocationMethod = "string"
            ipConfigurationReferences = [
              {
                ID = "string"
              }
            ]
            ipPools = [
              {
                end = "string"
                info = {}
                ipPoolType = "string"
                start = "string"
              }
            ]
            routeTable = {
              id = "string"
              name = "string"
              properties = {
                routes = [
                  {
                    name = "string"
                    properties = {
                      addressPrefix = "string"
                      nextHopIpAddress = "string"
                    }
                  }
                ]
              }
              type = "string"
            }
            vlan = int
          }
        }
      ]
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

