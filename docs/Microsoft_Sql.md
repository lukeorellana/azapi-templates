## Microsoft.Sql/instancePools@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/instancePools@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      licenseType = "string"
      subnetId = "string"
      vCores = int
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Sql/locations/instanceFailoverGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/locations/instanceFailoverGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      managedInstancePairs = [
        {
          partnerManagedInstanceId = "string"
          primaryManagedInstanceId = "string"
        }
      ]
      partnerRegions = [
        {
          location = "string"
        }
      ]
      readWriteEndpoint = {
        failoverPolicy = "string"
        failoverWithDataLossGracePeriodMinutes = int
      }
      secondaryType = "string"
    }
  })
}

```

## Microsoft.Sql/locations/serverTrustGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/locations/serverTrustGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupMembers = [
        {
          serverId = "string"
        }
      ]
      trustScopes = [
        "string"
      ]
    }
  })
}

```

## Microsoft.Sql/managedInstances@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances@2022-05-01-preview"
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
      administratorLogin = "string"
      administratorLoginPassword = "string"
      administrators = {
        administratorType = "ActiveDirectory"
        azureADOnlyAuthentication = bool
        login = "string"
        principalType = "string"
        sid = "string"
        tenantId = "string"
      }
      collation = "string"
      dnsZonePartner = "string"
      instancePoolId = "string"
      keyId = "string"
      licenseType = "string"
      maintenanceConfigurationId = "string"
      managedInstanceCreateMode = "string"
      minimalTlsVersion = "string"
      primaryUserAssignedIdentityId = "string"
      proxyOverride = "string"
      publicDataEndpointEnabled = bool
      requestedBackupStorageRedundancy = "string"
      restorePointInTime = "string"
      servicePrincipal = {
        type = "string"
      }
      sourceManagedInstanceId = "string"
      storageSizeInGB = int
      subnetId = "string"
      timezoneId = "string"
      vCores = int
      zoneRedundant = bool
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Sql/managedInstances/administrators@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/administrators@2022-05-01-preview"
  name = "ActiveDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "ActiveDirectory"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

## Microsoft.Sql/managedInstances/advancedThreatProtectionSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/advancedThreatProtectionSettings@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

## Microsoft.Sql/managedInstances/azureADOnlyAuthentications@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/azureADOnlyAuthentications@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureADOnlyAuthentication = bool
    }
  })
}

```

## Microsoft.Sql/managedInstances/databases@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoCompleteRestore = bool
      catalogCollation = "string"
      collation = "string"
      createMode = "string"
      crossSubscriptionRestorableDroppedDatabaseId = "string"
      crossSubscriptionSourceDatabaseId = "string"
      crossSubscriptionTargetManagedInstanceId = "string"
      lastBackupName = "string"
      longTermRetentionBackupResourceId = "string"
      recoverableDatabaseId = "string"
      restorableDroppedDatabaseId = "string"
      restorePointInTime = "string"
      sourceDatabaseId = "string"
      storageContainerIdentity = "string"
      storageContainerSasToken = "string"
      storageContainerUri = "string"
    }
  })
}

```

## Microsoft.Sql/managedInstances/databases/advancedThreatProtectionSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/advancedThreatProtectionSettings@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

## Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      monthlyRetention = "string"
      weeklyRetention = "string"
      weekOfYear = int
      yearlyRetention = "string"
    }
  })
}

```

## Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      retentionDays = int
    }
  })
}

```

## Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels@2022-05-01-preview"
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

## Microsoft.Sql/managedInstances/databases/securityAlertPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/securityAlertPolicies@2022-05-01-preview"
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

## Microsoft.Sql/managedInstances/databases/transparentDataEncryption@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/transparentDataEncryption@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

## Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments@2022-05-01-preview"
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

## Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines@2022-05-01-preview"
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

## Microsoft.Sql/managedInstances/distributedAvailabilityGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/distributedAvailabilityGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      primaryAvailabilityGroupName = "string"
      replicationMode = "string"
      secondaryAvailabilityGroupName = "string"
      sourceEndpoint = "string"
      targetDatabase = "string"
    }
  })
}

```

## Microsoft.Sql/managedInstances/dnsAliases@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/dnsAliases@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    createDnsRecord = bool
  })
}

```

