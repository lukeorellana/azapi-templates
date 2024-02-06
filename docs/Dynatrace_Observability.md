## Dynatrace.Observability/monitors@2023-04-27

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Dynatrace.Observability/monitors@2023-04-27"
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
      dynatraceEnvironmentProperties = {
        accountInfo = {
          accountId = "string"
          regionId = "string"
        }
        environmentInfo = {
          environmentId = "string"
          ingestionKey = "string"
          landingURL = "string"
          logsIngestionEndpoint = "string"
        }
        singleSignOnProperties = {
          aadDomains = [
            "string"
          ]
          enterpriseAppId = "string"
          singleSignOnState = "string"
          singleSignOnUrl = "string"
        }
        userId = "string"
      }
      marketplaceSubscriptionStatus = "string"
      monitoringStatus = "string"
      planData = {
        billingCycle = "string"
        effectiveDate = "string"
        planDetails = "string"
        usageType = "string"
      }
      userInfo = {
        country = "string"
        emailAddress = "string"
        firstName = "string"
        lastName = "string"
        phoneNumber = "string"
      }
    }
  })
}

```

## Dynatrace.Observability/monitors/singleSignOnConfigurations@2023-04-27

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Dynatrace.Observability/monitors/singleSignOnConfigurations@2023-04-27"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      aadDomains = [
        "string"
      ]
      enterpriseAppId = "string"
      singleSignOnState = "string"
      singleSignOnUrl = "string"
    }
  })
}

```

## Dynatrace.Observability/monitors/tagRules@2023-04-27

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Dynatrace.Observability/monitors/tagRules@2023-04-27"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      logRules = {
        filteringTags = [
          {
            action = "string"
            name = "string"
            value = "string"
          }
        ]
        sendAadLogs = "string"
        sendActivityLogs = "string"
        sendSubscriptionLogs = "string"
      }
      metricRules = {
        filteringTags = [
          {
            action = "string"
            name = "string"
            value = "string"
          }
        ]
        sendingMetrics = "string"
      }
    }
  })
}

```

