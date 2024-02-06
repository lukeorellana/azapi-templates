## Microsoft.SecurityInsights/alertRules@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/alertRules@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see alertRules objects
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/alertRules/actions@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/alertRules/actions@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      logicAppResourceId = "string"
      triggerUri = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/automationRules@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/automationRules@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actions = [
        {
          order = int
          actionType = "string"
          // For remaining properties, see AutomationRuleAction objects
        }
      ]
      displayName = "string"
      order = int
      triggeringLogic = {
        conditions = [
          {
            conditionType = "string"
            // For remaining properties, see AutomationRuleCondition objects
          }
        ]
        expirationTimeUtc = "string"
        isEnabled = bool
        triggersOn = "string"
        triggersWhen = "string"
      }
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/bookmarks@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/bookmarks@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      created = "string"
      createdBy = {
        objectId = "string"
      }
      displayName = "string"
      entityMappings = [
        {
          entityType = "string"
          fieldMappings = [
            {
              identifier = "string"
              value = "string"
            }
          ]
        }
      ]
      eventTime = "string"
      incidentInfo = {
        incidentId = "string"
        relationName = "string"
        severity = "string"
        title = "string"
      }
      labels = [
        "string"
      ]
      notes = "string"
      query = "string"
      queryEndTime = "string"
      queryResult = "string"
      queryStartTime = "string"
      tactics = [
        "string"
      ]
      techniques = [
        "string"
      ]
      updated = "string"
      updatedBy = {
        objectId = "string"
      }
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/bookmarks/relations@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/bookmarks/relations@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      relatedResourceId = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/cases@2019-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/cases@2019-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      closedReasonText = "string"
      closeReason = "string"
      description = "string"
      endTimeUtc = "string"
      labels = [
        "string"
      ]
      owner = {
        objectId = "string"
      }
      severity = "string"
      startTimeUtc = "string"
      status = "string"
      title = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/cases/comments@2019-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/cases/comments@2019-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      message = "string"
    }
  })
}

```

## Microsoft.SecurityInsights/cases/relations@2019-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/cases/relations@2019-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      relationName = "string"
      sourceRelationNode = {
        etag = "string"
        relationAdditionalProperties = {}
        relationNodeId = "string"
      }
      targetRelationNode = {
        etag = "string"
        relationAdditionalProperties = {}
        relationNodeId = "string"
      }
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/dataConnectors@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/dataConnectors@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see dataConnectors objects
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/entityQueries@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/entityQueries@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see entityQueries objects
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/fileImports@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/fileImports@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentType = "string"
      importFile = {
        fileFormat = "string"
        fileName = "string"
        fileSize = int
      }
      ingestionMode = "string"
      source = "string"
    }
  })
}

```

