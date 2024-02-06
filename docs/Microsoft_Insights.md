## Microsoft.Insights/actionGroups@2023-01-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/actionGroups@2023-01-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      armRoleReceivers = [
        {
          name = "string"
          roleId = "string"
          useCommonAlertSchema = bool
        }
      ]
      automationRunbookReceivers = [
        {
          automationAccountId = "string"
          isGlobalRunbook = bool
          name = "string"
          runbookName = "string"
          serviceUri = "string"
          useCommonAlertSchema = bool
          webhookResourceId = "string"
        }
      ]
      azureAppPushReceivers = [
        {
          emailAddress = "string"
          name = "string"
        }
      ]
      azureFunctionReceivers = [
        {
          functionAppResourceId = "string"
          functionName = "string"
          httpTriggerUrl = "string"
          name = "string"
          useCommonAlertSchema = bool
        }
      ]
      emailReceivers = [
        {
          emailAddress = "string"
          name = "string"
          useCommonAlertSchema = bool
        }
      ]
      enabled = bool
      eventHubReceivers = [
        {
          eventHubName = "string"
          eventHubNameSpace = "string"
          name = "string"
          subscriptionId = "string"
          tenantId = "string"
          useCommonAlertSchema = bool
        }
      ]
      groupShortName = "string"
      itsmReceivers = [
        {
          connectionId = "string"
          name = "string"
          region = "string"
          ticketConfiguration = "string"
          workspaceId = "string"
        }
      ]
      logicAppReceivers = [
        {
          callbackUrl = "string"
          name = "string"
          resourceId = "string"
          useCommonAlertSchema = bool
        }
      ]
      smsReceivers = [
        {
          countryCode = "string"
          name = "string"
          phoneNumber = "string"
        }
      ]
      voiceReceivers = [
        {
          countryCode = "string"
          name = "string"
          phoneNumber = "string"
        }
      ]
      webhookReceivers = [
        {
          identifierUri = "string"
          name = "string"
          objectId = "string"
          serviceUri = "string"
          tenantId = "string"
          useAadAuth = bool
          useCommonAlertSchema = bool
        }
      ]
    }
  })
}

```

### actionGroups

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use::<>+/&%\?or control charactersCan't end with space or period. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The action groups properties of the resource. | ActionGroup |


### ActionGroup

| Name | Description | Value |
|-|-|-|
| armRoleReceivers | The list of ARM role receivers that are part of this action group. Roles are Azure RBAC roles and only built-in roles are supported. | ArmRoleReceiver[] |
| automationRunbookReceivers | The list of AutomationRunbook receivers that are part of this action group. | AutomationRunbookReceiver[] |
| azureAppPushReceivers | The list of AzureAppPush receivers that are part of this action group. | AzureAppPushReceiver[] |
| azureFunctionReceivers | The list of azure function receivers that are part of this action group. | AzureFunctionReceiver[] |
| emailReceivers | The list of email receivers that are part of this action group. | EmailReceiver[] |
| enabled | Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications. | bool (required) |
| eventHubReceivers | The list of event hub receivers that are part of this action group. | EventHubReceiver[] |
| groupShortName | The short name of the action group. This will be used in SMS messages. | string (required)Constraints:Max length = 12 |
| itsmReceivers | The list of ITSM receivers that are part of this action group. | ItsmReceiver[] |
| logicAppReceivers | The list of logic app receivers that are part of this action group. | LogicAppReceiver[] |
| smsReceivers | The list of SMS receivers that are part of this action group. | SmsReceiver[] |
| voiceReceivers | The list of voice receivers that are part of this action group. | VoiceReceiver[] |
| webhookReceivers | The list of webhook receivers that are part of this action group. | WebhookReceiver[] |


### ArmRoleReceiver

| Name | Description | Value |
|-|-|-|
| name | The name of the arm role receiver. Names must be unique across all receivers within an action group. | string (required) |
| roleId | The arm role id. | string (required) |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |


### AutomationRunbookReceiver

| Name | Description | Value |
|-|-|-|
| automationAccountId | The Azure automation account Id which holds this runbook and authenticate to Azure resource. | string (required) |
| isGlobalRunbook | Indicates whether this instance is global runbook. | bool (required) |
| name | Indicates name of the webhook. | string |
| runbookName | The name for this runbook. | string (required) |
| serviceUri | The URI where webhooks should be sent. | string |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |
| webhookResourceId | The resource id for webhook linked to this runbook. | string (required) |


### AzureAppPushReceiver

| Name | Description | Value |
|-|-|-|
| emailAddress | The email address registered for the Azure mobile app. | string (required) |
| name | The name of the Azure mobile app push receiver. Names must be unique across all receivers within an action group. | string (required) |


### AzureFunctionReceiver

| Name | Description | Value |
|-|-|-|
| functionAppResourceId | The azure resource id of the function app. | string (required) |
| functionName | The function name in the function app. | string (required) |
| httpTriggerUrl | The http trigger url where http request sent to. | string (required) |
| name | The name of the azure function receiver. Names must be unique across all receivers within an action group. | string (required) |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |


### EmailReceiver

| Name | Description | Value |
|-|-|-|
| emailAddress | The email address of this receiver. | string (required) |
| name | The name of the email receiver. Names must be unique across all receivers within an action group. | string (required) |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |


### EventHubReceiver

| Name | Description | Value |
|-|-|-|
| eventHubName | The name of the specific Event Hub queue | string (required) |
| eventHubNameSpace | The Event Hub namespace | string (required) |
| name | The name of the Event hub receiver. Names must be unique across all receivers within an action group. | string (required) |
| subscriptionId | The Id for the subscription containing this event hub | string (required) |
| tenantId | The tenant Id for the subscription containing this event hub | string |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |


### ItsmReceiver

| Name | Description | Value |
|-|-|-|
| connectionId | Unique identification of ITSM connection among multiple defined in above workspace. | string (required) |
| name | The name of the Itsm receiver. Names must be unique across all receivers within an action group. | string (required) |
| region | Region in which workspace resides. Supported values:'centralindia','japaneast','southeastasia','australiasoutheast','uksouth','westcentralus','canadacentral','eastus','westeurope' | string (required) |
| ticketConfiguration | JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well. | string (required) |
| workspaceId | OMS LA instance identifier. | string (required) |


### LogicAppReceiver

| Name | Description | Value |
|-|-|-|
| callbackUrl | The callback url where http request sent to. | string (required) |
| name | The name of the logic app receiver. Names must be unique across all receivers within an action group. | string (required) |
| resourceId | The azure resource id of the logic app receiver. | string (required) |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |


### SmsReceiver

| Name | Description | Value |
|-|-|-|
| countryCode | The country code of the SMS receiver. | string (required) |
| name | The name of the SMS receiver. Names must be unique across all receivers within an action group. | string (required) |
| phoneNumber | The phone number of the SMS receiver. | string (required) |


### VoiceReceiver

| Name | Description | Value |
|-|-|-|
| countryCode | The country code of the voice receiver. | string (required) |
| name | The name of the voice receiver. Names must be unique across all receivers within an action group. | string (required) |
| phoneNumber | The phone number of the voice receiver. | string (required) |


### WebhookReceiver

| Name | Description | Value |
|-|-|-|
| identifierUri | Indicates the identifier uri for aad auth. | string |
| name | The name of the webhook receiver. Names must be unique across all receivers within an action group. | string (required) |
| objectId | Indicates the webhook app object Id for aad auth. | string |
| serviceUri | The URI where webhooks should be sent. | string (required) |
| tenantId | Indicates the tenant id for aad auth. | string |
| useAadAuth | Indicates whether or not use AAD authentication. | bool |
| useCommonAlertSchema | Indicates whether to use common alert schema. | bool |
## Microsoft.Insights/activityLogAlerts@2023-01-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/activityLogAlerts@2023-01-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      actions = {
        actionGroups = [
          {
            actionGroupId = "string"
            actionProperties = {}
            webhookProperties = {}
          }
        ]
      }
      condition = {
        allOf = [
          {
            anyOf = [
              {
                containsAny = [
                  "string"
                ]
                equals = "string"
                field = "string"
              }
            ]
            containsAny = [
              "string"
            ]
            equals = "string"
            field = "string"
          }
        ]
      }
      description = "string"
      enabled = bool
      scopes = [
        "string"
      ]
      tenantScope = "string"
    }
  })
}

```

