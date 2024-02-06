## Microsoft.App/connectedEnvironments@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/connectedEnvironments@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customDomainConfiguration = {
        certificatePassword = "string"
        dnsSuffix = "string"
      }
      daprAIConnectionString = "string"
      staticIp = "string"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
  })
}

```

## Microsoft.App/connectedEnvironments/certificates@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/connectedEnvironments/certificates@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      password = "string"
    }
  })
}

```

## Microsoft.App/connectedEnvironments/daprComponents@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/connectedEnvironments/daprComponents@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      componentType = "string"
      ignoreErrors = bool
      initTimeout = "string"
      metadata = [
        {
          name = "string"
          secretRef = "string"
          value = "string"
        }
      ]
      scopes = [
        "string"
      ]
      secrets = [
        {
          identity = "string"
          keyVaultUrl = "string"
          name = "string"
          value = "string"
        }
      ]
      secretStoreComponent = "string"
      version = "string"
    }
  })
}

```

## Microsoft.App/connectedEnvironments/storages@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/connectedEnvironments/storages@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureFile = {
        accessMode = "string"
        accountKey = "string"
        accountName = "string"
        shareName = "string"
      }
    }
  })
}

```

## Microsoft.App/containerApps@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/containerApps@2023-05-01"
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
      configuration = {
        activeRevisionsMode = "string"
        dapr = {
          appId = "string"
          appPort = int
          appProtocol = "string"
          enableApiLogging = bool
          enabled = bool
          httpMaxRequestSize = int
          httpReadBufferSize = int
          logLevel = "string"
        }
        ingress = {
          allowInsecure = bool
          clientCertificateMode = "string"
          corsPolicy = {
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
            exposeHeaders = [
              "string"
            ]
            maxAge = int
          }
          customDomains = [
            {
              bindingType = "string"
              certificateId = "string"
              name = "string"
            }
          ]
          exposedPort = int
          external = bool
          ipSecurityRestrictions = [
            {
              action = "string"
              description = "string"
              ipAddressRange = "string"
              name = "string"
            }
          ]
          stickySessions = {
            affinity = "string"
          }
          targetPort = int
          traffic = [
            {
              label = "string"
              latestRevision = bool
              revisionName = "string"
              weight = int
            }
          ]
          transport = "string"
        }
        maxInactiveRevisions = int
        registries = [
          {
            identity = "string"
            passwordSecretRef = "string"
            server = "string"
            username = "string"
          }
        ]
        secrets = [
          {
            identity = "string"
            keyVaultUrl = "string"
            name = "string"
            value = "string"
          }
        ]
        service = {
          type = "string"
        }
      }
      environmentId = "string"
      managedEnvironmentId = "string"
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
            probes = [
              {
                failureThreshold = int
                httpGet = {
                  host = "string"
                  httpHeaders = [
                    {
                      name = "string"
                      value = "string"
                    }
                  ]
                  path = "string"
                  port = int
                  scheme = "string"
                }
                initialDelaySeconds = int
                periodSeconds = int
                successThreshold = int
                tcpSocket = {
                  host = "string"
                  port = int
                }
                terminationGracePeriodSeconds = int
                timeoutSeconds = int
                type = "string"
              }
            ]
            resources = {
              cpu = "decimal-as-string"
              memory = "string"
            }
            volumeMounts = [
              {
                mountPath = "string"
                subPath = "string"
                volumeName = "string"
              }
            ]
          }
        ]
        initContainers = [
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
              cpu = "decimal-as-string"
              memory = "string"
            }
            volumeMounts = [
              {
                mountPath = "string"
                subPath = "string"
                volumeName = "string"
              }
            ]
          }
        ]
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
        serviceBinds = [
          {
            name = "string"
            serviceId = "string"
          }
        ]
        terminationGracePeriodSeconds = int
        volumes = [
          {
            mountOptions = "string"
            name = "string"
            secrets = [
              {
                path = "string"
                secretRef = "string"
              }
            ]
            storageName = "string"
            storageType = "string"
          }
        ]
      }
      workloadProfileName = "string"
    }
    extendedLocation = {
      name = "string"
      type = "CustomLocation"
    }
    managedBy = "string"
  })
}

```

## Microsoft.App/containerApps/authConfigs@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/containerApps/authConfigs@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      globalValidation = {
        excludedPaths = [
          "string"
        ]
        redirectToProvider = "string"
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
      }
      platform = {
        enabled = bool
        runtimeVersion = "string"
      }
    }
  })
}

```

