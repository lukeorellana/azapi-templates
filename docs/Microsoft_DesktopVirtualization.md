## Microsoft.DesktopVirtualization/appAttachPackages@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/appAttachPackages@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      failHealthCheckOnStagingFailure = "string"
      hostPoolReferences = [
        "string"
      ]
      image = {
        certificateExpiry = "string"
        certificateName = "string"
        displayName = "string"
        imagePath = "string"
        isActive = bool
        isPackageTimestamped = "string"
        isRegularRegistration = bool
        lastUpdated = "string"
        packageAlias = "string"
        packageApplications = [
          {
            appId = "string"
            appUserModelID = "string"
            description = "string"
            friendlyName = "string"
            iconImageName = "string"
          }
        ]
        packageDependencies = [
          {
            dependencyName = "string"
            minVersion = "string"
            publisher = "string"
          }
        ]
        packageFamilyName = "string"
        packageFullName = "string"
        packageName = "string"
        packageRelativePath = "string"
        version = "string"
      }
      keyVaultURL = "string"
    }
  })
}

```

## Microsoft.DesktopVirtualization/applicationGroups@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/applicationGroups@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      applicationGroupType = "string"
      description = "string"
      friendlyName = "string"
      hostPoolArmPath = "string"
      showInFeed = bool
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    managedBy = "string"
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

## Microsoft.DesktopVirtualization/applicationGroups/applications@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/applicationGroups/applications@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicationType = "string"
      commandLineArguments = "string"
      commandLineSetting = "string"
      description = "string"
      filePath = "string"
      friendlyName = "string"
      iconIndex = int
      iconPath = "string"
      msixPackageApplicationId = "string"
      msixPackageFamilyName = "string"
      showInPortal = bool
    }
  })
}

```

## Microsoft.DesktopVirtualization/hostPools@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/hostPools@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      agentUpdate = {
        maintenanceWindows = [
          {
            dayOfWeek = "string"
            hour = int
          }
        ]
        maintenanceWindowTimeZone = "string"
        type = "string"
        useSessionHostLocalTime = bool
      }
      customRdpProperty = "string"
      description = "string"
      friendlyName = "string"
      hostPoolType = "string"
      loadBalancerType = "string"
      managementType = "string"
      maxSessionLimit = int
      personalDesktopAssignmentType = "string"
      preferredAppGroupType = "string"
      publicNetworkAccess = "string"
      registrationInfo = {
        expirationTime = "string"
        registrationTokenOperation = "string"
        token = "string"
      }
      ring = int
      ssoadfsAuthority = "string"
      ssoClientId = "string"
      ssoClientSecretKeyVaultPath = "string"
      ssoSecretType = "string"
      startVMOnConnect = bool
      validationEnvironment = bool
      vmTemplate = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    managedBy = "string"
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

## Microsoft.DesktopVirtualization/hostPools/msixPackages@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/hostPools/msixPackages@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      imagePath = "string"
      isActive = bool
      isRegularRegistration = bool
      lastUpdated = "string"
      packageApplications = [
        {
          appId = "string"
          appUserModelID = "string"
          description = "string"
          friendlyName = "string"
          iconImageName = "string"
        }
      ]
      packageDependencies = [
        {
          dependencyName = "string"
          minVersion = "string"
          publisher = "string"
        }
      ]
      packageFamilyName = "string"
      packageName = "string"
      packageRelativePath = "string"
      version = "string"
    }
  })
}

```

## Microsoft.DesktopVirtualization/hostPools/privateEndpointConnections@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/hostPools/privateEndpointConnections@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.DesktopVirtualization/hostPools/sessionHostConfigurations@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/hostPools/sessionHostConfigurations@2023-11-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      availabilityZones = [
        int
      ]
      bootDiagnosticsInfo = {
        enabled = bool
        storageUri = "string"
      }
      customConfigurationScriptUrl = "string"
      diskInfo = {
        type = "string"
      }
      domainInfo = {
        activeDirectoryInfo = {
          domainCredentials = {
            passwordKeyVaultSecretUri = "string"
            usernameKeyVaultSecretUri = "string"
          }
          domainName = "string"
          ouPath = "string"
        }
        azureActiveDirectoryInfo = {
          mdmProviderGuid = "string"
        }
        joinType = "string"
      }
      friendlyName = "string"
      imageInfo = {
        customInfo = {
          resourceId = "string"
        }
        marketplaceInfo = {
          exactVersion = "string"
          offer = "string"
          publisher = "string"
          sku = "string"
        }
        type = "string"
      }
      networkInfo = {
        securityGroupId = "string"
        subnetId = "string"
      }
      securityInfo = {
        secureBootEnabled = bool
        type = "string"
        vTpmEnabled = bool
      }
      vmAdminCredentials = {
        passwordKeyVaultSecretUri = "string"
        usernameKeyVaultSecretUri = "string"
      }
      vmLocation = "string"
      vmNamePrefix = "string"
      vmResourceGroup = "string"
      vmSizeId = "string"
      vmTags = {
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.DesktopVirtualization/hostPools/sessionHostManagements@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/hostPools/sessionHostManagements@2023-11-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      scheduledDateTimeZone = "string"
      update = {
        deleteOriginalVm = bool
        logOffDelayMinutes = int
        logOffMessage = "string"
        maxVmsRemoved = int
      }
    }
  })
}

```

