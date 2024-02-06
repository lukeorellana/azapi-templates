## Microsoft.Storage/storageAccounts@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts@2022-09-01"
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
      accessTier = "string"
      allowBlobPublicAccess = bool
      allowCrossTenantReplication = bool
      allowedCopyScope = "string"
      allowSharedKeyAccess = bool
      azureFilesIdentityBasedAuthentication = {
        activeDirectoryProperties = {
          accountType = "string"
          azureStorageSid = "string"
          domainGuid = "string"
          domainName = "string"
          domainSid = "string"
          forestName = "string"
          netBiosDomainName = "string"
          samAccountName = "string"
        }
        defaultSharePermission = "string"
        directoryServiceOptions = "string"
      }
      customDomain = {
        name = "string"
        useSubDomainName = bool
      }
      defaultToOAuthAuthentication = bool
      dnsEndpointType = "string"
      encryption = {
        identity = {
          federatedIdentityClientId = "string"
          userAssignedIdentity = "string"
        }
        keySource = "string"
        keyvaultproperties = {
          keyname = "string"
          keyvaulturi = "string"
          keyversion = "string"
        }
        requireInfrastructureEncryption = bool
        services = {
          blob = {
            enabled = bool
            keyType = "string"
          }
          file = {
            enabled = bool
            keyType = "string"
          }
          queue = {
            enabled = bool
            keyType = "string"
          }
          table = {
            enabled = bool
            keyType = "string"
          }
        }
      }
      immutableStorageWithVersioning = {
        enabled = bool
        immutabilityPolicy = {
          allowProtectedAppendWrites = bool
          immutabilityPeriodSinceCreationInDays = int
          state = "string"
        }
      }
      isHnsEnabled = bool
      isLocalUserEnabled = bool
      isNfsV3Enabled = bool
      isSftpEnabled = bool
      keyPolicy = {
        keyExpirationPeriodInDays = int
      }
      largeFileSharesState = "string"
      minimumTlsVersion = "string"
      networkAcls = {
        bypass = "string"
        defaultAction = "string"
        ipRules = [
          {
            action = "Allow"
            value = "string"
          }
        ]
        resourceAccessRules = [
          {
            resourceId = "string"
            tenantId = "string"
          }
        ]
        virtualNetworkRules = [
          {
            action = "Allow"
            id = "string"
            state = "string"
          }
        ]
      }
      publicNetworkAccess = "string"
      routingPreference = {
        publishInternetEndpoints = bool
        publishMicrosoftEndpoints = bool
        routingChoice = "string"
      }
      sasPolicy = {
        expirationAction = "Log"
        sasExpirationPeriod = "string"
      }
      supportsHttpsTrafficOnly = bool
    }
    sku = {
      name = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Storage/storageAccounts/blobServices@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/blobServices@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      automaticSnapshotPolicyEnabled = bool
      changeFeed = {
        enabled = bool
        retentionInDays = int
      }
      containerDeleteRetentionPolicy = {
        allowPermanentDelete = bool
        days = int
        enabled = bool
      }
      cors = {
        corsRules = [
          {
            allowedHeaders = [
              "string"
            ]
            allowedMethods = [
              "string"
            ]
            allowedOrigins = [
              "string"
            ]
            exposedHeaders = [
              "string"
            ]
            maxAgeInSeconds = int
          }
        ]
      }
      defaultServiceVersion = "string"
      deleteRetentionPolicy = {
        allowPermanentDelete = bool
        days = int
        enabled = bool
      }
      isVersioningEnabled = bool
      lastAccessTimeTrackingPolicy = {
        blobType = [
          "string"
        ]
        enable = bool
        name = "AccessTimeTracking"
        trackingGranularityInDays = int
      }
      restorePolicy = {
        days = int
        enabled = bool
      }
    }
  })
}

```

## Microsoft.Storage/storageAccounts/blobServices/containers@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/blobServices/containers@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      defaultEncryptionScope = "string"
      denyEncryptionScopeOverride = bool
      enableNfsV3AllSquash = bool
      enableNfsV3RootSquash = bool
      immutableStorageWithVersioning = {
        enabled = bool
      }
      metadata = {}
      publicAccess = "string"
    }
  })
}

```

## Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowProtectedAppendWrites = bool
      allowProtectedAppendWritesAll = bool
      immutabilityPeriodSinceCreationInDays = int
    }
  })
}

```

## Microsoft.Storage/storageAccounts/encryptionScopes@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/encryptionScopes@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      keyVaultProperties = {
        keyUri = "string"
      }
      requireInfrastructureEncryption = bool
      source = "string"
      state = "string"
    }
  })
}

```