### activityLogAlerts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use:<>*%{}&:\\?+/#or control charactersCan't end with space or period. |
| location | The location of the resource. Since Azure Activity Log Alerts is a global service, the location of the rules should always be 'global'. | string |
| tags | The tags of the resource. | Dictionary of tag names and values. SeeTags in templates |
| properties | The Activity Log Alert rule properties of the resource. | AlertRuleProperties |


### AlertRuleProperties

| Name | Description | Value |
|-|-|-|
| actions | The actions that will activate when the condition is met. | ActionList(required) |
| condition | The condition that will cause this alert to activate. | AlertRuleAllOfCondition(required) |
| description | A description of this Activity Log Alert rule. | string |
| enabled | Indicates whether this Activity Log Alert rule is enabled. If an Activity Log Alert rule is not enabled, then none of its actions will be activated. | bool |
| scopes | A list of resource IDs that will be used as prefixes. The alert will only apply to Activity Log events with resource IDs that fall under one of these prefixes. This list must include at least one item. | string[] |
| tenantScope | The tenant GUID. Must be provided for tenant-level and management group events rules. | string |


### ActionList

| Name | Description | Value |
|-|-|-|
| actionGroups | The list of the Action Groups. | ActionGroup[] |


### ActionGroup

| Name | Description | Value |
|-|-|-|
| actionGroupId | The resource ID of the Action Group. This cannot be null or empty. | string (required) |
| actionProperties | Predefined list of properties and configuration items for the action group. | object |
| webhookProperties | the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload. | object |


### AlertRuleAllOfCondition

| Name | Description | Value |
|-|-|-|
| allOf | The list of Activity Log Alert rule conditions. | AlertRuleAnyOfOrLeafCondition[] (required) |


### AlertRuleAnyOfOrLeafCondition

| Name | Description | Value |
|-|-|-|
| anyOf | An Activity Log Alert rule condition that is met when at least one of its member leaf conditions are met. | AlertRuleLeafCondition[] |
| containsAny | The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met. | string[] |
| equals | The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met. | string |
| field | The name of the Activity Log event's field that this condition will examine.The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'. | string |


### AlertRuleLeafCondition

| Name | Description | Value |
|-|-|-|
| containsAny | The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met. | string[] |
| equals | The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met. | string |
| field | The name of the Activity Log event's field that this condition will examine.The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'. | string |
## Microsoft.Insights/alertrules@2016-03-01

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
## Microsoft.Insights/autoscalesettings@2022-10-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/autoscalesettings@2022-10-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      enabled = bool
      name = "string"
      notifications = [
        {
          email = {
            customEmails = [
              "string"
            ]
            sendToSubscriptionAdministrator = bool
            sendToSubscriptionCoAdministrators = bool
          }
          operation = "Scale"
          webhooks = [
            {
              properties = {}
              serviceUri = "string"
            }
          ]
        }
      ]
      predictiveAutoscalePolicy = {
        scaleLookAheadTime = "string"
        scaleMode = "string"
      }
      profiles = [
        {
          capacity = {
            default = "string"
            maximum = "string"
            minimum = "string"
          }
          fixedDate = {
            end = "string"
            start = "string"
            timeZone = "string"
          }
          name = "string"
          recurrence = {
            frequency = "string"
            schedule = {
              days = [
                "string"
              ]
              hours = [
                int
              ]
              minutes = [
                int
              ]
              timeZone = "string"
            }
          }
          rules = [
            {
              metricTrigger = {
                dimensions = [
                  {
                    DimensionName = "string"
                    Operator = "string"
                    Values = [
                      "string"
                    ]
                  }
                ]
                dividePerInstance = bool
                metricName = "string"
                metricNamespace = "string"
                metricResourceLocation = "string"
                metricResourceUri = "string"
                operator = "string"
                statistic = "string"
                threshold = int
                timeAggregation = "string"
                timeGrain = "string"
                timeWindow = "string"
              }
              scaleAction = {
                cooldown = "string"
                direction = "string"
                type = "string"
                value = "string"
              }
            }
          ]
        }
      ]
      targetResourceLocation = "string"
      targetResourceUri = "string"
    }
  })
}

