## Microsoft.ExtendedLocation/customLocations@2021-08-31-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ExtendedLocation/customLocations@2021-08-31-preview"
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
      authentication = {
        type = "string"
        value = "string"
      }
      clusterExtensionIds = [
        "string"
      ]
      displayName = "string"
      hostResourceId = "string"
      hostType = "Kubernetes"
      namespace = "string"
      provisioningState = "string"
    }
  })
}

```

## Microsoft.ExtendedLocation/customLocations/resourceSyncRules@2021-08-31-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.ExtendedLocation/customLocations/resourceSyncRules@2021-08-31-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      priority = int
      selector = {
        matchExpressions = [
          {
            key = "string"
            operator = "string"
            values = [
              "string"
            ]
          }
        ]
        matchLabels = {}
      }
      targetResourceGroup = "string"
    }
  })
}

```

