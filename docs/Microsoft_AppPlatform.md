## Microsoft.AppPlatform/Spring@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      infraResourceGroup = "string"
      managedEnvironmentId = "string"
      marketplaceResource = {
        plan = "string"
        product = "string"
        publisher = "string"
      }
      networkProfile = {
        appNetworkResourceGroup = "string"
        appSubnetId = "string"
        ingressConfig = {
          readTimeoutInSeconds = int
        }
        outboundType = "string"
        serviceCidr = "string"
        serviceRuntimeNetworkResourceGroup = "string"
        serviceRuntimeSubnetId = "string"
      }
      vnetAddons = {
        dataPlanePublicEndpoint = bool
        logStreamPublicEndpoint = bool
      }
      zoneRedundant = bool
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.AppPlatform/Spring/apiPortals@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apiPortals@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      gatewayIds = [
        "string"
      ]
      httpsOnly = bool
      public = bool
      sourceUrls = [
        "string"
      ]
      ssoProperties = {
        clientId = "string"
        clientSecret = "string"
        issuerUri = "string"
        scope = [
          "string"
        ]
      }
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.AppPlatform/Spring/apiPortals/domains@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apiPortals/domains@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      thumbprint = "string"
    }
  })
}

```

## Microsoft.AppPlatform/Spring/applicationAccelerators@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/applicationAccelerators@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.AppPlatform/Spring/applicationAccelerators/customizedAccelerators@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/applicationAccelerators/customizedAccelerators@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      acceleratorTags = [
        "string"
      ]
      description = "string"
      displayName = "string"
      gitRepository = {
        authSetting = {
          authType = "string"
          // For remaining properties, see AcceleratorAuthSetting objects
        }
        branch = "string"
        commit = "string"
        gitTag = "string"
        intervalInSeconds = int
        url = "string"
      }
      iconUrl = "string"
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.AppPlatform/Spring/applicationLiveViews@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/applicationLiveViews@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.AppPlatform/Spring/apps@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apps@2023-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      addonConfigs = {}
      customPersistentDisks = [
        {
          customPersistentDiskProperties = {
            enableSubPath = bool
            mountOptions = [
              "string"
            ]
            mountPath = "string"
            readOnly = bool
            type = "string"
            // For remaining properties, see CustomPersistentDiskProperties objects
          }
          storageId = "string"
        }
      ]
      enableEndToEndTLS = bool
      httpsOnly = bool
      ingressSettings = {
        backendProtocol = "string"
        clientAuth = {
          certificates = [
            "string"
          ]
        }
        readTimeoutInSeconds = int
        sendTimeoutInSeconds = int
        sessionAffinity = "string"
        sessionCookieMaxAge = int
      }
      loadedCertificates = [
        {
          loadTrustStore = bool
          resourceId = "string"
        }
      ]
      persistentDisk = {
        mountPath = "string"
        sizeInGB = int
      }
      public = bool
      secrets = [
        {
          name = "string"
          value = "string"
        }
      ]
      temporaryDisk = {
        mountPath = "string"
        sizeInGB = int
      }
      vnetAddons = {
        publicEndpoint = bool
      }
    }
  })
}

```

## Microsoft.AppPlatform/Spring/apps/bindings@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apps/bindings@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bindingParameters = {}
      key = "string"
      resourceId = "string"
    }
  })
}

```

## Microsoft.AppPlatform/Spring/apps/deployments@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apps/deployments@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      active = bool
      deploymentSettings = {
        addonConfigs = {}
        containerProbeSettings = {
          disableProbe = bool
        }
        environmentVariables = {}
        livenessProbe = {
          disableProbe = bool
          failureThreshold = int
          initialDelaySeconds = int
          periodSeconds = int
          probeAction = {
            type = "string"
            // For remaining properties, see ProbeAction objects
          }
          successThreshold = int
          timeoutSeconds = int
        }
        readinessProbe = {
          disableProbe = bool
          failureThreshold = int
          initialDelaySeconds = int
          periodSeconds = int
          probeAction = {
            type = "string"
            // For remaining properties, see ProbeAction objects
          }
          successThreshold = int
          timeoutSeconds = int
        }
        resourceRequests = {
          cpu = "string"
          memory = "string"
        }
        scale = {
          maxReplicas = int
          minReplicas = int
          rules = [
            {
              azureQueue = {
                auth = [
                  {
                    secretRef = "string"
                    triggerParameter = "string"
                  }
                ]
                queueLength = int
                queueName = "string"
              }
              custom = {
                auth = [
                  {
                    secretRef = "string"
                    triggerParameter = "string"
                  }
                ]
                metadata = {}
                type = "string"
              }
              http = {
                auth = [
                  {
                    secretRef = "string"
                    triggerParameter = "string"
                  }
                ]
                metadata = {}
              }
              name = "string"
              tcp = {
                auth = [
                  {
                    secretRef = "string"
                    triggerParameter = "string"
                  }
                ]
                metadata = {}
              }
            }
          ]
        }
        startupProbe = {
          disableProbe = bool
          failureThreshold = int
          initialDelaySeconds = int
          periodSeconds = int
          probeAction = {
            type = "string"
            // For remaining properties, see ProbeAction objects
          }
          successThreshold = int
          timeoutSeconds = int
        }
        terminationGracePeriodSeconds = int
      }
      source = {
        version = "string"
        type = "string"
        // For remaining properties, see UserSourceInfo objects
      }
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.AppPlatform/Spring/apps/domains@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/apps/domains@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certName = "string"
      thumbprint = "string"
    }
  })
}

```

