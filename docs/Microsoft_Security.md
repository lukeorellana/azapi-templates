## Microsoft.Security/advancedThreatProtectionSettings@2019-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/advancedThreatProtectionSettings@2019-01-01"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isEnabled = bool
    }
  })
}

```

## Microsoft.Security/alertsSuppressionRules@2019-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/alertsSuppressionRules@2019-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alertType = "string"
      comment = "string"
      expirationDateUtc = "string"
      reason = "string"
      state = "string"
      suppressionAlertsScope = {
        allOf = [
          {
            field = "string"
          }
        ]
      }
    }
  })
}

```

## Microsoft.Security/apiCollections@2023-11-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/apiCollections@2023-11-15"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.Security/applications@2022-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/applications@2022-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      conditionSets = [ object ]
      description = "string"
      displayName = "string"
      sourceResourceType = "Assessments"
    }
  })
}

```

## Microsoft.Security/assessmentMetadata@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/assessmentMetadata@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      assessmentType = "string"
      categories = [
        "string"
      ]
      description = "string"
      displayName = "string"
      implementationEffort = "string"
      partnerData = {
        partnerName = "string"
        productName = "string"
        secret = "string"
      }
      plannedDeprecationDate = "string"
      preview = bool
      publishDates = {
        GA = "string"
        public = "string"
      }
      remediationDescription = "string"
      severity = "string"
      tactics = [
        "string"
      ]
      techniques = [
        "string"
      ]
      threats = [
        "string"
      ]
      userImpact = "string"
    }
  })
}

```

## Microsoft.Security/assessments@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/assessments@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      additionalData = {
        {customized property} = "string"
      }
      metadata = {
        assessmentType = "string"
        categories = [
          "string"
        ]
        description = "string"
        displayName = "string"
        implementationEffort = "string"
        partnerData = {
          partnerName = "string"
          productName = "string"
          secret = "string"
        }
        preview = bool
        remediationDescription = "string"
        severity = "string"
        threats = [
          "string"
        ]
        userImpact = "string"
      }
      partnersData = {
        partnerName = "string"
        secret = "string"
      }
      resourceDetails = {
        source = "string"
        // For remaining properties, see ResourceDetails objects
      }
      status = {
        cause = "string"
        code = "string"
        description = "string"
      }
    }
  })
}

```

## Microsoft.Security/assessments/governanceAssignments@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/assessments/governanceAssignments@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      additionalData = {
        ticketLink = "string"
        ticketNumber = int
        ticketStatus = "string"
      }
      governanceEmailNotification = {
        disableManagerEmailNotification = bool
        disableOwnerEmailNotification = bool
      }
      isGracePeriod = bool
      owner = "string"
      remediationDueDate = "string"
      remediationEta = {
        eta = "string"
        justification = "string"
      }
    }
  })
}

```

## Microsoft.Security/assignments@2021-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/assignments@2021-08-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalData = {
        exemptionCategory = "string"
      }
      assignedComponent = {
        key = "string"
      }
      assignedStandard = {
        id = "string"
      }
      description = "string"
      displayName = "string"
      effect = "string"
      expiresOn = "string"
      scope = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.Security/automations@2019-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/automations@2019-01-01-preview"
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
          actionType = "string"
          // For remaining properties, see AutomationAction objects
        }
      ]
      description = "string"
      isEnabled = bool
      scopes = [
        {
          description = "string"
          scopePath = "string"
        }
      ]
      sources = [
        {
          eventSource = "string"
          ruleSets = [
            {
              rules = [
                {
                  expectedValue = "string"
                  operator = "string"
                  propertyJPath = "string"
                  propertyType = "string"
                }
              ]
            }
          ]
        }
      ]
    }
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.Security/autoProvisioningSettings@2017-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/autoProvisioningSettings@2017-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoProvision = "string"
    }
  })
}

```

## Microsoft.Security/connectors@2020-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/connectors@2020-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationDetails = {
        grantedPermissions = [
          "string"
        ]
        authenticationType = "string"
        // For remaining properties, see AuthenticationDetailsProperties objects
      }
      hybridComputeSettings = {
        autoProvision = "string"
        proxyServer = {
          ip = "string"
          port = "string"
        }
        region = "string"
        resourceGroupName = "string"
        servicePrincipal = {
          applicationId = "string"
          secret = "string"
        }
      }
    }
  })
}

```

