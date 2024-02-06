## Microsoft.MachineLearning/commitmentPlans@2016-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearning/commitmentPlans@2016-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.MachineLearning/webServices@2017-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearning/webServices@2017-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      assets = {}
      commitmentPlan = {
        id = "string"
      }
      description = "string"
      diagnostics = {
        expiry = "string"
        level = "string"
      }
      exampleRequest = {
        globalParameters = {}
        inputs = {}
      }
      exposeSampleData = bool
      input = {
        description = "string"
        properties = {}
        title = "string"
        type = "string"
      }
      keys = {
        primary = "string"
        secondary = "string"
      }
      machineLearningWorkspace = {
        id = "string"
      }
      output = {
        description = "string"
        properties = {}
        title = "string"
        type = "string"
      }
      parameters = {}
      payloadsInBlobStorage = bool
      payloadsLocation = {
        credentials = "string"
        uri = "string"
      }
      readOnly = bool
      realtimeConfiguration = {
        maxConcurrentCalls = int
      }
      storageAccount = {
        key = "string"
        name = "string"
      }
      title = "string"
      packageType = "string"
      // For remaining properties, see WebServiceProperties objects
    }
  })
}

```

## Microsoft.MachineLearning/workspaces@2019-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearning/workspaces@2019-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      keyVaultIdentifierId = "string"
      ownerEmail = "string"
      userStorageAccountId = "string"
    }
    sku = {
      name = "string"
      tier = "string"
    }
  })
}

```

