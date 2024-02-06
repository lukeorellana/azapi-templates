## Microsoft.MachineLearningServices/capacityReserverationGroups@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/capacityReserverationGroups@2023-08-01-preview"
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
      offer = {
        offerName = "string"
        publisher = "string"
      }
      reservedCapacity = int
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.MachineLearningServices/registries@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries@2023-10-01"
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
      discoveryUrl = "string"
      intellectualPropertyPublisher = "string"
      managedResourceGroup = {
        resourceId = "string"
      }
      mlFlowRegistryUri = "string"
      publicNetworkAccess = "string"
      regionDetails = [
        {
          acrDetails = [
            {
              systemCreatedAcrAccount = {
                acrAccountName = "string"
                acrAccountSku = "string"
                armResourceId = {
                  resourceId = "string"
                }
              }
              userCreatedAcrAccount = {
                armResourceId = {
                  resourceId = "string"
                }
              }
            }
          ]
          location = "string"
          storageAccountDetails = [
            {
              systemCreatedStorageAccount = {
                allowBlobPublicAccess = bool
                armResourceId = {
                  resourceId = "string"
                }
                storageAccountHnsEnabled = bool
                storageAccountName = "string"
                storageAccountType = "string"
              }
              userCreatedStorageAccount = {
                armResourceId = {
                  resourceId = "string"
                }
              }
            }
          ]
        }
      ]
      registryPrivateEndpointConnections = [
        {
          id = "string"
          location = "string"
          properties = {
            groupIds = [
              "string"
            ]
            privateEndpoint = {
              subnetArmId = "string"
            }
            provisioningState = "string"
            registryPrivateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
          }
        }
      ]
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.MachineLearningServices/registries/codes@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/codes@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/registries/codes/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/codes/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      codeUri = "string"
      description = "string"
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/registries/components@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/components@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/registries/components/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/components/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/registries/data@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/data@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataType = "string"
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/registries/data/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/data/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataUri = "string"
      description = "string"
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      dataType = "string"
      // For remaining properties, see DataVersionBaseProperties objects
    }
  })
}

