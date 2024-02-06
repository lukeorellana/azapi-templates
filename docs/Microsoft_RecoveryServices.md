## Microsoft.RecoveryServices/vaults@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults@2023-01-01"
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
      encryption = {
        infrastructureEncryption = "string"
        kekIdentity = {
          userAssignedIdentity = "string"
          useSystemAssignedIdentity = bool
        }
        keyVaultProperties = {
          keyUri = "string"
        }
      }
      monitoringSettings = {
        azureMonitorAlertSettings = {
          alertsForAllJobFailures = "string"
        }
        classicAlertSettings = {
          alertsForCriticalOperations = "string"
        }
      }
      moveDetails = {}
      publicNetworkAccess = "string"
      redundancySettings = {}
      securitySettings = {
        immutabilitySettings = {
          state = "string"
        }
      }
      upgradeDetails = {}
    }
    sku = {
      capacity = "string"
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.RecoveryServices/vaults/backupconfig@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupconfig@2023-01-01"
  name = "vaultconfig"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enhancedSecurityState = "string"
      isSoftDeleteFeatureStateEditable = bool
      resourceGuardOperationRequests = [
        "string"
      ]
      softDeleteFeatureState = "string"
      storageModelType = "string"
      storageType = "string"
      storageTypeState = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.RecoveryServices/vaults/backupEncryptionConfigs@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupEncryptionConfigs@2023-01-01"
  name = "backupResourceEncryptionConfig"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      encryptionAtRestType = "string"
      infrastructureEncryptionState = "string"
      keyUri = "string"
      lastUpdateStatus = "string"
      subscriptionId = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backupManagementType = "string"
      itemId = "string"
      policyId = "string"
      protectionState = "string"
      sourceResourceId = "string"
      protectionIntentItemType = "string"
      // For remaining properties, see ProtectionIntent objects
    }
    eTag = "string"
  })
}

```

## Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backupManagementType = "string"
      friendlyName = "string"
      healthStatus = "string"
      protectableObjectType = "string"
      registrationStatus = "string"
      containerType = "string"
      // For remaining properties, see ProtectionContainer objects
    }
    eTag = "string"
  })
}

```

## Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers/protectedItems@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backupSetName = "string"
      containerName = "string"
      createMode = "string"
      deferredDeleteTimeInUTC = "string"
      deferredDeleteTimeRemaining = "string"
      isArchiveEnabled = bool
      isDeferredDeleteScheduleUpcoming = bool
      isRehydrate = bool
      isScheduledForDeferredDelete = bool
      lastRecoveryPoint = "string"
      policyId = "string"
      policyName = "string"
      resourceGuardOperationRequests = [
        "string"
      ]
      softDeleteRetentionPeriod = int
      sourceResourceId = "string"
      protectedItemType = "string"
      // For remaining properties, see ProtectedItem objects
    }
    eTag = "string"
  })
}

```

## Microsoft.RecoveryServices/vaults/backupPolicies@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupPolicies@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      protectedItemsCount = int
      resourceGuardOperationRequests = [
        "string"
      ]
      backupManagementType = "string"
      // For remaining properties, see ProtectionPolicy objects
    }
    eTag = "string"
  })
}

```