```

### autoscalesettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters. | Dictionary of tag names and values. SeeTags in templates |
| properties | The autoscale setting of the resource. | AutoscaleSetting(required) |


### AutoscaleSetting

| Name | Description | Value |
|-|-|-|
| enabled | the enabled flag. Specifies whether automatic scaling is enabled for the resource. The default value is 'false'. | bool |
| name | the name of the autoscale setting. | string |
| notifications | the collection of notifications. | AutoscaleNotification[] |
| predictiveAutoscalePolicy | the predictive autoscale policy mode. | PredictiveAutoscalePolicy |
| profiles | the collection of automatic scaling profiles that specify different scaling parameters for different time periods. A maximum of 20 profiles can be specified. | AutoscaleProfile[] (required)Constraints:Max length = 20 |
| targetResourceLocation | the location of the resource that the autoscale setting should be added to. | string |
| targetResourceUri | the resource identifier of the resource that the autoscale setting should be added to. | string |


### AutoscaleNotification

| Name | Description | Value |
|-|-|-|
| email | the email notification. | EmailNotification |
| operation | the operation associated with the notification and its value must be "scale" | 'Scale' (required) |
| webhooks | the collection of webhook notifications. | WebhookNotification[] |


### EmailNotification

| Name | Description | Value |
|-|-|-|
| customEmails | the custom e-mails list. This value can be null or empty, in which case this attribute will be ignored. | string[] |
| sendToSubscriptionAdministrator | a value indicating whether to send email to subscription administrator. | bool |
| sendToSubscriptionCoAdministrators | a value indicating whether to send email to subscription co-administrators. | bool |


### WebhookNotification

| Name | Description | Value |
|-|-|-|
| properties | a property bag of settings. This value can be empty. | object |
| serviceUri | the service address to receive the notification. | string |


### PredictiveAutoscalePolicy

| Name | Description | Value |
|-|-|-|
| scaleLookAheadTime | the amount of time to specify by which instances are launched in advance. It must be between 1 minute and 60 minutes in ISO 8601 format. | string |
| scaleMode | the predictive autoscale mode | 'Disabled''Enabled''ForecastOnly' (required) |


### AutoscaleProfile

| Name | Description | Value |
|-|-|-|
| capacity | the number of instances that can be used during this profile. | ScaleCapacity(required) |
| fixedDate | the specific date-time for the profile. This element is not used if the Recurrence element is used. | TimeWindow |
| name | the name of the profile. | string (required) |
| recurrence | the repeating times at which this profile begins. This element is not used if the FixedDate element is used. | Recurrence |
| rules | the collection of rules that provide the triggers and parameters for the scaling action. A maximum of 10 rules can be specified. | ScaleRule[] (required) |


### ScaleCapacity

| Name | Description | Value |
|-|-|-|
| default | the number of instances that will be set if metrics are not available for evaluation. The default is only used if the current instance count is lower than the default. | string (required) |
| maximum | the maximum number of instances for the resource. The actual maximum number of instances is limited by the cores that are available in the subscription. | string (required) |
| minimum | the minimum number of instances for the resource. | string (required) |


### TimeWindow

| Name | Description | Value |
|-|-|-|
| end | the end time for the profile in ISO 8601 format. | string (required) |
| start | the start time for the profile in ISO 8601 format. | string (required) |
| timeZone | the timezone of the start and end times for the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, TÃ¼rkiye Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time | string |


### Recurrence

| Name | Description | Value |
|-|-|-|
| frequency | the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, setscheduleto every day of the week. The frequency property specifies that the schedule is repeated weekly. | 'Day''Hour''Minute''Month''None''Second''Week''Year' (required) |
| schedule | the scheduling constraints for when the profile begins. | RecurrentSchedule(required) |


### RecurrentSchedule

| Name | Description | Value |
|-|-|-|
| days | the collection of days that the profile takes effect on. Possible values are Sunday through Saturday. | string[] (required) |
| hours | A collection of hours that the profile takes effect on. Values supported are 0 to 23 on the 24-hour clock (AM/PM times are not supported). | int[] (required) |
| minutes | A collection of minutes at which the profile takes effect at. | int[] (required) |
| timeZone | the timezone for the hours of the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, TÃ¼rkiye Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time | string (required) |


### ScaleRule

| Name | Description | Value |
|-|-|-|
| metricTrigger | the trigger that results in a scaling action. | MetricTrigger(required) |
| scaleAction | the parameters for the scaling action. | ScaleAction(required) |


### MetricTrigger

| Name | Description | Value |
|-|-|-|
| dimensions | List of dimension conditions. For example: [{"DimensionName":"AppName","Operator":"Equals","Values":["App1"]},{"DimensionName":"Deployment","Operator":"Equals","Values":["default"]}]. | ScaleRuleMetricDimension[] |
| dividePerInstance | a value indicating whether metric should divide per instance. | bool |
| metricName | the name of the metric that defines what the rule monitors. | string (required) |
| metricNamespace | the namespace of the metric that defines what the rule monitors. | string |
| metricResourceLocation | the location of the resource the rule monitors. | string |
| metricResourceUri | the resource identifier of the resource the rule monitors. | string (required) |
| operator | the operator that is used to compare the metric data and the threshold. | 'Equals''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual''NotEquals' (required) |
| statistic | the metric statistic type. How the metrics from multiple instances are combined. | 'Average''Count''Max''Min''Sum' (required) |
| threshold | the threshold of the metric that triggers the scale action. | int (required) |
| timeAggregation | time aggregation type. How the data that is collected should be combined over time. The default value is Average. | 'Average''Count''Last''Maximum''Minimum''Total' (required) |
| timeGrain | the granularity of metrics the rule monitors. Must be one of the predefined values returned from metric definitions for the metric. Must be between 12 hours and 1 minute. | string (required) |
| timeWindow | the range of time in which instance data is collected. This value must be greater than the delay in metric collection, which can vary from resource-to-resource. Must be between 12 hours and 5 minutes. | string (required) |


### ScaleRuleMetricDimension

| Name | Description | Value |
|-|-|-|
| DimensionName | Name of the dimension. | string (required) |
| Operator | the dimension operator. Only 'Equals' and 'NotEquals' are supported. 'Equals' being equal to any of the values. 'NotEquals' being not equal to all of the values | 'Equals''NotEquals' (required) |
| Values | list of dimension values. For example: ["App1","App2"]. | string[] (required) |


### ScaleAction

| Name | Description | Value |
|-|-|-|
| cooldown | the amount of time to wait since the last scaling action before this action occurs. It must be between 1 week and 1 minute in ISO 8601 format. | string (required) |
| direction | the scale direction. Whether the scaling action increases or decreases the number of instances. | 'Decrease''Increase''None' (required) |
| type | the type of action that should occur when the scale rule fires. | 'ChangeCount''ExactCount''PercentChangeCount''ServiceAllowedNextValue' (required) |
| value | the number of instances that are involved in the scaling action. This value must be 1 or greater. The default value is 1. | string |
## Microsoft.Insights/components@2020-02-02

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/components@2020-02-02"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      Application_Type = "string"
      DisableIpMasking = bool
      DisableLocalAuth = bool
      Flow_Type = "Bluefield"
      ForceCustomerStorageForProfiler = bool
      HockeyAppId = "string"
      ImmediatePurgeDataOn30Days = bool
      IngestionMode = "string"
      publicNetworkAccessForIngestion = "string"
      publicNetworkAccessForQuery = "string"
      Request_Source = "rest"
      RetentionInDays = int
      SamplingPercentage = "decimal-as-string"
      WorkspaceResourceId = "string"
    }
    kind = "string"
    etag = "string"
  })
}

```

### components

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use:%&\?/or control charactersCan't end with space or period. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| kind | The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone. | string (required) |
| etag | Resource etag | string |
| properties | Properties that define an Application Insights component resource. | ApplicationInsightsComponentProperties |


### ApplicationInsightsComponentProperties

| Name | Description | Value |
|-|-|-|
| Application_Type | Type of application being monitored. | 'other''web' (required) |
| DisableIpMasking | Disable IP masking. | bool |
| DisableLocalAuth | Disable Non-AAD based Auth. | bool |
| Flow_Type | Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API. | 'Bluefield' |
| ForceCustomerStorageForProfiler | Force users to create their own storage account for profiler and debugger. | bool |
| HockeyAppId | The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp. | string |
| ImmediatePurgeDataOn30Days | Purge data immediately after 30 days. | bool |
| IngestionMode | Indicates the flow of the ingestion. | 'ApplicationInsights''ApplicationInsightsWithDiagnosticSettings''LogAnalytics' |
| publicNetworkAccessForIngestion | The network access type for accessing Application Insights ingestion. | 'Disabled''Enabled' |
| publicNetworkAccessForQuery | The network access type for accessing Application Insights query. | 'Disabled''Enabled' |
| Request_Source | Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'. | 'rest' |
| RetentionInDays | Retention period in days. | int |
| SamplingPercentage | Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry. To specify a decimal value, use thejson()function. | int or json decimal |
| WorkspaceResourceId | Resource Id of the log analytics workspace which the data will be ingested to. This property is required to create an application with this API version. Applications from older versions will not have this property. | string |
## Microsoft.Insights/components/exportconfiguration@2015-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/components/exportconfiguration@2015-05-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    DestinationAccountId = "string"
    DestinationAddress = "string"
    DestinationStorageLocationId = "string"
    DestinationStorageSubscriptionId = "string"
    DestinationType = "string"
    IsEnabled = "string"
    NotificationQueueEnabled = "string"
    NotificationQueueUri = "string"
    RecordTypes = "string"
  })
}

