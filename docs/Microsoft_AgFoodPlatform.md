## Microsoft.AgFoodPlatform/farmBeats@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AgFoodPlatform/farmBeats@2021-09-01-preview"
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
      publicNetworkAccess = "string"
      sensorIntegration = {
        enabled = "string"
        provisioningInfo = {
          error = {}
        }
      }
    }
  })
}

```

## Microsoft.AgFoodPlatform/farmBeats/extensions@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AgFoodPlatform/farmBeats/extensions@2021-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    additionalApiProperties = {}
    extensionVersion = "string"
  })
}

```

## Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections@2021-09-01-preview"
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

## Microsoft.AgFoodPlatform/farmBeats/solutions@2021-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AgFoodPlatform/farmBeats/solutions@2021-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      marketplacePublisherId = "string"
      offerId = "string"
      planId = "string"
      saasSubscriptionId = "string"
      saasSubscriptionName = "string"
      termId = "string"
    }
  })
}

```

