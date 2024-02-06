## Microsoft.Automation/automationAccounts@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts@2023-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      disableLocalAuth = bool
      encryption = {
        identity = {}
        keySource = "string"
        keyVaultProperties = {
          keyName = "string"
          keyvaultUri = "string"
          keyVersion = "string"
        }
      }
      publicNetworkAccess = bool
      sku = {
        capacity = int
        family = "string"
        name = "string"
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/certificates@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/certificates@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      base64Value = "string"
      description = "string"
      isExportable = bool
      thumbprint = "string"
    }
  })
}

```

## Microsoft.Automation/automationAccounts/compilationjobs@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/compilationjobs@2023-05-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      configuration = {
        name = "string"
      }
      incrementNodeConfigurationBuild = bool
      parameters = {
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/configurations@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/configurations@2023-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      description = "string"
      logProgress = bool
      logVerbose = bool
      parameters = {
        {customized property} = {
          defaultValue = "string"
          isMandatory = bool
          position = int
          type = "string"
        }
      }
      source = {
        hash = {
          algorithm = "string"
          value = "string"
        }
        type = "string"
        value = "string"
        version = "string"
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/connections@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/connections@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionType = {
        name = "string"
      }
      description = "string"
      fieldDefinitionValues = {
        {customized property} = "string"
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/connectionTypes@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/connectionTypes@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      fieldDefinitions = {
        {customized property} = {
          isEncrypted = bool
          isOptional = bool
          type = "string"
        }
      }
      isGlobal = bool
    }
  })
}

```

## Microsoft.Automation/automationAccounts/credentials@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/credentials@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      password = "string"
      userName = "string"
    }
  })
}

```

## Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      credential = {
        name = "string"
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/hybridRunbookWorkerGroups/hybridRunbookWorkers@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      vmResourceId = "string"
    }
  })
}

```

## Microsoft.Automation/automationAccounts/jobs@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/jobs@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        {customized property} = "string"
      }
      runbook = {
        name = "string"
      }
      runOn = "string"
    }
  })
}

```

## Microsoft.Automation/automationAccounts/jobSchedules@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/jobSchedules@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      parameters = {
        {customized property} = "string"
      }
      runbook = {
        name = "string"
      }
      runOn = "string"
      schedule = {
        name = "string"
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/modules@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/modules@2023-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      contentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/nodeConfigurations@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/nodeConfigurations@2023-11-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      configuration = {
        name = "string"
      }
      incrementNodeConfigurationBuild = bool
      source = {
        hash = {
          algorithm = "string"
          value = "string"
        }
        type = "string"
        value = "string"
        version = "string"
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/powerShell72Modules@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/powerShell72Modules@2023-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      contentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/privateEndpointConnections@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/privateEndpointConnections@2023-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/python2Packages@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/python2Packages@2023-11-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      contentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/python3Packages@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/python3Packages@2023-11-01"
  name = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
    {customized property} = "string"
  body = jsonencode({
    properties = {
      contentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/runbooks@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runbooks@2023-11-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      description = "string"
      draft = {
        creationTime = "string"
        draftContentLink = {
          contentHash = {
            algorithm = "string"
            value = "string"
          }
          uri = "string"
          version = "string"
        }
        inEdit = bool
        lastModifiedTime = "string"
        outputTypes = [
          "string"
        ]
        parameters = {
          {customized property} = {
            defaultValue = "string"
            isMandatory = bool
            position = int
            type = "string"
          }
        }
      }
      logActivityTrace = int
      logProgress = bool
      logVerbose = bool
      publishContentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
      runbookType = "string"
    }
  })
}

```

## Microsoft.Automation/automationAccounts/runbooks/draft@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runbooks/draft@2023-11-01"
  name = "content"
  parent_id = "string"
}

```

## Microsoft.Automation/automationAccounts/runbooks/draft@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runbooks/draft@2023-11-01"
  name = "testJob"
  parent_id = "string"
  body = jsonencode({
    parameters = {
      {customized property} = "string"
    }
    runOn = "string"
  })
}

```

