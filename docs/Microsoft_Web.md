## Microsoft.Web/certificates@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/certificates@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      canonicalName = "string"
      domainValidationMethod = "string"
      hostNames = [
        "string"
      ]
      keyVaultId = "string"
      keyVaultSecretName = "string"
      password = "string"
      serverFarmId = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/connectionGateways@2016-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/connectionGateways@2016-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backendUri = "string"
      connectionGatewayInstallation = {
        id = "string"
        location = "string"
        name = "string"
        type = "string"
      }
      contactInformation = [
        "string"
      ]
      description = "string"
      displayName = "string"
      machineName = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.Web/connections@2016-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/connections@2016-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      api = {
        brandColor = "string"
        description = "string"
        displayName = "string"
        iconUri = "string"
        id = "string"
        name = "string"
        type = "string"
      }
      changedTime = "string"
      createdTime = "string"
      customParameterValues = {}
      displayName = "string"
      nonSecretParameterValues = {}
      parameterValues = {}
      statuses = [
        {
          error = {
            etag = "string"
            location = "string"
            properties = {
              code = "string"
              message = "string"
            }
            tags = {}
          }
          status = "string"
          target = "string"
        }
      ]
      testLinks = [
        {
          method = "string"
          requestUri = "string"
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Web/containerApps@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/containerApps@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      configuration = {
        activeRevisionsMode = "string"
        ingress = {
          allowInsecure = bool
          external = bool
          targetPort = int
          traffic = [
            {
              latestRevision = bool
              revisionName = "string"
              weight = int
            }
          ]
          transport = "string"
        }
        registries = [
          {
            passwordSecretRef = "string"
            server = "string"
            username = "string"
          }
        ]
        secrets = [
          {
            name = "string"
            value = "string"
          }
        ]
      }
      kubeEnvironmentId = "string"
      template = {
        containers = [
          {
            args = [
              "string"
            ]
            command = [
              "string"
            ]
            env = [
              {
                name = "string"
                secretRef = "string"
                value = "string"
              }
            ]
            image = "string"
            name = "string"
            resources = {
              cpu = int
              memory = "string"
            }
          }
        ]
        dapr = {
          appId = "string"
          appPort = int
          components = [
            {
              metadata = [
                {
                  name = "string"
                  secretRef = "string"
                  value = "string"
                }
              ]
              name = "string"
              type = "string"
              version = "string"
            }
          ]
          enabled = bool
        }
        revisionSuffix = "string"
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
            }
          ]
        }
      }
    }
    kind = "string"
  })
}

```

## Microsoft.Web/customApis@2016-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/customApis@2016-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      apiDefinitions = {
        modifiedSwaggerUrl = "string"
        originalSwaggerUrl = "string"
      }
      apiType = "string"
      backendService = {
        serviceUrl = "string"
      }
      brandColor = "string"
      capabilities = [
        "string"
      ]
      connectionParameters = {}
      description = "string"
      displayName = "string"
      iconUri = "string"
      runtimeUrls = [
        "string"
      ]
      wsdlDefinition = {
        content = "string"
        importMethod = "string"
        service = {
          endpointQualifiedNames = [
            "string"
          ]
          qualifiedName = "string"
        }
        url = "string"
        content = "string"
        importMethod = "string"
        service = {
          endpointQualifiedNames = [
            "string"
          ]
          qualifiedName = "string"
        }
        url = "string"
      }
    }
    etag = "string"
  })
}

```

## Microsoft.Web/hostingEnvironments@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      clusterSettings = [
        {
          name = "string"
          value = "string"
        }
      ]
      customDnsSuffixConfiguration = {
        kind = "string"
        properties = {
          certificateUrl = "string"
          dnsSuffix = "string"
          keyVaultReferenceIdentity = "string"
        }
      }
      dedicatedHostCount = int
      dnsSuffix = "string"
      frontEndScaleFactor = int
      internalLoadBalancingMode = "string"
      ipsslAddressCount = int
      multiSize = "string"
      networkingConfiguration = {
        kind = "string"
        properties = {
          allowNewPrivateEndpointConnections = bool
          ftpEnabled = bool
          inboundIpAddressOverride = "string"
          remoteDebugEnabled = bool
        }
      }
      upgradePreference = "string"
      userWhitelistedIpRanges = [
        "string"
      ]
      virtualNetwork = {
        id = "string"
        subnet = "string"
      }
      zoneRedundant = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/hostingEnvironments/configurations@2021-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/configurations@2021-03-01"
  name = "networking"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowNewPrivateEndpointConnections = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/hostingEnvironments/configurations@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/configurations@2022-09-01"
  name = "customdnssuffix"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certificateUrl = "string"
      dnsSuffix = "string"
      keyVaultReferenceIdentity = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/hostingEnvironments/configurations@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/configurations@2022-09-01"
  name = "networking"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowNewPrivateEndpointConnections = bool
      ftpEnabled = bool
      inboundIpAddressOverride = "string"
      remoteDebugEnabled = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/hostingEnvironments/multiRolePools@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/multiRolePools@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      computeMode = "string"
      workerCount = int
      workerSize = "string"
      workerSizeId = int
    }
    sku = {
      capabilities = [
        {
          name = "string"
          reason = "string"
          value = "string"
        }
      ]
      capacity = int
      family = "string"
      locations = [
        "string"
      ]
      name = "string"
      size = "string"
      skuCapacity = {
        default = int
        elasticMaximum = int
        maximum = int
        minimum = int
        scaleType = "string"
      }
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/hostingEnvironments/privateEndpointConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/privateEndpointConnections@2022-09-01"
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
    kind = "string"
  })
}

```

## Microsoft.Web/hostingEnvironments/workerPools@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/hostingEnvironments/workerPools@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      computeMode = "string"
      workerCount = int
      workerSize = "string"
      workerSizeId = int
    }
    sku = {
      capabilities = [
        {
          name = "string"
          reason = "string"
          value = "string"
        }
      ]
      capacity = int
      family = "string"
      locations = [
        "string"
      ]
      name = "string"
      size = "string"
      skuCapacity = {
        default = int
        elasticMaximum = int
        maximum = int
        minimum = int
        scaleType = "string"
      }
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/kubeEnvironments@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/kubeEnvironments@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      aksResourceID = "string"
      appLogsConfiguration = {
        destination = "string"
        logAnalyticsConfiguration = {
          customerId = "string"
          sharedKey = "string"
        }
      }
      arcConfiguration = {
        artifactsStorageType = "string"
        artifactStorageAccessMode = "string"
        artifactStorageClassName = "string"
        artifactStorageMountPath = "string"
        artifactStorageNodeName = "string"
        frontEndServiceConfiguration = {
          kind = "string"
        }
        kubeConfig = "string"
      }
      containerAppsConfiguration = {
        appSubnetResourceId = "string"
        controlPlaneSubnetResourceId = "string"
        daprAIInstrumentationKey = "string"
        dockerBridgeCidr = "string"
        platformReservedCidr = "string"
        platformReservedDnsIP = "string"
      }
      environmentType = "string"
      internalLoadBalancerEnabled = bool
      staticIp = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
    }
  })
}

```

