## Microsoft.CustomerInsights/hubs@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs@2017-04-26"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      hubBillingInfo = {
        maxUnits = int
        minUnits = int
        skuName = "string"
      }
      tenantFeatures = int
    }
  })
}

```

## Microsoft.CustomerInsights/hubs/authorizationPolicies@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/authorizationPolicies@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      permissions = [
        "string"
      ]
      primaryKey = "string"
      secondaryKey = "string"
    }
  })
}

```

## Microsoft.CustomerInsights/hubs/connectors@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/connectors@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectorName = "string"
      connectorProperties = {}
      connectorType = "string"
      description = "string"
      displayName = "string"
      isInternal = bool
    }
  })
}

```

## Microsoft.CustomerInsights/hubs/connectors/mappings@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/connectors/mappings@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectorType = "string"
      description = "string"
      displayName = "string"
      entityType = "string"
      entityTypeName = "string"
      mappingProperties = {
        availability = {
          frequency = "string"
          interval = int
        }
        completeOperation = {
          completionOperationType = "string"
          destinationFolder = "string"
        }
        errorManagement = {
          errorLimit = int
          errorManagementType = "string"
        }
        fileFilter = "string"
        folderPath = "string"
        format = {
          acceptLanguage = "string"
          arraySeparator = "string"
          columnDelimiter = "string"
          formatType = "TextFormat"
          quoteCharacter = "string"
          quoteEscapeCharacter = "string"
        }
        hasHeader = bool
        structure = [
          {
            columnName = "string"
            customFormatSpecifier = "string"
            isEncrypted = bool
            propertyName = "string"
          }
        ]
      }
    }
  })
}

```

## Microsoft.CustomerInsights/hubs/interactions@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/interactions@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiEntitySetName = "string"
      attributes = {}
      defaultDataSource = {}
      description = {}
      displayName = {}
      entityType = "string"
      fields = [
        {
          arrayValueSeparator = "string"
          enumValidValues = [
            {
              localizedValueNames = {}
              value = int
            }
          ]
          fieldName = "string"
          fieldType = "string"
          isArray = bool
          isAvailableInGraph = bool
          isEnum = bool
          isFlagEnum = bool
          isImage = bool
          isLocalizedString = bool
          isName = bool
          isRequired = bool
          maxLength = int
          propertyId = "string"
          schemaItemPropLink = "string"
        }
      ]
      idPropertyNames = [
        "string"
      ]
      instancesCount = int
      isActivity = bool
      largeImage = "string"
      localizedAttributes = {}
      mediumImage = "string"
      participantProfiles = [
        {
          description = {}
          displayName = {}
          participantName = "string"
          participantPropertyReferences = [
            {
              sourcePropertyName = "string"
              targetPropertyName = "string"
            }
          ]
          profileTypeName = "string"
          role = "string"
        }
      ]
      primaryParticipantProfilePropertyName = "string"
      schemaItemTypeLink = "string"
      smallImage = "string"
      timestampFieldName = "string"
      typeName = "string"
    }
  })
}

```

## Microsoft.CustomerInsights/hubs/kpi@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/kpi@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aliases = [
        {
          aliasName = "string"
          expression = "string"
        }
      ]
      calculationWindow = "string"
      calculationWindowFieldName = "string"
      description = {}
      displayName = {}
      entityType = "string"
      entityTypeName = "string"
      expression = "string"
      extracts = [
        {
          expression = "string"
          extractName = "string"
        }
      ]
      filter = "string"
      function = "string"
      groupBy = [
        "string"
      ]
      thresHolds = {
        increasingKpi = bool
        lowerLimit = int
        upperLimit = int
      }
      unit = "string"
    }
  })
}

```

## Microsoft.CustomerInsights/hubs/links@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/links@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = {}
      displayName = {}
      mappings = [
        {
          linkType = "string"
          sourcePropertyName = "string"
          targetPropertyName = "string"
        }
      ]
      operationType = "string"
      participantPropertyReferences = [
        {
          sourcePropertyName = "string"
          targetPropertyName = "string"
        }
      ]
      referenceOnly = bool
      sourceEntityType = "string"
      sourceEntityTypeName = "string"
      targetEntityType = "string"
      targetEntityTypeName = "string"
    }
  })
}

