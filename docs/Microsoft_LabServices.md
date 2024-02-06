## Microsoft.LabServices/labaccounts@2018-10-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enabledRegionSelection = bool
      provisioningState = "string"
      uniqueIdentifier = "string"
    }
  })
}

```

## Microsoft.LabServices/labaccounts/galleryimages@2018-10-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/galleryimages@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      isEnabled = bool
      isOverride = bool
      isPlanAuthorized = bool
      provisioningState = "string"
      uniqueIdentifier = "string"
    }
  })
}

```

## Microsoft.LabServices/labaccounts/labs@2018-10-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/labs@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      maxUsersInLab = int
      provisioningState = "string"
      uniqueIdentifier = "string"
      usageQuota = "string"
      userAccessMode = "string"
    }
  })
}

```

## Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/labs/environmentsettings@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      configurationState = "string"
      description = "string"
      provisioningState = "string"
      resourceSettings = {
        galleryImageResourceId = "string"
        referenceVm = {
          password = "string"
          userName = "string"
        }
        size = "string"
      }
      title = "string"
      uniqueIdentifier = "string"
    }
  })
}

```

## Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/labs/environmentsettings/environments@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      provisioningState = "string"
      resourceSets = {
        resourceSettingId = "string"
        vmResourceId = "string"
      }
      uniqueIdentifier = "string"
    }
  })
}

```

## Microsoft.LabServices/labaccounts/labs/users@2018-10-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labaccounts/labs/users@2018-10-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      provisioningState = "string"
      uniqueIdentifier = "string"
    }
  })
}

```

## Microsoft.LabServices/labPlans@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labPlans@2022-08-01"
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
      allowedRegions = [
        "string"
      ]
      defaultAutoShutdownProfile = {
        disconnectDelay = "string"
        idleDelay = "string"
        noConnectDelay = "string"
        shutdownOnDisconnect = "string"
        shutdownOnIdle = "string"
        shutdownWhenNotConnected = "string"
      }
      defaultConnectionProfile = {
        clientRdpAccess = "string"
        clientSshAccess = "string"
        webRdpAccess = "string"
        webSshAccess = "string"
      }
      defaultNetworkProfile = {
        subnetId = "string"
      }
      linkedLmsInstance = "string"
      sharedGalleryId = "string"
      supportInfo = {
        email = "string"
        instructions = "string"
        phone = "string"
        url = "string"
      }
    }
  })
}

```

## Microsoft.LabServices/labPlans/images@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labPlans/images@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      availableRegions = [
        "string"
      ]
      enabledState = "string"
    }
  })
}

```

## Microsoft.LabServices/labs@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labs@2022-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoShutdownProfile = {
        disconnectDelay = "string"
        idleDelay = "string"
        noConnectDelay = "string"
        shutdownOnDisconnect = "string"
        shutdownOnIdle = "string"
        shutdownWhenNotConnected = "string"
      }
      connectionProfile = {
        clientRdpAccess = "string"
        clientSshAccess = "string"
        webRdpAccess = "string"
        webSshAccess = "string"
      }
      description = "string"
      labPlanId = "string"
      networkProfile = {
        loadBalancerId = "string"
        publicIpId = "string"
        subnetId = "string"
      }
      rosterProfile = {
        activeDirectoryGroupId = "string"
        lmsInstance = "string"
        ltiClientId = "string"
        ltiContextId = "string"
        ltiRosterEndpoint = "string"
      }
      securityProfile = {
        openAccess = "string"
      }
      title = "string"
      virtualMachineProfile = {
        additionalCapabilities = {
          installGpuDrivers = "string"
        }
        adminUser = {
          password = "string"
          username = "string"
        }
        createOption = "string"
        imageReference = {
          id = "string"
          offer = "string"
          publisher = "string"
          sku = "string"
          version = "string"
        }
        nonAdminUser = {
          password = "string"
          username = "string"
        }
        sku = {
          capacity = int
          family = "string"
          name = "string"
          size = "string"
          tier = "string"
        }
        usageQuota = "string"
        useSharedPassword = "string"
      }
    }
  })
}

```

## Microsoft.LabServices/labs/schedules@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labs/schedules@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      notes = "string"
      recurrencePattern = {
        expirationDate = "string"
        frequency = "string"
        interval = int
        weekDays = [
          "string"
        ]
      }
      startAt = "string"
      stopAt = "string"
      timeZoneId = "string"
    }
  })
}

```

## Microsoft.LabServices/labs/users@2022-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.LabServices/labs/users@2022-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      additionalUsageQuota = "string"
      email = "string"
    }
  })
}

```

