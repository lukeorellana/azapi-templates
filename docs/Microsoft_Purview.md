## Microsoft.Purview/accounts@2021-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Purview/accounts@2021-12-01"
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
      cloudConnectors = {}
      managedEventHubState = "string"
      managedResourceGroupName = "string"
      managedResourcesPublicNetworkAccess = "string"
      publicNetworkAccess = "string"
    }
  })
}

```

## Microsoft.Purview/accounts/kafkaConfigurations@2021-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Purview/accounts/kafkaConfigurations@2021-12-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      consumerGroup = "string"
      credentials = {
        identityId = "string"
        type = "string"
      }
      eventHubPartitionId = "string"
      eventHubResourceId = "string"
      eventHubType = "string"
      eventStreamingState = "string"
      eventStreamingType = "string"
    }
  })
}

```

## Microsoft.Purview/accounts/privateEndpointConnections@2021-12-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Purview/accounts/privateEndpointConnections@2021-12-01"
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

