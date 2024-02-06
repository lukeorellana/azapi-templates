## Microsoft.DigitalTwins/digitalTwinsInstances@2023-01-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DigitalTwins/digitalTwinsInstances@2023-01-31"
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
      privateEndpointConnections = [
        {
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
        }
      ]
      publicNetworkAccess = "string"
    }
  })
}

```

## Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2023-01-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2023-01-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      authenticationType = "string"
      deadLetterSecret = "string"
      deadLetterUri = "string"
      identity = {
        type = "string"
        userAssignedIdentity = "string"
      }
      endpointType = "string"
      // For remaining properties, see DigitalTwinsEndpointResourceProperties objects
    }
  })
}

```

## Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections@2023-01-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections@2023-01-31"
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

## Microsoft.DigitalTwins/digitalTwinsInstances/timeSeriesDatabaseConnections@2023-01-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.DigitalTwins/digitalTwinsInstances/timeSeriesDatabaseConnections@2023-01-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      identity = {
        type = "string"
        userAssignedIdentity = "string"
      }
      connectionType = "string"
      // For remaining properties, see TimeSeriesDatabaseConnectionProperties objects
    }
  })
}

```

