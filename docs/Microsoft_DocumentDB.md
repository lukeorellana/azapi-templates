## Microsoft.DocumentDB/cassandraClusters@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/cassandraClusters@2023-04-15"
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
      authenticationMethod = "string"
      cassandraAuditLoggingEnabled = bool
      cassandraVersion = "string"
      clientCertificates = [
        {
          pem = "string"
        }
      ]
      clusterNameOverride = "string"
      deallocated = bool
      delegatedManagementSubnetId = "string"
      externalGossipCertificates = [
        {
          pem = "string"
        }
      ]
      externalSeedNodes = [
        {
          ipAddress = "string"
        }
      ]
      hoursBetweenBackups = int
      initialCassandraAdminPassword = "string"
      prometheusEndpoint = {
        ipAddress = "string"
      }
      provisionError = {
        additionalErrorInfo = "string"
        code = "string"
        message = "string"
        target = "string"
      }
      provisioningState = "string"
      repairEnabled = bool
      restoreFromBackupId = "string"
    }
  })
}

```

## Microsoft.DocumentDB/cassandraClusters/dataCenters@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/cassandraClusters/dataCenters@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationMethodLdapProperties = {
        connectionTimeoutInMs = int
        searchBaseDistinguishedName = "string"
        searchFilterTemplate = "string"
        serverCertificates = [
          {
            pem = "string"
          }
        ]
        serverHostname = "string"
        serverPort = int
        serviceUserDistinguishedName = "string"
        serviceUserPassword = "string"
      }
      availabilityZone = bool
      backupStorageCustomerKeyUri = "string"
      base64EncodedCassandraYamlFragment = "string"
      dataCenterLocation = "string"
      deallocated = bool
      delegatedSubnetId = "string"
      diskCapacity = int
      diskSku = "string"
      managedDiskCustomerKeyUri = "string"
      nodeCount = int
      provisionError = {
        additionalErrorInfo = "string"
        code = "string"
        message = "string"
        target = "string"
      }
      provisioningState = "string"
      sku = "string"
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts@2023-04-15"
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
      analyticalStorageConfiguration = {
        schemaType = "string"
      }
      apiProperties = {
        serverVersion = "string"
      }
      backupPolicy = {
        migrationState = {
          startTime = "string"
          status = "string"
          targetType = "string"
        }
        type = "string"
        // For remaining properties, see BackupPolicy objects
      }
      capabilities = [
        {
          name = "string"
        }
      ]
      capacity = {
        totalThroughputLimit = int
      }
      connectorOffer = "Small"
      consistencyPolicy = {
        defaultConsistencyLevel = "string"
        maxIntervalInSeconds = int
        maxStalenessPrefix = int
      }
      cors = [
        {
          allowedHeaders = "string"
          allowedMethods = "string"
          allowedOrigins = "string"
          exposedHeaders = "string"
          maxAgeInSeconds = int
        }
      ]
      createMode = "string"
      databaseAccountOfferType = "Standard"
      defaultIdentity = "string"
      disableKeyBasedMetadataWriteAccess = bool
      disableLocalAuth = bool
      enableAnalyticalStorage = bool
      enableAutomaticFailover = bool
      enableCassandraConnector = bool
      enableFreeTier = bool
      enableMultipleWriteLocations = bool
      enablePartitionMerge = bool
      ipRules = [
        {
          ipAddressOrRange = "string"
        }
      ]
      isVirtualNetworkFilterEnabled = bool
      keyVaultKeyUri = "string"
      locations = [
        {
          failoverPriority = int
          isZoneRedundant = bool
          locationName = "string"
        }
      ]
      minimalTlsVersion = "string"
      networkAclBypass = "string"
      networkAclBypassResourceIds = [
        "string"
      ]
      publicNetworkAccess = "string"
      restoreParameters = {
        databasesToRestore = [
          {
            collectionNames = [
              "string"
            ]
            databaseName = "string"
          }
        ]
        gremlinDatabasesToRestore = [
          {
            databaseName = "string"
            graphNames = [
              "string"
            ]
          }
        ]
        restoreMode = "PointInTime"
        restoreSource = "string"
        restoreTimestampInUtc = "string"
        tablesToRestore = [
          "string"
        ]
      }
      virtualNetworkRules = [
        {
          id = "string"
          ignoreMissingVNetServiceEndpoint = bool
        }
      ]
    }
    kind = "string"
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/databases@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/databases/collections@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/collections@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        id = "string"
        indexes = [
          {
            key = {
              keys = [
                "string"
              ]
            }
            options = {
              expireAfterSeconds = int
              unique = bool
            }
          }
        ]
        shardKey = {}
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/databases/containers@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/containers@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        conflictResolutionPolicy = {
          conflictResolutionPath = "string"
          conflictResolutionProcedure = "string"
          mode = "string"
        }
        defaultTtl = int
        id = "string"
        indexingPolicy = {
          automatic = bool
          excludedPaths = [
            {
              path = "string"
            }
          ]
          includedPaths = [
            {
              indexes = [
                {
                  dataType = "string"
                  kind = "string"
                  precision = int
                }
              ]
              path = "string"
            }
          ]
          indexingMode = "string"
        }
        partitionKey = {
          kind = "string"
          paths = [
            "string"
          ]
        }
        uniqueKeyPolicy = {
          uniqueKeys = [
            {
              paths = [
                "string"
              ]
            }
          ]
        }
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        conflictResolutionPolicy = {
          conflictResolutionPath = "string"
          conflictResolutionProcedure = "string"
          mode = "string"
        }
        defaultTtl = int
        id = "string"
        indexingPolicy = {
          automatic = bool
          excludedPaths = [
            {
              path = "string"
            }
          ]
          includedPaths = [
            {
              indexes = [
                {
                  dataType = "string"
                  kind = "string"
                  precision = int
                }
              ]
              path = "string"
            }
          ]
          indexingMode = "string"
        }
        partitionKey = {
          kind = "string"
          paths = [
            "string"
          ]
        }
        uniqueKeyPolicy = {
          uniqueKeys = [
            {
              paths = [
                "string"
              ]
            }
          ]
        }
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/databases/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/databases/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/keyspaces@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        defaultTtl = int
        id = "string"
        schema = {
          clusterKeys = [
            {
              name = "string"
              orderBy = "string"
            }
          ]
          columns = [
            {
              name = "string"
              type = "string"
            }
          ]
          partitionKeys = [
            {
              name = "string"
            }
          ]
        }
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/tables@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/tables@2016-03-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      options = {}
      resource = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/apis/tables/settings@2016-03-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/apis/tables/settings@2016-03-31"
  name = "throughput"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        analyticalStorageTtl = int
        defaultTtl = int
        id = "string"
        schema = {
          clusterKeys = [
            {
              name = "string"
              orderBy = "string"
            }
          ]
          columns = [
            {
              name = "string"
              type = "string"
            }
          ]
          partitionKeys = [
            {
              name = "string"
            }
          ]
        }
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views@2023-03-01-preview"
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
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
        viewDefinition = "string"
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views/throughputSettings@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views/throughputSettings@2023-03-01-preview"
  name = "default"
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
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/dataTransferJobs@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/dataTransferJobs@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      destination = {
        component = "string"
        // For remaining properties, see DataTransferDataSourceSink objects
      }
      source = {
        component = "string"
        // For remaining properties, see DataTransferDataSourceSink objects
      }
      workerCount = int
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/graphs@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/graphs@2023-03-01-preview"
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
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/gremlinDatabases@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        analyticalStorageTtl = int
        conflictResolutionPolicy = {
          conflictResolutionPath = "string"
          conflictResolutionProcedure = "string"
          mode = "string"
        }
        defaultTtl = int
        id = "string"
        indexingPolicy = {
          automatic = bool
          compositeIndexes = [
            {
              order = "string"
              path = "string"
            }
          ]
          excludedPaths = [
            {
              path = "string"
            }
          ]
          includedPaths = [
            {
              indexes = [
                {
                  dataType = "string"
                  kind = "string"
                  precision = int
                }
              ]
              path = "string"
            }
          ]
          indexingMode = "string"
          spatialIndexes = [
            {
              path = "string"
              types = [
                "string"
              ]
            }
          ]
        }
        partitionKey = {
          kind = "string"
          paths = [
            "string"
          ]
          version = int
        }
        uniqueKeyPolicy = {
          uniqueKeys = [
            {
              paths = [
                "string"
              ]
            }
          ]
        }
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        analyticalStorageTtl = int
        id = "string"
        indexes = [
          {
            key = {
              keys = [
                "string"
              ]
            }
            options = {
              expireAfterSeconds = int
              unique = bool
            }
          }
        ]
        shardKey = {}
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      databaseName = "string"
      privileges = [
        {
          actions = [
            "string"
          ]
          resource = {
            collection = "string"
            db = "string"
          }
        }
      ]
      roleName = "string"
      roles = [
        {
          db = "string"
          role = "string"
        }
      ]
      type = "string"
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customData = "string"
      databaseName = "string"
      mechanisms = "string"
      password = "string"
      roles = [
        {
          db = "string"
          role = "string"
        }
      ]
      userName = "string"
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2023-04-15"
  name = "default"
  parent_id = "string"
}

```

## Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/services@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/services@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      instanceCount = int
      instanceSize = "string"
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/clientEncryptionKeys@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/clientEncryptionKeys@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resource = {
        encryptionAlgorithm = "string"
        id = "string"
        keyWrapMetadata = {
          algorithm = "string"
          name = "string"
          type = "string"
          value = "string"
        }
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        analyticalStorageTtl = int
        clientEncryptionPolicy = {
          includedPaths = [
            {
              clientEncryptionKeyId = "string"
              encryptionAlgorithm = "string"
              encryptionType = "string"
              path = "string"
            }
          ]
          policyFormatVersion = int
        }
        conflictResolutionPolicy = {
          conflictResolutionPath = "string"
          conflictResolutionProcedure = "string"
          mode = "string"
        }
        defaultTtl = int
        id = "string"
        indexingPolicy = {
          automatic = bool
          compositeIndexes = [
            {
              order = "string"
              path = "string"
            }
          ]
          excludedPaths = [
            {
              path = "string"
            }
          ]
          includedPaths = [
            {
              indexes = [
                {
                  dataType = "string"
                  kind = "string"
                  precision = int
                }
              ]
              path = "string"
            }
          ]
          indexingMode = "string"
          spatialIndexes = [
            {
              path = "string"
              types = [
                "string"
              ]
            }
          ]
        }
        partitionKey = {
          kind = "string"
          paths = [
            "string"
          ]
          version = int
        }
        uniqueKeyPolicy = {
          uniqueKeys = [
            {
              paths = [
                "string"
              ]
            }
          ]
        }
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        body = "string"
        id = "string"
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        body = "string"
        id = "string"
        triggerOperation = "string"
        triggerType = "string"
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        body = "string"
        id = "string"
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      roleDefinitionId = "string"
      scope = "string"
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2023-04-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assignableScopes = [
        "string"
      ]
      permissions = [
        {
          dataActions = [
            "string"
          ]
          notDataActions = [
            "string"
          ]
        }
      ]
      roleName = "string"
      type = "string"
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/tables@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/tables@2023-04-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      options = {
        autoscaleSettings = {
          maxThroughput = int
        }
        throughput = int
      }
      resource = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings@2023-04-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings@2023-04-15"
  name = "default"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      resource = {
        autoscaleSettings = {
          autoUpgradePolicy = {
            throughputPolicy = {
              incrementPercent = int
              isEnabled = bool
            }
          }
          maxThroughput = int
        }
        throughput = int
      }
    }
  })
}

```

## Microsoft.DocumentDB/mongoClusters@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/mongoClusters@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      administratorLogin = "string"
      administratorLoginPassword = "string"
      createMode = "string"
      nodeGroupSpecs = [
        {
          diskSizeGB = int
          enableHa = bool
          kind = "Shard"
          nodeCount = int
          sku = "string"
        }
      ]
      restoreParameters = {
        pointInTimeUTC = "string"
        sourceResourceId = "string"
      }
      serverVersion = "string"
    }
  })
}

```

## Microsoft.DocumentDB/mongoClusters/firewallRules@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DocumentDB/mongoClusters/firewallRules@2023-03-01-preview"
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

