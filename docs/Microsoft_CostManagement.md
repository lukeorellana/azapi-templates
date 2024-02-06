## Microsoft.CostManagement/budgets@2019-04-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/budgets@2019-04-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      amount = int
      category = "string"
      filter = {
        and = [
          {
          dimension = {
            name = "string"
            operator = "string"
            values = [
              "string"
            ]
          }
          not = {
          or = [
            {
            tag = {
              name = "string"
              operator = "string"
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

## Microsoft.CostManagement/cloudConnectors@2019-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/cloudConnectors@2019-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      billingModel = "string"
      credentialsKey = "string"
      credentialsSecret = "string"
      defaultManagementGroupId = "string"
      displayName = "string"
      reportId = "string"
      subscriptionId = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.CostManagement/connectors@2018-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/connectors@2018-08-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      credentialsKey = "string"
      credentialsSecret = "string"
      displayName = "string"
      reportId = "string"
      status = "string"
    }
    kind = "string"
  })
}

```

## Microsoft.CostManagement/costAllocationRules@2020-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/costAllocationRules@2020-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      details = {
        sourceResources = [
          {
            name = "string"
            resourceType = "string"
            values = [
              "string"
            ]
          }
        ]
        targetResources = [
          {
            name = "string"
            policyType = "FixedProportion"
            resourceType = "string"
            values = [
              {
                name = "string"
                percentage = int
              }
            ]
          }
        ]
      }
      status = "string"
    }
  })
}

```

## Microsoft.CostManagement/exports@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/exports@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      definition = {
        dataSet = {
          configuration = {
            columns = [
              "string"
            ]
          }
          granularity = "Daily"
        }
        timeframe = "string"
        timePeriod = {
          from = "string"
          to = "string"
        }
        type = "string"
      }
      deliveryInfo = {
        destination = {
          container = "string"
          resourceId = "string"
          rootFolderPath = "string"
          sasToken = "string"
          storageAccount = "string"
        }
      }
      format = "Csv"
      partitionData = bool
      runHistory = {}
      schedule = {
        recurrence = "string"
        recurrencePeriod = {
          from = "string"
          to = "string"
        }
        status = "string"
      }
    }
    eTag = "string"
  })
}

```

## Microsoft.CostManagement/externalSubscriptions@2019-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/externalSubscriptions@2019-03-01-preview"
  name = "string"
  parent_id = "string"
}

```

## Microsoft.CostManagement/markupRules@2022-10-05-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/markupRules@2022-10-05-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      customerDetails = {
        billingAccountId = "string"
        billingProfileId = "string"
      }
      description = "string"
      endDate = "string"
      percentage = int
      startDate = "string"
    }
    eTag = "string"
  })
}

```

## Microsoft.CostManagement/reportconfigs@2018-05-31

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/reportconfigs@2018-05-31"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      definition = {
        dataset = {
          aggregation = {}
          configuration = {
            columns = [
              "string"
            ]
          }
          filter = {
            and = [
              {
              dimension = {
                name = "string"
                operator = "In"
                values = [
                  "string"
                ]
              }
              not = {
              or = [
                {
                tag = {
                  name = "string"
                  operator = "In"
                  values = [
                    "string"
                  ]
                }
          }
          granularity = "Daily"
          grouping = [
            {
              columnType = "string"
              name = "string"
            }
          ]
        }
        timeframe = "string"
        timePeriod = {
          from = "string"
          to = "string"
        }
        type = "Usage"
      }
      deliveryInfo = {
        destination = {
          container = "string"
          resourceId = "string"
          rootFolderPath = "string"
        }
      }
      format = "Csv"
      schedule = {
        recurrence = "string"
        recurrencePeriod = {
          from = "string"
          to = "string"
        }
        status = "string"
      }
    }
  })
}

```

## Microsoft.CostManagement/reports@2018-08-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/reports@2018-08-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      definition = {
        dataset = {
          aggregation = {}
          configuration = {
            columns = [
              "string"
            ]
          }
          filter = {
            and = [
              {
              dimension = {
                name = "string"
                operator = "In"
                values = [
                  "string"
                ]
              }
              not = {
              or = [
                {
                tag = {
                  name = "string"
                  operator = "In"
                  values = [
                    "string"
                  ]
                }
          }
          granularity = "string"
          grouping = [
            {
              name = "string"
              type = "string"
            }
          ]
        }
        timeframe = "string"
        timePeriod = {
          from = "string"
          to = "string"
        }
        type = "Usage"
      }
      deliveryInfo = {
        destination = {
          container = "string"
          resourceId = "string"
          rootFolderPath = "string"
        }
      }
      format = "Csv"
      schedule = {
        recurrence = "string"
        recurrencePeriod = {
          from = "string"
          to = "string"
        }
        status = "string"
      }
    }
  })
}

```

## Microsoft.CostManagement/scheduledActions@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/scheduledActions@2022-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      displayName = "string"
      fileDestination = {
        fileFormats = "Csv"
      }
      notification = {
        language = "string"
        message = "string"
        regionalFormat = "string"
        subject = "string"
        to = [
          "string"
        ]
      }
      notificationEmail = "string"
      schedule = {
        dayOfMonth = int
        daysOfWeek = [
          "string"
        ]
        endDate = "string"
        frequency = "string"
        hourOfDay = int
        startDate = "string"
        weeksOfMonth = [
          "string"
        ]
      }
      scope = "string"
      status = "string"
      viewId = "string"
    }
    kind = "string"
    eTag = "string"
  })
}

```

## Microsoft.CostManagement/settings@2022-10-05-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/settings@2022-10-05-preview"
  name = "taginheritance"
  parent_id = "string"
  // For remaining properties, see settings objects
  body = jsonencode({
    kind = "string"
    eTag = "string"
  })
}

```

## Microsoft.CostManagement/showbackRules@2019-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/showbackRules@2019-03-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      description = "string"
      scopes = [
        {
          childScope = {
          id = "string"
          name = "string"
          type = "string"
        }
      ]
      status = "string"
      ruleType = "string"
      // For remaining properties, see ShowbackRuleProperties objects
    }
  })
}

```

## Microsoft.CostManagement/views@2022-10-05-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.CostManagement/views@2022-10-05-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accumulated = "string"
      chart = "string"
      displayName = "string"
      kpis = [
        {
          enabled = bool
          id = "string"
          type = "string"
        }
      ]
      metric = "string"
      pivots = [
        {
          name = "string"
          type = "string"
        }
      ]
      query = {
        dataSet = {
          aggregation = {}
          configuration = {
            columns = [
              "string"
            ]
          }
          filter = {
            and = [
              {
              dimensions = {
                name = "string"
                operator = "string"
                values = [
                  "string"
                ]
              }
              or = [
                {
                tags = {
                  name = "string"
                  operator = "string"
                  values = [
                    "string"
                  ]
                }
          }
          granularity = "string"
          grouping = [
            {
              name = "string"
              type = "string"
            }
          ]
          sorting = [
            {
              direction = "string"
              name = "string"
            }
          ]
        }
        includeMonetaryCommitment = bool
        timeframe = "string"
        timePeriod = {
          from = "string"
          to = "string"
        }
        type = "Usage"
      }
      scope = "string"
    }
    eTag = "string"
  })
}

```

