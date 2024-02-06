## Microsoft.DevTestLab/labs@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      announcement = {
        enabled = "string"
        expirationDate = "string"
        expired = bool
        markdown = "string"
        title = "string"
      }
      environmentPermission = "string"
      extendedProperties = {}
      labStorageType = "string"
      mandatoryArtifactsResourceIdsLinux = [
        "string"
      ]
      mandatoryArtifactsResourceIdsWindows = [
        "string"
      ]
      premiumDataDisks = "string"
      support = {
        enabled = "string"
        markdown = "string"
      }
    }
  })
}

```

## Microsoft.DevTestLab/labs/artifactsources@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/artifactsources@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      armTemplateFolderPath = "string"
      branchRef = "string"
      displayName = "string"
      folderPath = "string"
      securityToken = "string"
      sourceType = "string"
      status = "string"
      uri = "string"
    }
  })
}

```

## Microsoft.DevTestLab/labs/costs@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/costs@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      createdDate = "string"
      currencyCode = "string"
      endDateTime = "string"
      startDateTime = "string"
      targetCost = {
        costThresholds = [
          {
            displayOnChart = "string"
            notificationSent = "string"
            percentageThreshold = {
              thresholdValue = int
            }
            sendNotificationWhenExceeded = "string"
            thresholdId = "string"
          }
        ]
        cycleEndDateTime = "string"
        cycleStartDateTime = "string"
        cycleType = "string"
        status = "string"
        target = int
      }
    }
  })
}

```

## Microsoft.DevTestLab/labs/customimages@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/customimages@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      author = "string"
      customImagePlan = {
        id = "string"
        offer = "string"
        publisher = "string"
      }
      dataDiskStorageInfo = [
        {
          lun = "string"
          storageType = "string"
        }
      ]
      description = "string"
      isPlanAuthorized = bool
      managedImageId = "string"
      managedSnapshotId = "string"
      vhd = {
        imageName = "string"
        osType = "string"
        sysPrep = bool
      }
      vm = {
        linuxOsInfo = {
          linuxOsState = "string"
        }
        sourceVmId = "string"
        windowsOsInfo = {
          windowsOsState = "string"
        }
      }
    }
  })
}

```

## Microsoft.DevTestLab/labs/formulas@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/formulas@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      formulaContent = {
        location = "string"
        name = "string"
        properties = {
          allowClaim = bool
          artifacts = [
            {
              artifactId = "string"
              artifactTitle = "string"
              deploymentStatusMessage = "string"
              installTime = "string"
              parameters = [
                {
                  name = "string"
                  value = "string"
                }
              ]
              status = "string"
              vmExtensionStatusMessage = "string"
            }
          ]
          bulkCreationParameters = {
            instanceCount = int
          }
          createdDate = "string"
          customImageId = "string"
          dataDiskParameters = [
            {
              attachNewDataDiskOptions = {
                diskName = "string"
                diskSizeGiB = int
                diskType = "string"
              }
              existingLabDiskId = "string"
              hostCaching = "string"
            }
          ]
          disallowPublicIpAddress = bool
          environmentId = "string"
          expirationDate = "string"
          galleryImageReference = {
            offer = "string"
            osType = "string"
            publisher = "string"
            sku = "string"
            version = "string"
          }
          isAuthenticationWithSshKey = bool
          labSubnetName = "string"
          labVirtualNetworkId = "string"
          networkInterface = {
            dnsName = "string"
            privateIpAddress = "string"
            publicIpAddress = "string"
            publicIpAddressId = "string"
            rdpAuthority = "string"
            sharedPublicIpAddressConfiguration = {
              inboundNatRules = [
                {
                  backendPort = int
                  frontendPort = int
                  transportProtocol = "string"
                }
              ]
            }
            sshAuthority = "string"
            subnetId = "string"
            virtualNetworkId = "string"
          }
          notes = "string"
          ownerObjectId = "string"
          ownerUserPrincipalName = "string"
          password = "string"
          planId = "string"
          scheduleParameters = [
            {
              name = "string"
              properties = {
                dailyRecurrence = {
                  time = "string"
                }
                hourlyRecurrence = {
                  minute = int
                }
                notificationSettings = {
                  emailRecipient = "string"
                  notificationLocale = "string"
                  status = "string"
                  timeInMinutes = int
                  webhookUrl = "string"
                }
                status = "string"
                targetResourceId = "string"
                taskType = "string"
                weeklyRecurrence = {
                  time = "string"
                  weekdays = [
                    "string"
                  ]
                }
              }
              tags = {}
            }
          ]
          size = "string"
          sshKey = "string"
          storageType = "string"
          userName = "string"
        }
        tags = {}
      }
      osType = "string"
      vm = {
        labVmId = "string"
      }
    }
  })
}

