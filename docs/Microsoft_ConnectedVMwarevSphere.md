## Microsoft.ConnectedVMwarevSphere/clusters@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/clusters@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      inventoryItemId = "string"
      moRefId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

## Microsoft.ConnectedVMwarevSphere/datastores@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/datastores@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      inventoryItemId = "string"
      moRefId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

## Microsoft.ConnectedVMwarevSphere/hosts@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/hosts@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      inventoryItemId = "string"
      moRefId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

## Microsoft.ConnectedVMwarevSphere/resourcePools@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/resourcePools@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      inventoryItemId = "string"
      moRefId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

## Microsoft.ConnectedVMwarevSphere/vcenters@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/vcenters@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      credentials = {
        password = "string"
        username = "string"
      }
      fqdn = "string"
      port = int
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

## Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/vcenters/inventoryItems@2022-07-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      managedResourceId = "string"
      moName = "string"
      moRefId = "string"
      inventoryType = "string"
      // For remaining properties, see InventoryItemProperties objects
    }
    kind = "string"
  })
}

```

## Microsoft.ConnectedVMwarevSphere/virtualMachines@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualMachines@2022-07-15-preview"
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
      firmwareType = "string"
      guestAgentProfile = {
        clientPublicKey = "string"
      }
      hardwareProfile = {
        memorySizeMB = int
        numCoresPerSocket = int
        numCPUs = int
      }
      inventoryItemId = "string"
      moRefId = "string"
      networkProfile = {
        networkInterfaces = [
          {
            deviceKey = int
            ipSettings = {
              allocationMethod = "string"
              dnsServers = [
                "string"
              ]
              gateway = [
                "string"
              ]
              ipAddress = "string"
              subnetMask = "string"
            }
            name = "string"
            networkId = "string"
            nicType = "string"
            powerOnBoot = "string"
          }
        ]
      }
      osProfile = {
        adminPassword = "string"
        adminUsername = "string"
        computerName = "string"
        guestId = "string"
        linuxConfiguration = {
          patchSettings = {
            assessmentMode = "string"
            patchMode = "string"
          }
        }
        osType = "string"
        windowsConfiguration = {
          patchSettings = {
            assessmentMode = "string"
            patchMode = "string"
          }
        }
      }
      placementProfile = {
        clusterId = "string"
        datastoreId = "string"
        hostId = "string"
        resourcePoolId = "string"
      }
      resourcePoolId = "string"
      securityProfile = {
        uefiSettings = {
          secureBootEnabled = bool
        }
      }
      smbiosUuid = "string"
      storageProfile = {
        disks = [
          {
            controllerKey = int
            deviceKey = int
            deviceName = "string"
            diskMode = "string"
            diskSizeGB = int
            diskType = "string"
            name = "string"
            unitNumber = int
          }
        ]
      }
      templateId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

## Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualMachines/extensions@2022-07-15-preview"
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
      enableAutomaticUpgrade = bool
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

## Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualMachines/guestAgents@2022-07-15-preview"
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

## Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualMachines/hybridIdentityMetadata@2022-07-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicKey = "string"
      vmId = "string"
    }
  })
}

```

## Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualMachineTemplates@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      inventoryItemId = "string"
      moRefId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

## Microsoft.ConnectedVMwarevSphere/virtualNetworks@2022-07-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ConnectedVMwarevSphere/virtualNetworks@2022-07-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      inventoryItemId = "string"
      moRefId = "string"
      vCenterId = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "string"
    }
  })
}

```

