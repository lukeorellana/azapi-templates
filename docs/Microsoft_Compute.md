## Microsoft.Compute/availabilitySets@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/availabilitySets@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      platformFaultDomainCount = int
      platformUpdateDomainCount = int
      proximityPlacementGroup = {
        id = "string"
      }
      virtualMachines = [
        {
          id = "string"
        }
      ]
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Compute/capacityReservationGroups@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/capacityReservationGroups@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    zones = [
      "string"
    ]
  })
}

```

## Microsoft.Compute/capacityReservationGroups/capacityReservations@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/capacityReservationGroups/capacityReservations@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    zones = [
      "string"
    ]
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Compute/cloudServices@2022-09-04

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/cloudServices@2022-09-04"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowModelOverride = bool
      configuration = "string"
      configurationUrl = "string"
      extensionProfile = {
        extensions = [
          {
            name = "string"
            properties = {
              autoUpgradeMinorVersion = bool
              forceUpdateTag = "string"
              protectedSettingsFromKeyVault = {
                secretUrl = "string"
                sourceVault = {
                  id = "string"
                }
              }
              publisher = "string"
              rolesAppliedTo = [
                "string"
              ]
              type = "string"
              typeHandlerVersion = "string"
            }
          }
        ]
      }
      networkProfile = {
        loadBalancerConfigurations = [
          {
            id = "string"
            name = "string"
            properties = {
              frontendIpConfigurations = [
                {
                  name = "string"
                  properties = {
                    privateIPAddress = "string"
                    publicIPAddress = {
                      id = "string"
                    }
                    subnet = {
                      id = "string"
                    }
                  }
                }
              ]
            }
          }
        ]
        slotType = "string"
        swappableCloudService = {
          id = "string"
        }
      }
      osProfile = {
        secrets = [
          {
            sourceVault = {
              id = "string"
            }
            vaultCertificates = [
              {
                certificateUrl = "string"
              }
            ]
          }
        ]
      }
      packageUrl = "string"
      roleProfile = {
        roles = [
          {
            name = "string"
            sku = {
              capacity = int
              name = "string"
              tier = "string"
            }
          }
        ]
      }
      startCloudService = bool
      upgradeMode = "string"
    }
    systemData = {}
    zones = [
      "string"
    ]
  })
}

```

## Microsoft.Compute/diskAccesses@2023-01-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/diskAccesses@2023-01-02"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Compute/diskAccesses/privateEndpointConnections@2023-01-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/diskAccesses/privateEndpointConnections@2023-01-02"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.Compute/diskEncryptionSets@2023-01-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/diskEncryptionSets@2023-01-02"
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
      activeKey = {
        keyUrl = "string"
        sourceVault = {
          id = "string"
        }
      }
      encryptionType = "string"
      federatedClientId = "string"
      rotationToLatestKeyVersionEnabled = bool
    }
  })
}

```

## Microsoft.Compute/disks@2023-01-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/disks@2023-01-02"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      burstingEnabled = bool
      completionPercent = int
      creationData = {
        createOption = "string"
        galleryImageReference = {
          communityGalleryImageId = "string"
          id = "string"
          lun = int
          sharedGalleryImageId = "string"
        }
        imageReference = {
          communityGalleryImageId = "string"
          id = "string"
          lun = int
          sharedGalleryImageId = "string"
        }
        logicalSectorSize = int
        performancePlus = bool
        securityDataUri = "string"
        sourceResourceId = "string"
        sourceUri = "string"
        storageAccountId = "string"
        uploadSizeBytes = int
      }
      dataAccessAuthMode = "string"
      diskAccessId = "string"
      diskIOPSReadWrite = int
      diskMBpsReadWrite = int
      diskSizeGB = int
      encryption = {
        diskEncryptionSetId = "string"
        type = "string"
      }
      encryptionSettingsCollection = {
        enabled = bool
        encryptionSettings = [
          {
            diskEncryptionKey = {
              secretUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
            keyEncryptionKey = {
              keyUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
          }
        ]
        encryptionSettingsVersion = "string"
      }
      hyperVGeneration = "string"
      maxShares = int
      networkAccessPolicy = "string"
      optimizedForFrequentAttach = bool
      osType = "string"
      publicNetworkAccess = "string"
      purchasePlan = {
        name = "string"
        product = "string"
        promotionCode = "string"
        publisher = "string"
      }
      securityProfile = {
        secureVMDiskEncryptionSetId = "string"
        securityType = "string"
      }
      supportedCapabilities = {
        acceleratedNetwork = bool
        architecture = "string"
        diskControllerTypes = "string"
      }
      supportsHibernation = bool
      tier = "string"
    }
    zones = [
      "string"
    ]
    sku = {
      name = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Compute/galleries@2022-03-03

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/galleries@2022-03-03"
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
      identifier = {}
      sharingProfile = {
        communityGalleryInfo = {
          eula = "string"
          publicNamePrefix = "string"
          publisherContact = "string"
          publisherUri = "string"
        }
        permissions = "string"
      }
      softDeletePolicy = {
        isSoftDeleteEnabled = bool
      }
    }
  })
}

```

