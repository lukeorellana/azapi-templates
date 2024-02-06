## Microsoft.AppConfiguration/configurationStores@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppConfiguration/configurationStores@2023-03-01"
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
      createMode = "string"
      disableLocalAuth = bool
      enablePurgeProtection = bool
      encryption = {
        keyVaultProperties = {
          identityClientId = "string"
          keyIdentifier = "string"
        }
      }
      publicNetworkAccess = "string"
      softDeleteRetentionInDays = int
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.AppConfiguration/configurationStores/keyValues@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppConfiguration/configurationStores/keyValues@2023-03-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      contentType = "string"
      tags = {}
      value = "string"
    }
  })
}

```

## Microsoft.AppConfiguration/configurationStores/privateEndpointConnections@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppConfiguration/configurationStores/privateEndpointConnections@2023-03-01"
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

## Microsoft.AppConfiguration/configurationStores/replicas@2023-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AppConfiguration/configurationStores/replicas@2023-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
}

```