## Microsoft.Security/customAssessmentAutomations@2021-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/customAssessmentAutomations@2021-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      compressedQuery = "string"
      description = "string"
      displayName = "string"
      remediationDescription = "string"
      severity = "string"
      supportedCloud = "string"
    }
  })
}

```

## Microsoft.Security/customEntityStoreAssignments@2021-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/customEntityStoreAssignments@2021-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principal = "string"
    }
  })
}

```

## Microsoft.Security/defenderForStorageSettings@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/defenderForStorageSettings@2022-12-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isEnabled = bool
      malwareScanning = {
        onUpload = {
          capGBPerMonth = int
          isEnabled = bool
        }
        scanResultsEventGridTopicResourceId = "string"
      }
      overrideSubscriptionLevelSettings = bool
      sensitiveDataDiscovery = {
        isEnabled = bool
      }
    }
  })
}

```

## Microsoft.Security/deviceSecurityGroups@2019-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/deviceSecurityGroups@2019-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowlistRules = [
        {
          allowlistValues = [
            "string"
          ]
          isEnabled = bool
          ruleType = "string"
          // For remaining properties, see AllowlistCustomAlertRule objects
        }
      ]
      denylistRules = [
        {
          denylistValues = [
            "string"
          ]
          isEnabled = bool
          ruleType = "string"
        }
      ]
      thresholdRules = [
        {
          isEnabled = bool
          maxThreshold = int
          minThreshold = int
          ruleType = "string"
          // For remaining properties, see ThresholdCustomAlertRule objects
        }
      ]
      timeWindowRules = [
        {
          isEnabled = bool
          maxThreshold = int
          minThreshold = int
          timeWindowSize = "string"
          ruleType = "string"
          // For remaining properties, see TimeWindowCustomAlertRule objects
        }
      ]
    }
  })
}

```

## Microsoft.Security/governanceRules@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/governanceRules@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      conditionSets = [ object ]
      description = "string"
      displayName = "string"
      excludedScopes = [
        "string"
      ]
      governanceEmailNotification = {
        disableManagerEmailNotification = bool
        disableOwnerEmailNotification = bool
      }
      includeMemberScopes = bool
      isDisabled = bool
      isGracePeriod = bool
      metadata = {}
      ownerSource = {
        type = "string"
        value = "string"
      }
      remediationTimeframe = "string"
      rulePriority = int
      ruleType = "string"
      sourceResourceType = "Assessments"
    }
  })
}

```

## Microsoft.Security/informationProtectionPolicies@2017-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/informationProtectionPolicies@2017-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      informationTypes = {
        {customized property} = {
          custom = bool
          description = "string"
          displayName = "string"
          enabled = bool
          keywords = [
            {
              canBeNumeric = bool
              custom = bool
              excluded = bool
              pattern = "string"
            }
          ]
          order = int
          recommendedLabelId = "string"
        }
      }
      labels = {
        {customized property} = {
          description = "string"
          displayName = "string"
          enabled = bool
          order = int
          rank = "string"
        }
      }
    }
  })
}

```

## Microsoft.Security/iotSecuritySolutions@2019-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/iotSecuritySolutions@2019-08-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalWorkspaces = [
        {
          dataTypes = [
            "string"
          ]
          type = "Sentinel"
          workspace = "string"
        }
      ]
      disabledDataSources = "TwinData"
      displayName = "string"
      export = "RawEvents"
      iotHubs = [
        "string"
      ]
      recommendationsConfiguration = [
        {
          recommendationType = "string"
          status = "string"
        }
      ]
      status = "string"
      unmaskedIpLoggingStatus = "string"
      userDefinedResources = {
        query = "string"
        querySubscriptions = [
          "string"
        ]
      }
      workspace = "string"
    }
  })
}