```

### components/exportconfiguration

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:components |
| DestinationAccountId | The name of destination storage account. | string |
| DestinationAddress | The SAS URL for the destination storage container. It must grant write permission. | string |
| DestinationStorageLocationId | The location ID of the destination storage container. | string |
| DestinationStorageSubscriptionId | The subscription ID of the destination storage container. | string |
| DestinationType | The Continuous Export destination type. This has to be 'Blob'. | string |
| IsEnabled | Set to 'true' to create a Continuous Export configuration as enabled, otherwise set it to 'false'. | string |
| NotificationQueueEnabled | Deprecated | string |
| NotificationQueueUri | Deprecated | string |
| RecordTypes | The document types to be exported, as comma separated values. Allowed values include 'Requests', 'Event', 'Exceptions', 'Metrics', 'PageViews', 'PageViewPerformance', 'Rdd', 'PerformanceCounters', 'Availability', 'Messages'. | string |
## Microsoft.Insights/components/favorites@2015-05-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/components/favorites@2015-05-01"
  name = "string"
  parent_id = "string"
  Tags = [
    "string"
  ]
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    Category = "string"
    Config = "string"
    FavoriteType = "string"
    IsGeneratedFromTemplate = bool
    SourceType = "string"
    Version = "string"
  })
}

```

### components/favorites

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| Tags | A list of 0 or more tags that are associated with this favorite definition | string[] |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:components |
| Category | Favorite category, as defined by the user at creation time. | string |
| Config | Configuration of this particular favorite, which are driven by the Azure portal UX. Configuration data is a string containing valid JSON | string |
| FavoriteType | Enum indicating if this favorite definition is owned by a specific user or is shared between all users with access to the Application Insights component. | 'shared''user' |
| IsGeneratedFromTemplate | Flag denoting wether or not this favorite was generated from a template. | bool |
| SourceType | The source of the favorite definition. | string |
| Version | This instance's version of the data model. This can change as new features are added that can be marked favorite. Current examples include MetricsExplorer (ME) and Search. | string |
## Microsoft.Insights/components/ProactiveDetectionConfigs@2018-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/components/ProactiveDetectionConfigs@2018-05-01-preview"
  name = "string"
  location = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      CustomEmails = [
        "string"
      ]
      Enabled = bool
      RuleDefinitions = {
        Description = "string"
        DisplayName = "string"
        HelpUrl = "string"
        IsEnabledByDefault = bool
        IsHidden = bool
        IsInPreview = bool
        Name = "string"
        SupportsEmailNotifications = bool
      }
      SendEmailsToSubscriptionOwners = bool
    }
  })
}

```

### components/ProactiveDetectionConfigs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| location | Resource location | string |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:components |
| properties | Properties that define a ProactiveDetection configuration. | ApplicationInsightsComponentProactiveDetectionConfig... |


### ApplicationInsightsComponentProactiveDetectionConfig...

| Name | Description | Value |
|-|-|-|
| CustomEmails | Custom email addresses for this rule notifications | string[] |
| Enabled | A flag that indicates whether this rule is enabled by the user | bool |
| RuleDefinitions | Static definitions of the ProactiveDetection configuration rule (same values for all components). | ApplicationInsightsComponentProactiveDetectionConfig... |
| SendEmailsToSubscriptionOwners | A flag that indicated whether notifications on this rule should be sent to subscription owners | bool |


### ApplicationInsightsComponentProactiveDetectionConfig...

| Name | Description | Value |
|-|-|-|
| Description | The rule description | string |
| DisplayName | The rule name as it is displayed in UI | string |
| HelpUrl | URL which displays additional info about the proactive detection rule | string |
| IsEnabledByDefault | A flag indicating whether the rule is enabled by default | bool |
| IsHidden | A flag indicating whether the rule is hidden (from the UI) | bool |
| IsInPreview | A flag indicating whether the rule is in preview | bool |
| Name | The rule name | string |
| SupportsEmailNotifications | A flag indicating whether email notifications are supported for detections for this rule | bool |
## Microsoft.Insights/dataCollectionEndpoints@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/dataCollectionEndpoints@2022-06-01"
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
      configurationAccess = {}
      description = "string"
      immutableId = "string"
      logsIngestion = {}
      metricsIngestion = {}
      networkAcls = {
        publicNetworkAccess = "string"
      }
    }
    kind = "string"
  })
}

```

### dataCollectionEndpoints

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | The kind of the resource. | 'Linux''Windows' |
| identity | Managed service identity of the resource. | DataCollectionEndpointResourceIdentity |
| properties | Resource properties. | DataCollectionEndpointResourceProperties |


### DataCollectionEndpointResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### DataCollectionEndpointResourceProperties

| Name | Description | Value |
|-|-|-|
| configurationAccess | The endpoint used by clients to access their configuration. | DataCollectionEndpointConfigurationAccess |
| description | Description of the data collection endpoint. | string |
| immutableId | The immutable ID of this data collection endpoint resource. This property is READ-ONLY. | string |
| logsIngestion | The endpoint used by clients to ingest logs. | DataCollectionEndpointLogsIngestion |
| metricsIngestion | The endpoint used by clients to ingest metrics. | DataCollectionEndpointMetricsIngestion |
| networkAcls | Network access control rules for the endpoints. | DataCollectionEndpointNetworkAcls |


### DataCollectionEndpointNetworkAcls

| Name | Description | Value |
|-|-|-|
| publicNetworkAccess | The configuration to set whether network access from public internet to the endpoints are allowed. | 'Disabled''Enabled''SecuredByPerimeter' |
## Microsoft.Insights/dataCollectionRuleAssociations@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/dataCollectionRuleAssociations@2022-06-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dataCollectionEndpointId = "string"
      dataCollectionRuleId = "string"
      description = "string"
    }
  })
}

```

### dataCollectionRuleAssociations

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Resource properties. | DataCollectionRuleAssociationProxyOnlyResourceProper... |


### DataCollectionRuleAssociationProxyOnlyResourceProper...

| Name | Description | Value |
|-|-|-|
| dataCollectionEndpointId | The resource ID of the data collection endpoint that is to be associated. | string |
| dataCollectionRuleId | The resource ID of the data collection rule that is to be associated. | string |
| description | Description of the association. | string |
## Microsoft.Insights/dataCollectionRules@2022-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/dataCollectionRules@2022-06-01"
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
      dataCollectionEndpointId = "string"
      dataFlows = [
        {
          builtInTransform = "string"
          destinations = [
            "string"
          ]
          outputStream = "string"
          streams = [
            "string"
          ]
          transformKql = "string"
        }
      ]
      dataSources = {
        dataImports = {
          eventHub = {
            consumerGroup = "string"
            name = "string"
            stream = "string"
          }
        }
        extensions = [
          {
            extensionName = "string"
            inputDataSources = [
              "string"
            ]
            name = "string"
            streams = [
              "string"
            ]
          }
        ]
        iisLogs = [
          {
            logDirectories = [
              "string"
            ]
            name = "string"
            streams = [
              "string"
            ]
          }
        ]
        logFiles = [
          {
            filePatterns = [
              "string"
            ]
            format = "text"
            name = "string"
            settings = {
              text = {
                recordStartTimestampFormat = "string"
              }
            }
            streams = [
              "string"
            ]
          }
        ]
        performanceCounters = [
          {
            counterSpecifiers = [
              "string"
            ]
            name = "string"
            samplingFrequencyInSeconds = int
            streams = [
              "string"
            ]
          }
        ]
        platformTelemetry = [
          {
            name = "string"
            streams = [
              "string"
            ]
          }
        ]
        prometheusForwarder = [
          {
            labelIncludeFilter = {}
            name = "string"
            streams = "Microsoft-PrometheusMetrics"
          }
        ]
        syslog = [
          {
            facilityNames = [
              "string"
            ]
            logLevels = [
              "string"
            ]
            name = "string"
            streams = "Microsoft-Syslog"
          }
        ]
        windowsEventLogs = [
          {
            name = "string"
            streams = [
              "string"
            ]
            xPathQueries = [
              "string"
            ]
          }
        ]
        windowsFirewallLogs = [
          {
            name = "string"
            streams = [
              "string"
            ]
          }
        ]
      }
      description = "string"
      destinations = {
        azureMonitorMetrics = {
          name = "string"
        }
        eventHubs = [
          {
            eventHubResourceId = "string"
            name = "string"
          }
        ]
        eventHubsDirect = [
          {
            eventHubResourceId = "string"
            name = "string"
          }
        ]
        logAnalytics = [
          {
            name = "string"
            workspaceResourceId = "string"
          }
        ]
        monitoringAccounts = [
          {
            accountResourceId = "string"
            name = "string"
          }
        ]
        storageAccounts = [
          {
            containerName = "string"
            name = "string"
            storageAccountResourceId = "string"
          }
        ]
        storageBlobsDirect = [
          {
            containerName = "string"
            name = "string"
            storageAccountResourceId = "string"
          }
        ]
        storageTablesDirect = [
          {
            name = "string"
            storageAccountResourceId = "string"
            tableName = "string"
          }
        ]
      }
      streamDeclarations = {}
    }
    kind = "string"
  })
}

```