```

## Microsoft.MachineLearningServices/registries/environments@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/environments@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/registries/environments/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/environments/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoRebuild = "string"
      build = {
        contextUri = "string"
        dockerfilePath = "string"
      }
      condaFile = "string"
      description = "string"
      image = "string"
      inferenceConfig = {
        livenessRoute = {
          path = "string"
          port = int
        }
        readinessRoute = {
          path = "string"
          port = int
        }
        scoringRoute = {
          path = "string"
          port = int
        }
      }
      isAnonymous = bool
      isArchived = bool
      osType = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/registries/models@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/models@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/registries/models/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/registries/models/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      flavors = {
        {customized property} = {
          data = {
          {customized property} = "string"
        }
      }
      isAnonymous = bool
      isArchived = bool
      jobName = "string"
      modelType = "string"
      modelUri = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces@2023-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      allowPublicAccessWhenBehindVnet = bool
      applicationInsights = "string"
      containerRegistry = "string"
      description = "string"
      discoveryUrl = "string"
      encryption = {
        identity = {
          userAssignedIdentity = "string"
        }
        keyVaultProperties = {
          identityClientId = "string"
          keyIdentifier = "string"
          keyVaultArmId = "string"
        }
        status = "string"
      }
      featureStoreSettings = {
        computeRuntime = {
          sparkRuntimeVersion = "string"
        }
        offlineStoreConnectionName = "string"
        onlineStoreConnectionName = "string"
      }
      friendlyName = "string"
      hbiWorkspace = bool
      imageBuildCompute = "string"
      keyVault = "string"
      managedNetwork = {
        isolationMode = "string"
        outboundRules = {
          {customized property} = {
            category = "string"
            status = "string"
            type = "string"
            // For remaining properties, see OutboundRule objects
          }
        }
        status = {
          sparkReady = bool
          status = "string"
        }
      }
      primaryUserAssignedIdentity = "string"
      publicNetworkAccess = "string"
      serverlessComputeSettings = {
        serverlessComputeCustomSubnet = "string"
        serverlessComputeNoPublicIP = bool
      }
      serviceManagedResourcesSettings = {
        cosmosDb = {
          collectionsThroughput = int
        }
      }
      sharedPrivateLinkResources = [
        {
          name = "string"
          properties = {
            groupId = "string"
            privateLinkResourceId = "string"
            requestMessage = "string"
            status = "string"
          }
        }
      ]
      storageAccount = "string"
      v1LegacyMode = bool
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.MachineLearningServices/workspaces/batchEndpoints@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/batchEndpoints@2023-10-01"
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
      authMode = "string"
      defaults = {
        deploymentName = "string"
      }
      description = "string"
      keys = {
        primaryKey = "string"
        secondaryKey = "string"
        primaryKey = "string"
        secondaryKey = "string"
        primaryKey = "string"
        secondaryKey = "string"
      }
      properties = {
        {customized property} = "string"
        {customized property} = "string"
      }
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/batchEndpoints/deployments@2023-10-01"
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
      codeConfiguration = {
        codeId = "string"
        scoringScript = "string"
      }
      compute = "string"
      description = "string"
      environmentId = "string"
      environmentVariables = {
        {customized property} = "string"
        {customized property} = "string"
      }
      errorThreshold = int
      loggingLevel = "string"
      maxConcurrencyPerInstance = int
      miniBatchSize = int
      model = {
        referenceType = "string"
        // For remaining properties, see AssetReferenceBase objects
      }
      outputAction = "string"
      outputFileName = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
      }
      resources = {
        instanceCount = int
        instanceType = "string"
        properties = {}
      }
      retrySettings = {
        maxRetries = int
        timeout = "string"
      }
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.MachineLearningServices/workspaces/codes@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/codes@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/codes/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/codes/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      codeUri = "string"
      description = "string"
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/components@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/components@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/components/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/components/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/computes@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/computes@2023-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      computeLocation = "string"
      description = "string"
      disableLocalAuth = bool
      resourceId = "string"
      computeType = "string"
      // For remaining properties, see Compute objects
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

## Microsoft.MachineLearningServices/workspaces/connections@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/connections@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      category = "string"
      target = "string"
      value = "string"
      valueFormat = "JSON"
      authType = "string"
      // For remaining properties, see WorkspaceConnectionPropertiesV2 objects
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/data@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/data@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataType = "string"
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/data/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/data/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataUri = "string"
      description = "string"
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      dataType = "string"
      // For remaining properties, see DataVersionBaseProperties objects
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/datasets@2020-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/datasets@2020-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    datasetType = "string"
    parameters = {
      header = "string"
      includePath = bool
      partitionFormat = "string"
      path = {
        dataPath = {
          datastoreName = "string"
          relativePath = "string"
        }
        httpUrl = "string"
      }
      query = {
        datastoreName = "string"
        query = "string"
      }
      separator = "string"
      sourceType = "string"
    }
    registration = {
      description = "string"
      name = "string"
      tags = {
        {customized property} = "string"
      }
    }
    skipValidation = bool
    timeSeries = {
      coarseGrainTimestamp = "string"
      fineGrainTimestamp = "string"
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/datastores@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/datastores@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        credentialsType = "string"
        // For remaining properties, see DatastoreCredentials objects
      }
      description = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      datastoreType = "string"
      // For remaining properties, see DatastoreProperties objects
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/environments@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/environments@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/environments/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/environments/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoRebuild = "string"
      build = {
        contextUri = "string"
        dockerfilePath = "string"
      }
      condaFile = "string"
      description = "string"
      image = "string"
      inferenceConfig = {
        livenessRoute = {
          path = "string"
          port = int
        }
        readinessRoute = {
          path = "string"
          port = int
        }
        scoringRoute = {
          path = "string"
          port = int
        }
      }
      isAnonymous = bool
      isArchived = bool
      osType = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/featuresets@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/featuresets@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/featuresets/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/featuresets/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      entities = [
        "string"
      ]
      isAnonymous = bool
      isArchived = bool
      materializationSettings = {
        notification = {
          emailOn = [
            "string"
          ]
          emails = [
            "string"
          ]
          webhooks = {
            {customized property} = {
              eventType = "string"
              webhookType = "string"
              // For remaining properties, see Webhook objects
            }
          }
        }
        resource = {
          instanceType = "string"
        }
        schedule = {
          endTime = "string"
          frequency = "string"
          interval = int
          schedule = {
            hours = [
              int
            ]
            minutes = [
              int
            ]
            monthDays = [
              int
            ]
            weekDays = [
              "string"
            ]
          }
          startTime = "string"
          timeZone = "string"
          triggerType = "string"
        }
        sparkConfiguration = {
          {customized property} = "string"
        }
        storeType = "string"
      }
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      specification = {
        path = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/featurestoreEntities@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/featurestoreEntities@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/featurestoreEntities/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/featurestoreEntities/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      indexColumns = [
        {
          columnName = "string"
          dataType = "string"
        }
      ]
      isAnonymous = bool
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/inferencePools@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/inferencePools@2023-08-01-preview"
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
      codeConfiguration = {
        codeId = "string"
        scoringScript = "string"
      }
      description = "string"
      environmentConfiguration = {
        environmentId = "string"
        environmentVariables = {
          {customized property} = "string"
        }
        livenessProbe = {
          failureThreshold = int
          initialDelay = "string"
          period = "string"
          successThreshold = int
          timeout = "string"
        }
        readinessProbe = {
          failureThreshold = int
          initialDelay = "string"
          period = "string"
          successThreshold = int
          timeout = "string"
        }
        startupProbe = {
          failureThreshold = int
          initialDelay = "string"
          period = "string"
          successThreshold = int
          timeout = "string"
        }
      }
      modelConfiguration = {
        modelId = "string"
      }
      nodeSkuType = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      requestConfiguration = {
        maxConcurrentRequestsPerInstance = int
        requestTimeout = "string"
      }
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.MachineLearningServices/workspaces/inferencePools/endpoints@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/inferencePools/endpoints@2023-08-01-preview"
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
      authMode = "AAD"
      description = "string"
      groupId = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.MachineLearningServices/workspaces/inferencePools/groups@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/inferencePools/groups@2023-08-01-preview"
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
      bonusExtraCapacity = int
      description = "string"
      metadata = "string"
      priority = int
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.MachineLearningServices/workspaces/jobs@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/jobs@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      componentId = "string"
      computeId = "string"
      description = "string"
      displayName = "string"
      experimentName = "string"
      identity = {
        identityType = "string"
        // For remaining properties, see IdentityConfiguration objects
      }
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      services = {
        {customized property} = {
          endpoint = "string"
          jobServiceType = "string"
          nodes = {
            nodesValueType = "string"
            // For remaining properties, see Nodes objects
          }
          port = int
          properties = {
            {customized property} = "string"
          }
        }
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      jobType = "string"
      // For remaining properties, see JobBaseProperties objects
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/labelingJobs@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/labelingJobs@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      componentId = "string"
      computeId = "string"
      dataConfiguration = {
        dataId = "string"
        incrementalDataRefresh = "string"
      }
      description = "string"
      displayName = "string"
      experimentName = "string"
      identity = {
        identityType = "string"
        // For remaining properties, see IdentityConfiguration objects
      }
      isArchived = bool
      jobInstructions = {
        uri = "string"
      }
      jobType = "string"
      labelCategories = {
        {customized property} = {
          classes = {
            {customized property} = {
              displayName = "string"
              subclasses = {
                {customized property} = {}
            }
          }
          displayName = "string"
          multiSelect = "string"
        }
        {customized property} = {
          classes = {
            {customized property} = {
              displayName = "string"
              subclasses = {
                {customized property} = {}
            }
          }
          displayName = "string"
          multiSelect = "string"
        }
      }
      labelingJobMediaProperties = {
        mediaType = "string"
        // For remaining properties, see LabelingJobMediaProperties objects
      }
      mlAssistConfiguration = {
        mlAssist = "string"
        // For remaining properties, see MLAssistConfiguration objects
      }
      notificationSetting = {
        emailOn = [
          "string"
        ]
        emails = [
          "string"
        ]
        webhooks = {
          {customized property} = {
            eventType = "string"
            webhookType = "string"
            // For remaining properties, see Webhook objects
          }
        }
      }
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      secretsConfiguration = {
        {customized property} = {
          uri = "string"
          workspaceSecretName = "string"
        }
        {customized property} = {
          uri = "string"
          workspaceSecretName = "string"
        }
      }
      services = {
        {customized property} = {
          endpoint = "string"
          jobServiceType = "string"
          nodes = {
            nodesValueType = "string"
            // For remaining properties, see Nodes objects
          }
          port = int
          properties = {
            {customized property} = "string"
          }
        }
        {customized property} = {
          endpoint = "string"
          jobServiceType = "string"
          nodes = {
            nodesValueType = "string"
            // For remaining properties, see Nodes objects
          }
          port = int
          properties = {
            {customized property} = "string"
          }
        }
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/linkedServices@2020-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/linkedServices@2020-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      createdTime = "string"
      linkedServiceResourceId = "string"
      linkType = "Synapse"
      modifiedTime = "string"
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/linkedWorkspaces@2020-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/linkedWorkspaces@2020-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedWorkspaceResourceId = "string"
      userAssignedIdentityResourceId = "string"
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/models@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/models@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/models/versions@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/models/versions@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      flavors = {
        {customized property} = {
          data = {
          {customized property} = "string"
        }
      }
      isAnonymous = bool
      isArchived = bool
      jobName = "string"
      modelType = "string"
      modelUri = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      stage = "string"
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/onlineEndpoints@2023-10-01"
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
      authMode = "string"
      compute = "string"
      description = "string"
      keys = {
        primaryKey = "string"
        secondaryKey = "string"
        primaryKey = "string"
        secondaryKey = "string"
        primaryKey = "string"
        secondaryKey = "string"
      }
      mirrorTraffic = {
        {customized property} = int
      }
      properties = {
        {customized property} = "string"
        {customized property} = "string"
      }
      publicNetworkAccess = "string"
      traffic = {
        {customized property} = int
      }
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/onlineEndpoints/deployments@2023-10-01"
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
      appInsightsEnabled = bool
      codeConfiguration = {
        codeId = "string"
        scoringScript = "string"
      }
      description = "string"
      egressPublicNetworkAccess = "string"
      environmentId = "string"
      environmentVariables = {
        {customized property} = "string"
        {customized property} = "string"
      }
      instanceType = "string"
      livenessProbe = {
        failureThreshold = int
        initialDelay = "string"
        period = "string"
        successThreshold = int
        timeout = "string"
      }
      model = "string"
      modelMountPath = "string"
      properties = {
        {customized property} = "string"
        {customized property} = "string"
      }
      readinessProbe = {
        failureThreshold = int
        initialDelay = "string"
        period = "string"
        successThreshold = int
        timeout = "string"
      }
      requestSettings = {
        maxConcurrentRequestsPerInstance = int
        maxQueueWait = "string"
        requestTimeout = "string"
      }
      scaleSettings = {
        scaleType = "string"
        // For remaining properties, see OnlineScaleSettings objects
      }
      endpointComputeType = "string"
      // For remaining properties, see OnlineDeploymentProperties objects
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.MachineLearningServices/workspaces/outboundRules@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/outboundRules@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      category = "string"
      status = "string"
      type = "string"
      // For remaining properties, see OutboundRule objects
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2023-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
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

## Microsoft.MachineLearningServices/workspaces/schedules@2023-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/schedules@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      action = {
        actionType = "string"
        // For remaining properties, see ScheduleActionBase objects
      }
      description = "string"
      displayName = "string"
      isEnabled = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      trigger = {
        endTime = "string"
        startTime = "string"
        timeZone = "string"
        triggerType = "string"
        // For remaining properties, see TriggerBase objects
      }
    }
  })
}

```