## Microsoft.Sql/managedInstances/dtc@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/dtc@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dtcEnabled = bool
      externalDnsSuffixSearchList = [
        "string"
      ]
      securitySettings = {
        snaLu6point2TransactionsEnabled = bool
        transactionManagerCommunicationSettings = {
          allowInboundEnabled = bool
          allowOutboundEnabled = bool
          authentication = "string"
        }
        xaTransactionsDefaultTimeout = int
        xaTransactionsEnabled = bool
        xaTransactionsMaximumTimeout = int
      }
    }
  })
}

```

## Microsoft.Sql/managedInstances/encryptionProtector@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/encryptionProtector@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoRotationEnabled = bool
      serverKeyName = "string"
      serverKeyType = "string"
    }
  })
}

```

## Microsoft.Sql/managedInstances/keys@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/keys@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      serverKeyType = "string"
      uri = "string"
    }
  })
}

```

## Microsoft.Sql/managedInstances/privateEndpointConnections@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/privateEndpointConnections@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      retentionDays = int
    }
  })
}

```

## Microsoft.Sql/managedInstances/securityAlertPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/securityAlertPolicies@2022-05-01-preview"
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

## Microsoft.Sql/managedInstances/serverTrustCertificates@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/serverTrustCertificates@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicBlob = "string"
    }
  })
}

```

## Microsoft.Sql/managedInstances/sqlAgent@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/sqlAgent@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

## Microsoft.Sql/managedInstances/vulnerabilityAssessments@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/vulnerabilityAssessments@2022-05-01-preview"
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

## Microsoft.Sql/servers@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers@2022-05-01-preview"
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
      administratorLogin = "string"
      administratorLoginPassword = "string"
      administrators = {
        administratorType = "ActiveDirectory"
        azureADOnlyAuthentication = bool
        login = "string"
        principalType = "string"
        sid = "string"
        tenantId = "string"
      }
      federatedClientId = "string"
      keyId = "string"
      minimalTlsVersion = "string"
      primaryUserAssignedIdentityId = "string"
      publicNetworkAccess = "string"
      restrictOutboundNetworkAccess = "string"
      version = "string"
    }
  })
}

```

## Microsoft.Sql/servers/administrators@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/administrators@2022-05-01-preview"
  name = "ActiveDirectory"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorType = "ActiveDirectory"
      login = "string"
      sid = "string"
      tenantId = "string"
    }
  })
}

```

## Microsoft.Sql/servers/advancedThreatProtectionSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/advancedThreatProtectionSettings@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

## Microsoft.Sql/servers/auditingPolicies@2014-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/auditingPolicies@2014-04-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditingState = "string"
      auditLogsTableName = "string"
      eventTypesToAudit = "string"
      fullAuditLogsTableName = "string"
      retentionDays = "string"
      storageAccountKey = "string"
      storageAccountName = "string"
      storageAccountResourceGroupName = "string"
      storageAccountSecondaryKey = "string"
      storageAccountSubscriptionId = "string"
      storageTableEndpoint = "string"
    }
  })
}

```

## Microsoft.Sql/servers/auditingSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/auditingSettings@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isDevopsAuditEnabled = bool
      isManagedIdentityInUse = bool
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

## Microsoft.Sql/servers/azureADOnlyAuthentications@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/azureADOnlyAuthentications@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureADOnlyAuthentication = bool
    }
  })
}

```

## Microsoft.Sql/servers/communicationLinks@2014-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/communicationLinks@2014-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      partnerServer = "string"
    }
  })
}

```

## Microsoft.Sql/servers/connectionPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/connectionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionType = "string"
    }
  })
}

```

## Microsoft.Sql/servers/databases@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "UserAssigned"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      autoPauseDelay = int
      catalogCollation = "string"
      collation = "string"
      createMode = "string"
      elasticPoolId = "string"
      federatedClientId = "string"
      highAvailabilityReplicaCount = int
      isLedgerOn = bool
      licenseType = "string"
      longTermRetentionBackupResourceId = "string"
      maintenanceConfigurationId = "string"
      maxSizeBytes = int
      minCapacity = "decimal-as-string"
      preferredEnclaveType = "string"
      readScale = "string"
      recoverableDatabaseId = "string"
      recoveryServicesRecoveryPointId = "string"
      requestedBackupStorageRedundancy = "string"
      restorableDroppedDatabaseId = "string"
      restorePointInTime = "string"
      sampleName = "string"
      secondaryType = "string"
      sourceDatabaseDeletionDate = "string"
      sourceDatabaseId = "string"
      sourceResourceId = "string"
      zoneRedundant = bool
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Sql/servers/databases/advancedThreatProtectionSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/advancedThreatProtectionSettings@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

## Microsoft.Sql/servers/databases/auditingPolicies@2014-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/auditingPolicies@2014-04-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditingState = "string"
      auditLogsTableName = "string"
      eventTypesToAudit = "string"
      fullAuditLogsTableName = "string"
      retentionDays = "string"
      storageAccountKey = "string"
      storageAccountName = "string"
      storageAccountResourceGroupName = "string"
      storageAccountSecondaryKey = "string"
      storageAccountSubscriptionId = "string"
      storageTableEndpoint = "string"
      useServerDefault = "string"
    }
  })
}

```

