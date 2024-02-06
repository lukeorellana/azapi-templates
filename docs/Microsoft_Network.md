## Microsoft.Network/frontDoors@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/frontDoors@2021-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backendPools = [
        {
          id = "string"
          name = "string"
          properties = {
            backends = [
              {
                address = "string"
                backendHostHeader = "string"
                enabledState = "string"
                httpPort = int
                httpsPort = int
                priority = int
                privateLinkAlias = "string"
                privateLinkApprovalMessage = "string"
                privateLinkLocation = "string"
                privateLinkResourceId = "string"
                weight = int
              }
            ]
            healthProbeSettings = {
              id = "string"
            }
            loadBalancingSettings = {
              id = "string"
            }
          }
        }
      ]
      backendPoolsSettings = {
        enforceCertificateNameCheck = "string"
        sendRecvTimeoutSeconds = int
      }
      enabledState = "string"
      friendlyName = "string"
      frontendEndpoints = [
        {
          id = "string"
          name = "string"
          properties = {
            hostName = "string"
            sessionAffinityEnabledState = "string"
            sessionAffinityTtlSeconds = int
            webApplicationFirewallPolicyLink = {
              id = "string"
            }
          }
        }
      ]
      healthProbeSettings = [
        {
          id = "string"
          name = "string"
          properties = {
            enabledState = "string"
            healthProbeMethod = "string"
            intervalInSeconds = int
            path = "string"
            protocol = "string"
          }
        }
      ]
      loadBalancingSettings = [
        {
          id = "string"
          name = "string"
          properties = {
            additionalLatencyMilliseconds = int
            sampleSize = int
            successfulSamplesRequired = int
          }
        }
      ]
      routingRules = [
        {
          id = "string"
          name = "string"
          properties = {
            acceptedProtocols = [
              "string"
            ]
            enabledState = "string"
            frontendEndpoints = [
              {
                id = "string"
              }
            ]
            patternsToMatch = [
              "string"
            ]
            routeConfiguration = {
              @odata.type = "string"
              // For remaining properties, see RouteConfiguration objects
            }
            rulesEngine = {
              id = "string"
            }
            webApplicationFirewallPolicyLink = {
              id = "string"
            }
          }
        }
      ]
    }
  })
}

```

## Microsoft.Network/frontDoors/rulesEngines@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/frontDoors/rulesEngines@2021-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rules = [
        {
          action = {
            requestHeaderActions = [
              {
                headerActionType = "string"
                headerName = "string"
                value = "string"
              }
            ]
            responseHeaderActions = [
              {
                headerActionType = "string"
                headerName = "string"
                value = "string"
              }
            ]
            routeConfigurationOverride = {
              @odata.type = "string"
              // For remaining properties, see RouteConfiguration objects
            }
          }
          matchConditions = [
            {
              negateCondition = bool
              rulesEngineMatchValue = [
                "string"
              ]
              rulesEngineMatchVariable = "string"
              rulesEngineOperator = "string"
              selector = "string"
              transforms = [
                "string"
              ]
            }
          ]
          matchProcessingBehavior = "string"
          name = "string"
          priority = int
        }
      ]
    }
  })
}

```

## Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2022-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2022-05-01"
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
            rateLimitDurationInMinutes = int
            rateLimitThreshold = int
            ruleType = "string"
          }
        ]
      }
      managedRules = {
        managedRuleSets = [
          {
            exclusions = [
              {
                matchVariable = "string"
                selector = "string"
                selectorMatchOperator = "string"
              }
            ]
            ruleGroupOverrides = [
              {
                exclusions = [
                  {
                    matchVariable = "string"
                    selector = "string"
                    selectorMatchOperator = "string"
                  }
                ]
                ruleGroupName = "string"
                rules = [
                  {
                    action = "string"
                    enabledState = "string"
                    exclusions = [
                      {
                        matchVariable = "string"
                        selector = "string"
                        selectorMatchOperator = "string"
                      }
                    ]
                    ruleId = "string"
                  }
                ]
              }
            ]
            ruleSetAction = "string"
            ruleSetType = "string"
            ruleSetVersion = "string"
          }
        ]
      }
      policySettings = {
        customBlockResponseBody = "string"
        customBlockResponseStatusCode = int
        enabledState = "string"
        mode = "string"
        redirectUrl = "string"
        requestBodyCheck = "string"
      }
    }
    sku = {
      name = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.Network/NetworkExperimentProfiles@2019-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/NetworkExperimentProfiles@2019-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enabledState = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.Network/NetworkExperimentProfiles/Experiments@2019-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/NetworkExperimentProfiles/Experiments@2019-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      enabledState = "string"
      endpointA = {
        endpoint = "string"
        name = "string"
      }
      endpointB = {
        endpoint = "string"
        name = "string"
      }
    }
  })
}

```

## Microsoft.Network/dnsForwardingRulesets@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsForwardingRulesets@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dnsResolverOutboundEndpoints = [
        {
          id = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Network/dnsForwardingRulesets/forwardingRules@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsForwardingRulesets/forwardingRules@2022-07-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      domainName = "string"
      forwardingRuleState = "string"
      metadata = {}
      targetDnsServers = [
        {
          ipAddress = "string"
          port = int
        }
      ]
    }
  })
}

```

## Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks@2022-07-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      metadata = {}
      virtualNetwork = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.Network/dnsResolvers@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsResolvers@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      virtualNetwork = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.Network/dnsResolvers/inboundEndpoints@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsResolvers/inboundEndpoints@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      ipConfigurations = [
        {
          privateIpAddress = "string"
          privateIpAllocationMethod = "string"
          subnet = {
            id = "string"
          }
        }
      ]
    }
  })
}

```

## Microsoft.Network/dnsResolvers/outboundEndpoints@2022-07-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsResolvers/outboundEndpoints@2022-07-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      subnet = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.Network/dnsZones@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones@2018-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      registrationVirtualNetworks = [
        {
          id = "string"
        }
      ]
      resolutionVirtualNetworks = [
        {
          id = "string"
        }
      ]
      zoneType = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.Network/dnsZones/A@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/A@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/dnsZones/AAAA@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/AAAA@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/dnsZones/CAA@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/CAA@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/dnsZones/CNAME@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/CNAME@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/dnsZones/MX@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/MX@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/dnsZones/NS@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/NS@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/dnsZones/PTR@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/PTR@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/dnsZones/SOA@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/SOA@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/dnsZones/SRV@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/SRV@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/dnsZones/TXT@2018-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dnsZones/TXT@2018-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      AAAARecords = [
        {
          ipv6Address = "string"
        }
      ]
      ARecords = [
        {
          ipv4Address = "string"
        }
      ]
      caaRecords = [
        {
          flags = int
          tag = "string"
          value = "string"
        }
      ]
      CNAMERecord = {
        cname = "string"
      }
      metadata = {}
      MXRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      NSRecords = [
        {
          nsdname = "string"
        }
      ]
      PTRRecords = [
        {
          ptrdname = "string"
        }
      ]
      SOARecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTTL = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      SRVRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      targetResource = {
        id = "string"
      }
      TTL = int
      TXTRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/privateDnsZones@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones@2020-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    etag = "string"
  })
}

```

## Microsoft.Network/privateDnsZones/A@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/A@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/privateDnsZones/AAAA@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/AAAA@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/privateDnsZones/CNAME@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/CNAME@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/privateDnsZones/MX@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/MX@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/privateDnsZones/PTR@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/PTR@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/privateDnsZones/SOA@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/SOA@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/privateDnsZones/SRV@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/SRV@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/privateDnsZones/TXT@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/TXT@2020-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aaaaRecords = [
        {
          ipv6Address = "string"
        }
      ]
      aRecords = [
        {
          ipv4Address = "string"
        }
      ]
      cnameRecord = {
        cname = "string"
      }
      metadata = {}
      mxRecords = [
        {
          exchange = "string"
          preference = int
        }
      ]
      ptrRecords = [
        {
          ptrdname = "string"
        }
      ]
      soaRecord = {
        email = "string"
        expireTime = int
        host = "string"
        minimumTtl = int
        refreshTime = int
        retryTime = int
        serialNumber = int
      }
      srvRecords = [
        {
          port = int
          priority = int
          target = "string"
          weight = int
        }
      ]
      ttl = int
      txtRecords = [
        {
          value = [
            "string"
          ]
        }
      ]
    }
    etag = "string"
  })
}

```

## Microsoft.Network/privateDnsZones/virtualNetworkLinks@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateDnsZones/virtualNetworkLinks@2020-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      registrationEnabled = bool
      virtualNetwork = {
        id = "string"
      }
    }
    etag = "string"
  })
}

```

## Microsoft.Network/applicationGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/applicationGateways@2023-04-01"
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
      authenticationCertificates = [
        {
          id = "string"
          name = "string"
          properties = {
            data = "string"
          }
        }
      ]
      autoscaleConfiguration = {
        maxCapacity = int
        minCapacity = int
      }
      backendAddressPools = [
        {
          id = "string"
          name = "string"
          properties = {
            backendAddresses = [
              {
                fqdn = "string"
                ipAddress = "string"
              }
            ]
          }
        }
      ]
      backendHttpSettingsCollection = [
        {
          id = "string"
          name = "string"
          properties = {
            affinityCookieName = "string"
            authenticationCertificates = [
              {
                id = "string"
              }
            ]
            connectionDraining = {
              drainTimeoutInSec = int
              enabled = bool
            }
            cookieBasedAffinity = "string"
            hostName = "string"
            path = "string"
            pickHostNameFromBackendAddress = bool
            port = int
            probe = {
              id = "string"
            }
            probeEnabled = bool
            protocol = "string"
            requestTimeout = int
            trustedRootCertificates = [
              {
                id = "string"
              }
            ]
          }
        }
      ]
      backendSettingsCollection = [
        {
          id = "string"
          name = "string"
          properties = {
            hostName = "string"
            pickHostNameFromBackendAddress = bool
            port = int
            probe = {
              id = "string"
            }
            protocol = "string"
            timeout = int
            trustedRootCertificates = [
              {
                id = "string"
              }
            ]
          }
        }
      ]
      customErrorConfigurations = [
        {
          customErrorPageUrl = "string"
          statusCode = "string"
        }
      ]
      enableFips = bool
      enableHttp2 = bool
      firewallPolicy = {
        id = "string"
      }
      forceFirewallPolicyAssociation = bool
      frontendIPConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            privateIPAddress = "string"
            privateIPAllocationMethod = "string"
            privateLinkConfiguration = {
              id = "string"
            }
            publicIPAddress = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
          }
        }
      ]
      frontendPorts = [
        {
          id = "string"
          name = "string"
          properties = {
            port = int
          }
        }
      ]
      gatewayIPConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            subnet = {
              id = "string"
            }
          }
        }
      ]
      globalConfiguration = {
        enableRequestBuffering = bool
        enableResponseBuffering = bool
      }
      httpListeners = [
        {
          id = "string"
          name = "string"
          properties = {
            customErrorConfigurations = [
              {
                customErrorPageUrl = "string"
                statusCode = "string"
              }
            ]
            firewallPolicy = {
              id = "string"
            }
            frontendIPConfiguration = {
              id = "string"
            }
            frontendPort = {
              id = "string"
            }
            hostName = "string"
            hostNames = [
              "string"
            ]
            protocol = "string"
            requireServerNameIndication = bool
            sslCertificate = {
              id = "string"
            }
            sslProfile = {
              id = "string"
            }
          }
        }
      ]
      listeners = [
        {
          id = "string"
          name = "string"
          properties = {
            frontendIPConfiguration = {
              id = "string"
            }
            frontendPort = {
              id = "string"
            }
            protocol = "string"
            sslCertificate = {
              id = "string"
            }
            sslProfile = {
              id = "string"
            }
          }
        }
      ]
      loadDistributionPolicies = [
        {
          id = "string"
          name = "string"
          properties = {
            loadDistributionAlgorithm = "string"
            loadDistributionTargets = [
              {
                id = "string"
                name = "string"
                properties = {
                  backendAddressPool = {
                    id = "string"
                  }
                  weightPerServer = int
                }
              }
            ]
          }
        }
      ]
      privateLinkConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            ipConfigurations = [
              {
                id = "string"
                name = "string"
                properties = {
                  primary = bool
                  privateIPAddress = "string"
                  privateIPAllocationMethod = "string"
                  subnet = {
                    id = "string"
                  }
                }
              }
            ]
          }
        }
      ]
      probes = [
        {
          id = "string"
          name = "string"
          properties = {
            host = "string"
            interval = int
            match = {
              body = "string"
              statusCodes = [
                "string"
              ]
            }
            minServers = int
            path = "string"
            pickHostNameFromBackendHttpSettings = bool
            pickHostNameFromBackendSettings = bool
            port = int
            protocol = "string"
            timeout = int
            unhealthyThreshold = int
          }
        }
      ]
      redirectConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            includePath = bool
            includeQueryString = bool
            pathRules = [
              {
                id = "string"
              }
            ]
            redirectType = "string"
            requestRoutingRules = [
              {
                id = "string"
              }
            ]
            targetListener = {
              id = "string"
            }
            targetUrl = "string"
            urlPathMaps = [
              {
                id = "string"
              }
            ]
          }
        }
      ]
      requestRoutingRules = [
        {
          id = "string"
          name = "string"
          properties = {
            backendAddressPool = {
              id = "string"
            }
            backendHttpSettings = {
              id = "string"
            }
            httpListener = {
              id = "string"
            }
            loadDistributionPolicy = {
              id = "string"
            }
            priority = int
            redirectConfiguration = {
              id = "string"
            }
            rewriteRuleSet = {
              id = "string"
            }
            ruleType = "string"
            urlPathMap = {
              id = "string"
            }
          }
        }
      ]
      rewriteRuleSets = [
        {
          id = "string"
          name = "string"
          properties = {
            rewriteRules = [
              {
                actionSet = {
                  requestHeaderConfigurations = [
                    {
                      headerName = "string"
                      headerValue = "string"
                    }
                  ]
                  responseHeaderConfigurations = [
                    {
                      headerName = "string"
                      headerValue = "string"
                    }
                  ]
                  urlConfiguration = {
                    modifiedPath = "string"
                    modifiedQueryString = "string"
                    reroute = bool
                  }
                }
                conditions = [
                  {
                    ignoreCase = bool
                    negate = bool
                    pattern = "string"
                    variable = "string"
                  }
                ]
                name = "string"
                ruleSequence = int
              }
            ]
          }
        }
      ]
      routingRules = [
        {
          id = "string"
          name = "string"
          properties = {
            backendAddressPool = {
              id = "string"
            }
            backendSettings = {
              id = "string"
            }
            listener = {
              id = "string"
            }
            priority = int
            ruleType = "string"
          }
        }
      ]
      sku = {
        capacity = int
        name = "string"
        tier = "string"
      }
      sslCertificates = [
        {
          id = "string"
          name = "string"
          properties = {
            data = "string"
            keyVaultSecretId = "string"
            password = "string"
          }
        }
      ]
      sslPolicy = {
        cipherSuites = [
          "string"
        ]
        disabledSslProtocols = [
          "string"
        ]
        minProtocolVersion = "string"
        policyName = "string"
        policyType = "string"
      }
      sslProfiles = [
        {
          id = "string"
          name = "string"
          properties = {
            clientAuthConfiguration = {
              verifyClientCertIssuerDN = bool
              verifyClientRevocation = "string"
            }
            sslPolicy = {
              cipherSuites = [
                "string"
              ]
              disabledSslProtocols = [
                "string"
              ]
              minProtocolVersion = "string"
              policyName = "string"
              policyType = "string"
            }
            trustedClientCertificates = [
              {
                id = "string"
              }
            ]
          }
        }
      ]
      trustedClientCertificates = [
        {
          id = "string"
          name = "string"
          properties = {
            data = "string"
          }
        }
      ]
      trustedRootCertificates = [
        {
          id = "string"
          name = "string"
          properties = {
            data = "string"
            keyVaultSecretId = "string"
          }
        }
      ]
      urlPathMaps = [
        {
          id = "string"
          name = "string"
          properties = {
            defaultBackendAddressPool = {
              id = "string"
            }
            defaultBackendHttpSettings = {
              id = "string"
            }
            defaultLoadDistributionPolicy = {
              id = "string"
            }
            defaultRedirectConfiguration = {
              id = "string"
            }
            defaultRewriteRuleSet = {
              id = "string"
            }
            pathRules = [
              {
                id = "string"
                name = "string"
                properties = {
                  backendAddressPool = {
                    id = "string"
                  }
                  backendHttpSettings = {
                    id = "string"
                  }
                  firewallPolicy = {
                    id = "string"
                  }
                  loadDistributionPolicy = {
                    id = "string"
                  }
                  paths = [
                    "string"
                  ]
                  redirectConfiguration = {
                    id = "string"
                  }
                  rewriteRuleSet = {
                    id = "string"
                  }
                }
              }
            ]
          }
        }
      ]
      webApplicationFirewallConfiguration = {
        disabledRuleGroups = [
          {
            ruleGroupName = "string"
            rules = [
              int
            ]
          }
        ]
        enabled = bool
        exclusions = [
          {
            matchVariable = "string"
            selector = "string"
            selectorMatchOperator = "string"
          }
        ]
        fileUploadLimitInMb = int
        firewallMode = "string"
        maxRequestBodySize = int
        maxRequestBodySizeInKb = int
        requestBodyCheck = bool
        ruleSetType = "string"
        ruleSetVersion = "string"
      }
    }
    zones = [
      "string"
    ]
  })
}

```

## Microsoft.Network/applicationGateways/privateEndpointConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/applicationGateways/privateEndpointConnections@2023-04-01"
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
  })
}

```

## Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customRules = [
        {
          action = "string"
          groupByUserSession = [
            {
              groupByVariables = [
                {
                  variableName = "string"
                }
              ]
            }
          ]
          matchConditions = [
            {
              matchValues = [
                "string"
              ]
              matchVariables = [
                {
                  selector = "string"
                  variableName = "string"
                }
              ]
              negationConditon = bool
              operator = "string"
              transforms = [
                "string"
              ]
            }
          ]
          name = "string"
          priority = int
          rateLimitDuration = "string"
          rateLimitThreshold = int
          ruleType = "string"
          state = "string"
        }
      ]
      managedRules = {
        exclusions = [
          {
            exclusionManagedRuleSets = [
              {
                ruleGroups = [
                  {
                    ruleGroupName = "string"
                    rules = [
                      {
                        ruleId = "string"
                      }
                    ]
                  }
                ]
                ruleSetType = "string"
                ruleSetVersion = "string"
              }
            ]
            matchVariable = "string"
            selector = "string"
            selectorMatchOperator = "string"
          }
        ]
        managedRuleSets = [
          {
            ruleGroupOverrides = [
              {
                ruleGroupName = "string"
                rules = [
                  {
                    action = "string"
                    ruleId = "string"
                    state = "string"
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
        customBlockResponseBody = "string"
        customBlockResponseStatusCode = int
        fileUploadEnforcement = bool
        fileUploadLimitInMb = int
        logScrubbing = {
          scrubbingRules = [
            {
              matchVariable = "string"
              selector = "string"
              selectorMatchOperator = "string"
              state = "string"
            }
          ]
          state = "string"
        }
        maxRequestBodySizeInKb = int
        mode = "string"
        requestBodyCheck = bool
        requestBodyEnforcement = bool
        requestBodyInspectLimitInKB = int
        state = "string"
      }
    }
  })
}

```

## Microsoft.Network/applicationSecurityGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/applicationSecurityGroups@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.Network/azureFirewalls@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/azureFirewalls@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      additionalProperties = {}
      applicationRuleCollections = [
        {
          id = "string"
          name = "string"
          properties = {
            action = {
              type = "string"
            }
            priority = int
            rules = [
              {
                description = "string"
                fqdnTags = [
                  "string"
                ]
                name = "string"
                protocols = [
                  {
                    port = int
                    protocolType = "string"
                  }
                ]
                sourceAddresses = [
                  "string"
                ]
                sourceIpGroups = [
                  "string"
                ]
                targetFqdns = [
                  "string"
                ]
              }
            ]
          }
        }
      ]
      firewallPolicy = {
        id = "string"
      }
      hubIPAddresses = {
        privateIPAddress = "string"
        publicIPs = {
          addresses = [
            {
              address = "string"
            }
          ]
          count = int
        }
      }
      ipConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            publicIPAddress = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
          }
        }
      ]
      managementIpConfiguration = {
        id = "string"
        name = "string"
        properties = {
          publicIPAddress = {
            id = "string"
          }
          subnet = {
            id = "string"
          }
        }
      }
      natRuleCollections = [
        {
          id = "string"
          name = "string"
          properties = {
            action = {
              type = "string"
            }
            priority = int
            rules = [
              {
                description = "string"
                destinationAddresses = [
                  "string"
                ]
                destinationPorts = [
                  "string"
                ]
                name = "string"
                protocols = [
                  "string"
                ]
                sourceAddresses = [
                  "string"
                ]
                sourceIpGroups = [
                  "string"
                ]
                translatedAddress = "string"
                translatedFqdn = "string"
                translatedPort = "string"
              }
            ]
          }
        }
      ]
      networkRuleCollections = [
        {
          id = "string"
          name = "string"
          properties = {
            action = {
              type = "string"
            }
            priority = int
            rules = [
              {
                description = "string"
                destinationAddresses = [
                  "string"
                ]
                destinationFqdns = [
                  "string"
                ]
                destinationIpGroups = [
                  "string"
                ]
                destinationPorts = [
                  "string"
                ]
                name = "string"
                protocols = [
                  "string"
                ]
                sourceAddresses = [
                  "string"
                ]
                sourceIpGroups = [
                  "string"
                ]
              }
            ]
          }
        }
      ]
      sku = {
        name = "string"
        tier = "string"
      }
      threatIntelMode = "string"
      virtualHub = {
        id = "string"
      }
    }
    zones = [
      "string"
    ]
  })
}

```

## Microsoft.Network/bastionHosts@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/bastionHosts@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      disableCopyPaste = bool
      dnsName = "string"
      enableFileCopy = bool
      enableIpConnect = bool
      enableKerberos = bool
      enableShareableLink = bool
      enableTunneling = bool
      ipConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            privateIPAllocationMethod = "string"
            publicIPAddress = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
          }
        }
      ]
      scaleUnits = int
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.Network/cloudServiceSlots@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/cloudServiceSlots@2023-04-01"
  name = "swap"
  parent_id = "string"
  body = jsonencode({
    properties = {
      slotType = "string"
    }
  })
}

```

## Microsoft.Network/connections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/connections@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      authorizationKey = "string"
      connectionMode = "string"
      connectionProtocol = "string"
      connectionType = "string"
      dpdTimeoutSeconds = int
      egressNatRules = [
        {
          id = "string"
        }
      ]
      enableBgp = bool
      enablePrivateLinkFastPath = bool
      expressRouteGatewayBypass = bool
      gatewayCustomBgpIpAddresses = [
        {
          customBgpIpAddress = "string"
          ipConfigurationId = "string"
        }
      ]
      ingressNatRules = [
        {
          id = "string"
        }
      ]
      ipsecPolicies = [
        {
          dhGroup = "string"
          ikeEncryption = "string"
          ikeIntegrity = "string"
          ipsecEncryption = "string"
          ipsecIntegrity = "string"
          pfsGroup = "string"
          saDataSizeKilobytes = int
          saLifeTimeSeconds = int
        }
      ]
      localNetworkGateway2 = {
        id = "string"
        location = "string"
        properties = {
          bgpSettings = {
            asn = int
            bgpPeeringAddress = "string"
            bgpPeeringAddresses = [
              {
                customBgpIpAddresses = [
                  "string"
                ]
                ipconfigurationId = "string"
              }
            ]
            peerWeight = int
          }
          fqdn = "string"
          gatewayIpAddress = "string"
          localNetworkAddressSpace = {
            addressPrefixes = [
              "string"
            ]
          }
        }
        tags = {}
      }
      peer = {
        id = "string"
      }
      routingWeight = int
      sharedKey = "string"
      trafficSelectorPolicies = [
        {
          localAddressRanges = [
            "string"
          ]
          remoteAddressRanges = [
            "string"
          ]
        }
      ]
      useLocalAzureIpAddress = bool
      usePolicyBasedTrafficSelectors = bool
      virtualNetworkGateway1 = {
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
          activeActive = bool
          adminState = "string"
          allowRemoteVnetTraffic = bool
          allowVirtualWanTraffic = bool
          bgpSettings = {
            asn = int
            bgpPeeringAddress = "string"
            bgpPeeringAddresses = [
              {
                customBgpIpAddresses = [
                  "string"
                ]
                ipconfigurationId = "string"
              }
            ]
            peerWeight = int
          }
          customRoutes = {
            addressPrefixes = [
              "string"
            ]
          }
          disableIPSecReplayProtection = bool
          enableBgp = bool
          enableBgpRouteTranslationForNat = bool
          enableDnsForwarding = bool
          enablePrivateIpAddress = bool
          gatewayDefaultSite = {
            id = "string"
          }
          gatewayType = "string"
          ipConfigurations = [
            {
              id = "string"
              name = "string"
              properties = {
                privateIPAllocationMethod = "string"
                publicIPAddress = {
                  id = "string"
                }
                subnet = {
                  id = "string"
                }
              }
            }
          ]
          natRules = [
            {
              id = "string"
              name = "string"
              properties = {
                externalMappings = [
                  {
                    addressSpace = "string"
                    portRange = "string"
                  }
                ]
                internalMappings = [
                  {
                    addressSpace = "string"
                    portRange = "string"
                  }
                ]
                ipConfigurationId = "string"
                mode = "string"
                type = "string"
              }
            }
          ]
          sku = {
            name = "string"
            tier = "string"
          }
          virtualNetworkGatewayPolicyGroups = [
            {
              id = "string"
              name = "string"
              properties = {
                isDefault = bool
                policyMembers = [
                  {
                    attributeType = "string"
                    attributeValue = "string"
                    name = "string"
                  }
                ]
                priority = int
              }
            }
          ]
          vNetExtendedLocationResourceId = "string"
          vpnClientConfiguration = {
            aadAudience = "string"
            aadIssuer = "string"
            aadTenant = "string"
            radiusServerAddress = "string"
            radiusServers = [
              {
                radiusServerAddress = "string"
                radiusServerScore = int
                radiusServerSecret = "string"
              }
            ]
            radiusServerSecret = "string"
            vngClientConnectionConfigurations = [
              {
                id = "string"
                name = "string"
                properties = {
                  virtualNetworkGatewayPolicyGroups = [
                    {
                      id = "string"
                    }
                  ]
                  vpnClientAddressPool = {
                    addressPrefixes = [
                      "string"
                    ]
                  }
                }
              }
            ]
            vpnAuthenticationTypes = [
              "string"
            ]
            vpnClientAddressPool = {
              addressPrefixes = [
                "string"
              ]
            }
            vpnClientIpsecPolicies = [
              {
                dhGroup = "string"
                ikeEncryption = "string"
                ikeIntegrity = "string"
                ipsecEncryption = "string"
                ipsecIntegrity = "string"
                pfsGroup = "string"
                saDataSizeKilobytes = int
                saLifeTimeSeconds = int
              }
            ]
            vpnClientProtocols = [
              "string"
            ]
            vpnClientRevokedCertificates = [
              {
                id = "string"
                name = "string"
                properties = {
                  thumbprint = "string"
                }
              }
            ]
            vpnClientRootCertificates = [
              {
                id = "string"
                name = "string"
                properties = {
                  publicCertData = "string"
                }
              }
            ]
          }
          vpnGatewayGeneration = "string"
          vpnType = "string"
        }
        tags = {}
      }
      virtualNetworkGateway2 = {
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
          activeActive = bool
          adminState = "string"
          allowRemoteVnetTraffic = bool
          allowVirtualWanTraffic = bool
          bgpSettings = {
            asn = int
            bgpPeeringAddress = "string"
            bgpPeeringAddresses = [
              {
                customBgpIpAddresses = [
                  "string"
                ]
                ipconfigurationId = "string"
              }
            ]
            peerWeight = int
          }
          customRoutes = {
            addressPrefixes = [
              "string"
            ]
          }
          disableIPSecReplayProtection = bool
          enableBgp = bool
          enableBgpRouteTranslationForNat = bool
          enableDnsForwarding = bool
          enablePrivateIpAddress = bool
          gatewayDefaultSite = {
            id = "string"
          }
          gatewayType = "string"
          ipConfigurations = [
            {
              id = "string"
              name = "string"
              properties = {
                privateIPAllocationMethod = "string"
                publicIPAddress = {
                  id = "string"
                }
                subnet = {
                  id = "string"
                }
              }
            }
          ]
          natRules = [
            {
              id = "string"
              name = "string"
              properties = {
                externalMappings = [
                  {
                    addressSpace = "string"
                    portRange = "string"
                  }
                ]
                internalMappings = [
                  {
                    addressSpace = "string"
                    portRange = "string"
                  }
                ]
                ipConfigurationId = "string"
                mode = "string"
                type = "string"
              }
            }
          ]
          sku = {
            name = "string"
            tier = "string"
          }
          virtualNetworkGatewayPolicyGroups = [
            {
              id = "string"
              name = "string"
              properties = {
                isDefault = bool
                policyMembers = [
                  {
                    attributeType = "string"
                    attributeValue = "string"
                    name = "string"
                  }
                ]
                priority = int
              }
            }
          ]
          vNetExtendedLocationResourceId = "string"
          vpnClientConfiguration = {
            aadAudience = "string"
            aadIssuer = "string"
            aadTenant = "string"
            radiusServerAddress = "string"
            radiusServers = [
              {
                radiusServerAddress = "string"
                radiusServerScore = int
                radiusServerSecret = "string"
              }
            ]
            radiusServerSecret = "string"
            vngClientConnectionConfigurations = [
              {
                id = "string"
                name = "string"
                properties = {
                  virtualNetworkGatewayPolicyGroups = [
                    {
                      id = "string"
                    }
                  ]
                  vpnClientAddressPool = {
                    addressPrefixes = [
                      "string"
                    ]
                  }
                }
              }
            ]
            vpnAuthenticationTypes = [
              "string"
            ]
            vpnClientAddressPool = {
              addressPrefixes = [
                "string"
              ]
            }
            vpnClientIpsecPolicies = [
              {
                dhGroup = "string"
                ikeEncryption = "string"
                ikeIntegrity = "string"
                ipsecEncryption = "string"
                ipsecIntegrity = "string"
                pfsGroup = "string"
                saDataSizeKilobytes = int
                saLifeTimeSeconds = int
              }
            ]
            vpnClientProtocols = [
              "string"
            ]
            vpnClientRevokedCertificates = [
              {
                id = "string"
                name = "string"
                properties = {
                  thumbprint = "string"
                }
              }
            ]
            vpnClientRootCertificates = [
              {
                id = "string"
                name = "string"
                properties = {
                  publicCertData = "string"
                }
              }
            ]
          }
          vpnGatewayGeneration = "string"
          vpnType = "string"
        }
        tags = {}
      }
    }
  })
}

```

## Microsoft.Network/customIpPrefixes@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/customIpPrefixes@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      asn = "string"
      authorizationMessage = "string"
      cidr = "string"
      commissionedState = "string"
      customIpPrefixParent = {
        id = "string"
      }
      expressRouteAdvertise = bool
      geo = "string"
      noInternetAdvertise = bool
      prefixType = "string"
      signedMessage = "string"
    }
    zones = [
      "string"
    ]
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Network/ddosCustomPolicies@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/ddosCustomPolicies@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.Network/ddosProtectionPlans@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/ddosProtectionPlans@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.Network/dscpConfigurations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/dscpConfigurations@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      destinationIpRanges = [
        {
          endIP = "string"
          startIP = "string"
        }
      ]
      destinationPortRanges = [
        {
          end = int
          start = int
        }
      ]
      markings = [
        int
      ]
      protocol = "string"
      qosDefinitionCollection = [
        {
          destinationIpRanges = [
            {
              endIP = "string"
              startIP = "string"
            }
          ]
          destinationPortRanges = [
            {
              end = int
              start = int
            }
          ]
          markings = [
            int
          ]
          protocol = "string"
          sourceIpRanges = [
            {
              endIP = "string"
              startIP = "string"
            }
          ]
          sourcePortRanges = [
            {
              end = int
              start = int
            }
          ]
        }
      ]
      sourceIpRanges = [
        {
          endIP = "string"
          startIP = "string"
        }
      ]
      sourcePortRanges = [
        {
          end = int
          start = int
        }
      ]
    }
  })
}

```

## Microsoft.Network/expressRouteCircuits@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCircuits@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowClassicOperations = bool
      authorizationKey = "string"
      authorizations = [
        {
          id = "string"
          name = "string"
          properties = {
            authorizationKey = "string"
            authorizationUseStatus = "string"
          }
        }
      ]
      bandwidthInGbps = int
      circuitProvisioningState = "string"
      expressRoutePort = {
        id = "string"
      }
      gatewayManagerEtag = "string"
      globalReachEnabled = bool
      peerings = [
        {
          id = "string"
          name = "string"
          properties = {
            azureASN = int
            connections = [
              {
                id = "string"
                name = "string"
                properties = {
                  addressPrefix = "string"
                  authorizationKey = "string"
                  expressRouteCircuitPeering = {
                    id = "string"
                  }
                  ipv6CircuitConnectionConfig = {
                    addressPrefix = "string"
                  }
                  peerExpressRouteCircuitPeering = {
                    id = "string"
                  }
                }
              }
            ]
            expressRouteConnection = {}
            gatewayManagerEtag = "string"
            ipv6PeeringConfig = {
              microsoftPeeringConfig = {
                advertisedCommunities = [
                  "string"
                ]
                advertisedPublicPrefixes = [
                  "string"
                ]
                customerASN = int
                legacyMode = int
                routingRegistryName = "string"
              }
              primaryPeerAddressPrefix = "string"
              routeFilter = {
                id = "string"
              }
              secondaryPeerAddressPrefix = "string"
              state = "string"
            }
            microsoftPeeringConfig = {
              advertisedCommunities = [
                "string"
              ]
              advertisedPublicPrefixes = [
                "string"
              ]
              customerASN = int
              legacyMode = int
              routingRegistryName = "string"
            }
            peerASN = int
            peeringType = "string"
            primaryAzurePort = "string"
            primaryPeerAddressPrefix = "string"
            routeFilter = {
              id = "string"
            }
            secondaryAzurePort = "string"
            secondaryPeerAddressPrefix = "string"
            sharedKey = "string"
            state = "string"
            stats = {
              primarybytesIn = int
              primarybytesOut = int
              secondarybytesIn = int
              secondarybytesOut = int
            }
            vlanId = int
          }
        }
      ]
      serviceKey = "string"
      serviceProviderNotes = "string"
      serviceProviderProperties = {
        bandwidthInMbps = int
        peeringLocation = "string"
        serviceProviderName = "string"
      }
      serviceProviderProvisioningState = "string"
    }
    sku = {
      family = "string"
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Network/expressRouteCircuits/authorizations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCircuits/authorizations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizationKey = "string"
      authorizationUseStatus = "string"
    }
  })
}

```

## Microsoft.Network/expressRouteCircuits/peerings@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCircuits/peerings@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      azureASN = int
      connections = [
        {
          id = "string"
          name = "string"
          properties = {
            addressPrefix = "string"
            authorizationKey = "string"
            expressRouteCircuitPeering = {
              id = "string"
            }
            ipv6CircuitConnectionConfig = {
              addressPrefix = "string"
            }
            peerExpressRouteCircuitPeering = {
              id = "string"
            }
          }
        }
      ]
      expressRouteConnection = {}
      gatewayManagerEtag = "string"
      ipv6PeeringConfig = {
        microsoftPeeringConfig = {
          advertisedCommunities = [
            "string"
          ]
          advertisedPublicPrefixes = [
            "string"
          ]
          customerASN = int
          legacyMode = int
          routingRegistryName = "string"
        }
        primaryPeerAddressPrefix = "string"
        routeFilter = {
          id = "string"
        }
        secondaryPeerAddressPrefix = "string"
        state = "string"
      }
      microsoftPeeringConfig = {
        advertisedCommunities = [
          "string"
        ]
        advertisedPublicPrefixes = [
          "string"
        ]
        customerASN = int
        legacyMode = int
        routingRegistryName = "string"
      }
      peerASN = int
      peeringType = "string"
      primaryAzurePort = "string"
      primaryPeerAddressPrefix = "string"
      routeFilter = {
        id = "string"
      }
      secondaryAzurePort = "string"
      secondaryPeerAddressPrefix = "string"
      sharedKey = "string"
      state = "string"
      stats = {
        primarybytesIn = int
        primarybytesOut = int
        secondarybytesIn = int
        secondarybytesOut = int
      }
      vlanId = int
    }
  })
}

```

## Microsoft.Network/expressRouteCircuits/peerings/connections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCircuits/peerings/connections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      authorizationKey = "string"
      expressRouteCircuitPeering = {
        id = "string"
      }
      ipv6CircuitConnectionConfig = {
        addressPrefix = "string"
      }
      peerExpressRouteCircuitPeering = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.Network/expressRouteCrossConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCrossConnections@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      expressRouteCircuit = {
        id = "string"
      }
      peerings = [
        {
          id = "string"
          name = "string"
          properties = {
            gatewayManagerEtag = "string"
            ipv6PeeringConfig = {
              microsoftPeeringConfig = {
                advertisedCommunities = [
                  "string"
                ]
                advertisedPublicPrefixes = [
                  "string"
                ]
                customerASN = int
                legacyMode = int
                routingRegistryName = "string"
              }
              primaryPeerAddressPrefix = "string"
              routeFilter = {
                id = "string"
              }
              secondaryPeerAddressPrefix = "string"
              state = "string"
            }
            microsoftPeeringConfig = {
              advertisedCommunities = [
                "string"
              ]
              advertisedPublicPrefixes = [
                "string"
              ]
              customerASN = int
              legacyMode = int
              routingRegistryName = "string"
            }
            peerASN = int
            peeringType = "string"
            primaryPeerAddressPrefix = "string"
            secondaryPeerAddressPrefix = "string"
            sharedKey = "string"
            state = "string"
            vlanId = int
          }
        }
      ]
      serviceProviderNotes = "string"
      serviceProviderProvisioningState = "string"
    }
  })
}

```

