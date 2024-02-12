```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Security/alertsSuppressionRules@2019-01-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      alertType = "string"
      comment = "string"
      expirationDateUtc = "string"
      reason = "string"
      state = "string"
      suppressionAlertsScope = {
        allOf = [
          {
            field = "string"
          }
        ]
      }
    }
  })
}

```

### alertsSuppressionRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Alphanumerics, underscores, and hyphens. |
| properties | describes AlertsSuppressionRule properties | AlertsSuppressionRuleProperties |


### AlertsSuppressionRuleProperties

| Name | Description | Value |
|-|-|-|
| alertType | Type of the alert to automatically suppress. For all alert types, use '*' | string (required) |
| comment | Any comment regarding the rule | string |
| expirationDateUtc | Expiration date of the rule, if value is not provided or provided as null there will no expiration at all | string |
| reason | The reason for dismissing the alert | string (required) |
| state | Possible states of the rule | 'Disabled''Enabled''Expired' (required) |
| suppressionAlertsScope | The suppression conditions | SuppressionAlertsScope |


### SuppressionAlertsScope

| Name | Description | Value |
|-|-|-|
| allOf | All the conditions inside need to be true in order to suppress the alert | ScopeElement[] (required) |


### ScopeElement

| Name | Description | Value |
|-|-|-|
| field | The alert entity type to suppress by. | string |
| {customized property} |  | For Bicep, you can use theany()function. |


