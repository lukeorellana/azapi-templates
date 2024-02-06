## Microsoft.Search/searchServices@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Search/searchServices@2022-09-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type =  "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      authOptions = {
        aadOrApiKey = {
          aadAuthFailureMode = "string"
        }
      }
      disableLocalAuth = bool
      encryptionWithCmk = {
        enforcement = "string"
      }
      hostingMode = "string"
      networkRuleSet = {
        ipRules = [
          {
            value = "string"
          }
        ]
      }
      partitionCount = int
      publicNetworkAccess = "string"
      replicaCount = int
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.Search/searchServices/privateEndpointConnections@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Search/searchServices/privateEndpointConnections@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
      privateEndpoint = {
        id = "string"
      }
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
      provisioningState = "string"
    }
  })
}

```

## Microsoft.Search/searchServices/sharedPrivateLinkResources@2022-09-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Search/searchServices/sharedPrivateLinkResources@2022-09-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      groupId = "string"
      privateLinkResourceId = "string"
      provisioningState = "string"
      requestMessage = "string"
      resourceRegion = "string"
      status = "string"
    }
  })
}

```

