## Microsoft.HybridCompute/machines@2022-11-10

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridCompute/machines@2022-11-10"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      clientPublicKey = "string"
      cloudMetadata = {}
      extensions = [
        {
          name = "string"
          status = {
            code = "string"
            displayStatus = "string"
            level = "string"
            message = "string"
            time = "string"
          }
          type = "string"
          typeHandlerVersion = "string"
        }
      ]
      locationData = {
        city = "string"
        countryOrRegion = "string"
        district = "string"
        name = "string"
      }
      mssqlDiscovered = "string"
      osProfile = {
        linuxConfiguration = {
          patchSettings = {
            assessmentMode = "string"
            patchMode = "string"
          }
        }
        windowsConfiguration = {
          patchSettings = {
            assessmentMode = "string"
            patchMode = "string"
          }
        }
      }
      osType = "string"
      parentClusterResourceId = "string"
      privateLinkScopeResourceId = "string"
      serviceStatuses = {
        extensionService = {
          startupType = "string"
          status = "string"
        }
        guestConfigurationService = {
          startupType = "string"
          status = "string"
        }
      }
      vmId = "string"
    }
  })
}

```

## Microsoft.HybridCompute/machines/extensions@2022-11-10

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridCompute/machines/extensions@2022-11-10"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      autoUpgradeMinorVersion = bool
      enableAutomaticUpgrade = bool
      forceUpdateTag = "string"
      instanceView = {
        name = "string"
        status = {
          code = "string"
          displayStatus = "string"
          level = "string"
          message = "string"
          time = "string"
        }
        type = "string"
        typeHandlerVersion = "string"
      }
      protectedSettings = {}
      publisher = "string"
      settings = {}
      type = "string"
      typeHandlerVersion = "string"
    }
  })
}

```

## Microsoft.HybridCompute/privateLinkScopes@2022-11-10

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridCompute/privateLinkScopes@2022-11-10"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      publicNetworkAccess = "string"
    }
  })
}

```

## Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections@2022-11-10

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections@2022-11-10"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
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

## Microsoft.HybridCompute/privateLinkScopes/scopedResources@2020-08-15-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.HybridCompute/privateLinkScopes/scopedResources@2020-08-15-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedResourceId = "string"
    }
  })
}

```

