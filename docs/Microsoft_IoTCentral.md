## Microsoft.IoTCentral/iotApps@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.IoTCentral/iotApps@2021-11-01-preview"
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
      displayName = "string"
      networkRuleSets = {
        applyToDevices = bool
        applyToIoTCentral = bool
        defaultAction = "string"
        ipRules = [
          {
            filterName = "string"
            ipMask = "string"
          }
        ]
      }
      publicNetworkAccess = "string"
      subdomain = "string"
      template = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.IoTCentral/iotApps/privateEndpointConnections@2021-11-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.IoTCentral/iotApps/privateEndpointConnections@2021-11-01-preview"
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

