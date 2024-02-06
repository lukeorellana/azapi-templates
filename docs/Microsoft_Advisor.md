## Microsoft.Advisor/configurations@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Advisor/configurations@2023-01-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      digests = [
        {
          actionGroupResourceId = "string"
          categories = [
            "string"
          ]
          frequency = int
          language = "string"
          name = "string"
          state = "string"
        }
      ]
      duration = "string"
      exclude = bool
      lowCpuThreshold = "string"
    }
  })
}

```

## Microsoft.Advisor/recommendations/suppressions@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Advisor/recommendations/suppressions@2023-01-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      suppressionId = "string"
      ttl = "string"
    }
  })
}

```

