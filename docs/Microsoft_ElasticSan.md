## Microsoft.ElasticSan/elasticSans@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      availabilityZones = [
        "string"
      ]
      baseSizeTiB = int
      extendedCapacitySizeTiB = int
      publicNetworkAccess = "string"
      sku = {
        name = "string"
        tier = "Premium"
      }
    }
  })
}

```

## Microsoft.ElasticSan/elasticSans/privateEndpointConnections@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans/privateEndpointConnections@2023-01-01"
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

## Microsoft.ElasticSan/elasticSans/volumegroups@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans/volumegroups@2023-01-01"
  name = "string"
  parent_id = "string"
  identity {
    type = "string"
    identity_ids = []
  }
  body = jsonencode({
    properties = {
      encryption = "string"
      encryptionProperties = {
        identity = {
          userAssignedIdentity = "string"
        }
        keyVaultProperties = {
          keyName = "string"
          keyVaultUri = "string"
          keyVersion = "string"
        }
      }
      networkAcls = {
        virtualNetworkRules = [
          {
            action = "Allow"
            id = "string"
          }
        ]
      }
      protocolType = "string"
    }
  })
}

```

## Microsoft.ElasticSan/elasticSans/volumegroups/snapshots@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans/volumegroups/snapshots@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      creationData = {
        sourceId = "string"
      }
    }
  })
}

```

## Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      creationData = {
        createSource = "string"
        sourceId = "string"
      }
      managedBy = {
        resourceId = "string"
      }
      sizeGiB = int
    }
  })
}

```

