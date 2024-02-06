## Microsoft.Insights/actionGroups@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/actionGroups@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      armRoleReceivers = [
        {
          name = "string"
          roleId = "string"
          useCommonAlertSchema = bool
        }
      ]
      automationRunbookReceivers = [
        {
          automationAccountId = "string"
          isGlobalRunbook = bool
          name = "string"
          runbookName = "string"
          serviceUri = "string"
          useCommonAlertSchema = bool
          webhookResourceId = "string"
        }
      ]
      azureAppPushReceivers = [
        {
          emailAddress = "string"
          name = "string"
        }
      ]
      azureFunctionReceivers = [
        {
          functionAppResourceId = "string"
          functionName = "string"
          httpTriggerUrl = "string"
          name = "string"
          useCommonAlertSchema = bool
        }
      ]
      emailReceivers = [
        {
          emailAddress = "string"
          name = "string"
          useCommonAlertSchema = bool
        }
      ]
      enabled = bool
      eventHubReceivers = [
        {
          eventHubName = "string"
          eventHubNameSpace = "string"
          name = "string"
          subscriptionId = "string"
          tenantId = "string"
          useCommonAlertSchema = bool
        }
      ]
      groupShortName = "string"
      itsmReceivers = [
        {
          connectionId = "string"
          name = "string"
          region = "string"
          ticketConfiguration = "string"
          workspaceId = "string"
        }
      ]
      logicAppReceivers = [
        {
          callbackUrl = "string"
          name = "string"
          resourceId = "string"
          useCommonAlertSchema = bool
        }
      ]
      smsReceivers = [
        {
          countryCode = "string"
          name = "string"
          phoneNumber = "string"
        }
      ]
      voiceReceivers = [
        {
          countryCode = "string"
          name = "string"
          phoneNumber = "string"
        }
      ]
      webhookReceivers = [
        {
          identifierUri = "string"
          name = "string"
          objectId = "string"
          serviceUri = "string"
          tenantId = "string"
          useAadAuth = bool
          useCommonAlertSchema = bool
        }
      ]
    }
  })
}

```

## Microsoft.Insights/activityLogAlerts@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/activityLogAlerts@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      actions = {
        actionGroups = [
          {
            actionGroupId = "string"
            actionProperties = {}
            webhookProperties = {}
          }
        ]
      }
      condition = {
        allOf = [
          {
            anyOf = [
              {
                containsAny = [
                  "string"
                ]
                equals = "string"
                field = "string"
              }
            ]
            containsAny = [
              "string"
            ]
            equals = "string"
            field = "string"
          }
        ]
      }
      description = "string"
      enabled = bool
      scopes = [
        "string"
      ]
      tenantScope = "string"
    }
  })
}

```

## Microsoft.Insights/alertrules@2016-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/alertrules@2016-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      action = {
        odata.type = "string"
        // For remaining properties, see RuleAction objects
      }
      actions = [
        {
          odata.type = "string"
          // For remaining properties, see RuleAction objects
        }
      ]
      condition = {
        dataSource = {
          legacyResourceId = "string"
          metricNamespace = "string"
          resourceLocation = "string"
          resourceUri = "string"
          odata.type = "string"
          // For remaining properties, see RuleDataSource objects
        }
        odata.type = "string"
        // For remaining properties, see RuleCondition objects
      }
      description = "string"
      isEnabled = bool
      name = "string"
      provisioningState = "string"
    }
  })
}

