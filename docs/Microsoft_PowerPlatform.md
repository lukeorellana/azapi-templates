## Microsoft.PowerPlatform/accounts@2020-10-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerPlatform/accounts@2020-10-30-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      description = "string"
    }
  })
}

```

## Microsoft.PowerPlatform/enterprisePolicies@2020-10-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerPlatform/enterprisePolicies@2020-10-30-preview"
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
      encryption = {
        keyVault = {
          id = "string"
          key = {
            name = "string"
            version = "string"
          }
        }
        state = "string"
      }
      lockbox = {
        state = "string"
      }
      networkInjection = {
        virtualNetworks = {
          nextLink = "string"
          value = [
            {
              id = "string"
              subnet = {
                name = "string"
              }
            }
          ]
        }
      }
    }
    kind = "string"
  })
}

```

## Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections@2020-10-30-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections@2020-10-30-preview"
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