## Microsoft.Sql/servers/databases/auditingSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/auditingSettings@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isManagedIdentityInUse = bool
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

## Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      monthlyRetention = "string"
      weeklyRetention = "string"
      weekOfYear = int
      yearlyRetention = "string"
    }
  })
}

```

## Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      diffBackupIntervalInHours = int
      retentionDays = int
    }
  })
}

```

## Microsoft.Sql/servers/databases/connectionPolicies@2014-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/connectionPolicies@2014-04-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      proxyDnsName = "string"
      proxyPort = "string"
      redirectionState = "string"
      securityEnabledAccess = "string"
      state = "string"
      useServerDefault = "string"
      visibility = "string"
    }
  })
}

```

## Microsoft.Sql/servers/databases/dataMaskingPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/dataMaskingPolicies@2022-05-01-preview"
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

## Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2022-05-01-preview"
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

## Microsoft.Sql/servers/databases/extendedAuditingSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/extendedAuditingSettings@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isManagedIdentityInUse = bool
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

## Microsoft.Sql/servers/databases/extensions@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/extensions@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
      authenticationType = "string"
      databaseEdition = "string"
      maxSizeBytes = "string"
      networkIsolation = {
        sqlServerResourceId = "string"
        storageAccountResourceId = "string"
      }
      operationMode = "string"
      serviceObjectiveName = "string"
      storageKey = "string"
      storageKeyType = "string"
      storageUri = "string"
    }
  })
}

```

## Microsoft.Sql/servers/databases/geoBackupPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/geoBackupPolicies@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

## Microsoft.Sql/servers/databases/ledgerDigestUploads@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/ledgerDigestUploads@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      digestStorageEndpoint = "string"
    }
  })
}

```

## Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels@2022-05-01-preview"
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

## Microsoft.Sql/servers/databases/securityAlertPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/securityAlertPolicies@2022-05-01-preview"
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

## Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/baselines@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/baselines@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      latestScan = bool
      results = {}
    }
  })
}

```

## Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/baselines/rules@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/sqlVulnerabilityAssessments/baselines/rules@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      latestScan = bool
      results = [
        [
          "string"
        ]
      ]
    }
  })
}

```

## Microsoft.Sql/servers/databases/syncGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/syncGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      conflictLoggingRetentionInDays = int
      conflictResolutionPolicy = "string"
      enableConflictLogging = bool
      hubDatabasePassword = "string"
      hubDatabaseUserName = "string"
      interval = int
      schema = {
        masterSyncMemberName = "string"
        tables = [
          {
            columns = [
              {
                dataSize = "string"
                dataType = "string"
                quotedName = "string"
              }
            ]
            quotedName = "string"
          }
        ]
      }
      syncDatabaseId = "string"
      usePrivateLinkConnection = bool
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Sql/servers/databases/syncGroups/syncMembers@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/syncGroups/syncMembers@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      databaseName = "string"
      databaseType = "string"
      password = "string"
      serverName = "string"
      sqlServerDatabaseId = "string"
      syncAgentId = "string"
      syncDirection = "string"
      syncMemberAzureDatabaseResourceId = "string"
      usePrivateLinkConnection = bool
      userName = "string"
    }
  })
}

```

## Microsoft.Sql/servers/databases/transparentDataEncryption@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/transparentDataEncryption@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

## Microsoft.Sql/servers/databases/vulnerabilityAssessments@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/vulnerabilityAssessments@2022-05-01-preview"
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

## Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines@2022-05-01-preview"
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

## Microsoft.Sql/servers/databases/workloadGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/workloadGroups@2022-05-01-preview"
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

## Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers@2022-05-01-preview"
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

## Microsoft.Sql/servers/devOpsAuditingSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/devOpsAuditingSettings@2022-05-01-preview"
  name = "Default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isAzureMonitorTargetEnabled = bool
      isManagedIdentityInUse = bool
      state = "string"
      storageAccountAccessKey = "string"
      storageAccountSubscriptionId = "string"
      storageEndpoint = "string"
    }
  })
}

