## microsoft.insights/components/analyticsItems@2015-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/components/analyticsItems@2015-05-01"
  name = "item"
  parent_id = "string"
  body = jsonencode({
    Properties = {
      functionAlias = "string"
    }
    Scope = "string"
    Content = "string"
    Id = "string"
  })
}

```

## microsoft.insights/components/linkedStorageAccounts@2020-03-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/components/linkedStorageAccounts@2020-03-01-preview"
  name = "ServiceProfiler"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedStorageAccount = "string"
    }
  })
}

```

## microsoft.insights/components/myanalyticsItems@2015-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/components/myanalyticsItems@2015-05-01"
  name = "item"
  parent_id = "string"
  body = jsonencode({
    Properties = {
      functionAlias = "string"
    }
    Scope = "string"
    Content = "string"
    Id = "string"
  })
}

```

## microsoft.insights/components/pricingPlans@2017-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/components/pricingPlans@2017-10-01"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      cap = "decimal-as-string"
      planType = "string"
      stopSendNotificationWhenHitCap = bool
      stopSendNotificationWhenHitThreshold = bool
      warningThreshold = int
    }
  })
}

```

## microsoft.insights/guestDiagnosticSettings@2018-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/guestDiagnosticSettings@2018-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      dataSources = [
        {
          configuration = {
            eventLogs = [
              {
                filter = "string"
                logName = "string"
              }
            ]
            perfCounters = [
              {
                instance = "string"
                name = "string"
                samplingPeriod = "string"
              }
            ]
            providers = [
              {
                events = [
                  {
                    filter = "string"
                    id = int
                    name = "string"
                  }
                ]
                id = "string"
              }
            ]
          }
          kind = "string"
          sinks = [
            {
              kind = "string"
            }
          ]
        }
      ]
      osType = "string"
      proxySetting = "string"
    }
  })
}

```

## microsoft.insights/guestDiagnosticSettingsAssociation@2018-06-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/guestDiagnosticSettingsAssociation@2018-06-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      guestDiagnosticSettingsName = "string"
    }
  })
}

```

## microsoft.insights/privateLinkScopes@2021-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.insights/privateLinkScopes@2021-07-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      accessModeSettings = {
        exclusions = [
          {
            ingestionAccessMode = "string"
            privateEndpointConnectionName = "string"
            queryAccessMode = "string"
          }
        ]
        ingestionAccessMode = "string"
        queryAccessMode = "string"
      }
    }
  })
}

```