## Microsoft.Automation/automationAccounts/runtimeEnvironments@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runtimeEnvironments@2023-05-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      defaultPackages = {
        {customized property} = "string"
      }
      description = "string"
      runtime = {
        language = "string"
        version = "string"
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/runtimeEnvironments/packages@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/runtimeEnvironments/packages@2023-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentLink = {
        contentHash = {
          algorithm = "string"
          value = "string"
        }
        uri = "string"
        version = "string"
      }
    }
    allOf = {
      location = "string"
      tags = {}
    }
  })
}

```

## Microsoft.Automation/automationAccounts/schedules@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/schedules@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      advancedSchedule = {
        monthDays = [
          int
        ]
        monthlyOccurrences = [
          {
            day = "string"
            occurrence = int
          }
        ]
        weekDays = [
          "string"
        ]
      }
      description = "string"
      expiryTime = "string"
      frequency = "string"
      startTime = "string"
      timeZone = "string"
    }
  })
}

```

## Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/softwareUpdateConfigurations@2023-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      error = {
        code = "string"
        message = "string"
      }
      scheduleInfo = {
        advancedSchedule = {
          monthDays = [
            int
          ]
          monthlyOccurrences = [
            {
              day = "string"
              occurrence = int
            }
          ]
          weekDays = [
            "string"
          ]
        }
        creationTime = "string"
        description = "string"
        expiryTime = "string"
        expiryTimeOffsetMinutes = int
        frequency = "string"
        interval = int
        isEnabled = bool
        lastModifiedTime = "string"
        nextRun = "string"
        nextRunOffsetMinutes = int
        startTime = "string"
        timeZone = "string"
      }
      tasks = {
        postTask = {
          parameters = {
            {customized property} = "string"
          }
          source = "string"
        }
        preTask = {
          parameters = {
            {customized property} = "string"
          }
          source = "string"
        }
      }
      updateConfiguration = {
        azureVirtualMachines = [
          "string"
        ]
        duration = "string"
        linux = {
          excludedPackageNameMasks = [
            "string"
          ]
          includedPackageClassifications = "string"
          includedPackageNameMasks = [
            "string"
          ]
          rebootSetting = "string"
        }
        nonAzureComputerNames = [
          "string"
        ]
        operatingSystem = "string"
        targets = {
          azureQueries = [
            {
              locations = [
                "string"
              ]
              scope = [
                "string"
              ]
              tagSettings = {
                filterOperator = "string"
                tags = {
                  {customized property} = [
                    "string"
                  ]
                }
              }
            }
          ]
          nonAzureQueries = [
            {
              functionAlias = "string"
              workspaceId = "string"
            }
          ]
        }
        windows = {
          excludedKbNumbers = [
            "string"
          ]
          includedKbNumbers = [
            "string"
          ]
          includedUpdateClassifications = "string"
          rebootSetting = "string"
        }
      }
    }
  })
}

```

## Microsoft.Automation/automationAccounts/sourceControls@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/sourceControls@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      autoSync = bool
      branch = "string"
      description = "string"
      folderPath = "string"
      publishRunbook = bool
      repoUrl = "string"
      securityToken = {
        accessToken = "string"
        refreshToken = "string"
        tokenType = "string"
      }
      sourceType = "string"
    }
  })
}

```

## Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/sourceControls/sourceControlSyncJobs@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      commitId = "string"
    }
  })
}

```

## Microsoft.Automation/automationAccounts/variables@2023-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/variables@2023-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      isEncrypted = bool
      value = "string"
    }
  })
}

```

## Microsoft.Automation/automationAccounts/watchers@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/watchers@2023-05-15-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
    {customized property} = "string"
  body = jsonencode({
    properties = {
      description = "string"
      executionFrequencyInSeconds = int
      scriptName = "string"
      scriptParameters = {
        {customized property} = "string"
      }
      scriptRunOn = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.Automation/automationAccounts/webhooks@2023-05-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Automation/automationAccounts/webhooks@2023-05-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      expiryTime = "string"
      isEnabled = bool
      parameters = {
        {customized property} = "string"
      }
      runbook = {
        name = "string"
      }
      runOn = "string"
      uri = "string"
    }
  })
}

```

