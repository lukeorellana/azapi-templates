## Microsoft.ContainerRegistry/registries@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries@2023-01-01-preview"
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
      adminUserEnabled = bool
      anonymousPullEnabled = bool
      dataEndpointEnabled = bool
      encryption = {
        keyVaultProperties = {
          identity = "string"
          keyIdentifier = "string"
        }
        status = "string"
      }
      networkRuleBypassOptions = "string"
      networkRuleSet = {
        defaultAction = "string"
        ipRules = [
          {
            action = "Allow"
            value = "string"
          }
        ]
      }
      policies = {
        azureADAuthenticationAsArmPolicy = {
          status = "string"
        }
        exportPolicy = {
          status = "string"
        }
        quarantinePolicy = {
          status = "string"
        }
        retentionPolicy = {
          days = int
          status = "string"
        }
        softDeletePolicy = {
          retentionDays = int
          status = "string"
        }
        trustPolicy = {
          status = "string"
          type = "Notary"
        }
      }
      publicNetworkAccess = "string"
      zoneRedundancy = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/agentPools@2019-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/agentPools@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      count = int
      os = "string"
      tier = "string"
      virtualNetworkSubnetResourceId = "string"
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/buildTasks@2018-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/buildTasks@2018-02-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      alias = "string"
      platform = {
        cpu = int
        osType = "string"
      }
      sourceRepository = {
        isCommitTriggerEnabled = bool
        repositoryUrl = "string"
        sourceControlAuthProperties = {
          expiresIn = int
          refreshToken = "string"
          scope = "string"
          token = "string"
          tokenType = "string"
        }
        sourceControlType = "string"
        isCommitTriggerEnabled = bool
        repositoryUrl = "string"
        sourceControlAuthProperties = {
          expiresIn = int
          refreshToken = "string"
          scope = "string"
          token = "string"
          tokenType = "string"
        }
        sourceControlType = "string"
      }
      status = "string"
      timeout = int
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/buildTasks/steps@2018-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/buildTasks/steps@2018-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      type = "string"
      // For remaining properties, see BuildStepProperties objects
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/cacheRules@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/cacheRules@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentialSetResourceId = "string"
      sourceRepository = "string"
      targetRepository = "string"
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/connectedRegistries@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/connectedRegistries@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientTokenIds = [
        "string"
      ]
      logging = {
        auditLogStatus = "string"
        logLevel = "string"
      }
      loginServer = {}
      mode = "string"
      notificationsList = [
        "string"
      ]
      parent = {
        id = "string"
        syncProperties = {
          messageTtl = "string"
          schedule = "string"
          syncWindow = "string"
          tokenId = "string"
        }
      }
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/credentialSets@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/credentialSets@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      authCredentials = [
        {
          name = "Credential1"
          passwordSecretIdentifier = "string"
          usernameSecretIdentifier = "string"
        }
      ]
      loginServer = "string"
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/exportPipelines@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/exportPipelines@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      options = [
        "string"
      ]
      target = {
        keyVaultUri = "string"
        type = "string"
        uri = "string"
      }
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/importPipelines@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/importPipelines@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      options = [
        "string"
      ]
      source = {
        keyVaultUri = "string"
        type = "AzureStorageBlobContainer"
        uri = "string"
      }
      trigger = {
        sourceTrigger = {
          status = "string"
        }
      }
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/pipelineRuns@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/pipelineRuns@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      forceUpdateTag = "string"
      request = {
        artifacts = [
          "string"
        ]
        catalogDigest = "string"
        pipelineResourceId = "string"
        source = {
          name = "string"
          type = "AzureStorageBlob"
        }
        target = {
          name = "string"
          type = "AzureStorageBlob"
        }
      }
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/privateEndpointConnections@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/privateEndpointConnections@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/replications@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/replications@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      regionEndpointEnabled = bool
      zoneRedundancy = "string"
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/scopeMaps@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/scopeMaps@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actions = [
        "string"
      ]
      description = "string"
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/taskRuns@2019-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/taskRuns@2019-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      forceUpdateTag = "string"
      runRequest = {
        agentPoolName = "string"
        isArchiveEnabled = bool
        logTemplate = "string"
        type = "string"
        // For remaining properties, see RunRequest objects
      }
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/tasks@2019-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/tasks@2019-06-01-preview"
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
      agentConfiguration = {
        cpu = int
      }
      agentPoolName = "string"
      credentials = {
        customRegistries = {}
        sourceRegistry = {
          loginMode = "string"
        }
      }
      isSystemTask = bool
      logTemplate = "string"
      platform = {
        architecture = "string"
        os = "string"
        variant = "string"
      }
      status = "string"
      step = {
        contextAccessToken = "string"
        contextPath = "string"
        type = "string"
        // For remaining properties, see TaskStepProperties objects
      }
      timeout = int
      trigger = {
        baseImageTrigger = {
          baseImageTriggerType = "string"
          name = "string"
          status = "string"
          updateTriggerEndpoint = "string"
          updateTriggerPayloadType = "string"
        }
        sourceTriggers = [
          {
            name = "string"
            sourceRepository = {
              branch = "string"
              repositoryUrl = "string"
              sourceControlAuthProperties = {
                expiresIn = int
                refreshToken = "string"
                scope = "string"
                token = "string"
                tokenType = "string"
              }
              sourceControlType = "string"
            }
            sourceTriggerEvents = [
              "string"
            ]
            status = "string"
          }
        ]
        timerTriggers = [
          {
            name = "string"
            schedule = "string"
            status = "string"
          }
        ]
      }
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/tokens@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/tokens@2023-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        certificates = [
          {
            encodedPemCertificate = "string"
            expiry = "string"
            name = "string"
            thumbprint = "string"
          }
        ]
        passwords = [
          {
            creationTime = "string"
            expiry = "string"
            name = "string"
          }
        ]
      }
      scopeMapId = "string"
      status = "string"
    }
  })
}

```

## Microsoft.ContainerRegistry/registries/webhooks@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ContainerRegistry/registries/webhooks@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      actions = [
        "string"
      ]
      customHeaders = {}
      scope = "string"
      serviceUri = "string"
      status = "string"
    }
  })
}

```