## Microsoft.Compute/galleries/applications@2022-03-03

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/galleries/applications@2022-03-03"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customActions = [
        {
          description = "string"
          name = "string"
          parameters = [
            {
              defaultValue = "string"
              description = "string"
              name = "string"
              required = bool
              type = "string"
            }
          ]
          script = "string"
        }
      ]
      description = "string"
      endOfLifeDate = "string"
      eula = "string"
      privacyStatementUri = "string"
      releaseNoteUri = "string"
      supportedOSType = "string"
    }
  })
}

```

## Microsoft.Compute/galleries/applications/versions@2022-03-03

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/galleries/applications/versions@2022-03-03"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publishingProfile = {
        advancedSettings = {}
        customActions = [
          {
            description = "string"
            name = "string"
            parameters = [
              {
                defaultValue = "string"
                description = "string"
                name = "string"
                required = bool
                type = "string"
              }
            ]
            script = "string"
          }
        ]
        enableHealthCheck = bool
        endOfLifeDate = "string"
        excludeFromLatest = bool
        manageActions = {
          install = "string"
          remove = "string"
          update = "string"
        }
        replicaCount = int
        replicationMode = "string"
        settings = {
          configFileName = "string"
          packageFileName = "string"
        }
        source = {
          defaultConfigurationLink = "string"
          mediaLink = "string"
        }
        storageAccountType = "string"
        targetExtendedLocations = [
          {
            encryption = {
              dataDiskImages = [
                {
                  diskEncryptionSetId = "string"
                  lun = int
                }
              ]
              osDiskImage = {
                diskEncryptionSetId = "string"
                securityProfile = {
                  confidentialVMEncryptionType = "string"
                  secureVMDiskEncryptionSetId = "string"
                }
              }
            }
            extendedLocation = {
              name = "string"
              type = "string"
            }
            extendedLocationReplicaCount = int
            name = "string"
            storageAccountType = "string"
          }
        ]
        targetRegions = [
          {
            encryption = {
              dataDiskImages = [
                {
                  diskEncryptionSetId = "string"
                  lun = int
                }
              ]
              osDiskImage = {
                diskEncryptionSetId = "string"
                securityProfile = {
                  confidentialVMEncryptionType = "string"
                  secureVMDiskEncryptionSetId = "string"
                }
              }
            }
            excludeFromLatest = bool
            name = "string"
            regionalReplicaCount = int
            storageAccountType = "string"
          }
        ]
      }
      safetyProfile = {
        allowDeletionOfReplicatedLocations = bool
      }
    }
  })
}

```

## Microsoft.Compute/galleries/images@2022-03-03

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/galleries/images@2022-03-03"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      architecture = "string"
      description = "string"
      disallowed = {
        diskTypes = [
          "string"
        ]
      }
      endOfLifeDate = "string"
      eula = "string"
      features = [
        {
          name = "string"
          value = "string"
        }
      ]
      hyperVGeneration = "string"
      identifier = {
        offer = "string"
        publisher = "string"
        sku = "string"
      }
      osState = "string"
      osType = "string"
      privacyStatementUri = "string"
      purchasePlan = {
        name = "string"
        product = "string"
        publisher = "string"
      }
      recommended = {
        memory = {
          max = int
          min = int
        }
        vCPUs = {
          max = int
          min = int
        }
      }
      releaseNoteUri = "string"
    }
  })
}

```

## Microsoft.Compute/galleries/images/versions@2022-03-03

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/galleries/images/versions@2022-03-03"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publishingProfile = {
        endOfLifeDate = "string"
        excludeFromLatest = bool
        replicaCount = int
        replicationMode = "string"
        storageAccountType = "string"
        targetExtendedLocations = [
          {
            encryption = {
              dataDiskImages = [
                {
                  diskEncryptionSetId = "string"
                  lun = int
                }
              ]
              osDiskImage = {
                diskEncryptionSetId = "string"
                securityProfile = {
                  confidentialVMEncryptionType = "string"
                  secureVMDiskEncryptionSetId = "string"
                }
              }
            }
            extendedLocation = {
              name = "string"
              type = "string"
            }
            extendedLocationReplicaCount = int
            name = "string"
            storageAccountType = "string"
          }
        ]
        targetRegions = [
          {
            encryption = {
              dataDiskImages = [
                {
                  diskEncryptionSetId = "string"
                  lun = int
                }
              ]
              osDiskImage = {
                diskEncryptionSetId = "string"
                securityProfile = {
                  confidentialVMEncryptionType = "string"
                  secureVMDiskEncryptionSetId = "string"
                }
              }
            }
            excludeFromLatest = bool
            name = "string"
            regionalReplicaCount = int
            storageAccountType = "string"
          }
        ]
      }
      safetyProfile = {
        allowDeletionOfReplicatedLocations = bool
      }
      storageProfile = {
        dataDiskImages = [
          {
            hostCaching = "string"
            lun = int
            source = {
              id = "string"
              storageAccountId = "string"
              uri = "string"
            }
          }
        ]
        osDiskImage = {
          hostCaching = "string"
          source = {
            id = "string"
            storageAccountId = "string"
            uri = "string"
          }
        }
        source = {
          communityGalleryImageId = "string"
          id = "string"
        }
      }
    }
  })
}

```

## Microsoft.Compute/hostGroups@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/hostGroups@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalCapabilities = {
        ultraSSDEnabled = bool
      }
      platformFaultDomainCount = int
      supportAutomaticPlacement = bool
    }
    zones = [
      "string"
    ]
  })
}