```

## Microsoft.DevTestLab/labs/notificationchannels@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/notificationchannels@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      emailRecipient = "string"
      events = [
        {
          eventName = "string"
        }
      ]
      notificationLocale = "string"
      webHookUrl = "string"
    }
  })
}

```

## Microsoft.DevTestLab/labs/policysets/policies@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/policysets/policies@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      evaluatorType = "string"
      factData = "string"
      factName = "string"
      status = "string"
      threshold = "string"
    }
  })
}

```

## Microsoft.DevTestLab/labs/schedules@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/schedules@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dailyRecurrence = {
        time = "string"
      }
      hourlyRecurrence = {
        minute = int
      }
      notificationSettings = {
        emailRecipient = "string"
        notificationLocale = "string"
        status = "string"
        timeInMinutes = int
        webhookUrl = "string"
      }
      status = "string"
      targetResourceId = "string"
      taskType = "string"
      weeklyRecurrence = {
        time = "string"
        weekdays = [
          "string"
        ]
      }
    }
  })
}

```

## Microsoft.DevTestLab/labs/servicerunners@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/servicerunners@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    clientSecretUrl = "string"
    type = "string"
  }
}

```

## Microsoft.DevTestLab/labs/users@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      identity = {
        appId = "string"
        objectId = "string"
        principalId = "string"
        principalName = "string"
        tenantId = "string"
      }
      secretStore = {
        keyVaultId = "string"
        keyVaultUri = "string"
      }
    }
  })
}

```

## Microsoft.DevTestLab/labs/users/disks@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users/disks@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      diskBlobName = "string"
      diskSizeGiB = int
      diskType = "string"
      diskUri = "string"
      leasedByLabVmId = "string"
      managedDiskId = "string"
      storageAccountId = "string"
    }
  })
}

```

## Microsoft.DevTestLab/labs/users/environments@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users/environments@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      armTemplateDisplayName = "string"
      deploymentProperties = {
        armTemplateId = "string"
        parameters = [
          {
            name = "string"
            value = "string"
          }
        ]
      }
    }
  })
}

```

## Microsoft.DevTestLab/labs/users/secrets@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users/secrets@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      value = "string"
    }
  })
}

```

## Microsoft.DevTestLab/labs/users/servicefabrics@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users/servicefabrics@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      environmentId = "string"
      externalServiceFabricId = "string"
    }
  })
}

```

## Microsoft.DevTestLab/labs/users/servicefabrics/schedules@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/users/servicefabrics/schedules@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dailyRecurrence = {
        time = "string"
      }
      hourlyRecurrence = {
        minute = int
      }
      notificationSettings = {
        emailRecipient = "string"
        notificationLocale = "string"
        status = "string"
        timeInMinutes = int
        webhookUrl = "string"
      }
      status = "string"
      targetResourceId = "string"
      taskType = "string"
      weeklyRecurrence = {
        time = "string"
        weekdays = [
          "string"
        ]
      }
    }
  })
}