## Microsoft.RecoveryServices/vaults/backupResourceGuardProxies@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupResourceGuardProxies@2023-01-01"
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
      lastUpdatedTime = "string"
      resourceGuardOperationDetails = [
        {
          defaultResourceRequest = "string"
          vaultCriticalOperation = "string"
        }
      ]
      resourceGuardResourceId = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.RecoveryServices/vaults/backupstorageconfig@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/backupstorageconfig@2023-01-01"
  name = "vaultstorageconfig"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      crossRegionRestoreFlag = bool
      dedupState = "string"
      storageModelType = "string"
      storageType = "string"
      storageTypeState = "string"
      xcoolState = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.RecoveryServices/vaults/certificates@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/certificates@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authType = "string"
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/extendedInformation@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/extendedInformation@2023-01-01"
  name = "vaultExtendedInfo"
  parent_id = "string"
  body = jsonencode({
    properties = {
      algorithm = "string"
      encryptionKey = "string"
      encryptionKeyThumbprint = "string"
      integrityKey = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.RecoveryServices/vaults/privateEndpointConnections@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/privateEndpointConnections@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationAlertSettings@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationAlertSettings@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customEmailAddresses = [
        "string"
      ]
      locale = "string"
      sendToOwners = "string"
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationFabrics@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customDetails = {
        instanceType = "string"
        // For remaining properties, see FabricSpecificCreationInputOrFabricSpecificDetails objects
      }
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      fabricSpecificDetails = {
        instanceType = "string"
        // For remaining properties, see FabricSpecificCreateNetworkMappingInput objects
      }
      recoveryFabricName = "string"
      recoveryNetworkId = "string"
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      providerSpecificInput = [
        {
          instanceType = "string"
          // For remaining properties, see ReplicationProviderSpecificContainerCreationInput objects
        }
      ]
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      policyId = "string"
      providerSpecificDetails = {
        instanceType = "string"
        // For remaining properties, see EnableMigrationProviderSpecificInputOrMigrationProviderSpecificSettings objects
      }
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      policyId = "string"
      protectableItemId = "string"
      providerSpecificDetails = {
        instanceType = "string"
        // For remaining properties, see EnableProtectionProviderSpecificInputOrReplicationProviderSpecificSettings objects
      }
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      policyId = "string"
      providerSpecificInput = {
        instanceType = "string"
        // For remaining properties, see ReplicationProviderSpecificContainerMappingInput objects
      }
      targetProtectionContainerId = "string"
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationIdentityInput = {
        aadAuthority = "string"
        applicationId = "string"
        audience = "string"
        objectId = "string"
        tenantId = "string"
      }
      biosId = "string"
      dataPlaneAuthenticationIdentityInput = {
        aadAuthority = "string"
        applicationId = "string"
        audience = "string"
        objectId = "string"
        tenantId = "string"
      }
      machineId = "string"
      machineName = "string"
      resourceAccessIdentityInput = {
        aadAuthority = "string"
        applicationId = "string"
        audience = "string"
        objectId = "string"
        tenantId = "string"
      }
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      targetStorageClassificationId = "string"
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      friendlyName = "string"
      ipAddress = "string"
      port = "string"
      processServerId = "string"
      runAsAccountId = "string"
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationPolicies@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationPolicies@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      providerSpecificInput = {
        instanceType = "string"
        // For remaining properties, see PolicyProviderSpecificInput objects
      }
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationProtectionIntents@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationProtectionIntents@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      providerSpecificDetails = {
        instanceType = "string"
        // For remaining properties, see CreateProtectionIntentProviderSpecificDetailsOrReplicationProtectionIntentProviderSpecificSettings objects
      }
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationRecoveryPlans@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      failoverDeploymentModel = "string"
      groups = [
        {
          endGroupActions = [
            {
              actionName = "string"
              customDetails = {
                instanceType = "string"
                // For remaining properties, see RecoveryPlanActionDetails objects
              }
              failoverDirections = [
                "string"
              ]
              failoverTypes = [
                "string"
              ]
            }
          ]
          groupType = "string"
          replicationProtectedItems = [
            {
              id = "string"
              virtualMachineId = "string"
            }
          ]
          startGroupActions = [
            {
              actionName = "string"
              customDetails = {
                instanceType = "string"
                // For remaining properties, see RecoveryPlanActionDetails objects
              }
              failoverDirections = [
                "string"
              ]
              failoverTypes = [
                "string"
              ]
            }
          ]
        }
      ]
      primaryFabricId = "string"
      providerSpecificInput = [
        {
          instanceType = "string"
          // For remaining properties, see RecoveryPlanProviderSpecificInput objects
        }
      ]
      recoveryFabricId = "string"
    }
  })
}

```

## Microsoft.RecoveryServices/vaults/replicationVaultSettings@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.RecoveryServices/vaults/replicationVaultSettings@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      migrationSolutionId = "string"
      vmwareToAzureProviderType = "string"
    }
  })
}

```

