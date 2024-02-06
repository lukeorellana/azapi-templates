## Microsoft.Portal/dashboards@2020-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Portal/dashboards@2020-09-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      lenses = [
        {
          metadata = {}
          order = int
          parts = [
            {
              metadata = {
                type = "string"
                // For remaining properties, see DashboardPartMetadata objects
              }
              position = {
                colSpan = int
                metadata = {}
                rowSpan = int
                x = int
                y = int
              }
            }
          ]
        }
      ]
      metadata = {}
    }
  })
}

```

## Microsoft.Portal/tenantConfigurations@2020-09-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Portal/tenantConfigurations@2020-09-01-preview"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enforcePrivateMarkdownStorage = bool
    }
  })
}

```