## Microsoft.SecurityInsights/incidents@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/incidents@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      classification = "string"
      classificationComment = "string"
      classificationReason = "string"
      description = "string"
      firstActivityTimeUtc = "string"
      labels = [
        {
          labelName = "string"
        }
      ]
      lastActivityTimeUtc = "string"
      owner = {
        assignedTo = "string"
        email = "string"
        objectId = "string"
        ownerType = "string"
        userPrincipalName = "string"
      }
      providerIncidentId = "string"
      providerName = "string"
      severity = "string"
      status = "string"
      teamInformation = {}
      title = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/incidents/comments@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/incidents/comments@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      message = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/incidents/relations@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/incidents/relations@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      relatedResourceId = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/incidents/tasks@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/incidents/tasks@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      createdBy = {
        email = "string"
        name = "string"
        objectId = "string"
        userPrincipalName = "string"
      }
      description = "string"
      lastModifiedBy = {
        email = "string"
        name = "string"
        objectId = "string"
        userPrincipalName = "string"
      }
      status = "string"
      title = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/metadata@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/metadata@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      author = {
        email = "string"
        link = "string"
        name = "string"
      }
      categories = {
        domains = [
          "string"
        ]
        verticals = [
          "string"
        ]
      }
      contentId = "string"
      contentSchemaVersion = "string"
      customVersion = "string"
      dependencies = {
        contentId = "string"
        criteria = [
          {
          kind = "string"
          name = "string"
          operator = "string"
          version = "string"
      }
      firstPublishDate = "string"
      icon = "string"
      kind = "string"
      lastPublishDate = "string"
      parentId = "string"
      previewImages = [
        "string"
      ]
      previewImagesDark = [
        "string"
      ]
      providers = [
        "string"
      ]
      source = {
        kind = "string"
        name = "string"
        sourceId = "string"
      }
      support = {
        email = "string"
        link = "string"
        name = "string"
        tier = "string"
      }
      threatAnalysisTactics = [
        "string"
      ]
      threatAnalysisTechniques = [
        "string"
      ]
      version = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/onboardingStates@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/onboardingStates@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customerManagedKey = bool
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/securityMLAnalyticsSettings@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/securityMLAnalyticsSettings@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see securityMLAnalyticsSettings objects
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/settings@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/settings@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see settings objects
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/sourcecontrols@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/sourcecontrols@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentTypes = [
        "string"
      ]
      description = "string"
      displayName = "string"
      id = "string"
      lastDeploymentInfo = {
        deployment = {
          deploymentId = "string"
          deploymentLogsUrl = "string"
          deploymentResult = "string"
          deploymentState = "string"
          deploymentTime = "string"
        }
        deploymentFetchStatus = "string"
        message = "string"
      }
      repository = {
        branch = "string"
        deploymentLogsUrl = "string"
        displayUrl = "string"
        pathMapping = [
          {
            contentType = "string"
            path = "string"
          }
        ]
        url = "string"
      }
      repositoryResourceInfo = {
        azureDevOpsResourceInfo = {
          pipelineId = "string"
          serviceConnectionId = "string"
        }
        gitHubResourceInfo = {
          appInstallationId = "string"
        }
        webhook = {
          rotateWebhookSecret = bool
          webhookId = "string"
          webhookSecretUpdateTime = "string"
          webhookUrl = "string"
        }
      }
      repoType = "string"
      version = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/threatIntelligence/indicators@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/threatIntelligence/indicators@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      confidence = int
      created = "string"
      createdByRef = "string"
      defanged = bool
      description = "string"
      displayName = "string"
      extensions = {}
      externalId = "string"
      externalLastUpdatedTimeUtc = "string"
      externalReferences = [
        {
          description = "string"
          externalId = "string"
          hashes = {}
          sourceName = "string"
          url = "string"
        }
      ]
      granularMarkings = [
        {
          language = "string"
          markingRef = int
          selectors = [
            "string"
          ]
        }
      ]
      indicatorTypes = [
        "string"
      ]
      killChainPhases = [
        {
          killChainName = "string"
          phaseName = "string"
        }
      ]
      labels = [
        "string"
      ]
      language = "string"
      lastUpdatedTimeUtc = "string"
      modified = "string"
      objectMarkingRefs = [
        "string"
      ]
      parsedPattern = [
        {
          patternTypeKey = "string"
          patternTypeValues = [
            {
              value = "string"
              valueType = "string"
            }
          ]
        }
      ]
      pattern = "string"
      patternType = "string"
      patternVersion = "string"
      revoked = bool
      source = "string"
      threatIntelligenceTags = [
        "string"
      ]
      threatTypes = [
        "string"
      ]
      validFrom = "string"
      validUntil = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/watchlists@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/watchlists@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentType = "string"
      created = "string"
      createdBy = {
        objectId = "string"
      }
      defaultDuration = "string"
      description = "string"
      displayName = "string"
      isDeleted = bool
      itemsSearchKey = "string"
      labels = [
        "string"
      ]
      numberOfLinesToSkip = int
      provider = "string"
      rawContent = "string"
      source = "string"
      sourceType = "string"
      tenantId = "string"
      updated = "string"
      updatedBy = {
        objectId = "string"
      }
      uploadStatus = "string"
      watchlistAlias = "string"
      watchlistId = "string"
      watchlistType = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.SecurityInsights/watchlists/watchlistItems@2023-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SecurityInsights/watchlists/watchlistItems@2023-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      created = "string"
      createdBy = {
        objectId = "string"
      }
      entityMapping = {}
      isDeleted = bool
      itemsKeyValue = {}
      tenantId = "string"
      updated = "string"
      updatedBy = {
        objectId = "string"
      }
      watchlistItemId = "string"
      watchlistItemType = "string"
    }
    etag = "string"
  })
}

```

