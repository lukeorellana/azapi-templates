## Microsoft.Synapse/privateLinkHubs@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/privateLinkHubs@2021-06-01"
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
    }
  })
}

```

## Microsoft.Synapse/workspaces@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces@2021-06-01"
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
      azureADOnlyAuthentication = bool
      cspWorkspaceAdminProperties = {
        initialWorkspaceAdminObjectId = "string"
      }
      defaultDataLakeStorage = {
        accountUrl = "string"
        createManagedPrivateEndpoint = bool
        filesystem = "string"
        resourceId = "string"
      }
      encryption = {
        cmk = {
          kekIdentity = {
            userAssignedIdentity = "string"
          }
          key = {
            keyVaultUrl = "string"
            name = "string"
          }
        }
      }
      managedResourceGroupName = "string"
      managedVirtualNetwork = "string"
      managedVirtualNetworkSettings = {
        allowedAadTenantIdsForLinking = [
          "string"
        ]
        linkedAccessCheckOnTargetResource = bool
        preventDataExfiltration = bool
      }
      privateEndpointConnections = [
        {
          properties = {
            privateEndpoint = {}
            privateLinkServiceConnectionState = {
              description = "string"
              status = "string"
            }
          }
        }
      ]
      publicNetworkAccess = "string"
      purviewConfiguration = {
        purviewResourceId = "string"
      }
      sqlAdministratorLogin = "string"
      sqlAdministratorLoginPassword = "string"
      trustedServiceBypassEnabled = bool
      virtualNetworkProfile = {
        computeSubnetId = "string"
      }
      workspaceRepositoryConfiguration = {
        accountName = "string"
        collaborationBranch = "string"
        hostName = "string"
        lastCommitId = "string"
        projectName = "string"
        repositoryName = "string"
        rootFolder = "string"
        tenantId = "string"
        type = "string"
      }
    }
  })
}

```

## Microsoft.Synapse/workspaces/administrators@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/administrators@2021-06-01"
  name = "activeDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "string"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/auditingSettings@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/auditingSettings@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isDevopsAuditEnabled = bool
      isStorageSecondaryKeyInUse = bool
      queueDelayMs = int
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/azureADOnlyAuthentications@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/azureADOnlyAuthentications@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureADOnlyAuthentication = bool
    }
  })
}

```

## Microsoft.Synapse/workspaces/bigDataPools@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/bigDataPools@2021-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoPause = {
        delayInMinutes = int
        enabled = bool
      }
      autoScale = {
        enabled = bool
        maxNodeCount = int
        minNodeCount = int
      }
      customLibraries = [
        {
          containerName = "string"
          name = "string"
          path = "string"
          type = "string"
        }
      ]
      defaultSparkLogFolder = "string"
      dynamicExecutorAllocation = {
        enabled = bool
        maxExecutors = int
        minExecutors = int
      }
      isAutotuneEnabled = bool
      isComputeIsolationEnabled = bool
      libraryRequirements = {
        content = "string"
        filename = "string"
      }
      nodeCount = int
      nodeSize = "string"
      nodeSizeFamily = "string"
      provisioningState = "string"
      sessionLevelPackagesEnabled = bool
      sparkConfigProperties = {
        configurationType = "string"
        content = "string"
        filename = "string"
      }
      sparkEventsFolder = "string"
      sparkVersion = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/dedicatedSQLminimalTlsSettings@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/dedicatedSQLminimalTlsSettings@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      minimalTlsVersion = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/encryptionProtector@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/encryptionProtector@2021-06-01"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      serverKeyName = "string"
      serverKeyType = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/extendedAuditingSettings@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/extendedAuditingSettings@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isDevopsAuditEnabled = bool
      isStorageSecondaryKeyInUse = bool
      predicateExpression = "string"
      queueDelayMs = int
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/firewallRules@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/firewallRules@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIpAddress = "string"
      startIpAddress = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/integrationRuntimes@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/integrationRuntimes@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      type = "string"
      // For remaining properties, see IntegrationRuntime objects
    }
  })
}

```

## Microsoft.Synapse/workspaces/keys@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/keys@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isActiveCMK = bool
      keyVaultUrl = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/kustoPools@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools@2021-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enablePurge = bool
      enableStreamingIngest = bool
      optimizedAutoscale = {
        isEnabled = bool
        maximum = int
        minimum = int
        version = int
      }
      workspaceUID = "string"
    }
    sku = {
      capacity = int
      name = "string"
      size = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/kustoPools/attachedDatabaseConfigurations@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools/attachedDatabaseConfigurations@2021-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clusterResourceId = "string"
      databaseName = "string"
      defaultPrincipalsModificationKind = "string"
      tableLevelSharingProperties = {
        externalTablesToExclude = [
          "string"
        ]
        externalTablesToInclude = [
          "string"
        ]
        materializedViewsToExclude = [
          "string"
        ]
        materializedViewsToInclude = [
          "string"
        ]
        tablesToExclude = [
          "string"
        ]
        tablesToInclude = [
          "string"
        ]
      }
    }
  })
}