## Microsoft.Network/expressRouteCrossConnections/peerings@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteCrossConnections/peerings@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      gatewayManagerEtag = "string"
      ipv6PeeringConfig = {
        microsoftPeeringConfig = {
          advertisedCommunities = [
            "string"
          ]
          advertisedPublicPrefixes = [
            "string"
          ]
          customerASN = int
          legacyMode = int
          routingRegistryName = "string"
        }
        primaryPeerAddressPrefix = "string"
        routeFilter = {
          id = "string"
        }
        secondaryPeerAddressPrefix = "string"
        state = "string"
      }
      microsoftPeeringConfig = {
        advertisedCommunities = [
          "string"
        ]
        advertisedPublicPrefixes = [
          "string"
        ]
        customerASN = int
        legacyMode = int
        routingRegistryName = "string"
      }
      peerASN = int
      peeringType = "string"
      primaryPeerAddressPrefix = "string"
      secondaryPeerAddressPrefix = "string"
      sharedKey = "string"
      state = "string"
      vlanId = int
    }
  })
}

```

## Microsoft.Network/expressRouteGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowNonVirtualWanTraffic = bool
      autoScaleConfiguration = {
        bounds = {
          max = int
          min = int
        }
      }
      expressRouteConnections = [
        {
          id = "string"
          name = "string"
          properties = {
            authorizationKey = "string"
            enableInternetSecurity = bool
            enablePrivateLinkFastPath = bool
            expressRouteCircuitPeering = {
              id = "string"
            }
            expressRouteGatewayBypass = bool
            routingConfiguration = {
              associatedRouteTable = {
                id = "string"
              }
              inboundRouteMap = {
                id = "string"
              }
              outboundRouteMap = {
                id = "string"
              }
              propagatedRouteTables = {
                ids = [
                  {
                    id = "string"
                  }
                ]
                labels = [
                  "string"
                ]
              }
              vnetRoutes = {
                staticRoutes = [
                  {
                    addressPrefixes = [
                      "string"
                    ]
                    name = "string"
                    nextHopIpAddress = "string"
                  }
                ]
                staticRoutesConfig = {
                  vnetLocalRouteOverrideCriteria = "string"
                }
              }
            }
            routingWeight = int
          }
        }
      ]
      virtualHub = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.Network/expressRouteGateways/expressRouteConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRouteGateways/expressRouteConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authorizationKey = "string"
      enableInternetSecurity = bool
      enablePrivateLinkFastPath = bool
      expressRouteCircuitPeering = {
        id = "string"
      }
      expressRouteGatewayBypass = bool
      routingConfiguration = {
        associatedRouteTable = {
          id = "string"
        }
        inboundRouteMap = {
          id = "string"
        }
        outboundRouteMap = {
          id = "string"
        }
        propagatedRouteTables = {
          ids = [
            {
              id = "string"
            }
          ]
          labels = [
            "string"
          ]
        }
        vnetRoutes = {
          staticRoutes = [
            {
              addressPrefixes = [
                "string"
              ]
              name = "string"
              nextHopIpAddress = "string"
            }
          ]
          staticRoutesConfig = {
            vnetLocalRouteOverrideCriteria = "string"
          }
        }
      }
      routingWeight = int
    }
  })
}

```

## Microsoft.Network/ExpressRoutePorts@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/ExpressRoutePorts@2023-04-01"
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
      bandwidthInGbps = int
      billingType = "string"
      encapsulation = "string"
      links = [
        {
          id = "string"
          name = "string"
          properties = {
            adminState = "string"
            macSecConfig = {
              cakSecretIdentifier = "string"
              cipher = "string"
              cknSecretIdentifier = "string"
              sciState = "string"
            }
          }
        }
      ]
      peeringLocation = "string"
    }
  })
}

```

## Microsoft.Network/expressRoutePorts/authorizations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/expressRoutePorts/authorizations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.Network/firewallPolicies@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/firewallPolicies@2023-04-01"
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
      basePolicy = {
        id = "string"
      }
      dnsSettings = {
        enableProxy = bool
        requireProxyForNetworkRules = bool
        servers = [
          "string"
        ]
      }
      explicitProxy = {
        enableExplicitProxy = bool
        enablePacFile = bool
        httpPort = int
        httpsPort = int
        pacFile = "string"
        pacFilePort = int
      }
      insights = {
        isEnabled = bool
        logAnalyticsResources = {
          defaultWorkspaceId = {
            id = "string"
          }
          workspaces = [
            {
              region = "string"
              workspaceId = {
                id = "string"
              }
            }
          ]
        }
        retentionDays = int
      }
      intrusionDetection = {
        configuration = {
          bypassTrafficSettings = [
            {
              description = "string"
              destinationAddresses = [
                "string"
              ]
              destinationIpGroups = [
                "string"
              ]
              destinationPorts = [
                "string"
              ]
              name = "string"
              protocol = "string"
              sourceAddresses = [
                "string"
              ]
              sourceIpGroups = [
                "string"
              ]
            }
          ]
          privateRanges = [
            "string"
          ]
          signatureOverrides = [
            {
              id = "string"
              mode = "string"
            }
          ]
        }
        mode = "string"
      }
      sku = {
        tier = "string"
      }
      snat = {
        autoLearnPrivateRanges = "string"
        privateRanges = [
          "string"
        ]
      }
      sql = {
        allowSqlRedirect = bool
      }
      threatIntelMode = "string"
      threatIntelWhitelist = {
        fqdns = [
          "string"
        ]
        ipAddresses = [
          "string"
        ]
      }
      transportSecurity = {
        certificateAuthority = {
          keyVaultSecretId = "string"
          name = "string"
        }
      }
    }
  })
}

```

## Microsoft.Network/firewallPolicies/ruleCollectionGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/firewallPolicies/ruleCollectionGroups@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      priority = int
      ruleCollections = [
        {
          name = "string"
          priority = int
          ruleCollectionType = "string"
          // For remaining properties, see FirewallPolicyRuleCollection objects
        }
      ]
    }
  })
}

```

## Microsoft.Network/firewallPolicies/signatureOverrides@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/firewallPolicies/signatureOverrides@2023-04-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      signatures = {}
    }
  })
}

```

## Microsoft.Network/IpAllocations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/IpAllocations@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allocationTags = {}
      ipamAllocationId = "string"
      prefix = "string"
      prefixLength = int
      prefixType = "string"
      type = "string"
    }
  })
}

```

## Microsoft.Network/ipGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/ipGroups@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      ipAddresses = [
        "string"
      ]
    }
  })
}

```

## Microsoft.Network/loadBalancers@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/loadBalancers@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      backendAddressPools = [
        {
          id = "string"
          name = "string"
          properties = {
            drainPeriodInSeconds = int
            loadBalancerBackendAddresses = [
              {
                name = "string"
                properties = {
                  adminState = "string"
                  ipAddress = "string"
                  loadBalancerFrontendIPConfiguration = {
                    id = "string"
                  }
                  subnet = {
                    id = "string"
                  }
                  virtualNetwork = {
                    id = "string"
                  }
                }
              }
            ]
            location = "string"
            syncMode = "string"
            tunnelInterfaces = [
              {
                identifier = int
                port = int
                protocol = "string"
                type = "string"
              }
            ]
            virtualNetwork = {
              id = "string"
            }
          }
        }
      ]
      frontendIPConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            gatewayLoadBalancer = {
              id = "string"
            }
            privateIPAddress = "string"
            privateIPAddressVersion = "string"
            privateIPAllocationMethod = "string"
            publicIPAddress = {
              extendedLocation = {
                name = "string"
                type = "EdgeZone"
              }
              id = "string"
              location = "string"
              properties = {
                ddosSettings = {
                  ddosProtectionPlan = {
                    id = "string"
                  }
                  protectionMode = "string"
                }
                deleteOption = "string"
                dnsSettings = {
                  domainNameLabel = "string"
                  domainNameLabelScope = "string"
                  fqdn = "string"
                  reverseFqdn = "string"
                }
                idleTimeoutInMinutes = int
                ipAddress = "string"
                ipTags = [
                  {
                    ipTagType = "string"
                    tag = "string"
                  }
                ]
                linkedPublicIPAddress = {
                  public-ip-address-object
                }
                migrationPhase = "string"
                natGateway = {
                  id = "string"
                  location = "string"
                  properties = {
                    idleTimeoutInMinutes = int
                    publicIpAddresses = [
                      {
                        id = "string"
                      }
                    ]
                    publicIpPrefixes = [
                      {
                        id = "string"
                      }
                    ]
                  }
                  sku = {
                    name = "Standard"
                  }
                  tags = {}
                  zones = [
                    "string"
                  ]
                }
                publicIPAddressVersion = "string"
                publicIPAllocationMethod = "string"
                publicIPPrefix = {
                  id = "string"
                }
                servicePublicIPAddress = {
                  public-ip-address-object
                }
              }
              sku = {
                name = "string"
                tier = "string"
              }
              tags = {}
              zones = [
                "string"
              ]
            }
            publicIPPrefix = {
              id = "string"
            }
            subnet = {
              id = "string"
              name = "string"
              properties = {
                addressPrefix = "string"
                addressPrefixes = [
                  "string"
                ]
                applicationGatewayIPConfigurations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      subnet = {
                        id = "string"
                      }
                    }
                  }
                ]
                delegations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      serviceName = "string"
                    }
                    type = "string"
                  }
                ]
                ipAllocations = [
                  {
                    id = "string"
                  }
                ]
                natGateway = {
                  id = "string"
                }
                networkSecurityGroup = {
                  id = "string"
                  location = "string"
                  properties = {
                    flushConnection = bool
                    securityRules = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          access = "string"
                          description = "string"
                          destinationAddressPrefix = "string"
                          destinationAddressPrefixes = [
                            "string"
                          ]
                          destinationApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          destinationPortRange = "string"
                          destinationPortRanges = [
                            "string"
                          ]
                          direction = "string"
                          priority = int
                          protocol = "string"
                          sourceAddressPrefix = "string"
                          sourceAddressPrefixes = [
                            "string"
                          ]
                          sourceApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          sourcePortRange = "string"
                          sourcePortRanges = [
                            "string"
                          ]
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                privateEndpointNetworkPolicies = "string"
                privateLinkServiceNetworkPolicies = "string"
                routeTable = {
                  id = "string"
                  location = "string"
                  properties = {
                    disableBgpRoutePropagation = bool
                    routes = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          addressPrefix = "string"
                          hasBgpOverride = bool
                          nextHopIpAddress = "string"
                          nextHopType = "string"
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                serviceEndpointPolicies = [
                  {
                    id = "string"
                    location = "string"
                    properties = {
                      contextualServiceEndpointPolicies = [
                        "string"
                      ]
                      serviceAlias = "string"
                      serviceEndpointPolicyDefinitions = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            description = "string"
                            service = "string"
                            serviceResources = [
                              "string"
                            ]
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                ]
                serviceEndpoints = [
                  {
                    locations = [
                      "string"
                    ]
                    service = "string"
                  }
                ]
              }
              type = "string"
            }
          }
          zones = [
            "string"
          ]
        }
      ]
      inboundNatPools = [
        {
          id = "string"
          name = "string"
          properties = {
            backendPort = int
            enableFloatingIP = bool
            enableTcpReset = bool
            frontendIPConfiguration = {
              id = "string"
            }
            frontendPortRangeEnd = int
            frontendPortRangeStart = int
            idleTimeoutInMinutes = int
            protocol = "string"
          }
        }
      ]
      inboundNatRules = [
        {
          id = "string"
          name = "string"
          properties = {
            backendAddressPool = {
              id = "string"
            }
            backendPort = int
            enableFloatingIP = bool
            enableTcpReset = bool
            frontendIPConfiguration = {
              id = "string"
            }
            frontendPort = int
            frontendPortRangeEnd = int
            frontendPortRangeStart = int
            idleTimeoutInMinutes = int
            protocol = "string"
          }
        }
      ]
      loadBalancingRules = [
        {
          id = "string"
          name = "string"
          properties = {
            backendAddressPool = {
              id = "string"
            }
            backendAddressPools = [
              {
                id = "string"
              }
            ]
            backendPort = int
            disableOutboundSnat = bool
            enableFloatingIP = bool
            enableTcpReset = bool
            frontendIPConfiguration = {
              id = "string"
            }
            frontendPort = int
            idleTimeoutInMinutes = int
            loadDistribution = "string"
            probe = {
              id = "string"
            }
            protocol = "string"
          }
        }
      ]
      outboundRules = [
        {
          id = "string"
          name = "string"
          properties = {
            allocatedOutboundPorts = int
            backendAddressPool = {
              id = "string"
            }
            enableTcpReset = bool
            frontendIPConfigurations = [
              {
                id = "string"
              }
            ]
            idleTimeoutInMinutes = int
            protocol = "string"
          }
        }
      ]
      probes = [
        {
          id = "string"
          name = "string"
          properties = {
            intervalInSeconds = int
            numberOfProbes = int
            port = int
            probeThreshold = int
            protocol = "string"
            requestPath = "string"
          }
        }
      ]
    }
    sku = {
      name = "string"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Network/loadBalancers/backendAddressPools@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/loadBalancers/backendAddressPools@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      drainPeriodInSeconds = int
      loadBalancerBackendAddresses = [
        {
          name = "string"
          properties = {
            adminState = "string"
            ipAddress = "string"
            loadBalancerFrontendIPConfiguration = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
            virtualNetwork = {
              id = "string"
            }
          }
        }
      ]
      location = "string"
      syncMode = "string"
      tunnelInterfaces = [
        {
          identifier = int
          port = int
          protocol = "string"
          type = "string"
        }
      ]
      virtualNetwork = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.Network/loadBalancers/inboundNatRules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/loadBalancers/inboundNatRules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      backendAddressPool = {
        id = "string"
      }
      backendPort = int
      enableFloatingIP = bool
      enableTcpReset = bool
      frontendIPConfiguration = {
        id = "string"
      }
      frontendPort = int
      frontendPortRangeEnd = int
      frontendPortRangeStart = int
      idleTimeoutInMinutes = int
      protocol = "string"
    }
  })
}

```

## Microsoft.Network/localNetworkGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/localNetworkGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      bgpSettings = {
        asn = int
        bgpPeeringAddress = "string"
        bgpPeeringAddresses = [
          {
            customBgpIpAddresses = [
              "string"
            ]
            ipconfigurationId = "string"
          }
        ]
        peerWeight = int
      }
      fqdn = "string"
      gatewayIpAddress = "string"
      localNetworkAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
    }
  })
}

```

## Microsoft.Network/managementGroups/networkManagerConnections@2021-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/managementGroups/networkManagerConnections@2021-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      networkManagerId = "string"
    }
  })
}

```

## Microsoft.Network/natGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/natGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      idleTimeoutInMinutes = int
      publicIpAddresses = [
        {
          id = "string"
        }
      ]
      publicIpPrefixes = [
        {
          id = "string"
        }
      ]
    }
    zones = [
      "string"
    ]
    sku = {
      name = "Standard"
    }
  })
}

```

