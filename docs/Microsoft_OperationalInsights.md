## Microsoft.OperationalInsights/clusters@2021-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/clusters@2021-06-01"
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
      associatedWorkspaces = [
        {
        }
      ]
      billingType = "string"
      capacityReservationProperties = {}
      isAvailabilityZonesEnabled = bool
      isDoubleEncryptionEnabled = bool
      keyVaultProperties = {
        keyName = "string"
        keyRsaSize = int
        keyVaultUri = "string"
        keyVersion = "string"
      }
    }
    sku = {
      capacity = int
      name = "CapacityReservation"
    }
  })
}

```

## Microsoft.OperationalInsights/queryPacks@2019-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/queryPacks@2019-09-01"
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

## Microsoft.OperationalInsights/queryPacks/queries@2019-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/queryPacks/queries@2019-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      body = "string"
      description = "string"
      displayName = "string"
      related = {
        categories = [
          "string"
        ]
        resourceTypes = [
          "string"
        ]
        solutions = [
          "string"
        ]
      }
      tags = {}
    }
  })
}

```

## Microsoft.OperationalInsights/workspaces@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces@2022-10-01"
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
      defaultDataCollectionRuleResourceId = "string"
      features = {
        clusterResourceId = "string"
        disableLocalAuth = bool
        enableDataExport = bool
        enableLogAccessUsingOnlyResourcePermissions = bool
        immediatePurgeDataOn30Days = bool
      }
      forceCmkForQuery = bool
      publicNetworkAccessForIngestion = "string"
      publicNetworkAccessForQuery = "string"
      retentionInDays = int
      sku = {
        capacityReservationLevel = int
        name = "string"
      }
      workspaceCapping = {
        dailyQuotaGb = int
      }
    }
    etag = "string"
  })
}

```

## Microsoft.OperationalInsights/workspaces/dataExports@2020-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/dataExports@2020-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      createdDate = "string"
      dataExportId = "string"
      destination = {
        metaData = {
          eventHubName = "string"
        }
        resourceId = "string"
      }
      enable = bool
      lastModifiedDate = "string"
      tableNames = [
        "string"
      ]
    }
  })
}

```

## Microsoft.OperationalInsights/workspaces/dataSources@2020-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/dataSources@2020-08-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.OperationalInsights/workspaces/linkedServices@2020-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/linkedServices@2020-08-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      provisioningState = "string"
      resourceId = "string"
      writeAccessResourceId = "string"
    }
  })
}

```

## Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2020-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2020-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      storageAccountIds = [
        "string"
      ]
    }
  })
}

```

## Microsoft.OperationalInsights/workspaces/savedSearches@2020-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/savedSearches@2020-08-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      category = "string"
      displayName = "string"
      functionAlias = "string"
      functionParameters = "string"
      query = "string"
      tags = [
        {
          name = "string"
          value = "string"
        }
      ]
      version = int
    }
    etag = "string"
  })
}

```

## Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2020-08-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2020-08-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      containers = [
        "string"
      ]
      storageAccount = {
        id = "string"
        key = "string"
      }
      tables = [
        "string"
      ]
    }
    eTag = "string"
  })
}

```

## Microsoft.OperationalInsights/workspaces/tables@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.OperationalInsights/workspaces/tables@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      plan = "string"
      restoredLogs = {
        endRestoreTime = "string"
        sourceTable = "string"
        startRestoreTime = "string"
      }
      retentionInDays = int
      schema = {
        columns = [
          {
            dataTypeHint = "string"
            description = "string"
            displayName = "string"
            name = "string"
            type = "string"
          }
        ]
        description = "string"
        displayName = "string"
        name = "string"
      }
      searchResults = {
        description = "string"
        endSearchTime = "string"
        limit = int
        query = "string"
        startSearchTime = "string"
      }
      totalRetentionInDays = int
    }
  })
}

```