## Microsoft.Web/publishingUsers@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/publishingUsers@2022-09-01"
  name = "web"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publishingPassword = "string"
      publishingPasswordHash = "string"
      publishingPasswordHashSalt = "string"
      publishingUserName = "string"
      scmUri = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/serverfarms@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/serverfarms@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      elasticScaleEnabled = bool
      freeOfferExpirationTime = "string"
      hostingEnvironmentProfile = {
        id = "string"
      }
      hyperV = bool
      isSpot = bool
      isXenon = bool
      kubeEnvironmentProfile = {
        id = "string"
      }
      maximumElasticWorkerCount = int
      perSiteScaling = bool
      reserved = bool
      spotExpirationTime = "string"
      targetWorkerCount = int
      targetWorkerSizeId = int
      workerTierName = "string"
      zoneRedundant = bool
    }
    sku = {
      capabilities = [
        {
          name = "string"
          reason = "string"
          value = "string"
        }
      ]
      capacity = int
      family = "string"
      locations = [
        "string"
      ]
      name = "string"
      size = "string"
      skuCapacity = {
        default = int
        elasticMaximum = int
        maximum = int
        minimum = int
        scaleType = "string"
      }
      tier = "string"
    }
    kind = "string"
    extendedLocation = {
      name = "string"
    }
  })
}

```

## Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      vnetName = "string"
      vpnPackageUri = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/serverfarms/virtualNetworkConnections/routes@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      endAddress = "string"
      routeType = "string"
      startAddress = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites@2022-09-01"
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
      clientAffinityEnabled = bool
      clientCertEnabled = bool
      clientCertExclusionPaths = "string"
      clientCertMode = "string"
      cloningInfo = {
        appSettingsOverrides = {}
        cloneCustomHostNames = bool
        cloneSourceControl = bool
        configureLoadBalancing = bool
        correlationId = "string"
        hostingEnvironment = "string"
        overwrite = bool
        sourceWebAppId = "string"
        sourceWebAppLocation = "string"
        trafficManagerProfileId = "string"
        trafficManagerProfileName = "string"
      }
      containerSize = int
      customDomainVerificationId = "string"
      dailyMemoryTimeQuota = int
      enabled = bool
      hostingEnvironmentProfile = {
        id = "string"
      }
      hostNamesDisabled = bool
      hostNameSslStates = [
        {
          hostType = "string"
          name = "string"
          sslState = "string"
          thumbprint = "string"
          toUpdate = bool
          virtualIP = "string"
        }
      ]
      httpsOnly = bool
      hyperV = bool
      isXenon = bool
      keyVaultReferenceIdentity = "string"
      managedEnvironmentId = "string"
      publicNetworkAccess = "string"
      redundancyMode = "string"
      reserved = bool
      scmSiteAlsoStopped = bool
      serverFarmId = "string"
      siteConfig = {
        acrUseManagedIdentityCreds = bool
        acrUserManagedIdentityID = "string"
        alwaysOn = bool
        apiDefinition = {
          url = "string"
        }
        apiManagementConfig = {
          id = "string"
        }
        appCommandLine = "string"
        appSettings = [
          {
            name = "string"
            value = "string"
          }
        ]
        autoHealEnabled = bool
        autoHealRules = {
          actions = {
            actionType = "string"
            customAction = {
              exe = "string"
              parameters = "string"
            }
            minProcessExecutionTime = "string"
          }
          triggers = {
            privateBytesInKB = int
            requests = {
              count = int
              timeInterval = "string"
            }
            slowRequests = {
              count = int
              path = "string"
              timeInterval = "string"
              timeTaken = "string"
            }
            slowRequestsWithPath = [
              {
                count = int
                path = "string"
                timeInterval = "string"
                timeTaken = "string"
              }
            ]
            statusCodes = [
              {
                count = int
                path = "string"
                status = int
                subStatus = int
                timeInterval = "string"
                win32Status = int
              }
            ]
            statusCodesRange = [
              {
                count = int
                path = "string"
                statusCodes = "string"
                timeInterval = "string"
              }
            ]
          }
        }
        autoSwapSlotName = "string"
        azureStorageAccounts = {}
        connectionStrings = [
          {
            connectionString = "string"
            name = "string"
            type = "string"
          }
        ]
        cors = {
          allowedOrigins = [
            "string"
          ]
          supportCredentials = bool
        }
        defaultDocuments = [
          "string"
        ]
        detailedErrorLoggingEnabled = bool
        documentRoot = "string"
        elasticWebAppScaleLimit = int
        experiments = {
          rampUpRules = [
            {
              actionHostName = "string"
              changeDecisionCallbackUrl = "string"
              changeIntervalInMinutes = int
              changeStep = int
              maxReroutePercentage = int
              minReroutePercentage = int
              name = "string"
              reroutePercentage = int
            }
          ]
        }
        ftpsState = "string"
        functionAppScaleLimit = int
        functionsRuntimeScaleMonitoringEnabled = bool
        handlerMappings = [
          {
            arguments = "string"
            extension = "string"
            scriptProcessor = "string"
          }
        ]
        healthCheckPath = "string"
        http20Enabled = bool
        httpLoggingEnabled = bool
        ipSecurityRestrictions = [
          {
            action = "string"
            description = "string"
            headers = {}
            ipAddress = "string"
            name = "string"
            priority = int
            subnetMask = "string"
            subnetTrafficTag = int
            tag = "string"
            vnetSubnetResourceId = "string"
            vnetTrafficTag = int
          }
        ]
        ipSecurityRestrictionsDefaultAction = "string"
        javaContainer = "string"
        javaContainerVersion = "string"
        javaVersion = "string"
        keyVaultReferenceIdentity = "string"
        limits = {
          maxDiskSizeInMb = int
          maxMemoryInMb = int
          maxPercentageCpu = int
        }
        linuxFxVersion = "string"
        loadBalancing = "string"
        localMySqlEnabled = bool
        logsDirectorySizeLimit = int
        managedPipelineMode = "string"
        managedServiceIdentityId = int
        metadata = [
          {
            name = "string"
            value = "string"
          }
        ]
        minimumElasticInstanceCount = int
        minTlsVersion = "string"
        netFrameworkVersion = "string"
        nodeVersion = "string"
        numberOfWorkers = int
        phpVersion = "string"
        powerShellVersion = "string"
        preWarmedInstanceCount = int
        publicNetworkAccess = "string"
        publishingUsername = "string"
        push = {
          kind = "string"
          properties = {
            dynamicTagsJson = "string"
            isPushEnabled = bool
            tagsRequiringAuth = "string"
            tagWhitelistJson = "string"
          }
        }
        pythonVersion = "string"
        remoteDebuggingEnabled = bool
        remoteDebuggingVersion = "string"
        requestTracingEnabled = bool
        requestTracingExpirationTime = "string"
        scmIpSecurityRestrictions = [
          {
            action = "string"
            description = "string"
            headers = {}
            ipAddress = "string"
            name = "string"
            priority = int
            subnetMask = "string"
            subnetTrafficTag = int
            tag = "string"
            vnetSubnetResourceId = "string"
            vnetTrafficTag = int
          }
        ]
        scmIpSecurityRestrictionsDefaultAction = "string"
        scmIpSecurityRestrictionsUseMain = bool
        scmMinTlsVersion = "string"
        scmType = "string"
        tracingOptions = "string"
        use32BitWorkerProcess = bool
        virtualApplications = [
          {
            physicalPath = "string"
            preloadEnabled = bool
            virtualDirectories = [
              {
                physicalPath = "string"
                virtualPath = "string"
              }
            ]
            virtualPath = "string"
          }
        ]
        vnetName = "string"
        vnetPrivatePortsCount = int
        vnetRouteAllEnabled = bool
        websiteTimeZone = "string"
        webSocketsEnabled = bool
        windowsFxVersion = "string"
        xManagedServiceIdentityId = int
      }
      storageAccountRequired = bool
      virtualNetworkSubnetId = "string"
      vnetContentShareEnabled = bool
      vnetImagePullEnabled = bool
      vnetRouteAllEnabled = bool
    }
    kind = "string"
    extendedLocation = {
      name = "string"
    }
  })
}

```