## Microsoft.Network/networkInterfaces@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkInterfaces@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      auxiliaryMode = "string"
      auxiliarySku = "string"
      disableTcpStateTracking = bool
      dnsSettings = {
        dnsServers = [
          "string"
        ]
        internalDnsNameLabel = "string"
      }
      enableAcceleratedNetworking = bool
      enableIPForwarding = bool
      ipConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            applicationGatewayBackendAddressPools = [
              {
                id = "string"
                name = "string"
                properties = {
                  backendAddresses = [
                    {
                      fqdn = "string"
                      ipAddress = "string"
                    }
                  ]
                }
              }
            ]
            applicationSecurityGroups = [
              {
                id = "string"
                location = "string"
                properties = {}
                tags = {}
              }
            ]
            gatewayLoadBalancer = {
              id = "string"
            }
            loadBalancerBackendAddressPools = [
              {
                id = "string"
                name = "string"
                properties = {
                  drainPeriodInSeconds = int
                  loadBalancerBackendAddresses = [
                    {
                      name = "string"
                      properties = {
                        adminState = "string"
                        ipAddress = "string"
                        loadBalancerFrontendIPConfiguration = {
                          id = "string"
                        }
                        subnet = {
                          id = "string"
                        }
                        virtualNetwork = {
                          id = "string"
                        }
                      }
                    }
                  ]
                  location = "string"
                  syncMode = "string"
                  tunnelInterfaces = [
                    {
                      identifier = int
                      port = int
                      protocol = "string"
                      type = "string"
                    }
                  ]
                  virtualNetwork = {
                    id = "string"
                  }
                }
              }
            ]
            loadBalancerInboundNatRules = [
              {
                id = "string"
                name = "string"
                properties = {
                  backendAddressPool = {
                    id = "string"
                  }
                  backendPort = int
                  enableFloatingIP = bool
                  enableTcpReset = bool
                  frontendIPConfiguration = {
                    id = "string"
                  }
                  frontendPort = int
                  frontendPortRangeEnd = int
                  frontendPortRangeStart = int
                  idleTimeoutInMinutes = int
                  protocol = "string"
                }
              }
            ]
            primary = bool
            privateIPAddress = "string"
            privateIPAddressVersion = "string"
            privateIPAllocationMethod = "string"
            publicIPAddress = {
              extendedLocation = {
                name = "string"
                type = "EdgeZone"
              }
              id = "string"
              location = "string"
              properties = {
                ddosSettings = {
                  ddosProtectionPlan = {
                    id = "string"
                  }
                  protectionMode = "string"
                }
                deleteOption = "string"
                dnsSettings = {
                  domainNameLabel = "string"
                  domainNameLabelScope = "string"
                  fqdn = "string"
                  reverseFqdn = "string"
                }
                idleTimeoutInMinutes = int
                ipAddress = "string"
                ipTags = [
                  {
                    ipTagType = "string"
                    tag = "string"
                  }
                ]
                linkedPublicIPAddress = {
                  public-ip-address-object
                }
                migrationPhase = "string"
                natGateway = {
                  id = "string"
                  location = "string"
                  properties = {
                    idleTimeoutInMinutes = int
                    publicIpAddresses = [
                      {
                        id = "string"
                      }
                    ]
                    publicIpPrefixes = [
                      {
                        id = "string"
                      }
                    ]
                  }
                  sku = {
                    name = "Standard"
                  }
                  tags = {}
                  zones = [
                    "string"
                  ]
                }
                publicIPAddressVersion = "string"
                publicIPAllocationMethod = "string"
                publicIPPrefix = {
                  id = "string"
                }
                servicePublicIPAddress = {
                  public-ip-address-object
                }
              }
              sku = {
                name = "string"
                tier = "string"
              }
              tags = {}
              zones = [
                "string"
              ]
            }
            subnet = {
              id = "string"
              name = "string"
              properties = {
                addressPrefix = "string"
                addressPrefixes = [
                  "string"
                ]
                applicationGatewayIPConfigurations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      subnet = {
                        id = "string"
                      }
                    }
                  }
                ]
                delegations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      serviceName = "string"
                    }
                    type = "string"
                  }
                ]
                ipAllocations = [
                  {
                    id = "string"
                  }
                ]
                natGateway = {
                  id = "string"
                }
                networkSecurityGroup = {
                  id = "string"
                  location = "string"
                  properties = {
                    flushConnection = bool
                    securityRules = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          access = "string"
                          description = "string"
                          destinationAddressPrefix = "string"
                          destinationAddressPrefixes = [
                            "string"
                          ]
                          destinationApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          destinationPortRange = "string"
                          destinationPortRanges = [
                            "string"
                          ]
                          direction = "string"
                          priority = int
                          protocol = "string"
                          sourceAddressPrefix = "string"
                          sourceAddressPrefixes = [
                            "string"
                          ]
                          sourceApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          sourcePortRange = "string"
                          sourcePortRanges = [
                            "string"
                          ]
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                privateEndpointNetworkPolicies = "string"
                privateLinkServiceNetworkPolicies = "string"
                routeTable = {
                  id = "string"
                  location = "string"
                  properties = {
                    disableBgpRoutePropagation = bool
                    routes = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          addressPrefix = "string"
                          hasBgpOverride = bool
                          nextHopIpAddress = "string"
                          nextHopType = "string"
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                serviceEndpointPolicies = [
                  {
                    id = "string"
                    location = "string"
                    properties = {
                      contextualServiceEndpointPolicies = [
                        "string"
                      ]
                      serviceAlias = "string"
                      serviceEndpointPolicyDefinitions = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            description = "string"
                            service = "string"
                            serviceResources = [
                              "string"
                            ]
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                ]
                serviceEndpoints = [
                  {
                    locations = [
                      "string"
                    ]
                    service = "string"
                  }
                ]
              }
              type = "string"
            }
            virtualNetworkTaps = [
              {
                id = "string"
                location = "string"
                properties = {
                  destinationLoadBalancerFrontEndIPConfiguration = {
                    id = "string"
                    name = "string"
                    properties = {
                      gatewayLoadBalancer = {
                        id = "string"
                      }
                      privateIPAddress = "string"
                      privateIPAddressVersion = "string"
                      privateIPAllocationMethod = "string"
                      publicIPAddress = {
                        extendedLocation = {
                          name = "string"
                          type = "EdgeZone"
                        }
                        id = "string"
                        location = "string"
                        properties = {
                          ddosSettings = {
                            ddosProtectionPlan = {
                              id = "string"
                            }
                            protectionMode = "string"
                          }
                          deleteOption = "string"
                          dnsSettings = {
                            domainNameLabel = "string"
                            domainNameLabelScope = "string"
                            fqdn = "string"
                            reverseFqdn = "string"
                          }
                          idleTimeoutInMinutes = int
                          ipAddress = "string"
                          ipTags = [
                            {
                              ipTagType = "string"
                              tag = "string"
                            }
                          ]
                          linkedPublicIPAddress = {
                            public-ip-address-object
                          }
                          migrationPhase = "string"
                          natGateway = {
                            id = "string"
                            location = "string"
                            properties = {
                              idleTimeoutInMinutes = int
                              publicIpAddresses = [
                                {
                                  id = "string"
                                }
                              ]
                              publicIpPrefixes = [
                                {
                                  id = "string"
                                }
                              ]
                            }
                            sku = {
                              name = "Standard"
                            }
                            tags = {}
                            zones = [
                              "string"
                            ]
                          }
                          publicIPAddressVersion = "string"
                          publicIPAllocationMethod = "string"
                          publicIPPrefix = {
                            id = "string"
                          }
                          servicePublicIPAddress = {
                            public-ip-address-object
                          }
                        }
                        sku = {
                          name = "string"
                          tier = "string"
                        }
                        tags = {}
                        zones = [
                          "string"
                        ]
                      }
                      publicIPPrefix = {
                        id = "string"
                      }
                      subnet = {
                        id = "string"
                        name = "string"
                        properties = {
                          addressPrefix = "string"
                          addressPrefixes = [
                            "string"
                          ]
                          applicationGatewayIPConfigurations = [
                            {
                              id = "string"
                              name = "string"
                              properties = {
                                subnet = {
                                  id = "string"
                                }
                              }
                            }
                          ]
                          delegations = [
                            {
                              id = "string"
                              name = "string"
                              properties = {
                                serviceName = "string"
                              }
                              type = "string"
                            }
                          ]
                          ipAllocations = [
                            {
                              id = "string"
                            }
                          ]
                          natGateway = {
                            id = "string"
                          }
                          networkSecurityGroup = {
                            id = "string"
                            location = "string"
                            properties = {
                              flushConnection = bool
                              securityRules = [
                                {
                                  id = "string"
                                  name = "string"
                                  properties = {
                                    access = "string"
                                    description = "string"
                                    destinationAddressPrefix = "string"
                                    destinationAddressPrefixes = [
                                      "string"
                                    ]
                                    destinationApplicationSecurityGroups = [
                                      {
                                        id = "string"
                                        location = "string"
                                        properties = {}
                                        tags = {}
                                      }
                                    ]
                                    destinationPortRange = "string"
                                    destinationPortRanges = [
                                      "string"
                                    ]
                                    direction = "string"
                                    priority = int
                                    protocol = "string"
                                    sourceAddressPrefix = "string"
                                    sourceAddressPrefixes = [
                                      "string"
                                    ]
                                    sourceApplicationSecurityGroups = [
                                      {
                                        id = "string"
                                        location = "string"
                                        properties = {}
                                        tags = {}
                                      }
                                    ]
                                    sourcePortRange = "string"
                                    sourcePortRanges = [
                                      "string"
                                    ]
                                  }
                                  type = "string"
                                }
                              ]
                            }
                            tags = {}
                          }
                          privateEndpointNetworkPolicies = "string"
                          privateLinkServiceNetworkPolicies = "string"
                          routeTable = {
                            id = "string"
                            location = "string"
                            properties = {
                              disableBgpRoutePropagation = bool
                              routes = [
                                {
                                  id = "string"
                                  name = "string"
                                  properties = {
                                    addressPrefix = "string"
                                    hasBgpOverride = bool
                                    nextHopIpAddress = "string"
                                    nextHopType = "string"
                                  }
                                  type = "string"
                                }
                              ]
                            }
                            tags = {}
                          }
                          serviceEndpointPolicies = [
                            {
                              id = "string"
                              location = "string"
                              properties = {
                                contextualServiceEndpointPolicies = [
                                  "string"
                                ]
                                serviceAlias = "string"
                                serviceEndpointPolicyDefinitions = [
                                  {
                                    id = "string"
                                    name = "string"
                                    properties = {
                                      description = "string"
                                      service = "string"
                                      serviceResources = [
                                        "string"
                                      ]
                                    }
                                    type = "string"
                                  }
                                ]
                              }
                              tags = {}
                            }
                          ]
                          serviceEndpoints = [
                            {
                              locations = [
                                "string"
                              ]
                              service = "string"
                            }
                          ]
                        }
                        type = "string"
                      }
                    }
                    zones = [
                      "string"
                    ]
                  }
                  destinationNetworkInterfaceIPConfiguration = {
                  destinationPort = int
                }
                tags = {}
              }
            ]
          }
          type = "string"
        }
      ]
      migrationPhase = "string"
      networkSecurityGroup = {
        id = "string"
        location = "string"
        properties = {
          flushConnection = bool
          securityRules = [
            {
              id = "string"
              name = "string"
              properties = {
                access = "string"
                description = "string"
                destinationAddressPrefix = "string"
                destinationAddressPrefixes = [
                  "string"
                ]
                destinationApplicationSecurityGroups = [
                  {
                    id = "string"
                    location = "string"
                    properties = {}
                    tags = {}
                  }
                ]
                destinationPortRange = "string"
                destinationPortRanges = [
                  "string"
                ]
                direction = "string"
                priority = int
                protocol = "string"
                sourceAddressPrefix = "string"
                sourceAddressPrefixes = [
                  "string"
                ]
                sourceApplicationSecurityGroups = [
                  {
                    id = "string"
                    location = "string"
                    properties = {}
                    tags = {}
                  }
                ]
                sourcePortRange = "string"
                sourcePortRanges = [
                  "string"
                ]
              }
              type = "string"
            }
          ]
        }
        tags = {}
      }
      nicType = "string"
      privateLinkService = {
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
          autoApproval = {
            subscriptions = [
              "string"
            ]
          }
          enableProxyProtocol = bool
          fqdns = [
            "string"
          ]
          ipConfigurations = [
            {
              id = "string"
              name = "string"
              properties = {
                primary = bool
                privateIPAddress = "string"
                privateIPAddressVersion = "string"
                privateIPAllocationMethod = "string"
                subnet = {
                  id = "string"
                  name = "string"
                  properties = {
                    addressPrefix = "string"
                    addressPrefixes = [
                      "string"
                    ]
                    applicationGatewayIPConfigurations = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          subnet = {
                            id = "string"
                          }
                        }
                      }
                    ]
                    delegations = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          serviceName = "string"
                        }
                        type = "string"
                      }
                    ]
                    ipAllocations = [
                      {
                        id = "string"
                      }
                    ]
                    natGateway = {
                      id = "string"
                    }
                    networkSecurityGroup = {
                      id = "string"
                      location = "string"
                      properties = {
                        flushConnection = bool
                        securityRules = [
                          {
                            id = "string"
                            name = "string"
                            properties = {
                              access = "string"
                              description = "string"
                              destinationAddressPrefix = "string"
                              destinationAddressPrefixes = [
                                "string"
                              ]
                              destinationApplicationSecurityGroups = [
                                {
                                  id = "string"
                                  location = "string"
                                  properties = {}
                                  tags = {}
                                }
                              ]
                              destinationPortRange = "string"
                              destinationPortRanges = [
                                "string"
                              ]
                              direction = "string"
                              priority = int
                              protocol = "string"
                              sourceAddressPrefix = "string"
                              sourceAddressPrefixes = [
                                "string"
                              ]
                              sourceApplicationSecurityGroups = [
                                {
                                  id = "string"
                                  location = "string"
                                  properties = {}
                                  tags = {}
                                }
                              ]
                              sourcePortRange = "string"
                              sourcePortRanges = [
                                "string"
                              ]
                            }
                            type = "string"
                          }
                        ]
                      }
                      tags = {}
                    }
                    privateEndpointNetworkPolicies = "string"
                    privateLinkServiceNetworkPolicies = "string"
                    routeTable = {
                      id = "string"
                      location = "string"
                      properties = {
                        disableBgpRoutePropagation = bool
                        routes = [
                          {
                            id = "string"
                            name = "string"
                            properties = {
                              addressPrefix = "string"
                              hasBgpOverride = bool
                              nextHopIpAddress = "string"
                              nextHopType = "string"
                            }
                            type = "string"
                          }
                        ]
                      }
                      tags = {}
                    }
                    serviceEndpointPolicies = [
                      {
                        id = "string"
                        location = "string"
                        properties = {
                          contextualServiceEndpointPolicies = [
                            "string"
                          ]
                          serviceAlias = "string"
                          serviceEndpointPolicyDefinitions = [
                            {
                              id = "string"
                              name = "string"
                              properties = {
                                description = "string"
                                service = "string"
                                serviceResources = [
                                  "string"
                                ]
                              }
                              type = "string"
                            }
                          ]
                        }
                        tags = {}
                      }
                    ]
                    serviceEndpoints = [
                      {
                        locations = [
                          "string"
                        ]
                        service = "string"
                      }
                    ]
                  }
                  type = "string"
                }
              }
            }
          ]
          loadBalancerFrontendIpConfigurations = [
            {
              id = "string"
              name = "string"
              properties = {
                gatewayLoadBalancer = {
                  id = "string"
                }
                privateIPAddress = "string"
                privateIPAddressVersion = "string"
                privateIPAllocationMethod = "string"
                publicIPAddress = {
                  extendedLocation = {
                    name = "string"
                    type = "EdgeZone"
                  }
                  id = "string"
                  location = "string"
                  properties = {
                    ddosSettings = {
                      ddosProtectionPlan = {
                        id = "string"
                      }
                      protectionMode = "string"
                    }
                    deleteOption = "string"
                    dnsSettings = {
                      domainNameLabel = "string"
                      domainNameLabelScope = "string"
                      fqdn = "string"
                      reverseFqdn = "string"
                    }
                    idleTimeoutInMinutes = int
                    ipAddress = "string"
                    ipTags = [
                      {
                        ipTagType = "string"
                        tag = "string"
                      }
                    ]
                    linkedPublicIPAddress = {
                      public-ip-address-object
                    }
                    migrationPhase = "string"
                    natGateway = {
                      id = "string"
                      location = "string"
                      properties = {
                        idleTimeoutInMinutes = int
                        publicIpAddresses = [
                          {
                            id = "string"
                          }
                        ]
                        publicIpPrefixes = [
                          {
                            id = "string"
                          }
                        ]
                      }
                      sku = {
                        name = "Standard"
                      }
                      tags = {}
                      zones = [
                        "string"
                      ]
                    }
                    publicIPAddressVersion = "string"
                    publicIPAllocationMethod = "string"
                    publicIPPrefix = {
                      id = "string"
                    }
                    servicePublicIPAddress = {
                      public-ip-address-object
                    }
                  }
                  sku = {
                    name = "string"
                    tier = "string"
                  }
                  tags = {}
                  zones = [
                    "string"
                  ]
                }
                publicIPPrefix = {
                  id = "string"
                }
                subnet = {
                  id = "string"
                  name = "string"
                  properties = {
                    addressPrefix = "string"
                    addressPrefixes = [
                      "string"
                    ]
                    applicationGatewayIPConfigurations = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          subnet = {
                            id = "string"
                          }
                        }
                      }
                    ]
                    delegations = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          serviceName = "string"
                        }
                        type = "string"
                      }
                    ]
                    ipAllocations = [
                      {
                        id = "string"
                      }
                    ]
                    natGateway = {
                      id = "string"
                    }
                    networkSecurityGroup = {
                      id = "string"
                      location = "string"
                      properties = {
                        flushConnection = bool
                        securityRules = [
                          {
                            id = "string"
                            name = "string"
                            properties = {
                              access = "string"
                              description = "string"
                              destinationAddressPrefix = "string"
                              destinationAddressPrefixes = [
                                "string"
                              ]
                              destinationApplicationSecurityGroups = [
                                {
                                  id = "string"
                                  location = "string"
                                  properties = {}
                                  tags = {}
                                }
                              ]
                              destinationPortRange = "string"
                              destinationPortRanges = [
                                "string"
                              ]
                              direction = "string"
                              priority = int
                              protocol = "string"
                              sourceAddressPrefix = "string"
                              sourceAddressPrefixes = [
                                "string"
                              ]
                              sourceApplicationSecurityGroups = [
                                {
                                  id = "string"
                                  location = "string"
                                  properties = {}
                                  tags = {}
                                }
                              ]
                              sourcePortRange = "string"
                              sourcePortRanges = [
                                "string"
                              ]
                            }
                            type = "string"
                          }
                        ]
                      }
                      tags = {}
                    }
                    privateEndpointNetworkPolicies = "string"
                    privateLinkServiceNetworkPolicies = "string"
                    routeTable = {
                      id = "string"
                      location = "string"
                      properties = {
                        disableBgpRoutePropagation = bool
                        routes = [
                          {
                            id = "string"
                            name = "string"
                            properties = {
                              addressPrefix = "string"
                              hasBgpOverride = bool
                              nextHopIpAddress = "string"
                              nextHopType = "string"
                            }
                            type = "string"
                          }
                        ]
                      }
                      tags = {}
                    }
                    serviceEndpointPolicies = [
                      {
                        id = "string"
                        location = "string"
                        properties = {
                          contextualServiceEndpointPolicies = [
                            "string"
                          ]
                          serviceAlias = "string"
                          serviceEndpointPolicyDefinitions = [
                            {
                              id = "string"
                              name = "string"
                              properties = {
                                description = "string"
                                service = "string"
                                serviceResources = [
                                  "string"
                                ]
                              }
                              type = "string"
                            }
                          ]
                        }
                        tags = {}
                      }
                    ]
                    serviceEndpoints = [
                      {
                        locations = [
                          "string"
                        ]
                        service = "string"
                      }
                    ]
                  }
                  type = "string"
                }
              }
              zones = [
                "string"
              ]
            }
          ]
          visibility = {
            subscriptions = [
              "string"
            ]
          }
        }
        tags = {}
      }
      workloadType = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Network/networkInterfaces/tapConfigurations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkInterfaces/tapConfigurations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      virtualNetworkTap = {
        id = "string"
        location = "string"
        properties = {
          destinationLoadBalancerFrontEndIPConfiguration = {
            id = "string"
            name = "string"
            properties = {
              gatewayLoadBalancer = {
                id = "string"
              }
              privateIPAddress = "string"
              privateIPAddressVersion = "string"
              privateIPAllocationMethod = "string"
              publicIPAddress = {
                extendedLocation = {
                  name = "string"
                  type = "EdgeZone"
                }
                id = "string"
                location = "string"
                properties = {
                  ddosSettings = {
                    ddosProtectionPlan = {
                      id = "string"
                    }
                    protectionMode = "string"
                  }
                  deleteOption = "string"
                  dnsSettings = {
                    domainNameLabel = "string"
                    domainNameLabelScope = "string"
                    fqdn = "string"
                    reverseFqdn = "string"
                  }
                  idleTimeoutInMinutes = int
                  ipAddress = "string"
                  ipTags = [
                    {
                      ipTagType = "string"
                      tag = "string"
                    }
                  ]
                  linkedPublicIPAddress = {
                    public-ip-address-object
                  }
                  migrationPhase = "string"
                  natGateway = {
                    id = "string"
                    location = "string"
                    properties = {
                      idleTimeoutInMinutes = int
                      publicIpAddresses = [
                        {
                          id = "string"
                        }
                      ]
                      publicIpPrefixes = [
                        {
                          id = "string"
                        }
                      ]
                    }
                    sku = {
                      name = "Standard"
                    }
                    tags = {}
                    zones = [
                      "string"
                    ]
                  }
                  publicIPAddressVersion = "string"
                  publicIPAllocationMethod = "string"
                  publicIPPrefix = {
                    id = "string"
                  }
                  servicePublicIPAddress = {
                    public-ip-address-object
                  }
                }
                sku = {
                  name = "string"
                  tier = "string"
                }
                tags = {}
                zones = [
                  "string"
                ]
              }
              publicIPPrefix = {
                id = "string"
              }
              subnet = {
                id = "string"
                name = "string"
                properties = {
                  addressPrefix = "string"
                  addressPrefixes = [
                    "string"
                  ]
                  applicationGatewayIPConfigurations = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        subnet = {
                          id = "string"
                        }
                      }
                    }
                  ]
                  delegations = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        serviceName = "string"
                      }
                      type = "string"
                    }
                  ]
                  ipAllocations = [
                    {
                      id = "string"
                    }
                  ]
                  natGateway = {
                    id = "string"
                  }
                  networkSecurityGroup = {
                    id = "string"
                    location = "string"
                    properties = {
                      flushConnection = bool
                      securityRules = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            access = "string"
                            description = "string"
                            destinationAddressPrefix = "string"
                            destinationAddressPrefixes = [
                              "string"
                            ]
                            destinationApplicationSecurityGroups = [
                              {
                                id = "string"
                                location = "string"
                                properties = {}
                                tags = {}
                              }
                            ]
                            destinationPortRange = "string"
                            destinationPortRanges = [
                              "string"
                            ]
                            direction = "string"
                            priority = int
                            protocol = "string"
                            sourceAddressPrefix = "string"
                            sourceAddressPrefixes = [
                              "string"
                            ]
                            sourceApplicationSecurityGroups = [
                              {
                                id = "string"
                                location = "string"
                                properties = {}
                                tags = {}
                              }
                            ]
                            sourcePortRange = "string"
                            sourcePortRanges = [
                              "string"
                            ]
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                  privateEndpointNetworkPolicies = "string"
                  privateLinkServiceNetworkPolicies = "string"
                  routeTable = {
                    id = "string"
                    location = "string"
                    properties = {
                      disableBgpRoutePropagation = bool
                      routes = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            addressPrefix = "string"
                            hasBgpOverride = bool
                            nextHopIpAddress = "string"
                            nextHopType = "string"
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                  serviceEndpointPolicies = [
                    {
                      id = "string"
                      location = "string"
                      properties = {
                        contextualServiceEndpointPolicies = [
                          "string"
                        ]
                        serviceAlias = "string"
                        serviceEndpointPolicyDefinitions = [
                          {
                            id = "string"
                            name = "string"
                            properties = {
                              description = "string"
                              service = "string"
                              serviceResources = [
                                "string"
                              ]
                            }
                            type = "string"
                          }
                        ]
                      }
                      tags = {}
                    }
                  ]
                  serviceEndpoints = [
                    {
                      locations = [
                        "string"
                      ]
                      service = "string"
                    }
                  ]
                }
                type = "string"
              }
            }
            zones = [
              "string"
            ]
          }
          destinationNetworkInterfaceIPConfiguration = {
            id = "string"
            name = "string"
            properties = {
              applicationGatewayBackendAddressPools = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    backendAddresses = [
                      {
                        fqdn = "string"
                        ipAddress = "string"
                      }
                    ]
                  }
                }
              ]
              applicationSecurityGroups = [
                {
                  id = "string"
                  location = "string"
                  properties = {}
                  tags = {}
                }
              ]
              gatewayLoadBalancer = {
                id = "string"
              }
              loadBalancerBackendAddressPools = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    drainPeriodInSeconds = int
                    loadBalancerBackendAddresses = [
                      {
                        name = "string"
                        properties = {
                          adminState = "string"
                          ipAddress = "string"
                          loadBalancerFrontendIPConfiguration = {
                            id = "string"
                          }
                          subnet = {
                            id = "string"
                          }
                          virtualNetwork = {
                            id = "string"
                          }
                        }
                      }
                    ]
                    location = "string"
                    syncMode = "string"
                    tunnelInterfaces = [
                      {
                        identifier = int
                        port = int
                        protocol = "string"
                        type = "string"
                      }
                    ]
                    virtualNetwork = {
                      id = "string"
                    }
                  }
                }
              ]
              loadBalancerInboundNatRules = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    backendAddressPool = {
                      id = "string"
                    }
                    backendPort = int
                    enableFloatingIP = bool
                    enableTcpReset = bool
                    frontendIPConfiguration = {
                      id = "string"
                    }
                    frontendPort = int
                    frontendPortRangeEnd = int
                    frontendPortRangeStart = int
                    idleTimeoutInMinutes = int
                    protocol = "string"
                  }
                }
              ]
              primary = bool
              privateIPAddress = "string"
              privateIPAddressVersion = "string"
              privateIPAllocationMethod = "string"
              publicIPAddress = {
                extendedLocation = {
                  name = "string"
                  type = "EdgeZone"
                }
                id = "string"
                location = "string"
                properties = {
                  ddosSettings = {
                    ddosProtectionPlan = {
                      id = "string"
                    }
                    protectionMode = "string"
                  }
                  deleteOption = "string"
                  dnsSettings = {
                    domainNameLabel = "string"
                    domainNameLabelScope = "string"
                    fqdn = "string"
                    reverseFqdn = "string"
                  }
                  idleTimeoutInMinutes = int
                  ipAddress = "string"
                  ipTags = [
                    {
                      ipTagType = "string"
                      tag = "string"
                    }
                  ]
                  linkedPublicIPAddress = {
                    public-ip-address-object
                  }
                  migrationPhase = "string"
                  natGateway = {
                    id = "string"
                    location = "string"
                    properties = {
                      idleTimeoutInMinutes = int
                      publicIpAddresses = [
                        {
                          id = "string"
                        }
                      ]
                      publicIpPrefixes = [
                        {
                          id = "string"
                        }
                      ]
                    }
                    sku = {
                      name = "Standard"
                    }
                    tags = {}
                    zones = [
                      "string"
                    ]
                  }
                  publicIPAddressVersion = "string"
                  publicIPAllocationMethod = "string"
                  publicIPPrefix = {
                    id = "string"
                  }
                  servicePublicIPAddress = {
                    public-ip-address-object
                  }
                }
                sku = {
                  name = "string"
                  tier = "string"
                }
                tags = {}
                zones = [
                  "string"
                ]
              }
              subnet = {
                id = "string"
                name = "string"
                properties = {
                  addressPrefix = "string"
                  addressPrefixes = [
                    "string"
                  ]
                  applicationGatewayIPConfigurations = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        subnet = {
                          id = "string"
                        }
                      }
                    }
                  ]
                  delegations = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        serviceName = "string"
                      }
                      type = "string"
                    }
                  ]
                  ipAllocations = [
                    {
                      id = "string"
                    }
                  ]
                  natGateway = {
                    id = "string"
                  }
                  networkSecurityGroup = {
                    id = "string"
                    location = "string"
                    properties = {
                      flushConnection = bool
                      securityRules = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            access = "string"
                            description = "string"
                            destinationAddressPrefix = "string"
                            destinationAddressPrefixes = [
                              "string"
                            ]
                            destinationApplicationSecurityGroups = [
                              {
                                id = "string"
                                location = "string"
                                properties = {}
                                tags = {}
                              }
                            ]
                            destinationPortRange = "string"
                            destinationPortRanges = [
                              "string"
                            ]
                            direction = "string"
                            priority = int
                            protocol = "string"
                            sourceAddressPrefix = "string"
                            sourceAddressPrefixes = [
                              "string"
                            ]
                            sourceApplicationSecurityGroups = [
                              {
                                id = "string"
                                location = "string"
                                properties = {}
                                tags = {}
                              }
                            ]
                            sourcePortRange = "string"
                            sourcePortRanges = [
                              "string"
                            ]
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                  privateEndpointNetworkPolicies = "string"
                  privateLinkServiceNetworkPolicies = "string"
                  routeTable = {
                    id = "string"
                    location = "string"
                    properties = {
                      disableBgpRoutePropagation = bool
                      routes = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            addressPrefix = "string"
                            hasBgpOverride = bool
                            nextHopIpAddress = "string"
                            nextHopType = "string"
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                  serviceEndpointPolicies = [
                    {
                      id = "string"
                      location = "string"
                      properties = {
                        contextualServiceEndpointPolicies = [
                          "string"
                        ]
                        serviceAlias = "string"
                        serviceEndpointPolicyDefinitions = [
                          {
                            id = "string"
                            name = "string"
                            properties = {
                              description = "string"
                              service = "string"
                              serviceResources = [
                                "string"
                              ]
                            }
                            type = "string"
                          }
                        ]
                      }
                      tags = {}
                    }
                  ]
                  serviceEndpoints = [
                    {
                      locations = [
                        "string"
                      ]
                      service = "string"
                    }
                  ]
                }
                type = "string"
              }
              virtualNetworkTaps = [
                {
            }
            type = "string"
          }
          destinationPort = int
        }
        tags = {}
      }
    }
  })
}