```

## Microsoft.Insights/autoscalesettings@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/autoscalesettings@2022-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enabled = bool
      name = "string"
      notifications = [
        {
          email = {
            customEmails = [
              "string"
            ]
            sendToSubscriptionAdministrator = bool
            sendToSubscriptionCoAdministrators = bool
          }
          operation = "Scale"
          webhooks = [
            {
              properties = {}
              serviceUri = "string"
            }
          ]
        }
      ]
      predictiveAutoscalePolicy = {
        scaleLookAheadTime = "string"
        scaleMode = "string"
      }
      profiles = [
        {
          capacity = {
            default = "string"
            maximum = "string"
            minimum = "string"
          }
          fixedDate = {
            end = "string"
            start = "string"
            timeZone = "string"
          }
          name = "string"
          recurrence = {
            frequency = "string"
            schedule = {
              days = [
                "string"
              ]
              hours = [
                int
              ]
              minutes = [
                int
              ]
              timeZone = "string"
            }
          }
          rules = [
            {
              metricTrigger = {
                dimensions = [
                  {
                    DimensionName = "string"
                    Operator = "string"
                    Values = [
                      "string"
                    ]
                  }
                ]
                dividePerInstance = bool
                metricName = "string"
                metricNamespace = "string"
                metricResourceLocation = "string"
                metricResourceUri = "string"
                operator = "string"
                statistic = "string"
                threshold = int
                timeAggregation = "string"
                timeGrain = "string"
                timeWindow = "string"
              }
              scaleAction = {
                cooldown = "string"
                direction = "string"
                type = "string"
                value = "string"
              }
            }
          ]
        }
      ]
      targetResourceLocation = "string"
      targetResourceUri = "string"
    }
  })
}

```

## Microsoft.Insights/components@2020-02-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/components@2020-02-02"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      Application_Type = "string"
      DisableIpMasking = bool
      DisableLocalAuth = bool
      Flow_Type = "Bluefield"
      ForceCustomerStorageForProfiler = bool
      HockeyAppId = "string"
      ImmediatePurgeDataOn30Days = bool
      IngestionMode = "string"
      publicNetworkAccessForIngestion = "string"
      publicNetworkAccessForQuery = "string"
      Request_Source = "rest"
      RetentionInDays = int
      SamplingPercentage = "decimal-as-string"
      WorkspaceResourceId = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.Insights/components/exportconfiguration@2015-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/components/exportconfiguration@2015-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    DestinationAccountId = "string"
    DestinationAddress = "string"
    DestinationStorageLocationId = "string"
    DestinationStorageSubscriptionId = "string"
    DestinationType = "string"
    IsEnabled = "string"
    NotificationQueueEnabled = "string"
    NotificationQueueUri = "string"
    RecordTypes = "string"
  })
}

```

## Microsoft.Insights/components/favorites@2015-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/components/favorites@2015-05-01"
  name = "string"
  parent_id = "string"
  Tags = [
    "string"
  ]
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    Category = "string"
    Config = "string"
    FavoriteType = "string"
    IsGeneratedFromTemplate = bool
    SourceType = "string"
    Version = "string"
  })
}

```

## Microsoft.Insights/components/ProactiveDetectionConfigs@2018-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/components/ProactiveDetectionConfigs@2018-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      CustomEmails = [
        "string"
      ]
      Enabled = bool
      RuleDefinitions = {
        Description = "string"
        DisplayName = "string"
        HelpUrl = "string"
        IsEnabledByDefault = bool
        IsHidden = bool
        IsInPreview = bool
        Name = "string"
        SupportsEmailNotifications = bool
      }
      SendEmailsToSubscriptionOwners = bool
    }
  })
}

```

## Microsoft.Insights/dataCollectionEndpoints@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/dataCollectionEndpoints@2022-06-01"
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
      configurationAccess = {}
      description = "string"
      immutableId = "string"
      logsIngestion = {}
      metricsIngestion = {}
      networkAcls = {
        publicNetworkAccess = "string"
      }
    }
    kind = "string"
  })
}

```

## Microsoft.Insights/dataCollectionRuleAssociations@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/dataCollectionRuleAssociations@2022-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataCollectionEndpointId = "string"
      dataCollectionRuleId = "string"
      description = "string"
    }
  })
}