### dataCollectionRules

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives. | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | The kind of the resource. | 'Linux''Windows' |
| identity | Managed service identity of the resource. | DataCollectionRuleResourceIdentity |
| properties | Resource properties. | DataCollectionRuleResourceProperties |


### DataCollectionRuleResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### DataCollectionRuleResourceProperties

| Name | Description | Value |
|-|-|-|
| dataCollectionEndpointId | The resource ID of the data collection endpoint that this rule can be used with. | string |
| dataFlows | The specification of data flows. | DataFlow[] |
| dataSources | The specification of data sources.This property is optional and can be omitted if the rule is meant to be used via direct calls to the provisioned endpoint. | DataCollectionRuleDataSources |
| description | Description of the data collection rule. | string |
| destinations | The specification of destinations. | DataCollectionRuleDestinations |
| streamDeclarations | Declaration of custom streams used in this rule. | object |


### DataFlow

| Name | Description | Value |
|-|-|-|
| builtInTransform | The builtIn transform to transform stream data | string |
| destinations | List of destinations for this data flow. | string[] |
| outputStream | The output stream of the transform. Only required if the transform changes data to a different stream. | string |
| streams | List of streams for this data flow. | String array containing any of:'Microsoft-Event''Microsoft-InsightsMetrics''Microsoft-Perf''Microsoft-Syslog''Microsoft-WindowsEvent' |
| transformKql | The KQL query to transform stream data. | string |


### DataCollectionRuleDataSources

| Name | Description | Value |
|-|-|-|
| dataImports | Specifications of pull based data sources | DataSourcesSpecDataImports |
| extensions | The list of Azure VM extension data source configurations. | ExtensionDataSource[] |
| iisLogs | The list of IIS logs source configurations. | IisLogsDataSource[] |
| logFiles | The list of Log files source configurations. | LogFilesDataSource[] |
| performanceCounters | The list of performance counter data source configurations. | PerfCounterDataSource[] |
| platformTelemetry | The list of platform telemetry configurations | PlatformTelemetryDataSource[] |
| prometheusForwarder | The list of Prometheus forwarder data source configurations. | PrometheusForwarderDataSource[] |
| syslog | The list of Syslog data source configurations. | SyslogDataSource[] |
| windowsEventLogs | The list of Windows Event Log data source configurations. | WindowsEventLogDataSource[] |
| windowsFirewallLogs | The list of Windows Firewall logs source configurations. | WindowsFirewallLogsDataSource[] |


### DataSourcesSpecDataImports

| Name | Description | Value |
|-|-|-|
| eventHub | Definition of Event Hub configuration. | DataImportSourcesEventHub |


### DataImportSourcesEventHub

| Name | Description | Value |
|-|-|-|
| consumerGroup | Event Hub consumer group name | string |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| stream | The stream to collect from EventHub | string |


### ExtensionDataSource

| Name | Description | Value |
|-|-|-|
| extensionName | The name of the VM extension. | string (required) |
| extensionSettings | The extension settings. The format is specific for particular extension. | For Bicep, you can use theany()function. |
| inputDataSources | The list of data sources this extension needs data from. | string[] |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | List of streams that this data source will be sent to.A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to. | String array containing any of:'Microsoft-Event''Microsoft-InsightsMetrics''Microsoft-Perf''Microsoft-Syslog''Microsoft-WindowsEvent' |


### IisLogsDataSource

| Name | Description | Value |
|-|-|-|
| logDirectories | Absolute paths file location | string[] |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | IIS streams | string[] (required) |


### LogFilesDataSource

| Name | Description | Value |
|-|-|-|
| filePatterns | File Patterns where the log files are located | string[] (required) |
| format | The data format of the log files | 'text' (required) |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| settings | The log files specific settings. | LogFilesDataSourceSettings |
| streams | List of streams that this data source will be sent to.A stream indicates what schema will be used for this data source | string[] (required) |


### LogFilesDataSourceSettings

| Name | Description | Value |
|-|-|-|
| text | Text settings | LogFileSettingsText |


### LogFileSettingsText

| Name | Description | Value |
|-|-|-|
| recordStartTimestampFormat | MM:SS AM/PM' , 'MMM d hh:mm:ss' , 'Mon DD, YYYY HH:MM:SS' , 'YYYY-MM-DD HH:MM:SS' , 'dd/MMM/yyyy:HH:mm:ss zzz' , 'ddMMyy HH:mm:ss' , 'yyMMdd HH:mm:ss' , 'yyyy-MM-ddTHH:mm:ssK' , string (Required): One of the supported timestamp formats | 'ISO 8601''M/D/YYYY HH (required) |


### PerfCounterDataSource

| Name | Description | Value |
|-|-|-|
| counterSpecifiers | A list of specifier names of the performance counters you want to collect.Use a wildcard (*) to collect a counter for all instances.To get a list of performance counters on Windows, run the command 'typeperf'. | string[] |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| samplingFrequencyInSeconds | The number of seconds between consecutive counter measurements (samples). | int |
| streams | List of streams that this data source will be sent to.A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to. | String array containing any of:'Microsoft-InsightsMetrics''Microsoft-Perf' |


### PlatformTelemetryDataSource

| Name | Description | Value |
|-|-|-|
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | List of platform telemetry streams to collect | string[] (required) |


### PrometheusForwarderDataSource

| Name | Description | Value |
|-|-|-|
| labelIncludeFilter | The list of label inclusion filters in the form of label "name-value" pairs.Currently only one label is supported: 'microsoft_metrics_include_label'.Label values are matched case-insensitively. | object |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | List of streams that this data source will be sent to. | String array containing any of:'Microsoft-PrometheusMetrics' |


### SyslogDataSource

| Name | Description | Value |
|-|-|-|
| facilityNames | The list of facility names. | String array containing any of:'*''auth''authpriv''cron''daemon''kern''local0''local1''local2''local3''local4''local5''local6''local7''lpr''mail''mark''news''syslog''user''uucp' |
| logLevels | The log levels to collect. | String array containing any of:'*''Alert''Critical''Debug''Emergency''Error''Info''Notice''Warning' |
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | List of streams that this data source will be sent to.A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to. | String array containing any of:'Microsoft-Syslog' |


### WindowsEventLogDataSource

