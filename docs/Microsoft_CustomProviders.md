## Microsoft.CustomProviders/associations@2018-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomProviders/associations@2018-09-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      targetResourceId = "string"
    }
  })
}

```

## Microsoft.CustomProviders/resourceProviders@2018-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CustomProviders/resourceProviders@2018-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      actions = [
        {
          endpoint = "string"
          name = "string"
          routingType = "Proxy"
        }
      ]
      resourceTypes = [
        {
          endpoint = "string"
          name = "string"
          routingType = "string"
        }
      ]
      validations = [
        {
          specification = "string"
          validationType = "Swagger"
        }
      ]
    }
  })
}

```