```

## Microsoft.Sql/servers/disasterRecoveryConfiguration@2014-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/disasterRecoveryConfiguration@2014-04-01"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.Sql/servers/dnsAliases@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/dnsAliases@2022-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.Sql/servers/elasticPools@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/elasticPools@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      highAvailabilityReplicaCount = int
      licenseType = "string"
      maintenanceConfigurationId = "string"
      maxSizeBytes = int
      minCapacity = int
      perDatabaseSettings = {
        maxCapacity = int
        minCapacity = int
      }
      zoneRedundant = bool
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Sql/servers/encryptionProtector@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/encryptionProtector@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoRotationEnabled = bool
      serverKeyName = "string"
      serverKeyType = "string"
    }
  })
}

```

## Microsoft.Sql/servers/extendedAuditingSettings@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/extendedAuditingSettings@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      auditActionsAndGroups = [
        "string"
      ]
      isAzureMonitorTargetEnabled = bool
      isDevopsAuditEnabled = bool
      isManagedIdentityInUse = bool
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

## Microsoft.Sql/servers/failoverGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/failoverGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      databases = [
        "string"
      ]
      partnerServers = [
        {
          id = "string"
        }
      ]
      readWriteEndpoint = {
        failoverPolicy = "string"
        failoverWithDataLossGracePeriodMinutes = int
      }
    }
  })
}

```

## Microsoft.Sql/servers/firewallRules@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/firewallRules@2022-05-01-preview"
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

## Microsoft.Sql/servers/ipv6FirewallRules@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/ipv6FirewallRules@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endIPv6Address = "string"
      startIPv6Address = "string"
    }
  })
}

```

## Microsoft.Sql/servers/jobAgents@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents@2022-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      databaseId = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Sql/servers/jobAgents/credentials@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/credentials@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      password = "string"
      username = "string"
    }
  })
}

```

## Microsoft.Sql/servers/jobAgents/jobs@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/jobs@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      schedule = {
        enabled = bool
        endTime = "string"
        interval = "string"
        startTime = "string"
        type = "string"
      }
    }
  })
}

```

## Microsoft.Sql/servers/jobAgents/jobs/executions@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/jobs/executions@2022-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.Sql/servers/jobAgents/jobs/steps@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/jobs/steps@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      action = {
        source = "Inline"
        type = "TSql"
        value = "string"
      }
      credential = "string"
      executionOptions = {
        initialRetryIntervalSeconds = int
        maximumRetryIntervalSeconds = int
        retryAttempts = int
        retryIntervalBackoffMultiplier = int
        timeoutSeconds = int
      }
      output = {
        credential = "string"
        databaseName = "string"
        resourceGroupName = "string"
        schemaName = "string"
        serverName = "string"
        subscriptionId = "string"
        tableName = "string"
        type = "SqlDatabase"
      }
      stepId = int
      targetGroup = "string"
    }
  })
}

```

## Microsoft.Sql/servers/jobAgents/targetGroups@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/jobAgents/targetGroups@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      members = [
        {
          databaseName = "string"
          elasticPoolName = "string"
          membershipType = "string"
          refreshCredential = "string"
          serverName = "string"
          shardMapName = "string"
          type = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Sql/servers/keys@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/keys@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      serverKeyType = "string"
      uri = "string"
    }
  })
}

```

## Microsoft.Sql/servers/outboundFirewallRules@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/outboundFirewallRules@2022-05-01-preview"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.Sql/servers/privateEndpointConnections@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/privateEndpointConnections@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.Sql/servers/securityAlertPolicies@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/securityAlertPolicies@2022-05-01-preview"
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

## Microsoft.Sql/servers/sqlVulnerabilityAssessments@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/sqlVulnerabilityAssessments@2022-05-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      state = "string"
    }
  })
}

```

## Microsoft.Sql/servers/syncAgents@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/syncAgents@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      syncDatabaseId = "string"
    }
  })
}

```

## Microsoft.Sql/servers/virtualNetworkRules@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/virtualNetworkRules@2022-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      ignoreMissingVnetServiceEndpoint = bool
      virtualNetworkSubnetId = "string"
    }
  })
}

```

## Microsoft.Sql/servers/vulnerabilityAssessments@2022-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/servers/vulnerabilityAssessments@2022-05-01-preview"
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