| Name | Description | Value |
|-|-|-|
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | List of streams that this data source will be sent to.A stream indicates what schema will be used for this data and usually what table in Log Analytics the data will be sent to. | String array containing any of:'Microsoft-Event''Microsoft-WindowsEvent' |
| xPathQueries | A list of Windows Event Log queries in XPATH format. | string[] |


### WindowsFirewallLogsDataSource

| Name | Description | Value |
|-|-|-|
| name | A friendly name for the data source.This name should be unique across all data sources (regardless of type) within the data collection rule. | string |
| streams | Firewall logs streams | string[] (required) |


### DataCollectionRuleDestinations

| Name | Description | Value |
|-|-|-|
| azureMonitorMetrics | Azure Monitor Metrics destination. | DestinationsSpecAzureMonitorMetrics |
| eventHubs | List of Event Hubs destinations. | EventHubDestination[] |
| eventHubsDirect | List of Event Hubs Direct destinations. | EventHubDirectDestination[] |
| logAnalytics | List of Log Analytics destinations. | LogAnalyticsDestination[] |
| monitoringAccounts | List of monitoring account destinations. | MonitoringAccountDestination[] |
| storageAccounts | List of storage accounts destinations. | StorageBlobDestination[] |
| storageBlobsDirect | List of Storage Blob Direct destinations. To be used only for sending data directly to store from the agent. | StorageBlobDestination[] |
| storageTablesDirect | List of Storage Table Direct destinations. | StorageTableDestination[] |


### DestinationsSpecAzureMonitorMetrics

| Name | Description | Value |
|-|-|-|
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |


### EventHubDestination

| Name | Description | Value |
|-|-|-|
| eventHubResourceId | The resource ID of the event hub. | string |
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |


### EventHubDirectDestination

| Name | Description | Value |
|-|-|-|
| eventHubResourceId | The resource ID of the event hub. | string |
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |


### LogAnalyticsDestination

| Name | Description | Value |
|-|-|-|
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |
| workspaceResourceId | The resource ID of the Log Analytics workspace. | string |


### MonitoringAccountDestination

| Name | Description | Value |
|-|-|-|
| accountResourceId | The resource ID of the monitoring account. | string |
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |


### StorageBlobDestination

| Name | Description | Value |
|-|-|-|
| containerName | The container name of the Storage Blob. | string |
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |
| storageAccountResourceId | The resource ID of the storage account. | string |


### StorageTableDestination

| Name | Description | Value |
|-|-|-|
| name | A friendly name for the destination.This name should be unique across all destinations (regardless of type) within the data collection rule. | string |
| storageAccountResourceId | The resource ID of the storage account. | string |
| tableName | The name of the Storage Table. | string |
## Microsoft.Insights/diagnosticSettings@2021-05-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/diagnosticSettings@2021-05-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      eventHubAuthorizationRuleId = "string"
      eventHubName = "string"
      logAnalyticsDestinationType = "string"
      logs = [
        {
          category = "string"
          categoryGroup = "string"
          enabled = bool
          retentionPolicy = {
            days = int
            enabled = bool
          }
        }
      ]
      marketplacePartnerId = "string"
      metrics = [
        {
          category = "string"
          enabled = bool
          retentionPolicy = {
            days = int
            enabled = bool
          }
          timeGrain = "string"
        }
      ]
      serviceBusRuleId = "string"
      storageAccountId = "string"
      workspaceId = "string"
    }
  })
}

```

### diagnosticSettings

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| properties | Properties of a Diagnostic Settings Resource. | DiagnosticSettings |


### DiagnosticSettings

| Name | Description | Value |
|-|-|-|
| eventHubAuthorizationRuleId | The resource Id for the event hub authorization rule. | string |
| eventHubName | The name of the event hub. If none is specified, the default event hub will be selected. | string |
| logAnalyticsDestinationType | A string indicating whether the export to Log Analytics should use the default destination type, i.e. AzureDiagnostics, or use a destination type constructed as follows: {normalized service identity}_{normalized category name}. Possible values are: Dedicated and null (null is default.) | string |
| logs | The list of logs settings. | LogSettings[] |
| marketplacePartnerId | The full ARM resource ID of the Marketplace resource to which you would like to send Diagnostic Logs. | string |
| metrics | The list of metric settings. | MetricSettings[] |
| serviceBusRuleId | The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility. | string |
| storageAccountId | The resource ID of the storage account to which you would like to send Diagnostic Logs. | string |
| workspaceId | The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2 | string |


### LogSettings

| Name | Description | Value |
|-|-|-|
| category | Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation. | string |
| categoryGroup | Name of a Diagnostic Log category group for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation. | string |
| enabled | a value indicating whether this log is enabled. | bool (required) |
| retentionPolicy | the retention policy for this log. | RetentionPolicy |


### RetentionPolicy

| Name | Description | Value |
|-|-|-|
| days | the number of days for the retention in days. A value of 0 will retain the events indefinitely. | int (required)Constraints:Min value = 0 |
| enabled | a value indicating whether the retention policy is enabled. | bool (required) |


### MetricSettings

| Name | Description | Value |
|-|-|-|
| category | Name of a Diagnostic Metric category for a resource type this setting is applied to. To obtain the list of Diagnostic metric categories for a resource, first perform a GET diagnostic settings operation. | string |
| enabled | a value indicating whether this category is enabled. | bool (required) |
| retentionPolicy | the retention policy for this category. | RetentionPolicy |
| timeGrain | the timegrain of the metric in ISO8601 format. | string |
## Microsoft.Insights/logprofiles@2016-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/logprofiles@2016-03-01"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      categories = [
        "string"
      ]
      locations = [
        "string"
      ]
      retentionPolicy = {
        days = int
        enabled = bool
      }
      serviceBusRuleId = "string"
      storageAccountId = "string"
    }
  })
}

```

### logprofiles

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The log profile properties of the resource. | LogProfileProperties(required) |


### LogProfileProperties

| Name | Description | Value |
|-|-|-|
| categories | the categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.' | string[] (required) |
| locations | List of regions for which Activity Log events should be stored or streamed. It is a comma separated list of valid ARM locations including the 'global' location. | string[] (required) |
| retentionPolicy | the retention policy for the events in the log. | RetentionPolicy(required) |
| serviceBusRuleId | The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'. | string |
| storageAccountId | the resource id of the storage account to which you would like to send the Activity Log. | string |


### RetentionPolicy

| Name | Description | Value |
|-|-|-|
| days | the number of days for the retention in days. A value of 0 will retain the events indefinitely. | int (required)Constraints:Min value = 0 |
| enabled | a value indicating whether the retention policy is enabled. | bool (required) |
## Microsoft.Insights/metricAlerts@2018-03-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/metricAlerts@2018-03-01"
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
          actionGroupId = "string"
          webHookProperties = {}
        }
      ]
      autoMitigate = bool
      criteria = {
        odata.type = "string"
        // For remaining properties, see MetricAlertCriteria objects
      }
      description = "string"
      enabled = bool
      evaluationFrequency = "string"
      scopes = [
        "string"
      ]
      severity = int
      targetResourceRegion = "string"
      targetResourceType = "string"
      windowSize = "string"
    }
  })
}