## Microsoft.MachineLearningServices/workspaces/serverlessEndpoints@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/serverlessEndpoints@2023-08-01-preview"
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
      authMode = "string"
      capacityReservation = {
        capacityReservationGroupId = "string"
        endpointReservedCapacity = int
      }
      offer = {
        offerName = "string"
        publisher = "string"
      }
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.MachineLearningServices/workspaces/services@2021-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/services@2021-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      {customized property} = "string"
    }
    computeType = "string"
    // For remaining properties, see workspaces/services objects
    description = "string"
    environmentImageRequest = {
      assets = [
        {
          id = "string"
          mimeType = "string"
          unpack = bool
          url = "string"
        }
      ]
      driverProgram = "string"
      environment = {
        docker = {
          baseDockerfile = "string"
          baseImage = "string"
          baseImageRegistry = {
            address = "string"
            password = "string"
            username = "string"
          }
        }
        environmentVariables = {
          {customized property} = "string"
        }
        inferencingStackVersion = "string"
        name = "string"
        python = {
          baseCondaEnvironment = "string"
          interpreterPath = "string"
          userManagedDependencies = bool
        }
        r = {
          bioConductorPackages = [
            "string"
          ]
          cranPackages = [
            {
              name = "string"
              repository = "string"
            }
          ]
          customUrlPackages = [
            "string"
          ]
          gitHubPackages = [
            {
              authToken = "string"
              repository = "string"
            }
          ]
          rscriptPath = "string"
          rVersion = "string"
          snapshotDate = "string"
          userManaged = bool
        }
        spark = {
          packages = [
            {
              artifact = "string"
              group = "string"
              version = "string"
            }
          ]
          precachePackages = bool
          repositories = [
            "string"
          ]
        }
        version = "string"
      }
      environmentReference = {
        name = "string"
        version = "string"
      }
      modelIds = [
        "string"
      ]
      models = [
        {
          createdTime = "string"
          datasets = [
            {
              id = "string"
              name = "string"
            }
          ]
          derivedModelIds = [
            "string"
          ]
          description = "string"
          experimentName = "string"
          framework = "string"
          frameworkVersion = "string"
          id = "string"
          kvTags = {
            {customized property} = "string"
          }
          mimeType = "string"
          modifiedTime = "string"
          name = "string"
          parentModelId = "string"
          properties = {
            {customized property} = "string"
          }
          resourceRequirements = {
            cpu = int
            cpuLimit = int
            fpga = int
            gpu = int
            memoryInGB = int
            memoryInGBLimit = int
          }
          runId = "string"
          sampleInputData = "string"
          sampleOutputData = "string"
          unpack = bool
          url = "string"
          version = int
        }
      ]
    }
    keys = {
      primaryKey = "string"
      secondaryKey = "string"
    }
    kvTags = {
      {customized property} = "string"
    }
  })
}

```

