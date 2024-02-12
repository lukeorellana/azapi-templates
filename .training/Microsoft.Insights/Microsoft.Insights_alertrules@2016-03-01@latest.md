```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/alertrules@2016-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      action = {
        odata.type = "string"
        // For remaining properties, see RuleAction objects
      }
      actions = [
        {
          odata.type = "string"
          // For remaining properties, see RuleAction objects
        }
      ]
      condition = {
        dataSource = {
          legacyResourceId = "string"
          metricNamespace = "string"
          resourceLocation = "string"
          resourceUri = "string"
          odata.type = "string"
          // For remaining properties, see RuleDataSource objects
        }
        odata.type = "string"
        // For remaining properties, see RuleCondition objects
      }
      description = "string"
      isEnabled = bool
      name = "string"
      provisioningState = "string"
    }
  })
}

```

### alertrules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The alert rule properties of the resource. | AlertRule(required) |


### AlertRule

| Name | Description | Value |
|-|-|-|
| action | action that is performed when the alert rule becomes active, and when an alert condition is resolved. | RuleAction |
| actions | the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved. | RuleAction[] |
| condition | the condition that results in the alert rule being activated. | RuleCondition(required) |
| description | the description of the alert rule that will be included in the alert email. | string |
| isEnabled | the flag that indicates whether the alert rule is enabled. | bool (required) |
| name | the name of the alert rule. | string (required) |
| provisioningState | the provisioning state. | string |


### RuleAction

| Name | Description | Value |
|-|-|-|
| odata.type | Set the object type | Microsoft.Azure.Management.Insights.Models.RuleEmailActionMicrosoft.Azure.Management.Insights.Models.RuleWebhookAction(required) |


### RuleEmailAction

| Name | Description | Value |
|-|-|-|
| odata.type | specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction. | 'Microsoft.Azure.Management.Insights.Models.RuleEmailAction' (required) |
| customEmails | the list of administrator's custom email addresses to notify of the activation of the alert. | string[] |
| sendToServiceOwners | Whether the administrators (service and co-administrators) of the service should be notified when the alert is activated. | bool |


### RuleWebhookAction

| Name | Description | Value |
|-|-|-|
| odata.type | specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction. | 'Microsoft.Azure.Management.Insights.Models.RuleWebhookAction' (required) |
| properties | the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload. | object |
| serviceUri | the service uri to Post the notification when the alert activates or resolves. | string |


### RuleCondition

| Name | Description | Value |
|-|-|-|
| dataSource | the resource from which the rule collects its data. For this type dataSource will always be of type RuleMetricDataSource. | RuleDataSource |
| odata.type | Set the object type | Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleConditionMicrosoft.Azure.Management.Insights.Models.ManagementEventRuleConditionMicrosoft.Azure.Management.Insights.Models.ThresholdRuleCondition(required) |


### RuleDataSource

| Name | Description | Value |
|-|-|-|
| legacyResourceId | the legacy resource identifier of the resource the rule monitors.NOTE: this property cannot be updated for an existing rule. | string |
| metricNamespace | the namespace of the metric. | string |
| resourceLocation | the location of the resource. | string |
| resourceUri | the resource identifier of the resource the rule monitors.NOTE: this property cannot be updated for an existing rule. | string |
| odata.type | Set the object type | Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSourceMicrosoft.Azure.Management.Insights.Models.RuleMetricDataSource(required) |


### RuleManagementEventDataSource

| Name | Description | Value |
|-|-|-|
| odata.type | specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource | 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource' (required) |
| claims | the claims. | RuleManagementEventClaimsDataSource |
| eventName | the event name. | string |
| eventSource | the event source. | string |
| level | the level. | string |
| operationName | The name of the operation that should be checked for. If no name is provided, any operation will match. | string |
| resourceGroupName | the resource group name. | string |
| resourceProviderName | the resource provider name. | string |
| status | The status of the operation that should be checked for. If no status is provided, any status will match. | string |
| subStatus | the substatus. | string |


### RuleManagementEventClaimsDataSource

| Name | Description | Value |
|-|-|-|
| emailAddress | the email address. | string |


### RuleMetricDataSource

| Name | Description | Value |
|-|-|-|
| odata.type | specifies the type of data source. There are two types of rule data sources: RuleMetricDataSource and RuleManagementEventDataSource | 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource' (required) |
| metricName | the name of the metric that defines what the rule monitors. | string |


### LocationThresholdRuleCondition

| Name | Description | Value |
|-|-|-|
| odata.type | specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric). | 'Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition' (required) |
| failedLocationCount | the number of locations that must fail to activate the alert. | int (required)Constraints:Min value = 0 |
| windowSize | the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day. | string |


### ManagementEventRuleCondition

| Name | Description | Value |
|-|-|-|
| odata.type | specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric). | 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition' (required) |
| aggregation | How the data that is collected should be combined over time and when the alert is activated. Note that for management event alerts aggregation is optional â if it is not provided then any event will cause the alert to activate. | ManagementEventAggregationCondition |


### ManagementEventAggregationCondition

| Name | Description | Value |
|-|-|-|
| operator | the condition operator. | 'GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual' |
| threshold | The threshold value that activates the alert. | int |
| windowSize | the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day. | string |


### ThresholdRuleCondition

| Name | Description | Value |
|-|-|-|
| odata.type | specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric). | 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition' (required) |
| operator | the operator used to compare the data and the threshold. | 'GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual' (required) |
| threshold | the threshold value that activates the alert. | int (required) |
| timeAggregation | the time aggregation operator. How the data that are collected should be combined over time. The default value is the PrimaryAggregationType of the Metric. | 'Average''Last''Maximum''Minimum''Total' |
| windowSize | the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day. | string |