## Microsoft.Web/sites/basicPublishingCredentialsPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/basicPublishingCredentialsPolicies@2022-09-01"
  name = "ftp"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allow = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/basicPublishingCredentialsPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/basicPublishingCredentialsPolicies@2022-09-01"
  name = "scm"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allow = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "appsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "authsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aadClaimsAuthorization = "string"
      additionalLoginParams = [
        "string"
      ]
      allowedAudiences = [
        "string"
      ]
      allowedExternalRedirectUrls = [
        "string"
      ]
      authFilePath = "string"
      clientId = "string"
      clientSecret = "string"
      clientSecretCertificateThumbprint = "string"
      clientSecretSettingName = "string"
      configVersion = "string"
      defaultProvider = "string"
      enabled = bool
      facebookAppId = "string"
      facebookAppSecret = "string"
      facebookAppSecretSettingName = "string"
      facebookOAuthScopes = [
        "string"
      ]
      gitHubClientId = "string"
      gitHubClientSecret = "string"
      gitHubClientSecretSettingName = "string"
      gitHubOAuthScopes = [
        "string"
      ]
      googleClientId = "string"
      googleClientSecret = "string"
      googleClientSecretSettingName = "string"
      googleOAuthScopes = [
        "string"
      ]
      isAuthFromFile = "string"
      issuer = "string"
      microsoftAccountClientId = "string"
      microsoftAccountClientSecret = "string"
      microsoftAccountClientSecretSettingName = "string"
      microsoftAccountOAuthScopes = [
        "string"
      ]
      runtimeVersion = "string"
      tokenRefreshExtensionHours = int
      tokenStoreEnabled = bool
      twitterConsumerKey = "string"
      twitterConsumerSecret = "string"
      twitterConsumerSecretSettingName = "string"
      unauthenticatedClientAction = "string"
      validateIssuer = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "authsettingsV2"
  parent_id = "string"
  body = jsonencode({
    properties = {
      globalValidation = {
        excludedPaths = [
          "string"
        ]
        redirectToProvider = "string"
        requireAuthentication = bool
        unauthenticatedClientAction = "string"
      }
      httpSettings = {
        forwardProxy = {
          convention = "string"
          customHostHeaderName = "string"
          customProtoHeaderName = "string"
        }
        requireHttps = bool
        routes = {
          apiPrefix = "string"
        }
      }
      identityProviders = {
        apple = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
        }
        azureActiveDirectory = {
          enabled = bool
          isAutoProvisioned = bool
          login = {
            disableWWWAuthenticate = bool
            loginParameters = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretCertificateIssuer = "string"
            clientSecretCertificateSubjectAlternativeName = "string"
            clientSecretCertificateThumbprint = "string"
            clientSecretSettingName = "string"
            openIdIssuer = "string"
          }
          validation = {
            allowedAudiences = [
              "string"
            ]
            defaultAuthorizationPolicy = {
              allowedApplications = [
                "string"
              ]
              allowedPrincipals = {
                groups = [
                  "string"
                ]
                identities = [
                  "string"
                ]
              }
            }
            jwtClaimChecks = {
              allowedClientApplications = [
                "string"
              ]
              allowedGroups = [
                "string"
              ]
            }
          }
        }
        azureStaticWebApps = {
          enabled = bool
          registration = {
            clientId = "string"
          }
        }
        customOpenIdConnectProviders = {}
        facebook = {
          enabled = bool
          graphApiVersion = "string"
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            appId = "string"
            appSecretSettingName = "string"
          }
        }
        gitHub = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
        }
        google = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
          validation = {
            allowedAudiences = [
              "string"
            ]
          }
        }
        legacyMicrosoftAccount = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
          validation = {
            allowedAudiences = [
              "string"
            ]
          }
        }
        twitter = {
          enabled = bool
          registration = {
            consumerKey = "string"
            consumerSecretSettingName = "string"
          }
        }
      }
      login = {
        allowedExternalRedirectUrls = [
          "string"
        ]
        cookieExpiration = {
          convention = "string"
          timeToExpiration = "string"
        }
        nonce = {
          nonceExpirationInterval = "string"
          validateNonce = bool
        }
        preserveUrlFragmentsForLogins = bool
        routes = {
          logoutEndpoint = "string"
        }
        tokenStore = {
          azureBlobStorage = {
            sasUrlSettingName = "string"
          }
          enabled = bool
          fileSystem = {
            directory = "string"
          }
          tokenRefreshExtensionHours = int
        }
      }
      platform = {
        configFilePath = "string"
        enabled = bool
        runtimeVersion = "string"
      }
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "azurestorageaccounts"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "backup"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backupName = "string"
      backupSchedule = {
        frequencyInterval = int
        frequencyUnit = "string"
        keepAtLeastOneBackup = bool
        retentionPeriodInDays = int
        startTime = "string"
      }
      databases = [
        {
          connectionString = "string"
          connectionStringName = "string"
          databaseType = "string"
          name = "string"
        }
      ]
      enabled = bool
      storageAccountUrl = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "connectionstrings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "logs"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicationLogs = {
        azureBlobStorage = {
          level = "string"
          retentionInDays = int
          sasUrl = "string"
        }
        azureTableStorage = {
          level = "string"
          sasUrl = "string"
        }
        fileSystem = {
          level = "string"
        }
      }
      detailedErrorMessages = {
        enabled = bool
      }
      failedRequestsTracing = {
        enabled = bool
      }
      httpLogs = {
        azureBlobStorage = {
          enabled = bool
          retentionInDays = int
          sasUrl = "string"
        }
        fileSystem = {
          enabled = bool
          retentionInDays = int
          retentionInMb = int
        }
      }
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "metadata"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "pushsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dynamicTagsJson = "string"
      isPushEnabled = bool
      tagsRequiringAuth = "string"
      tagWhitelistJson = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "slotConfigNames"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appSettingNames = [
        "string"
      ]
      azureStorageConfigNames = [
        "string"
      ]
      connectionStringNames = [
        "string"
      ]
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/config@2022-09-01"
  name = "web"
  parent_id = "string"
  body = jsonencode({
    properties = {
      acrUseManagedIdentityCreds = bool
      acrUserManagedIdentityID = "string"
      alwaysOn = bool
      apiDefinition = {
        url = "string"
      }
      apiManagementConfig = {
        id = "string"
      }
      appCommandLine = "string"
      appSettings = [
        {
          name = "string"
          value = "string"
        }
      ]
      autoHealEnabled = bool
      autoHealRules = {
        actions = {
          actionType = "string"
          customAction = {
            exe = "string"
            parameters = "string"
          }
          minProcessExecutionTime = "string"
        }
        triggers = {
          privateBytesInKB = int
          requests = {
            count = int
            timeInterval = "string"
          }
          slowRequests = {
            count = int
            path = "string"
            timeInterval = "string"
            timeTaken = "string"
          }
          slowRequestsWithPath = [
            {
              count = int
              path = "string"
              timeInterval = "string"
              timeTaken = "string"
            }
          ]
          statusCodes = [
            {
              count = int
              path = "string"
              status = int
              subStatus = int
              timeInterval = "string"
              win32Status = int
            }
          ]
          statusCodesRange = [
            {
              count = int
              path = "string"
              statusCodes = "string"
              timeInterval = "string"
            }
          ]
        }
      }
      autoSwapSlotName = "string"
      azureStorageAccounts = {}
      connectionStrings = [
        {
          connectionString = "string"
          name = "string"
          type = "string"
        }
      ]
      cors = {
        allowedOrigins = [
          "string"
        ]
        supportCredentials = bool
      }
      defaultDocuments = [
        "string"
      ]
      detailedErrorLoggingEnabled = bool
      documentRoot = "string"
      elasticWebAppScaleLimit = int
      experiments = {
        rampUpRules = [
          {
            actionHostName = "string"
            changeDecisionCallbackUrl = "string"
            changeIntervalInMinutes = int
            changeStep = int
            maxReroutePercentage = int
            minReroutePercentage = int
            name = "string"
            reroutePercentage = int
          }
        ]
      }
      ftpsState = "string"
      functionAppScaleLimit = int
      functionsRuntimeScaleMonitoringEnabled = bool
      handlerMappings = [
        {
          arguments = "string"
          extension = "string"
          scriptProcessor = "string"
        }
      ]
      healthCheckPath = "string"
      http20Enabled = bool
      httpLoggingEnabled = bool
      ipSecurityRestrictions = [
        {
          action = "string"
          description = "string"
          headers = {}
          ipAddress = "string"
          name = "string"
          priority = int
          subnetMask = "string"
          subnetTrafficTag = int
          tag = "string"
          vnetSubnetResourceId = "string"
          vnetTrafficTag = int
        }
      ]
      ipSecurityRestrictionsDefaultAction = "string"
      javaContainer = "string"
      javaContainerVersion = "string"
      javaVersion = "string"
      keyVaultReferenceIdentity = "string"
      limits = {
        maxDiskSizeInMb = int
        maxMemoryInMb = int
        maxPercentageCpu = int
      }
      linuxFxVersion = "string"
      loadBalancing = "string"
      localMySqlEnabled = bool
      logsDirectorySizeLimit = int
      managedPipelineMode = "string"
      managedServiceIdentityId = int
      metadata = [
        {
          name = "string"
          value = "string"
        }
      ]
      minimumElasticInstanceCount = int
      minTlsVersion = "string"
      netFrameworkVersion = "string"
      nodeVersion = "string"
      numberOfWorkers = int
      phpVersion = "string"
      powerShellVersion = "string"
      preWarmedInstanceCount = int
      publicNetworkAccess = "string"
      publishingUsername = "string"
      push = {
        kind = "string"
        properties = {
          dynamicTagsJson = "string"
          isPushEnabled = bool
          tagsRequiringAuth = "string"
          tagWhitelistJson = "string"
        }
      }
      pythonVersion = "string"
      remoteDebuggingEnabled = bool
      remoteDebuggingVersion = "string"
      requestTracingEnabled = bool
      requestTracingExpirationTime = "string"
      scmIpSecurityRestrictions = [
        {
          action = "string"
          description = "string"
          headers = {}
          ipAddress = "string"
          name = "string"
          priority = int
          subnetMask = "string"
          subnetTrafficTag = int
          tag = "string"
          vnetSubnetResourceId = "string"
          vnetTrafficTag = int
        }
      ]
      scmIpSecurityRestrictionsDefaultAction = "string"
      scmIpSecurityRestrictionsUseMain = bool
      scmMinTlsVersion = "string"
      scmType = "string"
      tracingOptions = "string"
      use32BitWorkerProcess = bool
      virtualApplications = [
        {
          physicalPath = "string"
          preloadEnabled = bool
          virtualDirectories = [
            {
              physicalPath = "string"
              virtualPath = "string"
            }
          ]
          virtualPath = "string"
        }
      ]
      vnetName = "string"
      vnetPrivatePortsCount = int
      vnetRouteAllEnabled = bool
      websiteTimeZone = "string"
      webSocketsEnabled = bool
      windowsFxVersion = "string"
      xManagedServiceIdentityId = int
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/deployments@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/deployments@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      active = bool
      author = "string"
      author_email = "string"
      deployer = "string"
      details = "string"
      end_time = "string"
      message = "string"
      start_time = "string"
      status = int
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/domainOwnershipIdentifiers@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/domainOwnershipIdentifiers@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      id = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/extensions@2021-02-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/extensions@2021-02-01"
  name = "MSDeploy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appOffline = bool
      connectionString = "string"
      dbType = "string"
      packageUri = "string"
      setParameters = {}
      setParametersXmlFileUri = "string"
      skipAppData = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/extensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/extensions@2022-09-01"
  name = "MSDeploy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appOffline = bool
      connectionString = "string"
      dbType = "string"
      packageUri = "string"
      setParameters = {}
      setParametersXmlFileUri = "string"
      skipAppData = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/extensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/extensions@2022-09-01"
  name = "onedeploy"
  parent_id = "string"
}

```

## Microsoft.Web/sites/functions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/functions@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      config_href = "string"
      files = {}
      function_app_id = "string"
      href = "string"
      invoke_url_template = "string"
      isDisabled = bool
      language = "string"
      script_href = "string"
      script_root_path_href = "string"
      secrets_file_href = "string"
      test_data = "string"
      test_data_href = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/functions/keys@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/functions/keys@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    value = "string"
  })
}

```

## Microsoft.Web/sites/hostNameBindings@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/hostNameBindings@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureResourceName = "string"
      azureResourceType = "string"
      customHostNameDnsRecordType = "string"
      domainId = "string"
      hostNameType = "string"
      siteName = "string"
      sslState = "string"
      thumbprint = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/hybridconnection@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/hybridconnection@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      biztalkUri = "string"
      entityConnectionString = "string"
      entityName = "string"
      hostname = "string"
      port = int
      resourceConnectionString = "string"
      resourceType = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/hybridConnectionNamespaces/relays@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/hybridConnectionNamespaces/relays@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hostname = "string"
      port = int
      relayArmUri = "string"
      relayName = "string"
      sendKeyName = "string"
      sendKeyValue = "string"
      serviceBusNamespace = "string"
      serviceBusSuffix = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/instances/extensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/instances/extensions@2022-09-01"
  name = "MSDeploy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appOffline = bool
      connectionString = "string"
      dbType = "string"
      packageUri = "string"
      setParameters = {}
      setParametersXmlFileUri = "string"
      skipAppData = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/networkConfig@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/networkConfig@2022-09-01"
  name = "virtualNetwork"
  parent_id = "string"
  body = jsonencode({
    properties = {
      subnetResourceId = "string"
      swiftSupported = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/premieraddons@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/premieraddons@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      marketplaceOffer = "string"
      marketplacePublisher = "string"
      product = "string"
      sku = "string"
      vendor = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/privateAccess@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/privateAccess@2022-09-01"
  name = "virtualNetworks"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      virtualNetworks = [
        {
          key = int
          name = "string"
          resourceId = "string"
          subnets = [
            {
              key = int
              name = "string"
            }
          ]
        }
      ]
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/privateEndpointConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/privateEndpointConnections@2022-09-01"
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
    kind = "string"
  })
}

```

## Microsoft.Web/sites/publicCertificates@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/publicCertificates@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicCertificateLocation = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/siteextensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/siteextensions@2022-09-01"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.Web/sites/slots@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots@2022-09-01"
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
      clientAffinityEnabled = bool
      clientCertEnabled = bool
      clientCertExclusionPaths = "string"
      clientCertMode = "string"
      cloningInfo = {
        appSettingsOverrides = {}
        cloneCustomHostNames = bool
        cloneSourceControl = bool
        configureLoadBalancing = bool
        correlationId = "string"
        hostingEnvironment = "string"
        overwrite = bool
        sourceWebAppId = "string"
        sourceWebAppLocation = "string"
        trafficManagerProfileId = "string"
        trafficManagerProfileName = "string"
      }
      containerSize = int
      customDomainVerificationId = "string"
      dailyMemoryTimeQuota = int
      enabled = bool
      hostingEnvironmentProfile = {
        id = "string"
      }
      hostNamesDisabled = bool
      hostNameSslStates = [
        {
          hostType = "string"
          name = "string"
          sslState = "string"
          thumbprint = "string"
          toUpdate = bool
          virtualIP = "string"
        }
      ]
      httpsOnly = bool
      hyperV = bool
      isXenon = bool
      keyVaultReferenceIdentity = "string"
      managedEnvironmentId = "string"
      publicNetworkAccess = "string"
      redundancyMode = "string"
      reserved = bool
      scmSiteAlsoStopped = bool
      serverFarmId = "string"
      siteConfig = {
        acrUseManagedIdentityCreds = bool
        acrUserManagedIdentityID = "string"
        alwaysOn = bool
        apiDefinition = {
          url = "string"
        }
        apiManagementConfig = {
          id = "string"
        }
        appCommandLine = "string"
        appSettings = [
          {
            name = "string"
            value = "string"
          }
        ]
        autoHealEnabled = bool
        autoHealRules = {
          actions = {
            actionType = "string"
            customAction = {
              exe = "string"
              parameters = "string"
            }
            minProcessExecutionTime = "string"
          }
          triggers = {
            privateBytesInKB = int
            requests = {
              count = int
              timeInterval = "string"
            }
            slowRequests = {
              count = int
              path = "string"
              timeInterval = "string"
              timeTaken = "string"
            }
            slowRequestsWithPath = [
              {
                count = int
                path = "string"
                timeInterval = "string"
                timeTaken = "string"
              }
            ]
            statusCodes = [
              {
                count = int
                path = "string"
                status = int
                subStatus = int
                timeInterval = "string"
                win32Status = int
              }
            ]
            statusCodesRange = [
              {
                count = int
                path = "string"
                statusCodes = "string"
                timeInterval = "string"
              }
            ]
          }
        }
        autoSwapSlotName = "string"
        azureStorageAccounts = {}
        connectionStrings = [
          {
            connectionString = "string"
            name = "string"
            type = "string"
          }
        ]
        cors = {
          allowedOrigins = [
            "string"
          ]
          supportCredentials = bool
        }
        defaultDocuments = [
          "string"
        ]
        detailedErrorLoggingEnabled = bool
        documentRoot = "string"
        elasticWebAppScaleLimit = int
        experiments = {
          rampUpRules = [
            {
              actionHostName = "string"
              changeDecisionCallbackUrl = "string"
              changeIntervalInMinutes = int
              changeStep = int
              maxReroutePercentage = int
              minReroutePercentage = int
              name = "string"
              reroutePercentage = int
            }
          ]
        }
        ftpsState = "string"
        functionAppScaleLimit = int
        functionsRuntimeScaleMonitoringEnabled = bool
        handlerMappings = [
          {
            arguments = "string"
            extension = "string"
            scriptProcessor = "string"
          }
        ]
        healthCheckPath = "string"
        http20Enabled = bool
        httpLoggingEnabled = bool
        ipSecurityRestrictions = [
          {
            action = "string"
            description = "string"
            headers = {}
            ipAddress = "string"
            name = "string"
            priority = int
            subnetMask = "string"
            subnetTrafficTag = int
            tag = "string"
            vnetSubnetResourceId = "string"
            vnetTrafficTag = int
          }
        ]
        ipSecurityRestrictionsDefaultAction = "string"
        javaContainer = "string"
        javaContainerVersion = "string"
        javaVersion = "string"
        keyVaultReferenceIdentity = "string"
        limits = {
          maxDiskSizeInMb = int
          maxMemoryInMb = int
          maxPercentageCpu = int
        }
        linuxFxVersion = "string"
        loadBalancing = "string"
        localMySqlEnabled = bool
        logsDirectorySizeLimit = int
        managedPipelineMode = "string"
        managedServiceIdentityId = int
        metadata = [
          {
            name = "string"
            value = "string"
          }
        ]
        minimumElasticInstanceCount = int
        minTlsVersion = "string"
        netFrameworkVersion = "string"
        nodeVersion = "string"
        numberOfWorkers = int
        phpVersion = "string"
        powerShellVersion = "string"
        preWarmedInstanceCount = int
        publicNetworkAccess = "string"
        publishingUsername = "string"
        push = {
          kind = "string"
          properties = {
            dynamicTagsJson = "string"
            isPushEnabled = bool
            tagsRequiringAuth = "string"
            tagWhitelistJson = "string"
          }
        }
        pythonVersion = "string"
        remoteDebuggingEnabled = bool
        remoteDebuggingVersion = "string"
        requestTracingEnabled = bool
        requestTracingExpirationTime = "string"
        scmIpSecurityRestrictions = [
          {
            action = "string"
            description = "string"
            headers = {}
            ipAddress = "string"
            name = "string"
            priority = int
            subnetMask = "string"
            subnetTrafficTag = int
            tag = "string"
            vnetSubnetResourceId = "string"
            vnetTrafficTag = int
          }
        ]
        scmIpSecurityRestrictionsDefaultAction = "string"
        scmIpSecurityRestrictionsUseMain = bool
        scmMinTlsVersion = "string"
        scmType = "string"
        tracingOptions = "string"
        use32BitWorkerProcess = bool
        virtualApplications = [
          {
            physicalPath = "string"
            preloadEnabled = bool
            virtualDirectories = [
              {
                physicalPath = "string"
                virtualPath = "string"
              }
            ]
            virtualPath = "string"
          }
        ]
        vnetName = "string"
        vnetPrivatePortsCount = int
        vnetRouteAllEnabled = bool
        websiteTimeZone = "string"
        webSocketsEnabled = bool
        windowsFxVersion = "string"
        xManagedServiceIdentityId = int
      }
      storageAccountRequired = bool
      virtualNetworkSubnetId = "string"
      vnetContentShareEnabled = bool
      vnetImagePullEnabled = bool
      vnetRouteAllEnabled = bool
    }
    kind = "string"
    extendedLocation = {
      name = "string"
    }
  })
}

```

## Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2022-09-01"
  name = "ftp"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allow = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies@2022-09-01"
  name = "scm"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allow = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "appsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "authsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aadClaimsAuthorization = "string"
      additionalLoginParams = [
        "string"
      ]
      allowedAudiences = [
        "string"
      ]
      allowedExternalRedirectUrls = [
        "string"
      ]
      authFilePath = "string"
      clientId = "string"
      clientSecret = "string"
      clientSecretCertificateThumbprint = "string"
      clientSecretSettingName = "string"
      configVersion = "string"
      defaultProvider = "string"
      enabled = bool
      facebookAppId = "string"
      facebookAppSecret = "string"
      facebookAppSecretSettingName = "string"
      facebookOAuthScopes = [
        "string"
      ]
      gitHubClientId = "string"
      gitHubClientSecret = "string"
      gitHubClientSecretSettingName = "string"
      gitHubOAuthScopes = [
        "string"
      ]
      googleClientId = "string"
      googleClientSecret = "string"
      googleClientSecretSettingName = "string"
      googleOAuthScopes = [
        "string"
      ]
      isAuthFromFile = "string"
      issuer = "string"
      microsoftAccountClientId = "string"
      microsoftAccountClientSecret = "string"
      microsoftAccountClientSecretSettingName = "string"
      microsoftAccountOAuthScopes = [
        "string"
      ]
      runtimeVersion = "string"
      tokenRefreshExtensionHours = int
      tokenStoreEnabled = bool
      twitterConsumerKey = "string"
      twitterConsumerSecret = "string"
      twitterConsumerSecretSettingName = "string"
      unauthenticatedClientAction = "string"
      validateIssuer = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "authsettingsV2"
  parent_id = "string"
  body = jsonencode({
    properties = {
      globalValidation = {
        excludedPaths = [
          "string"
        ]
        redirectToProvider = "string"
        requireAuthentication = bool
        unauthenticatedClientAction = "string"
      }
      httpSettings = {
        forwardProxy = {
          convention = "string"
          customHostHeaderName = "string"
          customProtoHeaderName = "string"
        }
        requireHttps = bool
        routes = {
          apiPrefix = "string"
        }
      }
      identityProviders = {
        apple = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
        }
        azureActiveDirectory = {
          enabled = bool
          isAutoProvisioned = bool
          login = {
            disableWWWAuthenticate = bool
            loginParameters = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretCertificateIssuer = "string"
            clientSecretCertificateSubjectAlternativeName = "string"
            clientSecretCertificateThumbprint = "string"
            clientSecretSettingName = "string"
            openIdIssuer = "string"
          }
          validation = {
            allowedAudiences = [
              "string"
            ]
            defaultAuthorizationPolicy = {
              allowedApplications = [
                "string"
              ]
              allowedPrincipals = {
                groups = [
                  "string"
                ]
                identities = [
                  "string"
                ]
              }
            }
            jwtClaimChecks = {
              allowedClientApplications = [
                "string"
              ]
              allowedGroups = [
                "string"
              ]
            }
          }
        }
        azureStaticWebApps = {
          enabled = bool
          registration = {
            clientId = "string"
          }
        }
        customOpenIdConnectProviders = {}
        facebook = {
          enabled = bool
          graphApiVersion = "string"
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            appId = "string"
            appSecretSettingName = "string"
          }
        }
        gitHub = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
        }
        google = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
          validation = {
            allowedAudiences = [
              "string"
            ]
          }
        }
        legacyMicrosoftAccount = {
          enabled = bool
          login = {
            scopes = [
              "string"
            ]
          }
          registration = {
            clientId = "string"
            clientSecretSettingName = "string"
          }
          validation = {
            allowedAudiences = [
              "string"
            ]
          }
        }
        twitter = {
          enabled = bool
          registration = {
            consumerKey = "string"
            consumerSecretSettingName = "string"
          }
        }
      }
      login = {
        allowedExternalRedirectUrls = [
          "string"
        ]
        cookieExpiration = {
          convention = "string"
          timeToExpiration = "string"
        }
        nonce = {
          nonceExpirationInterval = "string"
          validateNonce = bool
        }
        preserveUrlFragmentsForLogins = bool
        routes = {
          logoutEndpoint = "string"
        }
        tokenStore = {
          azureBlobStorage = {
            sasUrlSettingName = "string"
          }
          enabled = bool
          fileSystem = {
            directory = "string"
          }
          tokenRefreshExtensionHours = int
        }
      }
      platform = {
        configFilePath = "string"
        enabled = bool
        runtimeVersion = "string"
      }
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "azurestorageaccounts"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "backup"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backupName = "string"
      backupSchedule = {
        frequencyInterval = int
        frequencyUnit = "string"
        keepAtLeastOneBackup = bool
        retentionPeriodInDays = int
        startTime = "string"
      }
      databases = [
        {
          connectionString = "string"
          connectionStringName = "string"
          databaseType = "string"
          name = "string"
        }
      ]
      enabled = bool
      storageAccountUrl = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "connectionstrings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "logs"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicationLogs = {
        azureBlobStorage = {
          level = "string"
          retentionInDays = int
          sasUrl = "string"
        }
        azureTableStorage = {
          level = "string"
          sasUrl = "string"
        }
        fileSystem = {
          level = "string"
        }
      }
      detailedErrorMessages = {
        enabled = bool
      }
      failedRequestsTracing = {
        enabled = bool
      }
      httpLogs = {
        azureBlobStorage = {
          enabled = bool
          retentionInDays = int
          sasUrl = "string"
        }
        fileSystem = {
          enabled = bool
          retentionInDays = int
          retentionInMb = int
        }
      }
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "metadata"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "pushsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dynamicTagsJson = "string"
      isPushEnabled = bool
      tagsRequiringAuth = "string"
      tagWhitelistJson = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/config@2022-09-01"
  name = "web"
  parent_id = "string"
  body = jsonencode({
    properties = {
      acrUseManagedIdentityCreds = bool
      acrUserManagedIdentityID = "string"
      alwaysOn = bool
      apiDefinition = {
        url = "string"
      }
      apiManagementConfig = {
        id = "string"
      }
      appCommandLine = "string"
      appSettings = [
        {
          name = "string"
          value = "string"
        }
      ]
      autoHealEnabled = bool
      autoHealRules = {
        actions = {
          actionType = "string"
          customAction = {
            exe = "string"
            parameters = "string"
          }
          minProcessExecutionTime = "string"
        }
        triggers = {
          privateBytesInKB = int
          requests = {
            count = int
            timeInterval = "string"
          }
          slowRequests = {
            count = int
            path = "string"
            timeInterval = "string"
            timeTaken = "string"
          }
          slowRequestsWithPath = [
            {
              count = int
              path = "string"
              timeInterval = "string"
              timeTaken = "string"
            }
          ]
          statusCodes = [
            {
              count = int
              path = "string"
              status = int
              subStatus = int
              timeInterval = "string"
              win32Status = int
            }
          ]
          statusCodesRange = [
            {
              count = int
              path = "string"
              statusCodes = "string"
              timeInterval = "string"
            }
          ]
        }
      }
      autoSwapSlotName = "string"
      azureStorageAccounts = {}
      connectionStrings = [
        {
          connectionString = "string"
          name = "string"
          type = "string"
        }
      ]
      cors = {
        allowedOrigins = [
          "string"
        ]
        supportCredentials = bool
      }
      defaultDocuments = [
        "string"
      ]
      detailedErrorLoggingEnabled = bool
      documentRoot = "string"
      elasticWebAppScaleLimit = int
      experiments = {
        rampUpRules = [
          {
            actionHostName = "string"
            changeDecisionCallbackUrl = "string"
            changeIntervalInMinutes = int
            changeStep = int
            maxReroutePercentage = int
            minReroutePercentage = int
            name = "string"
            reroutePercentage = int
          }
        ]
      }
      ftpsState = "string"
      functionAppScaleLimit = int
      functionsRuntimeScaleMonitoringEnabled = bool
      handlerMappings = [
        {
          arguments = "string"
          extension = "string"
          scriptProcessor = "string"
        }
      ]
      healthCheckPath = "string"
      http20Enabled = bool
      httpLoggingEnabled = bool
      ipSecurityRestrictions = [
        {
          action = "string"
          description = "string"
          headers = {}
          ipAddress = "string"
          name = "string"
          priority = int
          subnetMask = "string"
          subnetTrafficTag = int
          tag = "string"
          vnetSubnetResourceId = "string"
          vnetTrafficTag = int
        }
      ]
      ipSecurityRestrictionsDefaultAction = "string"
      javaContainer = "string"
      javaContainerVersion = "string"
      javaVersion = "string"
      keyVaultReferenceIdentity = "string"
      limits = {
        maxDiskSizeInMb = int
        maxMemoryInMb = int
        maxPercentageCpu = int
      }
      linuxFxVersion = "string"
      loadBalancing = "string"
      localMySqlEnabled = bool
      logsDirectorySizeLimit = int
      managedPipelineMode = "string"
      managedServiceIdentityId = int
      metadata = [
        {
          name = "string"
          value = "string"
        }
      ]
      minimumElasticInstanceCount = int
      minTlsVersion = "string"
      netFrameworkVersion = "string"
      nodeVersion = "string"
      numberOfWorkers = int
      phpVersion = "string"
      powerShellVersion = "string"
      preWarmedInstanceCount = int
      publicNetworkAccess = "string"
      publishingUsername = "string"
      push = {
        kind = "string"
        properties = {
          dynamicTagsJson = "string"
          isPushEnabled = bool
          tagsRequiringAuth = "string"
          tagWhitelistJson = "string"
        }
      }
      pythonVersion = "string"
      remoteDebuggingEnabled = bool
      remoteDebuggingVersion = "string"
      requestTracingEnabled = bool
      requestTracingExpirationTime = "string"
      scmIpSecurityRestrictions = [
        {
          action = "string"
          description = "string"
          headers = {}
          ipAddress = "string"
          name = "string"
          priority = int
          subnetMask = "string"
          subnetTrafficTag = int
          tag = "string"
          vnetSubnetResourceId = "string"
          vnetTrafficTag = int
        }
      ]
      scmIpSecurityRestrictionsDefaultAction = "string"
      scmIpSecurityRestrictionsUseMain = bool
      scmMinTlsVersion = "string"
      scmType = "string"
      tracingOptions = "string"
      use32BitWorkerProcess = bool
      virtualApplications = [
        {
          physicalPath = "string"
          preloadEnabled = bool
          virtualDirectories = [
            {
              physicalPath = "string"
              virtualPath = "string"
            }
          ]
          virtualPath = "string"
        }
      ]
      vnetName = "string"
      vnetPrivatePortsCount = int
      vnetRouteAllEnabled = bool
      websiteTimeZone = "string"
      webSocketsEnabled = bool
      windowsFxVersion = "string"
      xManagedServiceIdentityId = int
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/deployments@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/deployments@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      active = bool
      author = "string"
      author_email = "string"
      deployer = "string"
      details = "string"
      end_time = "string"
      message = "string"
      start_time = "string"
      status = int
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/domainOwnershipIdentifiers@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      id = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/extensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/extensions@2022-09-01"
  name = "MSDeploy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appOffline = bool
      connectionString = "string"
      dbType = "string"
      packageUri = "string"
      setParameters = {}
      setParametersXmlFileUri = "string"
      skipAppData = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/functions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/functions@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      config_href = "string"
      files = {}
      function_app_id = "string"
      href = "string"
      invoke_url_template = "string"
      isDisabled = bool
      language = "string"
      script_href = "string"
      script_root_path_href = "string"
      secrets_file_href = "string"
      test_data = "string"
      test_data_href = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/functions/keys@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/functions/keys@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    value = "string"
  })
}