```

### metricAlerts

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required)Character limit: 1-260Valid characters:Can't use:*#&+:<>?@%{}\/or control charactersCan't end with space or period. |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | The alert rule properties of the resource. | MetricAlertProperties(required) |


### MetricAlertProperties

| Name | Description | Value |
|-|-|-|
| actions | the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved. | MetricAlertAction[] |
| autoMitigate | the flag that indicates whether the alert should be auto resolved or not. The default is true. | bool |
| criteria | defines the specific alert criteria information. | MetricAlertCriteria(required) |
| description | the description of the metric alert that will be included in the alert email. | string |
| enabled | the flag that indicates whether the metric alert is enabled. | bool (required) |
| evaluationFrequency | how often the metric alert is evaluated represented in ISO 8601 duration format. | string (required) |
| scopes | the list of resource id's that this metric alert is scoped to. | string[] (required) |
| severity | Alert severity {0, 1, 2, 3, 4} | int (required) |
| targetResourceRegion | the region of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource. | string |
| targetResourceType | the resource type of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource. | string |
| windowSize | the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. | string (required) |


### MetricAlertAction

| Name | Description | Value |
|-|-|-|
| actionGroupId | the id of the action group to use. | string |
| webHookProperties | This field allows specifying custom properties, which would be appended to the alert payload sent as input to the webhook. | object |


### MetricAlertCriteria

| Name | Description | Value |
|-|-|-|
| odata.type | Set the object type | Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteriaMicrosoft.Azure.Monitor.SingleResourceMultipleMetricCriteriaMicrosoft.Azure.Monitor.WebtestLocationAvailabilityCriteria(required) |


### MetricAlertMultipleResourceMultipleMetricCriteria

| Name | Description | Value |
|-|-|-|
| odata.type | specifies the type of the alert criteria. | 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria' (required) |
| allOf | the list of multiple metric criteria for this 'all of' operation. | MultiMetricCriteria[] |


### MultiMetricCriteria

| Name | Description | Value |
|-|-|-|
| dimensions | List of dimension conditions. | MetricDimension[] |
| metricName | Name of the metric. | string (required) |
| metricNamespace | Namespace of the metric. | string |
| name | Name of the criteria. | string (required) |
| skipMetricValidation | Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped. | bool |
| timeAggregation | the criteria time aggregation types. | 'Average''Count''Maximum''Minimum''Total' (required) |
| criterionType | Set the object type | DynamicThresholdCriterionStaticThresholdCriterion(required) |


### MetricDimension

| Name | Description | Value |
|-|-|-|
| name | Name of the dimension. | string (required) |
| operator | the dimension operator. Only 'Include' and 'Exclude' are supported | string (required) |
| values | list of dimension values. | string[] (required) |


### DynamicMetricCriteria

| Name | Description | Value |
|-|-|-|
| criterionType | Specifies the type of threshold criteria | 'DynamicThresholdCriterion' (required) |
| alertSensitivity | The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern. | 'High''Low''Medium' (required) |
| failingPeriods | The minimum number of violations required within the selected lookback time window required to raise an alert. | DynamicThresholdFailingPeriods(required) |
| ignoreDataBefore | Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format) | string |
| operator | The operator used to compare the metric value against the threshold. | 'GreaterOrLessThan''GreaterThan''LessThan' (required) |


### DynamicThresholdFailingPeriods

| Name | Description | Value |
|-|-|-|
| minFailingPeriodsToAlert | The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods. | int (required) |
| numberOfEvaluationPeriods | The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points. | int (required) |


### MetricCriteria

| Name | Description | Value |
|-|-|-|
| criterionType | Specifies the type of threshold criteria | 'DynamicThresholdCriterion''StaticThresholdCriterion' (required) |
| dimensions | List of dimension conditions. | MetricDimension[] |
| metricName | Name of the metric. | string (required) |
| metricNamespace | Namespace of the metric. | string |
| name | Name of the criteria. | string (required) |
| operator | the criteria operator. | 'Equals''GreaterThan''GreaterThanOrEqual''LessThan''LessThanOrEqual' (required) |
| skipMetricValidation | Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped. | bool |
| threshold | the criteria threshold value that activates the alert. | int (required) |
| timeAggregation | the criteria time aggregation types. | 'Average''Count''Maximum''Minimum''Total' (required) |


### MetricAlertSingleResourceMultipleMetricCriteria

| Name | Description | Value |
|-|-|-|
| odata.type | specifies the type of the alert criteria. | 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria' (required) |
| allOf | The list of metric criteria for this 'all of' operation. | MetricCriteria[] |


### WebtestLocationAvailabilityCriteria

| Name | Description | Value |
|-|-|-|
| odata.type | specifies the type of the alert criteria. | 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria' (required) |
| componentId | The Application Insights resource Id. | string (required) |
| failedLocationCount | The number of failed locations. | int (required) |
| webTestId | The Application Insights web test Id. | string (required) |
## Microsoft.Insights/myWorkbooks@2021-03-08

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/myWorkbooks@2021-03-08"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  identity {
    identity_ids = []
  body = jsonencode({
    properties = {
      category = "string"
      displayName = "string"
      serializedData = "string"
      sourceId = "string"
      storageUri = "string"
      tags = [
        "string"
      ]
      version = "string"
    }
    kind = "string"
    etag = {}
      type =  "UserAssigned"
    }
  })
}

```

### myWorkbooks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| kind | The kind of workbook. Choices are user and shared. | 'shared''user' |
| scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
| etag | Resource etag | object |
| identity | Identity used for BYOS | MyWorkbookManagedIdentity |
| properties | Metadata describing a workbook for an Azure resource. | MyWorkbookProperties |


### MyWorkbookManagedIdentity

| Name | Description | Value |
|-|-|-|
| type | The identity type. | 'None''UserAssigned' |
| userAssignedIdentities | Customer Managed Identity | MyWorkbookUserAssignedIdentities |


### MyWorkbookProperties

| Name | Description | Value |
|-|-|-|
| category | Workbook category, as defined by the user at creation time. | string (required) |
| displayName | The user-defined name of the private workbook. | string (required) |
| serializedData | Configuration of this particular private workbook. Configuration data is a string containing valid JSON | string (required) |
| sourceId | Optional resourceId for a source resource. | string |
| storageUri | BYOS Storage Account URI | string |
| tags | A list of 0 or more tags that are associated with this private workbook definition | string[] |
| version | This instance's version of the data model. This can change as new features are added that can be marked private workbook. | string |
## Microsoft.Insights/privateLinkScopes/privateEndpointConnections@2021-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/privateLinkScopes/privateEndpointConnections@2021-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      privateEndpoint = {}
      privateLinkServiceConnectionState = {
        actionsRequired = "string"
        description = "string"
        status = "string"
      }
    }
  })
}

```

### privateLinkScopes/privateEndpointConnections

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateLinkScopes |
| properties | Resource properties. | PrivateEndpointConnectionProperties |


### PrivateEndpointConnectionProperties

| Name | Description | Value |
|-|-|-|
| privateEndpoint | The resource of private end point. | PrivateEndpoint |
| privateLinkServiceConnectionState | A collection of information about the state of the connection between service consumer and provider. | PrivateLinkServiceConnectionState(required) |


### PrivateLinkServiceConnectionState

| Name | Description | Value |
|-|-|-|
| actionsRequired | A message indicating if changes on the service provider require any updates on the consumer. | string |
| description | The reason for approval/rejection of the connection. | string |
| status | Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. | 'Approved''Pending''Rejected' |
## Microsoft.Insights/privateLinkScopes/scopedResources@2021-07-01-preview

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/privateLinkScopes/scopedResources@2021-07-01-preview"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      linkedResourceId = "string"
    }
  })
}

```

### privateLinkScopes/scopedResources

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateLinkScopes |
| properties | Resource properties. | ScopedResourceProperties |


### ScopedResourceProperties

