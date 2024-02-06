## Microsoft.Relay/namespaces@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces@2021-11-01"
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
              description = "string"
              status = "string"
            }
            provisioningState = "string"
          }
        }
      ]
      publicNetworkAccess = "string"
    }
    sku = {
      name = "Standard"
      tier = "Standard"
    }
  })
}

```

## Microsoft.Relay/namespaces/authorizationRules@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/authorizationRules@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rights = [
        "string"
      ]
    }
  })
}

```

## Microsoft.Relay/namespaces/hybridConnections@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/hybridConnections@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      requiresClientAuthorization = bool
      userMetadata = "string"
    }
  })
}

```

## Microsoft.Relay/namespaces/hybridConnections/authorizationRules@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/hybridConnections/authorizationRules@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rights = [
        "string"
      ]
    }
  })
}

```

## Microsoft.Relay/namespaces/networkRuleSets@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/networkRuleSets@2021-11-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      defaultAction = "string"
      ipRules = [
        {
          action = "Allow"
          ipMask = "string"
        }
      ]
      publicNetworkAccess = "string"
    }
  })
}

```

## Microsoft.Relay/namespaces/privateEndpointConnections@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/privateEndpointConnections@2021-11-01"
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
      provisioningState = "string"
    }
  })
}

```

## Microsoft.Relay/namespaces/wcfRelays@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/wcfRelays@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      relayType = "string"
      requiresClientAuthorization = bool
      requiresTransportSecurity = bool
      userMetadata = "string"
    }
  })
}

```

## Microsoft.Relay/namespaces/wcfRelays/authorizationRules@2021-11-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Relay/namespaces/wcfRelays/authorizationRules@2021-11-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      rights = [
        "string"
      ]
    }
  })
}

```