## Microsoft.DesktopVirtualization/scalingPlans@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/scalingPlans@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      description = "string"
      exclusionTag = "string"
      friendlyName = "string"
      hostPoolReferences = [
        {
          hostPoolArmPath = "string"
          scalingPlanEnabled = bool
        }
      ]
      hostPoolType = "Pooled"
      schedules = [
        {
          daysOfWeek = [
            "string"
          ]
          name = "string"
          offPeakLoadBalancingAlgorithm = "string"
          offPeakStartTime = {
            hour = int
            minute = int
          }
          peakLoadBalancingAlgorithm = "string"
          peakStartTime = {
            hour = int
            minute = int
          }
          rampDownCapacityThresholdPct = int
          rampDownForceLogoffUsers = bool
          rampDownLoadBalancingAlgorithm = "string"
          rampDownMinimumHostsPct = int
          rampDownNotificationMessage = "string"
          rampDownStartTime = {
            hour = int
            minute = int
          }
          rampDownStopHostsWhen = "string"
          rampDownWaitTimeMinutes = int
          rampUpCapacityThresholdPct = int
          rampUpLoadBalancingAlgorithm = "string"
          rampUpMinimumHostsPct = int
          rampUpStartTime = {
            hour = int
            minute = int
          }
        }
      ]
      timeZone = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    managedBy = "string"
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

## Microsoft.DesktopVirtualization/scalingPlans/personalSchedules@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/scalingPlans/personalSchedules@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      daysOfWeek = [
        "string"
      ]
      offPeakActionOnDisconnect = "string"
      offPeakActionOnLogoff = "string"
      offPeakMinutesToWaitOnDisconnect = int
      offPeakMinutesToWaitOnLogoff = int
      offPeakStartTime = {
        hour = int
        minute = int
      }
      offPeakStartVMOnConnect = "string"
      peakActionOnDisconnect = "string"
      peakActionOnLogoff = "string"
      peakMinutesToWaitOnDisconnect = int
      peakMinutesToWaitOnLogoff = int
      peakStartTime = {
        hour = int
        minute = int
      }
      peakStartVMOnConnect = "string"
      rampDownActionOnDisconnect = "string"
      rampDownActionOnLogoff = "string"
      rampDownMinutesToWaitOnDisconnect = int
      rampDownMinutesToWaitOnLogoff = int
      rampDownStartTime = {
        hour = int
        minute = int
      }
      rampDownStartVMOnConnect = "string"
      rampUpActionOnDisconnect = "string"
      rampUpActionOnLogoff = "string"
      rampUpAutoStartHosts = "string"
      rampUpMinutesToWaitOnDisconnect = int
      rampUpMinutesToWaitOnLogoff = int
      rampUpStartTime = {
        hour = int
        minute = int
      }
      rampUpStartVMOnConnect = "string"
    }
  })
}

```

## Microsoft.DesktopVirtualization/scalingPlans/pooledSchedules@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/scalingPlans/pooledSchedules@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      daysOfWeek = [
        "string"
      ]
      offPeakLoadBalancingAlgorithm = "string"
      offPeakStartTime = {
        hour = int
        minute = int
      }
      peakLoadBalancingAlgorithm = "string"
      peakStartTime = {
        hour = int
        minute = int
      }
      rampDownCapacityThresholdPct = int
      rampDownForceLogoffUsers = bool
      rampDownLoadBalancingAlgorithm = "string"
      rampDownMinimumHostsPct = int
      rampDownNotificationMessage = "string"
      rampDownStartTime = {
        hour = int
        minute = int
      }
      rampDownStopHostsWhen = "string"
      rampDownWaitTimeMinutes = int
      rampUpCapacityThresholdPct = int
      rampUpLoadBalancingAlgorithm = "string"
      rampUpMinimumHostsPct = int
      rampUpStartTime = {
        hour = int
        minute = int
      }
    }
  })
}

```

## Microsoft.DesktopVirtualization/workspaces@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/workspaces@2023-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      applicationGroupReferences = [
        "string"
      ]
      description = "string"
      friendlyName = "string"
      publicNetworkAccess = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
    managedBy = "string"
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
      version = "string"
    }
  })
}

```

## Microsoft.DesktopVirtualization/workspaces/privateEndpointConnections@2023-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DesktopVirtualization/workspaces/privateEndpointConnections@2023-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