## Microsoft.Storage/storageAccounts/fileServices@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/fileServices@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cors = {
        corsRules = [
          {
            allowedHeaders = [
              "string"
            ]
            allowedMethods = [
              "string"
            ]
            allowedOrigins = [
              "string"
            ]
            exposedHeaders = [
              "string"
            ]
            maxAgeInSeconds = int
          }
        ]
      }
      protocolSettings = {
        smb = {
          authenticationMethods = "string"
          channelEncryption = "string"
          kerberosTicketEncryption = "string"
          multichannel = {
            enabled = bool
          }
          versions = "string"
        }
      }
      shareDeleteRetentionPolicy = {
        allowPermanentDelete = bool
        days = int
        enabled = bool
      }
    }
  })
}

```

## Microsoft.Storage/storageAccounts/fileServices/shares@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/fileServices/shares@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accessTier = "string"
      enabledProtocols = "string"
      metadata = {}
      rootSquash = "string"
      shareQuota = int
      signedIdentifiers = [
        {
          accessPolicy = {
            expiryTime = "string"
            permission = "string"
            startTime = "string"
          }
          id = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Storage/storageAccounts/inventoryPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/inventoryPolicies@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      policy = {
        enabled = bool
        rules = [
          {
            definition = {
              filters = {
                blobTypes = [
                  "string"
                ]
                excludePrefix = [
                  "string"
                ]
                includeBlobVersions = bool
                includeDeleted = bool
                includeSnapshots = bool
                prefixMatch = [
                  "string"
                ]
              }
              format = "string"
              objectType = "string"
              schedule = "string"
              schemaFields = [
                "string"
              ]
            }
            destination = "string"
            enabled = bool
            name = "string"
          }
        ]
        type = "Inventory"
      }
    }
  })
}

```

## Microsoft.Storage/storageAccounts/localUsers@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/localUsers@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hasSharedKey = bool
      hasSshKey = bool
      hasSshPassword = bool
      homeDirectory = "string"
      permissionScopes = [
        {
          permissions = "string"
          resourceName = "string"
          service = "string"
        }
      ]
      sshAuthorizedKeys = [
        {
          description = "string"
          key = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Storage/storageAccounts/managementPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/managementPolicies@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      policy = {
        rules = [
          {
            definition = {
              actions = {
                baseBlob = {
                  delete = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastAccessTimeGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                    daysAfterModificationGreaterThan = int
                  }
                  enableAutoTierToHotFromCool = bool
                  tierToArchive = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastAccessTimeGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                    daysAfterModificationGreaterThan = int
                  }
                  tierToCold = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastAccessTimeGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                    daysAfterModificationGreaterThan = int
                  }
                  tierToCool = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastAccessTimeGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                    daysAfterModificationGreaterThan = int
                  }
                  tierToHot = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastAccessTimeGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                    daysAfterModificationGreaterThan = int
                  }
                }
                snapshot = {
                  delete = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToArchive = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToCold = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToCool = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToHot = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                }
                version = {
                  delete = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToArchive = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToCold = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToCool = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                  tierToHot = {
                    daysAfterCreationGreaterThan = int
                    daysAfterLastTierChangeGreaterThan = int
                  }
                }
              }
              filters = {
                blobIndexMatch = [
                  {
                    name = "string"
                    op = "string"
                    value = "string"
                  }
                ]
                blobTypes = [
                  "string"
                ]
                prefixMatch = [
                  "string"
                ]
              }
            }
            enabled = bool
            name = "string"
            type = "Lifecycle"
          }
        ]
      }
    }
  })
}

```

## Microsoft.Storage/storageAccounts/objectReplicationPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/objectReplicationPolicies@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      destinationAccount = "string"
      rules = [
        {
          destinationContainer = "string"
          filters = {
            minCreationTime = "string"
            prefixMatch = [
              "string"
            ]
          }
          ruleId = "string"
          sourceContainer = "string"
        }
      ]
      sourceAccount = "string"
    }
  })
}

```

## Microsoft.Storage/storageAccounts/privateEndpointConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/privateEndpointConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.Storage/storageAccounts/queueServices@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/queueServices@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cors = {
        corsRules = [
          {
            allowedHeaders = [
              "string"
            ]
            allowedMethods = [
              "string"
            ]
            allowedOrigins = [
              "string"
            ]
            exposedHeaders = [
              "string"
            ]
            maxAgeInSeconds = int
          }
        ]
      }
    }
  })
}

```

## Microsoft.Storage/storageAccounts/queueServices/queues@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/queueServices/queues@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      metadata = {}
    }
  })
}

```

## Microsoft.Storage/storageAccounts/tableServices@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/tableServices@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cors = {
        corsRules = [
          {
            allowedHeaders = [
              "string"
            ]
            allowedMethods = [
              "string"
            ]
            allowedOrigins = [
              "string"
            ]
            exposedHeaders = [
              "string"
            ]
            maxAgeInSeconds = int
          }
        ]
      }
    }
  })
}

```

## Microsoft.Storage/storageAccounts/tableServices/tables@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Storage/storageAccounts/tableServices/tables@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      signedIdentifiers = [
        {
          accessPolicy = {
            expiryTime = "string"
            permission = "string"
            startTime = "string"
          }
          id = "string"
        }
      ]
    }
  })
}

```

