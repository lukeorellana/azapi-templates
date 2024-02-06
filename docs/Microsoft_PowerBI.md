## Microsoft.PowerBI/privateLinkServicesForPowerBI@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerBI/privateLinkServicesForPowerBI@2020-06-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      privateEndpointConnections = [
        {
          properties = {
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
        }
      ]
      tenantId = "string"
    }
  })
}

```

## Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections@2020-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections@2020-06-01"
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
      provisioningState = "string"
    }
  })
}

```

## Microsoft.PowerBI/workspaceCollections@2016-01-29

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.PowerBI/workspaceCollections@2016-01-29"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    sku = {
      name = "S1"
      tier = "Standard"
    }
  })
}

```