```

## Microsoft.Compute/hostGroups/hosts@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/hostGroups/hosts@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoReplaceOnFailure = bool
      licenseType = "string"
      platformFaultDomain = int
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Compute/images@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/images@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      hyperVGeneration = "string"
      sourceVirtualMachine = {
        id = "string"
      }
      storageProfile = {
        dataDisks = [
          {
            blobUri = "string"
            caching = "string"
            diskEncryptionSet = {
              id = "string"
            }
            diskSizeGB = int
            lun = int
            managedDisk = {
              id = "string"
            }
            snapshot = {
              id = "string"
            }
            storageAccountType = "string"
          }
        ]
        osDisk = {
          blobUri = "string"
          caching = "string"
          diskEncryptionSet = {
            id = "string"
          }
          diskSizeGB = int
          managedDisk = {
            id = "string"
          }
          osState = "string"
          osType = "string"
          snapshot = {
            id = "string"
          }
          storageAccountType = "string"
        }
        zoneResilient = bool
      }
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Compute/proximityPlacementGroups@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/proximityPlacementGroups@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      colocationStatus = {
        code = "string"
        displayStatus = "string"
        level = "string"
        message = "string"
        time = "string"
      }
      intent = {
        vmSizes = [
          "string"
        ]
      }
      proximityPlacementGroupType = "string"
    }
    zones = [
      "string"
    ]
  })
}

```

## Microsoft.Compute/restorePointCollections@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/restorePointCollections@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      source = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.Compute/restorePointCollections/restorePoints@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/restorePointCollections/restorePoints@2023-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      consistencyMode = "string"
      excludeDisks = [
        {
          id = "string"
        }
      ]
      sourceMetadata = {
        storageProfile = {
          dataDisks = [
            {
              caching = "string"
              diskRestorePoint = {
                encryption = {
                  diskEncryptionSet = {
                    id = "string"
                  }
                  type = "string"
                }
                sourceDiskRestorePoint = {
                  id = "string"
                }
              }
              managedDisk = {
                diskEncryptionSet = {
                  id = "string"
                }
                id = "string"
                securityProfile = {
                  diskEncryptionSet = {
                    id = "string"
                  }
                  securityEncryptionType = "string"
                }
                storageAccountType = "string"
              }
            }
          ]
          osDisk = {
            caching = "string"
            diskRestorePoint = {
              encryption = {
                diskEncryptionSet = {
                  id = "string"
                }
                type = "string"
              }
              sourceDiskRestorePoint = {
                id = "string"
              }
            }
            managedDisk = {
              diskEncryptionSet = {
                id = "string"
              }
              id = "string"
              securityProfile = {
                diskEncryptionSet = {
                  id = "string"
                }
                securityEncryptionType = "string"
              }
              storageAccountType = "string"
            }
          }
        }
      }
      sourceRestorePoint = {
        id = "string"
      }
      timeCreated = "string"
    }
  })
}

```

## Microsoft.Compute/snapshots@2023-01-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/snapshots@2023-01-02"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      completionPercent = int
      copyCompletionError = {
        errorCode = "CopySourceNotFound"
        errorMessage = "string"
      }
      creationData = {
        createOption = "string"
        galleryImageReference = {
          communityGalleryImageId = "string"
          id = "string"
          lun = int
          sharedGalleryImageId = "string"
        }
        imageReference = {
          communityGalleryImageId = "string"
          id = "string"
          lun = int
          sharedGalleryImageId = "string"
        }
        logicalSectorSize = int
        performancePlus = bool
        securityDataUri = "string"
        sourceResourceId = "string"
        sourceUri = "string"
        storageAccountId = "string"
        uploadSizeBytes = int
      }
      dataAccessAuthMode = "string"
      diskAccessId = "string"
      diskSizeGB = int
      encryption = {
        diskEncryptionSetId = "string"
        type = "string"
      }
      encryptionSettingsCollection = {
        enabled = bool
        encryptionSettings = [
          {
            diskEncryptionKey = {
              secretUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
            keyEncryptionKey = {
              keyUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
          }
        ]
        encryptionSettingsVersion = "string"
      }
      hyperVGeneration = "string"
      incremental = bool
      networkAccessPolicy = "string"
      osType = "string"
      publicNetworkAccess = "string"
      purchasePlan = {
        name = "string"
        product = "string"
        promotionCode = "string"
        publisher = "string"
      }
      securityProfile = {
        secureVMDiskEncryptionSetId = "string"
        securityType = "string"
      }
      supportedCapabilities = {
        acceleratedNetwork = bool
        architecture = "string"
        diskControllerTypes = "string"
      }
      supportsHibernation = bool
    }
    sku = {
      name = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Compute/sshPublicKeys@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/sshPublicKeys@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publicKey = "string"
    }
  })
}

```

