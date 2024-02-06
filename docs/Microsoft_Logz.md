## Microsoft.Logz/monitors@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors@2022-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      logzOrganizationProperties = {
        companyName = "string"
        enterpriseAppId = "string"
        singleSignOnUrl = "string"
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
        emailAddress = "string"
        firstName = "string"
        lastName = "string"
        phoneNumber = "string"
      }
    }
  })
}

```

## Microsoft.Logz/monitors/accounts@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/accounts@2022-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      logzOrganizationProperties = {
        companyName = "string"
        enterpriseAppId = "string"
        singleSignOnUrl = "string"
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
        emailAddress = "string"
        firstName = "string"
        lastName = "string"
        phoneNumber = "string"
      }
    }
  })
}

```

## Microsoft.Logz/monitors/accounts/tagRules@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/accounts/tagRules@2022-01-01-preview"
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
        sendAadLogs = bool
        sendActivityLogs = bool
        sendSubscriptionLogs = bool
      }
    }
  })
}

```

## Microsoft.Logz/monitors/metricsSource@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/metricsSource@2022-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "string"
  }
  body = jsonencode({
    properties = {
      logzOrganizationProperties = {
        companyName = "string"
        enterpriseAppId = "string"
        singleSignOnUrl = "string"
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
        emailAddress = "string"
        firstName = "string"
        lastName = "string"
        phoneNumber = "string"
      }
    }
  })
}

```

## Microsoft.Logz/monitors/metricsSource/tagRules@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/metricsSource/tagRules@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      metricRules = [
        {
          filteringTags = [
            {
              action = "string"
              name = "string"
              value = "string"
            }
          ]
          subscriptionId = "string"
        }
      ]
      sendMetrics = bool
    }
  })
}

```

## Microsoft.Logz/monitors/singleSignOnConfigurations@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/singleSignOnConfigurations@2022-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enterpriseAppId = "string"
      singleSignOnState = "string"
      singleSignOnUrl = "string"
    }
  })
}

```

## Microsoft.Logz/monitors/tagRules@2022-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Logz/monitors/tagRules@2022-01-01-preview"
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
        sendAadLogs = bool
        sendActivityLogs = bool
        sendSubscriptionLogs = bool
      }
    }
  })
}

```

