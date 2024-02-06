## Microsoft.CognitiveServices/accounts@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/accounts@2023-05-01"
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
      allowedFqdnList = [
        "string"
      ]
      apiProperties = {
        aadClientId = "string"
        aadTenantId = "string"
        eventHubConnectionString = "string"
        qnaAzureSearchEndpointId = "string"
        qnaAzureSearchEndpointKey = "string"
        qnaRuntimeEndpoint = "string"
        statisticsEnabled = bool
        storageAccountConnectionString = "string"
        superUser = "string"
        websiteName = "string"
      }
      customSubDomainName = "string"
      disableLocalAuth = bool
      dynamicThrottlingEnabled = bool
      encryption = {
        keySource = "string"
        keyVaultProperties = {
          identityClientId = "string"
          keyName = "string"
          keyVaultUri = "string"
          keyVersion = "string"
        }
      }
      locations = {
        regions = [
          {
            customsubdomain = "string"
            name = "string"
            value = int
          }
        ]
        routingMethod = "string"
      }
      migrationToken = "string"
      networkAcls = {
        defaultAction = "string"
        ipRules = [
          {
            value = "string"
          }
        ]
        virtualNetworkRules = [
          {
            id = "string"
            ignoreMissingVnetServiceEndpoint = bool
            state = "string"
          }
        ]
      }
      publicNetworkAccess = "string"
      restore = bool
      restrictOutboundNetworkAccess = bool
      userOwnedStorage = [
        {
          identityClientId = "string"
          resourceId = "string"
        }
      ]
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.CognitiveServices/accounts/commitmentPlans@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/accounts/commitmentPlans@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoRenew = bool
      commitmentPlanGuid = "string"
      current = {
        count = int
        tier = "string"
      }
      hostingModel = "string"
      next = {
        count = int
        tier = "string"
      }
      planType = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.CognitiveServices/accounts/deployments@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/accounts/deployments@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      model = {
        format = "string"
        name = "string"
        source = "string"
        version = "string"
      }
      raiPolicyName = "string"
      scaleSettings = {
        capacity = int
        scaleType = "string"
      }
      versionUpgradeOption = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.CognitiveServices/accounts/privateEndpointConnections@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/accounts/privateEndpointConnections@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
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

## Microsoft.CognitiveServices/commitmentPlans@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/commitmentPlans@2023-05-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoRenew = bool
      commitmentPlanGuid = "string"
      current = {
        count = int
        tier = "string"
      }
      hostingModel = "string"
      next = {
        count = int
        tier = "string"
      }
      planType = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.CognitiveServices/commitmentPlans/accountAssociations@2023-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CognitiveServices/commitmentPlans/accountAssociations@2023-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accountId = "string"
    }
  })
}

```