## Microsoft.Compute/virtualMachines@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachines@2023-03-01"
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
      additionalCapabilities = {
        hibernationEnabled = bool
        ultraSSDEnabled = bool
      }
      applicationProfile = {
        galleryApplications = [
          {
            configurationReference = "string"
            enableAutomaticUpgrade = bool
            order = int
            packageReferenceId = "string"
            tags = "string"
            treatFailureAsDeploymentFailure = bool
          }
        ]
      }
      availabilitySet = {
        id = "string"
      }
      billingProfile = {
        maxPrice = "decimal-as-string"
      }
      capacityReservation = {
        capacityReservationGroup = {
          id = "string"
        }
      }
      diagnosticsProfile = {
        bootDiagnostics = {
          enabled = bool
          storageUri = "string"
        }
      }
      evictionPolicy = "string"
      extensionsTimeBudget = "string"
      hardwareProfile = {
        vmSize = "string"
        vmSizeProperties = {
          vCPUsAvailable = int
          vCPUsPerCore = int
        }
      }
      host = {
        id = "string"
      }
      hostGroup = {
        id = "string"
      }
      licenseType = "string"
      networkProfile = {
        networkApiVersion = "2020-11-01"
        networkInterfaceConfigurations = [
          {
            name = "string"
            properties = {
              deleteOption = "string"
              disableTcpStateTracking = bool
              dnsSettings = {
                dnsServers = [
                  "string"
                ]
              }
              dscpConfiguration = {
                id = "string"
              }
              enableAcceleratedNetworking = bool
              enableFpga = bool
              enableIPForwarding = bool
              ipConfigurations = [
                {
                  name = "string"
                  properties = {
                    applicationGatewayBackendAddressPools = [
                      {
                        id = "string"
                      }
                    ]
                    applicationSecurityGroups = [
                      {
                        id = "string"
                      }
                    ]
                    loadBalancerBackendAddressPools = [
                      {
                        id = "string"
                      }
                    ]
                    primary = bool
                    privateIPAddressVersion = "string"
                    publicIPAddressConfiguration = {
                      name = "string"
                      properties = {
                        deleteOption = "string"
                        dnsSettings = {
                          domainNameLabel = "string"
                        }
                        idleTimeoutInMinutes = int
                        ipTags = [
                          {
                            ipTagType = "string"
                            tag = "string"
                          }
                        ]
                        publicIPAddressVersion = "string"
                        publicIPAllocationMethod = "string"
                        publicIPPrefix = {
                          id = "string"
                        }
                      }
                      sku = {
                        name = "string"
                        tier = "string"
                      }
                    }
                    subnet = {
                      id = "string"
                    }
                  }
                }
              ]
              networkSecurityGroup = {
                id = "string"
              }
              primary = bool
            }
          }
        ]
        networkInterfaces = [
          {
            id = "string"
            properties = {
              deleteOption = "string"
              primary = bool
            }
          }
        ]
      }
      osProfile = {
        adminPassword = "string"
        adminUsername = "string"
        allowExtensionOperations = bool
        computerName = "string"
        customData = "string"
        linuxConfiguration = {
          disablePasswordAuthentication = bool
          enableVMAgentPlatformUpdates = bool
          patchSettings = {
            assessmentMode = "string"
            automaticByPlatformSettings = {
              bypassPlatformSafetyChecksOnUserSchedule = bool
              rebootSetting = "string"
            }
            patchMode = "string"
          }
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
        requireGuestProvisionSignal = bool
        secrets = [
          {
            sourceVault = {
              id = "string"
            }
            vaultCertificates = [
              {
                certificateStore = "string"
                certificateUrl = "string"
              }
            ]
          }
        ]
        windowsConfiguration = {
          additionalUnattendContent = [
            {
              componentName = "Microsoft-Windows-Shell-Setup"
              content = "string"
              passName = "OobeSystem"
              settingName = "string"
            }
          ]
          enableAutomaticUpdates = bool
          enableVMAgentPlatformUpdates = bool
          patchSettings = {
            assessmentMode = "string"
            automaticByPlatformSettings = {
              bypassPlatformSafetyChecksOnUserSchedule = bool
              rebootSetting = "string"
            }
            enableHotpatching = bool
            patchMode = "string"
          }
          provisionVMAgent = bool
          timeZone = "string"
          winRM = {
            listeners = [
              {
                certificateUrl = "string"
                protocol = "string"
              }
            ]
          }
        }
      }
      platformFaultDomain = int
      priority = "string"
      proximityPlacementGroup = {
        id = "string"
      }
      scheduledEventsProfile = {
        osImageNotificationProfile = {
          enable = bool
          notBeforeTimeout = "string"
        }
        terminateNotificationProfile = {
          enable = bool
          notBeforeTimeout = "string"
        }
      }
      securityProfile = {
        encryptionAtHost = bool
        securityType = "string"
        uefiSettings = {
          secureBootEnabled = bool
          vTpmEnabled = bool
        }
      }
      storageProfile = {
        dataDisks = [
          {
            caching = "string"
            createOption = "string"
            deleteOption = "string"
            detachOption = "ForceDetach"
            diskSizeGB = int
            image = {
              uri = "string"
            }
            lun = int
            managedDisk = {
              diskEncryptionSet = {
                id = "string"
              }
              id = "string"
              securityProfile = {
                diskEncryptionSet = {
                  id = "string"
                }
                securityEncryptionType = "string"
              }
              storageAccountType = "string"
            }
            name = "string"
            toBeDetached = bool
            vhd = {
              uri = "string"
            }
            writeAcceleratorEnabled = bool
          }
        ]
        diskControllerType = "string"
        imageReference = {
          communityGalleryImageId = "string"
          id = "string"
          offer = "string"
          publisher = "string"
          sharedGalleryImageId = "string"
          sku = "string"
          version = "string"
        }
        osDisk = {
          caching = "string"
          createOption = "string"
          deleteOption = "string"
          diffDiskSettings = {
            option = "Local"
            placement = "string"
          }
          diskSizeGB = int
          encryptionSettings = {
            diskEncryptionKey = {
              secretUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
            enabled = bool
            keyEncryptionKey = {
              keyUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
          }
          image = {
            uri = "string"
          }
          managedDisk = {
            diskEncryptionSet = {
              id = "string"
            }
            id = "string"
            securityProfile = {
              diskEncryptionSet = {
                id = "string"
              }
              securityEncryptionType = "string"
            }
            storageAccountType = "string"
          }
          name = "string"
          osType = "string"
          vhd = {
            uri = "string"
          }
          writeAcceleratorEnabled = bool
        }
      }
      userData = "string"
      virtualMachineScaleSet = {
        id = "string"
      }
    }
    zones = [
      "string"
    ]
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
    }
  })
}

