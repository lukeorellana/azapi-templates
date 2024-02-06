## Microsoft.Consumption/budgets@2021-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Consumption/budgets@2021-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      amount = int
      category = "Cost"
      filter = {
        and = [
          {
            dimensions = {
              name = "string"
              operator = "In"
              values = [
                "string"
              ]
            }
            tags = {
              name = "string"
              operator = "In"
              values = [
                "string"
              ]
            }
          }
        ]
        dimensions = {
          name = "string"
          operator = "In"
          values = [
            "string"
          ]
        }
        tags = {
          name = "string"
          operator = "In"
          values = [
            "string"
          ]
        }
      }
      notifications = {}
      timeGrain = "string"
      timePeriod = {
        endDate = "string"
        startDate = "string"
      }
    }
    eTag = "string"
  })
}

```