```

## Microsoft.Security/locations/applicationWhitelistings@2020-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/locations/applicationWhitelistings@2020-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enforcementMode = "string"
      pathRecommendations = [
        {
          action = "string"
          common = bool
          configurationStatus = "string"
          fileType = "string"
          path = "string"
          publisherInfo = {
            binaryName = "string"
            productName = "string"
            publisherName = "string"
            version = "string"
          }
          type = "string"
          usernames = [
            {
              recommendationAction = "string"
              username = "string"
            }
          ]
          userSids = [
            "string"
          ]
        }
      ]
      protectionMode = {
        exe = "string"
        executable = "string"
        msi = "string"
        script = "string"
      }
      vmRecommendations = [
        {
          configurationStatus = "string"
          enforcementSupport = "string"
          recommendationAction = "string"
          resourceId = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Security/pricings@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/pricings@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      extensions = [
        {
          additionalExtensionProperties = {}
          isEnabled = "string"
          name = "string"
        }
      ]
      pricingTier = "string"
      subPlan = "string"
    }
  })
}

```

## Microsoft.Security/pricings/securityOperators@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/pricings/securityOperators@2023-01-01-preview"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.Security/securityConnectors@2023-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityConnectors@2023-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      environmentData = {
        environmentType = "string"
        // For remaining properties, see EnvironmentData objects
      }
      environmentName = "string"
      hierarchyIdentifier = "string"
      offerings = [
        {
          offeringType = "string"
          // For remaining properties, see CloudOffering objects
        }
      ]
    }
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.Security/securityConnectors/devops@2023-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityConnectors/devops@2023-09-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorization = {
        code = "string"
      }
      autoDiscovery = "string"
      provisioningState = "string"
      topLevelInventoryList = [
        "string"
      ]
    }
  })
}

```

## Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs@2023-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs@2023-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actionableRemediation = {
        branchConfiguration = {
          annotateDefaultBranch = "string"
          branchNames = [
            "string"
          ]
        }
        categoryConfigurations = [
          {
            category = "string"
            minimumSeverityLevel = "string"
          }
        ]
        inheritFromParentState = "string"
        state = "string"
      }
      onboardingState = "string"
      provisioningState = "string"
    }
  })
}

```

## Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects@2023-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects@2023-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actionableRemediation = {
        branchConfiguration = {
          annotateDefaultBranch = "string"
          branchNames = [
            "string"
          ]
        }
        categoryConfigurations = [
          {
            category = "string"
            minimumSeverityLevel = "string"
          }
        ]
        inheritFromParentState = "string"
        state = "string"
      }
      onboardingState = "string"
      parentOrgName = "string"
      provisioningState = "string"
    }
  })
}

```

## Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects/repos@2023-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects/repos@2023-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actionableRemediation = {
        branchConfiguration = {
          annotateDefaultBranch = "string"
          branchNames = [
            "string"
          ]
        }
        categoryConfigurations = [
          {
            category = "string"
            minimumSeverityLevel = "string"
          }
        ]
        inheritFromParentState = "string"
        state = "string"
      }
      onboardingState = "string"
      parentOrgName = "string"
      parentProjectName = "string"
      provisioningState = "string"
    }
  })
}

```

## Microsoft.Security/securityContacts@2020-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/securityContacts@2020-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alertNotifications = {
        minimalSeverity = "string"
        state = "string"
      }
      emails = "string"
      notificationsByRole = {
        roles = [
          "string"
        ]
        state = "string"
      }
      phone = "string"
    }
  })
}

```

## Microsoft.Security/sensitivitySettings@2023-02-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/sensitivitySettings@2023-02-15-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    sensitiveInfoTypesIds = [
      "string"
    ]
    sensitivityThresholdLabelId = "string"
    sensitivityThresholdLabelOrder = int
  })
}

```

## Microsoft.Security/serverVulnerabilityAssessments@2020-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/serverVulnerabilityAssessments@2020-01-01"
  name = "default"
  parent_id = "string"
}

```

## Microsoft.Security/serverVulnerabilityAssessmentsSettings@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/serverVulnerabilityAssessmentsSettings@2023-05-01"
  name = "azureServersSetting"
  parent_id = "string"
  // For remaining properties, see serverVulnerabilityAssessmentsSettings objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.Security/settings@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/settings@2022-05-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see settings objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.Security/standards@2021-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/standards@2021-08-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      category = "string"
      components = [
        {
          key = "string"
        }
      ]
      description = "string"
      displayName = "string"
      supportedClouds = [
        "string"
      ]
    }
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.Security/workspaceSettings@2017-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/workspaceSettings@2017-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      scope = "string"
      workspaceId = "string"
    }
  })
}

```

