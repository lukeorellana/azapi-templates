## Microsoft.Cdn/cdnWebApplicationFirewallPolicies@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/cdnWebApplicationFirewallPolicies@2023-07-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customRules = {
        rules = [
          {
            action = "string"
            enabledState = "string"
            matchConditions = [
              {
                matchValue = [
                  "string"
                ]
                matchVariable = "string"
                negateCondition = bool
                operator = "string"
                selector = "string"
                transforms = [
                  "string"
                ]
              }
            ]
            name = "string"
            priority = int
          }
        ]
      }
      extendedProperties = {
        {customized property} = "string"
      }
      managedRules = {
        managedRuleSets = [
          {
            anomalyScore = int
            ruleGroupOverrides = [
              {
                ruleGroupName = "string"
                rules = [
                  {
                    action = "string"
                    enabledState = "string"
                    ruleId = "string"
                  }
                ]
              }
            ]
            ruleSetType = "string"
            ruleSetVersion = "string"
          }
        ]
      }
      policySettings = {
        defaultCustomBlockResponseBody = "string"
        defaultCustomBlockResponseStatusCode = int
        defaultRedirectUrl = "string"
        enabledState = "string"
        mode = "string"
      }
      rateLimitRules = {
        rules = [
          {
            action = "string"
            enabledState = "string"
            matchConditions = [
              {
                matchValue = [
                  "string"
                ]
                matchVariable = "string"
                negateCondition = bool
                operator = "string"
                selector = "string"
                transforms = [
                  "string"
                ]
              }
            ]
            name = "string"
            priority = int
            rateLimitDurationInMinutes = int
            rateLimitThreshold = int
          }
        ]
      }
    }
    sku = {
      name = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.Cdn/profiles@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles@2023-07-01-preview"
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
      originResponseTimeoutSeconds = int
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.Cdn/profiles/afdEndpoints@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/afdEndpoints@2023-07-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoGeneratedDomainNameLabelScope = "string"
      enabledState = "string"
    }
  })
}

```

## Microsoft.Cdn/profiles/afdEndpoints/routes@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/afdEndpoints/routes@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cacheConfiguration = {
        compressionSettings = {
          contentTypesToCompress = [
            "string"
          ]
          isCompressionEnabled = bool
        }
        queryParameters = "string"
        queryStringCachingBehavior = "string"
      }
      customDomains = [
        {
          id = "string"
        }
      ]
      enabledState = "string"
      forwardingProtocol = "string"
      httpsRedirect = "string"
      linkToDefaultDomain = "string"
      originGroup = {
        id = "string"
      }
      originPath = "string"
      patternsToMatch = [
        "string"
      ]
      ruleSets = [
        {
          id = "string"
        }
      ]
      supportedProtocols = [
        "string"
      ]
    }
  })
}

```

## Microsoft.Cdn/profiles/customDomains@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/customDomains@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureDnsZone = {
        id = "string"
      }
      extendedProperties = {
        {customized property} = "string"
      }
      hostName = "string"
      preValidatedCustomDomainResourceId = {
        id = "string"
      }
      tlsSettings = {
        certificateType = "string"
        minimumTlsVersion = "string"
        secret = {
          id = "string"
        }
      }
    }
  })
}