## Microsoft.App/containerApps/sourcecontrols@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/containerApps/sourcecontrols@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      branch = "string"
      githubActionConfiguration = {
        azureCredentials = {
          clientId = "string"
          clientSecret = "string"
          kind = "string"
          subscriptionId = "string"
          tenantId = "string"
        }
        contextPath = "string"
        githubPersonalAccessToken = "string"
        image = "string"
        os = "string"
        publishType = "string"
        registryInfo = {
          registryPassword = "string"
          registryUrl = "string"
          registryUserName = "string"
        }
        runtimeStack = "string"
        runtimeVersion = "string"
      }
      repoUrl = "string"
    }
  })
}

```

## Microsoft.App/jobs@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/jobs@2023-05-01"
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
      configuration = {
        eventTriggerConfig = {
          parallelism = int
          replicaCompletionCount = int
          scale = {
            maxExecutions = int
            minExecutions = int
            pollingInterval = int
            rules = [
              {
                auth = [
                  {
                    secretRef = "string"
                    triggerParameter = "string"
                  }
                ]
                name = "string"
                type = "string"
              }
            ]
          }
        }
        manualTriggerConfig = {
          parallelism = int
          replicaCompletionCount = int
        }
        registries = [
          {
            identity = "string"
            passwordSecretRef = "string"
            server = "string"
            username = "string"
          }
        ]
        replicaRetryLimit = int
        replicaTimeout = int
        scheduleTriggerConfig = {
          cronExpression = "string"
          parallelism = int
          replicaCompletionCount = int
        }
        secrets = [
          {
            identity = "string"
            keyVaultUrl = "string"
            name = "string"
            value = "string"
          }
        ]
        triggerType = "string"
      }
      environmentId = "string"
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
            probes = [
              {
                failureThreshold = int
                httpGet = {
                  host = "string"
                  httpHeaders = [
                    {
                      name = "string"
                      value = "string"
                    }
                  ]
                  path = "string"
                  port = int
                  scheme = "string"
                }
                initialDelaySeconds = int
                periodSeconds = int
                successThreshold = int
                tcpSocket = {
                  host = "string"
                  port = int
                }
                terminationGracePeriodSeconds = int
                timeoutSeconds = int
                type = "string"
              }
            ]
            resources = {
              cpu = "decimal-as-string"
              memory = "string"
            }
            volumeMounts = [
              {
                mountPath = "string"
                subPath = "string"
                volumeName = "string"
              }
            ]
          }
        ]
        initContainers = [
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
              cpu = "decimal-as-string"
              memory = "string"
            }
            volumeMounts = [
              {
                mountPath = "string"
                subPath = "string"
                volumeName = "string"
              }
            ]
          }
        ]
        volumes = [
          {
            mountOptions = "string"
            name = "string"
            secrets = [
              {
                path = "string"
                secretRef = "string"
              }
            ]
            storageName = "string"
            storageType = "string"
          }
        ]
      }
      workloadProfileName = "string"
    }
  })
}

```

## Microsoft.App/managedEnvironments@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/managedEnvironments@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      appLogsConfiguration = {
        destination = "string"
        logAnalyticsConfiguration = {
          customerId = "string"
          sharedKey = "string"
        }
      }
      customDomainConfiguration = {
        certificatePassword = "string"
        dnsSuffix = "string"
      }
      daprAIConnectionString = "string"
      daprAIInstrumentationKey = "string"
      daprConfiguration = {}
      infrastructureResourceGroup = "string"
      kedaConfiguration = {}
      peerAuthentication = {
        mtls = {
          enabled = bool
        }
      }
      vnetConfiguration = {
        dockerBridgeCidr = "string"
        infrastructureSubnetId = "string"
        internal = bool
        platformReservedCidr = "string"
        platformReservedDnsIP = "string"
      }
      workloadProfiles = [
        {
          maximumCount = int
          minimumCount = int
          name = "string"
          workloadProfileType = "string"
        }
      ]
      zoneRedundant = bool
    }
    kind = "string"
  })
}

```

## Microsoft.App/managedEnvironments/certificates@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/managedEnvironments/certificates@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      password = "string"
    }
  })
}

```

## Microsoft.App/managedEnvironments/daprComponents@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/managedEnvironments/daprComponents@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      componentType = "string"
      ignoreErrors = bool
      initTimeout = "string"
      metadata = [
        {
          name = "string"
          secretRef = "string"
          value = "string"
        }
      ]
      scopes = [
        "string"
      ]
      secrets = [
        {
          identity = "string"
          keyVaultUrl = "string"
          name = "string"
          value = "string"
        }
      ]
      secretStoreComponent = "string"
      version = "string"
    }
  })
}

```

## Microsoft.App/managedEnvironments/managedCertificates@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/managedEnvironments/managedCertificates@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      domainControlValidation = "string"
      subjectName = "string"
    }
  })
}

```

## Microsoft.App/managedEnvironments/storages@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.App/managedEnvironments/storages@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureFile = {
        accessMode = "string"
        accountKey = "string"
        accountName = "string"
        shareName = "string"
      }
    }
  })
}

```

