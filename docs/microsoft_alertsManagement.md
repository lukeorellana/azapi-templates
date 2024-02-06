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

### smartDetectorAlertRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The resource location. | string |
| tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The properties of the alert rule. | AlertRuleProperties |


### AlertRuleProperties

| Name | Description | Value |
|-|-|-|
| actionGroups | The alert rule actions. | ActionGroupsInformation(required) |
| description | The alert rule description. | string |
| detector | The alert rule's detector. | Detector(required) |
| frequency | The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 1 minute, depending on the detector. | string (required) |
| scope | The alert rule resources scope. | string[] (required) |
| severity | The alert rule severity. | 'Sev0''Sev1''Sev2''Sev3''Sev4' (required) |
| state | The alert rule state. | 'Disabled''Enabled' (required) |
| throttling | The alert rule throttling information. | ThrottlingInformation |


### ActionGroupsInformation

| Name | Description | Value |
|-|-|-|
| customEmailSubject | An optional custom email subject to use in email notifications. | string |
| customWebhookPayload | An optional custom web-hook payload to use in web-hook notifications. | string |
| groupIds | The Action Group resource IDs. | string[] (required) |


### Detector

| Name | Description | Value |
|-|-|-|
| id | The detector id. | string (required) |
| parameters | The detector's parameters.' | object |


### ThrottlingInformation

| Name | Description | Value |
|-|-|-|
| duration | The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes | string |