```

## Microsoft.CustomerInsights/hubs/predictions@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/predictions@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoAnalyze = bool
      description = {}
      displayName = {}
      grades = [
        {
          gradeName = "string"
          maxScoreThreshold = int
          minScoreThreshold = int
        }
      ]
      involvedInteractionTypes = [
        "string"
      ]
      involvedKpiTypes = [
        "string"
      ]
      involvedRelationships = [
        "string"
      ]
      mappings = {
        grade = "string"
        reason = "string"
        score = "string"
      }
      negativeOutcomeExpression = "string"
      positiveOutcomeExpression = "string"
      predictionName = "string"
      primaryProfileType = "string"
      scopeExpression = "string"
      scoreLabel = "string"
    }
  })
}

```

## Microsoft.CustomerInsights/hubs/profiles@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/profiles@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      apiEntitySetName = "string"
      attributes = {}
      description = {}
      displayName = {}
      entityType = "string"
      fields = [
        {
          arrayValueSeparator = "string"
          enumValidValues = [
            {
              localizedValueNames = {}
              value = int
            }
          ]
          fieldName = "string"
          fieldType = "string"
          isArray = bool
          isAvailableInGraph = bool
          isEnum = bool
          isFlagEnum = bool
          isImage = bool
          isLocalizedString = bool
          isName = bool
          isRequired = bool
          maxLength = int
          propertyId = "string"
          schemaItemPropLink = "string"
        }
      ]
      instancesCount = int
      largeImage = "string"
      localizedAttributes = {}
      mediumImage = "string"
      schemaItemTypeLink = "string"
      smallImage = "string"
      strongIds = [
        {
          description = {}
          displayName = {}
          keyPropertyNames = [
            "string"
          ]
          strongIdName = "string"
        }
      ]
      timestampFieldName = "string"
      typeName = "string"
    }
  })
}

```

## Microsoft.CustomerInsights/hubs/relationshipLinks@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/relationshipLinks@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = {}
      displayName = {}
      interactionType = "string"
      mappings = [
        {
          interactionFieldName = "string"
          linkType = "string"
          relationshipFieldName = "string"
        }
      ]
      profilePropertyReferences = [
        {
          interactionPropertyName = "string"
          profilePropertyName = "string"
        }
      ]
      relatedProfilePropertyReferences = [
        {
          interactionPropertyName = "string"
          profilePropertyName = "string"
        }
      ]
      relationshipName = "string"
    }
  })
}

```

## Microsoft.CustomerInsights/hubs/relationships@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/relationships@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cardinality = "string"
      description = {}
      displayName = {}
      expiryDateTimeUtc = "string"
      fields = [
        {
          arrayValueSeparator = "string"
          enumValidValues = [
            {
              localizedValueNames = {}
              value = int
            }
          ]
          fieldName = "string"
          fieldType = "string"
          isArray = bool
          isAvailableInGraph = bool
          isEnum = bool
          isFlagEnum = bool
          isImage = bool
          isLocalizedString = bool
          isName = bool
          isRequired = bool
          maxLength = int
          propertyId = "string"
          schemaItemPropLink = "string"
        }
      ]
      lookupMappings = [
        {
          fieldMappings = [
            {
              profileFieldName = "string"
              relatedProfileKeyProperty = "string"
            }
          ]
        }
      ]
      profileType = "string"
      relatedProfileType = "string"
    }
  })
}

```

## Microsoft.CustomerInsights/hubs/roleAssignments@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/roleAssignments@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      conflationPolicies = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      connectors = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      description = {}
      displayName = {}
      interactions = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      kpis = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      links = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      principals = [
        {
          principalId = "string"
          principalMetadata = {}
          principalType = "string"
        }
      ]
      profiles = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      relationshipLinks = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      relationships = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      role = "string"
      roleAssignments = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      sasPolicies = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      segments = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      views = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
      widgetTypes = {
        elements = [
          "string"
        ]
        exceptions = [
          "string"
        ]
      }
    }
  })
}

```

## Microsoft.CustomerInsights/hubs/views@2017-04-26

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomerInsights/hubs/views@2017-04-26"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      definition = "string"
      displayName = {}
      userId = "string"
    }
  })
}

```