```

## Microsoft.Network/networkManagerConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagerConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      networkManagerId = "string"
    }
  })
}

```

## Microsoft.Network/networkManagers@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      networkManagerScopeAccesses = [
        "string"
      ]
      networkManagerScopes = {
        managementGroups = [
          "string"
        ]
        subscriptions = [
          "string"
        ]
      }
    }
  })
}

```

## Microsoft.Network/networkManagers/connectivityConfigurations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/connectivityConfigurations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliesToGroups = [
        {
          groupConnectivity = "string"
          isGlobal = "string"
          networkGroupId = "string"
          useHubGateway = "string"
        }
      ]
      connectivityTopology = "string"
      deleteExistingPeering = "string"
      description = "string"
      hubs = [
        {
          resourceId = "string"
          resourceType = "string"
        }
      ]
      isGlobal = "string"
    }
  })
}

```

## Microsoft.Network/networkManagers/networkGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/networkGroups@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
    }
  })
}

```

## Microsoft.Network/networkManagers/networkGroups/staticMembers@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/networkGroups/staticMembers@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      resourceId = "string"
    }
  })
}

```

## Microsoft.Network/networkManagers/scopeConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/scopeConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      resourceId = "string"
      tenantId = "string"
    }
  })
}

```

## Microsoft.Network/networkManagers/securityAdminConfigurations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityAdminConfigurations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      applyOnNetworkIntentPolicyBasedServices = [
        "string"
      ]
      description = "string"
    }
  })
}

```

## Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliesToGroups = [
        {
          networkGroupId = "string"
        }
      ]
      description = "string"
    }
  })
}

```

## Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2023-04-01"
  name = "string"
  parent_id = "string"
  // For remaining properties, see networkManagers/securityAdminConfigurations/ruleCollections/rules objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.Network/networkManagers/securityUserConfigurations@2022-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityUserConfigurations@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      deleteExistingNSGs = "string"
      description = "string"
    }
  })
}

```

## Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections@2022-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      appliesToGroups = [
        {
          networkGroupId = "string"
        }
      ]
      description = "string"
    }
  })
}

```

## Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2022-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2022-04-01-preview"
  name = "string"
  parent_id = "string"
  // For remaining properties, see networkManagers/securityUserConfigurations/ruleCollections/rules objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.Network/networkProfiles@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkProfiles@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      containerNetworkInterfaceConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            containerNetworkInterfaces = [
              {
                id = "string"
              }
            ]
            ipConfigurations = [
              {
                id = "string"
                name = "string"
                properties = {
                  subnet = {
                    id = "string"
                    name = "string"
                    properties = {
                      addressPrefix = "string"
                      addressPrefixes = [
                        "string"
                      ]
                      applicationGatewayIPConfigurations = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            subnet = {
                              id = "string"
                            }
                          }
                        }
                      ]
                      delegations = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            serviceName = "string"
                          }
                          type = "string"
                        }
                      ]
                      ipAllocations = [
                        {
                          id = "string"
                        }
                      ]
                      natGateway = {
                        id = "string"
                      }
                      networkSecurityGroup = {
                        id = "string"
                        location = "string"
                        properties = {
                          flushConnection = bool
                          securityRules = [
                            {
                              id = "string"
                              name = "string"
                              properties = {
                                access = "string"
                                description = "string"
                                destinationAddressPrefix = "string"
                                destinationAddressPrefixes = [
                                  "string"
                                ]
                                destinationApplicationSecurityGroups = [
                                  {
                                    id = "string"
                                    location = "string"
                                    properties = {}
                                    tags = {}
                                  }
                                ]
                                destinationPortRange = "string"
                                destinationPortRanges = [
                                  "string"
                                ]
                                direction = "string"
                                priority = int
                                protocol = "string"
                                sourceAddressPrefix = "string"
                                sourceAddressPrefixes = [
                                  "string"
                                ]
                                sourceApplicationSecurityGroups = [
                                  {
                                    id = "string"
                                    location = "string"
                                    properties = {}
                                    tags = {}
                                  }
                                ]
                                sourcePortRange = "string"
                                sourcePortRanges = [
                                  "string"
                                ]
                              }
                              type = "string"
                            }
                          ]
                        }
                        tags = {}
                      }
                      privateEndpointNetworkPolicies = "string"
                      privateLinkServiceNetworkPolicies = "string"
                      routeTable = {
                        id = "string"
                        location = "string"
                        properties = {
                          disableBgpRoutePropagation = bool
                          routes = [
                            {
                              id = "string"
                              name = "string"
                              properties = {
                                addressPrefix = "string"
                                hasBgpOverride = bool
                                nextHopIpAddress = "string"
                                nextHopType = "string"
                              }
                              type = "string"
                            }
                          ]
                        }
                        tags = {}
                      }
                      serviceEndpointPolicies = [
                        {
                          id = "string"
                          location = "string"
                          properties = {
                            contextualServiceEndpointPolicies = [
                              "string"
                            ]
                            serviceAlias = "string"
                            serviceEndpointPolicyDefinitions = [
                              {
                                id = "string"
                                name = "string"
                                properties = {
                                  description = "string"
                                  service = "string"
                                  serviceResources = [
                                    "string"
                                  ]
                                }
                                type = "string"
                              }
                            ]
                          }
                          tags = {}
                        }
                      ]
                      serviceEndpoints = [
                        {
                          locations = [
                            "string"
                          ]
                          service = "string"
                        }
                      ]
                    }
                    type = "string"
                  }
                }
              }
            ]
          }
        }
      ]
    }
  })
}

```

## Microsoft.Network/networkSecurityGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityGroups@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      flushConnection = bool
      securityRules = [
        {
          id = "string"
          name = "string"
          properties = {
            access = "string"
            description = "string"
            destinationAddressPrefix = "string"
            destinationAddressPrefixes = [
              "string"
            ]
            destinationApplicationSecurityGroups = [
              {
                id = "string"
                location = "string"
                properties = {}
                tags = {}
              }
            ]
            destinationPortRange = "string"
            destinationPortRanges = [
              "string"
            ]
            direction = "string"
            priority = int
            protocol = "string"
            sourceAddressPrefix = "string"
            sourceAddressPrefixes = [
              "string"
            ]
            sourceApplicationSecurityGroups = [
              {
                id = "string"
                location = "string"
                properties = {}
                tags = {}
              }
            ]
            sourcePortRange = "string"
            sourcePortRanges = [
              "string"
            ]
          }
          type = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Network/networkSecurityGroups/securityRules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityGroups/securityRules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      access = "string"
      description = "string"
      destinationAddressPrefix = "string"
      destinationAddressPrefixes = [
        "string"
      ]
      destinationApplicationSecurityGroups = [
        {
          id = "string"
          location = "string"
          properties = {}
          tags = {}
        }
      ]
      destinationPortRange = "string"
      destinationPortRanges = [
        "string"
      ]
      direction = "string"
      priority = int
      protocol = "string"
      sourceAddressPrefix = "string"
      sourceAddressPrefixes = [
        "string"
      ]
      sourceApplicationSecurityGroups = [
        {
          id = "string"
          location = "string"
          properties = {}
          tags = {}
        }
      ]
      sourcePortRange = "string"
      sourcePortRanges = [
        "string"
      ]
    }
  })
}

```

## Microsoft.Network/networkSecurityPerimeters@2021-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters@2021-03-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
      displayName = "string"
    }
  })
}

```

## Microsoft.Network/networkSecurityPerimeters/links@2021-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters/links@2021-02-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoApprovedRemotePerimeterResourceId = "string"
      description = "string"
      localInboundProfiles = [
        "string"
      ]
      remoteInboundProfiles = [
        "string"
      ]
    }
  })
}

```

## Microsoft.Network/networkSecurityPerimeters/profiles@2021-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters/profiles@2021-02-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2021-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2021-02-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addressPrefixes = [
        "string"
      ]
      direction = "string"
      emailAddresses = [
        "string"
      ]
      fullyQualifiedDomainNames = [
        "string"
      ]
      phoneNumbers = [
        "string"
      ]
      subscriptions = [
        {
          id = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2021-02-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2021-02-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      accessMode = "string"
      privateLinkResource = {
        id = "string"
      }
      profile = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.Network/networkVirtualAppliances@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkVirtualAppliances@2023-04-01"
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
      additionalNics = [
        {
          hasPublicIp = bool
          name = "string"
        }
      ]
      bootStrapConfigurationBlobs = [
        "string"
      ]
      cloudInitConfiguration = "string"
      cloudInitConfigurationBlobs = [
        "string"
      ]
      delegation = {
        serviceName = "string"
      }
      nvaSku = {
        bundledScaleUnit = "string"
        marketPlaceVersion = "string"
        vendor = "string"
      }
      partnerManagedResource = {}
      sshPublicKey = "string"
      virtualApplianceAsn = int
      virtualHub = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.Network/networkVirtualAppliances/inboundSecurityRules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkVirtualAppliances/inboundSecurityRules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rules = [
        {
          destinationPortRange = int
          protocol = "string"
          sourceAddressPrefix = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Network/networkVirtualAppliances/networkVirtualApplianceConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkVirtualAppliances/networkVirtualApplianceConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      asn = int
      bgpPeerAddress = [
        "string"
      ]
      enableInternetSecurity = bool
      name = "string"
      routingConfiguration = {
        associatedRouteTable = {
          resourceUri = "string"
        }
        inboundRouteMap = {
          resourceUri = "string"
        }
        outboundRouteMap = {
          resourceUri = "string"
        }
        propagatedRouteTables = {
          ids = [
            {
              resourceUri = "string"
            }
          ]
          labels = [
            "string"
          ]
        }
      }
      tunnelIdentifier = int
    }
  })
}

```

## Microsoft.Network/networkVirtualAppliances/virtualApplianceSites@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkVirtualAppliances/virtualApplianceSites@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      o365Policy = {
        breakOutCategories = {
          allow = bool
          default = bool
          optimize = bool
        }
      }
    }
  })
}

```

## Microsoft.Network/networkWatchers@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkWatchers@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.Network/networkWatchers/connectionMonitors@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkWatchers/connectionMonitors@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoStart = bool
      destination = {
        address = "string"
        port = int
        resourceId = "string"
      }
      endpoints = [
        {
          address = "string"
          coverageLevel = "string"
          filter = {
            items = [
              {
                address = "string"
                type = "AgentAddress"
              }
            ]
            type = "Include"
          }
          name = "string"
          resourceId = "string"
          scope = {
            exclude = [
              {
                address = "string"
              }
            ]
            include = [
              {
                address = "string"
              }
            ]
          }
          type = "string"
        }
      ]
      monitoringIntervalInSeconds = int
      notes = "string"
      outputs = [
        {
          type = "Workspace"
          workspaceSettings = {
            workspaceResourceId = "string"
          }
        }
      ]
      source = {
        port = int
        resourceId = "string"
      }
      testConfigurations = [
        {
          httpConfiguration = {
            method = "string"
            path = "string"
            port = int
            preferHTTPS = bool
            requestHeaders = [
              {
                name = "string"
                value = "string"
              }
            ]
            validStatusCodeRanges = [
              "string"
            ]
          }
          icmpConfiguration = {
            disableTraceRoute = bool
          }
          name = "string"
          preferredIPVersion = "string"
          protocol = "string"
          successThreshold = {
            checksFailedPercent = int
            roundTripTimeMs = int
          }
          tcpConfiguration = {
            destinationPortBehavior = "string"
            disableTraceRoute = bool
            port = int
          }
          testFrequencySec = int
        }
      ]
      testGroups = [
        {
          destinations = [
            "string"
          ]
          disable = bool
          name = "string"
          sources = [
            "string"
          ]
          testConfigurations = [
            "string"
          ]
        }
      ]
    }
  })
}

```

## Microsoft.Network/networkWatchers/flowLogs@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkWatchers/flowLogs@2023-04-01"
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
      flowAnalyticsConfiguration = {
        networkWatcherFlowAnalyticsConfiguration = {
          enabled = bool
          trafficAnalyticsInterval = int
          workspaceId = "string"
          workspaceRegion = "string"
          workspaceResourceId = "string"
        }
      }
      format = {
        type = "JSON"
        version = int
      }
      retentionPolicy = {
        days = int
        enabled = bool
      }
      storageId = "string"
      targetResourceId = "string"
    }
  })
}

```

## Microsoft.Network/networkWatchers/packetCaptures@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/networkWatchers/packetCaptures@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      bytesToCapturePerPacket = int
      filters = [
        {
          localIPAddress = "string"
          localPort = "string"
          protocol = "string"
          remoteIPAddress = "string"
          remotePort = "string"
        }
      ]
      scope = {
        exclude = [
          "string"
        ]
        include = [
          "string"
        ]
      }
      storageLocation = {
        filePath = "string"
        storageId = "string"
        storagePath = "string"
      }
      target = "string"
      targetType = "string"
      timeLimitInSeconds = int
      totalBytesPerSession = int
    }
  })
}

```