| Name | Description | Value |
|-|-|-|
| linkedResourceId | The resource id of the scoped Azure monitor resource. | string |
## Microsoft.Insights/scheduledQueryRules@2023-03-15-preview

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
## Microsoft.Insights/webtests@2022-06-15

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/webtests@2022-06-15"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      Configuration = {
        WebTest = "string"
      }
      Description = "string"
      Enabled = bool
      Frequency = int
      Kind = "string"
      Locations = [
        {
          Id = "string"
        }
      ]
      Name = "string"
      Request = {
        FollowRedirects = bool
        Headers = [
          {
            key = "string"
            value = "string"
          }
        ]
        HttpVerb = "string"
        ParseDependentRequests = bool
        RequestBody = "string"
        RequestUrl = "string"
      }
      RetryEnabled = bool
      SyntheticMonitorId = "string"
      Timeout = int
      ValidationRules = {
        ContentValidation = {
          ContentMatch = "string"
          IgnoreCase = bool
          PassIfTextFound = bool
        }
        ExpectedHttpStatusCode = int
        IgnoreHttpStatusCode = bool
        SSLCertRemainingLifetimeCheck = int
        SSLCheck = bool
      }
    }
    kind = "string"
  })
}

```

### webtests

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| kind | The kind of WebTest that this web test watches. Choices are ping, multistep and standard. | 'multistep''ping''standard' |
| properties | Metadata describing a web test for an Azure resource. | WebTestProperties |


### WebTestProperties

| Name | Description | Value |
|-|-|-|
| Configuration | An XML configuration specification for a WebTest. | WebTestPropertiesConfiguration |
| Description | User defined description for this WebTest. | string |
| Enabled | Is the test actively being monitored. | bool |
| Frequency | Interval in seconds between test runs for this WebTest. Default value is 300. | int |
| Kind | The kind of web test this is, valid choices are ping, multistep and standard. | 'multistep''ping''standard' (required) |
| Locations | A list of where to physically run the tests from to give global coverage for accessibility of your application. | WebTestGeolocation[] (required) |
| Name | User defined name if this WebTest. | string (required) |
| Request | The collection of request properties | WebTestPropertiesRequest |
| RetryEnabled | Allow for retries should this WebTest fail. | bool |
| SyntheticMonitorId | Unique ID of this WebTest. This is typically the same value as the Name field. | string (required) |
| Timeout | Seconds until this WebTest will timeout and fail. Default value is 30. | int |
| ValidationRules | The collection of validation rule properties | WebTestPropertiesValidationRules |


### WebTestPropertiesConfiguration

| Name | Description | Value |
|-|-|-|
| WebTest | The XML specification of a WebTest to run against an application. | string |


### WebTestGeolocation

| Name | Description | Value |
|-|-|-|
| Id | Location ID for the WebTest to run from. | string |


### WebTestPropertiesRequest

| Name | Description | Value |
|-|-|-|
| FollowRedirects | Follow redirects for this web test. | bool |
| Headers | List of headers and their values to add to the WebTest call. | HeaderField[] |
| HttpVerb | Http verb to use for this web test. | string |
| ParseDependentRequests | Parse Dependent request for this WebTest. | bool |
| RequestBody | Base64 encoded string body to send with this web test. | string |
| RequestUrl | Url location to test. | string |


### HeaderField

| Name | Description | Value |
|-|-|-|
| key | The name of the header. | string |
| value | The value of the header. | string |


### WebTestPropertiesValidationRules

| Name | Description | Value |
|-|-|-|
| ContentValidation | The collection of content validation properties | WebTestPropertiesValidationRulesContentValidation |
| ExpectedHttpStatusCode | Validate that the WebTest returns the http status code provided. | int |
| IgnoreHttpStatusCode | When set, validation will ignore the status code. | bool |
| SSLCertRemainingLifetimeCheck | A number of days to check still remain before the the existing SSL cert expires.  Value must be positive and the SSLCheck must be set to true. | int |
| SSLCheck | Checks to see if the SSL cert is still valid. | bool |


### WebTestPropertiesValidationRulesContentValidation

| Name | Description | Value |
|-|-|-|
| ContentMatch | Content to look for in the return of the WebTest.  Must not be null or empty. | string |
| IgnoreCase | When set, this value makes the ContentMatch validation case insensitive. | bool |
| PassIfTextFound | When true, validation will pass if there is a match for the ContentMatch string.  If false, validation will fail if there is a match | bool |
## Microsoft.Insights/workbooks@2023-06-01

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/workbooks@2023-06-01"
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
      category = "string"
      description = "string"
      displayName = "string"
      serializedData = "string"
      sourceId = "string"
      storageUri = "string"
      tags = [
        "string"
      ]
      version = "string"
    }
    kind = "shared"
    etag = "string"
  })
}

```

### workbooks

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | The geo-location where the resource lives | string (required) |
| tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
| kind | The kind of workbook. Only valid value is shared. | 'shared' |
| etag | Resource etag | string |
| identity | Identity used for BYOS | WorkbookResourceIdentity |
| properties | Metadata describing a workbook for an Azure resource. | WorkbookProperties |


### WorkbookResourceIdentity

| Name | Description | Value |
|-|-|-|
| type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
| userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |


### WorkbookProperties

| Name | Description | Value |
|-|-|-|
| category | Workbook category, as defined by the user at creation time. | string (required) |
| description | The description of the workbook. | string |
| displayName | The user-defined name (display name) of the workbook. | string (required) |
| serializedData | Configuration of this particular workbook. Configuration data is a string containing valid JSON | string (required) |
| sourceId | ResourceId for a source resource. | string |
| storageUri | The resourceId to the storage account when bring your own storage is used | string |
| tags | Being deprecated, please use the other tags field | string[] |
| version | Workbook schema version format, like 'Notebook/1.0', which should match the workbook in serializedData | string |
## Microsoft.Insights/workbooktemplates@2020-11-20

```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Insights/workbooktemplates@2020-11-20"
  name = "string"
  location = "string"
  parent_id = "string"
  tags = {
    tagName1 = "tagValue1"
    tagName2 = "tagValue2"
  }
  body = jsonencode({
    properties = {
      author = "string"
      galleries = [
        {
          category = "string"
          name = "string"
          order = int
          resourceType = "string"
          type = "string"
        }
      ]
      localized = {}
      priority = int
    }
  })
}

```

### workbooktemplates

| Name | Description | Value |
|-|-|-|
| name | The resource name | string (required) |
| location | Resource location | string (required) |
| tags | Resource tags | Dictionary of tag names and values. SeeTags in templates |
| properties | Metadata describing a workbook template for an Azure resource. | WorkbookTemplateProperties |


### WorkbookTemplateProperties

| Name | Description | Value |
|-|-|-|
| author | Information about the author of the workbook template. | string |
| galleries | Workbook galleries supported by the template. | WorkbookTemplateGallery[] (required) |
| localized | Key value pair of localized gallery. Each key is the locale code of languages supported by the Azure portal. | object |
| priority | Priority of the template. Determines which template to open when a workbook gallery is opened in viewer mode. | int |
| templateData | Valid JSON object containing workbook template payload. | For Bicep, you can use theany()function.(required) |


### WorkbookTemplateGallery

| Name | Description | Value |
|-|-|-|
| category | Category for the gallery. | string |
| name | Name of the workbook template in the gallery. | string |
| order | Order of the template within the gallery. | int |
| resourceType | Azure resource type supported by the gallery. | string |
| type | Type of workbook supported by the workbook template. | string |