```

## Microsoft.Compute/virtualMachines/extensions@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachines/extensions@2023-03-01"
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
        name = "string"
        statuses = [
          {
            code = "string"
            displayStatus = "string"
            level = "string"
            message = "string"
            time = "string"
          }
        ]
        substatuses = [
          {
            code = "string"
            displayStatus = "string"
            level = "string"
            message = "string"
            time = "string"
          }
        ]
        type = "string"
        typeHandlerVersion = "string"
      }
      protectedSettingsFromKeyVault = {
        secretUrl = "string"
        sourceVault = {
          id = "string"
        }
      }
      provisionAfterExtensions = [
        "string"
      ]
      publisher = "string"
      suppressFailures = bool
      type = "string"
      typeHandlerVersion = "string"
    }
  })
}

```

## Microsoft.Compute/virtualMachines/runCommands@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachines/runCommands@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      asyncExecution = bool
      errorBlobManagedIdentity = {
        clientId = "string"
        objectId = "string"
      }
      errorBlobUri = "string"
      outputBlobManagedIdentity = {
        clientId = "string"
        objectId = "string"
      }
      outputBlobUri = "string"
      parameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      protectedParameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      runAsPassword = "string"
      runAsUser = "string"
      source = {
        commandId = "string"
        script = "string"
        scriptUri = "string"
        scriptUriManagedIdentity = {
          clientId = "string"
          objectId = "string"
        }
      }
      timeoutInSeconds = int
      treatFailureAsDeploymentFailure = bool
    }
  })
}

