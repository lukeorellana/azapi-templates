## Microsoft.DeviceUpdate/accounts@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeviceUpdate/accounts@2022-12-01-preview"
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
        keyVaultKeyUri = "string"
        userAssignedIdentity = "string"
      }
      privateEndpointConnections = [
        {
          properties = {
            groupIds = [
              "string"
            ]
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
      sku = "string"
    }
  })
}

```

## Microsoft.DeviceUpdate/accounts/instances@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeviceUpdate/accounts/instances@2022-12-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      diagnosticStorageProperties = {
        authenticationType = "KeyBased"
        connectionString = "string"
        resourceId = "string"
      }
      enableDiagnostics = bool
      iotHubs = [
        {
          resourceId = "string"
        }
      ]
    }
  })
}

```

## Microsoft.DeviceUpdate/accounts/privateEndpointConnectionProxies@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeviceUpdate/accounts/privateEndpointConnectionProxies@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {}
    remotePrivateEndpoint = {
      connectionDetails = [
        {
        }
      ]
      id = "string"
      immutableResourceId = "string"
      immutableSubscriptionId = "string"
      location = "string"
      manualPrivateLinkServiceConnections = [
        {
          groupIds = [
            "string"
          ]
          name = "string"
          requestMessage = "string"
        }
      ]
      privateLinkServiceConnections = [
        {
          groupIds = [
            "string"
          ]
          name = "string"
          requestMessage = "string"
        }
      ]
      privateLinkServiceProxies = [
        {
          groupConnectivityInformation = [
            {
              customerVisibleFqdns = [
                "string"
              ]
              privateLinkServiceArmRegion = "string"
              redirectMapId = "string"
            }
          ]
          id = "string"
          remotePrivateEndpointConnection = {}
          remotePrivateLinkServiceConnectionState = {
            actionsRequired = "string"
            description = "string"
            status = "string"
          }
        }
      ]
      vnetTrafficTag = "string"
    }
    status = "string"
  })
}

```

## Microsoft.DeviceUpdate/accounts/privateEndpointConnections@2022-12-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DeviceUpdate/accounts/privateEndpointConnections@2022-12-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupIds = [
        "string"
      ]
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