## Microsoft.AppPlatform/Spring/buildServices@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      containerRegistry = "string"
      resourceRequests = {}
    }
  })
}

```

## Microsoft.AppPlatform/Spring/buildServices/agentPools@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices/agentPools@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      poolSize = {
        name = "string"
      }
    }
  })
}

```

## Microsoft.AppPlatform/Spring/buildServices/builders@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices/builders@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      buildpackGroups = [
        {
          buildpacks = [
            {
              id = "string"
            }
          ]
          name = "string"
        }
      ]
      stack = {
        id = "string"
        version = "string"
      }
    }
  })
}

```

## Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bindingType = "string"
      launchProperties = {
        properties = {
        secrets = {}
      }
    }
  })
}

```

## Microsoft.AppPlatform/Spring/buildServices/builds@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/buildServices/builds@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      agentPool = "string"
      builder = "string"
      env = {}
      relativePath = "string"
      resourceRequests = {
        cpu = "string"
        memory = "string"
      }
    }
  })
}

```

## Microsoft.AppPlatform/Spring/certificates@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/certificates@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      type = "string"
      // For remaining properties, see CertificateProperties objects
    }
  })
}

```

## Microsoft.AppPlatform/Spring/configServers@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/configServers@2023-03-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      configServer = {
        gitProperty = {
          hostKey = "string"
          hostKeyAlgorithm = "string"
          label = "string"
          password = "string"
          privateKey = "string"
          repositories = [
            {
              hostKey = "string"
              hostKeyAlgorithm = "string"
              label = "string"
              name = "string"
              password = "string"
              pattern = [
                "string"
              ]
              privateKey = "string"
              searchPaths = [
                "string"
              ]
              strictHostKeyChecking = bool
              uri = "string"
              username = "string"
            }
          ]
          searchPaths = [
            "string"
          ]
          strictHostKeyChecking = bool
          uri = "string"
          username = "string"
        }
      }
      error = {
        code = "string"
        message = "string"
      }
    }
  })
}

```

## Microsoft.AppPlatform/Spring/configurationServices@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/configurationServices@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      settings = {
        gitProperty = {
          repositories = [
            {
              hostKey = "string"
              hostKeyAlgorithm = "string"
              label = "string"
              name = "string"
              password = "string"
              patterns = [
                "string"
              ]
              privateKey = "string"
              searchPaths = [
                "string"
              ]
              strictHostKeyChecking = bool
              uri = "string"
              username = "string"
            }
          ]
        }
      }
    }
  })
}

```

## Microsoft.AppPlatform/Spring/containerRegistries@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/containerRegistries@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credentials = {
        type = "string"
        // For remaining properties, see ContainerRegistryCredentials objects
      }
    }
  })
}

```

## Microsoft.AppPlatform/Spring/DevToolPortals@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/DevToolPortals@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      features = {
        applicationAccelerator = {
          state = "string"
        }
        applicationLiveView = {
          state = "string"
        }
      }
      public = bool
      ssoProperties = {
        clientId = "string"
        clientSecret = "string"
        metadataUrl = "string"
        scopes = [
          "string"
        ]
      }
    }
  })
}

```

## Microsoft.AppPlatform/Spring/gateways@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/gateways@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiMetadataProperties = {
        description = "string"
        documentation = "string"
        serverUrl = "string"
        title = "string"
        version = "string"
      }
      apmTypes = [
        "string"
      ]
      clientAuth = {
        certificates = [
          "string"
        ]
        certificateVerification = "string"
      }
      corsProperties = {
        allowCredentials = bool
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
        maxAge = int
      }
      environmentVariables = {
        properties = {}
        secrets = {}
      }
      httpsOnly = bool
      public = bool
      resourceRequests = {
        cpu = "string"
        memory = "string"
      }
      ssoProperties = {
        clientId = "string"
        clientSecret = "string"
        issuerUri = "string"
        scope = [
          "string"
        ]
      }
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.AppPlatform/Spring/gateways/domains@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/gateways/domains@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      thumbprint = "string"
    }
  })
}

```

## Microsoft.AppPlatform/Spring/gateways/routeConfigs@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/gateways/routeConfigs@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appResourceId = "string"
      filters = [
        "string"
      ]
      openApi = {
        uri = "string"
      }
      predicates = [
        "string"
      ]
      protocol = "string"
      routes = [
        {
          description = "string"
          filters = [
            "string"
          ]
          order = int
          predicates = [
            "string"
          ]
          ssoEnabled = bool
          tags = [
            "string"
          ]
          title = "string"
          tokenRelay = bool
          uri = "string"
        }
      ]
      ssoEnabled = bool
    }
  })
}

```

## Microsoft.AppPlatform/Spring/monitoringSettings@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/monitoringSettings@2023-03-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appInsightsAgentVersions = {}
      appInsightsInstrumentationKey = "string"
      appInsightsSamplingRate = int
      error = {
        code = "string"
        message = "string"
      }
      traceEnabled = bool
    }
  })
}

```

## Microsoft.AppPlatform/Spring/serviceRegistries@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/serviceRegistries@2023-03-01-preview"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.AppPlatform/Spring/storages@2023-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppPlatform/Spring/storages@2023-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      storageType = "string"
      // For remaining properties, see StorageProperties objects
    }
  })
}

```