```

## Microsoft.Compute/virtualMachineScaleSets@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachineScaleSets@2023-03-01"
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
      additionalCapabilities = {
        hibernationEnabled = bool
        ultraSSDEnabled = bool
      }
      automaticRepairsPolicy = {
        enabled = bool
        gracePeriod = "string"
        repairAction = "string"
      }
      constrainedMaximumCapacity = bool
      doNotRunExtensionsOnOverprovisionedVMs = bool
      hostGroup = {
        id = "string"
      }
      orchestrationMode = "string"
      overprovision = bool
      platformFaultDomainCount = int
      priorityMixPolicy = {
        baseRegularPriorityCount = int
        regularPriorityPercentageAboveBase = int
      }
      proximityPlacementGroup = {
        id = "string"
      }
      scaleInPolicy = {
        forceDeletion = bool
        rules = [
          "string"
        ]
      }
      singlePlacementGroup = bool
      spotRestorePolicy = {
        enabled = bool
        restoreTimeout = "string"
      }
      upgradePolicy = {
        automaticOSUpgradePolicy = {
          disableAutomaticRollback = bool
          enableAutomaticOSUpgrade = bool
          useRollingUpgradePolicy = bool
        }
        mode = "string"
        rollingUpgradePolicy = {
          enableCrossZoneUpgrade = bool
          maxBatchInstancePercent = int
          maxSurge = bool
          maxUnhealthyInstancePercent = int
          maxUnhealthyUpgradedInstancePercent = int
          pauseTimeBetweenBatches = "string"
          prioritizeUnhealthyInstances = bool
          rollbackFailedInstancesOnPolicyBreach = bool
        }
      }
      virtualMachineProfile = {
        applicationProfile = {
          galleryApplications = [
            {
              configurationReference = "string"
              enableAutomaticUpgrade = bool
              order = int
              packageReferenceId = "string"
              tags = "string"
              treatFailureAsDeploymentFailure = bool
            }
          ]
        }
        billingProfile = {
          maxPrice = "decimal-as-string"
        }
        capacityReservation = {
          capacityReservationGroup = {
            id = "string"
          }
        }
        diagnosticsProfile = {
          bootDiagnostics = {
            enabled = bool
            storageUri = "string"
          }
        }
        evictionPolicy = "string"
        extensionProfile = {
          extensions = [
            {
              name = "string"
              properties = {
                autoUpgradeMinorVersion = bool
                enableAutomaticUpgrade = bool
                forceUpdateTag = "string"
                protectedSettingsFromKeyVault = {
                  secretUrl = "string"
                  sourceVault = {
                    id = "string"
                  }
                }
                provisionAfterExtensions = [
                  "string"
                ]
                publisher = "string"
                suppressFailures = bool
                type = "string"
                typeHandlerVersion = "string"
              }
            }
          ]
          extensionsTimeBudget = "string"
        }
        hardwareProfile = {
          vmSizeProperties = {
            vCPUsAvailable = int
            vCPUsPerCore = int
          }
        }
        licenseType = "string"
        networkProfile = {
          healthProbe = {
            id = "string"
          }
          networkApiVersion = "2020-11-01"
          networkInterfaceConfigurations = [
            {
              name = "string"
              properties = {
                deleteOption = "string"
                disableTcpStateTracking = bool
                dnsSettings = {
                  dnsServers = [
                    "string"
                  ]
                }
                enableAcceleratedNetworking = bool
                enableFpga = bool
                enableIPForwarding = bool
                ipConfigurations = [
                  {
                    name = "string"
                    properties = {
                      applicationGatewayBackendAddressPools = [
                        {
                          id = "string"
                        }
                      ]
                      applicationSecurityGroups = [
                        {
                          id = "string"
                        }
                      ]
                      loadBalancerBackendAddressPools = [
                        {
                          id = "string"
                        }
                      ]
                      loadBalancerInboundNatPools = [
                        {
                          id = "string"
                        }
                      ]
                      primary = bool
                      privateIPAddressVersion = "string"
                      publicIPAddressConfiguration = {
                        name = "string"
                        properties = {
                          deleteOption = "string"
                          dnsSettings = {
                            domainNameLabel = "string"
                          }
                          idleTimeoutInMinutes = int
                          ipTags = [
                            {
                              ipTagType = "string"
                              tag = "string"
                            }
                          ]
                          publicIPAddressVersion = "string"
                          publicIPPrefix = {
                            id = "string"
                          }
                        }
                        sku = {
                          name = "string"
                          tier = "string"
                        }
                      }
                      subnet = {
                        id = "string"
                      }
                    }
                  }
                ]
                networkSecurityGroup = {
                  id = "string"
                }
                primary = bool
              }
            }
          ]
        }
        osProfile = {
          adminPassword = "string"
          adminUsername = "string"
          allowExtensionOperations = bool
          computerNamePrefix = "string"
          customData = "string"
          linuxConfiguration = {
            disablePasswordAuthentication = bool
            enableVMAgentPlatformUpdates = bool
            patchSettings = {
              assessmentMode = "string"
              automaticByPlatformSettings = {
                bypassPlatformSafetyChecksOnUserSchedule = bool
                rebootSetting = "string"
              }
              patchMode = "string"
            }
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
          requireGuestProvisionSignal = bool
          secrets = [
            {
              sourceVault = {
                id = "string"
              }
              vaultCertificates = [
                {
                  certificateStore = "string"
                  certificateUrl = "string"
                }
              ]
            }
          ]
          windowsConfiguration = {
            additionalUnattendContent = [
              {
                componentName = "Microsoft-Windows-Shell-Setup"
                content = "string"
                passName = "OobeSystem"
                settingName = "string"
              }
            ]
            enableAutomaticUpdates = bool
            enableVMAgentPlatformUpdates = bool
            patchSettings = {
              assessmentMode = "string"
              automaticByPlatformSettings = {
                bypassPlatformSafetyChecksOnUserSchedule = bool
                rebootSetting = "string"
              }
              enableHotpatching = bool
              patchMode = "string"
            }
            provisionVMAgent = bool
            timeZone = "string"
            winRM = {
              listeners = [
                {
                  certificateUrl = "string"
                  protocol = "string"
                }
              ]
            }
          }
        }
        priority = "string"
        scheduledEventsProfile = {
          osImageNotificationProfile = {
            enable = bool
            notBeforeTimeout = "string"
          }
          terminateNotificationProfile = {
            enable = bool
            notBeforeTimeout = "string"
          }
        }
        securityPostureReference = {
          excludeExtensions = [
            {
              location = "string"
              properties = {
                autoUpgradeMinorVersion = bool
                enableAutomaticUpgrade = bool
                forceUpdateTag = "string"
                instanceView = {
                  name = "string"
                  statuses = [
                    {
                      code = "string"
                      displayStatus = "string"
                      level = "string"
                      message = "string"
                      time = "string"
                    }
                  ]
                  substatuses = [
                    {
                      code = "string"
                      displayStatus = "string"
                      level = "string"
                      message = "string"
                      time = "string"
                    }
                  ]
                  type = "string"
                  typeHandlerVersion = "string"
                }
                protectedSettingsFromKeyVault = {
                  secretUrl = "string"
                  sourceVault = {
                    id = "string"
                  }
                }
                provisionAfterExtensions = [
                  "string"
                ]
                publisher = "string"
                suppressFailures = bool
                type = "string"
                typeHandlerVersion = "string"
              }
              tags = {}
            }
          ]
          id = "string"
        }
        securityProfile = {
          encryptionAtHost = bool
          securityType = "string"
          uefiSettings = {
            secureBootEnabled = bool
            vTpmEnabled = bool
          }
        }
        serviceArtifactReference = {
          id = "string"
        }
        storageProfile = {
          dataDisks = [
            {
              caching = "string"
              createOption = "string"
              deleteOption = "string"
              diskIOPSReadWrite = int
              diskMBpsReadWrite = int
              diskSizeGB = int
              lun = int
              managedDisk = {
                diskEncryptionSet = {
                  id = "string"
                }
                securityProfile = {
                  diskEncryptionSet = {
                    id = "string"
                  }
                  securityEncryptionType = "string"
                }
                storageAccountType = "string"
              }
              name = "string"
              writeAcceleratorEnabled = bool
            }
          ]
          diskControllerType = "string"
          imageReference = {
            communityGalleryImageId = "string"
            id = "string"
            offer = "string"
            publisher = "string"
            sharedGalleryImageId = "string"
            sku = "string"
            version = "string"
          }
          osDisk = {
            caching = "string"
            createOption = "string"
            deleteOption = "string"
            diffDiskSettings = {
              option = "Local"
              placement = "string"
            }
            diskSizeGB = int
            image = {
              uri = "string"
            }
            managedDisk = {
              diskEncryptionSet = {
                id = "string"
              }
              securityProfile = {
                diskEncryptionSet = {
                  id = "string"
                }
                securityEncryptionType = "string"
              }
              storageAccountType = "string"
            }
            name = "string"
            osType = "string"
            vhdContainers = [
              "string"
            ]
            writeAcceleratorEnabled = bool
          }
        }
        userData = "string"
      }
      zoneBalance = bool
    }
    zones = [
      "string"
    ]
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
    }
  })
}

```