```

## Microsoft.Insights/dataCollectionRules@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/dataCollectionRules@2022-06-01"
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
      dataCollectionEndpointId = "string"
      dataFlows = [
        {
          builtInTransform = "string"
          destinations = [
            "string"
          ]
          outputStream = "string"
          streams = [
            "string"
          ]
          transformKql = "string"
        }
      ]
      dataSources = {
        dataImports = {
          eventHub = {
            consumerGroup = "string"
            name = "string"
            stream = "string"
          }
        }
        extensions = [
          {
            extensionName = "string"
            inputDataSources = [
              "string"
            ]
            name = "string"
            streams = [
              "string"
            ]
          }
        ]
        iisLogs = [
          {
            logDirectories = [
              "string"
            ]
            name = "string"
            streams = [
              "string"
            ]
          }
        ]
        logFiles = [
          {
            filePatterns = [
              "string"
            ]
            format = "text"
            name = "string"
            settings = {
              text = {
                recordStartTimestampFormat = "string"
              }
            }
            streams = [
              "string"
            ]
          }
        ]
        performanceCounters = [
          {
            counterSpecifiers = [
              "string"
            ]
            name = "string"
            samplingFrequencyInSeconds = int
            streams = [
              "string"
            ]
          }
        ]
        platformTelemetry = [
          {
            name = "string"
            streams = [
              "string"
            ]
          }
        ]
        prometheusForwarder = [
          {
            labelIncludeFilter = {}
            name = "string"
            streams = "Microsoft-PrometheusMetrics"
          }
        ]
        syslog = [
          {
            facilityNames = [
              "string"
            ]
            logLevels = [
              "string"
            ]
            name = "string"
            streams = "Microsoft-Syslog"
          }
        ]
        windowsEventLogs = [
          {
            name = "string"
            streams = [
              "string"
            ]
            xPathQueries = [
              "string"
            ]
          }
        ]
        windowsFirewallLogs = [
          {
            name = "string"
            streams = [
              "string"
            ]
          }
        ]
      }
      description = "string"
      destinations = {
        azureMonitorMetrics = {
          name = "string"
        }
        eventHubs = [
          {
            eventHubResourceId = "string"
            name = "string"
          }
        ]
        eventHubsDirect = [
          {
            eventHubResourceId = "string"
            name = "string"
          }
        ]
        logAnalytics = [
          {
            name = "string"
            workspaceResourceId = "string"
          }
        ]
        monitoringAccounts = [
          {
            accountResourceId = "string"
            name = "string"
          }
        ]
        storageAccounts = [
          {
            containerName = "string"
            name = "string"
            storageAccountResourceId = "string"
          }
        ]
        storageBlobsDirect = [
          {
            containerName = "string"
            name = "string"
            storageAccountResourceId = "string"
          }
        ]
        storageTablesDirect = [
          {
            name = "string"
            storageAccountResourceId = "string"
            tableName = "string"
          }
        ]
      }
      streamDeclarations = {}
    }
    kind = "string"
  })
}

```

## Microsoft.Insights/diagnosticSettings@2021-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/diagnosticSettings@2021-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      eventHubAuthorizationRuleId = "string"
      eventHubName = "string"
      logAnalyticsDestinationType = "string"
      logs = [
        {
          category = "string"
          categoryGroup = "string"
          enabled = bool
          retentionPolicy = {
            days = int
            enabled = bool
          }
        }
      ]
      marketplacePartnerId = "string"
      metrics = [
        {
          category = "string"
          enabled = bool
          retentionPolicy = {
            days = int
            enabled = bool
          }
          timeGrain = "string"
        }
      ]
      serviceBusRuleId = "string"
      storageAccountId = "string"
      workspaceId = "string"
    }
  })
}

```

## Microsoft.Insights/logprofiles@2016-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/logprofiles@2016-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      categories = [
        "string"
      ]
      locations = [
        "string"
      ]
      retentionPolicy = {
        days = int
        enabled = bool
      }
      serviceBusRuleId = "string"
      storageAccountId = "string"
    }
  })
}

```