```

## Microsoft.Cdn/profiles/endpoints@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/endpoints@2023-07-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      contentTypesToCompress = [
        "string"
      ]
      defaultOriginGroup = {
        id = "string"
      }
      deliveryPolicy = {
        description = "string"
        rules = [
          {
            actions = [
              {
                name = "string"
                // For remaining properties, see DeliveryRuleActionAutoGenerated objects
              }
            ]
            conditions = [
              {
                name = "string"
                // For remaining properties, see DeliveryRuleCondition objects
              }
            ]
            name = "string"
            order = int
          }
        ]
      }
      geoFilters = [
        {
          action = "string"
          countryCodes = [
            "string"
          ]
          relativePath = "string"
        }
      ]
      isCompressionEnabled = bool
      isHttpAllowed = bool
      isHttpsAllowed = bool
      optimizationType = "string"
      originGroups = [
        {
          name = "string"
          properties = {
            healthProbeSettings = {
              probeIntervalInSeconds = int
              probePath = "string"
              probeProtocol = "string"
              probeRequestType = "string"
            }
            origins = [
              {
                id = "string"
              }
            ]
            responseBasedOriginErrorDetectionSettings = {
              httpErrorRanges = [
                {
                  begin = int
                  end = int
                }
              ]
              responseBasedDetectedErrorTypes = "string"
              responseBasedFailoverThresholdPercentage = int
            }
            trafficRestorationTimeToHealedOrNewEndpointsInMinutes = int
          }
        }
      ]
      originHostHeader = "string"
      originPath = "string"
      origins = [
        {
          name = "string"
          properties = {
            enabled = bool
            hostName = "string"
            httpPort = int
            httpsPort = int
            originHostHeader = "string"
            priority = int
            privateLinkAlias = "string"
            privateLinkApprovalMessage = "string"
            privateLinkLocation = "string"
            privateLinkResourceId = "string"
            weight = int
          }
        }
      ]
      probePath = "string"
      queryStringCachingBehavior = "string"
      urlSigningKeys = [
        {
          keyId = "string"
          keySourceParameters = {
            resourceGroupName = "string"
            secretName = "string"
            secretVersion = "string"
            subscriptionId = "string"
            typeName = "KeyVaultSigningKeyParameters"
            vaultName = "string"
          }
        }
      ]
      webApplicationFirewallPolicyLink = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.Cdn/profiles/endpoints/customDomains@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/endpoints/customDomains@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hostName = "string"
    }
  })
}

```

## Microsoft.Cdn/profiles/endpoints/originGroups@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/endpoints/originGroups@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      healthProbeSettings = {
        probeIntervalInSeconds = int
        probePath = "string"
        probeProtocol = "string"
        probeRequestType = "string"
      }
      origins = [
        {
          id = "string"
        }
      ]
      responseBasedOriginErrorDetectionSettings = {
        httpErrorRanges = [
          {
            begin = int
            end = int
          }
        ]
        responseBasedDetectedErrorTypes = "string"
        responseBasedFailoverThresholdPercentage = int
      }
      trafficRestorationTimeToHealedOrNewEndpointsInMinutes = int
    }
  })
}

```

## Microsoft.Cdn/profiles/endpoints/origins@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/endpoints/origins@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enabled = bool
      hostName = "string"
      httpPort = int
      httpsPort = int
      originHostHeader = "string"
      priority = int
      privateLinkAlias = "string"
      privateLinkApprovalMessage = "string"
      privateLinkLocation = "string"
      privateLinkResourceId = "string"
      weight = int
    }
  })
}

```

## Microsoft.Cdn/profiles/keyGroups@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/keyGroups@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      keyReferences = [
        {
          id = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Cdn/profiles/originGroups@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/originGroups@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      healthProbeSettings = {
        probeIntervalInSeconds = int
        probePath = "string"
        probeProtocol = "string"
        probeRequestType = "string"
      }
      loadBalancingSettings = {
        additionalLatencyInMilliseconds = int
        sampleSize = int
        successfulSamplesRequired = int
      }
      sessionAffinityState = "string"
      trafficRestorationTimeToHealedOrNewEndpointsInMinutes = int
    }
  })
}

```

## Microsoft.Cdn/profiles/originGroups/origins@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/originGroups/origins@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureOrigin = {
        id = "string"
      }
      enabledState = "string"
      enforceCertificateNameCheck = bool
      hostName = "string"
      httpPort = int
      httpsPort = int
      originHostHeader = "string"
      priority = int
      sharedPrivateLinkResource = {
        groupId = "string"
        privateLink = {
          id = "string"
        }
        privateLinkLocation = "string"
        requestMessage = "string"
        status = "string"
      }
      weight = int
    }
  })
}

```

## Microsoft.Cdn/profiles/ruleSets@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/ruleSets@2023-07-01-preview"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.Cdn/profiles/ruleSets/rules@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/ruleSets/rules@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      actions = [
        {
          name = "string"
          // For remaining properties, see DeliveryRuleActionAutoGenerated objects
        }
      ]
      conditions = [
        {
          name = "string"
          // For remaining properties, see DeliveryRuleCondition objects
        }
      ]
      matchProcessingBehavior = "string"
      order = int
    }
  })
}

```

## Microsoft.Cdn/profiles/secrets@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/secrets@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        type = "string"
        // For remaining properties, see SecretParameters objects
      }
    }
  })
}

```

## Microsoft.Cdn/profiles/securityPolicies@2023-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Cdn/profiles/securityPolicies@2023-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        type = "string"
        // For remaining properties, see SecurityPolicyPropertiesParameters objects
      }
    }
  })
}

```