## Microsoft.Compute/virtualMachineScaleSets/extensions@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachineScaleSets/extensions@2023-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoUpgradeMinorVersion = bool
      enableAutomaticUpgrade = bool
      forceUpdateTag = "string"
      protectedSettingsFromKeyVault = {
        secretUrl = "string"
        sourceVault = {
          id = "string"
        }
      }
      provisionAfterExtensions = [
        "string"
      ]
      publisher = "string"
      suppressFailures = bool
      type = "string"
      typeHandlerVersion = "string"
    }
  })
}

```

## Microsoft.Compute/virtualMachineScaleSets/virtualMachines@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachineScaleSets/virtualMachines@2023-03-01"
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
      additionalCapabilities = {
        hibernationEnabled = bool
        ultraSSDEnabled = bool
      }
      availabilitySet = {
        id = "string"
      }
      diagnosticsProfile = {
        bootDiagnostics = {
          enabled = bool
          storageUri = "string"
        }
      }
      hardwareProfile = {
        vmSize = "string"
        vmSizeProperties = {
          vCPUsAvailable = int
          vCPUsPerCore = int
        }
      }
      licenseType = "string"
      networkProfile = {
        networkApiVersion = "2020-11-01"
        networkInterfaceConfigurations = [
          {
            name = "string"
            properties = {
              deleteOption = "string"
              disableTcpStateTracking = bool
              dnsSettings = {
                dnsServers = [
                  "string"
                ]
              }
              dscpConfiguration = {
                id = "string"
              }
              enableAcceleratedNetworking = bool
              enableFpga = bool
              enableIPForwarding = bool
              ipConfigurations = [
                {
                  name = "string"
                  properties = {
                    applicationGatewayBackendAddressPools = [
                      {
                        id = "string"
                      }
                    ]
                    applicationSecurityGroups = [
                      {
                        id = "string"
                      }
                    ]
                    loadBalancerBackendAddressPools = [
                      {
                        id = "string"
                      }
                    ]
                    primary = bool
                    privateIPAddressVersion = "string"
                    publicIPAddressConfiguration = {
                      name = "string"
                      properties = {
                        deleteOption = "string"
                        dnsSettings = {
                          domainNameLabel = "string"
                        }
                        idleTimeoutInMinutes = int
                        ipTags = [
                          {
                            ipTagType = "string"
                            tag = "string"
                          }
                        ]
                        publicIPAddressVersion = "string"
                        publicIPAllocationMethod = "string"
                        publicIPPrefix = {
                          id = "string"
                        }
                      }
                      sku = {
                        name = "string"
                        tier = "string"
                      }
                    }
                    subnet = {
                      id = "string"
                    }
                  }
                }
              ]
              networkSecurityGroup = {
                id = "string"
              }
              primary = bool
            }
          }
        ]
        networkInterfaces = [
          {
            id = "string"
            properties = {
              deleteOption = "string"
              primary = bool
            }
          }
        ]
      }
      networkProfileConfiguration = {
        networkInterfaceConfigurations = [
          {
            name = "string"
            properties = {
              deleteOption = "string"
              disableTcpStateTracking = bool
              dnsSettings = {
                dnsServers = [
                  "string"
                ]
              }
              enableAcceleratedNetworking = bool
              enableFpga = bool
              enableIPForwarding = bool
              ipConfigurations = [
                {
                  name = "string"
                  properties = {
                    applicationGatewayBackendAddressPools = [
                      {
                        id = "string"
                      }
                    ]
                    applicationSecurityGroups = [
                      {
                        id = "string"
                      }
                    ]
                    loadBalancerBackendAddressPools = [
                      {
                        id = "string"
                      }
                    ]
                    loadBalancerInboundNatPools = [
                      {
                        id = "string"
                      }
                    ]
                    primary = bool
                    privateIPAddressVersion = "string"
                    publicIPAddressConfiguration = {
                      name = "string"
                      properties = {
                        deleteOption = "string"
                        dnsSettings = {
                          domainNameLabel = "string"
                        }
                        idleTimeoutInMinutes = int
                        ipTags = [
                          {
                            ipTagType = "string"
                            tag = "string"
                          }
                        ]
                        publicIPAddressVersion = "string"
                        publicIPPrefix = {
                          id = "string"
                        }
                      }
                      sku = {
                        name = "string"
                        tier = "string"
                      }
                    }
                    subnet = {
                      id = "string"
                    }
                  }
                }
              ]
              networkSecurityGroup = {
                id = "string"
              }
              primary = bool
            }
          }
        ]
      }
      osProfile = {
        adminPassword = "string"
        adminUsername = "string"
        allowExtensionOperations = bool
        computerName = "string"
        customData = "string"
        linuxConfiguration = {
          disablePasswordAuthentication = bool
          enableVMAgentPlatformUpdates = bool
          patchSettings = {
            assessmentMode = "string"
            automaticByPlatformSettings = {
              bypassPlatformSafetyChecksOnUserSchedule = bool
              rebootSetting = "string"
            }
            patchMode = "string"
          }
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
        requireGuestProvisionSignal = bool
        secrets = [
          {
            sourceVault = {
              id = "string"
            }
            vaultCertificates = [
              {
                certificateStore = "string"
                certificateUrl = "string"
              }
            ]
          }
        ]
        windowsConfiguration = {
          additionalUnattendContent = [
            {
              componentName = "Microsoft-Windows-Shell-Setup"
              content = "string"
              passName = "OobeSystem"
              settingName = "string"
            }
          ]
          enableAutomaticUpdates = bool
          enableVMAgentPlatformUpdates = bool
          patchSettings = {
            assessmentMode = "string"
            automaticByPlatformSettings = {
              bypassPlatformSafetyChecksOnUserSchedule = bool
              rebootSetting = "string"
            }
            enableHotpatching = bool
            patchMode = "string"
          }
          provisionVMAgent = bool
          timeZone = "string"
          winRM = {
            listeners = [
              {
                certificateUrl = "string"
                protocol = "string"
              }
            ]
          }
        }
      }
      protectionPolicy = {
        protectFromScaleIn = bool
        protectFromScaleSetActions = bool
      }
      securityProfile = {
        encryptionAtHost = bool
        securityType = "string"
        uefiSettings = {
          secureBootEnabled = bool
          vTpmEnabled = bool
        }
      }
      storageProfile = {
        dataDisks = [
          {
            caching = "string"
            createOption = "string"
            deleteOption = "string"
            detachOption = "ForceDetach"
            diskSizeGB = int
            image = {
              uri = "string"
            }
            lun = int
            managedDisk = {
              diskEncryptionSet = {
                id = "string"
              }
              id = "string"
              securityProfile = {
                diskEncryptionSet = {
                  id = "string"
                }
                securityEncryptionType = "string"
              }
              storageAccountType = "string"
            }
            name = "string"
            toBeDetached = bool
            vhd = {
              uri = "string"
            }
            writeAcceleratorEnabled = bool
          }
        ]
        diskControllerType = "string"
        imageReference = {
          communityGalleryImageId = "string"
          id = "string"
          offer = "string"
          publisher = "string"
          sharedGalleryImageId = "string"
          sku = "string"
          version = "string"
        }
        osDisk = {
          caching = "string"
          createOption = "string"
          deleteOption = "string"
          diffDiskSettings = {
            option = "Local"
            placement = "string"
          }
          diskSizeGB = int
          encryptionSettings = {
            diskEncryptionKey = {
              secretUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
            enabled = bool
            keyEncryptionKey = {
              keyUrl = "string"
              sourceVault = {
                id = "string"
              }
            }
          }
          image = {
            uri = "string"
          }
          managedDisk = {
            diskEncryptionSet = {
              id = "string"
            }
            id = "string"
            securityProfile = {
              diskEncryptionSet = {
                id = "string"
              }
              securityEncryptionType = "string"
            }
            storageAccountType = "string"
          }
          name = "string"
          osType = "string"
          vhd = {
            uri = "string"
          }
          writeAcceleratorEnabled = bool
        }
      }
      userData = "string"
    }
    plan = {
      name = "string"
      product = "string"
      promotionCode = "string"
      publisher = "string"
    }
  })
}

```

## Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoUpgradeMinorVersion = bool
      enableAutomaticUpgrade = bool
      forceUpdateTag = "string"
      instanceView = {
        name = "string"
        statuses = [
          {
            code = "string"
            displayStatus = "string"
            level = "string"
            message = "string"
            time = "string"
          }
        ]
        substatuses = [
          {
            code = "string"
            displayStatus = "string"
            level = "string"
            message = "string"
            time = "string"
          }
        ]
        type = "string"
        typeHandlerVersion = "string"
      }
      protectedSettingsFromKeyVault = {
        secretUrl = "string"
        sourceVault = {
          id = "string"
        }
      }
      provisionAfterExtensions = [
        "string"
      ]
      publisher = "string"
      suppressFailures = bool
      type = "string"
      typeHandlerVersion = "string"
    }
  })
}

```

## Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      asyncExecution = bool
      errorBlobManagedIdentity = {
        clientId = "string"
        objectId = "string"
      }
      errorBlobUri = "string"
      outputBlobManagedIdentity = {
        clientId = "string"
        objectId = "string"
      }
      outputBlobUri = "string"
      parameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      protectedParameters = [
        {
          name = "string"
          value = "string"
        }
      ]
      runAsPassword = "string"
      runAsUser = "string"
      source = {
        commandId = "string"
        script = "string"
        scriptUri = "string"
        scriptUriManagedIdentity = {
          clientId = "string"
          objectId = "string"
        }
      }
      timeoutInSeconds = int
      treatFailureAsDeploymentFailure = bool
    }
  })
}

```

