## Microsoft.AlertsManagement/actionRules@2021-08-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AlertsManagement/actionRules@2021-08-08"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      actions = [
        {
          actionType = "string"
          // For remaining properties, see Action objects
        }
      ]
      conditions = [
        {
          field = "string"
          operator = "string"
          values = [
            "string"
          ]
        }
      ]
      description = "string"
      enabled = bool
      schedule = {
        effectiveFrom = "string"
        effectiveUntil = "string"
        recurrences = [
          {
            endTime = "string"
            startTime = "string"
            recurrenceType = "string"
            // For remaining properties, see Recurrence objects
          }
        ]
        timeZone = "string"
      }
      scopes = [
        "string"
      ]
    }
  })
}

```

### actionRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Alert processing rule properties. | AlertProcessingRuleProperties |


### AlertProcessingRuleProperties

| Name | Description | Value |
|-|-|-|
| actions | Actions to be applied. | Action[] (required) |
| conditions | Conditions on which alerts will be filtered. | Condition[] |
| description | Description of alert processing rule. | string |
| enabled | Indicates if the given alert processing rule is enabled or disabled. | bool |
| schedule | Scheduling for alert processing rule. | Schedule |
| scopes | Scopes on which alert processing rule will apply. | string[] (required) |


### Action

| Name | Description | Value |
|-|-|-|
| actionType | Set the object type | AddActionGroupsRemoveAllActionGroups(required) |


### AddActionGroups

| Name | Description | Value |
|-|-|-|
| actionType | Action that should be applied. | 'AddActionGroups' (required) |
| actionGroupIds | List of action group Ids to add to alert processing rule. | string[] (required) |


### RemoveAllActionGroups

| Name | Description | Value |
|-|-|-|
| actionType | Action that should be applied. | 'RemoveAllActionGroups' (required) |


### Condition

| Name | Description | Value |
|-|-|-|
| field | Field for a given condition. | 'AlertContext''AlertRuleId''AlertRuleName''Description''MonitorCondition''MonitorService''Severity''SignalType''TargetResource''TargetResourceGroup''TargetResourceType' |
| operator | Operator for a given condition. | 'Contains''DoesNotContain''Equals''NotEquals' |
| values | List of values to match for a given condition. | string[] |


### Schedule

| Name | Description | Value |
|-|-|-|
| effectiveFrom | Scheduling effective from time. Date-Time in ISO-8601 format without timezone suffix. | string |
| effectiveUntil | Scheduling effective until time. Date-Time in ISO-8601 format without timezone suffix. | string |
| recurrences | List of recurrences. | Recurrence[] |
| timeZone | Scheduling time zone. | string |


### Recurrence

| Name | Description | Value |
|-|-|-|
| endTime | End time for recurrence. | string |
| startTime | Start time for recurrence. | string |
| recurrenceType | Set the object type | DailyMonthlyWeekly(required) |


### DailyRecurrence

| Name | Description | Value |
|-|-|-|
| recurrenceType | Specifies when the recurrence should be applied. | 'Daily' (required) |


### MonthlyRecurrence

| Name | Description | Value |
|-|-|-|
| recurrenceType | Specifies when the recurrence should be applied. | 'Monthly' (required) |
| daysOfMonth | Specifies the values for monthly recurrence pattern. | int[] (required) |


### WeeklyRecurrence

| Name | Description | Value |
|-|-|-|
| recurrenceType | Specifies when the recurrence should be applied. | 'Weekly' (required) |
| daysOfWeek | Specifies the values for weekly recurrence pattern. | String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday' (required) |
## Microsoft.AlertsManagement/prometheusRuleGroups@2021-07-22-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.AlertsManagement/prometheusRuleGroups@2021-07-22-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      clusterName = "string"
      description = "string"
      enabled = bool
      interval = "string"
      rules = [
        {
          actions = [
            {
              actionGroupId = "string"
              actionProperties = {}
            }
          ]
          alert = "string"
          annotations = {}
          enabled = bool
          expression = "string"
          for = "string"
          labels = {}
          record = "string"
          resolveConfiguration = {
            autoResolved = bool
            timeToResolve = "string"
          }
          severity = int
        }
      ]
      scopes = [
        "string"
      ]
    }
  })
}

```

### prometheusRuleGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| properties | The Prometheus rule group properties of the resource. | PrometheusRuleGroupProperties(required) |


### PrometheusRuleGroupProperties

| Name | Description | Value |
|-|-|-|
| clusterName | the cluster name of the rule group evaluation. | string |
| description | the description of the Prometheus rule group that will be included in the alert email. | string |
| enabled | the flag that indicates whether the Prometheus rule group is enabled. | bool |
| interval | the interval in which to run the Prometheus rule group represented in ISO 8601 duration format. Should be between 1 and 15 minutes | string |
| rules | defines the rules in the Prometheus rule group. | PrometheusRule[] (required) |
| scopes | the list of resource id's that this rule group is scoped to. | string[] (required) |


### PrometheusRule

| Name | Description | Value |
|-|-|-|
| actions | The array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved. Only relevant for alerts. | PrometheusRuleGroupAction[] |
| alert | the name of the alert rule. | string |
| annotations | annotations for rule group. Only relevant for alerts. | object |
| enabled | the flag that indicates whether the Prometheus rule is enabled. | bool |
| expression | the expression to run for the rule. | string (required) |
| for | the amount of time alert must be active before firing. Only relevant for alerts. | string |
| labels | labels for rule group. Only relevant for alerts. | object |
| record | the name of the recording rule. | string |
| resolveConfiguration | defines the configuration for resolving fired alerts. Only relevant for alerts. | PrometheusRuleResolveConfiguration |
| severity | the severity of the alerts fired by the rule. Only relevant for alerts. | int |


### PrometheusRuleGroupAction

| Name | Description | Value |
|-|-|-|
| actionGroupId | The resource id of the action group to use. | string |
| actionProperties | The properties of an action group object. | object |


### PrometheusRuleResolveConfiguration

| Name | Description | Value |
|-|-|-|
| autoResolved | the flag that indicates whether or not to auto resolve a fired alert. | bool |
| timeToResolve | the duration a rule must evaluate as healthy before the fired alert is automatically resolved represented in ISO 8601 duration format. Should be between 1 and 15 minutes | string |
