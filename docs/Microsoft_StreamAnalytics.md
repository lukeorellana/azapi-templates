## Microsoft.StreamAnalytics/clusters@2020-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/clusters@2020-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {}
    sku = {
      capacity = int
      name = "Default"
    }
  })
}

```

## Microsoft.StreamAnalytics/clusters/privateEndpoints@2020-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/clusters/privateEndpoints@2020-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      manualPrivateLinkServiceConnections = [
        {
          properties = {
            groupIds = [
              "string"
            ]
            privateLinkServiceConnectionState = {}
            privateLinkServiceId = "string"
          }
        }
      ]
    }
  })
}

```

## Microsoft.StreamAnalytics/streamingjobs@2021-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/streamingjobs@2021-10-01-preview"
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
      cluster = {
        id = "string"
      }
      compatibilityLevel = "string"
      contentStoragePolicy = "string"
      dataLocale = "string"
      eventsLateArrivalMaxDelayInSeconds = int
      eventsOutOfOrderMaxDelayInSeconds = int
      eventsOutOfOrderPolicy = "string"
      externals = {
        container = "string"
        path = "string"
        refreshConfiguration = {
          dateFormat = "string"
          pathPattern = "string"
          refreshInterval = "string"
          refreshType = "string"
          timeFormat = "string"
        }
        storageAccount = {
          accountKey = "string"
          accountName = "string"
          authenticationMode = "string"
        }
      }
      functions = [
        {
          name = "string"
          properties = {
            properties = {
              binding = {
                type = "string"
                // For remaining properties, see FunctionBinding objects
              }
              inputs = [
                {
                  dataType = "string"
                  isConfigurationParameter = bool
                }
              ]
              output = {
                dataType = "string"
              }
            }
            type = "string"
            // For remaining properties, see FunctionProperties objects
          }
        }
      ]
      inputs = [
        {
          name = "string"
          properties = {
            compression = {
              type = "string"
            }
            partitionKey = "string"
            serialization = {
              type = "string"
              // For remaining properties, see Serialization objects
            }
            watermarkSettings = {
              watermarkMode = "string"
            }
            type = "string"
            // For remaining properties, see InputProperties objects
          }
        }
      ]
      jobStorageAccount = {
        accountKey = "string"
        accountName = "string"
        authenticationMode = "string"
      }
      jobType = "string"
      outputErrorPolicy = "string"
      outputs = [
        {
          name = "string"
          properties = {
            datasource = {
              type = "string"
              // For remaining properties, see OutputDataSource objects
            }
            serialization = {
              type = "string"
              // For remaining properties, see Serialization objects
            }
            sizeWindow = int
            timeWindow = "string"
            watermarkSettings = {
              maxWatermarkDifferenceAcrossPartitions = "string"
              watermarkMode = "string"
            }
          }
        }
      ]
      outputStartMode = "string"
      outputStartTime = "string"
      sku = {
        capacity = int
        name = "Standard"
      }
      transformation = {
        name = "string"
        properties = {
          query = "string"
          streamingUnits = int
          validStreamingUnits = [
            int
          ]
        }
      }
    }
    sku = {
      capacity = int
      name = "Standard"
    }
  })
}

```

## Microsoft.StreamAnalytics/streamingjobs/functions@2021-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/streamingjobs/functions@2021-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      properties = {
        binding = {
          type = "string"
          // For remaining properties, see FunctionBinding objects
        }
        inputs = [
          {
            dataType = "string"
            isConfigurationParameter = bool
          }
        ]
        output = {
          dataType = "string"
        }
      }
      type = "string"
      // For remaining properties, see FunctionProperties objects
    }
  })
}

```

## Microsoft.StreamAnalytics/streamingjobs/inputs@2021-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/streamingjobs/inputs@2021-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      compression = {
        type = "string"
      }
      partitionKey = "string"
      serialization = {
        type = "string"
        // For remaining properties, see Serialization objects
      }
      watermarkSettings = {
        watermarkMode = "string"
      }
      type = "string"
      // For remaining properties, see InputProperties objects
    }
  })
}

```

## Microsoft.StreamAnalytics/streamingjobs/outputs@2021-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/streamingjobs/outputs@2021-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      datasource = {
        type = "string"
        // For remaining properties, see OutputDataSource objects
      }
      serialization = {
        type = "string"
        // For remaining properties, see Serialization objects
      }
      sizeWindow = int
      timeWindow = "string"
      watermarkSettings = {
        maxWatermarkDifferenceAcrossPartitions = "string"
        watermarkMode = "string"
      }
    }
  })
}

```

## Microsoft.StreamAnalytics/streamingjobs/transformations@2021-10-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.StreamAnalytics/streamingjobs/transformations@2021-10-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      query = "string"
      streamingUnits = int
      validStreamingUnits = [
        int
      ]
    }
  })
}

```

