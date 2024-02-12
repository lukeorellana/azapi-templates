```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/scheduledQueryRules@2023-03-15-preview"
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
      actions = {
        actionGroups = [
          "string"
        ]
        actionProperties = {}
        customProperties = {}
      }
      autoMitigate = bool
      checkWorkspaceAlertsStorageConfigured = bool
      criteria = {
        allOf = [
          {
            dimensions = [
              {
                name = "string"
                operator = "string"
                values = [
                  "string"
                ]
              }
            ]
            failingPeriods = {
              minFailingPeriodsToAlert = int
              numberOfEvaluationPeriods = int
            }
            metricMeasureColumn = "string"
            metricName = "string"
            operator = "string"
            query = "string"
            resourceIdColumn = "string"
            threshold = int
            timeAggregation = "string"
          }
        ]
      }
      description = "string"
      displayName = "string"
      enabled = bool
      evaluationFrequency = "string"
      muteActionsDuration = "string"
      overrideQueryTimeRange = "string"
      ruleResolveConfiguration = {
        autoResolved = bool
        timeToResolve = "string"
      }
      scopes = [
        "string"
      ]
      severity = int
      skipQueryValidation = bool
      targetResourceTypes = [
        "string"
      ]
      windowSize = "string"
    }
    kind = "string"
  })
}

```

### scheduledQueryRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use:*<>%{}&:\\?/#or control charactersCan't end with space or period. |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | Indicates the type of scheduled query rule. The default is LogAlert. | 'LogAlert''LogToMetric' |
| identity | The identity of the resource. | Identity |
| properties | The rule properties of the resource. | ScheduledQueryRuleProperties(required) |


### Identity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity. | 'None''SystemAssigned''UserAssigned' (required) |
| userAssignedIdentities | The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |


### ScheduledQueryRuleProperties

| Name | Description | Value |
|-|-|-|
| actions | Actions to invoke when the alert fires. | Actions |
| autoMitigate | The flag that indicates whether the alert should be automatically resolved or not. The default is true. Relevant only for rules of the kind LogAlert. | bool |
| checkWorkspaceAlertsStorageConfigured | The flag which indicates whether this scheduled query rule should be stored in the customer's storage. The default is false. Relevant only for rules of the kind LogAlert. | bool |
| criteria | The rule criteria that defines the conditions of the scheduled query rule. | ScheduledQueryRuleCriteria |
| description | The description of the scheduled query rule. | string |
| displayName | The display name of the alert rule | string |
| enabled | The flag which indicates whether this scheduled query rule is enabled. Value should be true or false | bool |
| evaluationFrequency | How often the scheduled query rule is evaluated represented in ISO 8601 duration format. Relevant and required only for rules of the kind LogAlert. | string |
| muteActionsDuration | Mute actions for the chosen period of time (in ISO 8601 duration format) after the alert is fired. Relevant only for rules of the kind LogAlert. | string |
| overrideQueryTimeRange | If specified then overrides the query time range (default is WindowSize*NumberOfEvaluationPeriods). Relevant only for rules of the kind LogAlert. | string |
| ruleResolveConfiguration | Defines the configuration for resolving fired alerts. Relevant only for rules of the kind LogAlert. | RuleResolveConfiguration |
| scopes | The list of resource id's that this scheduled query rule is scoped to. | string[] |
| severity | Severity of the alert. Should be an integer between [0-4]. Value of 0 is severest. Relevant and required only for rules of the kind LogAlert. | int |
| skipQueryValidation | The flag which indicates whether the provided query should be validated or not. The default is false. Relevant only for rules of the kind LogAlert. | bool |
| targetResourceTypes | List of resource type of the target resource(s) on which the alert is created/updated. For example if the scope is a resource group and targetResourceTypes is Microsoft.Compute/virtualMachines, then a different alert will be fired for each virtual machine in the resource group which meet the alert criteria. Relevant only for rules of the kind LogAlert | string[] |
| windowSize | The period of time (in ISO 8601 duration format) on which the Alert query will be executed (bin size). Relevant and required only for rules of the kind LogAlert. | string |


### Actions

| Name | Description | Value |
|-|-|-|
| actionGroups | Action Group resource Ids to invoke when the alert fires. | string[] |
| actionProperties | The properties of an action properties. | object |
| customProperties | The properties of an alert payload. | object |


### ScheduledQueryRuleCriteria

| Name | Description | Value |
|-|-|-|
| allOf | A list of conditions to evaluate against the specified scopes | Condition[] |


### Condition

| Name | Description | Value |
|-|-|-|
| dimensions | List of Dimensions conditions | Dimension[] |
| failingPeriods | The minimum number of violations required within the selected lookback time window required to raise an alert. Relevant only for rules of the kind LogAlert. | ConditionFailingPeriods |
| metricMeasureColumn | The column containing the metric measure number. Relevant only for rules of the kind LogAlert. | string |
| metricName | The name of the metric to be sent. Relevant and required only for rules of the kind LogToMetric. | string |
| operator | The criteria operator. Relevant and required only for rules of the kind LogAlert. | 'Equals''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual' |
| query | Log query alert | string |
| resourceIdColumn | The column containing the resource id. The content of the column must be a uri formatted as resource id. Relevant only for rules of the kind LogAlert. | string |
| threshold | the criteria threshold value that activates the alert. Relevant and required only for rules of the kind LogAlert. | int |
| timeAggregation | Aggregation type. Relevant and required only for rules of the kind LogAlert. | 'Average''Count''Maximum''Minimum''Total' |


### Dimension

| Name | Description | Value |
|-|-|-|
| name | Name of the dimension | string (required) |
| operator | Operator for dimension values | 'Exclude''Include' (required) |
| values | List of dimension values | string[] (required) |


### ConditionFailingPeriods

| Name | Description | Value |
|-|-|-|
| minFailingPeriodsToAlert | The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods. Default value is 1 | int |
| numberOfEvaluationPeriods | The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points. Default value is 1 | int |


### RuleResolveConfiguration

| Name | Description | Value |
|-|-|-|
| autoResolved | The flag that indicates whether or not to auto resolve a fired alert. | bool |
| timeToResolve | The duration a rule must evaluate as healthy before the fired alert is automatically resolved represented in ISO 8601 duration format. | string |


