## Microsoft.BotService/botServices@2022-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BotService/botServices@2022-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      allSettings = {}
      appPasswordHint = "string"
      cmekKeyVaultUrl = "string"
      description = "string"
      developerAppInsightKey = "string"
      developerAppInsightsApiKey = "string"
      developerAppInsightsApplicationId = "string"
      disableLocalAuth = bool
      displayName = "string"
      endpoint = "string"
      iconUrl = "string"
      isCmekEnabled = bool
      isStreamingSupported = bool
      luisAppIds = [
        "string"
      ]
      luisKey = "string"
      manifestUrl = "string"
      msaAppId = "string"
      msaAppMSIResourceId = "string"
      msaAppTenantId = "string"
      msaAppType = "string"
      openWithHint = "string"
      parameters = {}
      publicNetworkAccess = "string"
      publishingCredentials = "string"
      schemaTransformationVersion = "string"
      storageResourceId = "string"
      tenantId = "string"
    }
    sku = {
      name = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.BotService/botServices/channels@2022-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BotService/botServices/channels@2022-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      etag = "string"
      location = "string"
      channelName = "string"
      // For remaining properties, see Channel objects
    }
    sku = {
      name = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.BotService/botServices/connections@2022-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BotService/botServices/connections@2022-09-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      clientId = "string"
      clientSecret = "string"
      parameters = [
        {
          key = "string"
          value = "string"
        }
      ]
      provisioningState = "string"
      scopes = "string"
      serviceProviderDisplayName = "string"
      serviceProviderId = "string"
    }
    sku = {
      name = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

## Microsoft.BotService/botServices/privateEndpointConnections@2022-09-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BotService/botServices/privateEndpointConnections@2022-09-15"
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

## Microsoft.BotService/enterpriseChannels@2018-07-12

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.BotService/enterpriseChannels@2018-07-12"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      nodes = [
        {
          azureLocation = "string"
          azureSku = "string"
          name = "string"
          state = "string"
        }
      ]
      state = "string"
    }
    sku = {
      name = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

