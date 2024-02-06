## Microsoft.SignalRService/webPubSub@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/webPubSub@2023-08-01-preview"
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
      disableAadAuth = bool
      disableLocalAuth = bool
      liveTraceConfiguration = {
        categories = [
          {
            enabled = "string"
            name = "string"
          }
        ]
        enabled = "string"
      }
      networkACLs = {
        defaultAction = "string"
        ipRules = [
          {
            action = "string"
            value = "string"
          }
        ]
        privateEndpoints = [
          {
            allow = [
              "string"
            ]
            deny = [
              "string"
            ]
            name = "string"
          }
        ]
        publicNetwork = {
          allow = [
            "string"
          ]
          deny = [
            "string"
          ]
        }
      }
      publicNetworkAccess = "string"
      regionEndpointEnabled = "string"
      resourceLogConfiguration = {
        categories = [
          {
            enabled = "string"
            name = "string"
          }
        ]
      }
      resourceStopped = "string"
      tls = {
        clientCertEnabled = bool
      }
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.SignalRService/webPubSub/customCertificates@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/webPubSub/customCertificates@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      keyVaultBaseUri = "string"
      keyVaultSecretName = "string"
      keyVaultSecretVersion = "string"
    }
  })
}

```

## Microsoft.SignalRService/webPubSub/customDomains@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/webPubSub/customDomains@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customCertificate = {
        id = "string"
      }
      domainName = "string"
    }
  })
}

```

## Microsoft.SignalRService/webPubSub/hubs@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/webPubSub/hubs@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      anonymousConnectPolicy = "string"
      eventHandlers = [
        {
          auth = {
            managedIdentity = {
              resource = "string"
            }
            type = "string"
          }
          systemEvents = [
            "string"
          ]
          urlTemplate = "string"
          userEventPattern = "string"
        }
      ]
      eventListeners = [
        {
          endpoint = {
            type = "string"
            // For remaining properties, see EventListenerEndpoint objects
          }
          filter = {
            type = "string"
            // For remaining properties, see EventListenerFilter objects
          }
        }
      ]
    }
  })
}

```

## Microsoft.SignalRService/webPubSub/privateEndpointConnections@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/webPubSub/privateEndpointConnections@2023-08-01-preview"
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

## Microsoft.SignalRService/webPubSub/replicas@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/webPubSub/replicas@2023-08-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      regionEndpointEnabled = "string"
      resourceStopped = "string"
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.SignalRService/webPubSub/sharedPrivateLinkResources@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/webPubSub/sharedPrivateLinkResources@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
      privateLinkResourceId = "string"
      requestMessage = "string"
    }
  })
}

```

## Microsoft.SignalRService/signalR@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/signalR@2023-08-01-preview"
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
      cors = {
        allowedOrigins = [
          "string"
        ]
      }
      disableAadAuth = bool
      disableLocalAuth = bool
      features = [
        {
          flag = "string"
          properties = {
            {customized property} = "string"
          }
          value = "string"
        }
      ]
      liveTraceConfiguration = {
        categories = [
          {
            enabled = "string"
            name = "string"
          }
        ]
        enabled = "string"
      }
      networkACLs = {
        defaultAction = "string"
        ipRules = [
          {
            action = "string"
            value = "string"
          }
        ]
        privateEndpoints = [
          {
            allow = [
              "string"
            ]
            deny = [
              "string"
            ]
            name = "string"
          }
        ]
        publicNetwork = {
          allow = [
            "string"
          ]
          deny = [
            "string"
          ]
        }
      }
      publicNetworkAccess = "string"
      regionEndpointEnabled = "string"
      resourceLogConfiguration = {
        categories = [
          {
            enabled = "string"
            name = "string"
          }
        ]
      }
      resourceStopped = "string"
      serverless = {
        connectionTimeoutInSeconds = int
      }
      tls = {
        clientCertEnabled = bool
      }
      upstream = {
        templates = [
          {
            auth = {
              managedIdentity = {
                resource = "string"
              }
              type = "string"
            }
            categoryPattern = "string"
            eventPattern = "string"
            hubPattern = "string"
            urlTemplate = "string"
          }
        ]
      }
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.SignalRService/signalR/customCertificates@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/signalR/customCertificates@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      keyVaultBaseUri = "string"
      keyVaultSecretName = "string"
      keyVaultSecretVersion = "string"
    }
  })
}

```

## Microsoft.SignalRService/signalR/customDomains@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/signalR/customDomains@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customCertificate = {
        id = "string"
      }
      domainName = "string"
    }
  })
}

```

## Microsoft.SignalRService/signalR/privateEndpointConnections@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/signalR/privateEndpointConnections@2023-08-01-preview"
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

## Microsoft.SignalRService/signalR/replicas@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/signalR/replicas@2023-08-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      regionEndpointEnabled = "string"
      resourceStopped = "string"
    }
    sku = {
      capacity = int
      name = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.SignalRService/signalR/sharedPrivateLinkResources@2023-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.SignalRService/signalR/sharedPrivateLinkResources@2023-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
      privateLinkResourceId = "string"
      requestMessage = "string"
    }
  })
}

```

