## Microsoft.DataFactory/factories@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories@2018-06-01"
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
      encryption = {
        identity = {
          userAssignedIdentity = "string"
        }
        keyName = "string"
        keyVersion = "string"
        vaultBaseUrl = "string"
      }
      globalParameters = {}
      publicNetworkAccess = "string"
      purviewConfiguration = {
        purviewResourceId = "string"
      }
      repoConfiguration = {
        accountName = "string"
        collaborationBranch = "string"
        disablePublish = bool
        lastCommitId = "string"
        repositoryName = "string"
        rootFolder = "string"
        type = "string"
        // For remaining properties, see FactoryRepoConfiguration objects
      }
    }
  })
}

```

## Microsoft.DataFactory/factories/credentials@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/credentials@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      annotations = [ object ]
      description = "string"
      type = "string"
      typeProperties = {
        resourceId = "string"
      }
    }
  })
}

```

## Microsoft.DataFactory/factories/dataflows@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/dataflows@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      annotations = [ object ]
      description = "string"
      folder = {
        name = "string"
      }
      type = "string"
      // For remaining properties, see DataFlow objects
    }
  })
}

```

## Microsoft.DataFactory/factories/datasets@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/datasets@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      annotations = [ object ]
      description = "string"
      folder = {
        name = "string"
      }
      linkedServiceName = {
        parameters = {}
        referenceName = "string"
        type = "LinkedServiceReference"
      }
      parameters = {}
      type = "string"
      // For remaining properties, see Dataset objects
    }
  })
}

```

## Microsoft.DataFactory/factories/globalParameters@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/globalParameters@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.DataFactory/factories/integrationRuntimes@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/integrationRuntimes@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      type = "string"
      // For remaining properties, see IntegrationRuntime objects
    }
  })
}

```

## Microsoft.DataFactory/factories/linkedservices@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/linkedservices@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      annotations = [ object ]
      connectVia = {
        parameters = {}
        referenceName = "string"
        type = "IntegrationRuntimeReference"
      }
      description = "string"
      parameters = {}
      type = "string"
      // For remaining properties, see LinkedService objects
    }
  })
}

```

## Microsoft.DataFactory/factories/managedVirtualNetworks@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/managedVirtualNetworks@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
  })
}

```

## Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/managedVirtualNetworks/managedPrivateEndpoints@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      connectionState = {}
      fqdns = [
        "string"
      ]
      groupId = "string"
      privateLinkResourceId = "string"
    }
  })
}

```

## Microsoft.DataFactory/factories/pipelines@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/pipelines@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      activities = [
        {
          dependsOn = [
            {
              activity = "string"
              dependencyConditions = [
                "string"
              ]
            }
          ]
          description = "string"
          name = "string"
          userProperties = [
            {
              name = "string"
            }
          ]
          type = "string"
          // For remaining properties, see Activity objects
        }
      ]
      annotations = [ object ]
      concurrency = int
      description = "string"
      folder = {
        name = "string"
      }
      parameters = {}
      policy = {
        elapsedTimeMetric = {}
      }
      runDimensions = {}
      variables = {}
    }
  })
}

```

## Microsoft.DataFactory/factories/privateEndpointConnections@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/privateEndpointConnections@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

## Microsoft.DataFactory/factories/triggers@2018-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DataFactory/factories/triggers@2018-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      annotations = [ object ]
      description = "string"
      type = "string"
      // For remaining properties, see Trigger objects
    }
  })
}

```

