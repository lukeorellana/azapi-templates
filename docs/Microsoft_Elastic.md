## Microsoft.Elastic/monitors@2022-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Elastic/monitors@2022-07-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    type = "SystemAssigned"
  }
  body = jsonencode({
    properties = {
      elasticProperties = {
        elasticCloudDeployment = {}
        elasticCloudUser = {}
      }
      monitoringStatus = "string"
      provisioningState = "string"
      userInfo = {
        companyInfo = {
          business = "string"
          country = "string"
          domain = "string"
          employeesNumber = "string"
          state = "string"
        }
        companyName = "string"
        emailAddress = "string"
        firstName = "string"
        lastName = "string"
      }
      version = "string"
    }
    sku = {
      name = "string"
    }
  })
}

```

## Microsoft.Elastic/monitors/tagRules@2022-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Elastic/monitors/tagRules@2022-07-01-preview"
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
      provisioningState = "string"
    }
  })
}

```

