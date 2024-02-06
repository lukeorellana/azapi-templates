## Microsoft.Datadog/agreements@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Datadog/agreements@2022-06-01"
  name = "default"
  parent_id = "string"
  body = jsonencode({
    properties = {
      accepted = bool
      licenseTextLink = "string"
      plan = "string"
      privacyPolicyLink = "string"
      product = "string"
      publisher = "string"
      retrieveDatetime = "string"
      signature = "string"
    }
  })
}

```

## Microsoft.Datadog/monitors@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Datadog/monitors@2022-06-01"
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
      datadogOrganizationProperties = {
        apiKey = "string"
        applicationKey = "string"
        enterpriseAppId = "string"
        id = "string"
        linkingAuthCode = "string"
        linkingClientId = "string"
        name = "string"
        redirectUri = "string"
      }
      monitoringStatus = "string"
      userInfo = {
        emailAddress = "string"
        name = "string"
        phoneNumber = "string"
      }
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.Datadog/monitors/singleSignOnConfigurations@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Datadog/monitors/singleSignOnConfigurations@2022-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      enterpriseAppId = "string"
      singleSignOnState = "string"
    }
  })
}

```

## Microsoft.Datadog/monitors/tagRules@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Datadog/monitors/tagRules@2022-06-01"
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
        sendResourceLogs = bool
        sendSubscriptionLogs = bool
      }
      metricRules = {
        filteringTags = [
          {
            action = "string"
            name = "string"
            value = "string"
          }
        ]
      }
    }
  })
}

```

