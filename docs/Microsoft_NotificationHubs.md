## Microsoft.NotificationHubs/namespaces@2017-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NotificationHubs/namespaces@2017-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      createdAt = "string"
      critical = bool
      dataCenter = "string"
      enabled = bool
      name = "string"
      namespaceType = "string"
      provisioningState = "string"
      region = "string"
      scaleUnit = "string"
      serviceBusEndpoint = "string"
      status = "string"
      subscriptionId = "string"
      updatedAt = "string"
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.NotificationHubs/namespaces/AuthorizationRules@2017-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NotificationHubs/namespaces/AuthorizationRules@2017-04-01"
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

## Microsoft.NotificationHubs/namespaces/notificationHubs@2017-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NotificationHubs/namespaces/notificationHubs@2017-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      admCredential = {
        properties = {
          authTokenUrl = "string"
          clientId = "string"
          clientSecret = "string"
        }
      }
      apnsCredential = {
        properties = {
          apnsCertificate = "string"
          appId = "string"
          appName = "string"
          certificateKey = "string"
          endpoint = "string"
          keyId = "string"
          thumbprint = "string"
          token = "string"
        }
      }
      authorizationRules = [
        {
          rights = [
            "string"
          ]
        }
      ]
      baiduCredential = {
        properties = {
          baiduApiKey = "string"
          baiduEndPoint = "string"
          baiduSecretKey = "string"
        }
      }
      gcmCredential = {
        properties = {
          gcmEndpoint = "string"
          googleApiKey = "string"
        }
      }
      mpnsCredential = {
        properties = {
          certificateKey = "string"
          mpnsCertificate = "string"
          thumbprint = "string"
        }
      }
      name = "string"
      registrationTtl = "string"
      wnsCredential = {
        properties = {
          packageSid = "string"
          secretKey = "string"
          windowsLiveEndpoint = "string"
        }
      }
    }
    sku = {
      capacity = int
      family = "string"
      name = "string"
      size = "string"
      tier = "string"
    }
  })
}

```

## Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2017-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules@2017-04-01"
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

