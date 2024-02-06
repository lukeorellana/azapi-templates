## Microsoft.DataProtection/backupVaults@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/backupVaults@2022-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      monitoringSettings = {
        azureMonitorAlertSettings = {
          alertsForAllJobFailures = "string"
        }
      }
      securitySettings = {
        immutabilitySettings = {
          state = "string"
        }
        softDeleteSettings = {
          retentionDurationInDays = int
          state = "string"
        }
      }
      storageSettings = [
        {
          datastoreType = "string"
          type = "string"
        }
      ]
    }
    eTag = "string"
  })
}

```

## Microsoft.DataProtection/backupVaults/backupInstances@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/backupVaults/backupInstances@2022-11-01-preview"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      datasourceAuthCredentials = {
        objectType = "string"
        // For remaining properties, see AuthCredentials objects
      }
      dataSourceInfo = {
        datasourceType = "string"
        objectType = "string"
        resourceID = "string"
        resourceLocation = "string"
        resourceName = "string"
        resourceType = "string"
        resourceUri = "string"
      }
      dataSourceSetInfo = {
        datasourceType = "string"
        objectType = "string"
        resourceID = "string"
        resourceLocation = "string"
        resourceName = "string"
        resourceType = "string"
        resourceUri = "string"
      }
      friendlyName = "string"
      objectType = "string"
      policyInfo = {
        policyId = "string"
        policyParameters = {
          backupDatasourceParametersList = [
            {
              objectType = "string"
              // For remaining properties, see BackupDatasourceParameters objects
            }
          ]
          dataStoreParametersList = [
            {
              dataStoreType = "string"
              objectType = "string"
              // For remaining properties, see DataStoreParameters objects
            }
          ]
        }
      }
      validationType = "string"
    }
  })
}

```

## Microsoft.DataProtection/backupVaults/backupPolicies@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/backupVaults/backupPolicies@2022-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      datasourceTypes = [
        "string"
      ]
      objectType = "string"
      // For remaining properties, see BaseBackupPolicy objects
    }
  })
}

```

## Microsoft.DataProtection/backupVaults/backupResourceGuardProxies@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/backupVaults/backupResourceGuardProxies@2022-11-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      lastUpdatedTime = "string"
      resourceGuardOperationDetails = [
        {
          defaultResourceRequest = "string"
          vaultCriticalOperation = "string"
        }
      ]
      resourceGuardResourceId = "string"
    }
  })
}

```

## Microsoft.DataProtection/resourceGuards@2022-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataProtection/resourceGuards@2022-11-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      vaultCriticalOperationExclusionList = [
        "string"
      ]
    }
    eTag = "string"
  })
}

```