## Microsoft.Network/p2svpnGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/p2svpnGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customDnsServers = [
        "string"
      ]
      isRoutingPreferenceInternet = bool
      p2SConnectionConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            enableInternetSecurity = bool
            routingConfiguration = {
              associatedRouteTable = {
                id = "string"
              }
              inboundRouteMap = {
                id = "string"
              }
              outboundRouteMap = {
                id = "string"
              }
              propagatedRouteTables = {
                ids = [
                  {
                    id = "string"
                  }
                ]
                labels = [
                  "string"
                ]
              }
              vnetRoutes = {
                staticRoutes = [
                  {
                    addressPrefixes = [
                      "string"
                    ]
                    name = "string"
                    nextHopIpAddress = "string"
                  }
                ]
                staticRoutesConfig = {
                  vnetLocalRouteOverrideCriteria = "string"
                }
              }
            }
            vpnClientAddressPool = {
              addressPrefixes = [
                "string"
              ]
            }
          }
        }
      ]
      virtualHub = {
        id = "string"
      }
      vpnGatewayScaleUnit = int
      vpnServerConfiguration = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.Network/privateEndpoints@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateEndpoints@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      applicationSecurityGroups = [
        {
          id = "string"
          location = "string"
          properties = {}
          tags = {}
        }
      ]
      customDnsConfigs = [
        {
          fqdn = "string"
          ipAddresses = [
            "string"
          ]
        }
      ]
      customNetworkInterfaceName = "string"
      ipConfigurations = [
        {
          name = "string"
          properties = {
            groupId = "string"
            memberName = "string"
            privateIPAddress = "string"
          }
        }
      ]
      manualPrivateLinkServiceConnections = [
        {
          id = "string"
          name = "string"
          properties = {
            groupIds = [
              "string"
            ]
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
            privateLinkServiceId = "string"
            requestMessage = "string"
          }
        }
      ]
      privateLinkServiceConnections = [
        {
          id = "string"
          name = "string"
          properties = {
            groupIds = [
              "string"
            ]
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
            privateLinkServiceId = "string"
            requestMessage = "string"
          }
        }
      ]
      subnet = {
        id = "string"
        name = "string"
        properties = {
          addressPrefix = "string"
          addressPrefixes = [
            "string"
          ]
          applicationGatewayIPConfigurations = [
            {
              id = "string"
              name = "string"
              properties = {
                subnet = {
                  id = "string"
                }
              }
            }
          ]
          delegations = [
            {
              id = "string"
              name = "string"
              properties = {
                serviceName = "string"
              }
              type = "string"
            }
          ]
          ipAllocations = [
            {
              id = "string"
            }
          ]
          natGateway = {
            id = "string"
          }
          networkSecurityGroup = {
            id = "string"
            location = "string"
            properties = {
              flushConnection = bool
              securityRules = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    access = "string"
                    description = "string"
                    destinationAddressPrefix = "string"
                    destinationAddressPrefixes = [
                      "string"
                    ]
                    destinationApplicationSecurityGroups = [
                      {
                        id = "string"
                        location = "string"
                        properties = {}
                        tags = {}
                      }
                    ]
                    destinationPortRange = "string"
                    destinationPortRanges = [
                      "string"
                    ]
                    direction = "string"
                    priority = int
                    protocol = "string"
                    sourceAddressPrefix = "string"
                    sourceAddressPrefixes = [
                      "string"
                    ]
                    sourceApplicationSecurityGroups = [
                      {
                        id = "string"
                        location = "string"
                        properties = {}
                        tags = {}
                      }
                    ]
                    sourcePortRange = "string"
                    sourcePortRanges = [
                      "string"
                    ]
                  }
                  type = "string"
                }
              ]
            }
            tags = {}
          }
          privateEndpointNetworkPolicies = "string"
          privateLinkServiceNetworkPolicies = "string"
          routeTable = {
            id = "string"
            location = "string"
            properties = {
              disableBgpRoutePropagation = bool
              routes = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    addressPrefix = "string"
                    hasBgpOverride = bool
                    nextHopIpAddress = "string"
                    nextHopType = "string"
                  }
                  type = "string"
                }
              ]
            }
            tags = {}
          }
          serviceEndpointPolicies = [
            {
              id = "string"
              location = "string"
              properties = {
                contextualServiceEndpointPolicies = [
                  "string"
                ]
                serviceAlias = "string"
                serviceEndpointPolicyDefinitions = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      description = "string"
                      service = "string"
                      serviceResources = [
                        "string"
                      ]
                    }
                    type = "string"
                  }
                ]
              }
              tags = {}
            }
          ]
          serviceEndpoints = [
            {
              locations = [
                "string"
              ]
              service = "string"
            }
          ]
        }
        type = "string"
      }
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Network/privateEndpoints/privateDnsZoneGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateEndpoints/privateDnsZoneGroups@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateDnsZoneConfigs = [
        {
          name = "string"
          properties = {
            privateDnsZoneId = "string"
          }
        }
      ]
    }
  })
}

```

## Microsoft.Network/privateLinkServices@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateLinkServices@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoApproval = {
        subscriptions = [
          "string"
        ]
      }
      enableProxyProtocol = bool
      fqdns = [
        "string"
      ]
      ipConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            primary = bool
            privateIPAddress = "string"
            privateIPAddressVersion = "string"
            privateIPAllocationMethod = "string"
            subnet = {
              id = "string"
              name = "string"
              properties = {
                addressPrefix = "string"
                addressPrefixes = [
                  "string"
                ]
                applicationGatewayIPConfigurations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      subnet = {
                        id = "string"
                      }
                    }
                  }
                ]
                delegations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      serviceName = "string"
                    }
                    type = "string"
                  }
                ]
                ipAllocations = [
                  {
                    id = "string"
                  }
                ]
                natGateway = {
                  id = "string"
                }
                networkSecurityGroup = {
                  id = "string"
                  location = "string"
                  properties = {
                    flushConnection = bool
                    securityRules = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          access = "string"
                          description = "string"
                          destinationAddressPrefix = "string"
                          destinationAddressPrefixes = [
                            "string"
                          ]
                          destinationApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          destinationPortRange = "string"
                          destinationPortRanges = [
                            "string"
                          ]
                          direction = "string"
                          priority = int
                          protocol = "string"
                          sourceAddressPrefix = "string"
                          sourceAddressPrefixes = [
                            "string"
                          ]
                          sourceApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          sourcePortRange = "string"
                          sourcePortRanges = [
                            "string"
                          ]
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                privateEndpointNetworkPolicies = "string"
                privateLinkServiceNetworkPolicies = "string"
                routeTable = {
                  id = "string"
                  location = "string"
                  properties = {
                    disableBgpRoutePropagation = bool
                    routes = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          addressPrefix = "string"
                          hasBgpOverride = bool
                          nextHopIpAddress = "string"
                          nextHopType = "string"
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                serviceEndpointPolicies = [
                  {
                    id = "string"
                    location = "string"
                    properties = {
                      contextualServiceEndpointPolicies = [
                        "string"
                      ]
                      serviceAlias = "string"
                      serviceEndpointPolicyDefinitions = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            description = "string"
                            service = "string"
                            serviceResources = [
                              "string"
                            ]
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                ]
                serviceEndpoints = [
                  {
                    locations = [
                      "string"
                    ]
                    service = "string"
                  }
                ]
              }
              type = "string"
            }
          }
        }
      ]
      loadBalancerFrontendIpConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            gatewayLoadBalancer = {
              id = "string"
            }
            privateIPAddress = "string"
            privateIPAddressVersion = "string"
            privateIPAllocationMethod = "string"
            publicIPAddress = {
              extendedLocation = {
                name = "string"
                type = "EdgeZone"
              }
              id = "string"
              location = "string"
              properties = {
                ddosSettings = {
                  ddosProtectionPlan = {
                    id = "string"
                  }
                  protectionMode = "string"
                }
                deleteOption = "string"
                dnsSettings = {
                  domainNameLabel = "string"
                  domainNameLabelScope = "string"
                  fqdn = "string"
                  reverseFqdn = "string"
                }
                idleTimeoutInMinutes = int
                ipAddress = "string"
                ipTags = [
                  {
                    ipTagType = "string"
                    tag = "string"
                  }
                ]
                linkedPublicIPAddress = {
                  public-ip-address-object
                }
                migrationPhase = "string"
                natGateway = {
                  id = "string"
                  location = "string"
                  properties = {
                    idleTimeoutInMinutes = int
                    publicIpAddresses = [
                      {
                        id = "string"
                      }
                    ]
                    publicIpPrefixes = [
                      {
                        id = "string"
                      }
                    ]
                  }
                  sku = {
                    name = "Standard"
                  }
                  tags = {}
                  zones = [
                    "string"
                  ]
                }
                publicIPAddressVersion = "string"
                publicIPAllocationMethod = "string"
                publicIPPrefix = {
                  id = "string"
                }
                servicePublicIPAddress = {
                  public-ip-address-object
                }
              }
              sku = {
                name = "string"
                tier = "string"
              }
              tags = {}
              zones = [
                "string"
              ]
            }
            publicIPPrefix = {
              id = "string"
            }
            subnet = {
              id = "string"
              name = "string"
              properties = {
                addressPrefix = "string"
                addressPrefixes = [
                  "string"
                ]
                applicationGatewayIPConfigurations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      subnet = {
                        id = "string"
                      }
                    }
                  }
                ]
                delegations = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      serviceName = "string"
                    }
                    type = "string"
                  }
                ]
                ipAllocations = [
                  {
                    id = "string"
                  }
                ]
                natGateway = {
                  id = "string"
                }
                networkSecurityGroup = {
                  id = "string"
                  location = "string"
                  properties = {
                    flushConnection = bool
                    securityRules = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          access = "string"
                          description = "string"
                          destinationAddressPrefix = "string"
                          destinationAddressPrefixes = [
                            "string"
                          ]
                          destinationApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          destinationPortRange = "string"
                          destinationPortRanges = [
                            "string"
                          ]
                          direction = "string"
                          priority = int
                          protocol = "string"
                          sourceAddressPrefix = "string"
                          sourceAddressPrefixes = [
                            "string"
                          ]
                          sourceApplicationSecurityGroups = [
                            {
                              id = "string"
                              location = "string"
                              properties = {}
                              tags = {}
                            }
                          ]
                          sourcePortRange = "string"
                          sourcePortRanges = [
                            "string"
                          ]
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                privateEndpointNetworkPolicies = "string"
                privateLinkServiceNetworkPolicies = "string"
                routeTable = {
                  id = "string"
                  location = "string"
                  properties = {
                    disableBgpRoutePropagation = bool
                    routes = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          addressPrefix = "string"
                          hasBgpOverride = bool
                          nextHopIpAddress = "string"
                          nextHopType = "string"
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
                serviceEndpointPolicies = [
                  {
                    id = "string"
                    location = "string"
                    properties = {
                      contextualServiceEndpointPolicies = [
                        "string"
                      ]
                      serviceAlias = "string"
                      serviceEndpointPolicyDefinitions = [
                        {
                          id = "string"
                          name = "string"
                          properties = {
                            description = "string"
                            service = "string"
                            serviceResources = [
                              "string"
                            ]
                          }
                          type = "string"
                        }
                      ]
                    }
                    tags = {}
                  }
                ]
                serviceEndpoints = [
                  {
                    locations = [
                      "string"
                    ]
                    service = "string"
                  }
                ]
              }
              type = "string"
            }
          }
          zones = [
            "string"
          ]
        }
      ]
      visibility = {
        subscriptions = [
          "string"
        ]
      }
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Network/privateLinkServices/privateEndpointConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/privateLinkServices/privateEndpointConnections@2023-04-01"
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
  })
}

```

## Microsoft.Network/publicIPAddresses@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/publicIPAddresses@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      ddosSettings = {
        ddosProtectionPlan = {
          id = "string"
        }
        protectionMode = "string"
      }
      deleteOption = "string"
      dnsSettings = {
        domainNameLabel = "string"
        domainNameLabelScope = "string"
        fqdn = "string"
        reverseFqdn = "string"
      }
      idleTimeoutInMinutes = int
      ipAddress = "string"
      ipTags = [
        {
          ipTagType = "string"
          tag = "string"
        }
      ]
      linkedPublicIPAddress = {
        public-ip-address-object
      }
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
        sku = {
          name = "string"
          tier = "string"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
      migrationPhase = "string"
      natGateway = {
        id = "string"
        location = "string"
        properties = {
          idleTimeoutInMinutes = int
          publicIpAddresses = [
            {
              id = "string"
            }
          ]
          publicIpPrefixes = [
            {
              id = "string"
            }
          ]
        }
        sku = {
          name = "Standard"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
      publicIPAddressVersion = "string"
      publicIPAllocationMethod = "string"
      publicIPPrefix = {
        id = "string"
      }
      servicePublicIPAddress = {
        public-ip-address-object
      }
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
        sku = {
          name = "string"
          tier = "string"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
    }
    zones = [
      "string"
    ]
    sku = {
      name = "string"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Network/publicIPPrefixes@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/publicIPPrefixes@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      customIPPrefix = {
        id = "string"
      }
      ipTags = [
        {
          ipTagType = "string"
          tag = "string"
        }
      ]
      natGateway = {
        id = "string"
        location = "string"
        properties = {
          idleTimeoutInMinutes = int
          publicIpAddresses = [
            {
              id = "string"
            }
          ]
          publicIpPrefixes = [
            {
              id = "string"
            }
          ]
        }
        sku = {
          name = "Standard"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
      prefixLength = int
      publicIPAddressVersion = "string"
    }
    zones = [
      "string"
    ]
    sku = {
      name = "Standard"
      tier = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Network/routeFilters@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/routeFilters@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      rules = [
        {
          id = "string"
          location = "string"
          name = "string"
          properties = {
            access = "string"
            communities = [
              "string"
            ]
            routeFilterRuleType = "Community"
          }
        }
      ]
    }
  })
}

```

## Microsoft.Network/routeFilters/routeFilterRules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/routeFilters/routeFilterRules@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      access = "string"
      communities = [
        "string"
      ]
      routeFilterRuleType = "Community"
    }
  })
}

```

## Microsoft.Network/routeTables@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/routeTables@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      disableBgpRoutePropagation = bool
      routes = [
        {
          id = "string"
          name = "string"
          properties = {
            addressPrefix = "string"
            hasBgpOverride = bool
            nextHopIpAddress = "string"
            nextHopType = "string"
          }
          type = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Network/routeTables/routes@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/routeTables/routes@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      hasBgpOverride = bool
      nextHopIpAddress = "string"
      nextHopType = "string"
    }
  })
}

```

## Microsoft.Network/securityPartnerProviders@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/securityPartnerProviders@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      securityProviderName = "string"
      virtualHub = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.Network/serviceEndpointPolicies@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/serviceEndpointPolicies@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      contextualServiceEndpointPolicies = [
        "string"
      ]
      serviceAlias = "string"
      serviceEndpointPolicyDefinitions = [
        {
          id = "string"
          name = "string"
          properties = {
            description = "string"
            service = "string"
            serviceResources = [
              "string"
            ]
          }
          type = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      service = "string"
      serviceResources = [
        "string"
      ]
    }
  })
}

```

## Microsoft.Network/virtualHubs@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      allowBranchToBranchTraffic = bool
      azureFirewall = {
        id = "string"
      }
      expressRouteGateway = {
        id = "string"
      }
      hubRoutingPreference = "string"
      p2SVpnGateway = {
        id = "string"
      }
      preferredRoutingGateway = "string"
      routeTable = {
        routes = [
          {
            addressPrefixes = [
              "string"
            ]
            nextHopIpAddress = "string"
          }
        ]
      }
      securityPartnerProvider = {
        id = "string"
      }
      securityProviderName = "string"
      sku = "string"
      virtualHubRouteTableV2s = [
        {
          id = "string"
          name = "string"
          properties = {
            attachedConnections = [
              "string"
            ]
            routes = [
              {
                destinations = [
                  "string"
                ]
                destinationType = "string"
                nextHops = [
                  "string"
                ]
                nextHopType = "string"
              }
            ]
          }
        }
      ]
      virtualRouterAsn = int
      virtualRouterAutoScaleConfiguration = {
        minCapacity = int
      }
      virtualRouterIps = [
        "string"
      ]
      virtualWan = {
        id = "string"
      }
      vpnGateway = {
        id = "string"
      }
    }
  })
}

```

## Microsoft.Network/virtualHubs/bgpConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/bgpConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      hubVirtualNetworkConnection = {
        id = "string"
      }
      peerAsn = int
      peerIp = "string"
    }
  })
}

```

## Microsoft.Network/virtualHubs/hubRouteTables@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/hubRouteTables@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      labels = [
        "string"
      ]
      routes = [
        {
          destinations = [
            "string"
          ]
          destinationType = "string"
          name = "string"
          nextHop = "string"
          nextHopType = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Network/virtualHubs/hubVirtualNetworkConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowHubToRemoteVnetTransit = bool
      allowRemoteVnetToUseHubVnetGateways = bool
      enableInternetSecurity = bool
      remoteVirtualNetwork = {
        id = "string"
      }
      routingConfiguration = {
        associatedRouteTable = {
          id = "string"
        }
        inboundRouteMap = {
          id = "string"
        }
        outboundRouteMap = {
          id = "string"
        }
        propagatedRouteTables = {
          ids = [
            {
              id = "string"
            }
          ]
          labels = [
            "string"
          ]
        }
        vnetRoutes = {
          staticRoutes = [
            {
              addressPrefixes = [
                "string"
              ]
              name = "string"
              nextHopIpAddress = "string"
            }
          ]
          staticRoutesConfig = {
            vnetLocalRouteOverrideCriteria = "string"
          }
        }
      }
    }
  })
}