```

## Microsoft.Web/sites/slots/hostNameBindings@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/hostNameBindings@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureResourceName = "string"
      azureResourceType = "string"
      customHostNameDnsRecordType = "string"
      domainId = "string"
      hostNameType = "string"
      siteName = "string"
      sslState = "string"
      thumbprint = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/hybridconnection@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/hybridconnection@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      biztalkUri = "string"
      entityConnectionString = "string"
      entityName = "string"
      hostname = "string"
      port = int
      resourceConnectionString = "string"
      resourceType = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hostname = "string"
      port = int
      relayArmUri = "string"
      relayName = "string"
      sendKeyName = "string"
      sendKeyValue = "string"
      serviceBusNamespace = "string"
      serviceBusSuffix = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/instances/extensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/instances/extensions@2022-09-01"
  name = "MSDeploy"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appOffline = bool
      connectionString = "string"
      dbType = "string"
      packageUri = "string"
      setParameters = {}
      setParametersXmlFileUri = "string"
      skipAppData = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/networkConfig@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/networkConfig@2022-09-01"
  name = "virtualNetwork"
  parent_id = "string"
  body = jsonencode({
    properties = {
      subnetResourceId = "string"
      swiftSupported = bool
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/premieraddons@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/premieraddons@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      marketplaceOffer = "string"
      marketplacePublisher = "string"
      product = "string"
      sku = "string"
      vendor = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/privateAccess@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/privateAccess@2022-09-01"
  name = "virtualNetworks"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      virtualNetworks = [
        {
          key = int
          name = "string"
          resourceId = "string"
          subnets = [
            {
              key = int
              name = "string"
            }
          ]
        }
      ]
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/privateEndpointConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/privateEndpointConnections@2022-09-01"
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
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/publicCertificates@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/publicCertificates@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      publicCertificateLocation = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/siteextensions@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/siteextensions@2022-09-01"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.Web/sites/slots/sourcecontrols@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/sourcecontrols@2022-09-01"
  name = "web"
  parent_id = "string"
  body = jsonencode({
    properties = {
      branch = "string"
      deploymentRollbackEnabled = bool
      gitHubActionConfiguration = {
        codeConfiguration = {
          runtimeStack = "string"
          runtimeVersion = "string"
        }
        containerConfiguration = {
          imageName = "string"
          password = "string"
          serverUrl = "string"
          username = "string"
        }
        generateWorkflowFile = bool
        isLinux = bool
      }
      isGitHubAction = bool
      isManualIntegration = bool
      isMercurial = bool
      repoUrl = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/virtualNetworkConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/virtualNetworkConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certBlob = "string"
      dnsServers = "string"
      isSwift = bool
      vnetResourceId = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      vnetName = "string"
      vpnPackageUri = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/sourcecontrols@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/sourcecontrols@2022-09-01"
  name = "web"
  parent_id = "string"
  body = jsonencode({
    properties = {
      branch = "string"
      deploymentRollbackEnabled = bool
      gitHubActionConfiguration = {
        codeConfiguration = {
          runtimeStack = "string"
          runtimeVersion = "string"
        }
        containerConfiguration = {
          imageName = "string"
          password = "string"
          serverUrl = "string"
          username = "string"
        }
        generateWorkflowFile = bool
        isLinux = bool
      }
      isGitHubAction = bool
      isManualIntegration = bool
      isMercurial = bool
      repoUrl = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/virtualNetworkConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/virtualNetworkConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certBlob = "string"
      dnsServers = "string"
      isSwift = bool
      vnetResourceId = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sites/virtualNetworkConnections/gateways@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sites/virtualNetworkConnections/gateways@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      vnetName = "string"
      vpnPackageUri = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/sourcecontrols@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/sourcecontrols@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      expirationTime = "string"
      refreshToken = "string"
      token = "string"
      tokenSecret = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites@2022-09-01"
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
      allowConfigFileUpdates = bool
      branch = "string"
      buildProperties = {
        apiBuildCommand = "string"
        apiLocation = "string"
        appArtifactLocation = "string"
        appBuildCommand = "string"
        appLocation = "string"
        githubActionSecretNameOverride = "string"
        outputLocation = "string"
        skipGithubActionWorkflowGeneration = bool
      }
      enterpriseGradeCdnStatus = "string"
      provider = "string"
      publicNetworkAccess = "string"
      repositoryToken = "string"
      repositoryUrl = "string"
      stagingEnvironmentPolicy = "string"
      templateProperties = {
        description = "string"
        isPrivate = bool
        owner = "string"
        repositoryName = "string"
        templateRepositoryUrl = "string"
      }
    }
    sku = {
      capabilities = [
        {
          name = "string"
          reason = "string"
          value = "string"
        }
      ]
      capacity = int
      family = "string"
      locations = [
        "string"
      ]
      name = "string"
      size = "string"
      skuCapacity = {
        default = int
        elasticMaximum = int
        maximum = int
        minimum = int
        scaleType = "string"
      }
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/basicAuth@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/basicAuth@2022-09-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applicableEnvironmentsMode = "string"
      environments = [
        "string"
      ]
      password = "string"
      secretUrl = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/builds/config@2020-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/config@2020-10-01"
  name = "functionappsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/builds/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/config@2022-09-01"
  name = "appsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/builds/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/config@2022-09-01"
  name = "functionappsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/builds/databaseConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/databaseConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionIdentity = "string"
      connectionString = "string"
      region = "string"
      resourceId = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/builds/linkedBackends@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/linkedBackends@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backendResourceId = "string"
      region = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/builds/userProvidedFunctionApps@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/builds/userProvidedFunctionApps@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      functionAppRegion = "string"
      functionAppResourceId = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/config@2020-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/config@2020-10-01"
  name = "functionappsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/config@2022-09-01"
  name = "appsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/config@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/config@2022-09-01"
  name = "functionappsettings"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/customDomains@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/customDomains@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      validationMethod = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/databaseConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/databaseConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionIdentity = "string"
      connectionString = "string"
      region = "string"
      resourceId = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/linkedBackends@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/linkedBackends@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backendResourceId = "string"
      region = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/privateEndpointConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/privateEndpointConnections@2022-09-01"
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
    kind = "string"
  })
}

```

## Microsoft.Web/staticSites/userProvidedFunctionApps@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Web/staticSites/userProvidedFunctionApps@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      functionAppRegion = "string"
      functionAppResourceId = "string"
    }
    kind = "string"
  })
}

```

