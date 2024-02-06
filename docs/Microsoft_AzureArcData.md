## Microsoft.AzureArcData/dataControllers@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/dataControllers@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      basicLoginInformation = {
        password = "string"
        username = "string"
      }
      clusterId = "string"
      extensionId = "string"
      infrastructure = "string"
      lastUploadedDate = "string"
      logAnalyticsWorkspaceConfig = {
        primaryKey = "string"
        workspaceId = "string"
      }
      logsDashboardCredential = {
        password = "string"
        username = "string"
      }
      metricsDashboardCredential = {
        password = "string"
        username = "string"
      }
      onPremiseProperty = {
        id = "string"
        publicSigningKey = "string"
        signingCertificateThumbprint = "string"
      }
      uploadServicePrincipal = {
        authority = "string"
        clientId = "string"
        clientSecret = "string"
        tenantId = "string"
      }
      uploadWatermark = {
        logs = "string"
        metrics = "string"
        usages = "string"
      }
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

## Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors@2023-03-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      domainServiceAccountLoginInformation = {
        password = "string"
        username = "string"
      }
      spec = {
        activeDirectory = {
          domainControllers = {
            primaryDomainController = {
              hostname = "string"
            }
            secondaryDomainControllers = [
              {
                hostname = "string"
              }
            ]
          }
          netbiosDomainName = "string"
          ouDistinguishedName = "string"
          realm = "string"
          serviceAccountProvisioning = "string"
        }
        dns = {
          domainName = "string"
          nameserverIPAddresses = [
            "string"
          ]
          preferK8sDnsForPtrLookups = bool
          replicas = int
        }
      }
      status = {
        lastUpdateTime = "string"
        observedGeneration = int
        state = "string"
      }
    }
  })
}

```

## Microsoft.AzureArcData/postgresInstances@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/postgresInstances@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      admin = "string"
      basicLoginInformation = {
        password = "string"
        username = "string"
      }
      dataControllerId = "string"
      lastUploadedDate = "string"
    }
    sku = {
      capacity = int
      dev = bool
      family = "string"
      name = "string"
      size = "string"
      tier = "Hyperscale"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

## Microsoft.AzureArcData/sqlAvailabilityGroups@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlAvailabilityGroups@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      availabilityGroupId = "string"
      availabilityGroupName = "string"
      basicFeatures = bool
      clusterTypeDesc = "string"
      collectionTimestamp = "string"
      dbFailover = bool
      dtcSupport = bool
      instanceName = "string"
      isContained = bool
      isDistributed = bool
      requiredSynchronizedSecondariesCommit = int
      version = int
    }
  })
}

```

## Microsoft.AzureArcData/sqlAvailabilityGroups/databases@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlAvailabilityGroups/databases@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      groupDatabaseId = "string"
      value = [
        {
          databaseStateDesc = "string"
          isCommitParticipant = bool
          isLocal = bool
          isPrimaryReplica = bool
          isSuspended = bool
          replicaName = "string"
          suspendReasonDesc = "string"
          synchronizationHealthDesc = "string"
          synchronizationStateDesc = "string"
        }
      ]
    }
  })
}

```

## Microsoft.AzureArcData/sqlAvailabilityGroups/sqlServerInstances@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlAvailabilityGroups/sqlServerInstances@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      configure = {
        availabilityModeDesc = "string"
        backupPriority = int
        createDate = "string"
        endpointUrl = "string"
        failoverModeDesc = "string"
        modifyDate = "string"
        primaryRoleAllowConnectionsDesc = "string"
        readOnlyRoutingUrl = "string"
        readWriteRoutingUrl = "string"
        secondaryRoleAllowConnectionsDesc = "string"
        seedingModeDesc = "string"
        sessionTimeout = int
      }
      replicaId = "string"
      replicaName = "string"
      state = {
        availabilityGroupReplicaRole = "string"
        connectedStateDesc = "string"
        lastConnectErrorDescription = "string"
        lastConnectErrorTimestamp = "string"
        operationalStateDesc = "string"
        recoveryHealthDesc = "string"
        synchronizationHealthDesc = "string"
      }
    }
  })
}

```

## Microsoft.AzureArcData/sqlManagedInstances@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlManagedInstances@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      activeDirectoryInformation = {
        keytabInformation = {
          keytab = "string"
        }
      }
      admin = "string"
      basicLoginInformation = {
        password = "string"
        username = "string"
      }
      clusterId = "string"
      dataControllerId = "string"
      endTime = "string"
      extensionId = "string"
      k8sRaw = {
        spec = {
          replicas = int
          scheduling = {
            default = {
              resources = {
                limits = {}
                requests = {}
              }
            }
          }
        }
      }
      lastUploadedDate = "string"
      licenseType = "string"
      startTime = "string"
    }
    sku = {
      capacity = int
      dev = bool
      family = "string"
      name = "vCore"
      size = "string"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

## Microsoft.AzureArcData/sqlManagedInstances/failoverGroups@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlManagedInstances/failoverGroups@2023-03-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      partnerManagedInstanceId = "string"
      spec = {
        partnerMI = "string"
        partnerMirroringCert = "string"
        partnerMirroringURL = "string"
        partnerSyncMode = "string"
        role = "string"
        sharedName = "string"
        sourceMI = "string"
      }
    }
  })
}

```

## Microsoft.AzureArcData/sqlServerInstances@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlServerInstances@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      azureDefenderStatus = "string"
      azureDefenderStatusLastUpdated = "string"
      collation = "string"
      containerResourceId = "string"
      cores = "string"
      currentVersion = "string"
      edition = "string"
      hostType = "string"
      instanceName = "string"
      licenseType = "string"
      patchLevel = "string"
      productId = "string"
      status = "string"
      tcpDynamicPorts = "string"
      tcpStaticPorts = "string"
      vCore = "string"
      version = "string"
    }
  })
}

```

## Microsoft.AzureArcData/sqlServerInstances/databases@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlServerInstances/databases@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backupInformation = {
        lastFullBackup = "string"
        lastLogBackup = "string"
      }
      collationName = "string"
      compatibilityLevel = int
      databaseCreationDate = "string"
      databaseOptions = {
        isAutoCloseOn = bool
        isAutoCreateStatsOn = bool
        isAutoShrinkOn = bool
        isAutoUpdateStatsOn = bool
        isEncrypted = bool
        isMemoryOptimizationEnabled = bool
        isRemoteDataArchiveEnabled = bool
        isTrustworthyOn = bool
      }
      recoveryMode = "string"
      sizeMB = int
      spaceAvailableMB = int
      state = "string"
    }
  })
}

```

## Microsoft.AzureArcData/sqlServerInstances/sqlAvailabilityGroups@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AzureArcData/sqlServerInstances/sqlAvailabilityGroups@2023-03-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      availabilityGroupId = "string"
      availabilityGroupName = "string"
      configure = {
        availabilityModeDesc = "string"
        backupPriority = int
        createDate = "string"
        endpointUrl = "string"
        failoverModeDesc = "string"
        modifyDate = "string"
        primaryRoleAllowConnectionsDesc = "string"
        readOnlyRoutingUrl = "string"
        readWriteRoutingUrl = "string"
        secondaryRoleAllowConnectionsDesc = "string"
        seedingModeDesc = "string"
        sessionTimeout = int
      }
      state = {
        availabilityGroupReplicaRole = "string"
        connectedStateDesc = "string"
        lastConnectErrorDescription = "string"
        lastConnectErrorTimestamp = "string"
        operationalStateDesc = "string"
        recoveryHealthDesc = "string"
        synchronizationHealthDesc = "string"
      }
    }
  })
}

```

