## Microsoft.EventHub/clusters@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/clusters@2022-10-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      supportsScaling = bool
    }
    sku = {
      capacity = int
      name = "Dedicated"
    }
  })
}

```

## Microsoft.EventHub/namespaces@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces@2022-10-01-preview"
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
      clusterArmId = "string"
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
      isAutoInflateEnabled = bool
      kafkaEnabled = bool
      maximumThroughputUnits = int
      minimumTlsVersion = "string"
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

## Microsoft.EventHub/namespaces/applicationGroups@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/applicationGroups@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clientAppGroupIdentifier = "string"
      isEnabled = bool
      policies = [
        {
          name = "string"
          type = "string"
          // For remaining properties, see ApplicationGroupPolicy objects
        }
      ]
    }
  })
}

```

## Microsoft.EventHub/namespaces/authorizationRules@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/authorizationRules@2022-10-01-preview"
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

## Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2022-10-01-preview"
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

## Microsoft.EventHub/namespaces/eventhubs@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/eventhubs@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      captureDescription = {
        destination = {
          name = "string"
          properties = {
            archiveNameFormat = "string"
            blobContainer = "string"
            dataLakeAccountName = "string"
            dataLakeFolderPath = "string"
            dataLakeSubscriptionId = "string"
            storageAccountResourceId = "string"
          }
        }
        enabled = bool
        encoding = "string"
        intervalInSeconds = int
        sizeLimitInBytes = int
        skipEmptyArchives = bool
      }
      messageRetentionInDays = int
      partitionCount = int
      retentionDescription = {
        cleanupPolicy = "string"
        retentionTimeInHours = int
        tombstoneRetentionTimeInHours = int
      }
      status = "string"
    }
  })
}

```

## Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2022-10-01-preview"
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

## Microsoft.EventHub/namespaces/eventhubs/consumergroups@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/eventhubs/consumergroups@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      userMetadata = "string"
    }
  })
}

```

## Microsoft.EventHub/namespaces/ipfilterrules@2018-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/ipfilterrules@2018-01-01-preview"
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

## Microsoft.EventHub/namespaces/networkRuleSets@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/networkRuleSets@2022-10-01-preview"
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

## Microsoft.EventHub/namespaces/privateEndpointConnections@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/privateEndpointConnections@2022-10-01-preview"
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

## Microsoft.EventHub/namespaces/schemagroups@2022-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/schemagroups@2022-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupProperties = {
      schemaCompatibility = "string"
      schemaType = "string"
    }
  })
}

```

## Microsoft.EventHub/namespaces/virtualnetworkrules@2018-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.EventHub/namespaces/virtualnetworkrules@2018-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      virtualNetworkSubnetId = "string"
    }
  })
}

```