```

## Microsoft.DevTestLab/labs/virtualmachines@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/virtualmachines@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowClaim = bool
      artifacts = [
        {
          artifactId = "string"
          artifactTitle = "string"
          deploymentStatusMessage = "string"
          installTime = "string"
          parameters = [
            {
              name = "string"
              value = "string"
            }
          ]
          status = "string"
          vmExtensionStatusMessage = "string"
        }
      ]
      createdDate = "string"
      customImageId = "string"
      dataDiskParameters = [
        {
          attachNewDataDiskOptions = {
            diskName = "string"
            diskSizeGiB = int
            diskType = "string"
          }
          existingLabDiskId = "string"
          hostCaching = "string"
        }
      ]
      disallowPublicIpAddress = bool
      environmentId = "string"
      expirationDate = "string"
      galleryImageReference = {
        offer = "string"
        osType = "string"
        publisher = "string"
        sku = "string"
        version = "string"
      }
      isAuthenticationWithSshKey = bool
      labSubnetName = "string"
      labVirtualNetworkId = "string"
      networkInterface = {
        dnsName = "string"
        privateIpAddress = "string"
        publicIpAddress = "string"
        publicIpAddressId = "string"
        rdpAuthority = "string"
        sharedPublicIpAddressConfiguration = {
          inboundNatRules = [
            {
              backendPort = int
              frontendPort = int
              transportProtocol = "string"
            }
          ]
        }
        sshAuthority = "string"
        subnetId = "string"
        virtualNetworkId = "string"
      }
      notes = "string"
      ownerObjectId = "string"
      ownerUserPrincipalName = "string"
      password = "string"
      planId = "string"
      scheduleParameters = [
        {
          name = "string"
          properties = {
            dailyRecurrence = {
              time = "string"
            }
            hourlyRecurrence = {
              minute = int
            }
            notificationSettings = {
              emailRecipient = "string"
              notificationLocale = "string"
              status = "string"
              timeInMinutes = int
              webhookUrl = "string"
            }
            status = "string"
            targetResourceId = "string"
            taskType = "string"
            weeklyRecurrence = {
              time = "string"
              weekdays = [
                "string"
              ]
            }
          }
          tags = {}
        }
      ]
      size = "string"
      sshKey = "string"
      storageType = "string"
      userName = "string"
    }
  })
}

```

## Microsoft.DevTestLab/labs/virtualmachines/schedules@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/virtualmachines/schedules@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dailyRecurrence = {
        time = "string"
      }
      hourlyRecurrence = {
        minute = int
      }
      notificationSettings = {
        emailRecipient = "string"
        notificationLocale = "string"
        status = "string"
        timeInMinutes = int
        webhookUrl = "string"
      }
      status = "string"
      targetResourceId = "string"
      taskType = "string"
      weeklyRecurrence = {
        time = "string"
        weekdays = [
          "string"
        ]
      }
    }
  })
}

```

## Microsoft.DevTestLab/labs/virtualnetworks@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/labs/virtualnetworks@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowedSubnets = [
        {
          allowPublicIp = "string"
          labSubnetName = "string"
          resourceId = "string"
        }
      ]
      description = "string"
      externalProviderResourceId = "string"
      subnetOverrides = [
        {
          labSubnetName = "string"
          resourceId = "string"
          sharedPublicIpAddressConfiguration = {
            allowedPorts = [
              {
                backendPort = int
                transportProtocol = "string"
              }
            ]
          }
          useInVmCreationPermission = "string"
          usePublicIpAddressPermission = "string"
          virtualNetworkPoolName = "string"
        }
      ]
    }
  })
}

```

## Microsoft.DevTestLab/schedules@2018-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DevTestLab/schedules@2018-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dailyRecurrence = {
        time = "string"
      }
      hourlyRecurrence = {
        minute = int
      }
      notificationSettings = {
        emailRecipient = "string"
        notificationLocale = "string"
        status = "string"
        timeInMinutes = int
        webhookUrl = "string"
      }
      status = "string"
      targetResourceId = "string"
      taskType = "string"
      weeklyRecurrence = {
        time = "string"
        weekdays = [
          "string"
        ]
      }
    }
  })
}

```

