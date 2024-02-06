## microsoft.alertsManagement/smartDetectorAlertRules@2021-04-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "microsoft.alertsManagement/smartDetectorAlertRules@2021-04-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      actionGroups = {
        customEmailSubject = "string"
        customWebhookPayload = "string"
        groupIds = [
          "string"
        ]
      }
      description = "string"
      detector = {
        id = "string"
        parameters = {}
      }
      frequency = "string"
      scope = [
        "string"
      ]
      severity = "string"
      state = "string"
      throttling = {
        duration = "string"
      }
    }
  })
}

```