```

## Microsoft.Network/virtualHubs/ipConfigurations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/ipConfigurations@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateIPAddress = "string"
      privateIPAllocationMethod = "string"
      publicIPAddress = {
        extendedLocation = {
          name = "string"
          type = "EdgeZone"
        }
        id = "string"
        location = "string"
        properties = {
          ddosSettings = {
            ddosProtectionPlan = {
              id = "string"
            }
            protectionMode = "string"
          }
          deleteOption = "string"
          dnsSettings = {
            domainNameLabel = "string"
            domainNameLabelScope = "string"
            fqdn = "string"
            reverseFqdn = "string"
          }
          idleTimeoutInMinutes = int
          ipAddress = "string"
          ipTags = [
            {
              ipTagType = "string"
              tag = "string"
            }
          ]
          linkedPublicIPAddress = {
            public-ip-address-object
          }
          migrationPhase = "string"
          natGateway = {
            id = "string"
            location = "string"
            properties = {
              idleTimeoutInMinutes = int
              publicIpAddresses = [
                {
                  id = "string"
                }
              ]
              publicIpPrefixes = [
                {
                  id = "string"
                }
              ]
            }
            sku = {
              name = "Standard"
            }
            tags = {}
            zones = [
              "string"
            ]
          }
          publicIPAddressVersion = "string"
          publicIPAllocationMethod = "string"
          publicIPPrefix = {
            id = "string"
          }
          servicePublicIPAddress = {
            public-ip-address-object
          }
        }
        sku = {
          name = "string"
          tier = "string"
        }
        tags = {}
        zones = [
          "string"
        ]
      }
      subnet = {
        id = "string"
        name = "string"
        properties = {
          addressPrefix = "string"
          addressPrefixes = [
            "string"
          ]
          applicationGatewayIPConfigurations = [
            {
              id = "string"
              name = "string"
              properties = {
                subnet = {
                  id = "string"
                }
              }
            }
          ]
          delegations = [
            {
              id = "string"
              name = "string"
              properties = {
                serviceName = "string"
              }
              type = "string"
            }
          ]
          ipAllocations = [
            {
              id = "string"
            }
          ]
          natGateway = {
            id = "string"
          }
          networkSecurityGroup = {
            id = "string"
            location = "string"
            properties = {
              flushConnection = bool
              securityRules = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    access = "string"
                    description = "string"
                    destinationAddressPrefix = "string"
                    destinationAddressPrefixes = [
                      "string"
                    ]
                    destinationApplicationSecurityGroups = [
                      {
                        id = "string"
                        location = "string"
                        properties = {}
                        tags = {}
                      }
                    ]
                    destinationPortRange = "string"
                    destinationPortRanges = [
                      "string"
                    ]
                    direction = "string"
                    priority = int
                    protocol = "string"
                    sourceAddressPrefix = "string"
                    sourceAddressPrefixes = [
                      "string"
                    ]
                    sourceApplicationSecurityGroups = [
                      {
                        id = "string"
                        location = "string"
                        properties = {}
                        tags = {}
                      }
                    ]
                    sourcePortRange = "string"
                    sourcePortRanges = [
                      "string"
                    ]
                  }
                  type = "string"
                }
              ]
            }
            tags = {}
          }
          privateEndpointNetworkPolicies = "string"
          privateLinkServiceNetworkPolicies = "string"
          routeTable = {
            id = "string"
            location = "string"
            properties = {
              disableBgpRoutePropagation = bool
              routes = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    addressPrefix = "string"
                    hasBgpOverride = bool
                    nextHopIpAddress = "string"
                    nextHopType = "string"
                  }
                  type = "string"
                }
              ]
            }
            tags = {}
          }
          serviceEndpointPolicies = [
            {
              id = "string"
              location = "string"
              properties = {
                contextualServiceEndpointPolicies = [
                  "string"
                ]
                serviceAlias = "string"
                serviceEndpointPolicyDefinitions = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      description = "string"
                      service = "string"
                      serviceResources = [
                        "string"
                      ]
                    }
                    type = "string"
                  }
                ]
              }
              tags = {}
            }
          ]
          serviceEndpoints = [
            {
              locations = [
                "string"
              ]
              service = "string"
            }
          ]
        }
        type = "string"
      }
    }
  })
}

```

## Microsoft.Network/virtualHubs/routeMaps@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/routeMaps@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      associatedInboundConnections = [
        "string"
      ]
      associatedOutboundConnections = [
        "string"
      ]
      rules = [
        {
          actions = [
            {
              parameters = [
                {
                  asPath = [
                    "string"
                  ]
                  community = [
                    "string"
                  ]
                  routePrefix = [
                    "string"
                  ]
                }
              ]
              type = "string"
            }
          ]
          matchCriteria = [
            {
              asPath = [
                "string"
              ]
              community = [
                "string"
              ]
              matchCondition = "string"
              routePrefix = [
                "string"
              ]
            }
          ]
          name = "string"
          nextStepIfMatched = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Network/virtualHubs/routeTables@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/routeTables@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      attachedConnections = [
        "string"
      ]
      routes = [
        {
          destinations = [
            "string"
          ]
          destinationType = "string"
          nextHops = [
            "string"
          ]
          nextHopType = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Network/virtualHubs/routingIntent@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualHubs/routingIntent@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      routingPolicies = [
        {
          destinations = [
            "string"
          ]
          name = "string"
          nextHop = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Network/virtualNetworkGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworkGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      activeActive = bool
      adminState = "string"
      allowRemoteVnetTraffic = bool
      allowVirtualWanTraffic = bool
      bgpSettings = {
        asn = int
        bgpPeeringAddress = "string"
        bgpPeeringAddresses = [
          {
            customBgpIpAddresses = [
              "string"
            ]
            ipconfigurationId = "string"
          }
        ]
        peerWeight = int
      }
      customRoutes = {
        addressPrefixes = [
          "string"
        ]
      }
      disableIPSecReplayProtection = bool
      enableBgp = bool
      enableBgpRouteTranslationForNat = bool
      enableDnsForwarding = bool
      enablePrivateIpAddress = bool
      gatewayDefaultSite = {
        id = "string"
      }
      gatewayType = "string"
      ipConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            privateIPAllocationMethod = "string"
            publicIPAddress = {
              id = "string"
            }
            subnet = {
              id = "string"
            }
          }
        }
      ]
      natRules = [
        {
          id = "string"
          name = "string"
          properties = {
            externalMappings = [
              {
                addressSpace = "string"
                portRange = "string"
              }
            ]
            internalMappings = [
              {
                addressSpace = "string"
                portRange = "string"
              }
            ]
            ipConfigurationId = "string"
            mode = "string"
            type = "string"
          }
        }
      ]
      sku = {
        name = "string"
        tier = "string"
      }
      virtualNetworkGatewayPolicyGroups = [
        {
          id = "string"
          name = "string"
          properties = {
            isDefault = bool
            policyMembers = [
              {
                attributeType = "string"
                attributeValue = "string"
                name = "string"
              }
            ]
            priority = int
          }
        }
      ]
      vNetExtendedLocationResourceId = "string"
      vpnClientConfiguration = {
        aadAudience = "string"
        aadIssuer = "string"
        aadTenant = "string"
        radiusServerAddress = "string"
        radiusServers = [
          {
            radiusServerAddress = "string"
            radiusServerScore = int
            radiusServerSecret = "string"
          }
        ]
        radiusServerSecret = "string"
        vngClientConnectionConfigurations = [
          {
            id = "string"
            name = "string"
            properties = {
              virtualNetworkGatewayPolicyGroups = [
                {
                  id = "string"
                }
              ]
              vpnClientAddressPool = {
                addressPrefixes = [
                  "string"
                ]
              }
            }
          }
        ]
        vpnAuthenticationTypes = [
          "string"
        ]
        vpnClientAddressPool = {
          addressPrefixes = [
            "string"
          ]
        }
        vpnClientIpsecPolicies = [
          {
            dhGroup = "string"
            ikeEncryption = "string"
            ikeIntegrity = "string"
            ipsecEncryption = "string"
            ipsecIntegrity = "string"
            pfsGroup = "string"
            saDataSizeKilobytes = int
            saLifeTimeSeconds = int
          }
        ]
        vpnClientProtocols = [
          "string"
        ]
        vpnClientRevokedCertificates = [
          {
            id = "string"
            name = "string"
            properties = {
              thumbprint = "string"
            }
          }
        ]
        vpnClientRootCertificates = [
          {
            id = "string"
            name = "string"
            properties = {
              publicCertData = "string"
            }
          }
        ]
      }
      vpnGatewayGeneration = "string"
      vpnType = "string"
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Network/virtualNetworkGateways/natRules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworkGateways/natRules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      externalMappings = [
        {
          addressSpace = "string"
          portRange = "string"
        }
      ]
      internalMappings = [
        {
          addressSpace = "string"
          portRange = "string"
        }
      ]
      ipConfigurationId = "string"
      mode = "string"
      type = "string"
    }
  })
}

```

## Microsoft.Network/virtualNetworks@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworks@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      bgpCommunities = {
        virtualNetworkCommunity = "string"
      }
      ddosProtectionPlan = {
        id = "string"
      }
      dhcpOptions = {
        dnsServers = [
          "string"
        ]
      }
      enableDdosProtection = bool
      enableVmProtection = bool
      encryption = {
        enabled = bool
        enforcement = "string"
      }
      flowTimeoutInMinutes = int
      ipAllocations = [
        {
          id = "string"
        }
      ]
      subnets = [
        {
          id = "string"
          name = "string"
          properties = {
            addressPrefix = "string"
            addressPrefixes = [
              "string"
            ]
            applicationGatewayIPConfigurations = [
              {
                id = "string"
                name = "string"
                properties = {
                  subnet = {
                    id = "string"
                  }
                }
              }
            ]
            delegations = [
              {
                id = "string"
                name = "string"
                properties = {
                  serviceName = "string"
                }
                type = "string"
              }
            ]
            ipAllocations = [
              {
                id = "string"
              }
            ]
            natGateway = {
              id = "string"
            }
            networkSecurityGroup = {
              id = "string"
              location = "string"
              properties = {
                flushConnection = bool
                securityRules = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      access = "string"
                      description = "string"
                      destinationAddressPrefix = "string"
                      destinationAddressPrefixes = [
                        "string"
                      ]
                      destinationApplicationSecurityGroups = [
                        {
                          id = "string"
                          location = "string"
                          properties = {}
                          tags = {}
                        }
                      ]
                      destinationPortRange = "string"
                      destinationPortRanges = [
                        "string"
                      ]
                      direction = "string"
                      priority = int
                      protocol = "string"
                      sourceAddressPrefix = "string"
                      sourceAddressPrefixes = [
                        "string"
                      ]
                      sourceApplicationSecurityGroups = [
                        {
                          id = "string"
                          location = "string"
                          properties = {}
                          tags = {}
                        }
                      ]
                      sourcePortRange = "string"
                      sourcePortRanges = [
                        "string"
                      ]
                    }
                    type = "string"
                  }
                ]
              }
              tags = {}
            }
            privateEndpointNetworkPolicies = "string"
            privateLinkServiceNetworkPolicies = "string"
            routeTable = {
              id = "string"
              location = "string"
              properties = {
                disableBgpRoutePropagation = bool
                routes = [
                  {
                    id = "string"
                    name = "string"
                    properties = {
                      addressPrefix = "string"
                      hasBgpOverride = bool
                      nextHopIpAddress = "string"
                      nextHopType = "string"
                    }
                    type = "string"
                  }
                ]
              }
              tags = {}
            }
            serviceEndpointPolicies = [
              {
                id = "string"
                location = "string"
                properties = {
                  contextualServiceEndpointPolicies = [
                    "string"
                  ]
                  serviceAlias = "string"
                  serviceEndpointPolicyDefinitions = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        description = "string"
                        service = "string"
                        serviceResources = [
                          "string"
                        ]
                      }
                      type = "string"
                    }
                  ]
                }
                tags = {}
              }
            ]
            serviceEndpoints = [
              {
                locations = [
                  "string"
                ]
                service = "string"
              }
            ]
          }
          type = "string"
        }
      ]
      virtualNetworkPeerings = [
        {
          id = "string"
          name = "string"
          properties = {
            allowForwardedTraffic = bool
            allowGatewayTransit = bool
            allowVirtualNetworkAccess = bool
            doNotVerifyRemoteGateways = bool
            peeringState = "string"
            peeringSyncLevel = "string"
            remoteAddressSpace = {
              addressPrefixes = [
                "string"
              ]
            }
            remoteBgpCommunities = {
              virtualNetworkCommunity = "string"
            }
            remoteVirtualNetwork = {
              id = "string"
            }
            remoteVirtualNetworkAddressSpace = {
              addressPrefixes = [
                "string"
              ]
            }
            useRemoteGateways = bool
          }
          type = "string"
        }
      ]
    }
    extendedLocation = {
      name = "string"
      type = "EdgeZone"
    }
  })
}

```

## Microsoft.Network/virtualNetworks/subnets@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworks/subnets@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      addressPrefix = "string"
      addressPrefixes = [
        "string"
      ]
      applicationGatewayIPConfigurations = [
        {
          id = "string"
          name = "string"
          properties = {
            subnet = {
              id = "string"
            }
          }
        }
      ]
      delegations = [
        {
          id = "string"
          name = "string"
          properties = {
            serviceName = "string"
          }
          type = "string"
        }
      ]
      ipAllocations = [
        {
          id = "string"
        }
      ]
      natGateway = {
        id = "string"
      }
      networkSecurityGroup = {
        id = "string"
        location = "string"
        properties = {
          flushConnection = bool
          securityRules = [
            {
              id = "string"
              name = "string"
              properties = {
                access = "string"
                description = "string"
                destinationAddressPrefix = "string"
                destinationAddressPrefixes = [
                  "string"
                ]
                destinationApplicationSecurityGroups = [
                  {
                    id = "string"
                    location = "string"
                    properties = {}
                    tags = {}
                  }
                ]
                destinationPortRange = "string"
                destinationPortRanges = [
                  "string"
                ]
                direction = "string"
                priority = int
                protocol = "string"
                sourceAddressPrefix = "string"
                sourceAddressPrefixes = [
                  "string"
                ]
                sourceApplicationSecurityGroups = [
                  {
                    id = "string"
                    location = "string"
                    properties = {}
                    tags = {}
                  }
                ]
                sourcePortRange = "string"
                sourcePortRanges = [
                  "string"
                ]
              }
              type = "string"
            }
          ]
        }
        tags = {}
      }
      privateEndpointNetworkPolicies = "string"
      privateLinkServiceNetworkPolicies = "string"
      routeTable = {
        id = "string"
        location = "string"
        properties = {
          disableBgpRoutePropagation = bool
          routes = [
            {
              id = "string"
              name = "string"
              properties = {
                addressPrefix = "string"
                hasBgpOverride = bool
                nextHopIpAddress = "string"
                nextHopType = "string"
              }
              type = "string"
            }
          ]
        }
        tags = {}
      }
      serviceEndpointPolicies = [
        {
          id = "string"
          location = "string"
          properties = {
            contextualServiceEndpointPolicies = [
              "string"
            ]
            serviceAlias = "string"
            serviceEndpointPolicyDefinitions = [
              {
                id = "string"
                name = "string"
                properties = {
                  description = "string"
                  service = "string"
                  serviceResources = [
                    "string"
                  ]
                }
                type = "string"
              }
            ]
          }
          tags = {}
        }
      ]
      serviceEndpoints = [
        {
          locations = [
            "string"
          ]
          service = "string"
        }
      ]
    }
  })
}

```

## Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworks/virtualNetworkPeerings@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      allowForwardedTraffic = bool
      allowGatewayTransit = bool
      allowVirtualNetworkAccess = bool
      doNotVerifyRemoteGateways = bool
      peeringState = "string"
      peeringSyncLevel = "string"
      remoteAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      remoteBgpCommunities = {
        virtualNetworkCommunity = "string"
      }
      remoteVirtualNetwork = {
        id = "string"
      }
      remoteVirtualNetworkAddressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      useRemoteGateways = bool
    }
  })
}

```