## Microsoft.Insights/metricAlerts@2018-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/metricAlerts@2018-03-01"
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
        {
          actionGroupId = "string"
          webHookProperties = {}
        }
      ]
      autoMitigate = bool
      criteria = {
        odata.type = "string"
        // For remaining properties, see MetricAlertCriteria objects
      }
      description = "string"
      enabled = bool
      evaluationFrequency = "string"
      scopes = [
        "string"
      ]
      severity = int
      targetResourceRegion = "string"
      targetResourceType = "string"
      windowSize = "string"
    }
  })
}

```

## Microsoft.Insights/myWorkbooks@2021-03-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/myWorkbooks@2021-03-08"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    identity_ids = []
  body = jsonencode({
    properties = {
      category = "string"
      displayName = "string"
      serializedData = "string"
      sourceId = "string"
      storageUri = "string"
      tags = [
        "string"
      ]
      version = "string"
    }
    kind = "string"
    etag = {}
      type =  "UserAssigned"
    }
  })
}

```

## Microsoft.Insights/privateLinkScopes/privateEndpointConnections@2021-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/privateLinkScopes/privateEndpointConnections@2021-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.Insights/privateLinkScopes/scopedResources@2021-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/privateLinkScopes/scopedResources@2021-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedResourceId = "string"
    }
  })
}

```

## Microsoft.Insights/scheduledQueryRules@2023-03-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/scheduledQueryRules@2023-03-15-preview"
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
      actions = {
        actionGroups = [
          "string"
        ]
        actionProperties = {}
        customProperties = {}
      }
      autoMitigate = bool
      checkWorkspaceAlertsStorageConfigured = bool
      criteria = {
        allOf = [
          {
            dimensions = [
              {
                name = "string"
                operator = "string"
                values = [
                  "string"
                ]
              }
            ]
            failingPeriods = {
              minFailingPeriodsToAlert = int
              numberOfEvaluationPeriods = int
            }
            metricMeasureColumn = "string"
            metricName = "string"
            operator = "string"
            query = "string"
            resourceIdColumn = "string"
            threshold = int
            timeAggregation = "string"
          }
        ]
      }
      description = "string"
      displayName = "string"
      enabled = bool
      evaluationFrequency = "string"
      muteActionsDuration = "string"
      overrideQueryTimeRange = "string"
      ruleResolveConfiguration = {
        autoResolved = bool
        timeToResolve = "string"
      }
      scopes = [
        "string"
      ]
      severity = int
      skipQueryValidation = bool
      targetResourceTypes = [
        "string"
      ]
      windowSize = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.Insights/webtests@2022-06-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/webtests@2022-06-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      Configuration = {
        WebTest = "string"
      }
      Description = "string"
      Enabled = bool
      Frequency = int
      Kind = "string"
      Locations = [
        {
          Id = "string"
        }
      ]
      Name = "string"
      Request = {
        FollowRedirects = bool
        Headers = [
          {
            key = "string"
            value = "string"
          }
        ]
        HttpVerb = "string"
        ParseDependentRequests = bool
        RequestBody = "string"
        RequestUrl = "string"
      }
      RetryEnabled = bool
      SyntheticMonitorId = "string"
      Timeout = int
      ValidationRules = {
        ContentValidation = {
          ContentMatch = "string"
          IgnoreCase = bool
          PassIfTextFound = bool
        }
        ExpectedHttpStatusCode = int
        IgnoreHttpStatusCode = bool
        SSLCertRemainingLifetimeCheck = int
        SSLCheck = bool
      }
    }
    kind = "string"
  })
}

```

## Microsoft.Insights/workbooks@2023-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/workbooks@2023-06-01"
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
      category = "string"
      description = "string"
      displayName = "string"
      serializedData = "string"
      sourceId = "string"
      storageUri = "string"
      tags = [
        "string"
      ]
      version = "string"
    }
    kind = "shared"
    etag = "string"
  })
}

```

## Microsoft.Insights/workbooktemplates@2020-11-20

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/workbooktemplates@2020-11-20"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      author = "string"
      galleries = [
        {
          category = "string"
          name = "string"
          order = int
          resourceType = "string"
          type = "string"
        }
      ]
      localized = {}
      priority = int
    }
  })
}

```

