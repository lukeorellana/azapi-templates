## Microsoft.Devices/IotHubs@2022-04-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/IotHubs@2022-04-30-preview"
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
      authorizationPolicies = [
        {
          keyName = "string"
          primaryKey = "string"
          rights = "string"
          secondaryKey = "string"
          keyName = "string"
          primaryKey = "string"
          rights = "string"
          secondaryKey = "string"
        }
      ]
      cloudToDevice = {
        defaultTtlAsIso8601 = "string"
        feedback = {
          lockDurationAsIso8601 = "string"
          maxDeliveryCount = int
          ttlAsIso8601 = "string"
        }
        maxDeliveryCount = int
      }
      comments = "string"
      deviceStreams = {
        streamingEndpoints = [
          "string"
        ]
      }
      disableDeviceSAS = bool
      disableLocalAuth = bool
      disableModuleSAS = bool
      enableDataResidency = bool
      enableFileUploadNotifications = bool
      encryption = {
        keySource = "string"
        keyVaultProperties = [
          {
            identity = {
              userAssignedIdentity = "string"
            }
            keyIdentifier = "string"
          }
        ]
      }
      eventHubEndpoints = {}
      features = "string"
      ipFilterRules = [
        {
          action = "string"
          filterName = "string"
          ipMask = "string"
        }
      ]
      messagingEndpoints = {}
      minTlsVersion = "string"
      networkRuleSets = {
        applyToBuiltInEventHubEndpoint = bool
        defaultAction = "string"
        ipRules = [
          {
            action = "Allow"
            filterName = "string"
            ipMask = "string"
          }
        ]
      }
      privateEndpointConnections = [
        {
          properties = {
            privateEndpoint = {}
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
          }
        }
      ]
      publicNetworkAccess = "string"
      restrictOutboundNetworkAccess = bool
      rootCertificate = {
        enableRootCertificateV2 = bool
      }
      routing = {
        endpoints = {
          cosmosDBSqlCollections = [
            {
              authenticationType = "string"
              collectionName = "string"
              databaseName = "string"
              endpointUri = "string"
              id = "string"
              identity = {
                userAssignedIdentity = "string"
              }
              name = "string"
              partitionKeyName = "string"
              partitionKeyTemplate = "string"
              primaryKey = "string"
              resourceGroup = "string"
              secondaryKey = "string"
              subscriptionId = "string"
            }
          ]
          eventHubs = [
            {
              authenticationType = "string"
              connectionString = "string"
              endpointUri = "string"
              entityPath = "string"
              id = "string"
              identity = {
                userAssignedIdentity = "string"
              }
              name = "string"
              resourceGroup = "string"
              subscriptionId = "string"
            }
          ]
          serviceBusQueues = [
            {
              authenticationType = "string"
              connectionString = "string"
              endpointUri = "string"
              entityPath = "string"
              id = "string"
              identity = {
                userAssignedIdentity = "string"
              }
              name = "string"
              resourceGroup = "string"
              subscriptionId = "string"
            }
          ]
          serviceBusTopics = [
            {
              authenticationType = "string"
              connectionString = "string"
              endpointUri = "string"
              entityPath = "string"
              id = "string"
              identity = {
                userAssignedIdentity = "string"
              }
              name = "string"
              resourceGroup = "string"
              subscriptionId = "string"
            }
          ]
          storageContainers = [
            {
              authenticationType = "string"
              batchFrequencyInSeconds = int
              connectionString = "string"
              containerName = "string"
              encoding = "string"
              endpointUri = "string"
              fileNameFormat = "string"
              id = "string"
              identity = {
                userAssignedIdentity = "string"
              }
              maxChunkSizeInBytes = int
              name = "string"
              resourceGroup = "string"
              subscriptionId = "string"
            }
          ]
        }
        enrichments = [
          {
            endpointNames = [
              "string"
            ]
            key = "string"
            value = "string"
          }
        ]
        fallbackRoute = {
          condition = "string"
          endpointNames = [
            "string"
          ]
          isEnabled = bool
          name = "string"
          source = "string"
        }
        routes = [
          {
            condition = "string"
            endpointNames = [
              "string"
            ]
            isEnabled = bool
            name = "string"
            source = "string"
          }
        ]
      }
      storageEndpoints = {}
    }
    sku = {
      capacity = int
      name = "string"
    }
    etag = "string"
  })
}

```

## Microsoft.Devices/IotHubs/certificates@2022-04-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/IotHubs/certificates@2022-04-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      certificate = "string"
      isVerified = bool
    }
  })
}

```

## Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2022-04-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2022-04-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      name = "string"
    }
  })
}

```

## Microsoft.Devices/iotHubs/privateEndpointConnections@2022-04-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/iotHubs/privateEndpointConnections@2022-04-30-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
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

## Microsoft.Devices/provisioningServices@2022-12-12

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/provisioningServices@2022-12-12"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allocationPolicy = "string"
      authorizationPolicies = [
        {
          keyName = "string"
          primaryKey = "string"
          rights = "string"
          secondaryKey = "string"
          keyName = "string"
          primaryKey = "string"
          rights = "string"
          secondaryKey = "string"
        }
      ]
      enableDataResidency = bool
      iotHubs = [
        {
          allocationWeight = int
          applyAllocationPolicy = bool
          connectionString = "string"
          location = "string"
        }
      ]
      ipFilterRules = [
        {
          action = "string"
          filterName = "string"
          ipMask = "string"
          target = "string"
        }
      ]
      portalOperationsHostName = "string"
      privateEndpointConnections = [
        {
          properties = {
            privateEndpoint = {}
            privateLinkServiceConnectionState = {
              actionsRequired = "string"
              description = "string"
              status = "string"
            }
          }
        }
      ]
      provisioningState = "string"
      publicNetworkAccess = "string"
      state = "string"
    }
    resourcegroup = "string"
    subscriptionid = "string"
    sku = {
      capacity = int
      name = "S1"
    }
    etag = "string"
  })
}

```

## Microsoft.Devices/provisioningServices/certificates@2022-12-12

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/provisioningServices/certificates@2022-12-12"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      isVerified = bool
    }
  })
}

```

## Microsoft.Devices/provisioningServices/privateEndpointConnections@2022-12-12

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Devices/provisioningServices/privateEndpointConnections@2022-12-12"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
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