## Microsoft.Network/virtualNetworkTaps@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualNetworkTaps@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      destinationLoadBalancerFrontEndIPConfiguration = {
        id = "string"
        name = "string"
        properties = {
          gatewayLoadBalancer = {
            id = "string"
          }
          privateIPAddress = "string"
          privateIPAddressVersion = "string"
          privateIPAllocationMethod = "string"
          publicIPAddress = {
            extendedLocation = {
              name = "string"
              type = "EdgeZone"
            }
            id = "string"
            location = "string"
            properties = {
              ddosSettings = {
                ddosProtectionPlan = {
                  id = "string"
                }
                protectionMode = "string"
              }
              deleteOption = "string"
              dnsSettings = {
                domainNameLabel = "string"
                domainNameLabelScope = "string"
                fqdn = "string"
                reverseFqdn = "string"
              }
              idleTimeoutInMinutes = int
              ipAddress = "string"
              ipTags = [
                {
                  ipTagType = "string"
                  tag = "string"
                }
              ]
              linkedPublicIPAddress = {
                public-ip-address-object
              }
              migrationPhase = "string"
              natGateway = {
                id = "string"
                location = "string"
                properties = {
                  idleTimeoutInMinutes = int
                  publicIpAddresses = [
                    {
                      id = "string"
                    }
                  ]
                  publicIpPrefixes = [
                    {
                      id = "string"
                    }
                  ]
                }
                sku = {
                  name = "Standard"
                }
                tags = {}
                zones = [
                  "string"
                ]
              }
              publicIPAddressVersion = "string"
              publicIPAllocationMethod = "string"
              publicIPPrefix = {
                id = "string"
              }
              servicePublicIPAddress = {
                public-ip-address-object
              }
            }
            sku = {
              name = "string"
              tier = "string"
            }
            tags = {}
            zones = [
              "string"
            ]
          }
          publicIPPrefix = {
            id = "string"
          }
          subnet = {
            id = "string"
            name = "string"
            properties = {
              addressPrefix = "string"
              addressPrefixes = [
                "string"
              ]
              applicationGatewayIPConfigurations = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    subnet = {
                      id = "string"
                    }
                  }
                }
              ]
              delegations = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    serviceName = "string"
                  }
                  type = "string"
                }
              ]
              ipAllocations = [
                {
                  id = "string"
                }
              ]
              natGateway = {
                id = "string"
              }
              networkSecurityGroup = {
                id = "string"
                location = "string"
                properties = {
                  flushConnection = bool
                  securityRules = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        access = "string"
                        description = "string"
                        destinationAddressPrefix = "string"
                        destinationAddressPrefixes = [
                          "string"
                        ]
                        destinationApplicationSecurityGroups = [
                          {
                            id = "string"
                            location = "string"
                            properties = {}
                            tags = {}
                          }
                        ]
                        destinationPortRange = "string"
                        destinationPortRanges = [
                          "string"
                        ]
                        direction = "string"
                        priority = int
                        protocol = "string"
                        sourceAddressPrefix = "string"
                        sourceAddressPrefixes = [
                          "string"
                        ]
                        sourceApplicationSecurityGroups = [
                          {
                            id = "string"
                            location = "string"
                            properties = {}
                            tags = {}
                          }
                        ]
                        sourcePortRange = "string"
                        sourcePortRanges = [
                          "string"
                        ]
                      }
                      type = "string"
                    }
                  ]
                }
                tags = {}
              }
              privateEndpointNetworkPolicies = "string"
              privateLinkServiceNetworkPolicies = "string"
              routeTable = {
                id = "string"
                location = "string"
                properties = {
                  disableBgpRoutePropagation = bool
                  routes = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        addressPrefix = "string"
                        hasBgpOverride = bool
                        nextHopIpAddress = "string"
                        nextHopType = "string"
                      }
                      type = "string"
                    }
                  ]
                }
                tags = {}
              }
              serviceEndpointPolicies = [
                {
                  id = "string"
                  location = "string"
                  properties = {
                    contextualServiceEndpointPolicies = [
                      "string"
                    ]
                    serviceAlias = "string"
                    serviceEndpointPolicyDefinitions = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          description = "string"
                          service = "string"
                          serviceResources = [
                            "string"
                          ]
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
              ]
              serviceEndpoints = [
                {
                  locations = [
                    "string"
                  ]
                  service = "string"
                }
              ]
            }
            type = "string"
          }
        }
        zones = [
          "string"
        ]
      }
      destinationNetworkInterfaceIPConfiguration = {
        id = "string"
        name = "string"
        properties = {
          applicationGatewayBackendAddressPools = [
            {
              id = "string"
              name = "string"
              properties = {
                backendAddresses = [
                  {
                    fqdn = "string"
                    ipAddress = "string"
                  }
                ]
              }
            }
          ]
          applicationSecurityGroups = [
            {
              id = "string"
              location = "string"
              properties = {}
              tags = {}
            }
          ]
          gatewayLoadBalancer = {
            id = "string"
          }
          loadBalancerBackendAddressPools = [
            {
              id = "string"
              name = "string"
              properties = {
                drainPeriodInSeconds = int
                loadBalancerBackendAddresses = [
                  {
                    name = "string"
                    properties = {
                      adminState = "string"
                      ipAddress = "string"
                      loadBalancerFrontendIPConfiguration = {
                        id = "string"
                      }
                      subnet = {
                        id = "string"
                      }
                      virtualNetwork = {
                        id = "string"
                      }
                    }
                  }
                ]
                location = "string"
                syncMode = "string"
                tunnelInterfaces = [
                  {
                    identifier = int
                    port = int
                    protocol = "string"
                    type = "string"
                  }
                ]
                virtualNetwork = {
                  id = "string"
                }
              }
            }
          ]
          loadBalancerInboundNatRules = [
            {
              id = "string"
              name = "string"
              properties = {
                backendAddressPool = {
                  id = "string"
                }
                backendPort = int
                enableFloatingIP = bool
                enableTcpReset = bool
                frontendIPConfiguration = {
                  id = "string"
                }
                frontendPort = int
                frontendPortRangeEnd = int
                frontendPortRangeStart = int
                idleTimeoutInMinutes = int
                protocol = "string"
              }
            }
          ]
          primary = bool
          privateIPAddress = "string"
          privateIPAddressVersion = "string"
          privateIPAllocationMethod = "string"
          publicIPAddress = {
            extendedLocation = {
              name = "string"
              type = "EdgeZone"
            }
            id = "string"
            location = "string"
            properties = {
              ddosSettings = {
                ddosProtectionPlan = {
                  id = "string"
                }
                protectionMode = "string"
              }
              deleteOption = "string"
              dnsSettings = {
                domainNameLabel = "string"
                domainNameLabelScope = "string"
                fqdn = "string"
                reverseFqdn = "string"
              }
              idleTimeoutInMinutes = int
              ipAddress = "string"
              ipTags = [
                {
                  ipTagType = "string"
                  tag = "string"
                }
              ]
              linkedPublicIPAddress = {
                public-ip-address-object
              }
              migrationPhase = "string"
              natGateway = {
                id = "string"
                location = "string"
                properties = {
                  idleTimeoutInMinutes = int
                  publicIpAddresses = [
                    {
                      id = "string"
                    }
                  ]
                  publicIpPrefixes = [
                    {
                      id = "string"
                    }
                  ]
                }
                sku = {
                  name = "Standard"
                }
                tags = {}
                zones = [
                  "string"
                ]
              }
              publicIPAddressVersion = "string"
              publicIPAllocationMethod = "string"
              publicIPPrefix = {
                id = "string"
              }
              servicePublicIPAddress = {
                public-ip-address-object
              }
            }
            sku = {
              name = "string"
              tier = "string"
            }
            tags = {}
            zones = [
              "string"
            ]
          }
          subnet = {
            id = "string"
            name = "string"
            properties = {
              addressPrefix = "string"
              addressPrefixes = [
                "string"
              ]
              applicationGatewayIPConfigurations = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    subnet = {
                      id = "string"
                    }
                  }
                }
              ]
              delegations = [
                {
                  id = "string"
                  name = "string"
                  properties = {
                    serviceName = "string"
                  }
                  type = "string"
                }
              ]
              ipAllocations = [
                {
                  id = "string"
                }
              ]
              natGateway = {
                id = "string"
              }
              networkSecurityGroup = {
                id = "string"
                location = "string"
                properties = {
                  flushConnection = bool
                  securityRules = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        access = "string"
                        description = "string"
                        destinationAddressPrefix = "string"
                        destinationAddressPrefixes = [
                          "string"
                        ]
                        destinationApplicationSecurityGroups = [
                          {
                            id = "string"
                            location = "string"
                            properties = {}
                            tags = {}
                          }
                        ]
                        destinationPortRange = "string"
                        destinationPortRanges = [
                          "string"
                        ]
                        direction = "string"
                        priority = int
                        protocol = "string"
                        sourceAddressPrefix = "string"
                        sourceAddressPrefixes = [
                          "string"
                        ]
                        sourceApplicationSecurityGroups = [
                          {
                            id = "string"
                            location = "string"
                            properties = {}
                            tags = {}
                          }
                        ]
                        sourcePortRange = "string"
                        sourcePortRanges = [
                          "string"
                        ]
                      }
                      type = "string"
                    }
                  ]
                }
                tags = {}
              }
              privateEndpointNetworkPolicies = "string"
              privateLinkServiceNetworkPolicies = "string"
              routeTable = {
                id = "string"
                location = "string"
                properties = {
                  disableBgpRoutePropagation = bool
                  routes = [
                    {
                      id = "string"
                      name = "string"
                      properties = {
                        addressPrefix = "string"
                        hasBgpOverride = bool
                        nextHopIpAddress = "string"
                        nextHopType = "string"
                      }
                      type = "string"
                    }
                  ]
                }
                tags = {}
              }
              serviceEndpointPolicies = [
                {
                  id = "string"
                  location = "string"
                  properties = {
                    contextualServiceEndpointPolicies = [
                      "string"
                    ]
                    serviceAlias = "string"
                    serviceEndpointPolicyDefinitions = [
                      {
                        id = "string"
                        name = "string"
                        properties = {
                          description = "string"
                          service = "string"
                          serviceResources = [
                            "string"
                          ]
                        }
                        type = "string"
                      }
                    ]
                  }
                  tags = {}
                }
              ]
              serviceEndpoints = [
                {
                  locations = [
                    "string"
                  ]
                  service = "string"
                }
              ]
            }
            type = "string"
          }
          virtualNetworkTaps = [
            {
              id = "string"
              location = "string"
              properties = {
              tags = {}
            }
          ]
        }
        type = "string"
      }
      destinationPort = int
    }
  })
}

```

## Microsoft.Network/virtualRouters@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualRouters@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      hostedGateway = {
        id = "string"
      }
      hostedSubnet = {
        id = "string"
      }
      virtualRouterAsn = int
      virtualRouterIps = [
        "string"
      ]
    }
  })
}

```

## Microsoft.Network/virtualRouters/peerings@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualRouters/peerings@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      peerAsn = int
      peerIp = "string"
    }
  })
}

```

## Microsoft.Network/virtualWans@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/virtualWans@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowBranchToBranchTraffic = bool
      allowVnetToVnetTraffic = bool
      disableVpnEncryption = bool
      type = "string"
    }
  })
}

```

## Microsoft.Network/vpnGateways@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnGateways@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      bgpSettings = {
        asn = int
        bgpPeeringAddress = "string"
        bgpPeeringAddresses = [
          {
            customBgpIpAddresses = [
              "string"
            ]
            ipconfigurationId = "string"
          }
        ]
        peerWeight = int
      }
      connections = [
        {
          id = "string"
          name = "string"
          properties = {
            connectionBandwidth = int
            dpdTimeoutSeconds = int
            enableBgp = bool
            enableInternetSecurity = bool
            enableRateLimiting = bool
            ipsecPolicies = [
              {
                dhGroup = "string"
                ikeEncryption = "string"
                ikeIntegrity = "string"
                ipsecEncryption = "string"
                ipsecIntegrity = "string"
                pfsGroup = "string"
                saDataSizeKilobytes = int
                saLifeTimeSeconds = int
              }
            ]
            remoteVpnSite = {
              id = "string"
            }
            routingConfiguration = {
              associatedRouteTable = {
                id = "string"
              }
              inboundRouteMap = {
                id = "string"
              }
              outboundRouteMap = {
                id = "string"
              }
              propagatedRouteTables = {
                ids = [
                  {
                    id = "string"
                  }
                ]
                labels = [
                  "string"
                ]
              }
              vnetRoutes = {
                staticRoutes = [
                  {
                    addressPrefixes = [
                      "string"
                    ]
                    name = "string"
                    nextHopIpAddress = "string"
                  }
                ]
                staticRoutesConfig = {
                  vnetLocalRouteOverrideCriteria = "string"
                }
              }
            }
            routingWeight = int
            sharedKey = "string"
            trafficSelectorPolicies = [
              {
                localAddressRanges = [
                  "string"
                ]
                remoteAddressRanges = [
                  "string"
                ]
              }
            ]
            useLocalAzureIpAddress = bool
            usePolicyBasedTrafficSelectors = bool
            vpnConnectionProtocolType = "string"
            vpnLinkConnections = [
              {
                id = "string"
                name = "string"
                properties = {
                  connectionBandwidth = int
                  egressNatRules = [
                    {
                      id = "string"
                    }
                  ]
                  enableBgp = bool
                  enableRateLimiting = bool
                  ingressNatRules = [
                    {
                      id = "string"
                    }
                  ]
                  ipsecPolicies = [
                    {
                      dhGroup = "string"
                      ikeEncryption = "string"
                      ikeIntegrity = "string"
                      ipsecEncryption = "string"
                      ipsecIntegrity = "string"
                      pfsGroup = "string"
                      saDataSizeKilobytes = int
                      saLifeTimeSeconds = int
                    }
                  ]
                  routingWeight = int
                  sharedKey = "string"
                  useLocalAzureIpAddress = bool
                  usePolicyBasedTrafficSelectors = bool
                  vpnConnectionProtocolType = "string"
                  vpnGatewayCustomBgpAddresses = [
                    {
                      customBgpIpAddress = "string"
                      ipConfigurationId = "string"
                    }
                  ]
                  vpnLinkConnectionMode = "string"
                  vpnSiteLink = {
                    id = "string"
                  }
                }
              }
            ]
          }
        }
      ]
      enableBgpRouteTranslationForNat = bool
      isRoutingPreferenceInternet = bool
      natRules = [
        {
          id = "string"
          name = "string"
          properties = {
            externalMappings = [
              {
                addressSpace = "string"
                portRange = "string"
              }
            ]
            internalMappings = [
              {
                addressSpace = "string"
                portRange = "string"
              }
            ]
            ipConfigurationId = "string"
            mode = "string"
            type = "string"
          }
        }
      ]
      virtualHub = {
        id = "string"
      }
      vpnGatewayScaleUnit = int
    }
  })
}

```

## Microsoft.Network/vpnGateways/natRules@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnGateways/natRules@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      externalMappings = [
        {
          addressSpace = "string"
          portRange = "string"
        }
      ]
      internalMappings = [
        {
          addressSpace = "string"
          portRange = "string"
        }
      ]
      ipConfigurationId = "string"
      mode = "string"
      type = "string"
    }
  })
}

```

## Microsoft.Network/vpnGateways/vpnConnections@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnGateways/vpnConnections@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionBandwidth = int
      dpdTimeoutSeconds = int
      enableBgp = bool
      enableInternetSecurity = bool
      enableRateLimiting = bool
      ipsecPolicies = [
        {
          dhGroup = "string"
          ikeEncryption = "string"
          ikeIntegrity = "string"
          ipsecEncryption = "string"
          ipsecIntegrity = "string"
          pfsGroup = "string"
          saDataSizeKilobytes = int
          saLifeTimeSeconds = int
        }
      ]
      remoteVpnSite = {
        id = "string"
      }
      routingConfiguration = {
        associatedRouteTable = {
          id = "string"
        }
        inboundRouteMap = {
          id = "string"
        }
        outboundRouteMap = {
          id = "string"
        }
        propagatedRouteTables = {
          ids = [
            {
              id = "string"
            }
          ]
          labels = [
            "string"
          ]
        }
        vnetRoutes = {
          staticRoutes = [
            {
              addressPrefixes = [
                "string"
              ]
              name = "string"
              nextHopIpAddress = "string"
            }
          ]
          staticRoutesConfig = {
            vnetLocalRouteOverrideCriteria = "string"
          }
        }
      }
      routingWeight = int
      sharedKey = "string"
      trafficSelectorPolicies = [
        {
          localAddressRanges = [
            "string"
          ]
          remoteAddressRanges = [
            "string"
          ]
        }
      ]
      useLocalAzureIpAddress = bool
      usePolicyBasedTrafficSelectors = bool
      vpnConnectionProtocolType = "string"
      vpnLinkConnections = [
        {
          id = "string"
          name = "string"
          properties = {
            connectionBandwidth = int
            egressNatRules = [
              {
                id = "string"
              }
            ]
            enableBgp = bool
            enableRateLimiting = bool
            ingressNatRules = [
              {
                id = "string"
              }
            ]
            ipsecPolicies = [
              {
                dhGroup = "string"
                ikeEncryption = "string"
                ikeIntegrity = "string"
                ipsecEncryption = "string"
                ipsecIntegrity = "string"
                pfsGroup = "string"
                saDataSizeKilobytes = int
                saLifeTimeSeconds = int
              }
            ]
            routingWeight = int
            sharedKey = "string"
            useLocalAzureIpAddress = bool
            usePolicyBasedTrafficSelectors = bool
            vpnConnectionProtocolType = "string"
            vpnGatewayCustomBgpAddresses = [
              {
                customBgpIpAddress = "string"
                ipConfigurationId = "string"
              }
            ]
            vpnLinkConnectionMode = "string"
            vpnSiteLink = {
              id = "string"
            }
          }
        }
      ]
    }
  })
}

```

## Microsoft.Network/vpnServerConfigurations@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnServerConfigurations@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      aadAuthenticationParameters = {
        aadAudience = "string"
        aadIssuer = "string"
        aadTenant = "string"
      }
      configurationPolicyGroups = [
        {
          id = "string"
          name = "string"
          properties = {
            isDefault = bool
            policyMembers = [
              {
                attributeType = "string"
                attributeValue = "string"
                name = "string"
              }
            ]
            priority = int
          }
        }
      ]
      name = "string"
      radiusClientRootCertificates = [
        {
          name = "string"
          thumbprint = "string"
        }
      ]
      radiusServerAddress = "string"
      radiusServerRootCertificates = [
        {
          name = "string"
          publicCertData = "string"
        }
      ]
      radiusServers = [
        {
          radiusServerAddress = "string"
          radiusServerScore = int
          radiusServerSecret = "string"
        }
      ]
      radiusServerSecret = "string"
      vpnAuthenticationTypes = [
        "string"
      ]
      vpnClientIpsecPolicies = [
        {
          dhGroup = "string"
          ikeEncryption = "string"
          ikeIntegrity = "string"
          ipsecEncryption = "string"
          ipsecIntegrity = "string"
          pfsGroup = "string"
          saDataSizeKilobytes = int
          saLifeTimeSeconds = int
        }
      ]
      vpnClientRevokedCertificates = [
        {
          name = "string"
          thumbprint = "string"
        }
      ]
      vpnClientRootCertificates = [
        {
          name = "string"
          publicCertData = "string"
        }
      ]
      vpnProtocols = [
        "string"
      ]
    }
  })
}

```

## Microsoft.Network/vpnServerConfigurations/configurationPolicyGroups@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnServerConfigurations/configurationPolicyGroups@2023-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isDefault = bool
      policyMembers = [
        {
          attributeType = "string"
          attributeValue = "string"
          name = "string"
        }
      ]
      priority = int
    }
  })
}

```

## Microsoft.Network/vpnSites@2023-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/vpnSites@2023-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      addressSpace = {
        addressPrefixes = [
          "string"
        ]
      }
      bgpProperties = {
        asn = int
        bgpPeeringAddress = "string"
        bgpPeeringAddresses = [
          {
            customBgpIpAddresses = [
              "string"
            ]
            ipconfigurationId = "string"
          }
        ]
        peerWeight = int
      }
      deviceProperties = {
        deviceModel = "string"
        deviceVendor = "string"
        linkSpeedInMbps = int
      }
      ipAddress = "string"
      isSecuritySite = bool
      o365Policy = {
        breakOutCategories = {
          allow = bool
          default = bool
          optimize = bool
        }
      }
      siteKey = "string"
      virtualWan = {
        id = "string"
      }
      vpnSiteLinks = [
        {
          id = "string"
          name = "string"
          properties = {
            bgpProperties = {
              asn = int
              bgpPeeringAddress = "string"
            }
            fqdn = "string"
            ipAddress = "string"
            linkProperties = {
              linkProviderName = "string"
              linkSpeedInMbps = int
            }
          }
        }
      ]
    }
  })
}

```

## Microsoft.Network/trafficmanagerprofiles@2022-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/trafficmanagerprofiles@2022-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allowedEndpointRecordTypes = [
        "string"
      ]
      dnsConfig = {
        relativeName = "string"
        ttl = int
      }
      endpoints = [
        {
          id = "string"
          name = "string"
          properties = {
            alwaysServe = "string"
            customHeaders = [
              {
                name = "string"
                value = "string"
              }
            ]
            endpointLocation = "string"
            endpointMonitorStatus = "string"
            endpointStatus = "string"
            geoMapping = [
              "string"
            ]
            minChildEndpoints = int
            minChildEndpointsIPv4 = int
            minChildEndpointsIPv6 = int
            priority = int
            subnets = [
              {
                first = "string"
                last = "string"
                scope = int
              }
            ]
            target = "string"
            targetResourceId = "string"
            weight = int
          }
          type = "string"
        }
      ]
      maxReturn = int
      monitorConfig = {
        customHeaders = [
          {
            name = "string"
            value = "string"
          }
        ]
        expectedStatusCodeRanges = [
          {
            max = int
            min = int
          }
        ]
        intervalInSeconds = int
        path = "string"
        port = int
        profileMonitorStatus = "string"
        protocol = "string"
        timeoutInSeconds = int
        toleratedNumberOfFailures = int
      }
      profileStatus = "string"
      trafficRoutingMethod = "string"
      trafficViewEnrollmentStatus = "string"
    }
  })
}

```

## Microsoft.Network/trafficmanagerprofiles/AzureEndpoints@2022-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/trafficmanagerprofiles/AzureEndpoints@2022-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alwaysServe = "string"
      customHeaders = [
        {
          name = "string"
          value = "string"
        }
      ]
      endpointLocation = "string"
      endpointMonitorStatus = "string"
      endpointStatus = "string"
      geoMapping = [
        "string"
      ]
      minChildEndpoints = int
      minChildEndpointsIPv4 = int
      minChildEndpointsIPv6 = int
      priority = int
      subnets = [
        {
          first = "string"
          last = "string"
          scope = int
        }
      ]
      target = "string"
      targetResourceId = "string"
      weight = int
    }
  })
}

```

## Microsoft.Network/trafficmanagerprofiles/ExternalEndpoints@2022-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/trafficmanagerprofiles/ExternalEndpoints@2022-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alwaysServe = "string"
      customHeaders = [
        {
          name = "string"
          value = "string"
        }
      ]
      endpointLocation = "string"
      endpointMonitorStatus = "string"
      endpointStatus = "string"
      geoMapping = [
        "string"
      ]
      minChildEndpoints = int
      minChildEndpointsIPv4 = int
      minChildEndpointsIPv6 = int
      priority = int
      subnets = [
        {
          first = "string"
          last = "string"
          scope = int
        }
      ]
      target = "string"
      targetResourceId = "string"
      weight = int
    }
  })
}

```

## Microsoft.Network/trafficmanagerprofiles/NestedEndpoints@2022-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/trafficmanagerprofiles/NestedEndpoints@2022-04-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alwaysServe = "string"
      customHeaders = [
        {
          name = "string"
          value = "string"
        }
      ]
      endpointLocation = "string"
      endpointMonitorStatus = "string"
      endpointStatus = "string"
      geoMapping = [
        "string"
      ]
      minChildEndpoints = int
      minChildEndpointsIPv4 = int
      minChildEndpointsIPv6 = int
      priority = int
      subnets = [
        {
          first = "string"
          last = "string"
          scope = int
        }
      ]
      target = "string"
      targetResourceId = "string"
      weight = int
    }
  })
}

```

## Microsoft.Network/trafficManagerUserMetricsKeys@2022-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Network/trafficManagerUserMetricsKeys@2022-04-01"
  name = "default"
  parent_id = "string"
}

```

