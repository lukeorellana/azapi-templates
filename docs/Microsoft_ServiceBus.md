## Microsoft.ServiceBus/namespaces@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces@2022-10-01-preview"
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
      alternateName = "string"
      disableLocalAuth = bool
      encryption = {
        keySource = "Microsoft.KeyVault"
        keyVaultProperties = [
          {
            identity = {
              userAssignedIdentity = "string"
            }
            keyName = "string"
            keyVaultUri = "string"
            keyVersion = "string"
          }
        ]
        requireInfrastructureEncryption = bool
      }
      minimumTlsVersion = "string"
      premiumMessagingPartitions = int
      privateEndpointConnections = [
        {
          properties = {
            privateEndpoint = {
              id = "string"
            }
            privateLinkServiceConnectionState = {
              description = "string"
              status = "string"
            }
            provisioningState = "string"
          }
        }
      ]
      publicNetworkAccess = "string"
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

## Microsoft.ServiceBus/namespaces/AuthorizationRules@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/AuthorizationRules@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rights = [
        "string"
      ]
    }
  })
}

```

## Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alternateName = "string"
      partnerNamespace = "string"
    }
  })
}

```

## Microsoft.ServiceBus/namespaces/ipfilterrules@2018-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/ipfilterrules@2018-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      action = "string"
      filterName = "string"
      ipMask = "string"
    }
  })
}

```

## Microsoft.ServiceBus/namespaces/migrationConfigurations@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/migrationConfigurations@2022-10-01-preview"
  name = "$default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      postMigrationName = "string"
      targetNamespace = "string"
    }
  })
}

```

## Microsoft.ServiceBus/namespaces/networkRuleSets@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/networkRuleSets@2022-10-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      defaultAction = "string"
      ipRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      publicNetworkAccess = "string"
      trustedServiceAccessEnabled = bool
      virtualNetworkRules = [
        {
          ignoreMissingVnetServiceEndpoint = bool
          subnet = {
            id = "string"
          }
        }
      ]
    }
  })
}

```

## Microsoft.ServiceBus/namespaces/privateEndpointConnections@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/privateEndpointConnections@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

## Microsoft.ServiceBus/namespaces/queues@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/queues@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoDeleteOnIdle = "string"
      deadLetteringOnMessageExpiration = bool
      defaultMessageTimeToLive = "string"
      duplicateDetectionHistoryTimeWindow = "string"
      enableBatchedOperations = bool
      enableExpress = bool
      enablePartitioning = bool
      forwardDeadLetteredMessagesTo = "string"
      forwardTo = "string"
      lockDuration = "string"
      maxDeliveryCount = int
      maxMessageSizeInKilobytes = int
      maxSizeInMegabytes = int
      requiresDuplicateDetection = bool
      requiresSession = bool
      status = "string"
    }
  })
}

```

## Microsoft.ServiceBus/namespaces/queues/authorizationRules@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/queues/authorizationRules@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rights = [
        "string"
      ]
    }
  })
}

```

## Microsoft.ServiceBus/namespaces/topics@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/topics@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoDeleteOnIdle = "string"
      defaultMessageTimeToLive = "string"
      duplicateDetectionHistoryTimeWindow = "string"
      enableBatchedOperations = bool
      enableExpress = bool
      enablePartitioning = bool
      maxMessageSizeInKilobytes = int
      maxSizeInMegabytes = int
      requiresDuplicateDetection = bool
      status = "string"
      supportOrdering = bool
    }
  })
}

```

## Microsoft.ServiceBus/namespaces/topics/authorizationRules@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/topics/authorizationRules@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rights = [
        "string"
      ]
    }
  })
}

```

## Microsoft.ServiceBus/namespaces/topics/subscriptions@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/topics/subscriptions@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoDeleteOnIdle = "string"
      clientAffineProperties = {
        clientId = "string"
        isDurable = bool
        isShared = bool
      }
      deadLetteringOnFilterEvaluationExceptions = bool
      deadLetteringOnMessageExpiration = bool
      defaultMessageTimeToLive = "string"
      duplicateDetectionHistoryTimeWindow = "string"
      enableBatchedOperations = bool
      forwardDeadLetteredMessagesTo = "string"
      forwardTo = "string"
      isClientAffine = bool
      lockDuration = "string"
      maxDeliveryCount = int
      requiresSession = bool
      status = "string"
    }
  })
}

```

## Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/topics/subscriptions/rules@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      action = {
        compatibilityLevel = int
        requiresPreprocessing = bool
        sqlExpression = "string"
      }
      correlationFilter = {
        contentType = "string"
        correlationId = "string"
        label = "string"
        messageId = "string"
        properties = {}
        replyTo = "string"
        replyToSessionId = "string"
        requiresPreprocessing = bool
        sessionId = "string"
        to = "string"
      }
      filterType = "string"
      sqlFilter = {
        compatibilityLevel = int
        requiresPreprocessing = bool
        sqlExpression = "string"
      }
    }
  })
}

```

## Microsoft.ServiceBus/namespaces/virtualnetworkrules@2018-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ServiceBus/namespaces/virtualnetworkrules@2018-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      virtualNetworkSubnetId = "string"
    }
  })
}

```