```

## Microsoft.Synapse/workspaces/kustoPools/databases@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools/databases@2021-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  // For remaining properties, see workspaces/kustoPools/databases objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools/databases/dataConnections@2021-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  // For remaining properties, see workspaces/kustoPools/databases/dataConnections objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.Synapse/workspaces/kustoPools/databases/principalAssignments@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools/databases/principalAssignments@2021-06-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      principalType = "string"
      role = "string"
      tenantId = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/kustoPools/principalAssignments@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/kustoPools/principalAssignments@2021-06-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      principalType = "string"
      role = "string"
      tenantId = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/managedIdentitySqlControlSettings@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      grantSqlControlToManagedIdentity = {
        desiredState = "string"
      }
    }
  })
}

```

## Microsoft.Synapse/workspaces/privateEndpointConnections@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/privateEndpointConnections@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.Synapse/workspaces/securityAlertPolicies@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/securityAlertPolicies@2021-06-01"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      disabledAlerts = [
        "string"
      ]
      emailAccountAdmins = bool
      emailAddresses = [
        "string"
      ]
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageEndpoint = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlAdministrators@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlAdministrators@2021-06-01"
  name = "activeDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "string"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlDatabases@2020-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlDatabases@2020-04-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      collation = "string"
      dataRetention = {
        dropRetentionPeriod = "string"
        retentionPeriod = "string"
      }
      storageRedundancy = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools@2021-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      collation = "string"
      createMode = "string"
      maxSizeBytes = int
      provisioningState = "string"
      recoverableDatabaseId = "string"
      restorePointInTime = "string"
      sourceDatabaseDeletionDate = "string"
      sourceDatabaseId = "string"
      storageAccountType = "string"
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools/auditingSettings@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/auditingSettings@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isStorageSecondaryKeyInUse = bool
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies@2021-06-01"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataMaskingState = "string"
      exemptPrincipals = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/dataMaskingPolicies/rules@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aliasName = "string"
      columnName = "string"
      maskingFunction = "string"
      numberFrom = "string"
      numberTo = "string"
      prefixSize = "string"
      replacementString = "string"
      ruleState = "string"
      schemaName = "string"
      suffixSize = "string"
      tableName = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/extendedAuditingSettings@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isStorageSecondaryKeyInUse = bool
      predicateExpression = "string"
      queueDelayMs = int
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/geoBackupPolicies@2021-06-01"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools/metadataSync@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/metadataSync@2021-06-01"
  name = "config"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      syncIntervalInMinutes = int
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/schemas/tables/columns/sensitivityLabels@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      informationType = "string"
      informationTypeId = "string"
      labelId = "string"
      labelName = "string"
      rank = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/securityAlertPolicies@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      disabledAlerts = [
        "string"
      ]
      emailAccountAdmins = bool
      emailAddresses = [
        "string"
      ]
      retentionDays = int
      state = "string"
      storageAccountAccessKey = "string"
      storageEndpoint = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/transparentDataEncryption@2021-06-01"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      status = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      recurringScans = {
        emails = [
          "string"
        ]
        emailSubscriptionAdmins = bool
        isEnabled = bool
      }
      storageAccountAccessKey = "string"
      storageContainerPath = "string"
      storageContainerSasKey = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/vulnerabilityAssessments/rules/baselines@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      baselineResults = [
        {
          result = [
            "string"
          ]
        }
      ]
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools/workloadGroups@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/workloadGroups@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      importance = "string"
      maxResourcePercent = int
      maxResourcePercentPerRequest = int
      minResourcePercent = int
      minResourcePercentPerRequest = int
      queryExecutionTimeout = int
    }
  })
}

```

## Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/sqlPools/workloadGroups/workloadClassifiers@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      context = "string"
      endTime = "string"
      importance = "string"
      label = "string"
      memberName = "string"
      startTime = "string"
    }
  })
}

```

## Microsoft.Synapse/workspaces/trustedServiceByPassConfiguration@2021-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/trustedServiceByPassConfiguration@2021-06-01-preview"
  name = "default"
  parent_id = "string"
}

```

## Microsoft.Synapse/workspaces/vulnerabilityAssessments@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Synapse/workspaces/vulnerabilityAssessments@2021-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      recurringScans = {
        emails = [
          "string"
        ]
        emailSubscriptionAdmins = bool
        isEnabled = bool
      }
      storageAccountAccessKey = "string"
      storageContainerPath = "string"
      storageContainerSasKey = "string"
    }
  })
}

```

