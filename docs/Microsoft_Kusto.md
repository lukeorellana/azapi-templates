## Microsoft.Kusto/clusters@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters@2023-08-15"
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
      acceptedAudiences = [
        {
          value = "string"
        }
      ]
      allowedFqdnList = [
        "string"
      ]
      allowedIpRangeList = [
        "string"
      ]
      enableAutoStop = bool
      enableDiskEncryption = bool
      enableDoubleEncryption = bool
      enablePurge = bool
      enableStreamingIngest = bool
      engineType = "string"
      keyVaultProperties = {
        keyName = "string"
        keyVaultUri = "string"
        keyVersion = "string"
        userIdentity = "string"
      }
      languageExtensions = {
        value = [
          {
            languageExtensionCustomImageName = "string"
            languageExtensionImageName = "string"
            languageExtensionName = "string"
          }
        ]
        value = [
          {
            languageExtensionCustomImageName = "string"
            languageExtensionImageName = "string"
            languageExtensionName = "string"
          }
        ]
      }
      optimizedAutoscale = {
        isEnabled = bool
        maximum = int
        minimum = int
        version = int
      }
      publicIPType = "string"
      publicNetworkAccess = "string"
      restrictOutboundNetworkAccess = "string"
      trustedExternalTenants = [
        {
          value = "string"
        }
      ]
      virtualClusterGraduationProperties = "string"
      virtualNetworkConfiguration = {
        dataManagementPublicIpId = "string"
        enginePublicIpId = "string"
        state = "string"
        subnetId = "string"
      }
    }
    zones = [
      "string"
    ]
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2023-08-15"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      clusterResourceId = "string"
      databaseName = "string"
      databaseNameOverride = "string"
      databaseNamePrefix = "string"
      defaultPrincipalsModificationKind = "string"
      tableLevelSharingProperties = {
        externalTablesToExclude = [
          "string"
        ]
        externalTablesToInclude = [
          "string"
        ]
        functionsToExclude = [
          "string"
        ]
        functionsToInclude = [
          "string"
        ]
        materializedViewsToExclude = [
          "string"
        ]
        materializedViewsToInclude = [
          "string"
        ]
        tablesToExclude = [
          "string"
        ]
        tablesToInclude = [
          "string"
        ]
      }
    }
  })
}

```

## Microsoft.Kusto/clusters/databases@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases@2023-08-15"
  name = "string"
  location = "string"
  parent_id = "string"
  // For remaining properties, see clusters/databases objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.Kusto/clusters/databases/dataConnections@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases/dataConnections@2023-08-15"
  name = "string"
  location = "string"
  parent_id = "string"
  // For remaining properties, see clusters/databases/dataConnections objects
  body = jsonencode({
    kind = "string"
  })
}

```

## Microsoft.Kusto/clusters/databases/eventhubconnections@2018-09-07-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases/eventhubconnections@2018-09-07-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      consumerGroup = "string"
      dataFormat = "string"
      eventHubResourceId = "string"
      mappingRuleName = "string"
      tableName = "string"
    }
  })
}

```

## Microsoft.Kusto/clusters/databases/principalAssignments@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases/principalAssignments@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      principalType = "string"
      role = "string"
      tenantId = "string"
    }
  })
}

```

## Microsoft.Kusto/clusters/databases/scripts@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/databases/scripts@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      continueOnErrors = bool
      forceUpdateTag = "string"
      scriptContent = "string"
      scriptUrl = "string"
      scriptUrlSasToken = "string"
    }
  })
}

```

## Microsoft.Kusto/clusters/managedPrivateEndpoints@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/managedPrivateEndpoints@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
      privateLinkResourceId = "string"
      privateLinkResourceRegion = "string"
      requestMessage = "string"
    }
  })
}

```

## Microsoft.Kusto/clusters/principalAssignments@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/principalAssignments@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      principalId = "string"
      principalType = "string"
      role = "string"
      tenantId = "string"
    }
  })
}

```

## Microsoft.Kusto/clusters/privateEndpointConnections@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/privateEndpointConnections@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.Kusto/clusters/sandboxCustomImages@2023-08-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Kusto/clusters/sandboxCustomImages@2023-08-15"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      language = "Python"
      languageVersion = "string"
      requirementsFileContent = "string"
    }
  })
}

```

